<?php

namespace App\Http\Resources;

use App\Support\Formatting;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property \App\Models\Order $resource
 */
class OrderResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'order_number' => $this->order_number,
            'status' => $this->status,
            'subtotal' => (float) $this->subtotal,
            'total' => (float) $this->total,
            'currency' => $this->currency,
            'shipping_address' => $this->shipping_address,
            'payment_method' => $this->payment_method,
            'items' => OrderItemResource::collection($this->resource->items),
            'created_at' => Formatting::isoDate($this->created_at),
        ];
    }
}
