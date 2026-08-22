import {
  HttpClient,
  computed,
  environment,
  finalize,
  inject,
  map,
  signal,
  switchMap,
  tap,
  ɵɵdefineInjectable
} from "./chunk-HVBC7HBT.js";

// src/app/core/services/cart.service.ts
var EMPTY_CART = { id: 0, items: [], subtotal: 0, item_count: 0 };
var CartService = class _CartService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = `${environment.apiUrl}/cart`;
    this.cartSignal = signal(EMPTY_CART);
    this.loadingSignal = signal(false);
    this.cart = this.cartSignal.asReadonly();
    this.itemCount = computed(() => this.cartSignal().item_count);
    this.subtotal = computed(() => this.cartSignal().subtotal);
    this.loading = this.loadingSignal.asReadonly();
    this.refresh().subscribe();
  }
  refresh() {
    this.loadingSignal.set(true);
    return this.http.get(this.base).pipe(map((res) => res.data), tap((cart) => this.cartSignal.set(cart)), finalize(() => this.loadingSignal.set(false)));
  }
  // The mutation endpoints (add/update/remove/merge) re-fetch the canonical
  // cart afterwards rather than trusting an assumed response body shape,
  // since the contract only documents the Cart resource returned by GET.
  addItem(productId, quantity = 1) {
    return this.http.post(`${this.base}/items`, { product_id: productId, quantity }).pipe(switchMap(() => this.refresh()));
  }
  updateQuantity(itemId, quantity) {
    return this.http.patch(`${this.base}/items/${itemId}`, { quantity }).pipe(switchMap(() => this.refresh()));
  }
  removeItem(itemId) {
    return this.http.delete(`${this.base}/items/${itemId}`).pipe(switchMap(() => this.refresh()));
  }
  /** Folds the current (guest) cart into the just-authenticated user's account. */
  mergeGuestCart() {
    const items = this.cartSignal().items.map((item) => ({
      product_id: item.product.id,
      quantity: item.quantity
    }));
    return this.http.post(`${this.base}/merge`, { items }).pipe(switchMap(() => this.refresh()));
  }
  static {
    this.\u0275fac = function CartService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
  }
};

export {
  CartService
};
//# sourceMappingURL=chunk-TO3NWCGE.js.map
