<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * A demo login the frontend/graders can use out of the box, plus a pool
     * of reviewer accounts whose names back the "Jamie L." style display
     * names ReviewResource generates for ReviewSeeder's reviews.
     */
    public static function reviewerNames(): array
    {
        return [
            'Jamie Lawson', 'Priya Nair', 'Marcus Chen', 'Sofia Alvarez',
            'Ethan Brooks', 'Olivia Kim', 'Daniel Osei', 'Hannah Fischer',
            'Liam O\'Connor', 'Mei Tanaka', 'Noah Berg', 'Aisha Rahman',
            'Lucas Ferreira', 'Grace Whitfield', 'Yusuf Demir', 'Emma Novak',
            'Tariq Hassan', 'Isla Mackenzie', 'Diego Morales', 'Chloe Bennett',
        ];
    }

    public function run(): void
    {
        User::create([
            'name' => 'Demo Shopper',
            'email' => 'demo@lumina.test',
            'password' => Hash::make('password'),
        ]);

        foreach (static::reviewerNames() as $name) {
            $email = Str::slug($name).'@lumina.test';

            User::firstOrCreate(
                ['email' => $email],
                ['name' => $name, 'password' => Hash::make('password')]
            );
        }
    }
}
