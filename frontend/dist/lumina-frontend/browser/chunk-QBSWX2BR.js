import {
  HttpClient,
  environment,
  inject,
  map,
  shareReplay,
  ɵɵdefineInjectable
} from "./chunk-HVBC7HBT.js";

// src/app/core/services/category.service.ts
var CategoryService = class _CategoryService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = `${environment.apiUrl}/categories`;
    this.treeCache$ = this.http.get(this.base).pipe(map((res) => Array.isArray(res) ? res : res.data), shareReplay({ bufferSize: 1, refCount: false }));
  }
  getTree() {
    return this.treeCache$;
  }
  static {
    this.\u0275fac = function CategoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CategoryService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategoryService, factory: _CategoryService.\u0275fac, providedIn: "root" });
  }
};

export {
  CategoryService
};
//# sourceMappingURL=chunk-QBSWX2BR.js.map
