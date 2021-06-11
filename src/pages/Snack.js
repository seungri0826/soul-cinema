import React, {useState, useCallback} from 'react';
import '../App.css';
import { Button, Input } from 'antd';
import coke from '../image/coke.jpg';
import two from '../image/two.jpg';
import one from '../image/one.jpg';

function Snack({history}) {
    
    const [soda,setSoda]=useState(0);
    const [onecom,setOnecom]=useState(0);
    const [twocom,setTwocom]=useState(0);
    const [price, setPrice]=useState(0);

    const completemessage=()=>{
      alert(`총 ${price}원 구매가 완료되었습니다.`);
      history.push('/MovieGridList');
    }
    

  return (

    <div className="App">
      <div className="list">
          <p>간식 구매</p>
      </div>

      <div className="container">
      <div className="snack">   
      <img style={{width: 150, height: 180, marginBottom:20 }} src={coke} />
          <p>탄산음료</p>
          <div style={{fontSize: 14}}>500mL. 콜라가 제공됩니다.</div>
          <p> </p>
          <Button style={{marginBottom: 10}} onClick={()=>{setSoda(soda+1); setPrice(price+2500)}}>+</Button>
          <Button style={{marginBottom: 10}} onClick={()=>{setSoda(soda-1); setPrice(price-2500)}}>-</Button>
          <p>{soda} 개</p>
      </div>

      <div className="snack">
      <img style={{width: 200, height: 180, marginBottom:20 }} src={one} />
          <p>1인콤보</p>
          <div style={{fontSize: 14}}>500mL 콜라 1개와 팝콘(S)가 제공됩니다.</div>
          <p> </p>
          <Button style={{marginBottom: 10}} onClick={()=>{setOnecom(onecom+1); setPrice(price+6500)}}>+</Button>
          <Button style={{marginBottom: 10}} onClick={()=>{setOnecom(onecom-1); setPrice(price-6500)}}>-</Button>
          <p>{onecom} 개</p>

      </div>

      <div className="snack">
      <img style={{width: 200, height: 180, marginBottom:20 }} src={two} />
          <p>2인콤보</p>
          <div style={{fontSize: 14}}>500mL 콜라 2개와 팝콘(L)가 제공됩니다.</div>
          <p> </p>
          <Button style={{marginBottom: 10}} onClick={()=>{setTwocom(twocom+1); setPrice(price+9000)}}>+</Button>
          <Button style={{marginBottom: 10}} onClick={()=>{setTwocom(twocom-1); setPrice(price-9000)}}>-</Button>
          <p>{twocom} 개</p>

      </div>
      </div>

    <div className="App">
    <Input style = {{width: 100, marginRight:20}} value={price} />
    <Button type="primary" onClick={completemessage}> 구매 완료 </Button>
    </div>

      
    </div>
  );
}

export default Snack;

