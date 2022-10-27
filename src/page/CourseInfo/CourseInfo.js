import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import RightSidePart from '../shared/RightSidePart';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const CourseInfo = () => {
  const courseInfo = useLoaderData();
  const { name, image, details, id } = courseInfo;

  const componentRef = useRef();
  const handlePdfControl = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div>
      <div class="card my-4">
        <div class="card-header display-5">
          <div className='d-flex justify-content-between'>
            {name}
            <button type="button" class="btn btn-info fw-bold" onClick={handlePdfControl}>Download Pdf</button>
          </div>
        </div>
      </div>
      <div class='grid'>
        <div className="card" ref={componentRef}>
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