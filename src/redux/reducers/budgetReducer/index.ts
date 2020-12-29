import { Action } from 'redux';
import { ADD_BUDGET, BudgetActionTypes } from '../../types/budgetTypes';

export interface IBudget {
  type?: string;
  name: string;
  value: number;
}

export interface IState {
  incomes: IBudget[];
}

const initialState: IBudget[] = [
  { type: 'income', name: 'Salary', value: 1850 },
];

export const budgetReducer = (
  state = initialState,
  action: BudgetActionTypes
): IBudget[] => {
  switch (action.type) {
    case ADD_BUDGET:
      return [...state, { type: 'income', ...action.payload }];

    default:
      return state;
  }
};
