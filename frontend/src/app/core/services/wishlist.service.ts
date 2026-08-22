import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, map, switchMap, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { WishlistItem } from '../models/cart.model';
import { ApiResource } from '../models/common.model';

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/wishlist`;

  private readonly itemsSignal = signal<WishlistItem[]>([]);

  readonly items = this.itemsSignal.asReadonly();
  readonly count = computed(() => this.itemsSignal().length);
  readonly productIds = computed(() => new Set(this.itemsSignal().map((item) => item.product.id)));

  constructor() {
    this.refresh().subscribe();
  }

  /** GET /wishlist has a well-defined WishlistItem[] shape; the merge/mutation
   *  endpoints don't, so every mutation re-fetches this afterwards to stay
   *  in sync rather than guessing at their response bodies. */
  refresh(): Observable<WishlistItem[]> {
    return this.http.get<ApiResource<WishlistItem[]> | WishlistItem[]>(this.base).pipe(
      map((res) => (Array.isArray(res) ? res : res.data)),
      tap((items) => this.itemsSignal.set(items)),
    );
  }

  isWishlisted(productId: number): boolean {
    return this.productIds().has(productId);
  }

  add(productId: number): Observable<WishlistItem[]> {
    return this.http
      .post(this.base, { product_id: productId })
      .pipe(switchMap(() => this.refresh()));
  }

  remove(productId: number): Observable<WishlistItem[]> {
    return this.http.delete(`${this.base}/${productId}`).pipe(switchMap(() => this.refresh()));
  }

  toggle(productId: number): Observable<WishlistItem[]> {
    return this.isWishlisted(productId) ? this.remove(productId) : this.add(productId);
  }

  /** Folds the current (guest) wishlist into the just-authenticated user's account. */
  mergeGuestWishlist(): Observable<WishlistItem[]> {
    const productIds = this.itemsSignal().map((item) => item.product.id);
    return this.http
      .post(`${this.base}/merge`, { product_ids: productIds })
      .pipe(switchMap(() => this.refresh()));
  }
}
