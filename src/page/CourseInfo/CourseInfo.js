import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseInfo = () => {
  const courseInfo = useLoaderData();
  const { name, image, details } = courseInfo;

  return (<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {details}
      </Card.Text>
      <Button variant="primary">Go Premimum</Button>
    </Card.Body>
  </Card>
  );
};

export default CourseInfo;