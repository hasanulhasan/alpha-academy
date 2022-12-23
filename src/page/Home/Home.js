import React from 'react';
import './Home.css'
import Slider from './Slider/Slider';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
  return (
    <div className='mt-5 text-center'>
      <Slider></Slider>
      <h1 className='display-1 fw-bolder'>Welcome to Alpha Academy!</h1>
      <h2>Learn without limits</h2>
      <p className='fs-3'>Start, switch, or advance your career with our courses, Professional Certificates, and degrees from world-class universities and companies.</p>
      <div>
        <button type="button" class="btn btn-primary btn-lg">Go Course</button>
        <button type="button" class="btn btn-lg btn-outline-primary ms-2">Learn More</button>
      </div>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;