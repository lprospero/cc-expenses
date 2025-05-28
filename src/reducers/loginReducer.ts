import { AuthState, AuthAction } from '../interfaces/Auth';

export const authInitialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

export function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN':
      return {
        isLoggedIn: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
