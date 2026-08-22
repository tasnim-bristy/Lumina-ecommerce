<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    protected int $sequence = 0;

    /**
     * The full catalog: one entry per subcategory (slug suffix matches
     * CategorySeeder::tree()), each with a brand pool, a "kind" that picks
     * which attribute generator to use, and a handful of real-sounding
     * product names with a base price. Every subcategory gets 3-4 products,
     * spread across all 32 subcategories for 96+ products total.
     */
    protected function catalog(): array
    {
        return [
            'electronics-headphones-audio' => [
                'kind' => 'audio',
                'brands' => ['Novatone', 'EchoWave', 'Driftline', 'Pulse Audio'],
                'products' => [
                    ['name' => 'Aria Wireless Headphones', 'price' => 6500.00],
                    ['name' => 'Pulse Bass Earbuds', 'price' => 2800.00],
                    ['name' => 'Echo Studio Bookshelf Speaker', 'price' => 8500.00],
                    ['name' => 'Drift Noise-Cancelling Headphones', 'price' => 11500.00],
                ],
            ],
            'electronics-laptops-computers' => [
                'kind' => 'computing',
                'brands' => ['Corelux', 'Vantek', 'Nimbus', 'Zenith Systems'],
                'products' => [
                    ['name' => 'Corelux Slate 14 Ultrabook', 'price' => 78500.00],
                    ['name' => 'Vantek ProDesk Mini Tower', 'price' => 52000.00],
                    ['name' => 'Nimbus Fold 2-in-1 Convertible', 'price' => 92500.00],
                    ['name' => 'Zenith Aero 13 Ultralight Laptop', 'price' => 118000.00],
                ],
            ],
            'electronics-smartphones-accessories' => [
                'kind' => 'accessory',
                'brands' => ['Novatone', 'Vantek', 'Corelux'],
                'products' => [
                    ['name' => 'Vantek Halo MagSafe Charger', 'price' => 2200.00],
                    ['name' => 'Corelux Glide Phone Case', 'price' => 950.00],
                    ['name' => 'Novatone PowerBank 20000', 'price' => 2600.00],
                ],
            ],
            'electronics-cameras-drones' => [
                'kind' => 'camera',
                'brands' => ['Lumaris', 'SkyForge', 'Nimbus'],
                'products' => [
                    ['name' => 'Lumaris ZX2 Mirrorless Camera', 'price' => 138000.00],
                    ['name' => 'SkyForge Nomad 4K Drone', 'price' => 76500.00],
                    ['name' => 'Lumaris Pocket Action Cam', 'price' => 24500.00],
                ],
            ],

            'fashion-mens-clothing' => [
                'kind' => 'apparel',
                'brands' => ['Northfield', 'Aster Lane', 'Wovenly'],
                'products' => [
                    ['name' => 'Northfield Merino Crewneck Sweater', 'price' => 3200.00],
                    ['name' => 'Aster Lane Tailored Chino Trousers', 'price' => 2400.00],
                    ['name' => 'Wovenly Oxford Button-Down Shirt', 'price' => 1950.00],
                ],
            ],
            'fashion-womens-clothing' => [
                'kind' => 'apparel',
                'brands' => ['Maren', 'Aster Lane', 'Lumen & Co'],
                'products' => [
                    ['name' => 'Maren Wrap Midi Dress', 'price' => 3600.00],
                    ['name' => 'Lumen & Co Linen Wide-Leg Pants', 'price' => 2650.00],
                    ['name' => 'Aster Lane Cashmere Blend Cardigan', 'price' => 4500.00],
                    ['name' => 'Maren Silk Slip Blouse', 'price' => 3100.00],
                ],
            ],
            'fashion-shoes' => [
                'kind' => 'shoes',
                'brands' => ['Northfield', 'TrailForge', 'Maren'],
                'products' => [
                    ['name' => 'Northfield Everyday Leather Loafers', 'price' => 4800.00],
                    ['name' => 'TrailForge Trail Runner Sneakers', 'price' => 3950.00],
                    ['name' => 'Maren Suede Ankle Boots', 'price' => 5500.00],
                ],
            ],
            'fashion-bags-accessories' => [
                'kind' => 'accessory',
                'brands' => ['Aster Lane', 'Wovenly', 'Maren'],
                'products' => [
                    ['name' => 'Aster Lane Structured Tote Bag', 'price' => 4200.00],
                    ['name' => 'Wovenly Woven Leather Belt', 'price' => 1450.00],
                    ['name' => 'Maren Canvas Weekender Duffel', 'price' => 3400.00],
                ],
            ],

            'home-living-furniture' => [
                'kind' => 'furniture',
                'brands' => ['Haven & Home', 'Larkwood', 'Ostara'],
                'products' => [
                    ['name' => 'Larkwood Oak Dining Table', 'price' => 42000.00],
                    ['name' => 'Haven & Home Linen Sofa, 3-Seater', 'price' => 68500.00],
                    ['name' => 'Ostara Rattan Accent Chair', 'price' => 16500.00],
                ],
            ],
            'home-living-kitchen-dining' => [
                'kind' => 'kitchen',
                'brands' => ['Clover Studio', 'Haven & Home', 'Ostara'],
                'products' => [
                    ['name' => 'Clover Studio Cast Iron Dutch Oven', 'price' => 6800.00],
                    ['name' => 'Haven & Home Stoneware Dinner Set, 16-Piece', 'price' => 4500.00],
                    ['name' => 'Ostara Pour-Over Coffee Carafe', 'price' => 1950.00],
                ],
            ],
            'home-living-decor' => [
                'kind' => 'decor',
                'brands' => ['Larkwood', 'Clover Studio', 'Ostara'],
                'products' => [
                    ['name' => 'Larkwood Ceramic Table Lamp', 'price' => 3600.00],
                    ['name' => 'Clover Studio Handwoven Wall Hanging', 'price' => 2650.00],
                    ['name' => 'Ostara Amber Glass Vase Set', 'price' => 2100.00],
                ],
            ],
            'home-living-bedding-bath' => [
                'kind' => 'textile',
                'brands' => ['Haven & Home', 'Wovenly'],
                'products' => [
                    ['name' => 'Haven & Home Percale Sheet Set, Queen', 'price' => 4200.00],
                    ['name' => 'Wovenly Turkish Cotton Bath Towel Set', 'price' => 2600.00],
                    ['name' => 'Haven & Home Weighted Quilted Blanket', 'price' => 5800.00],
                ],
            ],

            'beauty-personal-care-skincare' => [
                'kind' => 'skincare',
                'brands' => ['Aurelie', 'Bloomcare', 'Sundew'],
                'products' => [
                    ['name' => 'Aurelie Vitamin C Brightening Serum', 'price' => 2200.00],
                    ['name' => 'Sundew Ceramide Barrier Repair Cream', 'price' => 1850.00],
                    ['name' => 'Bloomcare Gentle Foaming Cleanser', 'price' => 1050.00],
                ],
            ],
            'beauty-personal-care-haircare' => [
                'kind' => 'skincare',
                'brands' => ['Bloomcare', 'Verdant', 'Sundew'],
                'products' => [
                    ['name' => 'Verdant Argan Repair Shampoo', 'price' => 1150.00],
                    ['name' => 'Bloomcare Silk Protein Hair Mask', 'price' => 1450.00],
                    ['name' => 'Sundew Scalp Renewal Tonic', 'price' => 1650.00],
                ],
            ],
            'beauty-personal-care-makeup' => [
                'kind' => 'makeup',
                'brands' => ['Aurelie', 'Bloomcare'],
                'products' => [
                    ['name' => 'Aurelie Sheer Tint Skin Veil', 'price' => 1750.00],
                    ['name' => 'Bloomcare Velvet Matte Lipstick', 'price' => 950.00],
                    ['name' => 'Aurelie Featherweight Mascara', 'price' => 850.00],
                ],
            ],
            'beauty-personal-care-fragrance' => [
                'kind' => 'fragrance',
                'brands' => ['Aurelie', 'Verdant', 'Sundew'],
                'products' => [
                    ['name' => 'Aurelie Amber Dusk Eau de Parfum', 'price' => 5800.00],
                    ['name' => 'Verdant Citrus Grove Cologne', 'price' => 4500.00],
                    ['name' => 'Sundew Rose & Oud Discovery Set', 'price' => 3200.00],
                ],
            ],

            'sports-outdoors-fitness-equipment' => [
                'kind' => 'fitness',
                'brands' => ['Ironclad', 'Peak Motion', 'Alpine Co'],
                'products' => [
                    ['name' => 'Ironclad Adjustable Dumbbell Set', 'price' => 9800.00],
                    ['name' => 'Peak Motion Foldable Treadmill', 'price' => 32500.00],
                    ['name' => 'Alpine Co Natural Rubber Yoga Mat', 'price' => 1950.00],
                ],
            ],
            'sports-outdoors-outdoor-camping' => [
                'kind' => 'outdoor',
                'brands' => ['TrailForge', 'Alpine Co'],
                'products' => [
                    ['name' => 'TrailForge 2-Person Backpacking Tent', 'price' => 13500.00],
                    ['name' => 'Alpine Co Down Sleeping Bag, 15°F', 'price' => 9200.00],
                    ['name' => 'TrailForge 65L Trekking Backpack', 'price' => 8500.00],
                ],
            ],
            'sports-outdoors-cycling' => [
                'kind' => 'cycling',
                'brands' => ['Peak Motion', 'TrailForge'],
                'products' => [
                    ['name' => 'Peak Motion Gravel Adventure Bike', 'price' => 78500.00],
                    ['name' => 'TrailForge Aero Cycling Helmet', 'price' => 4200.00],
                    ['name' => 'Peak Motion LED Bike Light Set', 'price' => 1450.00],
                ],
            ],
            'sports-outdoors-team-sports' => [
                'kind' => 'teamsport',
                'brands' => ['Ironclad', 'Peak Motion'],
                'products' => [
                    ['name' => 'Ironclad Match Soccer Ball', 'price' => 1450.00],
                    ['name' => 'Peak Motion Indoor Basketball', 'price' => 1650.00],
                    ['name' => 'Ironclad Adjustable Training Cones, 20-Pack', 'price' => 850.00],
                ],
            ],

            'books-media-fiction' => [
                'kind' => 'book',
                'brands' => ['Harbor Press', 'Meridian House'],
                'products' => [
                    ['name' => 'The Salt Orchard', 'price' => 550.00],
                    ['name' => 'Nine Rivers to Kestrel Bay', 'price' => 480.00],
                    ['name' => 'The Cartographer\'s Daughter', 'price' => 600.00],
                ],
            ],
            'books-media-non-fiction' => [
                'kind' => 'book',
                'brands' => ['Lantern Books', 'Northwind Editions'],
                'products' => [
                    ['name' => 'Quiet Systems: Designing a Calmer Life', 'price' => 650.00],
                    ['name' => 'The Fermentation Kitchen', 'price' => 780.00],
                    ['name' => 'Atlas of Forgotten Trade Routes', 'price' => 950.00],
                ],
            ],
            'books-media-childrens-books' => [
                'kind' => 'book',
                'brands' => ['Lantern Books', 'Harbor Press'],
                'products' => [
                    ['name' => 'Pip and the Paper Lantern', 'price' => 380.00],
                    ['name' => 'The Very Curious Otter', 'price' => 350.00],
                    ['name' => 'Sleepy Town Lullabies', 'price' => 400.00],
                ],
            ],
            'books-media-music-vinyl' => [
                'kind' => 'music',
                'brands' => ['Meridian House', 'Northwind Editions'],
                'products' => [
                    ['name' => 'Amber Hour — Vinyl LP', 'price' => 2200.00],
                    ['name' => 'Late Bloom — Vinyl LP', 'price' => 2000.00],
                    ['name' => 'Field Recordings, Vol. 1 — Vinyl LP', 'price' => 1850.00],
                ],
            ],

            'toys-kids-building-toys' => [
                'kind' => 'toy',
                'brands' => ['Tinker Toys', 'Pebble & Pine'],
                'products' => [
                    ['name' => 'Tinker Toys Skyline Builder Set, 480pc', 'price' => 3200.00],
                    ['name' => 'Pebble & Pine Wooden Block Tower', 'price' => 1850.00],
                    ['name' => 'Tinker Toys Robotics Starter Kit', 'price' => 4500.00],
                ],
            ],
            'toys-kids-dolls-action-figures' => [
                'kind' => 'toy',
                'brands' => ['Wonderbox', 'BrightPlay'],
                'products' => [
                    ['name' => 'Wonderbox Storybook Doll — Meadow', 'price' => 1650.00],
                    ['name' => 'BrightPlay Galaxy Guardians Figure Set', 'price' => 1450.00],
                    ['name' => 'Wonderbox Poseable Wooden Animals, 6pc', 'price' => 1250.00],
                ],
            ],
            'toys-kids-educational-toys' => [
                'kind' => 'toy',
                'brands' => ['Pebble & Pine', 'BrightPlay'],
                'products' => [
                    ['name' => 'Pebble & Pine Counting & Sorting Set', 'price' => 1500.00],
                    ['name' => 'BrightPlay Junior Coding Robot', 'price' => 3800.00],
                    ['name' => 'Pebble & Pine Magnetic Letters & Numbers', 'price' => 1100.00],
                ],
            ],
            'toys-kids-outdoor-play' => [
                'kind' => 'toy',
                'brands' => ['BrightPlay', 'Wonderbox'],
                'products' => [
                    ['name' => 'BrightPlay Bounce & Roll Ball Pit', 'price' => 2600.00],
                    ['name' => 'Wonderbox Backyard Balance Beam', 'price' => 2300.00],
                    ['name' => 'BrightPlay Splash Pad Sprinkler Mat', 'price' => 1650.00],
                ],
            ],

            'grocery-gourmet-snacks' => [
                'kind' => 'grocery',
                'brands' => ['Harvest Table', 'Golden Grove'],
                'products' => [
                    ['name' => 'Harvest Table Sea Salt Kettle Chips', 'price' => 280.00],
                    ['name' => 'Golden Grove Honey Roasted Almonds', 'price' => 420.00],
                    ['name' => 'Harvest Table Dark Chocolate Rice Cakes', 'price' => 240.00],
                ],
            ],
            'grocery-gourmet-beverages' => [
                'kind' => 'grocery',
                'brands' => ['Verde Farms', 'Golden Grove'],
                'products' => [
                    ['name' => 'Verde Farms Single-Origin Coffee Beans', 'price' => 850.00],
                    ['name' => 'Golden Grove Sparkling Botanical Soda, 4-Pack', 'price' => 380.00],
                    ['name' => 'Verde Farms Matcha Green Tea Powder', 'price' => 1100.00],
                ],
            ],
            'grocery-gourmet-pantry-staples' => [
                'kind' => 'grocery',
                'brands' => ['Pure Pantry', 'Verde Farms'],
                'products' => [
                    ['name' => 'Pure Pantry Cold-Pressed Olive Oil', 'price' => 980.00],
                    ['name' => 'Verde Farms Heirloom Grain Pasta', 'price' => 340.00],
                    ['name' => 'Pure Pantry Raw Wildflower Honey', 'price' => 650.00],
                ],
            ],
            'grocery-gourmet-organic-specialty' => [
                'kind' => 'grocery',
                'brands' => ['Pure Pantry', 'Harvest Table'],
                'products' => [
                    ['name' => 'Pure Pantry Organic Quinoa, 2lb', 'price' => 550.00],
                    ['name' => 'Harvest Table Organic Trail Mix', 'price' => 480.00],
                    ['name' => 'Pure Pantry Organic Coconut Sugar', 'price' => 380.00],
                ],
            ],
        ];
    }

    public function run(): void
    {
        $categories = Category::query()->get()->keyBy('slug');

        foreach ($this->catalog() as $categorySlug => $group) {
            $category = $categories->get($categorySlug);

            if (! $category) {
                continue;
            }

            $pool = $this->imagePool($categorySlug);
            $poolSize = count($pool);

            foreach ($group['products'] as $i => $item) {
                $this->sequence++;
                $brand = $group['brands'][$i % count($group['brands'])];

                Product::create([
                    'category_id' => $category->id,
                    'name' => $item['name'],
                    'brand' => $brand,
                    'sku' => $this->skuFor($brand, $this->sequence),
                    'description' => $this->descriptionFor($group['kind'], $item['name'], $brand, $category->name),
                    'price' => $item['price'],
                    'compare_at_price' => $this->maybeCompareAtPrice($item['price']),
                    'currency' => 'BDT',
                    'stock' => $this->randomStock(),
                    'is_featured' => $this->sequence % 8 === 0,
                    'thumbnail' => $pool[$i % $poolSize],
                    'images' => [
                        $pool[$i % $poolSize],
                        $pool[($i + 1) % $poolSize],
                        $pool[($i + 2) % $poolSize],
                    ],
                    'attributes' => $this->attributesFor($group['kind']),
                    'rating_avg' => 0,
                    'rating_count' => 0,
                ]);
            }
        }
    }

    /**
     * Demo product photos, organised one folder per subcategory under
     * storage/app/public/images/products/{subcategory-slug}/{1,2,3}.jpg
     * (served at /storage/images/products/... via the storage:link symlink).
     * Content-matched per subcategory (e.g. real headphones photos for
     * electronics-headphones-audio) rather than random placeholder images.
     *
     * To swap in real product photography later: replace the files in the
     * matching subcategory folder (same names/count) — this method and the
     * seeder loop don't need to change at all.
     */
    protected function imagePool(string $categorySlug): array
    {
        $base = rtrim(config('app.url'), '/')."/storage/images/products/{$categorySlug}";

        return [
            "{$base}/1.jpg",
            "{$base}/2.jpg",
            "{$base}/3.jpg",
        ];
    }

    protected function skuFor(string $brand, int $sequence): string
    {
        $prefix = strtoupper(substr(preg_replace('/[^A-Za-z]/', '', $brand), 0, 3));

        return sprintf('%s-%04d', $prefix ?: 'LUM', $sequence);
    }

    protected function randomStock(): int
    {
        // Mostly well-stocked, occasionally low, rarely out-of-stock — real
        // catalogs aren't a flat distribution.
        return match (true) {
            $this->sequence % 17 === 0 => 0,
            $this->sequence % 5 === 0 => random_int(1, 8),
            default => random_int(15, 180),
        };
    }

    protected function maybeCompareAtPrice(float $price): ?float
    {
        // Roughly 1 in 3 products is "on sale".
        if ($this->sequence % 3 !== 0) {
            return null;
        }

        return round($price * 1.25, 2);
    }

    protected function descriptionFor(string $kind, string $name, string $brand, string $categoryName): string
    {
        $blurbs = [
            'audio' => "Precision-tuned drivers and a refined, minimal silhouette make the {$name} an everyday upgrade for anyone who listens closely. Designed by {$brand} for long sessions without fatigue.",
            'computing' => "The {$name} pairs {$brand}'s understated design language with enough power for everyday work, creative projects, and everything between meetings.",
            'accessory' => "A small, well-made essential: the {$name} from {$brand} is built to disappear into your daily carry while doing its one job exceptionally well.",
            'camera' => "The {$name} gives {$brand} enthusiasts a lightweight, capable tool for capturing detail in changing light, without the bulk of professional gear.",
            'apparel' => "Cut from thoughtfully sourced fabric, the {$name} is {$brand}'s take on a wardrobe staple — made to be worn often and to age well.",
            'shoes' => "The {$name} balances all-day comfort with a clean profile, part of {$brand}'s ongoing focus on materials that soften with wear rather than break down.",
            'furniture' => "The {$name} brings {$brand}'s quiet, considered aesthetic into everyday rooms — solid materials, gentle lines, and a finish meant to last years, not seasons.",
            'kitchen' => "Built for regular use, the {$name} from {$brand} is the kind of kitchen piece that earns a permanent spot on the counter.",
            'decor' => "The {$name} adds warmth without clutter — a small, considered object from {$brand} that anchors a room.",
            'textile' => "Soft, breathable, and built to hold up to frequent washing, the {$name} is {$brand}'s answer to hotel-quality basics for home.",
            'skincare' => "Formulated with a short, purposeful ingredient list, the {$name} from {$brand} targets results without unnecessary extras.",
            'makeup' => "The {$name} gives a natural, buildable finish that wears well through a full day — a {$brand} staple for effortless routines.",
            'fragrance' => "A layered, long-wearing scent, the {$name} from {$brand} opens bright and settles into something warmer over the day.",
            'fitness' => "Designed for consistent home use, the {$name} from {$brand} is built to handle daily training without breaking down.",
            'outdoor' => "Tested for real trail conditions, the {$name} from {$brand} balances weight savings with the durability multi-day trips demand.",
            'cycling' => "The {$name} is {$brand}'s answer to riders who want performance gear that doesn't need babying between rides.",
            'teamsport' => "Built for regular practice and match play, the {$name} from {$brand} holds its shape and grip through a full season.",
            'book' => "\"{$name}\" is a {$brand} release that readers have been quietly recommending to each other since it landed on shelves in {$categoryName}.",
            'music' => "\"{$name}\" is pressed on heavyweight vinyl by {$brand}, mastered for a warm, dynamic listen from first track to last.",
            'toy' => "The {$name} from {$brand} is built for hands-on, screen-free play that holds a child's attention far longer than expected.",
            'grocery' => "Sourced with care and small-batch produced, {$name} from {$brand} is a pantry staple worth reordering.",
        ];

        return $blurbs[$kind] ?? "The {$name} from {$brand} is a considered addition to our {$categoryName} range.";
    }

    protected function attributesFor(string $kind): array
    {
        $colors = ['Sand Beige', 'Charcoal Black', 'Sage Green', 'Ivory White', 'Terracotta', 'Midnight Blue', 'Warm Taupe', 'Rose Gold'];
        $materialsFashion = ['Organic Cotton', 'Merino Wool', 'Recycled Polyester', 'Genuine Leather', 'Linen Blend', 'Cashmere Blend'];
        $materialsHome = ['Solid Oak', 'Powder-Coated Steel', 'Tempered Glass', 'Reclaimed Wood', 'Brushed Brass', 'Ceramic'];
        $sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

        return match ($kind) {
            'audio' => [
                'color' => $this->pick($colors),
                'connectivity' => $this->pick(['Bluetooth 5.3', 'Bluetooth 5.0', 'Wired 3.5mm', 'Bluetooth 5.3 + USB-C']),
                'battery_life' => $this->pick(['8 hours', '20 hours', '30 hours', 'Up to 60 hours']),
            ],
            'computing' => [
                'color' => $this->pick(['Space Gray', 'Silver', 'Sand Beige', 'Midnight Blue']),
                'connectivity' => $this->pick(['Wi-Fi 6E + Bluetooth 5.3', 'Wi-Fi 6 + Bluetooth 5.2', 'Thunderbolt 4 + Wi-Fi 6E']),
                'battery_life' => $this->pick(['10 hours', '14 hours', '18 hours', 'Up to 22 hours']),
            ],
            'accessory' => [
                'color' => $this->pick($colors),
                'connectivity' => $this->pick(['USB-C', 'Lightning', 'Qi Wireless', 'USB-C + Wireless']),
            ],
            'camera' => [
                'color' => $this->pick(['Charcoal Black', 'Graphite', 'Silver']),
                'connectivity' => $this->pick(['Wi-Fi + Bluetooth', 'Wi-Fi + USB-C']),
                'battery_life' => $this->pick(['1.5 hours flight time', '4 hours', '6 hours']),
            ],
            'apparel' => [
                'size' => $this->pick($sizes),
                'color' => $this->pick($colors),
                'material' => $this->pick($materialsFashion),
            ],
            'shoes' => [
                'size' => $this->pick(['6', '7', '8', '9', '10', '11', '12']),
                'color' => $this->pick($colors),
                'material' => $this->pick(['Full-Grain Leather', 'Recycled Knit Mesh', 'Suede', 'Canvas']),
            ],
            'furniture' => [
                'color' => $this->pick($colors),
                'material' => $this->pick($materialsHome),
                'dimensions' => $this->pick(['120 x 75 x 76 cm', '180 x 90 x 74 cm', '65 x 65 x 80 cm']),
            ],
            'kitchen' => [
                'color' => $this->pick($colors),
                'material' => $this->pick(['Cast Iron', 'Stoneware', 'Borosilicate Glass', 'Stainless Steel']),
            ],
            'decor' => [
                'color' => $this->pick($colors),
                'material' => $this->pick($materialsHome),
            ],
            'textile' => [
                'color' => $this->pick($colors),
                'material' => $this->pick(['100% Cotton Percale', 'Turkish Cotton', 'Linen Blend', 'Bamboo Viscose']),
                'size' => $this->pick(['Twin', 'Queen', 'King', 'One Size']),
            ],
            'skincare' => [
                'skin_type' => $this->pick(['Dry', 'Oily', 'Combination', 'Sensitive', 'All Skin Types']),
                'volume_ml' => $this->pick([30, 50, 100, 150]),
            ],
            'makeup' => [
                'shade' => $this->pick(['Fair', 'Light', 'Medium', 'Tan', 'Deep']),
                'finish' => $this->pick(['Matte', 'Satin', 'Dewy']),
            ],
            'fragrance' => [
                'scent' => $this->pick(['Citrus & Bergamot', 'Sandalwood & Amber', 'Fresh Linen', 'Rose & Peony', 'Vanilla & Musk']),
                'volume_ml' => $this->pick([30, 50, 100]),
            ],
            'fitness' => [
                'color' => $this->pick($colors),
                'material' => $this->pick(['Natural Rubber', 'Cast Iron', 'Powder-Coated Steel', 'PVC-Free Foam']),
                'weight_kg' => $this->pick([2, 5, 10, 15, 20]),
            ],
            'outdoor' => [
                'color' => $this->pick($colors),
                'material' => $this->pick(['Ripstop Nylon', 'Aluminum Frame', 'Down Fill', 'Waterproof Polyester']),
                'weight_kg' => $this->pick([1.2, 1.8, 2.4, 3.1]),
            ],
            'cycling' => [
                'color' => $this->pick($colors),
                'material' => $this->pick(['Aluminum Alloy', 'Carbon Fiber', 'Chromoly Steel']),
                'size' => $this->pick(['S', 'M', 'L', 'One Size']),
            ],
            'teamsport' => [
                'color' => $this->pick($colors),
                'material' => $this->pick(['Synthetic Leather', 'Rubber Composite', 'PVC']),
            ],
            'book' => [
                'format' => $this->pick(['Paperback', 'Hardcover', 'E-Book']),
                'pages' => $this->pick([224, 288, 336, 412]),
                'language' => 'English',
            ],
            'music' => [
                'format' => 'Vinyl LP',
                'genre' => $this->pick(['Indie Rock', 'Jazz', 'Classical', 'Electronic', 'Folk']),
            ],
            'toy' => [
                'age_range' => $this->pick(['3-5 years', '6-8 years', '9-12 years', '3+ years']),
                'material' => $this->pick(['Solid Beechwood', 'BPA-Free Plastic', 'Recycled Cardboard']),
                'pieces' => $this->pick([24, 48, 120, 480]),
            ],
            'grocery' => [
                'weight_g' => $this->pick([100, 250, 500, 1000]),
                'dietary' => $this->pick(['Vegan', 'Gluten-Free', 'Organic', 'Non-GMO']),
                'origin' => $this->pick(['Italy', 'Colombia', 'Japan', 'France', 'India', 'Ethiopia', 'USA']),
            ],
            default => [
                'color' => $this->pick($colors),
            ],
        };
    }

    protected function pick(array $options)
    {
        return $options[array_rand($options)];
    }
}
