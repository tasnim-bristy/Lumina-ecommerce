import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResource } from '../models/common.model';
import { ProductSummary } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class RecommendationService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/recommendations`;

  trending(): Observable<ProductSummary[]> {
    return this.fetchList(`${this.base}/trending`);
  }

  similar(productId: number): Observable<ProductSummary[]> {
    return this.fetchList(`${this.base}/similar/${productId}`);
  }

  /** Content-based on view/wishlist/cart/order history; empty for a brand-new
   *  guest, so callers should hide the section rather than show an empty rail. */
  forYou(): Observable<ProductSummary[]> {
    return this.fetchList(`${this.base}/for-you`);
  }

  /** Fire-and-forget: powers for-you + trending, never blocks the UI on failure. */
  trackView(productId: number): void {
    this.http.post(`${this.base}/track-view`, { product_id: productId }).pipe(catchError(() => of(null))).subscribe();
  }

  private fetchList(url: string): Observable<ProductSummary[]> {
    return this.http.get<ApiResource<ProductSummary[]> | ProductSummary[]>(url).pipe(
      map((res) => (Array.isArray(res) ? res : res.data)),
      catchError(() => of([])),
    );
  }
}
