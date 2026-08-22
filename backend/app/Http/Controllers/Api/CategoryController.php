<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\JsonResponse;

class CategoryController extends Controller
{
    /**
     * GET /categories — the full nested tree (top-level categories with their
     * immediate subcategories nested under `children`).
     */
    public function index(): JsonResponse
    {
        $categories = Category::query()
            ->whereNull('parent_id')
            ->with('children')
            ->orderBy('position')
            ->orderBy('name')
            ->get();

        return response()->json([
            'data' => CategoryResource::collection($categories),
        ]);
    }
}
