import { ExpenseState, ExpenseTransaction, OpenAIExpenseObject, ExpenseAction } from '../interfaces/Expenses';

export const expenseInitialState: ExpenseState = {
  transactionsData: [],
  expensesData: []
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
    case 'SET_INPUT_DATA':
      return { ...state, transactionsData: action.payload.map((expense: ExpenseTransaction) => ({ name: expense.VND, value: expense.AMT })) };
    case 'SET_FETCHED_DATA':
      return { ...state, expensesData: action.payload.map((expense: OpenAIExpenseObject) => ({ name: expense.TYP, value: expense.AMT })) };
    case 'CLEAR_DATA':
      return { ...state, transactionsData: [], expensesData: [] };
    default:
      return state;
  }
}
