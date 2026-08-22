import { AfterViewInit, Directive, ElementRef, OnDestroy, inject, input } from '@angular/core';

/**
 * Adds `.is-visible` (see the `.reveal` keyframe classes in styles.scss) the
 * first time the host scrolls into view, then stops observing. Used to give
 * homepage sections a quiet fade/slide-up entrance instead of animating
 * everything on load.
 */
@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private observer: IntersectionObserver | null = null;

  /** Optional stagger delay in milliseconds, e.g. for successive rail cards. */
  readonly revealDelay = input<number>(0, { alias: 'appScrollReveal' });

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    element.classList.add('reveal');

    if (typeof IntersectionObserver === 'undefined') {
      element.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const delay = this.revealDelay();
            if (delay > 0) {
              element.style.transitionDelay = `${delay}ms`;
            }
            element.classList.add('is-visible');
            this.observer?.unobserve(element);
          }
        }
      },
      { threshold: 0.15 },
    );
    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
