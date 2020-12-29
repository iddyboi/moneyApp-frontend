import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBudget } from '../../../redux/actions/budgetActions';
import { addExpenses } from '../../../redux/actions/expensesAction';
import { IBudget } from '../../../redux/reducers/budgetReducer';
import CustomButtons from '../../UI/Buttons';
import CustomInput from '../../UI/Inputs';

const IncomeExpense = () => {
  const [budget, setBudget] = useState<IBudget>({
    name: '',
    value: 0,
  });

  const [tax, setTax] = useState('');
  const dispatch = useDispatch();
  return (
    <>
      <CustomInput
        onChangeHandler={(e: ChangeEvent<HTMLInputElement>) =>
          setTax(e.target.value)
        }
        value={tax}
        type='text'
        placeholder='Enter Tax Value'
        label='Enter Tax'
      />
      <CustomInput
        value={budget.name}
        type='text'
        label='Enter Income or Expenses'
        placeholder='Enter Income or Expense Value'
        onChangeHandler={(e: ChangeEvent<HTMLInputElement>) =>
          setBudget({ ...budget, name: e.target.value })
        }
      />
      <CustomInput
        value={budget.value}
        type='number'
        label='Enter Amount'
        placeholder='value'
        onChangeHandler={(e: ChangeEvent<HTMLInputElement>) =>
          setBudget({ ...budget, value: Number(e.target.value) })
        }
      />
      <CustomButtons
        clickHander={() =>
          dispatch(addBudget({ name: budget.name, value: budget.value }))
        }
        text='Add Income'
      ></CustomButtons>
      <CustomButtons
        text='Add expenses'
        clickHander={() =>
          dispatch(addExpenses({ name: budget.name, value: budget.value }))
        }
      />
    </>
  );
};

export default IncomeExpense;
