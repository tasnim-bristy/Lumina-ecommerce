/** Shared API envelope shapes used across every endpoint. */

export interface PageMeta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

export interface Paginated<T> {
  data: T[];
  meta: PageMeta;
}

export interface ApiResource<T> {
  data: T;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
}

export type SortOption = 'price_asc' | 'price_desc' | 'newest' | 'rating' | 'popularity';

export interface BrandFacet {
  name: string;
  count: number;
}
