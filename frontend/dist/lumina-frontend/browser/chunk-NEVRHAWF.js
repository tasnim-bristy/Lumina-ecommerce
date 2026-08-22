import {
  STORAGE_KEYS
} from "./chunk-3HG5S7OZ.js";
import {
  HttpClient,
  computed,
  environment,
  inject,
  map,
  signal,
  ɵɵdefineInjectable
} from "./chunk-HVBC7HBT.js";

// src/app/core/services/compare.service.ts
var MAX_COMPARE_ITEMS = 4;
var MIN_COMPARE_ITEMS = 2;
var CompareService = class _CompareService {
  constructor() {
    this.http = inject(HttpClient);
    this.idsSignal = signal(this.load());
    this.ids = this.idsSignal.asReadonly();
    this.count = computed(() => this.idsSignal().length);
    this.canAddMore = computed(() => this.idsSignal().length < MAX_COMPARE_ITEMS);
    this.canCompare = computed(() => this.idsSignal().length >= MIN_COMPARE_ITEMS);
  }
  isSelected(productId) {
    return this.idsSignal().includes(productId);
  }
  toggle(productId) {
    const current = this.idsSignal();
    if (current.includes(productId)) {
      this.setIds(current.filter((id) => id !== productId));
      return;
    }
    if (current.length >= MAX_COMPARE_ITEMS) {
      return;
    }
    this.setIds([...current, productId]);
  }
  remove(productId) {
    this.setIds(this.idsSignal().filter((id) => id !== productId));
  }
  clear() {
    this.setIds([]);
  }
  compare() {
    const ids = this.idsSignal();
    return this.http.get(`${environment.apiUrl}/products/compare`, {
      params: { ids: ids.join(",") }
    }).pipe(map((res) => res.data));
  }
  setIds(ids) {
    this.idsSignal.set(ids);
    localStorage.setItem(STORAGE_KEYS.compareIds, JSON.stringify(ids));
  }
  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.compareIds);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed.filter((id) => typeof id === "number") : [];
    } catch {
      return [];
    }
  }
  static {
    this.\u0275fac = function CompareService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CompareService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompareService, factory: _CompareService.\u0275fac, providedIn: "root" });
  }
};

export {
  MAX_COMPARE_ITEMS,
  MIN_COMPARE_ITEMS,
  CompareService
};
//# sourceMappingURL=chunk-NEVRHAWF.js.map
