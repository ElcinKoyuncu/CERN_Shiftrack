import React from 'react';
import {Navbar, Container , Nav } from 'react-bootstrap';


const NavMenu = ()=> {
    return (
        <>
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand ><img src = "http://localhost:3000/assets/cern.png" /> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}
export default NavMenu;
