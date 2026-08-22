import { Injectable } from '@angular/core';
import { STORAGE_KEYS } from '../constants';

/**
 * Every client — logged in or not — carries a stable guest identity so carts,
 * wishlists, and recommendations can be built for anonymous visitors and then
 * folded into the account on login. Generated once, persisted forever.
 */
@Injectable({ providedIn: 'root' })
export class GuestTokenService {
  private readonly token: string;

  constructor() {
    this.token = this.loadOrCreate();
  }

  getToken(): string {
    return this.token;
  }

  private loadOrCreate(): string {
    const existing = localStorage.getItem(STORAGE_KEYS.guestToken);
    if (existing) {
      return existing;
    }
    const created = this.generateUuidV4();
    localStorage.setItem(STORAGE_KEYS.guestToken, created);
    return created;
  }

  private generateUuidV4(): string {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }
    // Fallback RFC 4122 v4 generator for environments without crypto.randomUUID.
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (character) => {
      const random = (Math.random() * 16) | 0;
      const value = character === 'x' ? random : (random & 0x3) | 0x8;
      return value.toString(16);
    });
  }
}
