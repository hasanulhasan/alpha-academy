import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CoursesDetails from '../CoursesDetails/CoursesDetails';
import './Course.css'

const Course = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('https://assignment-10-server-peach.vercel.app/courses')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])

  return (
    <div className='grid gap-5 my-4'>
      {
        courses.map(course => <CoursesDetails key={course.id} course={course}></CoursesDetails>)
      }
    </div>
  );
};

export default Course;