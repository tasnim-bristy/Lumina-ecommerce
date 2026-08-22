export interface ProductCategoryRef {
  id: number;
  name: string;
  slug: string;
}

/** Shape returned in list/collection contexts: /products, recommendations, search, cart, wishlist. */
export interface ProductSummary {
  id: number;
  name: string;
  slug: string;
  brand: string;
  category: ProductCategoryRef;
  price: number;
  compare_at_price: number | null;
  currency: string;
  rating_avg: number;
  rating_count: number;
  stock: number;
  is_featured: boolean;
  thumbnail: string;
  attributes: Record<string, string>;
  created_at: string;
}

export interface ReviewsSummary {
  avg: number;
  count: number;
  breakdown: Record<string, number>;
}

/** GET /products/{slug} — list shape plus detail fields. */
export interface ProductDetail extends ProductSummary {
  description: string;
  images: string[];
  sku: string;
  reviews_summary: ReviewsSummary;
}

export interface Review {
  id: number;
  user_name: string;
  rating: number;
  comment: string;
  created_at: string;
}

export interface ProductQueryParams {
  q?: string;
  category?: string;
  min_price?: number;
  max_price?: number;
  brands?: string[];
  rating_min?: number;
  sort?: import('./common.model').SortOption;
  page?: number;
  per_page?: number;
}

export interface CompareResult {
  products: ProductDetail[];
  attribute_keys: string[];
}

export interface SearchSuggestionProduct {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  price: number;
}

export interface SearchSuggestionCategory {
  id: number;
  name: string;
  slug: string;
}

export interface SearchSuggestions {
  products: SearchSuggestionProduct[];
  categories: SearchSuggestionCategory[];
}
