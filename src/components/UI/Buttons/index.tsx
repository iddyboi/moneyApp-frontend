import React, { FC } from 'react';
import './style.scss';

interface IProps {
  text: string;
  clickHander?(): void;
}

const CustomButtons: FC<IProps> = ({ text, clickHander }) => {
  return (
    <button className='ui-button' onClick={clickHander}>
      {text}
    </button>
  );
};

export default CustomButtons;
