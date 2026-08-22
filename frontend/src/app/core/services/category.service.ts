import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResource } from '../models/common.model';
import { Category } from '../models/category.model';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/categories`;

  /** The nested category tree rarely changes within a session; share one in-flight/last request. */
  private readonly treeCache$ = this.http
    .get<ApiResource<Category[]> | Category[]>(this.base)
    .pipe(
      map((res) => (Array.isArray(res) ? res : res.data)),
      shareReplay({ bufferSize: 1, refCount: false }),
    );

  getTree(): Observable<Category[]> {
    return this.treeCache$;
  }
}
