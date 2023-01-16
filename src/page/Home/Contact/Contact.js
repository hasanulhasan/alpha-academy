import React from 'react';

const Contact = () => {
  return (
    <div class="row py-4 my-5" style={{ backgroundColor: "#e1b12c" }}>
      <div class="col text-white text-center m-auto">
        <h2 class="font-wight-bold">Skills in Number</h2>
        <p>It is known to everyone Success in Life is full of skills and Hard work. Here Hasanul's skill in number
        </p>
      </div>
      <div class="row py-5">
        <div class="col-sm mr-1 border text-center text-white border-light">
          <span style={{ fontSize: "72px" }}>7</span>
          <p>Certification</p>
        </div>
        <div class="col-sm mr-1 border text-center text-white border-light">
          <span style={{ fontSize: "72px" }}>25+</span>
          <p>Projects</p>
        </div>
        <div class="col-sm mr-1 border text-center text-white border-light">
          <span style={{ fontSize: "72px" }}>60+</span>
          <p>Repositoris</p>
        </div>
        <div class="col-sm mr-1 border text-center text-white border-light">
          <span style={{ fontSize: "72px" }}>13+</span>
          <p>Skills</p>
        </div>
      </div>
      <div class="col text-white text-center m-auto">
        <h2 class="font-wight-bold">Get in Touch</h2>
        <p>Be connect with me . Also tell me your valuable suggetions</p>
      </div>
      <div class="row pb-3">
        <div class="col text-white">
          <h4>Shot a message!</h4>
        </div>
      </div>
      <div class="row">
        <div action="backend.php">
          <div class="form-row pb-3">
            <div class="col pb-3">
              <input type="text" class="form-control inner-form" placeholder="Name" />
            </div>
            <div class="col">
              <input type="text" class="form-control inner-form" placeholder="Your Email" />
            </div>
          </div>
          <div class="row pb-3">
            <div class="col">
              <textarea name="Place your message" class="form-control inner-form" id="" cols="30" rows="5"
                placeholder="Your message"></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col py-3">
              <button class="btn btn-primary">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Contact;