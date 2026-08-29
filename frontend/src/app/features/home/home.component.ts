import { CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { interval } from 'rxjs';
import { CategoryService } from '../../core/services/category.service';
import { RecommendationService } from '../../core/services/recommendation.service';
import { Category } from '../../core/models/category.model';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { SkeletonLoaderComponent } from '../../shared/components/skeleton-loader/skeleton-loader.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface HeroSlide {
  slug: string;
  name: string;
  thumbnail: string;
}

interface TrustPoint {
  icon: string;
  label: string;
}

interface MoodTile {
  title: string;
  note: string;
  image: string;
  routerLink: string[];
  queryParams: Record<string, string>;
}

interface EditBlurb {
  title: string;
  note: string;
  image: string;
  routerLink: string[];
  queryParams?: Record<string, string>;
}

/** Curated local imagery for the fixed 8-category taxonomy — takes priority
 *  over the API's `hero_image` (kept as a fallback for any slug not mapped). */
const CATEGORY_IMAGE_MAP: Record<string, string> = {
  electronics: 'assets/images/categories/electronics.jpg',
  fashion: 'assets/images/categories/fashion.jpg',
  'home-living': 'assets/images/categories/home-living.jpg',
  'beauty-personal-care': 'assets/images/categories/beauty-personal-care.jpg',
  'sports-outdoors': 'assets/images/categories/sports-outdoors.jpg',
  'books-media': 'assets/images/categories/books-media.jpg',
  'toys-kids': 'assets/images/categories/toys-kids.jpg',
  'grocery-gourmet': 'assets/images/categories/grocery-gourmet.jpg',
};

const TRUST_POINTS: TrustPoint[] = [
  { icon: 'shipping-status', label: 'Free shipping over $50' },
  { icon: 'synchronize', label: '30-day easy returns' },
  { icon: 'shield', label: 'Secure checkout' },
  { icon: 'accept', label: 'Vetted for quality, not volume' },
];

const MOOD_TILES: MoodTile[] = [
  {
    title: 'Quiet mornings',
    note: 'Skincare and rituals worth slowing down for.',
    image: 'assets/images/categories/beauty-personal-care.jpg',
    routerLink: ['/category', 'beauty-personal-care'],
    queryParams: { sort: 'rating' },
  },
  {
    title: 'Home reset',
    note: 'A calmer room, one considered piece at a time.',
    image: 'assets/images/categories/home-living.jpg',
    routerLink: ['/category', 'home-living'],
    queryParams: { sort: 'newest' },
  },
  {
    title: 'Desk & travel',
    note: 'Tools that earn their place in your bag.',
    image: 'assets/images/categories/electronics.jpg',
    routerLink: ['/category', 'electronics'],
    queryParams: { sort: 'popularity' },
  },
  {
    title: 'Considered gifting',
    note: 'Highest-rated picks across everything we carry.',
    image: 'assets/images/categories/fashion.jpg',
    routerLink: ['/search'],
    queryParams: { rating_min: '4', sort: 'popularity' },
  },
];

const EDIT_BLURBS: EditBlurb[] = [
  {
    title: 'Fewer, better things',
    note: 'Why we cap what we carry instead of chasing catalog size.',
    image: 'assets/images/decorative/flatlay.jpg',
    routerLink: ['/search'],
    queryParams: { sort: 'rating' },
  },
  {
    title: 'What "vetted" means here',
    note: 'Every listing is checked for craft and longevity before it ships.',
    image: 'assets/images/categories/home-living.jpg',
    routerLink: ['/category', 'home-living'],
  },
  {
    title: 'This week, we\'re loving',
    note: 'A rotating shelf of staff picks across categories.',
    image: 'assets/images/categories/electronics.jpg',
    routerLink: ['/category', 'electronics'],
  },
  {
    title: 'Considered spaces',
    note: 'Pieces we\'d actually want to live with, not just sell.',
    image: 'assets/images/decorative/arches.jpg',
    routerLink: ['/category', 'fashion'],
  },
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    ProductCardComponent,
    SkeletonLoaderComponent,
    ScrollRevealDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  private readonly categoryService = inject(CategoryService);
  private readonly recommendationService = inject(RecommendationService);

  constructor() {
    interval(4500)
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        const total = this.heroSlides().length;
        if (total > 1) this.activeHeroSlide.update((i) => (i + 1) % total);
      });

    effect(() => {
      if (this.activeHeroSlide() >= this.heroSlides().length) this.activeHeroSlide.set(0);
    });
  }

  readonly trustPoints = TRUST_POINTS;
  readonly moodTiles = MOOD_TILES;
  readonly editBlurbs = EDIT_BLURBS;

  private readonly categoriesLoaded = toSignal(this.categoryService.getTree(), {
    initialValue: null,
  });
  readonly categories = computed(() => this.categoriesLoaded() ?? []);
  readonly categoriesLoading = computed(() => this.categoriesLoaded() === null);

  private readonly trendingLoaded = toSignal(this.recommendationService.trending(), {
    initialValue: null,
  });
  readonly trending = computed(() => this.trendingLoaded() ?? []);
  readonly trendingLoading = computed(() => this.trendingLoaded() === null);

  private readonly forYouLoaded = toSignal(this.recommendationService.forYou(), {
    initialValue: null,
  });
  readonly forYou = computed(() => this.forYouLoaded() ?? []);
  readonly forYouLoading = computed(() => this.forYouLoaded() === null);
  /** A brand-new guest has no signal yet — hide the rail rather than show it empty. */
  readonly showForYou = computed(() => this.forYouLoading() || this.forYou().length > 0);

  readonly heroCategory = computed(() => this.categories()[0] ?? null);

  /** One representative product image per section, so the banner carousel
   *  reflects the actual catalog rather than fixed stock photography. */
  readonly heroSlides = computed<HeroSlide[]>(() => {
    const seen = new Set<string>();
    const slides: HeroSlide[] = [];
    for (const product of [...this.trending(), ...this.forYou()]) {
      if (seen.has(product.category.slug)) continue;
      seen.add(product.category.slug);
      slides.push({ slug: product.category.slug, name: product.name, thumbnail: product.thumbnail });
      if (slides.length === 8) break;
    }
    return slides.length
      ? slides
      : [{ slug: 'default', name: 'A considered still life of Lumina goods', thumbnail: 'assets/images/hero/hero-main.jpg' }];
  });

  readonly activeHeroSlide = signal(0);

  setHeroSlide(index: number): void {
    this.activeHeroSlide.set(index);
  }

  readonly newsletterEmail = signal('');
  readonly newsletterSubmitted = signal(false);

  categoryImage(cat: Category): string {
    return CATEGORY_IMAGE_MAP[cat.slug] ?? cat.hero_image ?? '';
  }

  submitNewsletter(): void {
    const email = this.newsletterEmail().trim();
    if (!/^\S+@\S+\.\S+$/.test(email) || this.newsletterSubmitted()) return;
    // No backend subscribe endpoint exists — this is an honest client-only
    // confirmation, nothing is persisted.
    this.newsletterSubmitted.set(true);
    this.newsletterEmail.set('');
  }
}
