import { AuthAction } from '../interfaces/Auth';
import { ExpenseAction } from '../interfaces/Expenses';
import { GlobalState, GlobalContextProps, GlobalAction } from '../interfaces/Global';
import { createContext, useReducer, useContext, ReactNode } from 'react';
import { authReducer, authInitialState } from '../reducers/loginReducer';
import { expenseReducer, expenseInitialState } from '../reducers/expenseReducer';

// Combined states
const globalInitialState = {
  auth: authInitialState,
  expenses: expenseInitialState,
};

// Combined reducers
const globalReducer = (state : GlobalState , action : GlobalAction) : GlobalState => ({
  auth: authReducer(state.auth, action as AuthAction),
  expenses: expenseReducer(state.expenses, action as ExpenseAction)
});

export const GlobalContext = createContext<GlobalContextProps>({
  state: globalInitialState,
  dispatch: () => null,
});

export const AppProvider = ({ children } : {children : ReactNode}) => {
  const [state, dispatch] = useReducer(globalReducer, globalInitialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook
export const useAppContext = () => useContext(GlobalContext);