import React from 'react';

const Hero = () => {
  return (
    <div>
      <div class="row g-5">
        <div class="col-lg-6">
          <img src="https://img.freepik.com/free-vector/boy-student-sitting-stack-books-with-laptop-flat-icon-illustration_1284-64037.jpg?w=826&t=st=1671775429~exp=1671776029~hmac=145051ebefa789c8932777c7423b97aae9f1c2856a7e68b29c910e0fa179ab6a" class="img-fluid" alt="" />
        </div>
        <div class="col-lg-6 p-5 d-flex align-items-center">
          <div class="">
            <h1 class="fs-1 text-uppercase large-font fw-bolder pb-3"> Welcome to<br /> <span class="text-warning">Alpha </span>Academy!</h1>
            <p class="fs-4 pb-2">Start, switch, or advance your career with our courses, Professional Certificates, and degrees from world-class universities and companies.</p>
            <button class="btn btn-warning btn-lg">Go Courses</button>
            <button type="button" class="btn btn-lg btn-outline-warning ms-2 text-black">Learn More</button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Hero;