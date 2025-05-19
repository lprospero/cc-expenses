/**
 * Interfaces and types related to expenses
 */

export type OpenAIExpenseObject = {
  /** Expense type */
  TYP: string;
  /** Compiled list of vendors */
  VND: string[];
  /** Total amount */
  AMT: number;
  /** Month grouping of expenses */
  MON: string;
};

export type ExpenseData = {
  /** Name to appear on chart or graph */
  name: string;
  /** Value to appear on chart or graph */
  value: number;
};

export type ExpenseState = {
  expensesData: ExpenseData[];
};

export type ReducerAction = { type: 'SET_DATA'; payload: ExpenseData[] } | { type: 'CLEAR_DATA' };
