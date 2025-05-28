/**
 * Interfaces and types related to expenses
 */

export type ExpenseTransaction = {
  /** Vendor name */
  VND: string;
  /** Amount */
  AMT: number;
  /** YYYY-MM-DD Date */
  DTE: string;
};

export type OpenAIExpenseObject = {
  /** Expense type */
  TYP: string;
  /** Compiled list of vendors */
  VND: string[];
  /** Total amount */
  AMT: number;
  /** YYYY-MM month */
  MON: string;
};

export type ExpensesSummaryData = {
  /** Name to appear on chart or graph */
  name: string;
  /** Value to appear on chart or graph */
  value: number;
};

export type ExpenseState = {
  expensesData: ExpensesSummaryData[];
};

export type ExpenseAction = { type: 'SET_FETCHED_DATA'; payload: OpenAIExpenseObject[] } | { type: 'CLEAR_DATA' };
