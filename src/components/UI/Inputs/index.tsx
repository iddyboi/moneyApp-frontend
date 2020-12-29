import React, { ChangeEvent, FC } from 'react';
import './style.scss';

interface IProps {
  onChangeHandler(e: ChangeEvent): void;
  value: string | number;
  placeholder: string;
  type: string;
  label?: string;
}

const CustomInput: FC<IProps> = ({ onChangeHandler, label, ...others }) => {
  return (
    <>
      {!label && (
        <input
          className='custom-input'
          onChange={onChangeHandler}
          {...others}
        ></input>
      )}

      {label && (
        <div className='custom-input__flex'>
          <label>{label}</label>
          <input
            className='custom-input'
            onChange={onChangeHandler}
            {...others}
          ></input>
        </div>
      )}
    </>
  );
};

export default CustomInput;
