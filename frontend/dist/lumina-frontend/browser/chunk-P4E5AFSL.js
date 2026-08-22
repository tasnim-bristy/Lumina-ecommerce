import {
  ElementRef,
  inject,
  input,
  ɵɵdefineDirective
} from "./chunk-HVBC7HBT.js";

// src/app/shared/directives/scroll-reveal.directive.ts
var ScrollRevealDirective = class _ScrollRevealDirective {
  constructor() {
    this.elementRef = inject(ElementRef);
    this.observer = null;
    this.revealDelay = input(0, { alias: "appScrollReveal" });
  }
  ngAfterViewInit() {
    const element = this.elementRef.nativeElement;
    element.classList.add("reveal");
    if (typeof IntersectionObserver === "undefined") {
      element.classList.add("is-visible");
      return;
    }
    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const delay = this.revealDelay();
          if (delay > 0) {
            element.style.transitionDelay = `${delay}ms`;
          }
          element.classList.add("is-visible");
          this.observer?.unobserve(element);
        }
      }
    }, { threshold: 0.15 });
    this.observer.observe(element);
  }
  ngOnDestroy() {
    this.observer?.disconnect();
  }
  static {
    this.\u0275fac = function ScrollRevealDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrollRevealDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ScrollRevealDirective, selectors: [["", "appScrollReveal", ""]], inputs: { revealDelay: [1, "appScrollReveal", "revealDelay"] }, standalone: true });
  }
};

export {
  ScrollRevealDirective
};
//# sourceMappingURL=chunk-P4E5AFSL.js.map
