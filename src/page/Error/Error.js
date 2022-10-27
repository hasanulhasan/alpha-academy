import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='text-center mt-5'>
      <h1>404 Page Not Found</h1>
      <Link to="/" className='mt-5'><button className="btn btn-warning">Go Home</button></Link>

    </div >
  );
};

export default Error;