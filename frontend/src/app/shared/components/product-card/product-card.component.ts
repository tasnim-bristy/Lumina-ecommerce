import { CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { CompareService } from '../../../core/services/compare.service';
import { WishlistService } from '../../../core/services/wishlist.service';
import { ProductSummary } from '../../../core/models/product.model';
import { PriceTagComponent } from '../price-tag/price-tag.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';

/**
 * Self-contained product tile: reads/writes wishlist + compare + cart state
 * directly from the shared services so it can be dropped into rails, grids,
 * and search results without any parent wiring.
 */
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink, PriceTagComponent, StarRatingComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductCardComponent {
  private readonly cartService = inject(CartService);
  private readonly wishlistService = inject(WishlistService);
  private readonly compareService = inject(CompareService);

  readonly product = input.required<ProductSummary>();

  readonly isAdding = signal(false);
  readonly justAdded = signal(false);

  readonly isWishlisted = computed(() => this.wishlistService.isWishlisted(this.product().id));
  readonly isComparing = computed(() => this.compareService.isSelected(this.product().id));
  readonly canAddToCompare = computed(
    () => this.isComparing() || this.compareService.canAddMore(),
  );

  addToCart(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    if (this.isAdding()) return;
    this.isAdding.set(true);
    this.cartService.addItem(this.product().id, 1).subscribe({
      next: () => {
        this.isAdding.set(false);
        this.justAdded.set(true);
        setTimeout(() => this.justAdded.set(false), 1400);
      },
      error: () => this.isAdding.set(false),
    });
  }

  toggleWishlist(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.wishlistService.toggle(this.product().id).subscribe();
  }

  toggleCompare(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.compareService.toggle(this.product().id);
  }
}
