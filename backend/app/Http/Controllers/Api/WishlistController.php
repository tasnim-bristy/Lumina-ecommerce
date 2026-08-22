<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Concerns\ResolvesActor;
use App\Http\Controllers\Controller;
use App\Http\Resources\WishlistItemResource;
use App\Models\Wishlist;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class WishlistController extends Controller
{
    use ResolvesActor;

    /**
     * GET /wishlist — works for both guests and logged-in users.
     */
    public function index(Request $request): JsonResponse
    {
        $items = $this->scopeToActor(Wishlist::query()->with('product.category'), $request)
            ->latest()
            ->get();

        return response()->json([
            'data' => WishlistItemResource::collection($items),
        ]);
    }

    /**
     * POST /wishlist — {product_id}. Idempotent: adding an already-wishlisted
     * product just returns the existing row instead of erroring.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'product_id' => 'required|integer|exists:products,id',
        ]);

        $identity = $this->actorIdentity($request);

        $item = Wishlist::query()->firstOrCreate([
            ...$identity,
            'product_id' => $validated['product_id'],
        ]);

        $item->load('product.category');

        return response()->json([
            'data' => new WishlistItemResource($item),
        ], 201);
    }

    /**
     * DELETE /wishlist/{product_id}
     */
    public function destroy(Request $request, int $productId): JsonResponse
    {
        $deleted = $this->scopeToActor(Wishlist::query(), $request)
            ->where('product_id', $productId)
            ->delete();

        if ($deleted === 0) {
            return response()->json(['message' => 'Wishlist item not found.'], 404);
        }

        return response()->json([
            'data' => ['message' => 'Removed from wishlist.'],
        ]);
    }

    /**
     * POST /wishlist/merge — auth required. Folds the given product_ids (the
     * client's locally-cached guest wishlist) AND any rows still stored under
     * the request's X-Guest-Token into the now-authenticated user's wishlist,
     * then deletes the guest-owned rows.
     */
    public function merge(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'product_ids' => 'sometimes|array',
            'product_ids.*' => 'integer|exists:products,id',
        ]);

        $user = $request->user();
        $productIds = collect($validated['product_ids'] ?? []);

        $guestToken = $this->guestToken($request);
        if ($guestToken) {
            $productIds = $productIds->merge(
                Wishlist::query()->where('guest_token', $guestToken)->pluck('product_id')
            );
        }

        foreach ($productIds->unique() as $productId) {
            Wishlist::query()->firstOrCreate([
                'user_id' => $user->id,
                'guest_token' => null,
                'product_id' => $productId,
            ]);
        }

        if ($guestToken) {
            Wishlist::query()->where('guest_token', $guestToken)->delete();
        }

        $items = Wishlist::query()->where('user_id', $user->id)->with('product.category')->latest()->get();

        return response()->json([
            'data' => WishlistItemResource::collection($items),
        ]);
    }
}
