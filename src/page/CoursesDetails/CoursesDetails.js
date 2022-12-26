import React from 'react';
import { Link } from 'react-router-dom';
import './CoursesDetails.css'

const CoursesDetails = ({ course }) => {
  console.log(course);
  const { id, name, image } = course;
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt=".." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <Link to={`${course.id}`}><button className='btn btn-light  btn-outline-primary'>Go course</button></Link>
      </div>
    </div>
  );
};

export default CoursesDetails;