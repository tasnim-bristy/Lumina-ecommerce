<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ReviewResource;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    /**
     * GET /products/{id}/reviews — paginated, newest first.
     */
    public function index(Request $request, Product $product): JsonResponse
    {
        $validated = $request->validate([
            'page' => 'nullable|integer|min:1',
            'per_page' => 'nullable|integer|min:1|max:100',
        ]);

        $paginator = $product->reviews()
            ->with('user')
            ->latest()
            ->paginate((int) ($validated['per_page'] ?? 20));

        return response()->json([
            'data' => ReviewResource::collection($paginator->items()),
            'meta' => [
                'current_page' => $paginator->currentPage(),
                'last_page' => $paginator->lastPage(),
                'per_page' => $paginator->perPage(),
                'total' => $paginator->total(),
            ],
        ]);
    }

    /**
     * POST /products/{id}/reviews — auth required. Recomputes the product's
     * denormalized rating_avg/rating_count immediately afterward.
     */
    public function store(Request $request, Product $product): JsonResponse
    {
        $validated = $request->validate([
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'nullable|string|max:2000',
        ]);

        $review = $product->reviews()->create([
            'user_id' => $request->user()->id,
            'rating' => $validated['rating'],
            'comment' => $validated['comment'] ?? null,
        ]);

        $product->refreshRatingAggregates();
        $review->load('user');

        return response()->json([
            'data' => new ReviewResource($review),
        ], 201);
    }
}
