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
  computed,
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

// src/app/features/register/register.component.ts
function RegisterComponent_Conditional_8_Template(rf, ctx) {
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
function RegisterComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Passwords don't match.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ui5-busy-indicator", 14);
  }
}
function RegisterComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Create account ");
  }
}
var RegisterComponent = class _RegisterComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.cartService = inject(CartService);
    this.wishlistService = inject(WishlistService);
    this.router = inject(Router);
    this.name = "";
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
    this.submitting = signal(false);
    this.error = signal(null);
    this.passwordsMatch = computed(() => this.password === this.confirmPassword);
    this.canSubmit = computed(() => !!this.name && !!this.email && this.password.length >= 8 && this.passwordsMatch() && !this.submitting());
  }
  submit() {
    if (!this.canSubmit())
      return;
    this.submitting.set(true);
    this.error.set(null);
    this.authService.register(this.name, this.email, this.password).subscribe({
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
      error: (err) => {
        this.submitting.set(false);
        const message = err?.error?.message ?? "We could not create your account. Please check your details and try again.";
        this.error.set(message);
      }
    });
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegisterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 8, consts: [[1, "page-container", "auth"], ["appScrollReveal", "", 1, "auth-card"], [1, "eyebrow"], [1, "auth-card__lede"], ["design", "Negative", 1, "auth-card__message"], [1, "auth-form", 3, "ngSubmit"], [1, "form-field"], ["required", "", "name", "name", 3, "input", "value"], ["type", "Email", "required", "", "name", "email", 3, "input", "value"], ["type", "Password", "required", "", "name", "password", 3, "input", "value"], [1, "form-field__hint"], ["type", "Password", "required", "", "name", "confirmPassword", 3, "input", "value"], [1, "form-field__hint", "form-field__hint--error"], ["type", "submit", 1, "btn", "btn--primary", "auth-form__submit", 3, "disabled"], ["active", "", "size", "S"], [1, "auth-card__switch"], ["routerLink", "/login"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Join Lumina");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "Create your account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 3);
        \u0275\u0275text(7, "Save your wishlist, track orders, and check out faster next time.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, RegisterComponent_Conditional_8_Template, 2, 1, "ui5-message-strip", 4);
        \u0275\u0275elementStart(9, "form", 5);
        \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_9_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(10, "label", 6)(11, "span");
        \u0275\u0275text(12, "Full name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "ui5-input", 7);
        \u0275\u0275listener("input", function RegisterComponent_Template_ui5_input_input_13_listener($event) {
          return ctx.name = $event.target.value;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "label", 6)(15, "span");
        \u0275\u0275text(16, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "ui5-input", 8);
        \u0275\u0275listener("input", function RegisterComponent_Template_ui5_input_input_17_listener($event) {
          return ctx.email = $event.target.value;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "label", 6)(19, "span");
        \u0275\u0275text(20, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "ui5-input", 9);
        \u0275\u0275listener("input", function RegisterComponent_Template_ui5_input_input_21_listener($event) {
          return ctx.password = $event.target.value;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 10);
        \u0275\u0275text(23, "At least 8 characters.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "label", 6)(25, "span");
        \u0275\u0275text(26, "Confirm password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "ui5-input", 11);
        \u0275\u0275listener("input", function RegisterComponent_Template_ui5_input_input_27_listener($event) {
          return ctx.confirmPassword = $event.target.value;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(28, RegisterComponent_Conditional_28_Template, 2, 0, "span", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "button", 13);
        \u0275\u0275template(30, RegisterComponent_Conditional_30_Template, 1, 0, "ui5-busy-indicator", 14)(31, RegisterComponent_Conditional_31_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "p", 15);
        \u0275\u0275text(33, " Already have an account? ");
        \u0275\u0275elementStart(34, "a", 16);
        \u0275\u0275text(35, "Log in");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.error() ? 8 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.name);
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.email);
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.password);
        \u0275\u0275advance(6);
        \u0275\u0275property("value", ctx.confirmPassword);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.confirmPassword && !ctx.passwordsMatch() ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.canSubmit());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submitting() ? 30 : 31);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, RouterLink, ScrollRevealDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: 4rem 0 6rem;\n}\n.auth[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 26rem;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  padding: 2.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.auth-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n.auth-card__lede[_ngcontent-%COMP%] {\n  color: var(--color-charcoal-soft);\n  font-size: 0.9rem;\n  margin-bottom: 0.5rem;\n}\n.auth-card__message[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.1rem;\n  margin-top: 0.5rem;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  font-size: 0.82rem;\n  color: var(--color-charcoal-soft);\n}\n.form-field[_ngcontent-%COMP%]   ui5-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-field__hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-charcoal-soft);\n  opacity: 0.8;\n}\n.form-field__hint--error[_ngcontent-%COMP%] {\n  color: #B4534A;\n  opacity: 1;\n}\n.auth-form__submit[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  min-height: 2.7rem;\n}\n.auth-card__switch[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  font-size: 0.88rem;\n  color: var(--color-charcoal-soft);\n  text-align: center;\n}\n.auth-card__switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-sage-deep);\n  font-weight: 600;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.8rem 1.6rem;\n  border-radius: var(--radius-sm);\n  font-weight: 600;\n  font-size: 0.9rem;\n  border: none;\n  cursor: pointer;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: var(--color-sage);\n  color: var(--color-cream);\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-sage-deep);\n}\n.btn--primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=register.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/features/register/register.component.ts", lineNumber: 19 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=register.component-Z3LINDW6.js.map
