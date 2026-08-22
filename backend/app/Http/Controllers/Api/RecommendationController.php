<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Concerns\ResolvesActor;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\ProductView;
use App\Models\Wishlist;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

/**
 * Simple, explainable, no-ML-library recommendation logic. Everything here is
 * content-based: category + `attributes` overlap, recency-weighted view
 * counts, and a hand-rolled affinity score built from the actor's own history.
 */
class RecommendationController extends Controller
{
    use ResolvesActor;

    protected const DEFAULT_LIMIT = 12;

    /**
     * GET /recommendations/trending — recency-weighted product_views over the
     * last 30 days; falls back to rating_count when views are sparse/empty
     * (e.g. a freshly-seeded database with no traffic yet).
     */
    public function trending(Request $request): JsonResponse
    {
        $limit = $this->limitFrom($request);

        return response()->json([
            'data' => ProductResource::collection($this->trendingProducts($limit)),
        ]);
    }

    /**
     * GET /recommendations/similar/{product} — same category first, ranked by
     * `attributes` key/value overlap and price closeness to the target.
     */
    public function similar(Request $request, Product $product): JsonResponse
    {
        $limit = $this->limitFrom($request);

        $sameCategory = Product::query()
            ->with('category')
            ->where('category_id', $product->category_id)
            ->where('id', '!=', $product->id)
            ->get();

        $ranked = $sameCategory
            ->map(fn (Product $candidate) => [
                'product' => $candidate,
                'score' => $this->similarityScore($product, $candidate),
            ])
            ->sortByDesc('score')
            ->pluck('product')
            ->values();

        $results = $ranked->take($limit);

        // Same-category catalog is too thin to fill the page — top up with
        // trending products from anywhere rather than returning a short list.
        if ($results->count() < $limit) {
            $exclude = $results->pluck('id')->push($product->id);
            $topUp = $this->trendingProducts($limit)->reject(fn (Product $p) => $exclude->contains($p->id));
            $results = $results->concat($topUp)->take($limit)->values();
        }

        return response()->json([
            'data' => ProductResource::collection($results->values()),
        ]);
    }

    /**
     * GET /recommendations/for-you — builds a category+attribute affinity
     * profile from the actor's product_views, wishlist, cart and past orders
     * (weighted order > cart > wishlist > view), then ranks unseen/unowned
     * products by affinity. Falls back to trending() when the actor has no
     * history at all.
     */
    public function forYou(Request $request): JsonResponse
    {
        $limit = $this->limitFrom($request);
        $identity = $this->actorIdentity($request);

        $categoryScores = [];
        $attributeScores = [];
        $excludeIds = [];

        $orderedProductIds = OrderItem::query()
            ->whereIn('order_id', Order::query()->where($identity)->pluck('id'))
            ->pluck('product_id');
        $this->accumulateProfile($orderedProductIds, 4.0, $categoryScores, $attributeScores, $excludeIds);

        $cart = Cart::query()->where($identity)->first();
        $cartProductIds = $cart ? $cart->items()->pluck('product_id') : collect();
        $this->accumulateProfile($cartProductIds, 3.0, $categoryScores, $attributeScores, $excludeIds);

        $wishlistProductIds = Wishlist::query()->where($identity)->pluck('product_id');
        $this->accumulateProfile($wishlistProductIds, 2.0, $categoryScores, $attributeScores, $excludeIds);

        $viewedProductIds = ProductView::query()->where($identity)->pluck('product_id');
        $this->accumulateProfile($viewedProductIds, 1.0, $categoryScores, $attributeScores, $excludeIds);

        if (empty($categoryScores) && empty($attributeScores)) {
            return response()->json([
                'data' => ProductResource::collection($this->trendingProducts($limit)),
            ]);
        }

        $candidates = Product::query()
            ->with('category')
            ->when(! empty($excludeIds), fn ($q) => $q->whereNotIn('id', array_keys($excludeIds)))
            ->get();

        $ranked = $candidates
            ->map(fn (Product $candidate) => [
                'product' => $candidate,
                'score' => $this->affinityScore($candidate, $categoryScores, $attributeScores),
            ])
            ->sortByDesc('score')
            ->pluck('product')
            ->values();

        $results = $ranked->take($limit);

        if ($results->count() < $limit) {
            $exclude = $results->pluck('id')->merge(array_keys($excludeIds));
            $topUp = $this->trendingProducts($limit)->reject(fn (Product $p) => $exclude->contains($p->id));
            $results = $results->concat($topUp)->take($limit)->values();
        }

        return response()->json([
            'data' => ProductResource::collection($results->values()),
        ]);
    }

    /**
     * POST /recommendations/track-view — {product_id}. Upserts: refreshes
     * viewed_at (and bumps view_count) on the existing row for this
     * actor+product instead of inserting a new row every time, so the table
     * stays bounded per actor regardless of how many times they view a page.
     */
    public function trackView(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'product_id' => 'required|integer|exists:products,id',
        ]);

        $identity = $this->actorIdentity($request);

        $view = ProductView::query()->where($identity)->where('product_id', $validated['product_id'])->first();

        if ($view) {
            $view->update([
                'view_count' => $view->view_count + 1,
                'viewed_at' => now(),
            ]);
        } else {
            ProductView::create([
                ...$identity,
                'product_id' => $validated['product_id'],
                'view_count' => 1,
                'viewed_at' => now(),
            ]);
        }

        return response()->json(['data' => ['status' => 'ok']]);
    }

    protected function limitFrom(Request $request): int
    {
        $limit = (int) $request->query('limit', static::DEFAULT_LIMIT);

        return max(1, min($limit, 40));
    }

    protected function trendingProducts(int $limit): Collection
    {
        $since = now()->subDays(30);

        $views = ProductView::query()->where('viewed_at', '>=', $since)->get(['product_id', 'viewed_at']);

        $scores = [];
        foreach ($views as $view) {
            $daysAgo = max(0, now()->diffInDays($view->viewed_at));
            // Recency weight: a view from today counts for 1, a view from 29
            // days ago counts for 1/30th as much.
            $scores[$view->product_id] = ($scores[$view->product_id] ?? 0) + (1 / ($daysAgo + 1));
        }

        if (empty($scores)) {
            return Product::query()
                ->with('category')
                ->orderByDesc('rating_count')
                ->orderByDesc('rating_avg')
                ->limit($limit)
                ->get();
        }

        arsort($scores);
        $ids = array_slice(array_keys($scores), 0, $limit);

        $products = Product::query()->with('category')->whereIn('id', $ids)->get()->keyBy('id');

        return collect($ids)->map(fn ($id) => $products->get($id))->filter()->values();
    }

    protected function similarityScore(Product $target, Product $candidate): float
    {
        $targetAttrs = $target->attributes ?? [];
        $candidateAttrs = $candidate->attributes ?? [];

        $overlap = 0;
        foreach ($targetAttrs as $key => $value) {
            if (array_key_exists($key, $candidateAttrs) && $candidateAttrs[$key] === $value) {
                $overlap++;
            }
        }

        $targetPrice = (float) $target->price;
        $candidatePrice = (float) $candidate->price;
        $priceCloseness = 1 - (abs($targetPrice - $candidatePrice) / max($targetPrice, $candidatePrice, 1));

        return ($overlap * 10) + ($priceCloseness * 5);
    }

    /**
     * Roll a list of product ids into the running category/attribute score
     * maps (keyed by category_id and "key:value" respectively) and mark them
     * as "seen" so for-you never recommends something the actor already
     * viewed/owns/ordered.
     */
    protected function accumulateProfile(iterable $productIds, float $weight, array &$categoryScores, array &$attributeScores, array &$excludeIds): void
    {
        $ids = collect($productIds)->filter()->unique()->values();

        if ($ids->isEmpty()) {
            return;
        }

        $products = Product::query()->whereIn('id', $ids)->get(['id', 'category_id', 'attributes']);

        foreach ($products as $product) {
            $excludeIds[$product->id] = true;
            $categoryScores[$product->category_id] = ($categoryScores[$product->category_id] ?? 0) + $weight;

            foreach ($product->attributes ?? [] as $key => $value) {
                if (! is_scalar($value)) {
                    continue;
                }
                $attrKey = "{$key}:{$value}";
                $attributeScores[$attrKey] = ($attributeScores[$attrKey] ?? 0) + $weight;
            }
        }
    }

    protected function affinityScore(Product $candidate, array $categoryScores, array $attributeScores): float
    {
        $score = $categoryScores[$candidate->category_id] ?? 0;

        foreach ($candidate->attributes ?? [] as $key => $value) {
            if (! is_scalar($value)) {
                continue;
            }
            $score += $attributeScores["{$key}:{$value}"] ?? 0;
        }

        // Tiny tie-break toward well-rated items so equally-affine candidates
        // don't sort arbitrarily.
        return $score + ((float) $candidate->rating_avg * 0.1);
    }
}
