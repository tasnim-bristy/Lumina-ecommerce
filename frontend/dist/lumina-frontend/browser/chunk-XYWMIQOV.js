import {
  StarRatingComponent
} from "./chunk-VOMM6CVB.js";
import {
  CompareService
} from "./chunk-NEVRHAWF.js";
import {
  PriceTagComponent
} from "./chunk-NENRD53V.js";
import {
  WishlistService
} from "./chunk-LZEW6XII.js";
import {
  CartService
} from "./chunk-TO3NWCGE.js";
import {
  CommonModule,
  RouterLink,
  computed,
  inject,
  input,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-HVBC7HBT.js";

// src/app/shared/components/product-card/product-card.component.ts
var _c0 = (a0) => ["/product", a0];
function ProductCardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ui5-badge", 3);
    \u0275\u0275text(1, "Featured");
    \u0275\u0275elementEnd();
  }
}
function ProductCardComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ui5-busy-indicator", 14);
  }
}
function ProductCardComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Added ");
  }
}
function ProductCardComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Out of stock ");
  }
}
function ProductCardComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Add to cart ");
  }
}
var ProductCardComponent = class _ProductCardComponent {
  constructor() {
    this.cartService = inject(CartService);
    this.wishlistService = inject(WishlistService);
    this.compareService = inject(CompareService);
    this.product = input.required();
    this.isAdding = signal(false);
    this.justAdded = signal(false);
    this.isWishlisted = computed(() => this.wishlistService.isWishlisted(this.product().id));
    this.isComparing = computed(() => this.compareService.isSelected(this.product().id));
    this.canAddToCompare = computed(() => this.isComparing() || this.compareService.canAddMore());
  }
  addToCart(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.isAdding())
      return;
    this.isAdding.set(true);
    this.cartService.addItem(this.product().id, 1).subscribe({
      next: () => {
        this.isAdding.set(false);
        this.justAdded.set(true);
        setTimeout(() => this.justAdded.set(false), 1400);
      },
      error: () => this.isAdding.set(false)
    });
  }
  toggleWishlist(event) {
    event.preventDefault();
    event.stopPropagation();
    this.wishlistService.toggle(this.product().id).subscribe();
  }
  toggleCompare(event) {
    event.preventDefault();
    event.stopPropagation();
    this.compareService.toggle(this.product().id);
  }
  static {
    this.\u0275fac = function ProductCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: [1, "product"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 27, consts: [[1, "product-card", "hover-lift", 3, "routerLink"], [1, "product-card__media"], ["loading", "lazy", 1, "product-card__image", 3, "src", "alt"], ["color-scheme", "8", 1, "product-card__badge"], ["type", "button", 1, "product-card__icon-btn", "product-card__icon-btn--wishlist", 3, "click", "title"], [3, "name"], ["type", "button", 1, "product-card__icon-btn", "product-card__icon-btn--compare", 3, "click", "disabled", "title"], ["name", "compare"], [1, "product-card__body"], [1, "product-card__brand"], [1, "product-card__name"], ["size", "sm", 3, "rating", "count"], ["size", "sm", 3, "price", "compareAtPrice", "currency"], ["type", "button", 1, "product-card__add-btn", 3, "click", "disabled"], ["active", "", "size", "S"]], template: function ProductCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 0)(1, "div", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275template(3, ProductCardComponent_Conditional_3_Template, 2, 0, "ui5-badge", 3);
        \u0275\u0275elementStart(4, "button", 4);
        \u0275\u0275listener("click", function ProductCardComponent_Template_button_click_4_listener($event) {
          return ctx.toggleWishlist($event);
        });
        \u0275\u0275element(5, "ui5-icon", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 6);
        \u0275\u0275listener("click", function ProductCardComponent_Template_button_click_6_listener($event) {
          return ctx.toggleCompare($event);
        });
        \u0275\u0275element(7, "ui5-icon", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 8)(9, "span", 9);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "h3", 10);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "app-star-rating", 11)(14, "app-price-tag", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 13);
        \u0275\u0275listener("click", function ProductCardComponent_Template_button_click_15_listener($event) {
          return ctx.addToCart($event);
        });
        \u0275\u0275template(16, ProductCardComponent_Conditional_16_Template, 1, 0, "ui5-busy-indicator", 14)(17, ProductCardComponent_Conditional_17_Template, 1, 0)(18, ProductCardComponent_Conditional_18_Template, 1, 0)(19, ProductCardComponent_Conditional_19_Template, 1, 0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(25, _c0, ctx.product().slug));
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.product().thumbnail, \u0275\u0275sanitizeUrl)("alt", ctx.product().name);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.product().is_featured ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("is-active", ctx.isWishlisted());
        \u0275\u0275propertyInterpolate("title", ctx.isWishlisted() ? "Remove from wishlist" : "Add to wishlist");
        \u0275\u0275attribute("aria-pressed", ctx.isWishlisted());
        \u0275\u0275advance();
        \u0275\u0275propertyInterpolate("name", ctx.isWishlisted() ? "favorite" : "add-favorite");
        \u0275\u0275advance();
        \u0275\u0275classProp("is-active", ctx.isComparing());
        \u0275\u0275propertyInterpolate("title", ctx.isComparing() ? "Remove from compare" : "Add to compare");
        \u0275\u0275property("disabled", !ctx.canAddToCompare());
        \u0275\u0275attribute("aria-pressed", ctx.isComparing());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.product().brand);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.product().name);
        \u0275\u0275advance();
        \u0275\u0275property("rating", ctx.product().rating_avg)("count", ctx.product().rating_count);
        \u0275\u0275advance();
        \u0275\u0275property("price", ctx.product().price)("compareAtPrice", ctx.product().compare_at_price)("currency", ctx.product().currency);
        \u0275\u0275advance();
        \u0275\u0275classProp("is-success", ctx.justAdded());
        \u0275\u0275property("disabled", ctx.product().stock === 0 || ctx.isAdding());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isAdding() ? 16 : ctx.justAdded() ? 17 : ctx.product().stock === 0 ? 18 : 19);
      }
    }, dependencies: [CommonModule, RouterLink, PriceTagComponent, StarRatingComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.product-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  text-decoration: none;\n  color: inherit;\n  background: var(--color-cream);\n  border: 1px solid var(--color-border);\n  border-radius: 14px;\n  overflow: hidden;\n}\n.product-card__media[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 1/1;\n  background: var(--color-beige);\n  overflow: hidden;\n}\n.product-card__image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.product-card[_ngcontent-%COMP%]:hover   .product-card__image[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.product-card__badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  left: 0.75rem;\n}\n.product-card__icon-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 2.1rem;\n  height: 2.1rem;\n  border-radius: 50%;\n  border: none;\n  background: rgba(250, 247, 242, 0.9);\n  color: var(--color-charcoal-soft);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    color 0.2s ease,\n    transform 0.15s ease;\n}\n.product-card__icon-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-cream);\n  transform: scale(1.08);\n}\n.product-card__icon-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.product-card__icon-btn.is-active[_ngcontent-%COMP%] {\n  color: var(--color-sage-deep);\n}\n.product-card__icon-btn[_ngcontent-%COMP%]   ui5-icon[_ngcontent-%COMP%] {\n  width: 1.05rem;\n  height: 1.05rem;\n}\n.product-card__icon-btn--wishlist[_ngcontent-%COMP%] {\n  top: 0.75rem;\n  right: 0.75rem;\n}\n.product-card__icon-btn--compare[_ngcontent-%COMP%] {\n  top: 3.15rem;\n  right: 0.75rem;\n}\n.product-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  padding: 1rem 1.1rem 0.25rem;\n  flex: 1;\n}\n.product-card__brand[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--color-charcoal-soft);\n}\n.product-card__name[_ngcontent-%COMP%] {\n  font-family: "Fraunces", serif;\n  font-size: 1rem;\n  font-weight: 500;\n  color: var(--color-charcoal);\n  margin: 0;\n  line-height: 1.3;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.product-card__add-btn[_ngcontent-%COMP%] {\n  margin: 0.85rem 1.1rem 1.1rem;\n  border: 1px solid var(--color-charcoal);\n  background: transparent;\n  color: var(--color-charcoal);\n  font-family: "Manrope", sans-serif;\n  font-weight: 600;\n  font-size: 0.85rem;\n  padding: 0.55rem 1rem;\n  border-radius: 10px;\n  cursor: pointer;\n  min-height: 2.6rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    background 0.2s ease,\n    color 0.2s ease,\n    border-color 0.2s ease;\n}\n.product-card__add-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-charcoal);\n  color: var(--color-cream);\n}\n.product-card__add-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.product-card__add-btn.is-success[_ngcontent-%COMP%] {\n  background: var(--color-sage);\n  border-color: var(--color-sage);\n  color: var(--color-cream);\n}\n/*# sourceMappingURL=product-card.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCardComponent, { className: "ProductCardComponent", filePath: "src/app/shared/components/product-card/product-card.component.ts", lineNumber: 24 });
})();

export {
  ProductCardComponent
};
//# sourceMappingURL=chunk-XYWMIQOV.js.map
