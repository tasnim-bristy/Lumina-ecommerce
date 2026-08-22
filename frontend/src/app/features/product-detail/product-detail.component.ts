import { CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, HostListener, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CartService } from '../../core/services/cart.service';
import { CompareService } from '../../core/services/compare.service';
import { ProductService } from '../../core/services/product.service';
import { RecommendationService } from '../../core/services/recommendation.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { Paginated } from '../../core/models/common.model';
import { ProductDetail, ProductSummary, Review } from '../../core/models/product.model';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';
import { PriceTagComponent } from '../../shared/components/price-tag/price-tag.component';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SkeletonLoaderComponent } from '../../shared/components/skeleton-loader/skeleton-loader.component';
import { StarRatingComponent } from '../../shared/components/star-rating/star-rating.component';

const REVIEWS_PER_PAGE_LABEL = 1;

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    PriceTagComponent,
    StarRatingComponent,
    ProductCardComponent,
    SkeletonLoaderComponent,
    EmptyStateComponent,
    ScrollRevealDirective,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);
  private readonly recommendationService = inject(RecommendationService);
  private readonly cartService = inject(CartService);
  private readonly wishlistService = inject(WishlistService);
  private readonly compareService = inject(CompareService);
  readonly authService = inject(AuthService);

  readonly product = signal<ProductDetail | null>(null);
  readonly loading = signal(true);
  readonly notFound = signal(false);

  readonly selectedImageIndex = signal(0);
  readonly quantity = signal(1);
  readonly isAddingToCart = signal(false);
  readonly justAddedToCart = signal(false);

  readonly reviews = signal<Paginated<Review> | null>(null);
  readonly reviewsLoading = signal(true);

  readonly similarProducts = signal<ProductSummary[]>([]);
  readonly similarLoading = signal(true);

  readonly newReviewRating = signal(0);
  readonly newReviewComment = signal('');
  readonly submittingReview = signal(false);
  readonly reviewSubmitError = signal<string | null>(null);
  readonly reviewSubmitted = signal(false);

  // Desktop hover-zoom lens over the main gallery image.
  readonly zoomActive = signal(false);
  readonly zoomPosition = signal({ x: 50, y: 50 });

  // Click-to-open full-viewport lightbox, reusing selectedImageIndex.
  readonly lightboxOpen = signal(false);

  // "Goes well with" — a compact, honestly-labeled reuse of the similar-
  // products recommendation (there's no real co-purchase data behind it).
  readonly goesWellWith = computed(() => this.similarProducts().slice(0, 3));
  readonly addingAllGoesWellWith = signal(false);

  readonly isWishlisted = computed(() => {
    const p = this.product();
    return p ? this.wishlistService.isWishlisted(p.id) : false;
  });
  readonly isComparing = computed(() => {
    const p = this.product();
    return p ? this.compareService.isSelected(p.id) : false;
  });
  readonly canAddToCompare = computed(() => this.isComparing() || this.compareService.canAddMore());

  readonly reviewPageNumbers = computed(() => {
    const meta = this.reviews()?.meta;
    if (!meta) return [];
    return Array.from({ length: meta.last_page }, (_, i) => i + 1);
  });

  readonly ratingBars = computed(() => {
    const summary = this.product()?.reviews_summary;
    if (!summary) return [];
    const total = summary.count || 1;
    return [5, 4, 3, 2, 1].map((stars) => {
      const count = summary.breakdown[String(stars)] ?? 0;
      return { stars, count, percent: Math.round((count / total) * 100) };
    });
  });

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const slug = params.get('slug');
      if (slug) this.loadProduct(slug);
    });
  }

  private loadProduct(slug: string): void {
    this.loading.set(true);
    this.notFound.set(false);
    this.product.set(null);
    this.selectedImageIndex.set(0);
    this.quantity.set(1);

    this.productService.getBySlug(slug).subscribe({
      next: (product) => {
        this.product.set(product);
        this.loading.set(false);
        this.recommendationService.trackView(product.id);
        this.loadReviews(product.id);
        this.loadSimilar(product.id);
      },
      error: () => {
        this.loading.set(false);
        this.notFound.set(true);
      },
    });
  }

  private loadReviews(productId: number, page = 1): void {
    this.reviewsLoading.set(true);
    this.productService.getReviews(productId, page).subscribe({
      next: (res) => {
        this.reviews.set(res);
        this.reviewsLoading.set(false);
      },
      error: () => {
        this.reviews.set({ data: [], meta: { current_page: 1, last_page: 1, per_page: REVIEWS_PER_PAGE_LABEL, total: 0 } });
        this.reviewsLoading.set(false);
      },
    });
  }

  private loadSimilar(productId: number): void {
    this.similarLoading.set(true);
    this.recommendationService.similar(productId).subscribe((products) => {
      this.similarProducts.set(products);
      this.similarLoading.set(false);
    });
  }

  selectImage(index: number): void {
    this.selectedImageIndex.set(index);
  }

  incrementQuantity(): void {
    const stock = this.product()?.stock ?? 1;
    this.quantity.set(Math.min(this.quantity() + 1, Math.max(stock, 1)));
  }

  decrementQuantity(): void {
    this.quantity.set(Math.max(1, this.quantity() - 1));
  }

  addToCart(): void {
    const product = this.product();
    if (!product || this.isAddingToCart()) return;
    this.isAddingToCart.set(true);
    this.cartService.addItem(product.id, this.quantity()).subscribe({
      next: () => {
        this.isAddingToCart.set(false);
        this.justAddedToCart.set(true);
        setTimeout(() => this.justAddedToCart.set(false), 1600);
      },
      error: () => this.isAddingToCart.set(false),
    });
  }

  toggleWishlist(): void {
    const product = this.product();
    if (!product) return;
    this.wishlistService.toggle(product.id).subscribe();
  }

  toggleCompare(): void {
    const product = this.product();
    if (!product) return;
    this.compareService.toggle(product.id);
  }

  setReviewRating(stars: number): void {
    this.newReviewRating.set(stars);
  }

  submitReview(): void {
    const product = this.product();
    if (!product || this.newReviewRating() === 0 || this.submittingReview()) return;

    this.submittingReview.set(true);
    this.reviewSubmitError.set(null);
    this.productService.submitReview(product.id, this.newReviewRating(), this.newReviewComment()).subscribe({
      next: () => {
        this.submittingReview.set(false);
        this.reviewSubmitted.set(true);
        this.newReviewRating.set(0);
        this.newReviewComment.set('');
        this.loadReviews(product.id);
        setTimeout(() => this.reviewSubmitted.set(false), 3000);
      },
      error: () => {
        this.submittingReview.set(false);
        this.reviewSubmitError.set("We couldn't submit your review. Please try again.");
      },
    });
  }

  loadReviewsPage(page: number): void {
    const product = this.product();
    if (!product) return;
    this.loadReviews(product.id, page);
  }

  attributeEntries(): [string, string][] {
    const attributes = this.product()?.attributes ?? {};
    return Object.entries(attributes);
  }

  onGalleryMouseMove(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    this.zoomPosition.set({ x, y });
  }

  openLightbox(): void {
    this.lightboxOpen.set(true);
  }

  closeLightbox(): void {
    this.lightboxOpen.set(false);
  }

  lightboxNext(): void {
    const product = this.product();
    if (!product) return;
    this.selectedImageIndex.set((this.selectedImageIndex() + 1) % product.images.length);
  }

  lightboxPrev(): void {
    const product = this.product();
    if (!product) return;
    const count = product.images.length;
    this.selectedImageIndex.set((this.selectedImageIndex() - 1 + count) % count);
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (!this.lightboxOpen()) return;
    if (event.key === 'Escape') this.closeLightbox();
    else if (event.key === 'ArrowRight') this.lightboxNext();
    else if (event.key === 'ArrowLeft') this.lightboxPrev();
  }

  addAllGoesWellWith(): void {
    const items = this.goesWellWith();
    if (!items.length || this.addingAllGoesWellWith()) return;
    this.addingAllGoesWellWith.set(true);
    let remaining = items.length;
    const done = () => {
      remaining -= 1;
      if (remaining === 0) this.addingAllGoesWellWith.set(false);
    };
    for (const item of items) {
      this.cartService.addItem(item.id, 1).subscribe({ next: done, error: done });
    }
  }
}
