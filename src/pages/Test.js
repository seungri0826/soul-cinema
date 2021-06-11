import React, {useState, useCallback} from 'react';
import '../App.css';
import { Button } from 'antd';
import 'antd/dist/antd.css';

function Test({history}) {
  

  return (

    <div className="App">

      {/*<div className="black-nav">
          <div onClick={ () => {history.push("/")}}>서울 시네마틱 영화어쩌고</div>
      </div>*/}

      <div className="list">
          <p>테스트 페이지</p>
      </div>
      <Button type="primary">Primary Button</Button>

    </div>
  );
}

export default Test;

