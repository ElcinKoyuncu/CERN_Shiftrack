import React from 'react';
import { Menu } from 'antd';
import "./NavMenu.css";

const NavMenu = ()=> {
    return (
        <>
         <div className="logo" />
      <Menu theme="light" mode="horizontal:primary" defaultSelectedKeys={['2']}>
        <img src = "http://localhost:3000/assets/cern.png"/>
       
      </Menu>
        </>
    )
}
export default NavMenu;
