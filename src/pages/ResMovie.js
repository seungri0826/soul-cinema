import React, {useState, useCallback} from 'react';
import '../App.css';
import { Button, Divider } from 'antd';
import 'antd/dist/antd.css';

function ResMovie({history}) {
    
    //등급, 장르, 스틸컷/예고편, 포스터, 더빙여부, 상영형태는 아직 -> 코드테이블, 이미지, picker이용
    const [title,setTitle]=useState('');
    const [time,setTime]=useState('');  //3자리 숫자
    const [desc, setDesc]=useState('');
    const [company, setCompany]=useState('');
    const [releasedate, setReleasedate]=useState('');   //YYYYMMDD
    const [country, setCountry]=useState(''); 


    const letspaymessage=()=>{
        alert('결제를 진행합니다.')
    }
    
    const onTitle=useCallback(e=>{
        setTitle(e.target.value);
    }, []);

    const onTime=useCallback(e=>{
        setTime(e.target.value);
    }, []);

    const onDesc=useCallback(e=>{
        setDesc(e.target.value);
    }, []);

    const onCompany=useCallback(e=>{
        setCompany(e.target.value);
    }, []);

    const onReleasedate=useCallback(e=>{
        setReleasedate(e.target.value);
    }, []);

    const onCountry=useCallback(e=>{
        setCountry(e.target.value);
    }, []);


  return (

    <div className="App">

      {/*<div className="black-nav">
          <div onClick={ () => {history.push("/")}}>소울시네마 영화 예매 시스템</div>
      </div>*/}

      <div className="list">
          <p>영화 예매</p>
      </div>

      <div className= "part">
          <span>영화명 :</span>
          <span>
              <input 
                placeholder="제목 입력"
                value={title}
                onChange={onTitle}
                style={{marginLeft:10, minWidth: 200}} />
            <p>{title}</p>
          </span>
      </div>

      <div className= "part">
          <span>상영시간 :</span>
          <span>
              <input 
                placeholder="상영시간 입력"
                value={time}
                onChange={onTime}
                style={{marginLeft:10, minWidth: 200}} />
            <p>{time}</p>
          </span>
      </div>

      <div className= "part">
          <span>소개글 :</span>
          <span>
              <input 
                placeholder="소개글 입력"
                value={desc}
                onChange={onDesc}
                style={{marginLeft:10, minWidth: 200}} />
            <p>{desc}</p>
          </span>
      </div>

      <div className= "part">
          <span>배급사 :</span>
          <span>
              <input 
                placeholder="배급사 입력"
                value={company}
                onChange={onCompany}
                style={{marginLeft:10, minWidth: 200}} />
            <p>{company}</p>
          </span>
      </div>

      <div className= "part">
          <span>개봉일자 :</span>
          <span>
              <input 
                placeholder="개봉일자(YYYYMMDD) 입력" 
                value={releasedate}
                onChange={onReleasedate}
                style={{marginLeft:10, minWidth: 200}} />
            <p>{releasedate}</p>
          </span>
      </div>

      <div className= "part">
          <span>나라 :</span>
          <span>
              <input 
                placeholder="제작된 나라 입력"
                value={country}
                onChange={onCountry}
                style={{marginLeft:10, minWidth: 200}} />
            <p>{country}</p>
          </span>
      </div>

    <div className="App">
      <Button onClick={letspaymessage}> 결제 진행 </Button>
    </div>

    </div>
  );
}

export default ResMovie;

