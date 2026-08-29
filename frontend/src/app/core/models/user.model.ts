export interface User {
  id: number;
  name: string;
  email: string;
  phone: string | null;
}

export interface AuthResponse {
  token: string;
  user: User;
}
