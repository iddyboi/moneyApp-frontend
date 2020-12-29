import { combineReducers } from 'redux';
import { budgetReducer } from './budgetReducer';
import { expensesReducer } from './expensesReducer';

export const rootReducer = combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer,
});
