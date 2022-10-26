import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import RightSidePart from '../shared/RightSidePart';

const CoursePage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg='8'>
            <h1>Here some courses that we offer to you</h1>
            <Course></Course>
          </Col>
          <Col lg='4'>
            <RightSidePart></RightSidePart>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CoursePage;