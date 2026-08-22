import {
  HttpClient,
  HttpParams,
  environment,
  inject,
  map,
  ɵɵdefineInjectable
} from "./chunk-HVBC7HBT.js";

// src/app/core/services/product.service.ts
var ProductService = class _ProductService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = `${environment.apiUrl}/products`;
  }
  list(query = {}) {
    return this.http.get(this.base, { params: this.toParams(query) });
  }
  getBySlug(slug) {
    return this.http.get(`${this.base}/${slug}`).pipe(map((res) => res.data));
  }
  getReviews(productId, page = 1) {
    return this.http.get(`${this.base}/${productId}/reviews`, {
      params: { page }
    });
  }
  submitReview(productId, rating, comment) {
    return this.http.post(`${this.base}/${productId}/reviews`, { rating, comment }).pipe(map((res) => res.data));
  }
  // Note: GET /products/compare is called from CompareService, which owns the
  // client-side compare selection end-to-end (see core/services/compare.service.ts).
  getBrands(categorySlug) {
    const params = categorySlug ? new HttpParams().set("category", categorySlug) : void 0;
    return this.http.get(`${environment.apiUrl}/brands`, { params });
  }
  toParams(query) {
    let params = new HttpParams();
    if (query.q)
      params = params.set("q", query.q);
    if (query.category)
      params = params.set("category", query.category);
    if (query.min_price != null)
      params = params.set("min_price", query.min_price);
    if (query.max_price != null)
      params = params.set("max_price", query.max_price);
    if (query.rating_min != null)
      params = params.set("rating_min", query.rating_min);
    if (query.sort)
      params = params.set("sort", query.sort);
    if (query.page != null)
      params = params.set("page", query.page);
    if (query.per_page != null)
      params = params.set("per_page", query.per_page);
    for (const brand of query.brands ?? []) {
      params = params.append("brands[]", brand);
    }
    return params;
  }
  static {
    this.\u0275fac = function ProductService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac, providedIn: "root" });
  }
};

export {
  ProductService
};
//# sourceMappingURL=chunk-FUSKKTUK.js.map
