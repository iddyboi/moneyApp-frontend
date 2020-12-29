import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBudget } from '../../redux/actions/budgetActions';
import { IBudget } from '../../redux/reducers/budgetReducer';
import { RootState } from '../../redux/store';
import BudgetCards from '../BudgetCards';
import CustomButtons from '../UI/Buttons';
import Headings from '../UI/Headings';
import CustomInput from '../UI/Inputs';
import IncomeExpense from './IncomeExpense/indext';
import './style.scss';

const Budget = () => {
  const selector = useSelector((state: RootState) => state.budget);
  const expensesSelector = useSelector((state: RootState) => state.expenses);

  let incomeTotal = 0;
  let outgoingTotal = 0;

  selector.map((val) => (incomeTotal += val.value));
  expensesSelector.expenses.map((val) => (outgoingTotal += val.value));

  return (
    <>
      <Headings h1 text='Calcuate Your Budget' />
      <div className='budget-calculator'>
        <div className='budget-calculator__inputs'>
          <IncomeExpense />
        </div>
        {/* expenses */}
        <div className='expenses'>
          <h3>Total Income Monthly:{incomeTotal}</h3>
          <h3>Total Outgoing Monthly: {outgoingTotal}</h3>
          <h3>Amount left after the Month:{incomeTotal - outgoingTotal}</h3>
        </div>
      </div>

      <div className='budget-cards'>
        {selector.map(({ name, value, type }, index) => {
          const letter = name.substring(0, 1).toUpperCase();
          return (
            <BudgetCards
              key={index}
              letter={letter}
              name={name}
              value={value}
              type={type}
            />
          );
        })}
        {expensesSelector.expenses.map(({ name, value, type }, index) => {
          const letter = name.substring(0, 1).toUpperCase();
          return (
            <BudgetCards
              key={index}
              letter={letter}
              name={name}
              value={value}
              type={type}
            />
          );
        })}
      </div>
    </>
  );
};

export default Budget;
