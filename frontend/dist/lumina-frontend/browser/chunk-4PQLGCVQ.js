import {
  HttpClient,
  catchError,
  environment,
  inject,
  map,
  of,
  ɵɵdefineInjectable
} from "./chunk-HVBC7HBT.js";

// src/app/core/services/recommendation.service.ts
var RecommendationService = class _RecommendationService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = `${environment.apiUrl}/recommendations`;
  }
  trending() {
    return this.fetchList(`${this.base}/trending`);
  }
  similar(productId) {
    return this.fetchList(`${this.base}/similar/${productId}`);
  }
  /** Content-based on view/wishlist/cart/order history; empty for a brand-new
   *  guest, so callers should hide the section rather than show an empty rail. */
  forYou() {
    return this.fetchList(`${this.base}/for-you`);
  }
  /** Fire-and-forget: powers for-you + trending, never blocks the UI on failure. */
  trackView(productId) {
    this.http.post(`${this.base}/track-view`, { product_id: productId }).pipe(catchError(() => of(null))).subscribe();
  }
  fetchList(url) {
    return this.http.get(url).pipe(map((res) => Array.isArray(res) ? res : res.data), catchError(() => of([])));
  }
  static {
    this.\u0275fac = function RecommendationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RecommendationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RecommendationService, factory: _RecommendationService.\u0275fac, providedIn: "root" });
  }
};

export {
  RecommendationService
};
//# sourceMappingURL=chunk-4PQLGCVQ.js.map
