import React, {useState, useCallback} from 'react';
import '../App.css';
import { Image, Button, Card, Col, Row, Checkbox, Radio, Divider, Input, Select, Upload, message } from 'antd';
import 'antd/dist/antd.css';


function ResMovie({history}) {

    const [select1, setSelect1]=useState(0); 
    const [select2, setSelect2]=useState(0); 
    const [select3, setSelect3]=useState(0); 
    const [price, setPrice]=useState(0); 
    const [seat,setSeat]=useState('');

    
    const completemessage=()=>{
      alert(`일반 ${select1}명, 청소년 ${select2}명, 우대 ${select3}명. ${seat}좌석을 선택하였습니다. 결제를 진행합니다.`);
      history.push(`/PayMovie/${price}`);
    }

    const checkprice=()=>{
      setPrice((select1)*12000 + (select2)*9000+(select3)*5000);
    }

    function onChange1(e) {
        setSelect1(e.target.value);
    }
    function onChange2(e) {
        setSelect2(e.target.value);
    }
    function onChange3(e) {
        setSelect3(e.target.value);
    }

    const onSeat=useCallback(e=>{
        setSeat(e.target.value);
    }, []);

    
    return(
    <div className="App">

    <div className="list">
        <p>영화 예매</p>
    </div>

    
   <div className="container">
    <span style={{fontSize: 16, fontWeight:600}}>회차 선택</span>
    <div style={{marginTop: 30, marginBottom:50, marginLeft: 30}} className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={4}>
        <Card title="17:10~19:33" bordered={false}>
            2관 - 134/150
        </Card>
      <Checkbox style={{marginTop: 15}}/>
      </Col>
      <Col span={4}>
        <Card title="18:20~20:43" bordered={false}>
            1관 - 89/150
        </Card>
        <Checkbox style={{marginTop: 15}}/>
      </Col>
      <Col span={4}>
        <Card title="19:45~22:08" bordered={false}>
            3관 - 102/150
        </Card>
        <Checkbox style={{marginTop: 15}}/>
      </Col>
      <Col span={4}>
        <Card title="21:00~23:23" bordered={false}>
            2관 - 67/150
        </Card>
        <Checkbox style={{marginTop: 15}}/>
      </Col>
    </Row>
    </div>
    <Divider/>

    <div style={{marginTop: 50, marginBottom: 30, fontSize: 16, fontWeight:600}}>인원 선택</div>
          <p>타 고객과 연접되지 않도록 인원수에 맞는 좌석을 선택해 주시기 바랍니다.</p>
          <p>영화 관람 중에도 상시 마스크를 착용해주세요.</p>
          <p>입장 지연에 따른 불편함 최소화를 위해 본 영화는 시작 시간 10분 이후 상영이 시작됩니다.</p>
          <div style={{marginTop:30}}>일반
          <Radio.Group onChange={onChange1} defaultValue="0" buttonStyle="solid" style={{marginLeft: 10}}>
            <Radio.Button value="0">0</Radio.Button>
            <Radio.Button value="1">1</Radio.Button>
            <Radio.Button value="2">2</Radio.Button>
            <Radio.Button value="3">3</Radio.Button>
            <Radio.Button value="4">4</Radio.Button>
          </Radio.Group>
          </div>
          <div style={{marginTop:30}}>청소년
          <Radio.Group onChange={onChange2} defaultValue="0" buttonStyle="solid" style={{marginLeft: 10}}>
            <Radio.Button value="0">0</Radio.Button>
            <Radio.Button value="1">1</Radio.Button>
            <Radio.Button value="2">2</Radio.Button>
            <Radio.Button value="3">3</Radio.Button>
            <Radio.Button value="4">4</Radio.Button>
          </Radio.Group>
          </div>
          <div style={{marginTop:30}}>우대
          <Radio.Group onChange={onChange3} defaultValue="0"  buttonStyle="solid" style={{marginLeft: 10}}>
            <Radio.Button value="0">0</Radio.Button>
            <Radio.Button value="1">1</Radio.Button>
            <Radio.Button value="2">2</Radio.Button>
            <Radio.Button value="3">3</Radio.Button>
            <Radio.Button value="4">4</Radio.Button>
          </Radio.Group>
    </div>
    <div style={{fontWeight: 500, marginTop: 20, marginBottom: 50}}>일반: {select1} 청소년: {select2} 우대: {select3}</div>
    <div>
      <Input style = {{width: 100, marginRight:20}} value={price} />
      <Button style={{marginBottom: 50}} onClick={checkprice}> 가격 확정 </Button>
    </div>
    <Divider/>
    <div style={{marginTop: 50, marginBottom: 30, fontSize: 16, fontWeight:600}}>좌석 선택</div>
    <div>
    <Image
      width={700}
      height={500}
      src="http://drive.google.com/uc?export=view&id=1K6vASr21fza0cFdhFYk3HgteRtDWaMt7"
    />
    </div>
      <Input
          placeholder="좌석을 입력해주세요. A19, A21 ..."
          value={seat}
          onChange={onSeat}
          style={{width: 100, marginTop: 30, marginLeft:10, minWidth: 250 }} />

    </div>
    <Divider/>


    <div className="App">
      <Input style = {{width: 100, marginRight:20}} value={price} />
      <Button type="primary" onClick={completemessage}> 결제하기 </Button>
    </div>

    </div>
    );
}

export default ResMovie;

