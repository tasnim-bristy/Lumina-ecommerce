import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, finalize, map, switchMap, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Cart } from '../models/cart.model';
import { ApiResource } from '../models/common.model';

const EMPTY_CART: Cart = { id: 0, items: [], subtotal: 0, item_count: 0 };

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/cart`;

  private readonly cartSignal = signal<Cart>(EMPTY_CART);
  private readonly loadingSignal = signal(false);

  /** Mirrored locally so header badges update instantly without waiting on a round trip. */
  readonly cart = this.cartSignal.asReadonly();
  readonly itemCount = computed(() => this.cartSignal().item_count);
  readonly subtotal = computed(() => this.cartSignal().subtotal);
  readonly loading = this.loadingSignal.asReadonly();

  constructor() {
    this.refresh().subscribe();
  }

  refresh(): Observable<Cart> {
    this.loadingSignal.set(true);
    return this.http.get<ApiResource<Cart>>(this.base).pipe(
      map((res) => res.data),
      tap((cart) => this.cartSignal.set(cart)),
      finalize(() => this.loadingSignal.set(false)),
    );
  }

  // The mutation endpoints (add/update/remove/merge) re-fetch the canonical
  // cart afterwards rather than trusting an assumed response body shape,
  // since the contract only documents the Cart resource returned by GET.
  addItem(productId: number, quantity = 1): Observable<Cart> {
    return this.http
      .post(`${this.base}/items`, { product_id: productId, quantity })
      .pipe(switchMap(() => this.refresh()));
  }

  updateQuantity(itemId: number, quantity: number): Observable<Cart> {
    return this.http
      .patch(`${this.base}/items/${itemId}`, { quantity })
      .pipe(switchMap(() => this.refresh()));
  }

  removeItem(itemId: number): Observable<Cart> {
    return this.http.delete(`${this.base}/items/${itemId}`).pipe(switchMap(() => this.refresh()));
  }

  /** Folds the current (guest) cart into the just-authenticated user's account. */
  mergeGuestCart(): Observable<Cart> {
    const items = this.cartSignal().items.map((item) => ({
      product_id: item.product.id,
      quantity: item.quantity,
    }));
    return this.http.post(`${this.base}/merge`, { items }).pipe(switchMap(() => this.refresh()));
  }
}
