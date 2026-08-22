import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResource } from '../models/common.model';
import { CheckoutPayload, Order } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private readonly http = inject(HttpClient);
  private readonly base = environment.apiUrl;

  checkout(payload: CheckoutPayload): Observable<Order> {
    return this.http
      .post<ApiResource<Order>>(`${this.base}/checkout`, payload)
      .pipe(map((res) => res.data));
  }

  list(): Observable<Order[]> {
    return this.http.get<ApiResource<Order[]> | Order[]>(`${this.base}/orders`).pipe(
      map((res) => (Array.isArray(res) ? res : res.data)),
    );
  }
}
