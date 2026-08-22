<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    /**
     * GET /search/suggestions?q= — lightweight typeahead. Deliberately not
     * paginated (top 5 of each) since the frontend debounces and re-queries
     * on every keystroke.
     */
    public function suggestions(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'q' => 'required|string|min:1|max:255',
        ]);

        $term = '%'.$validated['q'].'%';

        $products = Product::query()
            ->where(function ($q) use ($term) {
                $q->where('name', 'like', $term)
                    ->orWhere('brand', 'like', $term);
            })
            ->orderByDesc('rating_count')
            ->limit(5)
            ->get()
            ->map(fn (Product $product) => [
                'id' => $product->id,
                'name' => $product->name,
                'slug' => $product->slug,
                'thumbnail' => $product->thumbnail,
                'price' => (float) $product->price,
            ]);

        $categories = Category::query()
            ->where('name', 'like', $term)
            ->orderBy('name')
            ->limit(5)
            ->get()
            ->map(fn (Category $category) => [
                'id' => $category->id,
                'name' => $category->name,
                'slug' => $category->slug,
            ]);

        return response()->json([
            'data' => [
                'products' => $products,
                'categories' => $categories,
            ],
        ]);
    }
}
