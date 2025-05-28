import { ExpenseState, OpenAIExpenseObject, ExpenseAction } from '../interfaces/Expenses';

export const expenseInitialState: ExpenseState = {
  expensesData: [],
};

/**
 * Manage expenses data
 *
 * @param {ExpenseState} state State 
 * @param {ReducerAction} action Reducer action 
 * @returns {ExpenseState} Expenses data
 */
export function expenseReducer(state: ExpenseState, action: ExpenseAction): ExpenseState {
  switch (action.type) {
    case 'SET_FETCHED_DATA':
      return { ...state, expensesData: action.payload.map((expense: OpenAIExpenseObject) => ({ name: expense.TYP, value: expense.AMT })) };
    case 'CLEAR_DATA':
      return { ...state, expensesData: [] };
    default:
      return state;
  }
}
