import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  ɵNgNoValidate
} from "./chunk-EHDVELEP.js";
import {
  CategoryService
} from "./chunk-QBSWX2BR.js";
import {
  RecommendationService
} from "./chunk-4PQLGCVQ.js";
import {
  ProductCardComponent
} from "./chunk-XYWMIQOV.js";
import "./chunk-VOMM6CVB.js";
import {
  SkeletonLoaderComponent
} from "./chunk-IDJ5IA4L.js";
import {
  toSignal
} from "./chunk-27YFXVTK.js";
import "./chunk-NEVRHAWF.js";
import "./chunk-3HG5S7OZ.js";
import "./chunk-NENRD53V.js";
import "./chunk-LZEW6XII.js";
import {
  ScrollRevealDirective
} from "./chunk-P4E5AFSL.js";
import "./chunk-TO3NWCGE.js";
import {
  CommonModule,
  RouterLink,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HVBC7HBT.js";
import "./chunk-5K356HEJ.js";

// src/app/features/home/home.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.title;
var _forTrack2 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/category", a0];
var _c1 = () => ({});
function HomeComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, ctx_r0.heroCategory().slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Shop ", ctx_r0.heroCategory().name, " ");
  }
}
function HomeComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275element(1, "ui5-icon", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const point_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("name", point_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", point_r2.label, " ");
  }
}
function HomeComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-loader", 17);
  }
  if (rf & 2) {
    \u0275\u0275property("count", 6);
  }
}
function HomeComponent_Conditional_30_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 33);
    \u0275\u0275element(1, "span", 34)(2, "ui5-icon", 35);
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    const \u0275$index_62_r4 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-image", "url(" + ctx_r0.categoryImage(cat_r3) + ")");
    \u0275\u0275classProp("category-tile--wide", \u0275$index_62_r4 === 0);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, cat_r3.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("name", cat_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r3.name);
  }
}
function HomeComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_30_For_2_Template, 5, 9, "a", 32, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.categories());
  }
}
function HomeComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 37);
    \u0275\u0275element(1, "span", 38);
    \u0275\u0275elementStart(2, "span", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tile_r5 = ctx.$implicit;
    const \u0275$index_86_r6 = ctx.$index;
    \u0275\u0275styleProp("background-image", "url(" + tile_r5.image + ")");
    \u0275\u0275property("routerLink", tile_r5.routerLink)("queryParams", tile_r5.queryParams)("appScrollReveal", \u0275$index_86_r6 * 80);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tile_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tile_r5.note);
  }
}
function HomeComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-loader", 17);
  }
  if (rf & 2) {
    \u0275\u0275property("count", 4);
  }
}
function HomeComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "Trending picks will appear here as orders come in.");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_Conditional_50_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "app-product-card", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("product", product_r7);
  }
}
function HomeComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_50_For_2_Template, 2, 1, "div", 41, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.trending());
  }
}
function HomeComponent_For_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 43);
    \u0275\u0275element(1, "span", 44);
    \u0275\u0275elementStart(2, "span", 45)(3, "span", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 47);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const blurb_r8 = ctx.$implicit;
    const \u0275$index_138_r9 = ctx.$index;
    \u0275\u0275classProp("edit-card--wide", \u0275$index_138_r9 === 0);
    \u0275\u0275property("routerLink", blurb_r8.routerLink)("queryParams", (tmp_13_0 = blurb_r8.queryParams) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : \u0275\u0275pureFunction0(8, _c1));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + blurb_r8.image + ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(blurb_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(blurb_r8.note);
  }
}
function HomeComponent_Conditional_61_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-loader", 17);
  }
  if (rf & 2) {
    \u0275\u0275property("count", 4);
  }
}
function HomeComponent_Conditional_61_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "app-product-card", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("product", product_r10);
  }
}
function HomeComponent_Conditional_61_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_61_Conditional_8_For_2_Template, 2, 1, "div", 41, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.forYou());
  }
}
function HomeComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "div", 15)(2, "div", 16)(3, "span", 3);
    \u0275\u0275text(4, "Personalized for you");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Picked from what you've browsed");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, HomeComponent_Conditional_61_Conditional_7_Template, 1, 1, "app-skeleton-loader", 17)(8, HomeComponent_Conditional_61_Conditional_8_Template, 3, 0, "div", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.forYouLoading() ? 7 : 8);
  }
}
function HomeComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, "You're on the list \u2014 welcome.");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 48);
    \u0275\u0275listener("ngSubmit", function HomeComponent_Conditional_72_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitNewsletter());
    });
    \u0275\u0275elementStart(1, "ui5-input", 49);
    \u0275\u0275listener("input", function HomeComponent_Conditional_72_Template_ui5_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.newsletterEmail.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 50);
    \u0275\u0275text(3, "Sign up");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.newsletterEmail());
  }
}
var CATEGORY_IMAGE_MAP = {
  electronics: "assets/images/categories/electronics.jpg",
  fashion: "assets/images/categories/fashion.jpg",
  "home-living": "assets/images/categories/home-living.jpg",
  "beauty-personal-care": "assets/images/categories/beauty-personal-care.jpg",
  "sports-outdoors": "assets/images/categories/sports-outdoors.jpg",
  "books-media": "assets/images/categories/books-media.jpg",
  "toys-kids": "assets/images/categories/toys-kids.jpg",
  "grocery-gourmet": "assets/images/categories/grocery-gourmet.jpg"
};
var TRUST_POINTS = [
  { icon: "shipping-status", label: "Free shipping over $50" },
  { icon: "synchronize", label: "30-day easy returns" },
  { icon: "shield", label: "Secure checkout" },
  { icon: "accept", label: "Vetted for quality, not volume" }
];
var MOOD_TILES = [
  {
    title: "Quiet mornings",
    note: "Skincare and rituals worth slowing down for.",
    image: "assets/images/categories/beauty-personal-care.jpg",
    routerLink: ["/category", "beauty-personal-care"],
    queryParams: { sort: "rating" }
  },
  {
    title: "Home reset",
    note: "A calmer room, one considered piece at a time.",
    image: "assets/images/categories/home-living.jpg",
    routerLink: ["/category", "home-living"],
    queryParams: { sort: "newest" }
  },
  {
    title: "Desk & travel",
    note: "Tools that earn their place in your bag.",
    image: "assets/images/categories/electronics.jpg",
    routerLink: ["/category", "electronics"],
    queryParams: { sort: "popularity" }
  },
  {
    title: "Considered gifting",
    note: "Highest-rated picks across everything we carry.",
    image: "assets/images/categories/fashion.jpg",
    routerLink: ["/search"],
    queryParams: { rating_min: "4", sort: "popularity" }
  }
];
var EDIT_BLURBS = [
  {
    title: "Fewer, better things",
    note: "Why we cap what we carry instead of chasing catalog size.",
    image: "assets/images/decorative/flatlay.jpg",
    routerLink: ["/search"],
    queryParams: { sort: "rating" }
  },
  {
    title: 'What "vetted" means here',
    note: "Every listing is checked for craft and longevity before it ships.",
    image: "assets/images/categories/home-living.jpg",
    routerLink: ["/category", "home-living"]
  },
  {
    title: "This week, we're loving",
    note: "A rotating shelf of staff picks across categories.",
    image: "assets/images/categories/electronics.jpg",
    routerLink: ["/category", "electronics"]
  }
];
var HomeComponent = class _HomeComponent {
  constructor() {
    this.categoryService = inject(CategoryService);
    this.recommendationService = inject(RecommendationService);
    this.trustPoints = TRUST_POINTS;
    this.moodTiles = MOOD_TILES;
    this.editBlurbs = EDIT_BLURBS;
    this.categoriesLoaded = toSignal(this.categoryService.getTree(), {
      initialValue: null
    });
    this.categories = computed(() => this.categoriesLoaded() ?? []);
    this.categoriesLoading = computed(() => this.categoriesLoaded() === null);
    this.trendingLoaded = toSignal(this.recommendationService.trending(), {
      initialValue: null
    });
    this.trending = computed(() => this.trendingLoaded() ?? []);
    this.trendingLoading = computed(() => this.trendingLoaded() === null);
    this.forYouLoaded = toSignal(this.recommendationService.forYou(), {
      initialValue: null
    });
    this.forYou = computed(() => this.forYouLoaded() ?? []);
    this.forYouLoading = computed(() => this.forYouLoaded() === null);
    this.showForYou = computed(() => this.forYouLoading() || this.forYou().length > 0);
    this.heroCategory = computed(() => this.categories()[0] ?? null);
    this.newsletterEmail = signal("");
    this.newsletterSubmitted = signal(false);
  }
  categoryImage(cat) {
    return CATEGORY_IMAGE_MAP[cat.slug] ?? cat.hero_image ?? "";
  }
  submitNewsletter() {
    const email = this.newsletterEmail().trim();
    if (!/^\S+@\S+\.\S+$/.test(email) || this.newsletterSubmitted())
      return;
    this.newsletterSubmitted.set(true);
    this.newsletterEmail.set("");
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 73, vars: 5, consts: [[1, "hero"], [1, "page-container", "hero__grid"], [1, "hero__copy"], [1, "eyebrow"], [1, "hero__lede"], [1, "hero__actions"], [1, "btn", "btn--primary", 3, "routerLink"], ["routerLink", "/search", 1, "btn", "btn--ghost"], [1, "hero__art"], ["src", "assets/images/hero/hero-main.jpg", "alt", "A considered still life of Lumina goods", "loading", "eager", 1, "hero__art-image", "hero__art-image--main"], ["src", "assets/images/hero/hero-accent.jpg", "alt", "Detail shot of a Lumina product", "loading", "eager", 1, "hero__art-image", "hero__art-image--accent"], [1, "trust-strip"], [1, "page-container", "trust-strip__row"], [1, "trust-strip__item"], ["appScrollReveal", "", 1, "section"], [1, "page-container"], [1, "section__header"], ["variant", "card", 3, "count"], [1, "category-grid"], ["appScrollReveal", "", 1, "section", "section--tinted"], [1, "mood-grid"], [1, "mood-tile", "hover-lift", 3, "routerLink", "queryParams", "backgroundImage", "appScrollReveal"], [1, "section__empty-note"], [1, "product-rail"], [1, "edit-grid"], [1, "edit-card", "hover-lift", 3, "routerLink", "queryParams", "edit-card--wide"], ["appScrollReveal", "", 1, "newsletter"], [1, "page-container", "newsletter__grid"], [1, "newsletter__card"], [1, "newsletter__confirm", "pulse-once"], [1, "newsletter__form"], [3, "name"], [1, "category-tile", "hover-lift", 3, "routerLink", "category-tile--wide", "backgroundImage"], [1, "category-tile", "hover-lift", 3, "routerLink"], [1, "category-tile__scrim"], [1, "category-tile__icon", 3, "name"], [1, "category-tile__name"], [1, "mood-tile", "hover-lift", 3, "routerLink", "queryParams", "appScrollReveal"], [1, "mood-tile__scrim"], [1, "mood-tile__title"], [1, "mood-tile__note"], [1, "product-rail__item"], [3, "product"], [1, "edit-card", "hover-lift", 3, "routerLink", "queryParams"], [1, "edit-card__media"], [1, "edit-card__body"], [1, "edit-card__title"], [1, "edit-card__note"], [1, "newsletter__form", 3, "ngSubmit"], ["type", "Email", "placeholder", "you@example.com", 1, "newsletter__input", 3, "input", "value"], ["type", "submit", 1, "btn", "btn--primary"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Considered, not curated by algorithm");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "Fewer things.");
        \u0275\u0275element(7, "br");
        \u0275\u0275text(8, "Better chosen.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 4);
        \u0275\u0275text(10, " Lumina gathers electronics, fashion, home, and beauty goods that earn a place in your life \u2014 vetted for craft, longevity, and quiet good taste, not just conversion rates. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275template(12, HomeComponent_Conditional_12_Template, 2, 4, "a", 6);
        \u0275\u0275elementStart(13, "a", 7);
        \u0275\u0275text(14, "Browse everything");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 8);
        \u0275\u0275element(16, "img", 9)(17, "img", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "section", 11)(19, "div", 12);
        \u0275\u0275repeaterCreate(20, HomeComponent_For_21_Template, 3, 2, "span", 13, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "section", 14)(23, "div", 15)(24, "div", 16)(25, "span", 3);
        \u0275\u0275text(26, "Shop by category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "h2");
        \u0275\u0275text(28, "Wherever you're starting from");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(29, HomeComponent_Conditional_29_Template, 1, 1, "app-skeleton-loader", 17)(30, HomeComponent_Conditional_30_Template, 3, 0, "div", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "section", 19)(32, "div", 15)(33, "div", 16)(34, "span", 3);
        \u0275\u0275text(35, "Shop by mood");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "h2");
        \u0275\u0275text(37, "Less browsing, more finding");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 20);
        \u0275\u0275repeaterCreate(39, HomeComponent_For_40_Template, 6, 7, "a", 21, _forTrack1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "section", 14)(42, "div", 15)(43, "div", 16)(44, "span", 3);
        \u0275\u0275text(45, "Trending now");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "h2");
        \u0275\u0275text(47, "What people are choosing this week");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(48, HomeComponent_Conditional_48_Template, 1, 1, "app-skeleton-loader", 17)(49, HomeComponent_Conditional_49_Template, 2, 0, "p", 22)(50, HomeComponent_Conditional_50_Template, 3, 0, "div", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "section", 19)(52, "div", 15)(53, "div", 16)(54, "span", 3);
        \u0275\u0275text(55, "The Edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "h2");
        \u0275\u0275text(57, "Notes from the curation desk");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "div", 24);
        \u0275\u0275repeaterCreate(59, HomeComponent_For_60_Template, 7, 9, "a", 25, _forTrack1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(61, HomeComponent_Conditional_61_Template, 9, 1, "section", 14);
        \u0275\u0275elementStart(62, "section", 26)(63, "div", 27)(64, "div", 28)(65, "span", 3);
        \u0275\u0275text(66, "Stay considered");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "h2");
        \u0275\u0275text(68, "One email, when there's actually something worth saying.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "p");
        \u0275\u0275text(70, "No daily blasts \u2014 just the occasional new arrival or restock worth knowing about.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(71, HomeComponent_Conditional_71_Template, 2, 0, "p", 29)(72, HomeComponent_Conditional_72_Template, 4, 1, "form", 30);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275conditional(ctx.heroCategory() ? 12 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.trustPoints);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.categoriesLoading() ? 29 : 30);
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.moodTiles);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.trendingLoading() ? 48 : ctx.trending().length === 0 ? 49 : 50);
        \u0275\u0275advance(11);
        \u0275\u0275repeater(ctx.editBlurbs);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showForYou() ? 61 : -1);
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.newsletterSubmitted() ? 71 : 72);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatusGroup,
      NgForm,
      RouterLink,
      ProductCardComponent,
      SkeletonLoaderComponent,
      ScrollRevealDirective
    ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.hero[_ngcontent-%COMP%] {\n  padding: 3.5rem 0 5rem;\n}\n.hero__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.05fr 0.95fr;\n  gap: 3rem;\n  align-items: center;\n}\n.hero__copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  max-width: 34rem;\n}\n.hero__copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.75rem, 5vw, 4.25rem);\n}\n.hero__lede[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: var(--color-charcoal-soft);\n  max-width: 30rem;\n}\n.hero__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-top: 0.5rem;\n}\n.hero__art[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30rem;\n  justify-self: end;\n  width: 100%;\n  max-width: 26rem;\n}\n.hero__art-image[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: var(--radius-lg);\n  object-fit: cover;\n}\n.hero__art-image--main[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n  width: 78%;\n  height: 100%;\n}\n.hero__art-image--accent[_ngcontent-%COMP%] {\n  bottom: -2.5rem;\n  left: 0;\n  width: 48%;\n  height: 40%;\n  border: 6px solid var(--color-cream);\n  box-shadow: 0 16px 40px rgba(47, 46, 43, 0.15);\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.8rem 1.6rem;\n  border-radius: var(--radius-sm);\n  font-weight: 600;\n  font-size: 0.9rem;\n  text-decoration: none;\n  transition:\n    background 0.2s ease,\n    color 0.2s ease,\n    border-color 0.2s ease,\n    transform 0.2s ease;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: var(--color-sage);\n  color: var(--color-cream);\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  background: var(--color-sage-deep);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--color-charcoal);\n  border: 1px solid var(--color-charcoal);\n}\n.btn--ghost[_ngcontent-%COMP%]:hover {\n  background: var(--color-charcoal);\n  color: var(--color-cream);\n}\n.trust-strip[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-border);\n  border-bottom: 1px solid var(--color-border);\n  padding: 1.25rem 0;\n}\n.trust-strip__row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.5rem 2.5rem;\n  justify-content: center;\n}\n.trust-strip__item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.55rem;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--color-charcoal-soft);\n}\n.trust-strip__item[_ngcontent-%COMP%]   ui5-icon[_ngcontent-%COMP%] {\n  width: 1.15rem;\n  height: 1.15rem;\n  color: var(--color-sage-deep);\n}\n.section[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n}\n.section--tinted[_ngcontent-%COMP%] {\n  background: var(--color-cream-soft);\n}\n.section__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-bottom: 2rem;\n}\n.section__empty-note[_ngcontent-%COMP%] {\n  color: var(--color-charcoal-soft);\n}\n.category-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-auto-rows: 11rem;\n  gap: 1.25rem;\n}\n.category-tile[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  gap: 0.4rem;\n  padding: 1.1rem;\n  border-radius: var(--radius-lg);\n  background-size: cover;\n  background-position: center;\n  background-color: var(--color-beige);\n  color: var(--color-cream);\n  text-decoration: none;\n  overflow: hidden;\n}\n.category-tile--wide[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  grid-row: span 2;\n}\n.category-tile__scrim[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(47, 46, 43, 0.05) 30%,\n      rgba(47, 46, 43, 0.65) 100%);\n}\n.category-tile__icon[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.category-tile__name[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n}\n.mood-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.25rem;\n}\n.mood-tile[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  gap: 0.3rem;\n  aspect-ratio: 3/4;\n  padding: 1.25rem;\n  border-radius: var(--radius-lg);\n  background-size: cover;\n  background-position: center;\n  background-color: var(--color-beige);\n  color: var(--color-cream);\n  text-decoration: none;\n  overflow: hidden;\n}\n.mood-tile[_ngcontent-%COMP%]:hover   .mood-tile__title[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.mood-tile__scrim[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(47, 46, 43, 0.1) 40%,\n      rgba(47, 46, 43, 0.75) 100%);\n}\n.mood-tile__title[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  font-family: var(--font-display);\n  font-size: 1.15rem;\n}\n.mood-tile__note[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  font-size: 0.82rem;\n  opacity: 0.9;\n}\n.edit-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n.edit-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  text-decoration: none;\n  color: inherit;\n}\n.edit-card--wide[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  flex-direction: row;\n  align-items: center;\n}\n.edit-card--wide[_ngcontent-%COMP%]   .edit-card__media[_ngcontent-%COMP%] {\n  flex: 0 0 55%;\n  aspect-ratio: 4/3;\n}\n.edit-card__media[_ngcontent-%COMP%] {\n  aspect-ratio: 16/10;\n  border-radius: var(--radius-lg);\n  background-size: cover;\n  background-position: center;\n}\n.edit-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.edit-card__title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.2rem;\n  color: var(--color-charcoal);\n}\n.edit-card__note[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--color-charcoal-soft);\n}\n.newsletter[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: var(--color-charcoal) url(/assets/images/decorative/arches.jpg) center/cover no-repeat;\n  position: relative;\n}\n.newsletter[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      120deg,\n      rgba(47, 46, 43, 0.94) 45%,\n      rgba(47, 46, 43, 0.7) 100%);\n}\n.newsletter__grid[_ngcontent-%COMP%] {\n  position: relative;\n}\n.newsletter__card[_ngcontent-%COMP%] {\n  max-width: 32rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  color: var(--color-cream);\n}\n.newsletter__card[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  color: var(--color-sage);\n}\n.newsletter__card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--color-cream);\n}\n.newsletter__card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-cream-soft);\n}\n.newsletter__form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n  flex-wrap: wrap;\n}\n.newsletter__input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 14rem;\n}\n.newsletter__confirm[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-sage);\n}\n.product-rail[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.25rem;\n  overflow-x: auto;\n  padding-bottom: 0.5rem;\n  scroll-snap-type: x mandatory;\n}\n.product-rail__item[_ngcontent-%COMP%] {\n  flex: 0 0 15rem;\n  scroll-snap-align: start;\n}\n@media (max-width: 960px) {\n  .hero__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero__art[_ngcontent-%COMP%] {\n    justify-self: center;\n    height: 22rem;\n  }\n  .category-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .category-tile--wide[_ngcontent-%COMP%] {\n    grid-column: span 2;\n    grid-row: span 1;\n  }\n  .mood-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .edit-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .edit-card--wide[_ngcontent-%COMP%] {\n    grid-column: span 1;\n    flex-direction: column;\n  }\n  .edit-card--wide[_ngcontent-%COMP%]   .edit-card__media[_ngcontent-%COMP%] {\n    flex: none;\n    aspect-ratio: 16/10;\n  }\n  .newsletter__form[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/features/home/home.component.ts", lineNumber: 122 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=home.component-ZFZ56HW4.js.map
