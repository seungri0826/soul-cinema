import React, {useState, useCallback} from 'react';
import '../App.css';
import { Image, Button, Card, Col, Row, Checkbox, Radio, Divider, Input, Select, Upload, message } from 'antd';
import 'antd/dist/antd.css';


function PayMovie({history, match}) {

    const [paymethod,setPaymethod]=useState('');
    const [price, setPrice]=useState(match.params.price); 
    const [point, setPoint]=useState(0); 
    const [use, setUse]=useState(); 

    const { Option } = Select;
    
    const completemessage=()=>{
      alert(`총 ${price}원 결제가 완료되었습니다.`);
      history.push('/MovieGridList');
    }

    function onPaymethod(value) {
        setPaymethod(value);
    }

    const onUse=useCallback(e=>{
        setUse(e.target.value);
    }, []);

    
    return(
    <div className="App">

    <div className="list">
        <p>티켓 결제</p>
    </div>

    
   <div className="Container">
    <div style={{marginTop: 50, marginBottom: 30, fontSize: 16, fontWeight:600}}>결제방법</div>
        <Select defaultValue="0400" style={{ paddingLeft: 10, minwidth: 40 }} onChange={onPaymethod}>
            <Option value="0400">결제방법</Option>
            <Option value="0401">카드결제</Option>
            <Option value="0402">계좌이체</Option>
            <Option value="0403">포인트결제</Option>
        </Select>
        <p>{paymethod}</p>
    <Divider/>

    <div>
    <div style={{marginTop: 50, marginBottom: 30, fontSize: 16, fontWeight:600}}>결제</div>
        {paymethod === "0403" ?
        <div>
          <div>총 결제액: <Input 
            value={price}
            style={{width: 100, marginLeft:10, minWidth: 100, marginBottom: 10}} /></div>
        <div>현재 포인트: <Input 
            value={point}
            style={{width: 100, marginLeft:10, minWidth: 100, marginBottom: 10}} /></div>

        {point < price ? <p style={{marginTop: 10, fontSize: 14, fontWeigth: 600 }}>포인트가 부족합니다!</p> : <p></p>}
        </div> 
        : 
        <div>
        <div>
        <Select defaultValue="0" style={{ paddingLeft: 10, minwidth: 40, marginBottom: 20}} onChange={()=>{}}>
            <Option value="0">은행 선택</Option>
            <Option value="1">KB국민</Option>
            <Option value="2">KEB하나</Option>
            <Option value="3">신한</Option>
            <Option value="4">우리</Option>
            <Option value="5">NH농협</Option>
            <Option value="6">IBK기업</Option>
            <Option value="7">BNK부산</Option>
            <Option value="8">DGB대구</Option>
            <Option value="9">BNK경남</Option>
            <Option value="10">전북</Option>
            <Option value="11">제주</Option>
        </Select>
        </div>
          <div>총 결제액: <Input 
            value={price}
            style={{width: 100, marginLeft:10, minWidth: 100, marginBottom: 10}} /></div>
        <div>포인트 적립: <Input 
            value={(price)*0.01}
            style={{width: 100, marginLeft:10, minWidth: 100, marginBottom: 10}} /></div>
        <div>포인트 사용: <Input 
                placeholder="사용할 포인트 입력"
                value={use}
                onChange={onUse}
                style={{width: 150, marginLeft:10, minWidth: 100}} /></div>
        {point < use ? <p style={{ marginTop: 20, fontSize: 14, fontWeigth: 600 }}>포인트가 부족합니다! 나의 현재 포인트 잔액: {point} </p> : <p></p>}

        </div>
         }
    </div>

    </div>
    <div className="App">
      <Button type="primary" onClick={completemessage}> 결제하기 </Button>
    </div>

    </div>
    );
}

export default PayMovie;

