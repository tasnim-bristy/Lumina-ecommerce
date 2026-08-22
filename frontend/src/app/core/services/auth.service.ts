import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { STORAGE_KEYS } from '../constants';
import { ApiResource } from '../models/common.model';
import { AuthResponse, User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly base = environment.apiUrl;

  private readonly currentUserSignal = signal<User | null>(null);
  private readonly readySignal = signal(false);

  /** The logged-in user, or null for a guest. */
  readonly currentUser = this.currentUserSignal.asReadonly();
  readonly isAuthenticated = computed(() => this.currentUserSignal() !== null);
  /** True once the initial session-restore check (if a token existed) has settled. */
  readonly ready = this.readySignal.asReadonly();

  constructor() {
    this.restoreSession();
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<ApiResource<AuthResponse>>(`${this.base}/login`, { email, password }).pipe(
      map((res) => res.data),
      tap((auth) => this.applySession(auth)),
    );
  }

  register(name: string, email: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<ApiResource<AuthResponse>>(`${this.base}/register`, { name, email, password })
      .pipe(
        map((res) => res.data),
        tap((auth) => this.applySession(auth)),
      );
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${this.base}/logout`, {}).pipe(
      map(() => void 0),
      tap(() => this.clearSession()),
      catchError(() => {
        // Even if the server call fails (expired token, offline, etc.) the
        // user's intent is to log out locally regardless.
        this.clearSession();
        return of(void 0);
      }),
    );
  }

  me(): Observable<User> {
    return this.http
      .get<ApiResource<User>>(`${this.base}/me`)
      .pipe(map((res) => res.data), tap((user) => this.currentUserSignal.set(user)));
  }

  private restoreSession(): void {
    const token = localStorage.getItem(STORAGE_KEYS.authToken);
    if (!token) {
      this.readySignal.set(true);
      return;
    }
    this.me().subscribe({
      next: () => this.readySignal.set(true),
      error: () => {
        this.clearSession();
        this.readySignal.set(true);
      },
    });
  }

  private applySession(auth: AuthResponse): void {
    localStorage.setItem(STORAGE_KEYS.authToken, auth.token);
    this.currentUserSignal.set(auth.user);
  }

  private clearSession(): void {
    localStorage.removeItem(STORAGE_KEYS.authToken);
    this.currentUserSignal.set(null);
  }
}
