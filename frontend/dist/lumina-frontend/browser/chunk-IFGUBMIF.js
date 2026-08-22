import {
  CommonModule,
  RouterLink,
  input,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HVBC7HBT.js";

// src/app/shared/components/empty-state/empty-state.component.ts
function EmptyStateComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.message());
  }
}
function EmptyStateComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ui5-button", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r0.actionRoute());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.actionLabel(), " ");
  }
}
var EmptyStateComponent = class _EmptyStateComponent {
  constructor() {
    this.icon = input("inbox");
    this.title = input.required();
    this.message = input("");
    this.actionLabel = input("");
    this.actionRoute = input("");
  }
  static {
    this.\u0275fac = function EmptyStateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmptyStateComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmptyStateComponent, selectors: [["app-empty-state"]], inputs: { icon: [1, "icon"], title: [1, "title"], message: [1, "message"], actionLabel: [1, "actionLabel"], actionRoute: [1, "actionRoute"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 4, consts: [[1, "empty-state"], [1, "empty-state__icon", 3, "name"], [1, "empty-state__title"], [1, "empty-state__message"], ["design", "Emphasized", 1, "empty-state__action", 3, "routerLink"]], template: function EmptyStateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "ui5-icon", 1);
        \u0275\u0275elementStart(2, "h3", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, EmptyStateComponent_Conditional_4_Template, 2, 1, "p", 3)(5, EmptyStateComponent_Conditional_5_Template, 2, 2, "ui5-button", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275propertyInterpolate("name", ctx.icon());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.title());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.message() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.actionLabel() && ctx.actionRoute() ? 5 : -1);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 0.75rem;\n  padding: 3.5rem 1.5rem;\n  border: 1px solid var(--color-border);\n  border-radius: 14px;\n  background: var(--color-cream-soft);\n}\n.empty-state__icon[_ngcontent-%COMP%] {\n  color: var(--color-sage);\n  width: 2.5rem;\n  height: 2.5rem;\n  margin-bottom: 0.25rem;\n}\n.empty-state__title[_ngcontent-%COMP%] {\n  font-family: "Fraunces", serif;\n  font-size: 1.25rem;\n  color: var(--color-charcoal);\n  margin: 0;\n}\n.empty-state__message[_ngcontent-%COMP%] {\n  color: var(--color-charcoal-soft);\n  max-width: 32ch;\n  margin: 0;\n}\n.empty-state__action[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n/*# sourceMappingURL=empty-state.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmptyStateComponent, { className: "EmptyStateComponent", filePath: "src/app/shared/components/empty-state/empty-state.component.ts", lineNumber: 14 });
})();

export {
  EmptyStateComponent
};
//# sourceMappingURL=chunk-IFGUBMIF.js.map
