import React from 'react';
import { Link } from 'react-router-dom';

const Footer2 = () => {
  return (
    <div>
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#45526e" }}
      >
        <div className="container p-4 pb-0">
          <section>
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold fs-3">
                  <span class="text-warning">Alpha </span> Academy
                </h6>
                <p>
                  Start, switch, or advance your career with our courses, Professional Certificates, and degrees from world-class universities and companies.<br />
                  Let's Update with modern Technology and Knowledge
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p><Link to='#' className="text-white">Courses</Link></p>
                <p><Link to='#' className="text-white">BootCamps</Link></p>
                <p><Link to='#' className="text-white">Live Sessions</Link></p>
                <p><Link to='#' className="text-white">Interactive Events</Link></p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Useful links
                </h6>
                <p>
                  <a className="text-white">Your Account</a>
                </p>
                <p>
                  <a className="text-white">Become an Affiliate</a>
                </p>
                <p>
                  <a className="text-white">Shipping Rates</a>
                </p>
                <p>
                  <a className="text-white">Help</a>
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fas fa-home mr-3"></i> Chittagong, Bangladesh</p>
                <p><i className="fas fa-envelope mr-3"></i> info@alphaacademy.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 8801862086965</p>
                <p><i className="fas fa-print mr-3"></i> + 8801521401060</p>
              </div>
            </div>
          </section>
          <hr className="my-3" />
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2023 Copyright:
                  <a className="text-white" href="#"> alphaacademy.com</a>
                </div>
              </div>
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "#ffb700" }}>
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "#ffb700" }}>
                  <i className="fab fa-youtube"></i>
                </button>
                <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "#ffb700" }}>
                  <i className="fab fa-instagram"></i>
                </button>
                <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "#ffb700" }}>
                  <i className="fab fa-twitter"></i>
                </button>
              </div>
            </div>
          </section>
        </div>

      </footer>
    </div>
  );
};

export default Footer2;