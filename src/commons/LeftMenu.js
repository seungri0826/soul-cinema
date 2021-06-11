import React from 'react';
import { Menu } from 'antd';

function LeftMenu(props) {
  return (
    <Menu 
      style={{  backgroundColor: 'black', fontSize: '19px', color: '#ffffff', alignItems: 'center' }} 
      theme="dark" 
      mode={props.mode} 
    >
      <Menu.Item key="insertmovie">
        <a href="/InsertMovie">영화 등록</a>
      </Menu.Item>
      <Menu.Item key="inserttheater">
        <a href="/InsertTheater">상영관 등록</a>
      </Menu.Item>
      <Menu.Item key="insertprice">
        <a href="/InsertPrice">가격 등록</a>
      </Menu.Item>
      <Menu.Item key="snack">
        <a href="/Snack">상품 구매</a>
      </Menu.Item>
    </Menu>
  )
}

export default LeftMenu