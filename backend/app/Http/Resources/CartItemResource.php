<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property \App\Models\CartItem $resource
 */
class CartItemResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'product' => new ProductResource($this->resource->product),
            'quantity' => (int) $this->quantity,
            'line_total' => $this->resource->lineTotal(),
        ];
    }
}
