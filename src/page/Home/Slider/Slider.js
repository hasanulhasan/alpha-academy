import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/04/02195541/Google-Digital-Marketing-Course.jpg"
            alt="First slide"
            height='600px'
          />
          <Carousel.Caption>
            <div className='bg-info rounded-5 py-1 text-black'>
              <h3>A to Z online leaning</h3>
              <p>We are providing certified courses that make you allrounder</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.makeintern.com/learning/img/online-course12.jpg"
            alt="Second slide"
            height='600px'
          />
          <Carousel.Caption className='text-black'>
            <div className='bg-info rounded-5 py-1 text-black'>
              <h3>Sharp your ability by new skill</h3>
              <p>The more you learn the more your developed</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.yourstory.com/cs/1/d091a0b0244c11e9b09763a7a0dcdfd5/e-Learning-Products-1585045528688.png"
            alt="Third slide"
            height='600px'
          />
          <Carousel.Caption className='text-black'>
            <div className='bg-info rounded-5 py-1 text-black'>
              <h3>Modern Technology for Upcoming Revolution</h3>
              <p>Latest Technology will help you to overcome next Challenge</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;