import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import RightSidePart from '../shared/RightSidePart';

const CourseInfo = () => {
  const courseInfo = useLoaderData();
  const { name, image, details, id } = courseInfo;

  return (
    <div>
      <div class="card my-4">
        <div class="card-header display-5">
          <div className='d-flex justify-content-between'>
            {name}
            <button type="button" class="btn btn-info fw-bold">Download Pdf</button>
          </div>
        </div>
      </div>
      <div class='grid'>
        <div className="card">
          <img className="card-img-top" src={image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p>{details}</p>
            <Link to={`/checkout/${id}`}><button className='btn btn-light btn-outline-success'>Get premium access</button></Link>
          </div>
        </div>
      </div >
    </div>
  );
};

export default CourseInfo;