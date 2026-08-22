import { CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  Subject,
  catchError,
  debounceTime,
  distinctUntilChanged,
  of,
  switchMap,
} from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { CartService } from '../../core/services/cart.service';
import { CategoryService } from '../../core/services/category.service';
import { CompareService } from '../../core/services/compare.service';
import { SearchService } from '../../core/services/search.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { Category } from '../../core/models/category.model';
import { SearchSuggestions } from '../../core/models/product.model';

const EMPTY_SUGGESTIONS: SearchSuggestions = { products: [], categories: [] };

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderComponent {
  private readonly router = inject(Router);
  private readonly categoryService = inject(CategoryService);
  private readonly searchService = inject(SearchService);

  readonly authService = inject(AuthService);
  readonly cartService = inject(CartService);
  readonly wishlistService = inject(WishlistService);
  readonly compareService = inject(CompareService);

  readonly topCategories = toSignal(this.categoryService.getTree(), { initialValue: [] as Category[] });

  readonly searchQuery = signal('');
  readonly suggestionsOpen = signal(false);
  readonly mobileNavOpen = signal(false);
  readonly accountMenuOpen = signal(false);

  private readonly searchInput$ = new Subject<string>();
  readonly suggestions = toSignal(
    this.searchInput$.pipe(
      debounceTime(250),
      distinctUntilChanged(),
      switchMap((q) => {
        if (q.trim().length < 2) return of(EMPTY_SUGGESTIONS);
        return this.searchService.suggest(q.trim()).pipe(catchError(() => of(EMPTY_SUGGESTIONS)));
      }),
    ),
    { initialValue: EMPTY_SUGGESTIONS },
  );

  readonly hasSuggestions = computed(
    () => this.suggestions().products.length > 0 || this.suggestions().categories.length > 0,
  );

  /** Brief `.pulse-once` cue on the cart badge whenever the count changes —
   *  skips the very first run so landing on a page with an already-nonempty
   *  cart doesn't bump on load. */
  readonly cartBumped = signal(false);
  private previousItemCount: number | null = null;

  constructor() {
    effect(() => {
      const count = this.cartService.itemCount();
      if (this.previousItemCount !== null && count !== this.previousItemCount) {
        this.cartBumped.set(true);
        setTimeout(() => this.cartBumped.set(false), 400);
      }
      this.previousItemCount = count;
    }, { allowSignalWrites: true });
  }

  onSearchInput(value: string): void {
    this.searchQuery.set(value);
    this.suggestionsOpen.set(true);
    this.searchInput$.next(value);
  }

  submitSearch(): void {
    const query = this.searchQuery().trim();
    if (!query) return;
    this.suggestionsOpen.set(false);
    this.router.navigate(['/search'], { queryParams: { q: query } });
  }

  goToProduct(slug: string): void {
    this.suggestionsOpen.set(false);
    this.searchQuery.set('');
    this.router.navigate(['/product', slug]);
  }

  goToCategory(slug: string): void {
    this.suggestionsOpen.set(false);
    this.searchQuery.set('');
    this.mobileNavOpen.set(false);
    this.router.navigate(['/category', slug]);
  }

  closeSuggestionsSoon(): void {
    // Let a click on a suggestion register before the panel disappears.
    setTimeout(() => this.suggestionsOpen.set(false), 150);
  }

  toggleMobileNav(): void {
    this.mobileNavOpen.set(!this.mobileNavOpen());
  }

  toggleAccountMenu(): void {
    this.accountMenuOpen.set(!this.accountMenuOpen());
  }

  logout(): void {
    this.accountMenuOpen.set(false);
    this.authService.logout().subscribe(() => this.router.navigate(['/']));
  }
}
