<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;

class ReviewSeeder extends Seeder
{
    /**
     * Comments are grouped by rating so a 5-star review reads enthusiastic and
     * a 2-star review reads genuinely disappointed, rather than generic
     * lorem-ipsum filler.
     */
    protected function commentPoolFor(int $rating): array
    {
        return match ($rating) {
            5 => [
                "Exceeded expectations — this has been in daily use since it arrived and still feels new.",
                "Exactly as described, arrived quickly, and the quality is obvious the moment you open the box.",
                "I've bought this twice now, once for myself and once as a gift. Both times a hit.",
                "Worth every penny. The attention to detail here is on another level compared to what I've tried before.",
            ],
            4 => [
                "Really solid overall. One small nitpick, but nothing that stops me from recommending it.",
                "Good value for the price. Took a few days to grow on me but now I reach for it constantly.",
                "Great quality, shipping took a little longer than expected but the product itself is excellent.",
                "Does what it promises. Not perfect, but close, and I'd buy again.",
            ],
            3 => [
                "It's fine — does the job, but I expected a bit more given the price point.",
                "Decent, though the sizing/fit ran a little different than I anticipated.",
                "Average experience. Not disappointed, not blown away either.",
            ],
            2 => [
                "Fell short of what the listing suggested. Functional, but I probably wouldn't buy again.",
                "Quality feels thinner than expected for the price. Works, but barely impresses.",
            ],
            default => [
                "Not what I was hoping for — had issues within the first couple of uses.",
                "Disappointed with this one; would not recommend at this price.",
            ],
        };
    }

    public function run(): void
    {
        $reviewerIds = User::query()->pluck('id')->all();

        Product::query()->get(['id'])->each(function (Product $product) use ($reviewerIds) {
            // 0-18 reviews per product, skewed toward existing (rated) products
            // so most products have a believable rating rather than every
            // single one being reviewed identically.
            $reviewCount = random_int(0, 18);

            if ($reviewCount === 0) {
                return;
            }

            $reviewers = collect($reviewerIds)->shuffle()->take(min($reviewCount, count($reviewerIds)));

            foreach ($reviewers as $userId) {
                // Ratings skew positive, like most real storefronts:
                // 5 stars ~45%, 4 stars ~30%, 3 stars ~15%, 2 stars ~7%, 1 star ~3%.
                $roll = random_int(1, 100);
                $rating = match (true) {
                    $roll <= 45 => 5,
                    $roll <= 75 => 4,
                    $roll <= 90 => 3,
                    $roll <= 97 => 2,
                    default => 1,
                };

                $pool = $this->commentPoolFor($rating);
                $comment = $pool[array_rand($pool)];

                $product->reviews()->create([
                    'user_id' => $userId,
                    'rating' => $rating,
                    'comment' => $comment,
                ]);
            }

            $product->refreshRatingAggregates();
        });
    }
}
