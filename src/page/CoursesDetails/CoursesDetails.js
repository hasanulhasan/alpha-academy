import React from 'react';

const CoursesDetails = ({ c }) => {
  console.log(c);
  const { id, name } = c;
  return (
    <div>
      <h2>{id}</h2>
      <h2>Course Name: {name}</h2>
    </div>
  );
};

export default CoursesDetails;