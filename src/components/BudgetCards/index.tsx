import { type } from 'os';
import React, { FC } from 'react';
import './style.scss';

interface Iprops {
  letter: string;
  name: string;
  type?: string;
  value: number;
}

const BudgetCards: FC<Iprops> = ({ letter, name, type, value }) => {
  const colors = ['#ef8354', '#e56b6f', '#e0cba8'];
  const selectedColor = Math.floor(Math.random() * colors.length);
  return (
    <div className={`card ${type === 'income' ? 'card-green' : 'card-red'}`}>
      <div
        className='card__letter'
        style={{ backgroundColor: type === 'income' ? 'green' : 'red' }}
      >
        <h3>{letter}</h3>
      </div>
      <div className='card__info'>
        <p className='card__info--name'>{name}</p>
        <p className='card__info--sub-name'>{type}</p>
      </div>
      <p className='card__amount'>£{value}</p>
    </div>
  );
};

export default BudgetCards;
