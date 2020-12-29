import React from 'react';

import Budget from '../components/Budget';

import './style.scss';

const Home = () => {
  return (
    <div className='home'>
      <section className='mortage-hero'>
        <Budget />
        {/* {selector.map((select, index) => (
          <h1 key={index}>{select.name}</h1>
        ))} */}
      </section>
    </div>
  );
};

export default Home;
