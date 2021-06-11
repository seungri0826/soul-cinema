import React, {useState} from 'react';
import '../App.css';
import { Button, Divider } from 'antd';
import 'antd/dist/antd.css';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import './Navbar.css';

function NavBar() {
  return (
    <nav className="black-nav" style={{ position: 'fixed', zIndex: 1, alignItems: 'center', width: '100%' }}>
      <div className="menu__logo">
        <a style={{ fontSize: '25px', fontWeight: 'bold', color: '#ffffff'}} href="/MovieGridList">소울시네마</a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_right">
          <RightMenu mode="horizontal" />
        </div>
      </div>
    </nav>
  )
}

export default NavBar;