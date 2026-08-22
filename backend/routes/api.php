<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\CheckoutController;
use App\Http\Controllers\Api\CompareController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\RecommendationController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\SearchController;
use App\Http\Controllers\Api\WishlistController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Every route here is prefixed with /api automatically (see bootstrap/app.php,
| which registers this file as the "api" route group). Matches
| API_CONTRACT.md endpoint-for-endpoint.
|
| Auth model: Sanctum personal access tokens (Authorization: Bearer <token>),
| not cookies. Routes marked `auth:sanctum` require a logged-in user; every
| other route works for both guests (X-Guest-Token header) and logged-in
| users via App\Http\Controllers\Concerns\ResolvesActor.
|
*/

Route::get('/categories', [CategoryController::class, 'index']);

// Static-segment product routes MUST be registered before the /products/{slug}
// wildcard below, otherwise Laravel would try to resolve "compare" as a slug.
Route::get('/products/compare', [CompareController::class, 'show']);
Route::get('/products/{product}/reviews', [ReviewController::class, 'index']);
Route::post('/products/{product}/reviews', [ReviewController::class, 'store'])->middleware('auth:sanctum');
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{slug}', [ProductController::class, 'show']);

Route::get('/brands', [BrandController::class, 'index']);
Route::get('/search/suggestions', [SearchController::class, 'suggestions']);

Route::get('/wishlist', [WishlistController::class, 'index']);
Route::post('/wishlist', [WishlistController::class, 'store']);
Route::delete('/wishlist/{product_id}', [WishlistController::class, 'destroy']);
Route::post('/wishlist/merge', [WishlistController::class, 'merge'])->middleware('auth:sanctum');

Route::get('/cart', [CartController::class, 'index']);
Route::post('/cart/items', [CartController::class, 'storeItem']);
Route::patch('/cart/items/{item}', [CartController::class, 'updateItem']);
Route::delete('/cart/items/{item}', [CartController::class, 'destroyItem']);
Route::post('/cart/merge', [CartController::class, 'merge'])->middleware('auth:sanctum');

Route::get('/recommendations/trending', [RecommendationController::class, 'trending']);
Route::get('/recommendations/similar/{product}', [RecommendationController::class, 'similar']);
Route::get('/recommendations/for-you', [RecommendationController::class, 'forYou']);
Route::post('/recommendations/track-view', [RecommendationController::class, 'trackView']);

Route::post('/checkout', [CheckoutController::class, 'store']);
Route::get('/orders', [CheckoutController::class, 'index'])->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('/me', [AuthController::class, 'me'])->middleware('auth:sanctum');
