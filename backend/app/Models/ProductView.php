<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductView extends Model
{
    protected $fillable = [
        'user_id',
        'guest_token',
        'product_id',
        'view_count',
        'viewed_at',
    ];

    protected function casts(): array
    {
        return [
            'view_count' => 'integer',
            'viewed_at' => 'datetime',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
