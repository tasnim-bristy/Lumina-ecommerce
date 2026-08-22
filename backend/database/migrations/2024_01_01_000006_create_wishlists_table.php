<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Unlike carts, a wishlist "header" carries no extra state, so each row is
        // directly a WishlistItem (id, product, added_at == created_at).
        Schema::create('wishlists', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained('users')->cascadeOnDelete();
            $table->string('guest_token')->nullable();
            $table->foreignId('product_id')->constrained('products')->cascadeOnDelete();
            $table->timestamps();

            $table->unique(['user_id', 'guest_token', 'product_id'], 'wishlists_actor_product_unique');
            $table->index('guest_token');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('wishlists');
    }
};
