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
  CurrencyPipe,
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
  ɵɵpipe,
  ɵɵpipeBind4,
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

// src/app/features/cart/cart.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/product", a0];
function CartComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 1);
  }
}
function CartComponent_Conditional_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 9)(1, "a", 10);
    \u0275\u0275element(2, "img", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "a", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 15);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 16)(12, "button", 17);
    \u0275\u0275listener("click", function CartComponent_Conditional_4_For_3_Template_button_click_12_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.decrement(item_r2.id, item_r2.quantity));
    });
    \u0275\u0275text(13, " \u2212 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 18);
    \u0275\u0275listener("click", function CartComponent_Conditional_4_For_3_Template_button_click_16_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.increment(item_r2.id, item_r2.quantity, item_r2.product.stock));
    });
    \u0275\u0275text(17, " + ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "span", 19);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 20);
    \u0275\u0275listener("click", function CartComponent_Conditional_4_For_3_Template_button_click_21_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeItem(item_r2.id));
    });
    \u0275\u0275element(22, "ui5-icon", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const \u0275$index_14_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-pending", ctx_r2.isPending(item_r2.id))("is-removing", ctx_r2.isRemoving(item_r2.id));
    \u0275\u0275property("appScrollReveal", \u0275$index_14_r4 * 60);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(27, _c0, item_r2.product.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r2.product.thumbnail, \u0275\u0275sanitizeUrl)("alt", item_r2.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(29, _c0, item_r2.product.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.product.brand);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind4(10, 17, item_r2.product.price, "BDT", "symbol-narrow", "1.0-0"), " each");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", item_r2.quantity <= 1 || ctx_r2.isPending(item_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.quantity);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", item_r2.quantity >= item_r2.product.stock || ctx_r2.isPending(item_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(20, 22, item_r2.line_total, "BDT", "symbol-narrow", "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.isPending(item_r2.id));
  }
}
function CartComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "ul", 3);
    \u0275\u0275repeaterCreate(2, CartComponent_Conditional_4_For_3_Template, 23, 31, "li", 4, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "aside", 5)(5, "h2");
    \u0275\u0275text(6, "Order summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 7);
    \u0275\u0275text(14, "Shipping and taxes are calculated at checkout.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 8);
    \u0275\u0275text(16, "Proceed to checkout");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.cartService.cart().items);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Subtotal (", ctx_r2.cartService.cart().item_count, " items)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(12, 2, ctx_r2.cartService.cart().subtotal, "BDT", "symbol-narrow", "1.0-0"));
  }
}
var REMOVE_ANIMATION_MS = 220;
var CartComponent = class _CartComponent {
  constructor() {
    this.cartService = inject(CartService);
    this.pendingItemIds = signal(/* @__PURE__ */ new Set());
    this.removingItemIds = signal(/* @__PURE__ */ new Set());
  }
  isPending(itemId) {
    return this.pendingItemIds().has(itemId);
  }
  isRemoving(itemId) {
    return this.removingItemIds().has(itemId);
  }
  setPending(itemId, pending) {
    const next = new Set(this.pendingItemIds());
    if (pending)
      next.add(itemId);
    else
      next.delete(itemId);
    this.pendingItemIds.set(next);
  }
  increment(itemId, currentQuantity, stock) {
    if (currentQuantity >= stock)
      return;
    this.updateQuantity(itemId, currentQuantity + 1);
  }
  decrement(itemId, currentQuantity) {
    if (currentQuantity <= 1)
      return;
    this.updateQuantity(itemId, currentQuantity - 1);
  }
  updateQuantity(itemId, quantity) {
    this.setPending(itemId, true);
    this.cartService.updateQuantity(itemId, quantity).subscribe({
      next: () => this.setPending(itemId, false),
      error: () => this.setPending(itemId, false)
    });
  }
  removeItem(itemId) {
    const next = new Set(this.removingItemIds());
    next.add(itemId);
    this.removingItemIds.set(next);
    setTimeout(() => {
      this.setPending(itemId, true);
      this.cartService.removeItem(itemId).subscribe({
        next: () => this.setPending(itemId, false),
        error: () => this.setPending(itemId, false)
      });
    }, REMOVE_ANIMATION_MS);
  }
  static {
    this.\u0275fac = function CartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 1, consts: [[1, "page-container", "cart"], ["icon", "cart", "title", "Your cart is empty", "message", "Everything you add will show up here, ready whenever you are.", "actionLabel", "Start shopping", "actionRoute", "/"], ["appScrollReveal", "", 1, "cart__layout"], [1, "cart__list"], [1, "cart-line", "hover-lift", 3, "is-pending", "is-removing", "appScrollReveal"], [1, "cart-summary"], [1, "cart-summary__row"], [1, "cart-summary__note"], ["routerLink", "/checkout", 1, "btn", "btn--primary", "cart-summary__checkout"], [1, "cart-line", "hover-lift", 3, "appScrollReveal"], [1, "cart-line__media", 3, "routerLink"], [3, "src", "alt"], [1, "cart-line__info"], [1, "cart-line__name", 3, "routerLink"], [1, "cart-line__brand"], [1, "cart-line__unit-price"], [1, "cart-line__stepper"], ["type", "button", "aria-label", "Decrease quantity", 3, "click", "disabled"], ["type", "button", "aria-label", "Increase quantity", 3, "click", "disabled"], [1, "cart-line__total"], ["type", "button", "aria-label", "Remove item", 1, "cart-line__remove", 3, "click", "disabled"], ["name", "delete"]], template: function CartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1");
        \u0275\u0275text(2, "Your cart");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, CartComponent_Conditional_3_Template, 1, 0, "app-empty-state", 1)(4, CartComponent_Conditional_4_Template, 17, 7, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.cartService.cart().items.length === 0 ? 3 : 4);
      }
    }, dependencies: [CommonModule, CurrencyPipe, RouterLink, EmptyStateComponent, ScrollRevealDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: 2.5rem 0 5rem;\n}\n.cart[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.cart__layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 20rem;\n  gap: 3rem;\n  align-items: start;\n}\n.cart__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.cart-line[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 5rem 1fr auto auto auto;\n  align-items: center;\n  gap: 1.25rem;\n  padding: 1rem 0;\n  border-bottom: 1px solid var(--color-border);\n  transition:\n    opacity 0.2s ease,\n    transform 0.25s var(--ease-quiet),\n    box-shadow 0.25s var(--ease-quiet);\n}\n.cart-line.is-pending[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.cart-line.is-removing[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateX(12px);\n}\n.cart-line__media[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 5rem;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  background: var(--color-beige);\n}\n.cart-line__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.cart-line__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  min-width: 0;\n}\n.cart-line__name[_ngcontent-%COMP%] {\n  color: var(--color-charcoal);\n  font-weight: 600;\n  text-decoration: none;\n  font-family: var(--font-display);\n}\n.cart-line__brand[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--color-charcoal-soft);\n}\n.cart-line__unit-price[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--color-charcoal-soft);\n}\n.cart-line__stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n}\n.cart-line__stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 2.1rem;\n  height: 2.3rem;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--color-charcoal);\n  transition: background 0.15s var(--ease-quiet);\n}\n.cart-line__stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-sage-pale);\n}\n.cart-line__stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.cart-line__stepper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  min-width: 1.6rem;\n  text-align: center;\n  font-weight: 600;\n}\n.cart-line__total[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-charcoal);\n  min-width: 4.5rem;\n  text-align: right;\n}\n.cart-line__remove[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  cursor: pointer;\n  color: var(--color-charcoal-soft);\n}\n.cart-line__remove[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #B4534A;\n}\n.cart-line__remove[_ngcontent-%COMP%]   ui5-icon[_ngcontent-%COMP%] {\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.cart-summary[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  padding: 1.75rem;\n  position: sticky;\n  top: calc(var(--shell-header-height) + 1.5rem);\n}\n.cart-summary__row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 1.25rem 0 0.5rem;\n  font-weight: 600;\n  color: var(--color-charcoal);\n}\n.cart-summary__note[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--color-charcoal-soft);\n  margin-bottom: 1.5rem;\n}\n.cart-summary__checkout[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.8rem 1.6rem;\n  border-radius: var(--radius-sm);\n  font-weight: 600;\n  font-size: 0.9rem;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  transition: background 0.2s ease, transform 0.2s ease;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: var(--color-sage);\n  color: var(--color-cream);\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  background: var(--color-sage-deep);\n}\n@media (max-width: 820px) {\n  .cart__layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cart-line[_ngcontent-%COMP%] {\n    grid-template-columns: 4rem 1fr auto;\n    row-gap: 0.6rem;\n  }\n  .cart-line[_ngcontent-%COMP%]   .cart-line__stepper[_ngcontent-%COMP%] {\n    grid-column: 2/3;\n  }\n  .cart-line[_ngcontent-%COMP%]   .cart-line__total[_ngcontent-%COMP%], \n   .cart-line[_ngcontent-%COMP%]   .cart-line__remove[_ngcontent-%COMP%] {\n    grid-column: 3/4;\n  }\n}\n/*# sourceMappingURL=cart.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src/app/features/cart/cart.component.ts", lineNumber: 22 });
})();
export {
  CartComponent
};
//# sourceMappingURL=cart.component-G2MSHCKG.js.map
