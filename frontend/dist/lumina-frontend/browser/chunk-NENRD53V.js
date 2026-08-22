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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HVBC7HBT.js";

// src/app/shared/components/price-tag/price-tag.component.ts
function PriceTagComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formatted(ctx_r0.compareAtPrice()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("-", ctx_r0.discountPercent(), "%");
  }
}
var PriceTagComponent = class _PriceTagComponent {
  constructor() {
    this.price = input.required();
    this.compareAtPrice = input(null);
    this.currency = input("BDT");
    this.size = input("md");
    this.isOnSale = computed(() => {
      const compareAt = this.compareAtPrice();
      return compareAt != null && compareAt > this.price();
    });
    this.discountPercent = computed(() => {
      const compareAt = this.compareAtPrice();
      if (compareAt == null || compareAt <= this.price())
        return 0;
      return Math.round((compareAt - this.price()) / compareAt * 100);
    });
  }
  formatted(value) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: this.currency() || "BDT",
      // 'symbol' (the default) would render the ISO code ("BDT 6,500") since
      // Intl's wide symbol for BDT is unset — 'narrowSymbol' is what actually
      // resolves to the ৳ glyph. Whole-Taka amounts (no paisa) read more
      // naturally for casual retail pricing than 2 decimal places.
      currencyDisplay: "narrowSymbol",
      maximumFractionDigits: 0
    }).format(value);
  }
  static {
    this.\u0275fac = function PriceTagComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PriceTagComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PriceTagComponent, selectors: [["app-price-tag"]], inputs: { price: [1, "price"], compareAtPrice: [1, "compareAtPrice"], currency: [1, "currency"], size: [1, "size"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 4, consts: [[1, "price-tag"], [1, "price-tag__current"], [1, "price-tag__compare"], [1, "price-tag__badge"]], template: function PriceTagComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0)(1, "span", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, PriceTagComponent_Conditional_3_Template, 4, 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap("price-tag--" + ctx.size());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.formatted(ctx.price()));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isOnSale() ? 3 : -1);
      }
    }, dependencies: [CommonModule], styles: ['\n\n[_nghost-%COMP%] {\n  display: inline-flex;\n}\n.price-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: baseline;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  font-family: "Fraunces", serif;\n}\n.price-tag--sm[_ngcontent-%COMP%]   .price-tag__current[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.price-tag--sm[_ngcontent-%COMP%]   .price-tag__compare[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.price-tag--md[_ngcontent-%COMP%]   .price-tag__current[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.price-tag--md[_ngcontent-%COMP%]   .price-tag__compare[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.price-tag--lg[_ngcontent-%COMP%]   .price-tag__current[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.price-tag--lg[_ngcontent-%COMP%]   .price-tag__compare[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n}\n.price-tag__current[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-charcoal);\n}\n.price-tag__compare[_ngcontent-%COMP%] {\n  color: var(--color-charcoal-soft);\n  text-decoration: line-through;\n  font-weight: 400;\n}\n.price-tag__badge[_ngcontent-%COMP%] {\n  font-family: "Manrope", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  color: var(--color-charcoal);\n  background: var(--color-gold);\n  padding: 0.15rem 0.5rem;\n  border-radius: 999px;\n  align-self: center;\n}\n/*# sourceMappingURL=price-tag.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PriceTagComponent, { className: "PriceTagComponent", filePath: "src/app/shared/components/price-tag/price-tag.component.ts", lineNumber: 12 });
})();

export {
  PriceTagComponent
};
//# sourceMappingURL=chunk-NENRD53V.js.map
