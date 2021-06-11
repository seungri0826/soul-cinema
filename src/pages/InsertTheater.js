import React, {useState, useCallback} from 'react';
import '../App.css';
import { Button, Divider, Input, Select, Upload, message } from 'antd';
import 'antd/dist/antd.css';
import { UploadOutlined } from '@ant-design/icons';

function InsertTheater({history}) {
    
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

    //업로드 이미지 저장법...
    const [form,setForm]=useState('');
    const [row, setRow]=useState();
    const [column,setColumn]=useState();

    const { Option } = Select;
    
    const completemessage=()=>{
        alert('등록이 완료되었습니다.')
    }

    function onForm(value) {
        setForm(value);
      }

    const onRow=useCallback(e=>{
        setRow(e.target.value);
    }, []);

    const onColumn=useCallback(e=>{
        setColumn(e.target.value);
    }, []);

    
    return(
    <div className="App">

    {/*<div className="black-nav">
        <div onClick={ () => {history.push("/")}}>소울시네마 영화 예매 시스템</div>
    </div>*/}

    <div className="list">
        <p>상영관 등록</p>
    </div>

    <div className= "part2">
          <span>상영형태 :</span>
          <span>
          <Select defaultValue="0500" style={{ paddingLeft: 10, minwidth: 40 }} onChange={onForm}>
              <Option value="0200">상영형태</Option>
              <Option value="0501">2D</Option>
              <Option value="0502">4D</Option>
              <Option value="0503">IMAX</Option>
          </Select>
            <p>{form}</p>
          </span>
      </div>
      <Divider/>

      <div className= "part2">
          <span>가로 :</span>
          <span>
              <Input 
                placeholder="가로(숫자) 입력"
                value={row}
                onChange={onRow}
                style={{width: 100, marginLeft:10, minWidth: 200}} />
            <p>{row}</p>
          </span>
      </div>
      <Divider/>

      <div className= "part2">
      <span>세로 :</span>
          <span>
              <Input 
                placeholder="세로(숫자) 입력"
                value={column}
                onChange={onColumn}
                style={{width: 100, marginLeft:10, minWidth: 200}} />
            <p>{column}</p>
          </span>
      </div>
      <Divider/>

      <div className= "part2">
      <span>상영관 이미지 :</span>
          <span>
          <Upload {...props}>
                <Button style={{marginLeft: 10}} icon={<UploadOutlined />}>이미지 업로드</Button>
          </Upload>
          </span>
      </div>
      <Divider/>


    <div className="App">
      <Button onClick={completemessage}> 등록 완료 </Button>
    </div>

    </div>
    );
}

export default InsertTheater;

