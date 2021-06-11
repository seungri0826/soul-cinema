import React, {useState, useCallback} from 'react';
import '../App.css';
import { Button, Divider, Input, Select, Radio } from 'antd';
import 'antd/dist/antd.css';

function InsertPrice({history}) {
    
    const [nadult,setNadult]=useState();
    const [morningadult, setMorningadult]=useState();
    const [nteen,setNteen]=useState();
    const [morningteen, setMorningteen]=useState();
    const [silver, setSilver]=useState();
    const [sodap, setSodap]=useState();
    const [onecomp, setOnecomp]=useState();
    const [twocomp, setTwocomp]=useState();


    const { Option } = Select;
    
    const completemessage=()=>{
        alert('가격 등록이 완료되었습니다.')
        history.push('/MovieGridList');
    }

    const onNadult=useCallback(e=>{
        setNadult(e.target.value);
    }, []);

    const onMorningadult=useCallback(e=>{
        setMorningadult(e.target.value);
    }, []);

    const onNteen=useCallback(e=>{
        setNteen(e.target.value);
    }, []);

    const onMorningteen=useCallback(e=>{
        setMorningteen(e.target.value);
    }, []);

    const onSilver=useCallback(e=>{
        setSilver(e.target.value);
    }, []);

    const onSodap=useCallback(e=>{
        setSodap(e.target.value);
    }, []);
    
    const onOnecomp=useCallback(e=>{
        setOnecomp(e.target.value);
    }, []);

    const onTwocomp=useCallback(e=>{
        setTwocomp(e.target.value);
    }, []);


    return(
    <div className="App">

    <div className="list">
        <p>가격 등록</p>
    </div>

      <div className= "part2">
          <span>일반-성인 :</span>
          <span>
              <Input 
                placeholder="가격 입력"
                value={nadult}
                onChange={onNadult}
                style={{width: 100, marginLeft:10, minWidth: 100}} />
            <p>{nadult}</p>
          </span>
      </div>
      <Divider/>

      <div className= "part2">
      <span>조조-성인 :</span>
          <span>
              <Input 
                placeholder="가격 입력"
                value={morningadult}
                onChange={onMorningadult}
                style={{width: 100, marginLeft:10, minWidth: 100}} />
            <p>{morningadult}</p>
          </span>
      </div>
      <Divider/>

      <div className= "part2">
          <span>일반-청소년 :</span>
          <span>
              <Input 
                placeholder="가격 입력"
                value={nteen}
                onChange={onNteen}
                style={{width: 100, marginLeft:10, minWidth: 100}} />
            <p>{nteen}</p>
          </span>
      </div>
      <Divider/>

      <div className= "part2">
      <span>조조-청소년 :</span>
          <span>
              <Input 
                placeholder="가격 입력"
                value={morningteen}
                onChange={onMorningteen}
                style={{width: 100, marginLeft:10, minWidth: 100}} />
            <p>{morningteen}</p>
          </span>
      </div>
      <Divider/>

      <div className= "part2">
      <span>우대 :</span>
          <span>
              <Input 
                placeholder="가격 입력"
                value={silver}
                onChange={onSilver}
                style={{width: 100, marginLeft:10, minWidth: 100}} />
            <p>{silver}</p>
          </span>
      </div>
      <Divider/>

      <div className= "part2">
      <span>탄산음료 :</span>
          <span>
              <Input 
                placeholder="가격 입력"
                value={sodap}
                onChange={onSodap}
                style={{width: 100, marginLeft:10, minWidth: 100}} />
            <p>{sodap}</p>
          </span>
      </div>
      <Divider/>

      <div className= "part2">
      <span>1인콤보 :</span>
          <span>
              <Input 
                placeholder="가격 입력"
                value={onecomp}
                onChange={onOnecomp}
                style={{width: 100, marginLeft:10, minWidth: 100}} />
            <p>{onecomp}</p>
          </span>
      </div>
      <Divider/>

      <div className= "part2">
      <span>2인콤보 :</span>
          <span>
              <Input 
                placeholder="가격 입력"
                value={twocomp}
                onChange={onTwocomp}
                style={{width: 100, marginLeft:10, minWidth: 100}} />
            <p>{twocomp}</p>
          </span>
      </div>
      <Divider/>



    <div className="App">
      <Button  type="primary" onClick={completemessage}> 등록 완료 </Button>
    </div>

    </div>
    );
}

export default InsertPrice;

