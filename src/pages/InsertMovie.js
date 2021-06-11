import React, {useState, useCallback} from 'react';
import '../App.css';
import { Button, Divider, Input, DatePicker, Upload, message, Select, Radio } from 'antd';
import 'antd/dist/antd.css';
import { UploadOutlined } from '@ant-design/icons';

function InsertMovie({history}) {
    
    const [title,setTitle]=useState('');
    const [time,setTime]=useState();  //3자리 숫자
    const [desc, setDesc]=useState('');
    const [genre, setGenre]=useState('');
    const [rating, setRating]=useState('');
    const [form, setForm]=useState('');
    const [dub, setDub]=useState('');
    const [company, setCompany]=useState('');
    const [date, setDate]=useState(''); 
    const [country, setCountry]=useState(''); 

    const props = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

    const { Option } = Select;
    
    const completemessage=()=>{
        alert('영화 등록이 완료되었습니다.')
        history.push('/MovieGridList');
    }
    
    const onTitle=useCallback(e=>{
        setTitle(e.target.value);
    }, []);

    const onTime=useCallback(e=>{
        setTime(e.target.value);
    }, []);

    function onGenre(value) {
      setGenre(value);
    }

    function onRating(value) {
      setRating(value);
    }

    function onForm(value) {
      setForm(value);
    }

    const onDub=useCallback(e=>{
      setDub(e.target.value);
  }, []);

    const onDesc=useCallback(e=>{
        setDesc(e.target.value);
    }, []);

    const onCompany=useCallback(e=>{
        setCompany(e.target.value);
    }, []);

    function onDate(date, dateString) {
        setDate(dateString)
      }

    const onCountry=useCallback(e=>{
        setCountry(e.target.value);
    }, []);


  return (

    <div className="App">

      <div className="list">
          <p>영화정보 등록</p>
      </div>

      <div className= "part2">
          <span>영화명 :</span>
          <span>
              <Input 
                placeholder="제목 입력"
                value={title}
                onChange={onTitle}
                style={{width: 100, marginLeft:10, minWidth: 200}} />
            <p>{title}</p>
          </span>
      </div>
      <Divider/>

      <div className= "part2">
          <span>상영시간 :</span>
          <span>
              <Input 
                placeholder="상영시간 입력"
                value={time}
                onChange={onTime}
                style={{width: 100, marginLeft:10, minWidth: 200}} />
            <p>{time}</p>
          </span>
      </div>
      <Divider/>

      <div className= "part2">
          <span>장르 :</span>
          <span>
            <Select defaultValue="0100" style={{ paddingLeft: 10, minWidth : 40 }} onChange={onGenre}>
              <Option value="0100">장르</Option>
              <Option value="0101">액션</Option>
              <Option value="0102">멜로</Option>
              <Option value="0103">드라마</Option>
              <Option value="0104">코미디</Option>
              <Option value="0105">무협</Option>
              <Option value="0106">SF</Option>
              <Option value="0107">공포</Option>
              <Option value="0108">스릴러</Option>
              <Option value="0109">뮤지컬</Option>
              <Option value="0110">애니메이션</Option>
              <Option value="0111">다큐멘터리</Option>
              <Option value="0112">모험</Option>
              <Option value="0113">범죄</Option>
              <Option value="0114">가족</Option>
              <Option value="0115">판타지</Option>
              <Option value="0116">누와르</Option>
              <Option value="0117">역사</Option>
              <Option value="0118">미스터리</Option>
              <Option value="0119">스포츠</Option>
              <Option value="0120">전쟁</Option>
              <Option value="0121">서부극</Option>
              
            </Select>
            <p>{genre}</p>
          </span>
      </div>
      <Divider/>

      <div className= "part2">
          <span>등급 :</span>
          <span>
          <Select defaultValue="0200" style={{ paddingLeft: 10, minwidth: 40 }} onChange={onRating}>
              <Option value="0200">등급</Option>
              <Option value="0201">전체관람가</Option>
              <Option value="0202">12세 이상 관람가</Option>
              <Option value="0203">15세 이상 관람가</Option>
              <Option value="0204">청소년 관람불가</Option>
          </Select>
            <p>{rating}</p>
          </span>
      </div>
      <Divider/>

      <div className= "part2">
          <span>상영형태 :</span>
          <span>
          <Select defaultValue="0500" style={{ paddingLeft: 10, minWidth: 60 }} onChange={onForm}>
              <Option value="0500">상영형태</Option>
              <Option value="0501">2D</Option>
              <Option value="0502">4D</Option>
              <Option value="0503">IMAX</Option>
          </Select>
            <p>{form}</p>
          </span>
      </div>
      <Divider/>

      <div className= "part2">
          <span>더빙여부 :</span>
          <span>
            <Radio.Group style={{marginLeft: 10}} onChange={onDub} value={dub}>
              <Radio value={1}>더빙</Radio>
              <Radio value={0}>자막</Radio>
              <Radio value={''}>선택없음(아예 체크하지 않으셔도 됩니다.)</Radio>
            </Radio.Group>
            <p>{dub}</p>
          </span>
      </div>
      <Divider/>

      <div className= "part2">
          <span>소개글 :</span>
          <span>
              <Input 
                placeholder="소개글 입력"
                value={desc}
                onChange={onDesc}
                style={{width: 100, marginLeft:10, minWidth: 200}} />
            <p>{desc}</p>
          </span>
      </div>
      <Divider/>

      <div className= "part2">
          <span>배급사 :</span>
          <span>
              <Input 
                placeholder="배급사 입력"
                value={company}
                onChange={onCompany}
                style={{width: 100, marginLeft:10, minWidth: 200}} />
            <p>{company}</p>
          </span>
      </div>
      <Divider/>

      <div className= "part2">
          <span>개봉일자 :</span>
          <span>
          <DatePicker format="YYYYMMDD" style={{marginLeft: 10}} onChange={onDate} />
            <p>{date}</p>
          </span>
      </div>
      <Divider></Divider>

      <div className= "part2">
          <span>나라 :</span>
          <span>
              <Input 
                placeholder="제작된 나라 입력"
                value={country}
                onChange={onCountry}
                style={{width: 100, marginLeft:10, minWidth: 200}} />
            <p>{country}</p>
          </span>
      </div>
      <Divider/>
      
      <div className= "part2">
      <span>스틸컷/예고편 :</span>
          <span>
          <Upload {...props}>
                <Button style={{marginLeft: 10}} icon={<UploadOutlined />}>이미지 업로드</Button>
          </Upload>
          </span>
      </div>
      <Divider/>

      <div className= "part2">
      <span>포스터 :</span>
          <span>
          <Upload {...props}>
                <Button style={{marginLeft: 10}} icon={<UploadOutlined />}>이미지 업로드</Button>
          </Upload>
          </span>
      </div>
      <Divider/>

    <div className="App">
      <Button type="primary" nClick={completemessage}> 등록 완료 </Button>
    </div>

    </div>
  );
}

export default InsertMovie;

