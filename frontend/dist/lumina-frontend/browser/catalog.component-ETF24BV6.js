import {
  CategoryService
} from "./chunk-QBSWX2BR.js";
import {
  ProductService
} from "./chunk-FUSKKTUK.js";
import {
  ProductCardComponent
} from "./chunk-XYWMIQOV.js";
import "./chunk-VOMM6CVB.js";
import {
  SkeletonLoaderComponent
} from "./chunk-IDJ5IA4L.js";
import {
  takeUntilDestroyed,
  toSignal
} from "./chunk-27YFXVTK.js";
import "./chunk-NEVRHAWF.js";
import "./chunk-3HG5S7OZ.js";
import "./chunk-NENRD53V.js";
import "./chunk-LZEW6XII.js";
import {
  EmptyStateComponent
} from "./chunk-IFGUBMIF.js";
import "./chunk-TO3NWCGE.js";
import {
  ActivatedRoute,
  CommonModule,
  CurrencyPipe,
  combineLatest,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-HVBC7HBT.js";
import "./chunk-5K356HEJ.js";

// src/app/features/catalog/catalog.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.label;
var _forTrack2 = ($index, $item) => $item.name;
var _forTrack3 = ($index, $item) => $item.id;
var _c0 = () => [4, 3, 2, 1];
function CatalogComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.meta().total, " results");
  }
}
function CatalogComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function CatalogComponent_Conditional_5_For_2_Template_button_click_0_listener() {
      const chip_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(chip_r4.clear());
    });
    \u0275\u0275text(1);
    \u0275\u0275element(2, "ui5-icon", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chip_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", chip_r4.label, " ");
  }
}
function CatalogComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, CatalogComponent_Conditional_5_For_2_Template, 3, 1, "button", 32, _forTrack1);
    \u0275\u0275elementStart(3, "button", 33);
    \u0275\u0275listener("click", function CatalogComponent_Conditional_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearAllFilters());
    });
    \u0275\u0275text(4, "Clear all");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.activeFilterChips());
  }
}
function CatalogComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275listener("click", function CatalogComponent_Conditional_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeFiltersDrawer());
    });
    \u0275\u0275elementEnd();
  }
}
function CatalogComponent_Conditional_29_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 37)(1, "ui5-checkbox", 38);
    \u0275\u0275listener("change", function CatalogComponent_Conditional_29_For_9_Template_ui5_checkbox_change_1_listener($event) {
      const brand_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onBrandCheckboxChange(brand_r8.name, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const brand_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.selectedBrands().includes(brand_r8.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", brand_r8.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", brand_r8.count, ")");
  }
}
function CatalogComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 11);
    \u0275\u0275listener("click", function CatalogComponent_Conditional_29_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleFilterGroup("brand"));
    });
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "Brand");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "ui5-icon", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13)(6, "div", 14)(7, "div", 17);
    \u0275\u0275repeaterCreate(8, CatalogComponent_Conditional_29_For_9_Template, 6, 3, "label", 37, _forTrack2);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-collapsed", !ctx_r0.brandExpanded());
    \u0275\u0275advance();
    \u0275\u0275classProp("is-collapsed", !ctx_r0.brandExpanded());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.brands());
  }
}
function CatalogComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function CatalogComponent_For_39_Template_button_click_0_listener() {
      const stars_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setRatingMin(stars_r10));
    });
    \u0275\u0275element(1, "ui5-icon", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stars_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-active", ctx_r0.ratingMin() === stars_r10);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", stars_r10, " & up ");
  }
}
function CatalogComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function CatalogComponent_Conditional_42_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeFiltersDrawer());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Show ", (tmp_1_0 = (tmp_1_0 = ctx_r0.meta()) == null ? null : tmp_1_0.total) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "", " results ");
  }
}
function CatalogComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.activeFilterChips().length);
  }
}
function CatalogComponent_For_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function CatalogComponent_For_52_Template_button_click_0_listener() {
      const choice_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setSort(choice_r13.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const choice_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-active", choice_r13.value === ctx_r0.sort());
    \u0275\u0275attribute("aria-checked", choice_r13.value === ctx_r0.sort());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", choice_r13.label, " ");
  }
}
function CatalogComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-loader", 29);
  }
  if (rf & 2) {
    \u0275\u0275property("count", 8);
  }
}
function CatalogComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 30);
  }
}
function CatalogComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 31);
  }
}
function CatalogComponent_Conditional_56_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-card", 45);
  }
  if (rf & 2) {
    const product_r14 = ctx.$implicit;
    \u0275\u0275property("product", product_r14);
  }
}
function CatalogComponent_Conditional_56_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function CatalogComponent_Conditional_56_Conditional_3_For_4_Template_button_click_0_listener() {
      const n_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.goToPage(n_r17));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r17 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("is-active", n_r17 === ctx_r0.page());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", n_r17, " ");
  }
}
function CatalogComponent_Conditional_56_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 46)(1, "button", 47);
    \u0275\u0275listener("click", function CatalogComponent_Conditional_56_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.page() - 1));
    });
    \u0275\u0275text(2, "Previous");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, CatalogComponent_Conditional_56_Conditional_3_For_4_Template, 2, 3, "button", 48, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(5, "button", 47);
    \u0275\u0275listener("click", function CatalogComponent_Conditional_56_Conditional_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.page() + 1));
    });
    \u0275\u0275text(6, " Next ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.page() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.pageNumbers());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.page() === ctx_r0.meta().last_page);
  }
}
function CatalogComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275repeaterCreate(1, CatalogComponent_Conditional_56_For_2_Template, 1, 1, "app-product-card", 45, _forTrack3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CatalogComponent_Conditional_56_Conditional_3_Template, 7, 2, "nav", 46);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("pulse-once", ctx_r0.resultsJustUpdated());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.products());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.meta() && ctx_r0.meta().last_page > 1 ? 3 : -1);
  }
}
var SORT_CHOICES = [
  { value: "popularity", label: "Most popular" },
  { value: "newest", label: "Newest" },
  { value: "price_asc", label: "Price: low to high" },
  { value: "price_desc", label: "Price: high to low" },
  { value: "rating", label: "Highest rated" }
];
var PER_PAGE = 24;
var MAX_PRICE_CEILING = 15e4;
var CatalogComponent = class _CatalogComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.productService = inject(ProductService);
    this.categoryService = inject(CategoryService);
    this.currencyPipe = inject(CurrencyPipe);
    this.categoryTree = toSignal(this.categoryService.getTree(), { initialValue: [] });
    this.sortChoices = SORT_CHOICES;
    this.priceCeiling = MAX_PRICE_CEILING;
    this.categorySlug = signal(null);
    this.searchQuery = signal(null);
    this.minPrice = signal(0);
    this.maxPrice = signal(MAX_PRICE_CEILING);
    this.selectedBrands = signal([]);
    this.ratingMin = signal(null);
    this.sort = signal("popularity");
    this.page = signal(1);
    this.brands = signal([]);
    this.result = signal(null);
    this.loading = signal(true);
    this.error = signal(false);
    this.priceExpanded = signal(true);
    this.brandExpanded = signal(true);
    this.ratingExpanded = signal(true);
    this.filtersDrawerOpen = signal(false);
    this.resultsJustUpdated = signal(false);
    this.hasLoadedOnce = false;
    this.products = computed(() => this.result()?.data ?? []);
    this.meta = computed(() => this.result()?.meta ?? null);
    this.currentCategory = computed(() => {
      const slug = this.categorySlug();
      if (!slug)
        return null;
      return this.findCategoryBySlug(this.categoryTree(), slug);
    });
    this.heading = computed(() => {
      if (this.searchQuery())
        return `Results for "${this.searchQuery()}"`;
      return this.currentCategory()?.name ?? "All products";
    });
    this.pageNumbers = computed(() => {
      const meta = this.meta();
      if (!meta)
        return [];
      return Array.from({ length: meta.last_page }, (_, i) => i + 1);
    });
    this.activeFilterChips = computed(() => {
      const chips = [];
      const min = this.minPrice();
      const max = this.maxPrice();
      if (min > 0 || max < this.priceCeiling) {
        chips.push({
          label: `${this.formatPrice(min)}\u2013${this.formatPrice(max)}${max === this.priceCeiling ? "+" : ""}`,
          clear: () => this.onPriceRangeChange(0, this.priceCeiling)
        });
      }
      for (const brand of this.selectedBrands()) {
        chips.push({ label: brand, clear: () => this.toggleBrand(brand, false) });
      }
      const rating = this.ratingMin();
      if (rating !== null) {
        chips.push({ label: `${rating}\u2605 & up`, clear: () => this.setRatingMin(null) });
      }
      return chips;
    });
    combineLatest([this.route.paramMap, this.route.queryParamMap]).pipe(takeUntilDestroyed()).subscribe(([params, query]) => {
      const category = params.get("slug");
      const q = query.get("q");
      const categoryChanged = category !== this.categorySlug();
      this.categorySlug.set(category);
      this.searchQuery.set(q);
      this.page.set(1);
      if (categoryChanged) {
        this.resetFilters();
        this.loadBrands();
      }
      const sortParam = query.get("sort");
      if (sortParam && this.sortChoices.some((choice) => choice.value === sortParam)) {
        this.sort.set(sortParam);
      }
      const ratingParam = query.get("rating_min");
      if (ratingParam) {
        this.ratingMin.set(Number(ratingParam));
      }
      this.loadProducts();
    });
  }
  loadBrands() {
    this.productService.getBrands(this.categorySlug() ?? void 0).subscribe({
      next: (brands) => this.brands.set(brands),
      error: () => this.brands.set([])
    });
  }
  loadProducts() {
    this.loading.set(true);
    this.error.set(false);
    const isInitialLoad = !this.hasLoadedOnce;
    this.productService.list({
      category: this.categorySlug() ?? void 0,
      q: this.searchQuery() ?? void 0,
      min_price: this.minPrice() > 0 ? this.minPrice() : void 0,
      max_price: this.maxPrice() < this.priceCeiling ? this.maxPrice() : void 0,
      brands: this.selectedBrands().length ? this.selectedBrands() : void 0,
      rating_min: this.ratingMin() ?? void 0,
      sort: this.sort(),
      page: this.page(),
      per_page: PER_PAGE
    }).subscribe({
      next: (res) => {
        this.result.set(res);
        this.loading.set(false);
        this.hasLoadedOnce = true;
        if (!isInitialLoad) {
          this.resultsJustUpdated.set(true);
          setTimeout(() => this.resultsJustUpdated.set(false), 400);
        }
      },
      error: () => {
        this.result.set(null);
        this.loading.set(false);
        this.error.set(true);
      }
    });
  }
  resetFilters() {
    this.minPrice.set(0);
    this.maxPrice.set(MAX_PRICE_CEILING);
    this.selectedBrands.set([]);
    this.ratingMin.set(null);
  }
  onPriceRangeChange(min, max) {
    this.minPrice.set(min);
    this.maxPrice.set(max);
    this.page.set(1);
    this.loadProducts();
  }
  toggleBrand(brand, checked) {
    const current = this.selectedBrands();
    this.selectedBrands.set(checked ? [...current, brand] : current.filter((b) => b !== brand));
    this.page.set(1);
    this.loadProducts();
  }
  setRatingMin(value) {
    this.ratingMin.set(this.ratingMin() === value ? null : value);
    this.page.set(1);
    this.loadProducts();
  }
  setSort(value) {
    this.sort.set(value);
    this.page.set(1);
    this.loadProducts();
  }
  goToPage(page) {
    if (page < 1 || this.meta() && page > this.meta().last_page)
      return;
    this.page.set(page);
    this.loadProducts();
  }
  clearAllFilters() {
    this.resetFilters();
    this.sort.set("popularity");
    this.page.set(1);
    this.loadProducts();
  }
  formatPrice(value) {
    return this.currencyPipe.transform(value, "BDT", "symbol-narrow", "1.0-0") ?? `${value}`;
  }
  toggleFilterGroup(group) {
    const target = group === "price" ? this.priceExpanded : group === "brand" ? this.brandExpanded : this.ratingExpanded;
    target.set(!target());
  }
  openFiltersDrawer() {
    this.filtersDrawerOpen.set(true);
    document.body.style.overflow = "hidden";
  }
  closeFiltersDrawer() {
    this.filtersDrawerOpen.set(false);
    document.body.style.overflow = "";
  }
  findCategoryBySlug(categories, slug) {
    for (const category of categories) {
      if (category.slug === slug)
        return category;
      if (category.children?.length) {
        const found = this.findCategoryBySlug(category.children, slug);
        if (found)
          return found;
      }
    }
    return null;
  }
  onPriceSliderChange(event) {
    const el = event.target;
    this.onPriceRangeChange(Math.round(el.valueStart), Math.round(el.valueEnd));
  }
  onBrandCheckboxChange(brand, event) {
    const checked = event.target.checked;
    this.toggleBrand(brand, checked);
  }
  static {
    this.\u0275fac = function CatalogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CatalogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogComponent, selectors: [["app-catalog"]], standalone: true, features: [\u0275\u0275ProvidersFeature([CurrencyPipe]), \u0275\u0275StandaloneFeature], decls: 57, vars: 35, consts: [[1, "page-container", "catalog"], [1, "catalog__header"], [1, "catalog__count"], [1, "catalog__chips"], [1, "catalog__layout"], [1, "catalog__drawer-scrim"], [1, "catalog__filters"], [1, "catalog__filters-header"], ["type", "button", "aria-label", "Close filters", 1, "catalog__filters-close", 3, "click"], ["name", "decline"], [1, "filter-block"], ["type", "button", 1, "filter-block__toggle", 3, "click"], ["name", "slim-arrow-down", 1, "filter-block__chevron"], [1, "filter-block__collapse"], [1, "filter-block__collapse-inner"], ["min", "0", "step", "500", "show-tooltip", "", 1, "filter-block__slider", 3, "change", "max", "valueStart", "valueEnd"], [1, "filter-block__price-labels"], [1, "filter-block__list"], ["type", "button", 1, "rating-filter", 3, "is-active"], ["type", "button", 1, "filter-block__clear", 3, "click"], ["type", "button", 1, "catalog__drawer-apply"], [1, "catalog__results"], [1, "catalog__toolbar"], ["type", "button", 1, "catalog__filters-trigger", 3, "click"], ["name", "filter"], [1, "catalog__filters-trigger-count"], [1, "catalog__toolbar-spacer"], ["role", "radiogroup", "aria-label", "Sort by", 1, "sort-control"], ["type", "button", "role", "radio", 1, "sort-control__option", 3, "is-active"], ["variant", "card", 3, "count"], ["icon", "message-error", "title", "Something went wrong", "message", "We couldn't load these products. Please try again in a moment."], ["icon", "search", "title", "No products match those filters", "message", "Try widening your price range or clearing a filter.", "actionLabel", "Continue shopping", "actionRoute", "/"], ["type", "button", 1, "filter-chip"], ["type", "button", 1, "catalog__chips-clear", 3, "click"], ["type", "button", 1, "filter-chip", 3, "click"], ["name", "decline", 1, "filter-chip__icon"], [1, "catalog__drawer-scrim", 3, "click"], [1, "filter-checkbox"], [3, "change", "checked"], [1, "filter-checkbox__count"], ["type", "button", 1, "rating-filter", 3, "click"], ["name", "favorite", 1, "rating-filter__star"], ["type", "button", 1, "catalog__drawer-apply", 3, "click"], ["type", "button", "role", "radio", 1, "sort-control__option", 3, "click"], [1, "catalog__grid"], [3, "product"], [1, "pagination"], ["type", "button", 3, "click", "disabled"], ["type", "button", 1, "pagination__page", 3, "is-active"], ["type", "button", 1, "pagination__page", 3, "click"]], template: function CatalogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, CatalogComponent_Conditional_4_Template, 2, 1, "span", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, CatalogComponent_Conditional_5_Template, 5, 0, "div", 3);
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275template(7, CatalogComponent_Conditional_7_Template, 1, 0, "div", 5);
        \u0275\u0275elementStart(8, "aside", 6)(9, "div", 7)(10, "h2");
        \u0275\u0275text(11, "Filters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 8);
        \u0275\u0275listener("click", function CatalogComponent_Template_button_click_12_listener() {
          return ctx.closeFiltersDrawer();
        });
        \u0275\u0275element(13, "ui5-icon", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10)(15, "button", 11);
        \u0275\u0275listener("click", function CatalogComponent_Template_button_click_15_listener() {
          return ctx.toggleFilterGroup("price");
        });
        \u0275\u0275elementStart(16, "h3");
        \u0275\u0275text(17, "Price");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "ui5-icon", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 13)(20, "div", 14)(21, "ui5-range-slider", 15);
        \u0275\u0275listener("change", function CatalogComponent_Template_ui5_range_slider_change_21_listener($event) {
          return ctx.onPriceSliderChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 16)(23, "span");
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span");
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "currency");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(29, CatalogComponent_Conditional_29_Template, 10, 4, "div", 10);
        \u0275\u0275elementStart(30, "div", 10)(31, "button", 11);
        \u0275\u0275listener("click", function CatalogComponent_Template_button_click_31_listener() {
          return ctx.toggleFilterGroup("rating");
        });
        \u0275\u0275elementStart(32, "h3");
        \u0275\u0275text(33, "Rating");
        \u0275\u0275elementEnd();
        \u0275\u0275element(34, "ui5-icon", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 13)(36, "div", 14)(37, "div", 17);
        \u0275\u0275repeaterCreate(38, CatalogComponent_For_39_Template, 3, 3, "button", 18, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(40, "button", 19);
        \u0275\u0275listener("click", function CatalogComponent_Template_button_click_40_listener() {
          return ctx.clearAllFilters();
        });
        \u0275\u0275text(41, "Clear all filters");
        \u0275\u0275elementEnd();
        \u0275\u0275template(42, CatalogComponent_Conditional_42_Template, 2, 1, "button", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "section", 21)(44, "div", 22)(45, "button", 23);
        \u0275\u0275listener("click", function CatalogComponent_Template_button_click_45_listener() {
          return ctx.openFiltersDrawer();
        });
        \u0275\u0275element(46, "ui5-icon", 24);
        \u0275\u0275text(47, " Filters ");
        \u0275\u0275template(48, CatalogComponent_Conditional_48_Template, 2, 1, "span", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275element(49, "span", 26);
        \u0275\u0275elementStart(50, "div", 27);
        \u0275\u0275repeaterCreate(51, CatalogComponent_For_52_Template, 2, 4, "button", 28, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(53, CatalogComponent_Conditional_53_Template, 1, 1, "app-skeleton-loader", 29)(54, CatalogComponent_Conditional_54_Template, 1, 0, "app-empty-state", 30)(55, CatalogComponent_Conditional_55_Template, 1, 0, "app-empty-state", 31)(56, CatalogComponent_Conditional_56_Template, 4, 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.heading());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.meta() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeFilterChips().length ? 5 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.filtersDrawerOpen() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("is-drawer-open", ctx.filtersDrawerOpen());
        \u0275\u0275advance(10);
        \u0275\u0275classProp("is-collapsed", !ctx.priceExpanded());
        \u0275\u0275advance();
        \u0275\u0275classProp("is-collapsed", !ctx.priceExpanded());
        \u0275\u0275advance(2);
        \u0275\u0275property("max", ctx.priceCeiling)("valueStart", ctx.minPrice())("valueEnd", ctx.maxPrice());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(25, 24, ctx.minPrice(), "BDT", "symbol-narrow", "1.0-0"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind4(28, 29, ctx.maxPrice(), "BDT", "symbol-narrow", "1.0-0"), "", ctx.maxPrice() === ctx.priceCeiling ? "+" : "", "");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.brands().length ? 29 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("is-collapsed", !ctx.ratingExpanded());
        \u0275\u0275advance();
        \u0275\u0275classProp("is-collapsed", !ctx.ratingExpanded());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(34, _c0));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.filtersDrawerOpen() ? 42 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.activeFilterChips().length ? 48 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.sortChoices);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading() ? 53 : ctx.error() ? 54 : ctx.products().length === 0 ? 55 : 56);
      }
    }, dependencies: [
      CommonModule,
      CurrencyPipe,
      ProductCardComponent,
      SkeletonLoaderComponent,
      EmptyStateComponent
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: 2.5rem 0 4rem;\n}\n.catalog__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  flex-wrap: wrap;\n}\n.catalog__count[_ngcontent-%COMP%] {\n  color: var(--color-charcoal-soft);\n  font-size: 0.9rem;\n}\n.catalog__layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 15.5rem 1fr;\n  gap: 2.5rem;\n  align-items: start;\n}\n.catalog__chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.6rem;\n  margin: -1rem 0 1.75rem;\n}\n.filter-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  border: 1px solid var(--color-border);\n  background: var(--color-sage-pale);\n  color: var(--color-charcoal);\n  border-radius: 999px;\n  padding: 0.35rem 0.7rem;\n  font-size: 0.8rem;\n  cursor: pointer;\n  transition: background 0.2s var(--ease-quiet), border-color 0.2s var(--ease-quiet);\n}\n.filter-chip[_ngcontent-%COMP%]:hover {\n  background: var(--color-sage);\n  color: var(--color-cream);\n}\n.filter-chip__icon[_ngcontent-%COMP%] {\n  width: 0.7rem;\n  height: 0.7rem;\n}\n.catalog__chips-clear[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: var(--color-sage-deep);\n  font-weight: 600;\n  font-size: 0.8rem;\n  cursor: pointer;\n  text-decoration: underline;\n  padding: 0.35rem 0.2rem;\n}\n.catalog__filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.75rem;\n  position: sticky;\n  top: calc(var(--shell-header-height) + 1.5rem);\n}\n.catalog__filters-header[_ngcontent-%COMP%], \n.catalog__filters-close[_ngcontent-%COMP%] {\n  display: none;\n}\n.filter-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.filter-block__toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: none;\n  background: none;\n  padding: 0;\n  cursor: pointer;\n  text-align: left;\n}\n.filter-block__toggle[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--color-charcoal);\n}\n.filter-block__chevron[_ngcontent-%COMP%] {\n  width: 0.9rem;\n  height: 0.9rem;\n  color: var(--color-charcoal-soft);\n  transition: transform 0.25s var(--ease-quiet);\n}\n.filter-block__chevron.is-collapsed[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n.filter-block__collapse[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 1fr;\n  transition: grid-template-rows 0.3s var(--ease-quiet);\n}\n.filter-block__collapse.is-collapsed[_ngcontent-%COMP%] {\n  grid-template-rows: 0fr;\n}\n.filter-block__collapse-inner[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.filter-block__slider[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.filter-block__price-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.8rem;\n  color: var(--color-charcoal-soft);\n}\n.filter-block__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n}\n.filter-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.88rem;\n  color: var(--color-charcoal-soft);\n  cursor: pointer;\n}\n.filter-checkbox__count[_ngcontent-%COMP%] {\n  color: var(--color-charcoal-soft);\n  opacity: 0.7;\n}\n.rating-filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  border: 1px solid var(--color-border);\n  background: transparent;\n  border-radius: var(--radius-sm);\n  padding: 0.45rem 0.7rem;\n  font-size: 0.85rem;\n  color: var(--color-charcoal-soft);\n  cursor: pointer;\n  text-align: left;\n}\n.rating-filter[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-sage);\n}\n.rating-filter.is-active[_ngcontent-%COMP%] {\n  background: var(--color-sage-pale);\n  border-color: var(--color-sage);\n  color: var(--color-charcoal);\n}\n.rating-filter__star[_ngcontent-%COMP%] {\n  color: var(--color-gold);\n  width: 0.95rem;\n  height: 0.95rem;\n}\n.filter-block__clear[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  border: none;\n  background: none;\n  color: var(--color-sage-deep);\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  padding: 0;\n  text-decoration: underline;\n}\n.catalog__toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.catalog__toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.catalog__filters-trigger[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  gap: 0.45rem;\n  border: 1px solid var(--color-border);\n  background: transparent;\n  color: var(--color-charcoal);\n  border-radius: var(--radius-sm);\n  padding: 0.5rem 0.85rem;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.catalog__filters-trigger[_ngcontent-%COMP%]   ui5-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.catalog__filters-trigger-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 1.1rem;\n  height: 1.1rem;\n  padding: 0 0.25rem;\n  border-radius: 999px;\n  background: var(--color-sage);\n  color: var(--color-cream);\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n.sort-control[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n  overflow-x: auto;\n  max-width: 100%;\n  scrollbar-width: none;\n}\n.sort-control[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.sort-control__option[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  border: 1px solid var(--color-border);\n  background: transparent;\n  color: var(--color-charcoal-soft);\n  border-radius: 999px;\n  padding: 0.45rem 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition:\n    background 0.2s var(--ease-quiet),\n    color 0.2s var(--ease-quiet),\n    border-color 0.2s var(--ease-quiet);\n}\n.sort-control__option[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-sage);\n}\n.sort-control__option.is-active[_ngcontent-%COMP%] {\n  background: var(--color-sage);\n  border-color: var(--color-sage);\n  color: var(--color-cream);\n}\n.catalog__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 1.5rem;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 0.4rem;\n  margin-top: 2.5rem;\n  flex-wrap: wrap;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border);\n  background: transparent;\n  color: var(--color-charcoal-soft);\n  padding: 0.5rem 0.85rem;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  font-size: 0.85rem;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--color-sage);\n  color: var(--color-charcoal);\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pagination__page.is-active[_ngcontent-%COMP%] {\n  background: var(--color-sage);\n  border-color: var(--color-sage);\n  color: var(--color-cream);\n}\n@media (max-width: 900px) {\n  .catalog__layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .catalog__filters-trigger[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n  .catalog__drawer-scrim[_ngcontent-%COMP%] {\n    position: fixed;\n    inset: 0;\n    background: rgba(47, 46, 43, 0.45);\n    z-index: 55;\n  }\n  .catalog__filters[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: min(20rem, 85vw);\n    background: var(--color-cream);\n    padding: 1.5rem 1.5rem 6rem;\n    overflow-y: auto;\n    z-index: 60;\n    transform: translateX(-100%);\n    transition: transform 0.3s var(--ease-quiet);\n    box-shadow: 12px 0 32px rgba(47, 46, 43, 0.12);\n  }\n  .catalog__filters.is-drawer-open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .catalog__filters-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .catalog__filters-close[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 2rem;\n    height: 2rem;\n    border: none;\n    background: var(--color-cream-soft);\n    border-radius: 50%;\n    cursor: pointer;\n  }\n  .catalog__filters-close[_ngcontent-%COMP%]   ui5-icon[_ngcontent-%COMP%] {\n    width: 1rem;\n    height: 1rem;\n  }\n  .catalog__drawer-apply[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 1.5rem;\n    right: 1.5rem;\n    bottom: 1.5rem;\n    width: calc(min(20rem, 85vw) - 3rem);\n    border: none;\n    background: var(--color-charcoal);\n    color: var(--color-cream);\n    padding: 0.85rem 1rem;\n    border-radius: var(--radius-sm);\n    font-weight: 600;\n    cursor: pointer;\n    z-index: 61;\n  }\n}\n/*# sourceMappingURL=catalog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogComponent, { className: "CatalogComponent", filePath: "src/app/features/catalog/catalog.component.ts", lineNumber: 46 });
})();
export {
  CatalogComponent
};
//# sourceMappingURL=catalog.component-ETF24BV6.js.map
