<?php

namespace App\Http\Resources;

use App\Support\Formatting;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property \App\Models\Wishlist $resource
 */
class WishlistItemResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'product' => new ProductResource($this->resource->product),
            'added_at' => Formatting::isoDate($this->created_at),
        ];
    }
}
