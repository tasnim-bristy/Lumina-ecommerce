import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  ɵNgNoValidate
} from "./chunk-EHDVELEP.js";
import {
  AuthService
} from "./chunk-VB7LJCBZ.js";
import "./chunk-3HG5S7OZ.js";
import {
  WishlistService
} from "./chunk-LZEW6XII.js";
import {
  ScrollRevealDirective
} from "./chunk-P4E5AFSL.js";
import {
  CartService
} from "./chunk-TO3NWCGE.js";
import {
  CommonModule,
  Router,
  RouterLink,
  forkJoin,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-HVBC7HBT.js";
import "./chunk-5K356HEJ.js";

// src/app/features/login/login.component.ts
function LoginComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ui5-message-strip", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function LoginComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ui5-busy-indicator", 10);
  }
}
function LoginComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Log in ");
  }
}
var LoginComponent = class _LoginComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.cartService = inject(CartService);
    this.wishlistService = inject(WishlistService);
    this.router = inject(Router);
    this.email = "";
    this.password = "";
    this.submitting = signal(false);
    this.error = signal(null);
  }
  submit() {
    if (!this.email || !this.password || this.submitting())
      return;
    this.submitting.set(true);
    this.error.set(null);
    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        forkJoin([this.cartService.mergeGuestCart(), this.wishlistService.mergeGuestWishlist()]).subscribe({
          next: () => {
            this.submitting.set(false);
            this.router.navigate(["/"]);
          },
          error: () => {
            this.submitting.set(false);
            this.router.navigate(["/"]);
          }
        });
      },
      error: () => {
        this.submitting.set(false);
        this.error.set("That email and password combination doesn't match an account.");
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 5, consts: [[1, "page-container", "auth"], ["appScrollReveal", "", 1, "auth-card"], [1, "eyebrow"], [1, "auth-card__lede"], ["design", "Negative", 1, "auth-card__message"], [1, "auth-form", 3, "ngSubmit"], [1, "form-field"], ["type", "Email", "required", "", "name", "email", 3, "input", "value"], ["type", "Password", "required", "", "name", "password", 3, "input", "value"], ["type", "submit", 1, "btn", "btn--primary", "auth-form__submit", 3, "disabled"], ["active", "", "size", "S"], [1, "auth-card__switch"], ["routerLink", "/register"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Welcome back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "Log in to Lumina");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 3);
        \u0275\u0275text(7, "Pick up your cart, wishlist, and order history right where you left them.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, LoginComponent_Conditional_8_Template, 2, 1, "ui5-message-strip", 4);
        \u0275\u0275elementStart(9, "form", 5);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(10, "label", 6)(11, "span");
        \u0275\u0275text(12, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "ui5-input", 7);
        \u0275\u0275listener("input", function LoginComponent_Template_ui5_input_input_13_listener($event) {
          return ctx.email = $event.target.value;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "label", 6)(15, "span");
        \u0275\u0275text(16, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "ui5-input", 8);
        \u0275\u0275listener("input", function LoginComponent_Template_ui5_input_input_17_listener($event) {
          return ctx.password = $event.target.value;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "button", 9);
        \u0275\u0275template(19, LoginComponent_Conditional_19_Template, 1, 0, "ui5-busy-indicator", 10)(20, LoginComponent_Conditional_20_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "p", 11);
        \u0275\u0275text(22, " New to Lumina? ");
        \u0275\u0275elementStart(23, "a", 12);
        \u0275\u0275text(24, "Create an account");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.error() ? 8 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.email);
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.password);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.email || !ctx.password || ctx.submitting());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submitting() ? 19 : 20);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, RouterLink, ScrollRevealDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: 4rem 0 6rem;\n}\n.auth[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 26rem;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  padding: 2.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.auth-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n.auth-card__lede[_ngcontent-%COMP%] {\n  color: var(--color-charcoal-soft);\n  font-size: 0.9rem;\n  margin-bottom: 0.5rem;\n}\n.auth-card__message[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.1rem;\n  margin-top: 0.5rem;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  font-size: 0.82rem;\n  color: var(--color-charcoal-soft);\n}\n.form-field[_ngcontent-%COMP%]   ui5-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.auth-form__submit[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  min-height: 2.7rem;\n}\n.auth-card__switch[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  font-size: 0.88rem;\n  color: var(--color-charcoal-soft);\n  text-align: center;\n}\n.auth-card__switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-sage-deep);\n  font-weight: 600;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.8rem 1.6rem;\n  border-radius: var(--radius-sm);\n  font-weight: 600;\n  font-size: 0.9rem;\n  border: none;\n  cursor: pointer;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: var(--color-sage);\n  color: var(--color-cream);\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-sage-deep);\n}\n.btn--primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/login/login.component.ts", lineNumber: 19 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-BXG2LIYP.js.map
