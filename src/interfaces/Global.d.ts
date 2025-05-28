import { AuthState, AuthAction } from './Auth';
import { ExpenseState, ExpenseAction } from './Expenses';

export type GlobalAction = AuthAction | ExpenseAction;

export interface GlobalState {
  auth: AuthState;
  expenses: ExpenseState;
}

export interface GlobalContextProps {
  state: GlobalState;
  dispatch: Dispatch<Action>;
}