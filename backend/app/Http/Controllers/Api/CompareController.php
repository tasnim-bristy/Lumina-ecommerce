<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CompareController extends Controller
{
    /**
     * GET /products/compare?ids=1,2,3 — side-by-side comparison. Returns the
     * detailed shape for each product plus the union of every attribute key
     * present across them, so the frontend can render one comparison row per
     * key even when products don't share every attribute.
     */
    public function show(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'ids' => 'required|string',
        ]);

        $ids = array_values(array_unique(array_filter(array_map(
            static fn ($id) => (int) trim($id),
            explode(',', $validated['ids'])
        ))));

        if (empty($ids)) {
            return response()->json([
                'data' => ['products' => [], 'attribute_keys' => []],
            ]);
        }

        $products = Product::query()->with('category')->whereIn('id', $ids)->get()
            ->sortBy(fn (Product $product) => array_search($product->id, $ids))
            ->values();

        $attributeKeys = $products
            ->flatMap(fn (Product $product) => array_keys($product->attributes ?? []))
            ->unique()
            ->sort()
            ->values()
            ->all();

        return response()->json([
            'data' => [
                'products' => $products->map(fn (Product $product) => (new ProductResource($product))->detailed()),
                'attribute_keys' => $attributeKeys,
            ],
        ]);
    }
}
