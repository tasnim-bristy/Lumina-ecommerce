import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';
import { PriceTagComponent } from '../../shared/components/price-tag/price-tag.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

/** Same reasoning as cart/compare: no Angular `animations` package is wired
 *  in, so a CSS-only leave transition needs the card to survive briefly
 *  after the click before it's actually removed from the list. */
const REMOVE_ANIMATION_MS = 220;

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterLink, EmptyStateComponent, PriceTagComponent, ScrollRevealDirective],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WishlistComponent {
  readonly wishlistService = inject(WishlistService);
  private readonly cartService = inject(CartService);

  readonly pendingProductIds = signal<Set<number>>(new Set());
  readonly movedProductIds = signal<Set<number>>(new Set());
  readonly removingProductIds = signal<Set<number>>(new Set());

  isPending(productId: number): boolean {
    return this.pendingProductIds().has(productId);
  }

  isMoved(productId: number): boolean {
    return this.movedProductIds().has(productId);
  }

  isRemoving(productId: number): boolean {
    return this.removingProductIds().has(productId);
  }

  private setPending(productId: number, pending: boolean): void {
    const next = new Set(this.pendingProductIds());
    if (pending) next.add(productId);
    else next.delete(productId);
    this.pendingProductIds.set(next);
  }

  moveToCart(productId: number): void {
    if (this.isPending(productId)) return;
    this.setPending(productId, true);
    this.cartService.addItem(productId, 1).subscribe({
      next: () => {
        this.wishlistService.remove(productId).subscribe({
          next: () => this.setPending(productId, false),
          error: () => this.setPending(productId, false),
        });
        const moved = new Set(this.movedProductIds());
        moved.add(productId);
        this.movedProductIds.set(moved);
      },
      error: () => this.setPending(productId, false),
    });
  }

  remove(productId: number): void {
    if (this.isPending(productId)) return;

    const next = new Set(this.removingProductIds());
    next.add(productId);
    this.removingProductIds.set(next);

    setTimeout(() => {
      this.setPending(productId, true);
      this.wishlistService.remove(productId).subscribe({
        next: () => this.setPending(productId, false),
        error: () => this.setPending(productId, false),
      });
    }, REMOVE_ANIMATION_MS);
  }
}
