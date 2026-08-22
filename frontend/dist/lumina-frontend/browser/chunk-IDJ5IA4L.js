import {
  CommonModule,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate
} from "./chunk-HVBC7HBT.js";

// src/app/shared/components/skeleton-loader/skeleton-loader.component.ts
function SkeletonLoaderComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275elementEnd();
  }
}
function SkeletonLoaderComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, SkeletonLoaderComponent_Conditional_0_For_2_Template, 4, 0, "div", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.repeats);
  }
}
function SkeletonLoaderComponent_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
  }
}
function SkeletonLoaderComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SkeletonLoaderComponent_Conditional_1_For_1_Template, 1, 0, "div", 5, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.repeats);
  }
}
function SkeletonLoaderComponent_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
  }
}
function SkeletonLoaderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SkeletonLoaderComponent_Conditional_2_For_1_Template, 1, 0, "div", 6, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.repeats);
  }
}
function SkeletonLoaderComponent_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
  }
}
function SkeletonLoaderComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SkeletonLoaderComponent_Conditional_3_For_1_Template, 1, 0, "div", 7, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.repeats);
  }
}
var SkeletonLoaderComponent = class _SkeletonLoaderComponent {
  constructor() {
    this.variant = input("line");
    this.count = input(1);
  }
  get repeats() {
    return Array.from({ length: Math.max(1, this.count()) }, (_, i) => i);
  }
  static {
    this.\u0275fac = function SkeletonLoaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SkeletonLoaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonLoaderComponent, selectors: [["app-skeleton-loader"]], inputs: { variant: [1, "variant"], count: [1, "count"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[1, "skeleton-grid"], [1, "skeleton-card"], [1, "skeleton-shimmer", "skeleton-card__image"], [1, "skeleton-shimmer", "skeleton-card__line", "skeleton-card__line--wide"], [1, "skeleton-shimmer", "skeleton-card__line", "skeleton-card__line--narrow"], [1, "skeleton-shimmer", "skeleton-image"], [1, "skeleton-shimmer", "skeleton-circle"], [1, "skeleton-shimmer", "skeleton-line"]], template: function SkeletonLoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SkeletonLoaderComponent_Conditional_0_Template, 3, 0, "div", 0)(1, SkeletonLoaderComponent_Conditional_1_Template, 2, 0)(2, SkeletonLoaderComponent_Conditional_2_Template, 2, 0)(3, SkeletonLoaderComponent_Conditional_3_Template, 2, 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.variant() === "card" ? 0 : ctx.variant() === "image" ? 1 : ctx.variant() === "circle" ? 2 : 3);
      }
    }, dependencies: [CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.skeleton-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 1.5rem;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n.skeleton-card__image[_ngcontent-%COMP%] {\n  aspect-ratio: 1/1;\n  border-radius: 12px;\n}\n.skeleton-card__line[_ngcontent-%COMP%] {\n  height: 0.85rem;\n  border-radius: 6px;\n}\n.skeleton-card__line--wide[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.skeleton-card__line--narrow[_ngcontent-%COMP%] {\n  width: 45%;\n}\n.skeleton-image[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 1/1;\n  border-radius: 12px;\n  margin-bottom: 0.75rem;\n}\n.skeleton-circle[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 0.5rem;\n}\n.skeleton-line[_ngcontent-%COMP%] {\n  height: 0.85rem;\n  width: 100%;\n  border-radius: 6px;\n  margin-bottom: 0.6rem;\n}\n/*# sourceMappingURL=skeleton-loader.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonLoaderComponent, { className: "SkeletonLoaderComponent", filePath: "src/app/shared/components/skeleton-loader/skeleton-loader.component.ts", lineNumber: 12 });
})();

export {
  SkeletonLoaderComponent
};
//# sourceMappingURL=chunk-IDJ5IA4L.js.map
