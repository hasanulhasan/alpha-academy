import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CoursesDetails from '../CoursesDetails/CoursesDetails';
import './Course.css'

const Course = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/courses')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])

  return (
    <div className='grid'>
      {
        courses.map(c => <CoursesDetails key={c.id} c={c}></CoursesDetails>)
      }
    </div>
  );
};

export default Course;