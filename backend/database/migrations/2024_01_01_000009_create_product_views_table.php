<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // One row per actor+product (not one per visit): RecommendationController
        // upserts this row's viewed_at/view_count instead of inserting a fresh row
        // every time, so the table stays bounded per actor.
        Schema::create('product_views', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained('users')->cascadeOnDelete();
            $table->string('guest_token')->nullable();
            $table->foreignId('product_id')->constrained('products')->cascadeOnDelete();
            $table->unsignedInteger('view_count')->default(1);
            $table->timestamp('viewed_at');
            $table->timestamps();

            $table->unique(['user_id', 'guest_token', 'product_id'], 'product_views_actor_product_unique');
            $table->index('viewed_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('product_views');
    }
};
