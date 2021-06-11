import React, { useState } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import Icon from '@ant-design/icons';

const { Title } = Typography;

function Login(props) {
  const [formErrorMessage, setFormErrorMessage] = useState('')

  return (
    <div className="App">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('이메일이 잘못되었습니다.')
            .required('이메일을 입력해주세요.'),
          password: Yup.string()
            .min(7, '비밀번호는 7자리 이상이어야 합니다.')
            .required('비밀번호를 입력해주세요.'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          alert(`${values.email}님, 반갑습니다.`);
          props.history.push('/MovieGridList');
        }}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <div className="app">
              <Title level={2} style={{ margin: '40px' }}>로그인</Title>
              <div style={{ position: 'relative', width: '350px', margin: '1rem auto', justifyContent: 'center'}}>
                <form onSubmit={handleSubmit} style={{ width: '350px' }}>
                  <text style={{ width: '350px', textAlign: 'left', fontWeight: 'bold', fontSize: '19px' }}>이메일</text>
                  <Form.Item required>
                    <Input
                      id="email"
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="이메일을 입력하세요."
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.email && touched.email ? 'text-input error' : 'text-input'
                      }
                    />
                    {errors.email && touched.email && (
                      <div className="input-feedback">{errors.email}</div>
                    )}
                  </Form.Item>

                  <text style={{ width: '350px', textAlign: 'left', fontWeight: 'bold', fontSize: '19px' }}>비밀번호</text>
                  <Form.Item required>
                    <Input
                      id="password"
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="비밀번호를 입력하세요."
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.password && touched.password ? 'text-input error' : 'text-input'
                      }
                    />
                    {errors.password && touched.password && (
                      <div className="input-feedback">{errors.password}</div>
                    )}
                  </Form.Item>

                  {formErrorMessage && (
                    <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{formErrorMessage}</p></label>
                  )}

                  <Form.Item>
                    <div>
                      <Button type="primary" htmlType="submit" className="login-form-button" style={{ minWidth: '100%' }} disabled={isSubmitting} onSubmit={handleSubmit}>
                        로그인
                      </Button>
                    </div>
                    혹은 <a href="/Signup">회원가입</a>
                  </Form.Item>
                </form>
              </div>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
