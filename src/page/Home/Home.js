import React from 'react';
import Hero from './Hero/Hero';
import './Home.css'
import Slider from './Slider/Slider';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
  return (
    <div className='mt-5 text-center'>
      <Hero></Hero>
      <Slider></Slider>
      <div className='my-12'>
        <h1 className='display-3 fw-bolder'>Boost your Career from Today!</h1>
        <h2>Learn without limits</h2>
      </div>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;