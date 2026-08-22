<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Concerns\ResolvesActor;
use App\Http\Controllers\Controller;
use App\Http\Resources\CartResource;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class CartController extends Controller
{
    use ResolvesActor;

    /**
     * GET /cart — creates an empty cart for the actor on first touch so the
     * frontend always has a cart id to reference.
     */
    public function index(Request $request): JsonResponse
    {
        $cart = $this->currentCart($request);
        $cart->load('items.product.category');

        return response()->json(['data' => new CartResource($cart)]);
    }

    /**
     * POST /cart/items — {product_id, quantity}. Increments quantity if the
     * product is already in the cart rather than creating a duplicate row.
     */
    public function storeItem(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'product_id' => 'required|integer|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        $product = Product::findOrFail($validated['product_id']);
        $cart = $this->currentCart($request);

        $item = $cart->items()->where('product_id', $product->id)->first();
        $newQuantity = ($item?->quantity ?? 0) + $validated['quantity'];

        $this->assertInStock($product, $newQuantity);

        if ($item) {
            $item->update(['quantity' => $newQuantity]);
        } else {
            $item = $cart->items()->create([
                'product_id' => $product->id,
                'quantity' => $newQuantity,
            ]);
        }

        $cart->load('items.product.category');

        return response()->json(['data' => new CartResource($cart)], 201);
    }

    /**
     * PATCH /cart/items/{id} — {quantity}
     */
    public function updateItem(Request $request, int $itemId): JsonResponse
    {
        $validated = $request->validate([
            'quantity' => 'required|integer|min:1',
        ]);

        $cart = $this->currentCart($request);
        $item = $cart->items()->with('product')->where('id', $itemId)->firstOrFail();

        $this->assertInStock($item->product, $validated['quantity']);

        $item->update(['quantity' => $validated['quantity']]);
        $cart->load('items.product.category');

        return response()->json(['data' => new CartResource($cart)]);
    }

    /**
     * DELETE /cart/items/{id}
     */
    public function destroyItem(Request $request, int $itemId): JsonResponse
    {
        $cart = $this->currentCart($request);
        $deleted = $cart->items()->where('id', $itemId)->delete();

        if ($deleted === 0) {
            return response()->json(['message' => 'Cart item not found.'], 404);
        }

        $cart->load('items.product.category');

        return response()->json(['data' => new CartResource($cart)]);
    }

    /**
     * POST /cart/merge — auth required. Merges the given {items:[{product_id,
     * quantity}]} (the client's locally-cached guest cart) AND any cart still
     * stored under the request's X-Guest-Token into the user's cart,
     * summing quantities for products present in both, then discards the
     * guest cart.
     */
    public function merge(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'items' => 'sometimes|array',
            'items.*.product_id' => 'required_with:items|integer|exists:products,id',
            'items.*.quantity' => 'required_with:items|integer|min:1',
        ]);

        $user = $request->user();
        $userCart = Cart::query()->firstOrCreate(['user_id' => $user->id]);

        $incoming = collect($validated['items'] ?? [])
            ->mapWithKeys(fn ($row) => [$row['product_id'] => $row['quantity']]);

        $guestToken = $this->guestToken($request);
        if ($guestToken) {
            $guestCart = Cart::query()->where('guest_token', $guestToken)->first();

            if ($guestCart) {
                foreach ($guestCart->items as $guestItem) {
                    $incoming[$guestItem->product_id] = ($incoming[$guestItem->product_id] ?? 0) + $guestItem->quantity;
                }
            }
        }

        foreach ($incoming as $productId => $quantity) {
            $product = Product::find($productId);
            if (! $product || $product->stock < 1) {
                continue;
            }

            $item = $userCart->items()->where('product_id', $productId)->first();
            $newQuantity = min(($item?->quantity ?? 0) + $quantity, $product->stock);

            if ($item) {
                $item->update(['quantity' => $newQuantity]);
            } else {
                $userCart->items()->create(['product_id' => $productId, 'quantity' => $newQuantity]);
            }
        }

        if ($guestToken) {
            Cart::query()->where('guest_token', $guestToken)->delete();
        }

        $userCart->load('items.product.category');

        return response()->json(['data' => new CartResource($userCart)]);
    }

    protected function currentCart(Request $request): Cart
    {
        $identity = $this->actorIdentity($request);

        return Cart::query()->firstOrCreate($identity);
    }

    /**
     * @throws ValidationException
     */
    protected function assertInStock(Product $product, int $requestedQuantity): void
    {
        if ($requestedQuantity > $product->stock) {
            throw ValidationException::withMessages([
                'quantity' => ["Only {$product->stock} unit(s) of \"{$product->name}\" in stock."],
            ]);
        }
    }
}
