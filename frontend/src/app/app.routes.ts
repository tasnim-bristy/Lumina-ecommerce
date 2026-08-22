import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'Lumina — Thoughtfully Sourced Goods',
  },
  {
    path: 'category/:slug',
    loadComponent: () => import('./features/catalog/catalog.component').then((m) => m.CatalogComponent),
    title: 'Shop — Lumina',
  },
  {
    path: 'search',
    loadComponent: () => import('./features/catalog/catalog.component').then((m) => m.CatalogComponent),
    title: 'Search results — Lumina',
  },
  {
    path: 'product/:slug',
    loadComponent: () =>
      import('./features/product-detail/product-detail.component').then((m) => m.ProductDetailComponent),
    title: 'Lumina',
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/cart.component').then((m) => m.CartComponent),
    title: 'Your cart — Lumina',
  },
  {
    path: 'wishlist',
    loadComponent: () => import('./features/wishlist/wishlist.component').then((m) => m.WishlistComponent),
    title: 'Wishlist — Lumina',
  },
  {
    path: 'compare',
    loadComponent: () => import('./features/compare/compare.component').then((m) => m.CompareComponent),
    title: 'Compare products — Lumina',
  },
  {
    path: 'checkout',
    loadComponent: () => import('./features/checkout/checkout.component').then((m) => m.CheckoutComponent),
    title: 'Checkout — Lumina',
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.component').then((m) => m.LoginComponent),
    title: 'Log in — Lumina',
  },
  {
    path: 'register',
    loadComponent: () => import('./features/register/register.component').then((m) => m.RegisterComponent),
    title: 'Create account — Lumina',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
