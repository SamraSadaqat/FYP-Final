import { Col, Form, Input, Row } from "antd";
import { AUTH_MODULES } from "constants/constants";
import AppLoader from "elements/AppLoader/AppLoader";
import Button from "elements/Button/Button";
import { notification } from "elements/Notification/Notification";
import { NotificationTypes } from "elements/Notification/notificationConstants";
import Typography from "elements/Title/Title";
import SocialSignup from "modules/common/components/social-signup/SocialSignup";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "redux/auth/axios";
import { TOKEN } from "redux/constants/constants";
import logger from "redux/helpers/logger";
import { loginReceived } from "redux/modules/common/slices/loginSlice";
import { resources } from "resources/app_resources";

const LoginPageView = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [errorState, setErrorState] = useState();
  const navigate = useNavigate();

  const onFinish = (values) => {
    logger.log("Success:", values);
    loginUser(values);
  };

  const onFinishFailed = (errorInfo) => {
    logger.log("Failed:", errorInfo);
  };

  const loginUser = async (values) => {
    const url = `/user/login`;

    setLoading(true);
    axios
      .post(url, values)
      .then((res) => {
        setLoading(false);
        const { data } = res;
        localStorage.setItem(TOKEN.ACCESS, data.data.accessToken);
        localStorage.setItem("ROLE", data.data.role);

        localStorage.setItem("userName", data.data.firstName + data.data.lastName);
        const userDetails = {
          firstName: data.data.firstName,
          lastName: data.data.lastName,
          id: data.data._id,
          gender: data.data.gender,
          email: data.data.email,
          mobile: data.data.mobile,
          role: data.data.role,
        };
        console.log(userDetails)
        dispatch(loginReceived({ data: userDetails }));
        navigate(userDetails.role === 1? '/admin': '/user' )
      })
      .catch((err) => {
        setLoading(false);
        setErrorState(err.response);
      });
  };

  useEffect(() => {
    if (errorState && Object.entries(errorState).length > 0) {
      const errorMessages = errorState.data?.errors?.join(`\n`) || "An error occurred. Please try again.";
      notification(
        NotificationTypes.ERROR,
        errorState.statusText,
        errorMessages,
        5
      );
      form.resetFields();
      setErrorState(null);
    }
  }, [errorState]);

  // Styles for the container and form
  const pageContainerStyle = {
    backgroundColor: '#f5f5dc',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const formWrapperStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
    padding: '40px',
    width: '100%',
    maxWidth: '400px',
    position: 'relative',
    zIndex: 1,
  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#2c3e50',
    textAlign: 'center',
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '8px',
    borderColor: '#ddd',
    marginBottom:'3px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f0f8ff', // Softer background for input
    width: '100%', // Set the width to 100% of the parent container
  maxWidth: '350px',
  height: '50px',
  };

  const labelStyle = {
    fontWeight: '500',
    color: '#333',
    // marginBottom: 'px',
    // marginTop:'15px',
    textAlign: 'center', // Center the text
    width: '100%', // Ensure label takes full width
  };

  const buttonStyle = {
    backgroundColor: '#2c3e50',
    borderColor: '#2c3e50',
    color: '#f5f5dc',
    width: '100%',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '16px',
    borderRadius: '8px',
    transition: 'background-color 0.3s, transform 0.2s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#1a242f',
    transform: 'scale(1.02)',
  };

  return (
    <div style={pageContainerStyle}>
      <div style={formWrapperStyle}>
        <Typography
          className="text-center mb-2 text-uppercase dark-gray-text-color"
          type="title"
          title={AUTH_MODULES.LOGIN}
          level={3}
          style={titleStyle}
        />

        <Form
          form={form}
          name="loginForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            label={<label style={labelStyle}>{resources.EMAIL_LABEL}</label>}
            rules={[
              {
                required: true,
                message: resources.EMAIL_EMPTY_VALIDATOR,
              },
              {
                type: "email",
                message: resources.EMAIL_VALIDATOR,
              },
            ]}
          >
            <Input 
              type="email" 
              placeholder={resources.EMAIL_PLACEHOLDER} 
              style={inputStyle}
            />
          </Form.Item>
          <Form.Item
            name="password"
            label={<label style={labelStyle}>{resources.PASSWORD_LABEL}</label>}
            className="pass-field"
            rules={[
              {
                required: true,
                message: resources.PASSWORD_EMPTY_VALIDATOR,
              },
            ]}
          >
            <Input.Password
              allowClear
              type="password"
              placeholder={resources.PASSWORD_PLACEHOLDER}
              style={inputStyle}
            />
          </Form.Item>

          <Form.Item>
            {loading ? (
              <AppLoader size="large">
                <Button style={buttonStyle} className="submit-btn">
                  {AUTH_MODULES.LOGIN}
                </Button>
              </AppLoader>
            ) : (
              <Button
                type="primary"
                htmlType="submit"
                className="submit-btn"
                style={buttonStyle}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                  e.target.style.transform = buttonHoverStyle.transform;
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = buttonStyle.backgroundColor;
                  e.target.style.transform = 'scale(1)';
                }}
              >
                {AUTH_MODULES.LOGIN}
              </Button>
            )}
          </Form.Item>
        </Form>
        <SocialSignup />
        <hr />
        <Row className="py-1">
          <Col span={24} className="text-center">
            <NavLink to="/auth/signup" style={{ color: '#333', fontWeight: '600', textDecoration: 'none' }}>
              {resources.SIGN_UP_FOR_ACCOUNT}
            </NavLink>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LoginPageView;
