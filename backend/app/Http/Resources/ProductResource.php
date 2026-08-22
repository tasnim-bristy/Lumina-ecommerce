<?php

namespace App\Http\Resources;

use App\Support\Formatting;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property \App\Models\Product $resource
 */
class ProductResource extends JsonResource
{
    /**
     * Toggles between the "list item" shape and the "detail" shape (which adds
     * description/images/sku/reviews_summary) per API_CONTRACT.md. A single
     * resource class covers both so the list-item fields can never drift
     * between the two representations.
     */
    protected bool $detailed = false;

    public function detailed(): static
    {
        $this->detailed = true;

        return $this;
    }

    public function toArray(Request $request): array
    {
        $product = $this->resource;

        $data = [
            'id' => $product->id,
            'name' => $product->name,
            'slug' => $product->slug,
            'brand' => $product->brand,
            // Always present per the contract — lazy-loads if a caller forgot
            // to eager-load `category` (small N+1 risk, but never a missing field).
            'category' => $product->category ? [
                'id' => $product->category->id,
                'name' => $product->category->name,
                'slug' => $product->category->slug,
            ] : null,
            'price' => (float) $product->price,
            'compare_at_price' => $product->compare_at_price !== null ? (float) $product->compare_at_price : null,
            'currency' => $product->currency,
            'rating_avg' => (float) $product->rating_avg,
            'rating_count' => (int) $product->rating_count,
            'stock' => (int) $product->stock,
            'is_featured' => (bool) $product->is_featured,
            'thumbnail' => $product->thumbnail,
            'attributes' => $product->attributes ?? [],
            'created_at' => Formatting::isoDate($product->created_at),
        ];

        if ($this->detailed) {
            $data['description'] = $product->description;
            $data['images'] = $product->images ?? [];
            $data['sku'] = $product->sku;
            $data['reviews_summary'] = [
                'avg' => (float) $product->rating_avg,
                'count' => (int) $product->rating_count,
                'breakdown' => $this->ratingBreakdown($product),
            ];
        }

        return $data;
    }

    /**
     * @return array<string, int> rating (1-5, as string keys to match the
     *                             contract's example) => number of reviews
     */
    protected function ratingBreakdown($product): array
    {
        $counts = $product->reviews()
            ->selectRaw('rating, count(*) as total')
            ->groupBy('rating')
            ->pluck('total', 'rating');

        $breakdown = [];
        for ($rating = 5; $rating >= 1; $rating--) {
            $breakdown[(string) $rating] = (int) ($counts[$rating] ?? 0);
        }

        return $breakdown;
    }
}
