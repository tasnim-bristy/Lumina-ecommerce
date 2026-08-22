# Lumina — Frontend

A premium, multi-category storefront built with Angular 18 (standalone components,
signals, `provideRouter`/`provideHttpClient`) and [UI5 Web Components for Angular](https://github.com/SAP/ui5-webcomponents-ngx)
(`@ui5/webcomponents-ngx`), re-themed from stock Fiori blue into a quiet, editorial
palette. It talks to the Laravel API described in `../API_CONTRACT.md` — read that
file first if you're touching services under `src/app/core`.

## Getting started

Requires Node.js 18+ and npm. This workspace was hand-assembled (not generated with
`ng new`), so the first install pulls in the full Angular CLI toolchain.

```bash
npm install
npm start          # ng serve — http://localhost:4200, proxies nothing; see API URL below
```

Other scripts:

```bash
npm run build       # production build to dist/lumina-frontend
npm run watch       # dev build, rebuilds on change
npm test            # Karma/Jasmine unit tests
```

### Pointing at the API

The API base URL is `environment.apiUrl`, defaulting to `http://localhost:8000/api`
in both `src/environments/environment.ts` (production) and
`environment.development.ts` (used automatically by `ng serve` / the `development`
configuration). Change it there if the Laravel backend runs elsewhere. CORS must
allow the Angular dev origin (`http://localhost:4200`) since this is a plain SPA
calling a separately-hosted API with `Authorization: Bearer <token>` — no
cookie/session auth, so there's no CSRF/domain coupling to configure.

Every request automatically carries:
- `X-Guest-Token` — a UUID v4 generated on first load and persisted in
  `localStorage` (`GuestTokenService`), so carts/wishlists/recommendations work
  for anonymous visitors.
- `Authorization: Bearer <token>` — added once a visitor logs in or registers.

Both headers are attached by the functional interceptor in
`src/app/core/interceptors/auth.interceptor.ts`.

## Design philosophy

Lumina is meant to read as **quiet, premium, and editorial** — a considered shop,
not a template. A few decisions that follow from that:

- **Palette**: warm cream/beige surfaces, sage green as the one confident accent,
  charcoal text, and gold used sparingly for ratings and sale badges — see the
  full token list at the top of `src/styles.scss`, mirrored exactly from
  `API_CONTRACT.md`.
- **Type**: `Fraunces` (serif) for headings and product names, `Manrope` (grotesk)
  for body/UI — loaded from Google Fonts in `src/index.html`.
- **Editorial asymmetry**: the homepage hero is two unevenly-weighted columns with
  overlapping, offset imagery rather than a centered banner; the category
  showcase grid gives its first tile a deliberately larger footprint instead of a
  uniform grid.
- **Restrained motion**: thin 1px borders instead of drop shadows, a shared
  `hover-lift` on cards, a shared scroll-reveal (`ScrollRevealDirective` +
  `.reveal`/`.is-visible` in `styles.scss`) that fades/slides sections in once as
  they enter the viewport, and a shimmer keyframe for loading skeletons. All of
  it is disabled under `prefers-reduced-motion: reduce`.
- **UI5, re-skinned**: components are the real `@ui5/webcomponents` custom
  elements (accessibility and keyboard behavior included) with their Fiori CSS
  variables (`--sapButton_Background`, `--sapContent_LabelColor`, etc.) remapped
  to the Lumina palette in `styles.scss`, rather than fighting the components
  with overrides everywhere they render.

## Screens

All routes are lazy-loaded standalone components (`src/app/app.routes.ts`):

| Route | Component | Notes |
|---|---|---|
| `/` | Home | Asymmetric hero, category showcase, trending rail, personalized-for-you rail (hides itself for a guest with no signal yet) |
| `/category/:slug` | Catalog | Filter rail (price range, brand facets with counts, rating), sort, pagination |
| `/search?q=` | Catalog | Same component, driven by the query string; reachable from the header's debounced search/typeahead |
| `/product/:slug` | Product detail | Gallery, rating breakdown, quantity stepper, wishlist/compare toggles, attributes table, reviews + auth-gated review form, similar-products rail |
| `/cart` | Cart | Line items, quantity controls, subtotal, empty state, checkout CTA |
| `/wishlist` | Wishlist | Saved products, move-to-cart, remove |
| `/compare` | Compare | 2–4 products picked from anywhere in the app (persisted via `CompareService` + `localStorage`), side-by-side attribute table |
| `/checkout` | Checkout | Shipping address + mock payment method (no real gateway), places the order, confirmation state |
| `/login`, `/register` | Auth | Merge the guest cart/wishlist into the account on success |

The persistent app shell (`src/app/layout`) provides the logo, search with
suggestions, category nav, and cart/wishlist/compare/account icons with live
counts, plus a footer — both present on every route via `app.component.html`.

## Structure

```
src/app/
  core/            # models, HttpClient-based services, the auth interceptor
  shared/          # product-card, star-rating, price-tag, skeleton-loader,
                   # empty-state, and the scroll-reveal directive
  layout/          # header + footer (the persistent shell)
  features/        # one folder per routed screen
```

Services expose signals for local/derived UI state (cart count, wishlist
membership, compare selection, current user) and Observables for one-shot HTTP
calls, following the shared response envelope in `API_CONTRACT.md`
(`{ data, meta }` for collections, `{ data }` for single resources).
