<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Lumina is a pure JSON API consumed by a separately-hosted Angular + UI5
| frontend (see routes/api.php for everything that matters). This file is
| intentionally near-empty — it exists only because bootstrap/app.php wires
| it up as the "web" route group.
|
*/

Route::get('/', function () {
    return response()->json([
        'data' => [
            'name' => config('app.name'),
            'status' => 'ok',
        ],
    ]);
});

Route::get('/debug-storage', function () {
    $base = public_path('storage');
    $target = $base . '/images/products/electronics-headphones-audio/1.jpg';

    return response()->json([
        'cwd' => getcwd(),
        'public_path' => public_path(),
        'base_exists' => file_exists($base),
        'base_is_dir' => is_dir($base),
        'base_is_link' => is_link($base),
        'base_readlink' => is_link($base) ? readlink($base) : null,
        'base_contents' => is_dir($base) ? @scandir($base) : null,
        'images_dir_exists' => is_dir($base . '/images'),
        'products_dir_contents' => is_dir($base . '/images/products') ? @scandir($base . '/images/products') : null,
        'target_exists' => file_exists($target),
    ]);
});
