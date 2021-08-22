import React from 'react';
import { Menu } from 'antd';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./NavMenu.css";

const NavMenu = ()=> {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/calender">
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
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }
    
   
    return (
        <>
         <div className="logo" />
      <Menu theme="light" mode="horizontal:primary" defaultSelectedKeys={['2']}>
        <img className= "pic" src = "http://localhost:3000/assets/cern.png"/>
      
      </Menu>
      <nav>
        {showNavigation()}
      </nav>
        </>
    )
}
export default NavMenu;