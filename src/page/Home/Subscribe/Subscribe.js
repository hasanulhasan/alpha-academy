import React from 'react';

const Subscribe = () => {
  return (
    <div>
      <section class="py-6 my-3" id="subscribe">
        <div class="w-100 h-75 bg-warning rounded-3 d-flex justify-content-center">
          <div class="p-5">
            <h1 className='display-3 fw-bolder'>Boost your Career from Today!</h1>
            <h2 class="fw-bold">LET'S STAY IN TOUCH</h2>
            <p>Get updates with our recent Course, Technology, Specials event and more</p>
            <input type="email" class="form-control mb-2" id="exampleFormControlInput1" />
            <a href="#" class="btn btn-success fs-5">Subscribe</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;