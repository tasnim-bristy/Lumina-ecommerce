import {
  AuthService
} from "./chunk-VB7LJCBZ.js";
import {
  RecommendationService
} from "./chunk-4PQLGCVQ.js";
import {
  ProductService
} from "./chunk-FUSKKTUK.js";
import {
  ProductCardComponent
} from "./chunk-XYWMIQOV.js";
import {
  StarRatingComponent
} from "./chunk-VOMM6CVB.js";
import {
  SkeletonLoaderComponent
} from "./chunk-IDJ5IA4L.js";
import {
  takeUntilDestroyed
} from "./chunk-27YFXVTK.js";
import {
  CompareService
} from "./chunk-NEVRHAWF.js";
import "./chunk-3HG5S7OZ.js";
import {
  PriceTagComponent
} from "./chunk-NENRD53V.js";
import {
  WishlistService
} from "./chunk-LZEW6XII.js";
import {
  ScrollRevealDirective
} from "./chunk-P4E5AFSL.js";
import {
  EmptyStateComponent
} from "./chunk-IFGUBMIF.js";
import {
  CartService
} from "./chunk-TO3NWCGE.js";
import {
  ActivatedRoute,
  CommonModule,
  DatePipe,
  RouterLink,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HVBC7HBT.js";
import "./chunk-5K356HEJ.js";

// src/app/features/product-detail/product-detail.component.ts
var _forTrack0 = ($index, $item) => $item.stars;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item[0];
var _c0 = (a0) => ["/product", a0];
var _c1 = () => [1, 2, 3, 4, 5];
function ProductDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "app-skeleton-loader", 3)(2, "app-skeleton-loader", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("count", 6);
  }
}
function ProductDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "app-empty-state", 5);
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_2_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_2_Conditional_8_For_2_Template_button_click_0_listener() {
      const \u0275$index_33_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectImage(\u0275$index_33_r4));
    });
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const image_r5 = ctx.$implicit;
    const \u0275$index_33_r4 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("is-active", \u0275$index_33_r4 === ctx_r1.selectedImageIndex());
    \u0275\u0275advance();
    \u0275\u0275property("src", image_r5, \u0275\u0275sanitizeUrl)("alt", ctx_r1.product().name + " view " + (\u0275$index_33_r4 + 1));
  }
}
function ProductDetailComponent_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, ProductDetailComponent_Conditional_2_Conditional_8_For_2_Template, 2, 4, "button", 47, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.product().images);
  }
}
function ProductDetailComponent_Conditional_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ui5-icon", 49);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("In stock \u2014 ", ctx_r1.product().stock, " available");
  }
}
function ProductDetailComponent_Conditional_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ui5-icon", 50);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Currently out of stock");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ui5-busy-indicator", 26);
  }
}
function ProductDetailComponent_Conditional_2_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Added to cart ");
  }
}
function ProductDetailComponent_Conditional_2_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Add to cart ");
  }
}
function ProductDetailComponent_Conditional_2_Conditional_33_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ui5-busy-indicator", 26);
  }
}
function ProductDetailComponent_Conditional_2_Conditional_33_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" Add all ", ctx_r1.goesWellWith().length, " ");
  }
}
function ProductDetailComponent_Conditional_2_Conditional_33_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 54);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementStart(2, "span", 55);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "app-price-tag", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, item_r7.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r7.thumbnail, \u0275\u0275sanitizeUrl)("alt", item_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.name);
    \u0275\u0275advance();
    \u0275\u0275property("price", item_r7.price)("currency", item_r7.currency);
  }
}
function ProductDetailComponent_Conditional_2_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 51)(2, "span");
    \u0275\u0275text(3, "Goes well with");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 52);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_2_Conditional_33_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addAllGoesWellWith());
    });
    \u0275\u0275template(5, ProductDetailComponent_Conditional_2_Conditional_33_Conditional_5_Template, 1, 0, "ui5-busy-indicator", 26)(6, ProductDetailComponent_Conditional_2_Conditional_33_Conditional_6_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 53);
    \u0275\u0275repeaterCreate(8, ProductDetailComponent_Conditional_2_Conditional_33_For_9_Template, 5, 8, "a", 54, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.addingAllGoesWellWith());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.addingAllGoesWellWith() ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.goesWellWith());
  }
}
function ProductDetailComponent_Conditional_2_Conditional_41_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r8[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r8[1]);
  }
}
function ProductDetailComponent_Conditional_2_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 33)(1, "tbody");
    \u0275\u0275repeaterCreate(2, ProductDetailComponent_Conditional_2_Conditional_41_For_3_Template, 5, 2, "tr", null, _forTrack2);
    \u0275\u0275elementStart(4, "tr")(5, "th");
    \u0275\u0275text(6, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.attributeEntries());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.product().sku);
  }
}
function ProductDetailComponent_Conditional_2_For_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 57);
    \u0275\u0275element(4, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 59);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bar_r9 = ctx.$implicit;
    \u0275\u0275property("appScrollReveal", (5 - bar_r9.stars) * 90);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", bar_r9.stars, "\u2605");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", bar_r9.percent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bar_r9.count);
  }
}
function ProductDetailComponent_Conditional_2_Conditional_56_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ui5-message-strip", 60);
    \u0275\u0275text(1, " Thanks \u2014 your review has been posted. ");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_2_Conditional_56_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ui5-message-strip", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.reviewSubmitError(), " ");
  }
}
function ProductDetailComponent_Conditional_2_Conditional_56_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_2_Conditional_56_For_6_Template_button_click_0_listener() {
      const stars_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setReviewRating(stars_r12));
    });
    \u0275\u0275element(1, "ui5-icon", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stars_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("aria-label", stars_r12 + " stars");
    \u0275\u0275advance();
    \u0275\u0275classProp("is-filled", stars_r12 <= ctx_r1.newReviewRating());
  }
}
function ProductDetailComponent_Conditional_2_Conditional_56_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ui5-busy-indicator", 26);
  }
}
function ProductDetailComponent_Conditional_2_Conditional_56_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Submit review ");
  }
}
function ProductDetailComponent_Conditional_2_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1, "Write a review");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ProductDetailComponent_Conditional_2_Conditional_56_Conditional_2_Template, 2, 0, "ui5-message-strip", 60)(3, ProductDetailComponent_Conditional_2_Conditional_56_Conditional_3_Template, 2, 1, "ui5-message-strip", 61);
    \u0275\u0275elementStart(4, "div", 62);
    \u0275\u0275repeaterCreate(5, ProductDetailComponent_Conditional_2_Conditional_56_For_6_Template, 2, 3, "button", 63, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ui5-textarea", 64);
    \u0275\u0275listener("input", function ProductDetailComponent_Conditional_2_Conditional_56_Template_ui5_textarea_input_7_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.newReviewComment.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 65);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_2_Conditional_56_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitReview());
    });
    \u0275\u0275template(9, ProductDetailComponent_Conditional_2_Conditional_56_Conditional_9_Template, 1, 0, "ui5-busy-indicator", 26)(10, ProductDetailComponent_Conditional_2_Conditional_56_Conditional_10_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.reviewSubmitted() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.reviewSubmitError() ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(5, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.newReviewComment());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.newReviewRating() === 0 || ctx_r1.submittingReview());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.submittingReview() ? 9 : 10);
  }
}
function ProductDetailComponent_Conditional_2_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 43)(1, "a", 68);
    \u0275\u0275text(2, "Log in");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " to write a review for this product. ");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_2_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-loader", 4);
  }
  if (rf & 2) {
    \u0275\u0275property("count", 3);
  }
}
function ProductDetailComponent_Conditional_2_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275text(1, "No reviews yet \u2014 be the first to share your experience.");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_2_Conditional_60_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 70)(1, "div", 72)(2, "span", 73);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "app-star-rating", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 75);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 76);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const review_r13 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r13.user_name);
    \u0275\u0275advance();
    \u0275\u0275property("rating", review_r13.rating);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r13.comment);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 4, review_r13.created_at, "mediumDate"));
  }
}
function ProductDetailComponent_Conditional_2_Conditional_60_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_2_Conditional_60_Conditional_3_For_2_Template_button_click_0_listener() {
      const n_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.loadReviewsPage(n_r15));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("is-active", n_r15 === ctx_r1.reviews().meta.current_page);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", n_r15, " ");
  }
}
function ProductDetailComponent_Conditional_2_Conditional_60_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 71);
    \u0275\u0275repeaterCreate(1, ProductDetailComponent_Conditional_2_Conditional_60_Conditional_3_For_2_Template, 2, 3, "button", 77, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.reviewPageNumbers());
  }
}
function ProductDetailComponent_Conditional_2_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 69);
    \u0275\u0275repeaterCreate(1, ProductDetailComponent_Conditional_2_Conditional_60_For_2_Template, 10, 7, "li", 70, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ProductDetailComponent_Conditional_2_Conditional_60_Conditional_3_Template, 3, 0, "nav", 71);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.reviews().data);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.reviews().meta.last_page > 1 ? 3 : -1);
  }
}
function ProductDetailComponent_Conditional_2_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 45)(1, "h2");
    \u0275\u0275text(2, "You might also like");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-skeleton-loader", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("count", 4);
  }
}
function ProductDetailComponent_Conditional_2_Conditional_62_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275element(1, "app-product-card", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("product", item_r16);
  }
}
function ProductDetailComponent_Conditional_2_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 45)(1, "h2");
    \u0275\u0275text(2, "You might also like");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 80);
    \u0275\u0275repeaterCreate(4, ProductDetailComponent_Conditional_2_Conditional_62_For_5_Template, 2, 1, "div", 81, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.similarProducts());
  }
}
function ProductDetailComponent_Conditional_2_Conditional_63_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 89);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_2_Conditional_63_Conditional_3_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.lightboxPrev());
    });
    \u0275\u0275element(1, "ui5-icon", 90);
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_2_Conditional_63_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_2_Conditional_63_Conditional_5_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.lightboxNext());
    });
    \u0275\u0275element(1, "ui5-icon", 92);
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_2_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_2_Conditional_63_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeLightbox());
    });
    \u0275\u0275elementStart(1, "button", 84);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_2_Conditional_63_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeLightbox());
    });
    \u0275\u0275element(2, "ui5-icon", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ProductDetailComponent_Conditional_2_Conditional_63_Conditional_3_Template, 2, 0, "button", 86);
    \u0275\u0275elementStart(4, "img", 87);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_2_Conditional_63_Template_img_click_4_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ProductDetailComponent_Conditional_2_Conditional_63_Conditional_5_Template, 2, 0, "button", 88);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.product().images.length > 1 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("src", (tmp_3_0 = ctx_r1.product().images[ctx_r1.selectedImageIndex()]) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : ctx_r1.product().thumbnail, \u0275\u0275sanitizeUrl)("alt", ctx_r1.product().name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.product().images.length > 1 ? 5 : -1);
  }
}
function ProductDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 6)(2, "div", 7)(3, "div", 8);
    \u0275\u0275listener("mouseenter", function ProductDetailComponent_Conditional_2_Template_div_mouseenter_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.zoomActive.set(true));
    })("mouseleave", function ProductDetailComponent_Conditional_2_Template_div_mouseleave_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.zoomActive.set(false));
    })("mousemove", function ProductDetailComponent_Conditional_2_Template_div_mousemove_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onGalleryMouseMove($event));
    })("click", function ProductDetailComponent_Conditional_2_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openLightbox());
    });
    \u0275\u0275element(4, "img", 9)(5, "div", 10);
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275element(7, "ui5-icon", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ProductDetailComponent_Conditional_2_Conditional_8_Template, 3, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14)(10, "span", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h1");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "app-star-rating", 16)(15, "app-price-tag", 17);
    \u0275\u0275elementStart(16, "p", 18);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 19);
    \u0275\u0275template(19, ProductDetailComponent_Conditional_2_Conditional_19_Template, 3, 1)(20, ProductDetailComponent_Conditional_2_Conditional_20_Template, 3, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 20)(22, "div", 21)(23, "button", 22);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_2_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.decrementQuantity());
    });
    \u0275\u0275text(24, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 23);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 24);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_2_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.incrementQuantity());
    });
    \u0275\u0275text(28, " + ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 25);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_2_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addToCart());
    });
    \u0275\u0275template(30, ProductDetailComponent_Conditional_2_Conditional_30_Template, 1, 0, "ui5-busy-indicator", 26)(31, ProductDetailComponent_Conditional_2_Conditional_31_Template, 1, 0)(32, ProductDetailComponent_Conditional_2_Conditional_32_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, ProductDetailComponent_Conditional_2_Conditional_33_Template, 10, 2, "div", 27);
    \u0275\u0275elementStart(34, "div", 28)(35, "button", 29);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_2_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleWishlist());
    });
    \u0275\u0275element(36, "ui5-icon", 30);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 31);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_2_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCompare());
    });
    \u0275\u0275element(39, "ui5-icon", 32);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(41, ProductDetailComponent_Conditional_2_Conditional_41_Template, 9, 1, "table", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "section", 34)(43, "h2");
    \u0275\u0275text(44, "Ratings & reviews");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 35)(46, "div", 36)(47, "span", 37);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "app-star-rating", 38);
    \u0275\u0275elementStart(50, "span", 39);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 40);
    \u0275\u0275repeaterCreate(53, ProductDetailComponent_Conditional_2_For_54_Template, 7, 5, "div", 41, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 42);
    \u0275\u0275template(56, ProductDetailComponent_Conditional_2_Conditional_56_Template, 11, 6)(57, ProductDetailComponent_Conditional_2_Conditional_57_Template, 4, 0, "p", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, ProductDetailComponent_Conditional_2_Conditional_58_Template, 1, 1, "app-skeleton-loader", 4)(59, ProductDetailComponent_Conditional_2_Conditional_59_Template, 2, 0, "p", 44)(60, ProductDetailComponent_Conditional_2_Conditional_60_Template, 4, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(61, ProductDetailComponent_Conditional_2_Conditional_61_Template, 4, 1, "section", 45)(62, ProductDetailComponent_Conditional_2_Conditional_62_Template, 6, 0, "section", 45)(63, ProductDetailComponent_Conditional_2_Conditional_63_Template, 6, 4, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", (tmp_1_0 = ctx_r1.product().images[ctx_r1.selectedImageIndex()]) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : ctx_r1.product().thumbnail, \u0275\u0275sanitizeUrl)("alt", ctx_r1.product().name);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + ((tmp_3_0 = ctx_r1.product().images[ctx_r1.selectedImageIndex()]) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : ctx_r1.product().thumbnail) + ")")("background-position", ctx_r1.zoomPosition().x + "% " + ctx_r1.zoomPosition().y + "%");
    \u0275\u0275classProp("is-active", ctx_r1.zoomActive());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.product().images.length > 1 ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.product().brand);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.product().name);
    \u0275\u0275advance();
    \u0275\u0275property("rating", ctx_r1.product().rating_avg)("count", ctx_r1.product().rating_count);
    \u0275\u0275advance();
    \u0275\u0275property("price", ctx_r1.product().price)("compareAtPrice", ctx_r1.product().compare_at_price)("currency", ctx_r1.product().currency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.product().description);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.product().stock > 0 ? 19 : 20);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.quantity() <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.quantity());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.quantity() >= ctx_r1.product().stock);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-success", ctx_r1.justAddedToCart());
    \u0275\u0275property("disabled", ctx_r1.product().stock === 0 || ctx_r1.isAddingToCart());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isAddingToCart() ? 30 : ctx_r1.justAddedToCart() ? 31 : 32);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.goesWellWith().length ? 33 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-active", ctx_r1.isWishlisted());
    \u0275\u0275advance();
    \u0275\u0275property("name", ctx_r1.isWishlisted() ? "favorite" : "add-favorite");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isWishlisted() ? "Saved to wishlist" : "Add to wishlist", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("is-active", ctx_r1.isComparing());
    \u0275\u0275property("disabled", !ctx_r1.canAddToCompare());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isComparing() ? "Added to compare" : "Add to compare", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.attributeEntries().length ? 41 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.product().reviews_summary.avg.toFixed(1));
    \u0275\u0275advance();
    \u0275\u0275property("rating", ctx_r1.product().reviews_summary.avg);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.product().reviews_summary.count, " reviews");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.ratingBars());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.authService.isAuthenticated() ? 56 : 57);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.reviewsLoading() ? 58 : ctx_r1.reviews() && ctx_r1.reviews().data.length === 0 ? 59 : ctx_r1.reviews() ? 60 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.similarLoading() ? 61 : ctx_r1.similarProducts().length ? 62 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.lightboxOpen() ? 63 : -1);
  }
}
var REVIEWS_PER_PAGE_LABEL = 1;
var ProductDetailComponent = class _ProductDetailComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.productService = inject(ProductService);
    this.recommendationService = inject(RecommendationService);
    this.cartService = inject(CartService);
    this.wishlistService = inject(WishlistService);
    this.compareService = inject(CompareService);
    this.authService = inject(AuthService);
    this.product = signal(null);
    this.loading = signal(true);
    this.notFound = signal(false);
    this.selectedImageIndex = signal(0);
    this.quantity = signal(1);
    this.isAddingToCart = signal(false);
    this.justAddedToCart = signal(false);
    this.reviews = signal(null);
    this.reviewsLoading = signal(true);
    this.similarProducts = signal([]);
    this.similarLoading = signal(true);
    this.newReviewRating = signal(0);
    this.newReviewComment = signal("");
    this.submittingReview = signal(false);
    this.reviewSubmitError = signal(null);
    this.reviewSubmitted = signal(false);
    this.zoomActive = signal(false);
    this.zoomPosition = signal({ x: 50, y: 50 });
    this.lightboxOpen = signal(false);
    this.goesWellWith = computed(() => this.similarProducts().slice(0, 3));
    this.addingAllGoesWellWith = signal(false);
    this.isWishlisted = computed(() => {
      const p = this.product();
      return p ? this.wishlistService.isWishlisted(p.id) : false;
    });
    this.isComparing = computed(() => {
      const p = this.product();
      return p ? this.compareService.isSelected(p.id) : false;
    });
    this.canAddToCompare = computed(() => this.isComparing() || this.compareService.canAddMore());
    this.reviewPageNumbers = computed(() => {
      const meta = this.reviews()?.meta;
      if (!meta)
        return [];
      return Array.from({ length: meta.last_page }, (_, i) => i + 1);
    });
    this.ratingBars = computed(() => {
      const summary = this.product()?.reviews_summary;
      if (!summary)
        return [];
      const total = summary.count || 1;
      return [5, 4, 3, 2, 1].map((stars) => {
        const count = summary.breakdown[String(stars)] ?? 0;
        return { stars, count, percent: Math.round(count / total * 100) };
      });
    });
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const slug = params.get("slug");
      if (slug)
        this.loadProduct(slug);
    });
  }
  loadProduct(slug) {
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
      }
    });
  }
  loadReviews(productId, page = 1) {
    this.reviewsLoading.set(true);
    this.productService.getReviews(productId, page).subscribe({
      next: (res) => {
        this.reviews.set(res);
        this.reviewsLoading.set(false);
      },
      error: () => {
        this.reviews.set({ data: [], meta: { current_page: 1, last_page: 1, per_page: REVIEWS_PER_PAGE_LABEL, total: 0 } });
        this.reviewsLoading.set(false);
      }
    });
  }
  loadSimilar(productId) {
    this.similarLoading.set(true);
    this.recommendationService.similar(productId).subscribe((products) => {
      this.similarProducts.set(products);
      this.similarLoading.set(false);
    });
  }
  selectImage(index) {
    this.selectedImageIndex.set(index);
  }
  incrementQuantity() {
    const stock = this.product()?.stock ?? 1;
    this.quantity.set(Math.min(this.quantity() + 1, Math.max(stock, 1)));
  }
  decrementQuantity() {
    this.quantity.set(Math.max(1, this.quantity() - 1));
  }
  addToCart() {
    const product = this.product();
    if (!product || this.isAddingToCart())
      return;
    this.isAddingToCart.set(true);
    this.cartService.addItem(product.id, this.quantity()).subscribe({
      next: () => {
        this.isAddingToCart.set(false);
        this.justAddedToCart.set(true);
        setTimeout(() => this.justAddedToCart.set(false), 1600);
      },
      error: () => this.isAddingToCart.set(false)
    });
  }
  toggleWishlist() {
    const product = this.product();
    if (!product)
      return;
    this.wishlistService.toggle(product.id).subscribe();
  }
  toggleCompare() {
    const product = this.product();
    if (!product)
      return;
    this.compareService.toggle(product.id);
  }
  setReviewRating(stars) {
    this.newReviewRating.set(stars);
  }
  submitReview() {
    const product = this.product();
    if (!product || this.newReviewRating() === 0 || this.submittingReview())
      return;
    this.submittingReview.set(true);
    this.reviewSubmitError.set(null);
    this.productService.submitReview(product.id, this.newReviewRating(), this.newReviewComment()).subscribe({
      next: () => {
        this.submittingReview.set(false);
        this.reviewSubmitted.set(true);
        this.newReviewRating.set(0);
        this.newReviewComment.set("");
        this.loadReviews(product.id);
        setTimeout(() => this.reviewSubmitted.set(false), 3e3);
      },
      error: () => {
        this.submittingReview.set(false);
        this.reviewSubmitError.set("We couldn't submit your review. Please try again.");
      }
    });
  }
  loadReviewsPage(page) {
    const product = this.product();
    if (!product)
      return;
    this.loadReviews(product.id, page);
  }
  attributeEntries() {
    const attributes = this.product()?.attributes ?? {};
    return Object.entries(attributes);
  }
  onGalleryMouseMove(event) {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width * 100;
    const y = (event.clientY - rect.top) / rect.height * 100;
    this.zoomPosition.set({ x, y });
  }
  openLightbox() {
    this.lightboxOpen.set(true);
  }
  closeLightbox() {
    this.lightboxOpen.set(false);
  }
  lightboxNext() {
    const product = this.product();
    if (!product)
      return;
    this.selectedImageIndex.set((this.selectedImageIndex() + 1) % product.images.length);
  }
  lightboxPrev() {
    const product = this.product();
    if (!product)
      return;
    const count = product.images.length;
    this.selectedImageIndex.set((this.selectedImageIndex() - 1 + count) % count);
  }
  onKeydown(event) {
    if (!this.lightboxOpen())
      return;
    if (event.key === "Escape")
      this.closeLightbox();
    else if (event.key === "ArrowRight")
      this.lightboxNext();
    else if (event.key === "ArrowLeft")
      this.lightboxPrev();
  }
  addAllGoesWellWith() {
    const items = this.goesWellWith();
    if (!items.length || this.addingAllGoesWellWith())
      return;
    this.addingAllGoesWellWith.set(true);
    let remaining = items.length;
    const done = () => {
      remaining -= 1;
      if (remaining === 0)
        this.addingAllGoesWellWith.set(false);
    };
    for (const item of items) {
      this.cartService.addItem(item.id, 1).subscribe({ next: done, error: done });
    }
  }
  static {
    this.\u0275fac = function ProductDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["app-product-detail"]], hostBindings: function ProductDetailComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function ProductDetailComponent_keydown_HostBindingHandler($event) {
          return ctx.onKeydown($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "page-container", "pd-skeleton"], [1, "page-container"], [1, "page-container", "pd"], ["variant", "image"], ["variant", "line", 3, "count"], ["icon", "alert", "title", "We couldn't find that product", "message", "It may have sold out for good or moved. Take a look at everything else we carry.", "actionLabel", "Continue shopping", "actionRoute", "/"], [1, "pd__top"], [1, "pd__gallery"], [1, "pd__gallery-main", 3, "mouseenter", "mouseleave", "mousemove", "click"], [3, "src", "alt"], [1, "pd__gallery-zoom"], [1, "pd__gallery-zoom-hint"], ["name", "zoom-in"], [1, "pd__gallery-thumbs"], [1, "pd__info"], [1, "eyebrow"], ["size", "md", 3, "rating", "count"], ["size", "lg", 3, "price", "compareAtPrice", "currency"], [1, "pd__description"], [1, "pd__stock"], [1, "pd__purchase-row"], [1, "pd__stepper"], ["type", "button", "aria-label", "Decrease quantity", 3, "click", "disabled"], [1, "pd__stepper-value"], ["type", "button", "aria-label", "Increase quantity", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn--primary", "pd__add-to-cart", 3, "click", "disabled"], ["active", "", "size", "S"], [1, "pd__goes-well"], [1, "pd__secondary-actions"], ["type", "button", 1, "pd__toggle-btn", 3, "click"], [3, "name"], ["type", "button", 1, "pd__toggle-btn", 3, "click", "disabled"], ["name", "compare"], [1, "pd__attributes"], [1, "pd__reviews"], [1, "pd__reviews-summary"], [1, "pd__reviews-average"], [1, "pd__reviews-average-number"], ["size", "md", 3, "rating"], [1, "pd__reviews-count"], [1, "pd__reviews-breakdown"], [1, "pd__reviews-bar-row", 3, "appScrollReveal"], [1, "pd__review-form"], [1, "pd__review-login-prompt"], [1, "pd__no-reviews"], [1, "pd__similar"], [1, "pd__lightbox"], ["type", "button", 1, "pd__gallery-thumb", 3, "is-active"], ["type", "button", 1, "pd__gallery-thumb", 3, "click"], ["name", "sys-enter-2", 1, "pd__stock-icon", "pd__stock-icon--in"], ["name", "sys-cancel-2", 1, "pd__stock-icon", "pd__stock-icon--out"], [1, "pd__goes-well-header"], ["type", "button", 1, "pd__goes-well-add-all", 3, "click", "disabled"], [1, "pd__goes-well-list"], [1, "pd__goes-well-item", 3, "routerLink"], [1, "pd__goes-well-name"], ["size", "sm", 3, "price", "currency"], [1, "pd__reviews-bar-track"], [1, "pd__reviews-bar-fill"], [1, "pd__reviews-bar-count"], ["design", "Positive", 1, "pd__review-message"], ["design", "Negative", 1, "pd__review-message"], [1, "pd__review-stars"], ["type", "button"], ["placeholder", "Share what you thought \u2014 fit, quality, how it's held up\u2026", "rows", "3", 1, "pd__review-textarea", 3, "input", "value"], ["type", "button", 1, "btn", "btn--primary", 3, "click", "disabled"], ["type", "button", 3, "click"], ["name", "favorite", 1, "pd__review-star"], ["routerLink", "/login"], [1, "pd__review-list"], [1, "pd__review"], [1, "pagination"], [1, "pd__review-header"], [1, "pd__review-author"], ["size", "sm", 3, "rating"], [1, "pd__review-comment"], [1, "pd__review-date"], ["type", "button", 1, "pagination__page", 3, "is-active"], ["type", "button", 1, "pagination__page", 3, "click"], ["variant", "card", 3, "count"], [1, "product-rail"], [1, "product-rail__item"], [3, "product"], [1, "pd__lightbox", 3, "click"], ["type", "button", "aria-label", "Close", 1, "pd__lightbox-close", 3, "click"], ["name", "decline"], ["type", "button", "aria-label", "Previous image", 1, "pd__lightbox-nav", "pd__lightbox-nav--prev"], [1, "pd__lightbox-image", 3, "click", "src", "alt"], ["type", "button", "aria-label", "Next image", 1, "pd__lightbox-nav", "pd__lightbox-nav--next"], ["type", "button", "aria-label", "Previous image", 1, "pd__lightbox-nav", "pd__lightbox-nav--prev", 3, "click"], ["name", "slim-arrow-left"], ["type", "button", "aria-label", "Next image", 1, "pd__lightbox-nav", "pd__lightbox-nav--next", 3, "click"], ["name", "slim-arrow-right"]], template: function ProductDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProductDetailComponent_Conditional_0_Template, 3, 1, "div", 0)(1, ProductDetailComponent_Conditional_1_Template, 2, 0, "div", 1)(2, ProductDetailComponent_Conditional_2_Template, 64, 42, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.loading() ? 0 : ctx.notFound() || !ctx.product() ? 1 : 2);
      }
    }, dependencies: [
      CommonModule,
      DatePipe,
      RouterLink,
      PriceTagComponent,
      StarRatingComponent,
      ProductCardComponent,
      SkeletonLoaderComponent,
      EmptyStateComponent,
      ScrollRevealDirective
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: 2.5rem 0 5rem;\n}\n.pd-skeleton[_ngcontent-%COMP%] {\n  padding: 2.5rem 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2.5rem;\n}\n.pd__top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3rem;\n  margin-bottom: 4rem;\n}\n.pd__gallery-main[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 1/1;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  background: var(--color-beige);\n}\n.pd__gallery-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@media (hover: hover) and (pointer: fine) {\n  .pd__gallery-main[_ngcontent-%COMP%] {\n    cursor: zoom-in;\n  }\n}\n.pd__gallery-zoom[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (hover: hover) and (pointer: fine) {\n  .pd__gallery-zoom[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    inset: 0;\n    background-size: 200%;\n    background-repeat: no-repeat;\n    opacity: 0;\n    transition: opacity 0.2s var(--ease-quiet);\n    pointer-events: none;\n  }\n  .pd__gallery-zoom.is-active[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n}\n.pd__gallery-zoom-hint[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (hover: hover) and (pointer: fine) {\n  .pd__gallery-zoom-hint[_ngcontent-%COMP%] {\n    display: inline-flex;\n    position: absolute;\n    bottom: 0.75rem;\n    right: 0.75rem;\n    width: 2.1rem;\n    height: 2.1rem;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    background: rgba(250, 247, 242, 0.9);\n    color: var(--color-charcoal-soft);\n  }\n  .pd__gallery-zoom-hint[_ngcontent-%COMP%]   ui5-icon[_ngcontent-%COMP%] {\n    width: 1.05rem;\n    height: 1.05rem;\n  }\n}\n.pd__gallery-thumbs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.9rem;\n}\n.pd__gallery-thumb[_ngcontent-%COMP%] {\n  width: 4.25rem;\n  height: 4.25rem;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 2px solid transparent;\n  padding: 0;\n  cursor: pointer;\n  background: var(--color-beige);\n  transition: transform 0.2s var(--ease-quiet), border-color 0.2s var(--ease-quiet);\n}\n.pd__gallery-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.pd__gallery-thumb[_ngcontent-%COMP%]:hover:not(.is-active) {\n  transform: scale(1.05);\n}\n.pd__gallery-thumb.is-active[_ngcontent-%COMP%] {\n  border-color: var(--color-sage);\n}\n.pd__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.9rem;\n}\n.pd__description[_ngcontent-%COMP%] {\n  color: var(--color-charcoal-soft);\n  line-height: 1.6;\n}\n.pd__stock[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n  color: var(--color-charcoal-soft);\n}\n.pd__stock-icon[_ngcontent-%COMP%] {\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.pd__stock-icon--in[_ngcontent-%COMP%] {\n  color: var(--color-sage-deep);\n}\n.pd__stock-icon--out[_ngcontent-%COMP%] {\n  color: #B4534A;\n}\n.pd__purchase-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 0.5rem;\n}\n.pd__stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n}\n.pd__stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 2.4rem;\n  height: 2.6rem;\n  border: none;\n  background: transparent;\n  font-size: 1.1rem;\n  color: var(--color-charcoal);\n  cursor: pointer;\n}\n.pd__stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.pd__stepper-value[_ngcontent-%COMP%] {\n  min-width: 2rem;\n  text-align: center;\n  font-weight: 600;\n}\n.pd__add-to-cart[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 2.6rem;\n}\n.pd__add-to-cart.is-success[_ngcontent-%COMP%] {\n  background: var(--color-sage-deep);\n}\n.pd__goes-well[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  padding: 1rem 1.1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.pd__goes-well-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--color-charcoal);\n}\n.pd__goes-well-add-all[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: var(--color-sage-deep);\n  font-weight: 600;\n  font-size: 0.82rem;\n  cursor: pointer;\n  min-height: 1.4rem;\n}\n.pd__goes-well-add-all[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.pd__goes-well-list[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  overflow-x: auto;\n}\n.pd__goes-well-item[_ngcontent-%COMP%] {\n  flex: 0 0 6.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  text-decoration: none;\n  color: inherit;\n}\n.pd__goes-well-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 6.5rem;\n  height: 6.5rem;\n  object-fit: cover;\n  border-radius: var(--radius-sm);\n  background: var(--color-beige);\n  transition: transform 0.25s var(--ease-quiet);\n}\n.pd__goes-well-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.pd__goes-well-name[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--color-charcoal-soft);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.pd__secondary-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.pd__toggle-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  border: 1px solid var(--color-border);\n  background: transparent;\n  color: var(--color-charcoal-soft);\n  padding: 0.55rem 0.9rem;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  font-size: 0.85rem;\n}\n.pd__toggle-btn[_ngcontent-%COMP%]   ui5-icon[_ngcontent-%COMP%] {\n  width: 1.05rem;\n  height: 1.05rem;\n}\n.pd__toggle-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--color-sage);\n}\n.pd__toggle-btn.is-active[_ngcontent-%COMP%] {\n  color: var(--color-sage-deep);\n  border-color: var(--color-sage);\n  background: var(--color-sage-pale);\n}\n.pd__toggle-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.pd__attributes[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  border-collapse: collapse;\n  width: 100%;\n}\n.pd__attributes[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.pd__attributes[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 0.6rem 0;\n  border-bottom: 1px solid var(--color-border);\n  font-size: 0.88rem;\n}\n.pd__attributes[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--color-charcoal-soft);\n  font-weight: 500;\n  width: 40%;\n  text-transform: capitalize;\n}\n.pd__attributes[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--color-charcoal);\n}\n.pd__reviews[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-border);\n  padding-top: 3rem;\n  margin-bottom: 4rem;\n}\n.pd__reviews-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 12rem 1fr;\n  gap: 2.5rem;\n  margin: 1.5rem 0 2.5rem;\n}\n.pd__reviews-average[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.4rem;\n}\n.pd__reviews-average-number[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 2.5rem;\n  color: var(--color-charcoal);\n}\n.pd__reviews-count[_ngcontent-%COMP%] {\n  color: var(--color-charcoal-soft);\n  font-size: 0.85rem;\n}\n.pd__reviews-breakdown[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  justify-content: center;\n}\n.pd__reviews-bar-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2rem 1fr 2.5rem;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 0.8rem;\n  color: var(--color-charcoal-soft);\n}\n.pd__reviews-bar-track[_ngcontent-%COMP%] {\n  height: 0.4rem;\n  background: var(--color-beige);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.pd__reviews-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--color-gold);\n}\n.pd__review-form[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  padding: 1.5rem;\n  margin-bottom: 2.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.9rem;\n  max-width: 34rem;\n}\n.pd__review-message[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.pd__review-stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.3rem;\n}\n.pd__review-stars[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 0.2rem;\n}\n.pd__review-star[_ngcontent-%COMP%] {\n  width: 1.4rem;\n  height: 1.4rem;\n  color: var(--color-border);\n}\n.pd__review-star.is-filled[_ngcontent-%COMP%] {\n  color: var(--color-gold);\n}\n.pd__review-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.pd__review-login-prompt[_ngcontent-%COMP%] {\n  color: var(--color-charcoal-soft);\n}\n.pd__review-login-prompt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-sage-deep);\n  font-weight: 600;\n}\n.pd__no-reviews[_ngcontent-%COMP%] {\n  color: var(--color-charcoal-soft);\n}\n.pd__review-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.pd__review[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-border);\n  padding-bottom: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.pd__review-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n}\n.pd__review-author[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-charcoal);\n}\n.pd__review-comment[_ngcontent-%COMP%] {\n  color: var(--color-charcoal-soft);\n  line-height: 1.55;\n}\n.pd__review-date[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--color-charcoal-soft);\n  opacity: 0.75;\n}\n.pd__similar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.product-rail[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.25rem;\n  overflow-x: auto;\n  padding-bottom: 0.5rem;\n  scroll-snap-type: x mandatory;\n}\n.product-rail__item[_ngcontent-%COMP%] {\n  flex: 0 0 15rem;\n  scroll-snap-align: start;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.8rem 1.6rem;\n  border-radius: var(--radius-sm);\n  font-weight: 600;\n  font-size: 0.9rem;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    color 0.2s ease,\n    transform 0.2s ease;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: var(--color-sage);\n  color: var(--color-cream);\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-sage-deep);\n}\n.btn--primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 0.4rem;\n  margin-top: 2rem;\n  flex-wrap: wrap;\n}\n.pagination__page[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border);\n  background: transparent;\n  color: var(--color-charcoal-soft);\n  padding: 0.5rem 0.85rem;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  font-size: 0.85rem;\n}\n.pagination__page[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-sage);\n}\n.pagination__page.is-active[_ngcontent-%COMP%] {\n  background: var(--color-sage);\n  border-color: var(--color-sage);\n  color: var(--color-cream);\n}\n.pd__lightbox[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 100;\n  background: rgba(47, 46, 43, 0.92);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: fade-in 0.2s var(--ease-quiet);\n}\n.pd__lightbox-image[_ngcontent-%COMP%] {\n  max-width: min(90vw, 60rem);\n  max-height: 85vh;\n  object-fit: contain;\n  border-radius: var(--radius-md);\n}\n.pd__lightbox-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.5rem;\n  right: 1.5rem;\n  width: 2.6rem;\n  height: 2.6rem;\n  border: none;\n  border-radius: 50%;\n  background: rgba(250, 247, 242, 0.15);\n  color: var(--color-cream);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.pd__lightbox-close[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 247, 242, 0.28);\n}\n.pd__lightbox-close[_ngcontent-%COMP%]   ui5-icon[_ngcontent-%COMP%] {\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.pd__lightbox-nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3rem;\n  height: 3rem;\n  border: none;\n  border-radius: 50%;\n  background: rgba(250, 247, 242, 0.15);\n  color: var(--color-cream);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.pd__lightbox-nav[_ngcontent-%COMP%]:hover {\n  background: rgba(250, 247, 242, 0.28);\n}\n.pd__lightbox-nav--prev[_ngcontent-%COMP%] {\n  left: 1.5rem;\n}\n.pd__lightbox-nav--next[_ngcontent-%COMP%] {\n  right: 1.5rem;\n}\n.pd__lightbox-nav[_ngcontent-%COMP%]   ui5-icon[_ngcontent-%COMP%] {\n  width: 1.3rem;\n  height: 1.3rem;\n}\n@media (max-width: 900px) {\n  .pd__top[_ngcontent-%COMP%], \n   .pd-skeleton[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pd__reviews-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=product-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent", filePath: "src/app/features/product-detail/product-detail.component.ts", lineNumber: 39 });
})();
export {
  ProductDetailComponent
};
//# sourceMappingURL=product-detail.component-AR2EC33R.js.map
