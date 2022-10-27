import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import './CoursesDetails.css'

const CoursesDetails = ({ c }) => {
  console.log(c);
  const { id, name, image } = c;
  return (
    <div>
      <div class='grid'>
        <div className="card">
          <img className="card-img-top" src={image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <Link to={`${c.id}`}><button className='btn btn-light'>go course</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;