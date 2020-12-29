import React, { FC } from 'react';
import './style.scss';

interface Iprops {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  text: string;
}

const Headings: FC<Iprops> = ({ h1, h2, h3, h4, text }) => {
  const size = true;
  return (
    <>
      {h1 && <h1 className='ui-header h1'>{text}</h1>}
      {h2 && <h2 className='ui-header h2'>{text}</h2>}
      {h3 && <h3 className='ui-header h3'>{text}</h3>}
      {h4 && <h4 className='ui-header h4'>{text}</h4>}
    </>
  );
};

export default Headings;
