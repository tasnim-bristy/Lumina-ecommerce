import {
  HttpClient,
  computed,
  environment,
  inject,
  map,
  signal,
  switchMap,
  tap,
  ɵɵdefineInjectable
} from "./chunk-HVBC7HBT.js";

// src/app/core/services/wishlist.service.ts
var WishlistService = class _WishlistService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = `${environment.apiUrl}/wishlist`;
    this.itemsSignal = signal([]);
    this.items = this.itemsSignal.asReadonly();
    this.count = computed(() => this.itemsSignal().length);
    this.productIds = computed(() => new Set(this.itemsSignal().map((item) => item.product.id)));
    this.refresh().subscribe();
  }
  /** GET /wishlist has a well-defined WishlistItem[] shape; the merge/mutation
   *  endpoints don't, so every mutation re-fetches this afterwards to stay
   *  in sync rather than guessing at their response bodies. */
  refresh() {
    return this.http.get(this.base).pipe(map((res) => Array.isArray(res) ? res : res.data), tap((items) => this.itemsSignal.set(items)));
  }
  isWishlisted(productId) {
    return this.productIds().has(productId);
  }
  add(productId) {
    return this.http.post(this.base, { product_id: productId }).pipe(switchMap(() => this.refresh()));
  }
  remove(productId) {
    return this.http.delete(`${this.base}/${productId}`).pipe(switchMap(() => this.refresh()));
  }
  toggle(productId) {
    return this.isWishlisted(productId) ? this.remove(productId) : this.add(productId);
  }
  /** Folds the current (guest) wishlist into the just-authenticated user's account. */
  mergeGuestWishlist() {
    const productIds = this.itemsSignal().map((item) => item.product.id);
    return this.http.post(`${this.base}/merge`, { product_ids: productIds }).pipe(switchMap(() => this.refresh()));
  }
  static {
    this.\u0275fac = function WishlistService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WishlistService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WishlistService, factory: _WishlistService.\u0275fac, providedIn: "root" });
  }
};

export {
  WishlistService
};
//# sourceMappingURL=chunk-LZEW6XII.js.map
