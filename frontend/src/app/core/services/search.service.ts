import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SearchSuggestions } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private readonly http = inject(HttpClient);

  suggest(q: string): Observable<SearchSuggestions> {
    return this.http.get<SearchSuggestions>(`${environment.apiUrl}/search/suggestions`, {
      params: { q },
    });
  }
}
