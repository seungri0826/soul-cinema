import React, { useState } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import Icon from '@ant-design/icons';

const { Title } = Typography;

function Signup (props) {
  const [formErrorMessage, setFormErrorMessage] = useState('')

  return (
    <div className="App">
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',          
          birthday: '',
          phone: '',
          confirmPassword: '',          
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .required('이름을 입력해주세요.'),
          email: Yup.string()
            .email('이메일이 잘못되었습니다.')
            .required('이메일을 입력해주세요.'),
          password: Yup.string()
            .min(7, '비밀번호는 7자리 이상이어야 합니다.')
            .required('비밀번호를 입력해주세요.'),
          birthday: Yup.string()
            .length(8, '생년월일은 YYYYMMDD 형식이어야 합니다.')
            .required('생년월일을 입력해주세요.'),
          phone: Yup.string()
            .length(13, '휴대폰번호는 010-XXXX-XXXX 형식이어야 합니다.')
            .required('휴대폰번호를 입력해주세요.'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
            .required('정확한 비밀번호를 입력해주세요.'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          alert(`${values.name}님, 반갑습니다.\n로그인해주세요.`);
          props.history.push('/Login');
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
              <Title level={2} style={{ margin: '40px' }}>회원가입</Title>
              <div style={{ position: 'relative', width: '350px', margin: '1rem auto', justifyContent: 'center'}}>
                <form onSubmit={handleSubmit} style={{ width: '350px' }}>
                  <text style={{ width: '350px', textAlign: 'left', fontWeight: 'bold', fontSize: '19px' }}>이름</text>
                  <Form.Item required>
                    <Input
                      id="name"
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="이름을 입력하세요."
                      type="string"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.name && touched.name ? 'text-input error' : 'text-input'
                      }
                    />
                    {errors.name && touched.name && (
                      <div className="input-feedback">{errors.name}</div>
                    )}
                  </Form.Item>
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

                  <text style={{ width: '350px', textAlign: 'left', fontWeight: 'bold', fontSize: '19px' }}>비밀번호 확인</text>
                  <Form.Item required>
                    <Input
                      id="confirmPassword"
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="비밀번호를 다시 한 번 입력하세요."
                      type="Password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                      }
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <div className="input-feedback">{errors.confirmPassword}</div>
                    )}
                  </Form.Item>


                  <text style={{ width: '350px', textAlign: 'left', fontWeight: 'bold', fontSize: '19px' }}>생년월일</text>
                  <Form.Item required>
                    <Input
                      id="birthday"
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="생년월일(YYYYMMDD)을 입력하세요."
                      type="string"
                      value={values.birthday}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.birthday && touched.birthday ? 'text-input error' : 'text-input'
                      }
                    />
                    {errors.birthday && touched.birthday && (
                      <div className="input-feedback">{errors.birthday}</div>
                    )}
                  </Form.Item>

                  <text style={{ width: '350px', textAlign: 'left', fontWeight: 'bold', fontSize: '19px' }}>연락처</text>
                  <Form.Item required>
                    <Input
                      id="phone"
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="연락처(010-XXXX-XXXX)를 입력하세요."
                      type="string"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.phone && touched.phone ? 'text-input error' : 'text-input'
                      }
                    />
                    {errors.phone && touched.phone && (
                      <div className="input-feedback">{errors.phone}</div>
                    )}
                  </Form.Item>

                  {formErrorMessage && (
                    <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{formErrorMessage}</p></label>
                  )}

                  <Form.Item>
                    <div>
                      <Button type="primary" htmlType="submit" className="login-form-button" style={{ minWidth: '100%' }} disabled={isSubmitting} onSubmit={handleSubmit}>
                        회원가입
                      </Button>
                    </div>
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

export default Signup;
