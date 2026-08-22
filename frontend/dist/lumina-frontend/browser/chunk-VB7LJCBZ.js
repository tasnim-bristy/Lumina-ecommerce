import {
  STORAGE_KEYS
} from "./chunk-3HG5S7OZ.js";
import {
  HttpClient,
  catchError,
  computed,
  environment,
  inject,
  map,
  of,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-HVBC7HBT.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = environment.apiUrl;
    this.currentUserSignal = signal(null);
    this.readySignal = signal(false);
    this.currentUser = this.currentUserSignal.asReadonly();
    this.isAuthenticated = computed(() => this.currentUserSignal() !== null);
    this.ready = this.readySignal.asReadonly();
    this.restoreSession();
  }
  login(email, password) {
    return this.http.post(`${this.base}/login`, { email, password }).pipe(map((res) => res.data), tap((auth) => this.applySession(auth)));
  }
  register(name, email, password) {
    return this.http.post(`${this.base}/register`, { name, email, password }).pipe(map((res) => res.data), tap((auth) => this.applySession(auth)));
  }
  logout() {
    return this.http.post(`${this.base}/logout`, {}).pipe(map(() => void 0), tap(() => this.clearSession()), catchError(() => {
      this.clearSession();
      return of(void 0);
    }));
  }
  me() {
    return this.http.get(`${this.base}/me`).pipe(map((res) => res.data), tap((user) => this.currentUserSignal.set(user)));
  }
  restoreSession() {
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
      }
    });
  }
  applySession(auth) {
    localStorage.setItem(STORAGE_KEYS.authToken, auth.token);
    this.currentUserSignal.set(auth.user);
  }
  clearSession() {
    localStorage.removeItem(STORAGE_KEYS.authToken);
    this.currentUserSignal.set(null);
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-VB7LJCBZ.js.map
