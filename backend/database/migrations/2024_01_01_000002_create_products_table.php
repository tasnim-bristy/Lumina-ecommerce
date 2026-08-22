<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained('categories')->cascadeOnDelete();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('brand')->nullable();
            $table->string('sku')->unique();
            $table->text('description')->nullable();
            $table->decimal('price', 10, 2);
            $table->decimal('compare_at_price', 10, 2)->nullable();
            $table->string('currency', 3)->default('USD');
            $table->unsignedInteger('stock')->default(0);
            $table->boolean('is_featured')->default(false);
            // Images are stored as a JSON column rather than a separate table: the
            // contract only ever needs a flat array of URLs plus one thumbnail per
            // product, so a dedicated product_images table would just add joins
            // without adding capability.
            $table->string('thumbnail')->nullable();
            $table->json('images')->nullable();
            $table->json('attributes')->nullable();
            // Denormalized rating aggregates, recomputed whenever a review is
            // created so product listings never need to join/aggregate reviews.
            $table->decimal('rating_avg', 3, 2)->default(0);
            $table->unsignedInteger('rating_count')->default(0);
            $table->timestamps();

            $table->index('brand');
            $table->index('price');
            $table->index('is_featured');
            $table->index(['category_id', 'price']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
