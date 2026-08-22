<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

// This is Laravel Sanctum's own migration (normally added to database/migrations
// via `php artisan vendor:publish --tag=sanctum-migrations` right after
// `composer require laravel/sanctum`). It's committed here directly, matching
// Sanctum 4's published schema exactly, so `php artisan migrate` works out of the
// box without a separate publish step.
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('personal_access_tokens', function (Blueprint $table) {
            $table->id();
            $table->morphs('tokenable');
            $table->string('name');
            $table->string('token', 64)->unique();
            $table->text('abilities')->nullable();
            $table->timestamp('last_used_at')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('personal_access_tokens');
    }
};
