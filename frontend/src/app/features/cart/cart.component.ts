import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

/** How long the fade/slide-out plays before the item actually leaves the
 *  cart — there's no Angular `animations` package wired into this app, so a
 *  CSS-only leave transition needs the DOM node kept alive briefly instead of
 *  disappearing the instant the @for's `track` drops it. */
const REMOVE_ANIMATION_MS = 220;

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, EmptyStateComponent, ScrollRevealDirective],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CartComponent {
  readonly cartService = inject(CartService);

  /** Tracks which line item is mid-request so its controls disable individually. */
  readonly pendingItemIds = signal<Set<number>>(new Set());

  /** Tracks which line item is mid-removal, for the fade/slide-out transition. */
  readonly removingItemIds = signal<Set<number>>(new Set());

  isPending(itemId: number): boolean {
    return this.pendingItemIds().has(itemId);
  }

  isRemoving(itemId: number): boolean {
    return this.removingItemIds().has(itemId);
  }

  private setPending(itemId: number, pending: boolean): void {
    const next = new Set(this.pendingItemIds());
    if (pending) next.add(itemId);
    else next.delete(itemId);
    this.pendingItemIds.set(next);
  }

  increment(itemId: number, currentQuantity: number, stock: number): void {
    if (currentQuantity >= stock) return;
    this.updateQuantity(itemId, currentQuantity + 1);
  }

  decrement(itemId: number, currentQuantity: number): void {
    if (currentQuantity <= 1) return;
    this.updateQuantity(itemId, currentQuantity - 1);
  }

  private updateQuantity(itemId: number, quantity: number): void {
    this.setPending(itemId, true);
    this.cartService.updateQuantity(itemId, quantity).subscribe({
      next: () => this.setPending(itemId, false),
      error: () => this.setPending(itemId, false),
    });
  }

  removeItem(itemId: number): void {
    const next = new Set(this.removingItemIds());
    next.add(itemId);
    this.removingItemIds.set(next);

    setTimeout(() => {
      this.setPending(itemId, true);
      this.cartService.removeItem(itemId).subscribe({
        next: () => this.setPending(itemId, false),
        error: () => this.setPending(itemId, false),
      });
    }, REMOVE_ANIMATION_MS);
  }
}
