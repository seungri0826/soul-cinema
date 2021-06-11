import React, {useState} from 'react';
import '../App.css';
import { Button, Divider } from 'antd';
import 'antd/dist/antd.css';


function ManageHome({history}) {


  return (
    <div className="App">
      {/*<div className="black-nav">
          <div>소울시네마 영화 예매 시스템</div>
      </div>*/}

        <div className="part" style={{padding: 50, fontWeight: 600}}>
          <p>영화 등록</p>
          <Button onClick={ () => {history.push("/InsertMovie")}}>바로가기</Button>
        </div>

        <div className="part" style={{padding: 50, fontWeight: 600}}>
          <p>상영관 등록</p>
          <Button onClick={() => {history.push("/InsertTheater")}}>바로가기</Button>
        </div>

        <div className="part" style={{padding: 50, fontWeight: 600}}>
          <p>가격 등록</p>
          <Button onClick={() => {history.push("/InsertPrice")}}>바로가기</Button>
        </div>

        <div className="part" style={{padding: 50, fontWeight: 600}}>
          <p>영화 예매</p>
          <Button onClick={() => {history.push("/ResMovie")}}>바로가기</Button>
        </div>
        <div className="part" style={{padding: 50, fontWeight: 600}}>
          <p>상품 구매</p>
          <Button onClick={() => {history.push("/Snack")}}>바로가기</Button>
        </div>
        <div className="part" style={{padding: 50, fontWeight: 600}}>
          <p>테스트 페이지</p>
          <Button onClick={() => {history.push("/Test")}}>바로가기</Button>
        </div>
        <div className="part" style={{padding: 50, fontWeight: 600}}>
          <p>현재 상영 중인 영화 목록(첫번째 페이지)</p>
          <Button onClick={() => {history.push("/MovieGridList")}}>바로가기</Button>
        </div>
    </div>
  );
}

export default ManageHome;

