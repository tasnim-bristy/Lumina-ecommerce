# Lumina — Backend API

Laravel 11 JSON API backend for Lumina, a premium multi-category e-commerce storefront. This
service implements `API_CONTRACT.md` (in the repo root) exactly — see that file for the full
endpoint table and response shapes; this README only covers running the app.

## Requirements

- PHP 8.2+
- Composer
- SQLite (bundled with PHP's `pdo_sqlite` extension) — or MySQL/PostgreSQL if you'd rather not
  use the zero-config default

## Setup

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate

# SQLite is the default in .env.example — create the empty database file:
touch database/database.sqlite
# (If you'd rather use MySQL/Postgres, edit the DB_* variables in .env instead
# and skip this step.)

php artisan migrate --seed
php artisan serve
```

The API is now served at `http://localhost:8000/api`. A demo account is seeded for convenience:
`demo@lumina.test` / `password`.

## Auth & guest model

Auth is Sanctum **personal access tokens**, not cookies — `POST /register` and `POST /login`
return `{ token, user }`, and every subsequent authenticated request sends
`Authorization: Bearer <token>`. This keeps the API fully decoupled from the frontend's origin
with no CORS/CSRF cookie complexity (see `config/cors.php`, which has `supports_credentials`
set to `false` for exactly this reason).

Guests are first-class, not an afterthought: every request may carry an `X-Guest-Token: <uuid>`
header (a UUID the frontend generates once and persists in `localStorage`). Cart, wishlist,
recommendation, and order rows are keyed by `user_id` OR `guest_token` — never both. The shared
resolution logic lives in `app/Http/Controllers/Concerns/ResolvesActor.php`, a trait used by
`CartController`, `WishlistController`, `RecommendationController`, and `CheckoutController` to
figure out "who is making this request" without duplicating that logic per controller. When a
guest logs in, the frontend calls `POST /cart/merge` and `POST /wishlist/merge`, which fold the
guest-owned rows (matched by the request's `X-Guest-Token`) into the now-authenticated account
and delete the guest rows.

## Recommendation logic

All of it is content-based and dependency-free — no ML libraries — and lives in
`app/Http/Controllers/Api/RecommendationController.php`:

- **`trending`**: recency-weighted `product_views` over the last 30 days (a view from today
  counts more than a view from three weeks ago); falls back to `rating_count`/`rating_avg` when
  views are sparse (e.g. right after seeding).
- **`similar/{product}`**: same category first, ranked by `attributes` key/value overlap plus
  price closeness to the target product; tops up with trending products if the category is too
  thin to fill a full page.
- **`for-you`**: builds a category + attribute affinity profile from the current actor's past
  orders (weight 4), cart (weight 3), wishlist (weight 2), and product views (weight 1), then
  ranks unseen/unowned products by that affinity score. Falls back to `trending` when the actor
  has no history at all.
- **`track-view`**: upserts a single `product_views` row per actor+product (bumping
  `view_count`/`viewed_at` on repeat views instead of inserting a new row every time), which is
  what feeds both `trending` and `for-you`.

## Notable structure

- `app/Http/Controllers/Concerns/ResolvesActor.php` — the guest-vs-user resolver described above.
- `app/Http/Resources/` — response shapes; `ProductResource` and `CategoryResource` each take a
  flag (`->detailed()` / children depth) so the list and detail shapes share one source of truth.
- `database/seeders/` — `CategorySeeder` (8 top-level categories × 2-4 subcategories),
  `ProductSeeder` (~100 products with category-appropriate `attributes`, e.g. size/color/material
  for fashion, connectivity/battery_life/color for electronics), `ReviewSeeder` (0-18 realistic
  reviews per product feeding the denormalized `rating_avg`/`rating_count` columns), and
  `UserSeeder` (a demo account plus the reviewer pool).
- `routes/api.php` — every endpoint from `API_CONTRACT.md`, in the same order as the contract's
  table, with `auth:sanctum` applied exactly where the contract marks a row "auth required".
