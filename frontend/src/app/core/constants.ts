/** localStorage keys shared between services so nothing collides or drifts. */
export const STORAGE_KEYS = {
  guestToken: 'lumina_guest_token',
  authToken: 'lumina_auth_token',
  compareIds: 'lumina_compare_ids',
} as const;
