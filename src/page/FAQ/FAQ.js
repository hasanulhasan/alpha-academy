import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
  return (
    <div className='my-5'>
      <div className='my-2'>
        <h1 class="display-3 text-center">Frequently Asked Question</h1>
      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is `cors`?</Accordion.Header>
          <Accordion.Body>CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.In ReactJS, Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS there.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Why are you using `firebase`? What other options do you have to implement authentication?</Accordion.Header>
          <Accordion.Body>We are using firebase for maintaining user log in information and giving authorization of admin. Without firebase we can use Okta,OneLogin, Microsoft Azure Active Directory,G2 Deal etc.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>How does the private route work?</Accordion.Header>
          <Accordion.Body>PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
          <Accordion.Body>Node is a JavaScript Runtime. Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;