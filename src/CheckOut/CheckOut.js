import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CheckOut = () => {
  const courseData = useLoaderData();
  const { name, image, details, id } = courseData;
  return (
    <div>
      <Card className="text-center">
        <Card.Header>You have chosen a Awesome Course!</Card.Header>
        <Card.Body>
          <Card.Title>{id}-{name}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Button variant="primary">CheckOut Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CheckOut;