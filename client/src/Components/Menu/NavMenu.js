import React from 'react';
import Auth from "../../utils/auth";
import "./NavMenu.css";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


const NavMenu = ()=> {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
      
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand><img className= "pic" alt="" src = "assets/cern.png"/>
            </Navbar.Brand>
            <div className="d-flex justify-content-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
            <Nav.Link href="/CompanyPage">COMPANY</Nav.Link>
              <Nav.Link href="/calendar">CALENDAR</Nav.Link>
              <Nav.Link href="/" onClick={() => Auth.logout()}>LOGOUT</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>

      );
    } else {
      return (

        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand><img className= "pic" alt="" src = "assets/cern.png"/>
            </Navbar.Brand>
            <div className="d-flex justify-content-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              {/* <Nav.Link href="/signup">SIGN UP</Nav.Link> */}
              {/* <Nav.Link href="/login">LOGIN</Nav.Link> */}
              <Nav.Link href="/admin">ADMIN</Nav.Link>
              {/* <Nav.Link href="/signup">SIGN UP</Nav.Link> */}
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