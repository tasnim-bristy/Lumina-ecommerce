import {
  CommonModule,
  computed,
  input,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HVBC7HBT.js";

// src/app/shared/components/star-rating/star-rating.component.ts
function StarRatingComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.count(), ")");
  }
}
var StarRatingComponent = class _StarRatingComponent {
  constructor() {
    this.rating = input(0);
    this.count = input(null);
    this.size = input("md");
    this.roundedRating = computed(() => Math.round(this.rating() * 2) / 2);
  }
  static {
    this.\u0275fac = function StarRatingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StarRatingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StarRatingComponent, selectors: [["app-star-rating"]], inputs: { rating: [1, "rating"], count: [1, "count"], size: [1, "size"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 5, consts: [[1, "star-rating"], ["readonly", "", 1, "star-rating__stars", 3, "value"], [1, "star-rating__value"], [1, "star-rating__count"]], template: function StarRatingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275element(1, "ui5-rating-indicator", 1);
        \u0275\u0275elementStart(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, StarRatingComponent_Conditional_4_Template, 2, 1, "span", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap("star-rating--" + ctx.size());
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.roundedRating());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.rating().toFixed(1));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.count() !== null ? 4 : -1);
      }
    }, dependencies: [CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-flex;\n}\n.star-rating[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.star-rating--sm[_ngcontent-%COMP%] {\n  --_star-size: 0.85rem;\n  font-size: 0.75rem;\n}\n.star-rating--md[_ngcontent-%COMP%] {\n  --_star-size: 1rem;\n  font-size: 0.85rem;\n}\n.star-rating--lg[_ngcontent-%COMP%] {\n  --_star-size: 1.25rem;\n  font-size: 1rem;\n}\n.star-rating__stars[_ngcontent-%COMP%] {\n  --sapContent_IconColor: var(--color-gold);\n  --_ui5_rating_indicator_item_size: var(--_star-size, 1rem);\n}\n.star-rating__value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-charcoal);\n}\n.star-rating__count[_ngcontent-%COMP%] {\n  color: var(--color-charcoal-soft);\n}\n/*# sourceMappingURL=star-rating.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StarRatingComponent, { className: "StarRatingComponent", filePath: "src/app/shared/components/star-rating/star-rating.component.ts", lineNumber: 13 });
})();

export {
  StarRatingComponent
};
//# sourceMappingURL=chunk-VOMM6CVB.js.map
