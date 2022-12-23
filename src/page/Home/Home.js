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
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;