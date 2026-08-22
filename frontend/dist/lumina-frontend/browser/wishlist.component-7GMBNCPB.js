import {
  PriceTagComponent
} from "./chunk-NENRD53V.js";
import {
  WishlistService
} from "./chunk-LZEW6XII.js";
import {
  ScrollRevealDirective
} from "./chunk-P4E5AFSL.js";
import {
  EmptyStateComponent
} from "./chunk-IFGUBMIF.js";
import {
  CartService
} from "./chunk-TO3NWCGE.js";
import {
  CommonModule,
  RouterLink,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HVBC7HBT.js";
import "./chunk-5K356HEJ.js";

// src/app/features/wishlist/wishlist.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/product", a0];
function WishlistComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 1);
  }
}
function WishlistComponent_Conditional_4_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Moved to cart ");
  }
}
function WishlistComponent_Conditional_4_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Out of stock ");
  }
}
function WishlistComponent_Conditional_4_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Move to cart ");
  }
}
function WishlistComponent_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "a", 5);
    \u0275\u0275element(2, "img", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "span", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "app-price-tag", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 11)(10, "button", 12);
    \u0275\u0275listener("click", function WishlistComponent_Conditional_4_For_2_Template_button_click_10_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.moveToCart(item_r2.product.id));
    });
    \u0275\u0275template(11, WishlistComponent_Conditional_4_For_2_Conditional_11_Template, 1, 0)(12, WishlistComponent_Conditional_4_For_2_Conditional_12_Template, 1, 0)(13, WishlistComponent_Conditional_4_For_2_Conditional_13_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 13);
    \u0275\u0275listener("click", function WishlistComponent_Conditional_4_For_2_Template_button_click_14_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove(item_r2.product.id));
    });
    \u0275\u0275element(15, "ui5-icon", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const \u0275$index_12_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-pending", ctx_r2.isPending(item_r2.product.id))("is-removing", ctx_r2.isRemoving(item_r2.product.id));
    \u0275\u0275property("appScrollReveal", \u0275$index_12_r4 * 60);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c0, item_r2.product.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r2.product.thumbnail, \u0275\u0275sanitizeUrl)("alt", item_r2.product.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.product.brand);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c0, item_r2.product.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.product.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("price", item_r2.product.price)("compareAtPrice", item_r2.product.compare_at_price)("currency", item_r2.product.currency);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.isPending(item_r2.product.id) || item_r2.product.stock === 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isMoved(item_r2.product.id) ? 11 : item_r2.product.stock === 0 ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.isPending(item_r2.product.id));
  }
}
function WishlistComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, WishlistComponent_Conditional_4_For_2_Template, 16, 21, "div", 3, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.wishlistService.items());
  }
}
var REMOVE_ANIMATION_MS = 220;
var WishlistComponent = class _WishlistComponent {
  constructor() {
    this.wishlistService = inject(WishlistService);
    this.cartService = inject(CartService);
    this.pendingProductIds = signal(/* @__PURE__ */ new Set());
    this.movedProductIds = signal(/* @__PURE__ */ new Set());
    this.removingProductIds = signal(/* @__PURE__ */ new Set());
  }
  isPending(productId) {
    return this.pendingProductIds().has(productId);
  }
  isMoved(productId) {
    return this.movedProductIds().has(productId);
  }
  isRemoving(productId) {
    return this.removingProductIds().has(productId);
  }
  setPending(productId, pending) {
    const next = new Set(this.pendingProductIds());
    if (pending)
      next.add(productId);
    else
      next.delete(productId);
    this.pendingProductIds.set(next);
  }
  moveToCart(productId) {
    if (this.isPending(productId))
      return;
    this.setPending(productId, true);
    this.cartService.addItem(productId, 1).subscribe({
      next: () => {
        this.wishlistService.remove(productId).subscribe({
          next: () => this.setPending(productId, false),
          error: () => this.setPending(productId, false)
        });
        const moved = new Set(this.movedProductIds());
        moved.add(productId);
        this.movedProductIds.set(moved);
      },
      error: () => this.setPending(productId, false)
    });
  }
  remove(productId) {
    if (this.isPending(productId))
      return;
    const next = new Set(this.removingProductIds());
    next.add(productId);
    this.removingProductIds.set(next);
    setTimeout(() => {
      this.setPending(productId, true);
      this.wishlistService.remove(productId).subscribe({
        next: () => this.setPending(productId, false),
        error: () => this.setPending(productId, false)
      });
    }, REMOVE_ANIMATION_MS);
  }
  static {
    this.\u0275fac = function WishlistComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WishlistComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WishlistComponent, selectors: [["app-wishlist"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "page-container", "wishlist"], ["icon", "favorite", "title", "Your wishlist is empty", "message", "Save products you're weighing up and they'll wait for you here.", "actionLabel", "Discover products", "actionRoute", "/"], ["appScrollReveal", "", 1, "wishlist-grid"], [1, "wishlist-card", "hover-lift", 3, "is-pending", "is-removing", "appScrollReveal"], [1, "wishlist-card", "hover-lift", 3, "appScrollReveal"], [1, "wishlist-card__media", 3, "routerLink"], [3, "src", "alt"], [1, "wishlist-card__body"], [1, "wishlist-card__brand"], [1, "wishlist-card__name", 3, "routerLink"], ["size", "sm", 3, "price", "compareAtPrice", "currency"], [1, "wishlist-card__actions"], ["type", "button", 1, "btn", "btn--primary", 3, "click", "disabled"], ["type", "button", "aria-label", "Remove from wishlist", 1, "wishlist-card__remove", 3, "click", "disabled"], ["name", "delete"]], template: function WishlistComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Your wishlist");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, WishlistComponent_Conditional_3_Template, 1, 0, "app-empty-state", 1)(4, WishlistComponent_Conditional_4_Template, 3, 0, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.wishlistService.items().length === 0 ? 3 : 4);
      }
    }, dependencies: [CommonModule, RouterLink, EmptyStateComponent, PriceTagComponent, ScrollRevealDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: 2.5rem 0 5rem;\n}\n.wishlist[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.wishlist-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 1.5rem;\n}\n.wishlist-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transition:\n    opacity 0.2s ease,\n    transform 0.25s var(--ease-quiet),\n    box-shadow 0.25s var(--ease-quiet);\n}\n.wishlist-card.is-pending[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.wishlist-card.is-removing[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateX(12px);\n}\n.wishlist-card__media[_ngcontent-%COMP%] {\n  aspect-ratio: 1/1;\n  background: var(--color-beige);\n}\n.wishlist-card__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.wishlist-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  padding: 1rem 1.1rem 0.5rem;\n}\n.wishlist-card__brand[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--color-charcoal-soft);\n}\n.wishlist-card__name[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  color: var(--color-charcoal);\n  text-decoration: none;\n  font-weight: 500;\n}\n.wishlist-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.6rem;\n  padding: 0.75rem 1.1rem 1.1rem;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.6rem 1rem;\n  border-radius: var(--radius-sm);\n  font-weight: 600;\n  font-size: 0.85rem;\n  border: none;\n  cursor: pointer;\n  flex: 1;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: var(--color-sage);\n  color: var(--color-cream);\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-sage-deep);\n}\n.btn--primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.wishlist-card__remove[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border);\n  background: transparent;\n  color: var(--color-charcoal-soft);\n  border-radius: var(--radius-sm);\n  width: 2.5rem;\n  cursor: pointer;\n}\n.wishlist-card__remove[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #B4534A;\n  border-color: #B4534A;\n}\n.wishlist-card__remove[_ngcontent-%COMP%]   ui5-icon[_ngcontent-%COMP%] {\n  width: 1.05rem;\n  height: 1.05rem;\n}\n/*# sourceMappingURL=wishlist.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WishlistComponent, { className: "WishlistComponent", filePath: "src/app/features/wishlist/wishlist.component.ts", lineNumber: 23 });
})();
export {
  WishlistComponent
};
//# sourceMappingURL=wishlist.component-7GMBNCPB.js.map
