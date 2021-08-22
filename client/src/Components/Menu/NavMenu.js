import React from 'react';
import { Menu } from 'antd';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


const NavMenu = ()=> {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/Calendar">
              Calendar
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (

        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img className= "pic" src = "http://localhost:3000/assets/cern.png" alt="logo"/>
            </Navbar.Brand>
            <div class="d-flex justify-content-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              <Nav.Link href="/signup">SIGN UP</Nav.Link>
              <Nav.Link href="/login">LOGIN</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
       
      );
    }
  }
    
   
    return (
      //   <>
      //    <div className="logo" />
      // <Menu theme="light" mode="horizontal:primary" defaultSelectedKeys={['2']}>
      //   <img className= "pic" src = "http://localhost:3000/assets/cern.png"/>
        
      
      // </Menu>
      <nav>
        {showNavigation()}
      </nav>
        // </>
    )
}
export default NavMenu;