import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { STORAGE_KEYS } from '../constants';
import { ApiResource } from '../models/common.model';
import { CompareResult } from '../models/product.model';

export const MAX_COMPARE_ITEMS = 4;
export const MIN_COMPARE_ITEMS = 2;

/**
 * Compare selection is entirely client-side (persisted to localStorage so it
 * survives navigation and reloads); only the final side-by-side lookup hits
 * the API.
 */
@Injectable({ providedIn: 'root' })
export class CompareService {
  private readonly http = inject(HttpClient);

  private readonly idsSignal = signal<number[]>(this.load());

  readonly ids = this.idsSignal.asReadonly();
  readonly count = computed(() => this.idsSignal().length);
  readonly canAddMore = computed(() => this.idsSignal().length < MAX_COMPARE_ITEMS);
  readonly canCompare = computed(() => this.idsSignal().length >= MIN_COMPARE_ITEMS);

  isSelected(productId: number): boolean {
    return this.idsSignal().includes(productId);
  }

  toggle(productId: number): void {
    const current = this.idsSignal();
    if (current.includes(productId)) {
      this.setIds(current.filter((id) => id !== productId));
      return;
    }
    if (current.length >= MAX_COMPARE_ITEMS) {
      return;
    }
    this.setIds([...current, productId]);
  }

  remove(productId: number): void {
    this.setIds(this.idsSignal().filter((id) => id !== productId));
  }

  clear(): void {
    this.setIds([]);
  }

  compare(): Observable<CompareResult> {
    const ids = this.idsSignal();
    return this.http
      .get<ApiResource<CompareResult>>(`${environment.apiUrl}/products/compare`, {
        params: { ids: ids.join(',') },
      })
      .pipe(map((res) => res.data));
  }

  private setIds(ids: number[]): void {
    this.idsSignal.set(ids);
    localStorage.setItem(STORAGE_KEYS.compareIds, JSON.stringify(ids));
  }

  private load(): number[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.compareIds);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed.filter((id) => typeof id === 'number') : [];
    } catch {
      return [];
    }
  }
}
