<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Eight top-level categories, each with 2-4 subcategories, per
     * API_CONTRACT.md's "Catalog breadth" section. Icon values are simple
     * lucide-style icon names the frontend maps to actual glyphs.
     */
    public static function tree(): array
    {
        return [
            [
                'name' => 'Electronics',
                'icon' => 'monitor',
                'children' => [
                    ['name' => 'Headphones & Audio', 'icon' => 'headphones'],
                    ['name' => 'Laptops & Computers', 'icon' => 'laptop'],
                    ['name' => 'Smartphones & Accessories', 'icon' => 'smartphone'],
                    ['name' => 'Cameras & Drones', 'icon' => 'camera'],
                ],
            ],
            [
                'name' => 'Fashion',
                'icon' => 'shirt',
                'children' => [
                    ["name" => "Men's Clothing", 'icon' => 'shirt'],
                    ["name" => "Women's Clothing", 'icon' => 'shirt'],
                    ['name' => 'Shoes', 'icon' => 'footprints'],
                    ['name' => 'Bags & Accessories', 'icon' => 'briefcase'],
                ],
            ],
            [
                'name' => 'Home & Living',
                'icon' => 'sofa',
                'children' => [
                    ['name' => 'Furniture', 'icon' => 'armchair'],
                    ['name' => 'Kitchen & Dining', 'icon' => 'utensils'],
                    ['name' => 'Decor', 'icon' => 'lamp'],
                    ['name' => 'Bedding & Bath', 'icon' => 'bed'],
                ],
            ],
            [
                'name' => 'Beauty & Personal Care',
                'icon' => 'sparkles',
                'children' => [
                    ['name' => 'Skincare', 'icon' => 'droplet'],
                    ['name' => 'Haircare', 'icon' => 'scissors'],
                    ['name' => 'Makeup', 'icon' => 'palette'],
                    ['name' => 'Fragrance', 'icon' => 'flower'],
                ],
            ],
            [
                'name' => 'Sports & Outdoors',
                'icon' => 'dumbbell',
                'children' => [
                    ['name' => 'Fitness Equipment', 'icon' => 'dumbbell'],
                    ['name' => 'Outdoor & Camping', 'icon' => 'tent'],
                    ['name' => 'Cycling', 'icon' => 'bike'],
                    ['name' => 'Team Sports', 'icon' => 'trophy'],
                ],
            ],
            [
                'name' => 'Books & Media',
                'icon' => 'book-open',
                'children' => [
                    ['name' => 'Fiction', 'icon' => 'book'],
                    ['name' => 'Non-Fiction', 'icon' => 'book-text'],
                    ["name" => "Children's Books", 'icon' => 'baby'],
                    ['name' => 'Music & Vinyl', 'icon' => 'disc'],
                ],
            ],
            [
                'name' => 'Toys & Kids',
                'icon' => 'blocks',
                'children' => [
                    ['name' => 'Building Toys', 'icon' => 'blocks'],
                    ['name' => 'Dolls & Action Figures', 'icon' => 'user'],
                    ['name' => 'Educational Toys', 'icon' => 'puzzle'],
                    ['name' => 'Outdoor Play', 'icon' => 'sun'],
                ],
            ],
            [
                'name' => 'Grocery & Gourmet',
                'icon' => 'shopping-basket',
                'children' => [
                    ['name' => 'Snacks', 'icon' => 'cookie'],
                    ['name' => 'Beverages', 'icon' => 'coffee'],
                    ['name' => 'Pantry Staples', 'icon' => 'wheat'],
                    ['name' => 'Organic & Specialty', 'icon' => 'leaf'],
                ],
            ],
        ];
    }

    public function run(): void
    {
        foreach (static::tree() as $position => $top) {
            $parent = Category::create([
                'parent_id' => null,
                'name' => $top['name'],
                'slug' => Str::slug($top['name']),
                'icon' => $top['icon'],
                'hero_image' => "https://picsum.photos/seed/".Str::slug($top['name'])."/800/600",
                'position' => $position,
            ]);

            foreach ($top['children'] as $childPosition => $child) {
                Category::create([
                    'parent_id' => $parent->id,
                    'name' => $child['name'],
                    'slug' => Str::slug($top['name']).'-'.Str::slug($child['name']),
                    'icon' => $child['icon'],
                    'hero_image' => "https://picsum.photos/seed/".Str::slug($top['name'].'-'.$child['name'])."/800/600",
                    'position' => $childPosition,
                ]);
            }
        }
    }
}
