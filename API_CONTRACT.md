# Lumina — API Contract & Design Brief

Shared contract between the Laravel backend (`/backend`) and the Angular + UI5 Web Components
frontend (`/frontend`). Both sides must conform to this exactly so they integrate without
either side having run the other.

## Brand & design tokens

Product name: **Lumina**. Feel: quiet, premium, editorial — not a generic template.

```
--color-cream:        #FAF7F2   /* page background */
--color-cream-soft:   #F3EEE4   /* alt section background */
--color-beige:        #E8DCC8   /* card / surface fill */
--color-beige-warm:   #DDCBA8   /* hover surface */
--color-sage:         #9CAF88   /* primary accent (buttons, links, active states) */
--color-sage-deep:    #7C9470   /* primary hover/active */
--color-sage-pale:    #E4EADC   /* tinted backgrounds, badges */
--color-charcoal:     #2F2E2B   /* headings, primary text */
--color-charcoal-soft:#5B584F   /* body text */
--color-gold:         #C9A66B   /* sparing use: sale badge, rating stars, premium highlight */
--color-border:       #E2D9C8
```

Typography: display/headings use a refined serif (`Fraunces`, Google Fonts), body/UI uses a
clean grotesk (`Manrope`, Google Fonts). Generous whitespace, thin 1px borders instead of heavy
drop shadows, 10–14px corner radii, asymmetric editorial layout on the homepage (not a uniform
grid), scroll-reveal fades, hover-lift on cards, skeleton shimmer while loading, animated
micro-interactions on add-to-cart / add-to-wishlist.

## Auth model

Token-based (Laravel Sanctum personal access tokens), **not** cookie/session — the frontend is a
separately-served SPA, so plain `Authorization: Bearer <token>` avoids CORS/CSRF domain
headaches entirely.

Guests are first-class: every client generates a `guest_token` (UUID v4) on first load, persists
it in `localStorage`, and sends it as header `X-Guest-Token` on every request. Cart and wishlist
rows are keyed by `user_id` OR `guest_token` (whichever is present). On login, the frontend calls
`POST /api/cart/merge` and `POST /api/wishlist/merge` to fold guest data into the user's account.

Headers:
- `Authorization: Bearer <token>` — present once logged in.
- `X-Guest-Token: <uuid>` — always present.
- `Accept: application/json`, `Content-Type: application/json`.

## Response envelope

Collections:
```json
{ "data": [ ... ], "meta": { "current_page": 1, "last_page": 4, "per_page": 20, "total": 78 } }
```
Single resources: `{ "data": { ... } }`.
Errors: `{ "message": "...", "errors": { "field": ["..."] } }` with standard 4xx/5xx status.

## Core resource shapes

**Category**
```json
{ "id": 1, "name": "Electronics", "slug": "electronics", "icon": "monitor", "parent_id": null,
  "hero_image": "https://picsum.photos/seed/electronics/800/600", "children": [ { "...same shape, no children key" } ] }
```

**Product (list item)**
```json
{
  "id": 101, "name": "Aria Wireless Headphones", "slug": "aria-wireless-headphones",
  "brand": "Novatone", "category": { "id": 1, "name": "Electronics", "slug": "electronics" },
  "price": 6500.00, "compare_at_price": 8125.00, "currency": "BDT",
  "rating_avg": 4.6, "rating_count": 214, "stock": 42, "is_featured": true,
  "thumbnail": "https://picsum.photos/seed/p101/600/600",
  "attributes": { "color": "Sand Beige", "connectivity": "Bluetooth 5.3" },
  "created_at": "2026-05-01T10:00:00Z"
}
```

**Product (detail)** — list shape plus:
```json
{ "description": "...", "images": ["https://picsum.photos/seed/p101a/1000/1000", "..."],
  "sku": "NV-ARIA-BG", "reviews_summary": { "avg": 4.6, "count": 214, "breakdown": {"5":150,"4":40,"3":15,"2":6,"1":3} } }
```

**Review**: `{ "id": 1, "user_name": "Jamie L.", "rating": 5, "comment": "...", "created_at": "..." }`

**CartItem**: `{ "id": 5, "product": { ...list-item shape... }, "quantity": 2, "line_total": 258.00 }`
**Cart**: `{ "id": 9, "items": [ ...CartItem ], "subtotal": 258.00, "item_count": 2 }`

**WishlistItem**: `{ "id": 3, "product": { ...list-item shape... }, "added_at": "..." }`

## Endpoints

Base URL: `/api`

| Method | Path | Notes |
|---|---|---|
| GET | `/categories` | nested tree, smart-category icons |
| GET | `/products` | query: `q, category, min_price, max_price, brands[], rating_min, sort(price_asc|price_desc|newest|rating|popularity), page, per_page` |
| GET | `/products/{slug}` | detail |
| GET | `/products/{id}/reviews` | paginated |
| POST | `/products/{id}/reviews` | auth required, `{rating, comment}` |
| GET | `/products/compare?ids=1,2,3` | `{ "data": { "products": [...detail-ish...], "attribute_keys": ["color","connectivity",...] } }` |
| GET | `/brands?category=slug` | `[{ "name": "Novatone", "count": 12 }]` facet list |
| GET | `/search/suggestions?q=` | `{ "products": [{id,name,slug,thumbnail,price}], "categories": [{id,name,slug}] }` typeahead, debounced client-side |
| GET | `/wishlist` | |
| POST | `/wishlist` | `{product_id}` |
| DELETE | `/wishlist/{product_id}` | |
| POST | `/wishlist/merge` | `{product_ids: [...]}` |
| GET | `/cart` | |
| POST | `/cart/items` | `{product_id, quantity}` |
| PATCH | `/cart/items/{id}` | `{quantity}` |
| DELETE | `/cart/items/{id}` | |
| POST | `/cart/merge` | `{items: [{product_id, quantity}]}` |
| GET | `/recommendations/trending` | top viewed/rated last 30 days |
| GET | `/recommendations/similar/{product_id}` | same-category + attribute-overlap scoring |
| GET | `/recommendations/for-you` | content-based on view/wishlist/cart/order history (user or guest_token) |
| POST | `/recommendations/track-view` | `{product_id}` fire-and-forget, powers for-you + trending |
| POST | `/checkout` | `{shipping_address, payment_method}` → creates order from cart. `payment_method` is one of `bkash`, `nagad`, `rocket`, `card`, `cash_on_delivery` (see `config/payment_methods.php`). `shipping_address` is Bangladesh-specific: `{full_name, mobile_number, division, district, upazila, area, address, postal_code, country: "Bangladesh"}` — stored as-is (JSON column), not validated field-by-field |
| GET | `/orders` | auth |
| POST | `/register` | `{name, email, password}` → `{token, user}` |
| POST | `/login` | `{email, password}` → `{token, user}` |
| POST | `/logout` | auth |
| GET | `/me` | auth |

## Catalog breadth (seed data)

Seed at least 8 top-level categories (Electronics, Fashion, Home & Living, Beauty & Personal
Care, Sports & Outdoors, Books & Media, Toys & Kids, Grocery & Gourmet) each with 2–4
subcategories, and 80–120 products spread realistically across them with varied price points,
brands, ratings, stock levels, and a handful of `attributes` keys per category (e.g. Fashion:
size/color/material; Electronics: connectivity/battery_life/color) so filtering and comparison
have real substance. Use `https://picsum.photos/seed/{unique-seed}/{w}/{h}` for image URLs so no
binary assets are needed.
