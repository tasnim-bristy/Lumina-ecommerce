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
