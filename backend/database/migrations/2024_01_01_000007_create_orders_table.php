<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_number')->unique();
            // Checkout is not marked "auth required" in the contract, so guests can
            // place orders too (guest_token), same actor model as cart/wishlist.
            $table->foreignId('user_id')->nullable()->constrained('users')->nullOnDelete();
            $table->string('guest_token')->nullable();
            $table->string('status')->default('processing');
            $table->decimal('subtotal', 10, 2);
            $table->decimal('total', 10, 2);
            $table->string('currency', 3)->default('USD');
            $table->json('shipping_address');
            $table->string('payment_method');
            $table->timestamps();

            $table->index(['user_id', 'created_at']);
            $table->index(['guest_token', 'created_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
