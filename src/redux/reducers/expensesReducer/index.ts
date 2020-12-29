import { ADD_EXPENSES, ExpensesActions } from '../../types/expensesTypes';

export interface IState {
  expenses: Expenses[];
}
export interface Expenses {
  type?: string;
  name: string;
  value: number;
}

const initialState: IState = {
  expenses: [],
};

export const expensesReducer = (
  state: IState = initialState,
  action: ExpensesActions
) => {
  switch (action.type) {
    case ADD_EXPENSES:
      return {
        ...state,
        expenses: [...state.expenses, { type: 'expenses', ...action.payload }],
      };

    default:
      return {
        ...state,
      };
  }
};
