<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property \App\Models\Category $resource
 */
class CategoryResource extends JsonResource
{
    /**
     * Per the contract, a category's `children` are the same shape MINUS a
     * further `children` key — the tree is only ever rendered two levels deep
     * (top-level category -> immediate subcategories). This flag controls
     * whether *this* instance renders its own children key.
     */
    protected bool $includeChildren = true;

    public function withoutChildren(): static
    {
        $this->includeChildren = false;

        return $this;
    }

    public function toArray(Request $request): array
    {
        $data = [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'icon' => $this->icon,
            'parent_id' => $this->parent_id,
            'hero_image' => $this->hero_image,
        ];

        if ($this->includeChildren) {
            $data['children'] = $this->resource->children
                ->map(fn ($child) => (new self($child))->withoutChildren()->toArray($request))
                ->values()
                ->all();
        }

        return $data;
    }
}
