/**
 * Interfaces and types related to authentication
 */

export type AuthState = {
  isLoggedIn: boolean;
  user: null | {
    name: string;
    email: string;
    photoUrl?: string;
  };
};

export type AuthAction = { type: 'LOGIN'; payload: AuthState.user } | { type: 'LOGOUT' };