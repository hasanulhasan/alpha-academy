import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RightSidePart = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/courses')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])
  return (
    <div>
      <h4>Our Best Courses</h4>
      {
        courses.map(c => <h4><Link to={`${c.id}`} key={c.id}> {c.name}</Link></h4>)
      }
    </div>
  );
};

export default RightSidePart;