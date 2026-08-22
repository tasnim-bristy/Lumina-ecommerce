import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { combineLatest } from 'rxjs';
import { CategoryService } from '../../core/services/category.service';
import { ProductService } from '../../core/services/product.service';
import { BrandFacet, Paginated, SortOption } from '../../core/models/common.model';
import { Category } from '../../core/models/category.model';
import { ProductSummary } from '../../core/models/product.model';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { SkeletonLoaderComponent } from '../../shared/components/skeleton-loader/skeleton-loader.component';

interface SortChoice {
  value: SortOption;
  label: string;
}

const SORT_CHOICES: SortChoice[] = [
  { value: 'popularity', label: 'Most popular' },
  { value: 'newest', label: 'Newest' },
  { value: 'price_asc', label: 'Price: low to high' },
  { value: 'price_desc', label: 'Price: high to low' },
  { value: 'rating', label: 'Highest rated' },
];

const PER_PAGE = 24;
const MAX_PRICE_CEILING = 150000;

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProductCardComponent,
    SkeletonLoaderComponent,
    EmptyStateComponent,
  ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CurrencyPipe],
})
export class CatalogComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);
  private readonly categoryService = inject(CategoryService);
  private readonly currencyPipe = inject(CurrencyPipe);

  private readonly categoryTree = toSignal(this.categoryService.getTree(), { initialValue: [] as Category[] });

  readonly sortChoices = SORT_CHOICES;
  readonly priceCeiling = MAX_PRICE_CEILING;

  // Route-derived context.
  readonly categorySlug = signal<string | null>(null);
  readonly searchQuery = signal<string | null>(null);

  // Filter state, all mutated imperatively from the template then re-fetched.
  readonly minPrice = signal<number>(0);
  readonly maxPrice = signal<number>(MAX_PRICE_CEILING);
  readonly selectedBrands = signal<string[]>([]);
  readonly ratingMin = signal<number | null>(null);
  readonly sort = signal<SortOption>('popularity');
  readonly page = signal<number>(1);

  readonly brands = signal<BrandFacet[]>([]);
  readonly result = signal<Paginated<ProductSummary> | null>(null);
  readonly loading = signal(true);
  readonly error = signal(false);

  // Collapsible filter-group disclosure state (all open by default).
  readonly priceExpanded = signal(true);
  readonly brandExpanded = signal(true);
  readonly ratingExpanded = signal(true);

  // Mobile filter drawer (<900px, matches .catalog__layout's breakpoint).
  readonly filtersDrawerOpen = signal(false);

  // Brief `.pulse-once` cue on the grid after a filter/sort/page change —
  // not on the very first load, which would just be visual noise.
  readonly resultsJustUpdated = signal(false);
  private hasLoadedOnce = false;

  readonly products = computed(() => this.result()?.data ?? []);
  readonly meta = computed(() => this.result()?.meta ?? null);
  readonly currentCategory = computed(() => {
    const slug = this.categorySlug();
    if (!slug) return null;
    return this.findCategoryBySlug(this.categoryTree(), slug);
  });

  readonly heading = computed(() => {
    if (this.searchQuery()) return `Results for "${this.searchQuery()}"`;
    return this.currentCategory()?.name ?? 'All products';
  });
  readonly pageNumbers = computed(() => {
    const meta = this.meta();
    if (!meta) return [];
    return Array.from({ length: meta.last_page }, (_, i) => i + 1);
  });

  readonly activeFilterChips = computed(() => {
    const chips: { label: string; clear: () => void }[] = [];

    const min = this.minPrice();
    const max = this.maxPrice();
    if (min > 0 || max < this.priceCeiling) {
      chips.push({
        label: `${this.formatPrice(min)}–${this.formatPrice(max)}${max === this.priceCeiling ? '+' : ''}`,
        clear: () => this.onPriceRangeChange(0, this.priceCeiling),
      });
    }

    for (const brand of this.selectedBrands()) {
      chips.push({ label: brand, clear: () => this.toggleBrand(brand, false) });
    }

    const rating = this.ratingMin();
    if (rating !== null) {
      chips.push({ label: `${rating}★ & up`, clear: () => this.setRatingMin(null) });
    }

    return chips;
  });

  constructor() {
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(takeUntilDestroyed())
      .subscribe(([params, query]) => {
        const category = params.get('slug');
        const q = query.get('q');
        const categoryChanged = category !== this.categorySlug();

        this.categorySlug.set(category);
        this.searchQuery.set(q);
        this.page.set(1);

        if (categoryChanged) {
          this.resetFilters();
          this.loadBrands();
        }

        // Lets homepage "shop by mood" links deep-link into a preset sort /
        // rating filter (e.g. /category/electronics?sort=newest) without
        // disturbing in-page filter interactions, which never touch the URL.
        const sortParam = query.get('sort');
        if (sortParam && this.sortChoices.some((choice) => choice.value === sortParam)) {
          this.sort.set(sortParam as SortOption);
        }
        const ratingParam = query.get('rating_min');
        if (ratingParam) {
          this.ratingMin.set(Number(ratingParam));
        }

        this.loadProducts();
      });
  }

  private loadBrands(): void {
    this.productService.getBrands(this.categorySlug() ?? undefined).subscribe({
      next: (brands) => this.brands.set(brands),
      error: () => this.brands.set([]),
    });
  }

  private loadProducts(): void {
    this.loading.set(true);
    this.error.set(false);
    const isInitialLoad = !this.hasLoadedOnce;
    this.productService
      .list({
        category: this.categorySlug() ?? undefined,
        q: this.searchQuery() ?? undefined,
        min_price: this.minPrice() > 0 ? this.minPrice() : undefined,
        max_price: this.maxPrice() < this.priceCeiling ? this.maxPrice() : undefined,
        brands: this.selectedBrands().length ? this.selectedBrands() : undefined,
        rating_min: this.ratingMin() ?? undefined,
        sort: this.sort(),
        page: this.page(),
        per_page: PER_PAGE,
      })
      .subscribe({
        next: (res) => {
          this.result.set(res);
          this.loading.set(false);
          this.hasLoadedOnce = true;
          if (!isInitialLoad) {
            this.resultsJustUpdated.set(true);
            setTimeout(() => this.resultsJustUpdated.set(false), 400);
          }
        },
        error: () => {
          this.result.set(null);
          this.loading.set(false);
          this.error.set(true);
        },
      });
  }

  private resetFilters(): void {
    this.minPrice.set(0);
    this.maxPrice.set(MAX_PRICE_CEILING);
    this.selectedBrands.set([]);
    this.ratingMin.set(null);
  }

  onPriceRangeChange(min: number, max: number): void {
    this.minPrice.set(min);
    this.maxPrice.set(max);
    this.page.set(1);
    this.loadProducts();
  }

  toggleBrand(brand: string, checked: boolean): void {
    const current = this.selectedBrands();
    this.selectedBrands.set(checked ? [...current, brand] : current.filter((b) => b !== brand));
    this.page.set(1);
    this.loadProducts();
  }

  setRatingMin(value: number | null): void {
    this.ratingMin.set(this.ratingMin() === value ? null : value);
    this.page.set(1);
    this.loadProducts();
  }

  setSort(value: SortOption): void {
    this.sort.set(value);
    this.page.set(1);
    this.loadProducts();
  }

  goToPage(page: number): void {
    if (page < 1 || (this.meta() && page > this.meta()!.last_page)) return;
    this.page.set(page);
    this.loadProducts();
  }

  clearAllFilters(): void {
    this.resetFilters();
    this.sort.set('popularity');
    this.page.set(1);
    this.loadProducts();
  }

  private formatPrice(value: number): string {
    return this.currencyPipe.transform(value, 'BDT', 'symbol-narrow', '1.0-0') ?? `${value}`;
  }

  toggleFilterGroup(group: 'price' | 'brand' | 'rating'): void {
    const target = group === 'price' ? this.priceExpanded : group === 'brand' ? this.brandExpanded : this.ratingExpanded;
    target.set(!target());
  }

  openFiltersDrawer(): void {
    this.filtersDrawerOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeFiltersDrawer(): void {
    this.filtersDrawerOpen.set(false);
    document.body.style.overflow = '';
  }

  private findCategoryBySlug(categories: Category[], slug: string): Category | null {
    for (const category of categories) {
      if (category.slug === slug) return category;
      if (category.children?.length) {
        const found = this.findCategoryBySlug(category.children, slug);
        if (found) return found;
      }
    }
    return null;
  }

  onPriceSliderChange(event: Event): void {
    const el = event.target as unknown as { valueStart: number; valueEnd: number };
    this.onPriceRangeChange(Math.round(el.valueStart), Math.round(el.valueEnd));
  }

  onBrandCheckboxChange(brand: string, event: Event): void {
    const checked = (event.target as unknown as { checked: boolean }).checked;
    this.toggleBrand(brand, checked);
  }
}
