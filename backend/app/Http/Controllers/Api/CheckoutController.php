<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Concerns\ResolvesActor;
use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use App\Models\Cart;
use App\Models\Order;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class CheckoutController extends Controller
{
    use ResolvesActor;

    /**
     * POST /checkout — {shipping_address, payment_method}. Not marked "auth
     * required" in the contract, so guest checkout is allowed (order rows
     * carry a guest_token exactly like cart/wishlist rows).  Builds the order
     * from the actor's current cart, snapshotting product name/price/
     * thumbnail on each line item, decrements stock, then empties the cart.
     */
    public function store(Request $request): JsonResponse
    {
        // The contract doesn't pin down shipping_address's exact sub-fields,
        // so validation there is deliberately shape-agnostic (non-empty
        // object) rather than guessing field names that might not match what
        // the frontend actually sends. payment_method IS pinned down — it
        // must be one of config/payment_methods.php's keys, the same list
        // the frontend renders as selectable cards (see
        // frontend/src/app/core/models/payment-method.model.ts).
        $validated = $request->validate([
            'shipping_address' => 'required|array|min:1',
            'payment_method' => ['required', 'string', Rule::in(array_keys(config('payment_methods')))],
        ]);

        $identity = $this->actorIdentity($request);
        $cart = Cart::query()->where($identity)->with('items.product')->first();

        if (! $cart || $cart->items->isEmpty()) {
            throw ValidationException::withMessages([
                'cart' => ['Your cart is empty.'],
            ]);
        }

        foreach ($cart->items as $item) {
            if ($item->quantity > $item->product->stock) {
                throw ValidationException::withMessages([
                    'cart' => ["\"{$item->product->name}\" only has {$item->product->stock} unit(s) left in stock."],
                ]);
            }
        }

        $subtotal = round($cart->items->sum(fn ($item) => $item->quantity * (float) $item->product->price), 2);

        $order = Order::create([
            'order_number' => 'LUM-'.now()->format('ymd').'-'.Str::upper(Str::random(6)),
            ...$identity,
            'status' => 'processing',
            'subtotal' => $subtotal,
            'total' => $subtotal,
            'currency' => $cart->items->first()->product->currency ?? 'BDT',
            'shipping_address' => $validated['shipping_address'],
            'payment_method' => $validated['payment_method'],
        ]);

        foreach ($cart->items as $item) {
            $order->items()->create([
                'product_id' => $item->product->id,
                'product_name' => $item->product->name,
                'product_thumbnail' => $item->product->thumbnail,
                'unit_price' => $item->product->price,
                'quantity' => $item->quantity,
                'line_total' => round($item->quantity * (float) $item->product->price, 2),
            ]);

            $item->product->decrement('stock', $item->quantity);
        }

        $cart->items()->delete();

        $order->load('items');

        return response()->json(['data' => new OrderResource($order)], 201);
    }

    /**
     * GET /orders — auth required.
     */
    public function index(Request $request): JsonResponse
    {
        $paginator = Order::query()
            ->where('user_id', $request->user()->id)
            ->with('items')
            ->latest()
            ->paginate((int) $request->query('per_page', 20));

        return response()->json([
            'data' => OrderResource::collection($paginator->items()),
            'meta' => [
                'current_page' => $paginator->currentPage(),
                'last_page' => $paginator->lastPage(),
                'per_page' => $paginator->perPage(),
                'total' => $paginator->total(),
            ],
        ]);
    }
}
