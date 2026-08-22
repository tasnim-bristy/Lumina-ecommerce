<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Product extends Model
{
    protected $fillable = [
        'category_id',
        'name',
        'slug',
        'brand',
        'sku',
        'description',
        'price',
        'compare_at_price',
        'currency',
        'stock',
        'is_featured',
        'thumbnail',
        'images',
        'attributes',
        'rating_avg',
        'rating_count',
    ];

    protected function casts(): array
    {
        return [
            'price' => 'decimal:2',
            'compare_at_price' => 'decimal:2',
            'rating_avg' => 'decimal:2',
            'stock' => 'integer',
            'rating_count' => 'integer',
            'is_featured' => 'boolean',
            'images' => 'array',
            'attributes' => 'array',
        ];
    }

    protected static function booted(): void
    {
        static::creating(function (Product $product) {
            if (empty($product->slug)) {
                $product->slug = static::uniqueSlugFor($product->name);
            }
        });
    }

    public static function uniqueSlugFor(string $name): string
    {
        $base = Str::slug($name);
        $slug = $base;
        $suffix = 1;

        while (static::where('slug', $slug)->exists()) {
            $slug = "{$base}-".++$suffix;
        }

        return $slug;
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }

    public function cartItems(): HasMany
    {
        return $this->hasMany(CartItem::class);
    }

    public function wishlists(): HasMany
    {
        return $this->hasMany(Wishlist::class);
    }

    public function orderItems(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    public function views(): HasMany
    {
        return $this->hasMany(ProductView::class);
    }

    /**
     * Recompute the denormalized rating_avg / rating_count columns from the
     * reviews table. Called by ReviewController@store after a new review lands.
     */
    public function refreshRatingAggregates(): void
    {
        $this->rating_avg = round((float) $this->reviews()->avg('rating'), 2);
        $this->rating_count = $this->reviews()->count();
        $this->save();
    }
}
