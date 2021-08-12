import React from 'react';
import NavMenu from './Components/Menu/NavMenu';
import {Container, Row, Col } from 'react-bootstrap';
import Login from './Components/Auth/Login';

const App = () => {
  return (

    <>
    <Container fluid>
  <Row>
    <Col><NavMenu /></Col>
  </Row>
  <Row>
    <Login/>
  </Row>
</Container>
    
    </>
  );
}

export default App;
