import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { STORAGE_KEYS } from '../constants';
import { GuestTokenService } from '../services/guest-token.service';

/**
 * Attaches the guest identity to every outgoing request, and the bearer
 * token too once the visitor has logged in. Reads the auth token straight
 * from localStorage (rather than injecting AuthService) to keep the
 * interceptor free of any dependency on application state services.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const guestToken = inject(GuestTokenService).getToken();
  const authToken = localStorage.getItem(STORAGE_KEYS.authToken);

  let headers = req.headers
    .set('X-Guest-Token', guestToken)
    .set('Accept', 'application/json');

  if (authToken) {
    headers = headers.set('Authorization', `Bearer ${authToken}`);
  }

  return next(req.clone({ headers }));
};
