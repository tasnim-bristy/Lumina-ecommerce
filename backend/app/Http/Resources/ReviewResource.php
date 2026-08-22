<?php

namespace App\Http\Resources;

use App\Support\Formatting;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property \App\Models\Review $resource
 */
class ReviewResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user_name' => $this->displayName(),
            'rating' => (int) $this->rating,
            'comment' => $this->comment,
            'created_at' => Formatting::isoDate($this->created_at),
        ];
    }

    /**
     * "Jamie L." style display name — first name plus last-initial — so
     * reviews never leak a reviewer's full name.
     */
    protected function displayName(): string
    {
        $name = trim((string) ($this->resource->user->name ?? 'Guest'));
        $parts = preg_split('/\s+/', $name);

        if (count($parts) < 2) {
            return $name;
        }

        $first = array_shift($parts);
        $lastInitial = mb_substr(array_pop($parts), 0, 1);

        return "{$first} {$lastInitial}.";
    }
}
