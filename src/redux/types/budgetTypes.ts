import { IBudget } from '../reducers/budgetReducer';

// src/store/chat/types.ts
export const GET_ALL_BUDGETS = 'GET_ALL_BUDGETS';
export const ADD_BUDGET = 'ADD_BUDGET';

interface GetBudgetAction {
  type: typeof GET_ALL_BUDGETS;
}

interface AddBudgetAction {
  type: typeof ADD_BUDGET;
  payload: IBudget;
}

export type BudgetActionTypes = GetBudgetAction | AddBudgetAction;
