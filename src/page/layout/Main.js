import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Footer2 from '../Footer/Footer2';
import Header from '../Header/Header';

const Main = () => {
  return (
    <div>
      <Container>
        <Header></Header>
        <Outlet></Outlet>
        {/* <Footer></Footer> */}
        <Footer2></Footer2>
      </Container>
    </div>
  );
};

export default Main;