import { CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, effect, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CompareService, MAX_COMPARE_ITEMS, MIN_COMPARE_ITEMS } from '../../core/services/compare.service';
import { CompareResult } from '../../core/models/product.model';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';
import { PriceTagComponent } from '../../shared/components/price-tag/price-tag.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SkeletonLoaderComponent } from '../../shared/components/skeleton-loader/skeleton-loader.component';
import { StarRatingComponent } from '../../shared/components/star-rating/star-rating.component';

/** Matches the cart's leave-transition delay — same reasoning: no Angular
 *  `animations` package is wired in, so the DOM node needs to survive briefly
 *  after the click before the underlying data actually changes. */
const REMOVE_ANIMATION_MS = 220;

@Component({
  selector: 'app-compare',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    EmptyStateComponent,
    PriceTagComponent,
    SkeletonLoaderComponent,
    StarRatingComponent,
    ScrollRevealDirective,
  ],
  templateUrl: './compare.component.html',
  styleUrl: './compare.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CompareComponent {
  readonly compareService = inject(CompareService);

  readonly minItems = MIN_COMPARE_ITEMS;
  readonly maxItems = MAX_COMPARE_ITEMS;

  readonly result = signal<CompareResult | null>(null);
  readonly loading = signal(false);
  readonly error = signal(false);

  readonly removingIds = signal<Set<number>>(new Set());

  readonly canCompare = computed(() => this.compareService.count() >= this.minItems);

  isRemoving(productId: number): boolean {
    return this.removingIds().has(productId);
  }

  constructor() {
    // The compare selection is a shared signal (localStorage-backed) that can
    // change from any screen (product card, product detail); re-fetch the
    // side-by-side table whenever it does.
    effect(() => {
      const ids = this.compareService.ids();
      if (ids.length < this.minItems) {
        this.result.set(null);
        return;
      }
      this.fetch();
    });
  }

  private fetch(): void {
    this.loading.set(true);
    this.error.set(false);
    this.compareService.compare().subscribe({
      next: (res) => {
        this.result.set(res);
        this.loading.set(false);
      },
      error: () => {
        this.result.set(null);
        this.loading.set(false);
        this.error.set(true);
      },
    });
  }

  remove(productId: number): void {
    const next = new Set(this.removingIds());
    next.add(productId);
    this.removingIds.set(next);

    setTimeout(() => this.compareService.remove(productId), REMOVE_ANIMATION_MS);
  }

  clearAll(): void {
    this.compareService.clear();
  }
}
