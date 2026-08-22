<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            // Exactly one of user_id / guest_token is populated per cart — the
            // "current actor" is resolved by App\Http\Controllers\Concerns\ResolvesActor.
            $table->foreignId('user_id')->nullable()->constrained('users')->cascadeOnDelete();
            $table->string('guest_token')->nullable();
            $table->timestamps();

            $table->unique('user_id');
            $table->unique('guest_token');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('carts');
    }
};
