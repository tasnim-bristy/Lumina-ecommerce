import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResource, BrandFacet, Paginated } from '../models/common.model';
import { ProductDetail, ProductQueryParams, ProductSummary, Review } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/products`;

  list(query: ProductQueryParams = {}): Observable<Paginated<ProductSummary>> {
    return this.http.get<Paginated<ProductSummary>>(this.base, { params: this.toParams(query) });
  }

  getBySlug(slug: string): Observable<ProductDetail> {
    return this.http
      .get<ApiResource<ProductDetail>>(`${this.base}/${slug}`)
      .pipe(map((res) => res.data));
  }

  getReviews(productId: number, page = 1): Observable<Paginated<Review>> {
    return this.http.get<Paginated<Review>>(`${this.base}/${productId}/reviews`, {
      params: { page },
    });
  }

  submitReview(productId: number, rating: number, comment: string): Observable<Review> {
    return this.http
      .post<ApiResource<Review>>(`${this.base}/${productId}/reviews`, { rating, comment })
      .pipe(map((res) => res.data));
  }

  // Note: GET /products/compare is called from CompareService, which owns the
  // client-side compare selection end-to-end (see core/services/compare.service.ts).

  getBrands(categorySlug?: string): Observable<BrandFacet[]> {
    const params = categorySlug ? new HttpParams().set('category', categorySlug) : undefined;
    return this.http.get<BrandFacet[]>(`${environment.apiUrl}/brands`, { params });
  }

  private toParams(query: ProductQueryParams): HttpParams {
    let params = new HttpParams();
    if (query.q) params = params.set('q', query.q);
    if (query.category) params = params.set('category', query.category);
    if (query.min_price != null) params = params.set('min_price', query.min_price);
    if (query.max_price != null) params = params.set('max_price', query.max_price);
    if (query.rating_min != null) params = params.set('rating_min', query.rating_min);
    if (query.sort) params = params.set('sort', query.sort);
    if (query.page != null) params = params.set('page', query.page);
    if (query.per_page != null) params = params.set('per_page', query.per_page);
    for (const brand of query.brands ?? []) {
      params = params.append('brands[]', brand);
    }
    return params;
  }
}
