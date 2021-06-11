import React from 'react';
import { Menu } from 'antd';

function RightMenu(props) {
  return (
    <Menu 
      style={{ backgroundColor: 'black', fontSize: '19px', color: '#ffffff', alignItems: 'center', float: 'right' }} 
      theme="dark" 
      mode={props.mode} 
    >
      <Menu.Item key="login">
        <a href="/Login">로그인</a>
      </Menu.Item>
      <Menu.Item key="signup">
        <a href="/Signup">회원가입</a>
      </Menu.Item>
    </Menu>
  )
}

export default RightMenu