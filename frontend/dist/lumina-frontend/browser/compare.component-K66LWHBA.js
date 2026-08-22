import {
  StarRatingComponent
} from "./chunk-VOMM6CVB.js";
import {
  SkeletonLoaderComponent
} from "./chunk-IDJ5IA4L.js";
import {
  CompareService,
  MAX_COMPARE_ITEMS,
  MIN_COMPARE_ITEMS
} from "./chunk-NEVRHAWF.js";
import "./chunk-3HG5S7OZ.js";
import {
  PriceTagComponent
} from "./chunk-NENRD53V.js";
import {
  ScrollRevealDirective
} from "./chunk-P4E5AFSL.js";
import {
  EmptyStateComponent
} from "./chunk-IFGUBMIF.js";
import {
  CommonModule,
  RouterLink,
  computed,
  effect,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-HVBC7HBT.js";
import "./chunk-5K356HEJ.js";

// src/app/features/compare/compare.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/product", a0];
function CompareComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function CompareComponent_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearAll());
    });
    \u0275\u0275text(1, "Clear all");
    \u0275\u0275elementEnd();
  }
}
function CompareComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275propertyInterpolate1("message", "Use the compare icon on any product card or product page to add up to ", ctx_r1.maxItems, " items here.");
  }
}
function CompareComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275propertyInterpolate1("message", "Pick at least ", ctx_r1.minItems, " products to see a side-by-side comparison.");
  }
}
function CompareComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-loader", 5);
  }
  if (rf & 2) {
    \u0275\u0275property("count", 8);
  }
}
function CompareComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 6);
  }
}
function CompareComponent_Conditional_9_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 12)(1, "button", 13);
    \u0275\u0275listener("click", function CompareComponent_Conditional_9_For_6_Template_button_click_1_listener() {
      const product_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.remove(product_r4.id));
    });
    \u0275\u0275element(2, "ui5-icon", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 15);
    \u0275\u0275element(4, "img", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-removing", ctx_r1.isRemoving(product_r4.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, product_r4.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", product_r4.thumbnail, \u0275\u0275sanitizeUrl)("alt", product_r4.name);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, product_r4.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r4.brand);
  }
}
function CompareComponent_Conditional_9_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275element(1, "app-price-tag", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("price", product_r5.price)("compareAtPrice", product_r5.compare_at_price)("currency", product_r5.currency);
  }
}
function CompareComponent_Conditional_9_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275element(1, "app-star-rating", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("rating", product_r6.rating_avg)("count", product_r6.rating_count);
  }
}
function CompareComponent_Conditional_9_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r7.stock > 0 ? "In stock" : "Out of stock");
  }
}
function CompareComponent_Conditional_9_For_24_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_21_0;
    const product_r8 = ctx.$implicit;
    const key_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_21_0 = product_r8.attributes[key_r9]) !== null && tmp_21_0 !== void 0 ? tmp_21_0 : "\u2014");
  }
}
function CompareComponent_Conditional_9_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, CompareComponent_Conditional_9_For_24_For_4_Template, 2, 1, "td", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(key_r9);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.result().products);
  }
}
function CompareComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "table", 9)(2, "thead")(3, "tr");
    \u0275\u0275element(4, "th", 10);
    \u0275\u0275repeaterCreate(5, CompareComponent_Conditional_9_For_6_Template, 9, 12, "th", 11, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "tbody")(8, "tr")(9, "th", 10);
    \u0275\u0275text(10, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(11, CompareComponent_Conditional_9_For_12_Template, 2, 3, "td", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "tr")(14, "th", 10);
    \u0275\u0275text(15, "Rating");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, CompareComponent_Conditional_9_For_17_Template, 2, 2, "td", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "tr")(19, "th", 10);
    \u0275\u0275text(20, "Availability");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(21, CompareComponent_Conditional_9_For_22_Template, 2, 1, "td", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(23, CompareComponent_Conditional_9_For_24_Template, 5, 1, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.result().products);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.result().products);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.result().products);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.result().products);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.result().attribute_keys);
  }
}
var REMOVE_ANIMATION_MS = 220;
var CompareComponent = class _CompareComponent {
  isRemoving(productId) {
    return this.removingIds().has(productId);
  }
  constructor() {
    this.compareService = inject(CompareService);
    this.minItems = MIN_COMPARE_ITEMS;
    this.maxItems = MAX_COMPARE_ITEMS;
    this.result = signal(null);
    this.loading = signal(false);
    this.error = signal(false);
    this.removingIds = signal(/* @__PURE__ */ new Set());
    this.canCompare = computed(() => this.compareService.count() >= this.minItems);
    effect(() => {
      const ids = this.compareService.ids();
      if (ids.length < this.minItems) {
        this.result.set(null);
        return;
      }
      this.fetch();
    });
  }
  fetch() {
    this.loading.set(true);
    this.error.set(false);
    this.compareService.compare().subscribe({
      next: (res) => {
        this.result.set(res);
        this.loading.set(false);
      },
      error: () => {
        this.result.set(null);
        this.loading.set(false);
        this.error.set(true);
      }
    });
  }
  remove(productId) {
    const next = new Set(this.removingIds());
    next.add(productId);
    this.removingIds.set(next);
    setTimeout(() => this.compareService.remove(productId), REMOVE_ANIMATION_MS);
  }
  clearAll() {
    this.compareService.clear();
  }
  static {
    this.\u0275fac = function CompareComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CompareComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareComponent, selectors: [["app-compare"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 2, consts: [[1, "page-container", "compare"], [1, "compare__header"], ["type", "button", 1, "compare__clear"], ["icon", "compare", "title", "Nothing to compare yet", "actionLabel", "Browse products", "actionRoute", "/", 3, "message"], ["icon", "compare", "title", "Add one more product", "actionLabel", "Browse products", "actionRoute", "/", 3, "message"], ["variant", "line", 3, "count"], ["icon", "message-error", "title", "Couldn't load the comparison", "message", "Please try again in a moment."], ["appScrollReveal", "", 1, "compare__table-wrap"], ["type", "button", 1, "compare__clear", 3, "click"], [1, "compare__table"], [1, "compare__row-label"], [1, "compare__col-header", 3, "is-removing"], [1, "compare__col-header"], ["type", "button", "aria-label", "Remove from comparison", 1, "compare__remove", 3, "click"], ["name", "decline"], [1, "compare__product-media", 3, "routerLink"], [3, "src", "alt"], [1, "compare__product-name", 3, "routerLink"], [1, "compare__product-brand"], ["size", "sm", 3, "price", "compareAtPrice", "currency"], ["size", "sm", 3, "rating", "count"]], template: function CompareComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Compare products");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, CompareComponent_Conditional_4_Template, 2, 0, "button", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, CompareComponent_Conditional_5_Template, 1, 2, "app-empty-state", 3)(6, CompareComponent_Conditional_6_Template, 1, 2, "app-empty-state", 4)(7, CompareComponent_Conditional_7_Template, 1, 1, "app-skeleton-loader", 5)(8, CompareComponent_Conditional_8_Template, 1, 0, "app-empty-state", 6)(9, CompareComponent_Conditional_9_Template, 25, 0, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.compareService.count() > 0 ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.compareService.count() === 0 ? 5 : !ctx.canCompare() ? 6 : ctx.loading() ? 7 : ctx.error() ? 8 : ctx.result() ? 9 : -1);
      }
    }, dependencies: [
      CommonModule,
      RouterLink,
      EmptyStateComponent,
      PriceTagComponent,
      SkeletonLoaderComponent,
      StarRatingComponent,
      ScrollRevealDirective
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: 2.5rem 0 5rem;\n}\n.compare__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n}\n.compare__clear[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: var(--color-sage-deep);\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.compare__table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.compare__table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n  min-width: 40rem;\n}\n.compare__row-label[_ngcontent-%COMP%] {\n  text-align: left;\n  color: var(--color-charcoal-soft);\n  font-weight: 500;\n  font-size: 0.85rem;\n  text-transform: capitalize;\n  padding: 0.9rem 1rem;\n  white-space: nowrap;\n  border-bottom: 1px solid var(--color-border);\n}\n.compare__table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.9rem 1rem;\n  border-bottom: 1px solid var(--color-border);\n  color: var(--color-charcoal);\n  font-size: 0.9rem;\n  min-width: 12rem;\n}\n.compare__col-header[_ngcontent-%COMP%] {\n  position: relative;\n  vertical-align: top;\n  padding: 1rem;\n  border-bottom: 1px solid var(--color-border);\n  min-width: 12rem;\n  transition: opacity 0.22s var(--ease-quiet), transform 0.22s var(--ease-quiet);\n}\n.compare__col-header.is-removing[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(-8px);\n}\n.compare__table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.15s var(--ease-quiet);\n}\n.compare__table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--color-cream-soft);\n}\n.compare__remove[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  border: none;\n  background: var(--color-cream-soft);\n  border-radius: 50%;\n  width: 1.7rem;\n  height: 1.7rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--color-charcoal-soft);\n}\n.compare__remove[_ngcontent-%COMP%]:hover {\n  color: #B4534A;\n}\n.compare__remove[_ngcontent-%COMP%]   ui5-icon[_ngcontent-%COMP%] {\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.compare__product-media[_ngcontent-%COMP%] {\n  display: block;\n  aspect-ratio: 1/1;\n  width: 6rem;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  background: var(--color-beige);\n  margin-bottom: 0.6rem;\n}\n.compare__product-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.compare__product-name[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  color: var(--color-charcoal);\n  text-decoration: none;\n  font-weight: 500;\n  margin-bottom: 0.2rem;\n}\n.compare__product-brand[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.78rem;\n  color: var(--color-charcoal-soft);\n}\n/*# sourceMappingURL=compare.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareComponent, { className: "CompareComponent", filePath: "src/app/features/compare/compare.component.ts", lineNumber: 33 });
})();
export {
  CompareComponent
};
//# sourceMappingURL=compare.component-K66LWHBA.js.map
