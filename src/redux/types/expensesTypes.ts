import { Expenses } from './../reducers/expensesReducer/index';
import { type } from 'os';

export const ADD_EXPENSES = 'ADD_EXPENSES';

interface addExpensesAction {
  type: typeof ADD_EXPENSES;
  payload: Expenses;
}

export type ExpensesActions = addExpensesAction;
