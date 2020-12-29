import { IBudget } from '../../reducers/budgetReducer';
import { GET_ALL_BUDGETS, ADD_BUDGET } from '../../types/budgetTypes';
import { BudgetActionTypes } from './../../types/budgetTypes';

export const getBudgets = (): BudgetActionTypes => {
  return {
    type: GET_ALL_BUDGETS,
  };
};

export const addBudget = ({ name, value }: IBudget): BudgetActionTypes => {
  return {
    type: ADD_BUDGET,
    payload: {
      name,
      value,
    },
  };
};
