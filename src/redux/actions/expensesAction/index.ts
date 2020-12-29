import { Expenses } from './../../reducers/expensesReducer/index';
import { ADD_EXPENSES, ExpensesActions } from '../../types/expensesTypes';

export const addExpenses = ({ name, value }: Expenses): ExpensesActions => {
  return {
    type: ADD_EXPENSES,
    payload: { name, value },
  };
};
