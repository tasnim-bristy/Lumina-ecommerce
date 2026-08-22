<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * GET /products — filtering, search, sorting and pagination per
     * API_CONTRACT.md: q, category, min_price, max_price, brands[],
     * rating_min, sort, page, per_page.
     */
    public function index(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'q' => 'nullable|string|max:255',
            'category' => 'nullable|string|max:255',
            'min_price' => 'nullable|numeric|min:0',
            'max_price' => 'nullable|numeric|min:0',
            'brands' => 'nullable|array',
            'brands.*' => 'string|max:255',
            'rating_min' => 'nullable|numeric|min:0|max:5',
            'sort' => 'nullable|in:price_asc,price_desc,newest,rating,popularity',
            'page' => 'nullable|integer|min:1',
            'per_page' => 'nullable|integer|min:1|max:100',
        ]);

        $query = Product::query()->with('category');

        if (! empty($validated['q'])) {
            $term = '%'.$validated['q'].'%';
            $query->where(function ($inner) use ($term) {
                $inner->where('name', 'like', $term)
                    ->orWhere('brand', 'like', $term)
                    ->orWhere('description', 'like', $term);
            });
        }

        if (! empty($validated['category'])) {
            $category = Category::where('slug', $validated['category'])->first();

            // Filtering by category also matches its descendants, so
            // `?category=electronics` includes the "headphones" subcategory.
            $query->when(
                $category,
                fn ($q) => $q->whereIn('category_id', $category->descendantIds()),
                fn ($q) => $q->whereRaw('1 = 0'),
            );
        }

        if (isset($validated['min_price'])) {
            $query->where('price', '>=', $validated['min_price']);
        }

        if (isset($validated['max_price'])) {
            $query->where('price', '<=', $validated['max_price']);
        }

        if (! empty($validated['brands'])) {
            $query->whereIn('brand', $validated['brands']);
        }

        if (isset($validated['rating_min'])) {
            $query->where('rating_avg', '>=', $validated['rating_min']);
        }

        match ($validated['sort'] ?? null) {
            'price_asc' => $query->orderBy('price', 'asc'),
            'price_desc' => $query->orderBy('price', 'desc'),
            'newest' => $query->orderBy('created_at', 'desc'),
            'rating' => $query->orderBy('rating_avg', 'desc')->orderBy('rating_count', 'desc'),
            'popularity' => $query->orderBy('rating_count', 'desc')->orderBy('rating_avg', 'desc'),
            default => $query->orderBy('created_at', 'desc'),
        };

        $perPage = (int) ($validated['per_page'] ?? 20);
        $paginator = $query->paginate($perPage);

        return response()->json([
            'data' => ProductResource::collection($paginator->items()),
            'meta' => [
                'current_page' => $paginator->currentPage(),
                'last_page' => $paginator->lastPage(),
                'per_page' => $paginator->perPage(),
                'total' => $paginator->total(),
            ],
        ]);
    }

    /**
     * GET /products/{slug} — full detail shape.
     */
    public function show(string $slug): JsonResponse
    {
        $product = Product::query()->with('category')->where('slug', $slug)->firstOrFail();

        return response()->json([
            'data' => (new ProductResource($product))->detailed(),
        ]);
    }
}
