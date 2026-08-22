<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    /**
     * GET /brands?category=slug — a facet list of distinct brands (and their
     * product counts), optionally scoped to a category and its descendants.
     */
    public function index(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'category' => 'nullable|string|max:255',
        ]);

        $query = Product::query()->whereNotNull('brand')->where('brand', '!=', '');

        if (! empty($validated['category'])) {
            $category = Category::where('slug', $validated['category'])->first();

            $query->when(
                $category,
                fn ($q) => $q->whereIn('category_id', $category->descendantIds()),
                fn ($q) => $q->whereRaw('1 = 0'),
            );
        }

        $brands = $query
            ->selectRaw('brand as name, count(*) as count')
            ->groupBy('brand')
            ->orderByDesc('count')
            ->orderBy('brand')
            ->get()
            ->map(fn ($row) => ['name' => $row->name, 'count' => (int) $row->count])
            ->values();

        return response()->json(['data' => $brands]);
    }
}
