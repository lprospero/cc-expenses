import { ExpenseState, ReducerAction } from '../interfaces/Expenses';

export const initialState: ExpenseState = {
  expensesData: [],
};

export function expenseReducer(state: ExpenseState, action: ReducerAction): ExpenseState {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, expensesData: action.payload.map((expense: {[key:string]: any}) => ({ name: expense.TYP, value: expense.AMT })) };
    case 'CLEAR_DATA':
      return { ...state, expensesData: [] };
    default:
      return state;
  }
}
