import { Col, Form, Input, Row } from "antd";
import { AUTH_MODULES, REGEX } from "constants/constants";
import AppLoader from "elements/AppLoader/AppLoader";
import Button from "elements/Button/Button";
import { notification } from "elements/Notification/Notification";
import { NotificationTypes } from "elements/Notification/notificationConstants";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "redux/auth/axios";
import logger from "redux/helpers/logger";
import { resources } from "resources/app_resources";
const ForgotPasswordPageView = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [errorState, setErrorState] = useState();
  const [successState, setSuccesState] = useState();
  const navigate = useNavigate();

  const VALID_EMAIL = new RegExp(REGEX.EMAIL);

  const onFinish = (values) => {
    logger.log("Success:", values);
    forgotPasswordCall(values);
  };

  const onFinishFailed = (errorInfo) => {
    logger.log("Failed:", errorInfo);
  };

  const forgotPasswordCall = async (values) => {
    const obj = {
      userName: values.userName,
      isWeb: true,
    };
    const url = `/Accounts/ForgotPassword`;

    setLoading(true);
    axios
      .post(url, obj, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setLoading(false);
        setSuccesState({
          message: res.data.message,
          statusCode: res.data.statusCode,
        });
        navigate("/auth/login");
      })
      .catch((err) => {
        setLoading(false);
        setErrorState(err.response);
      });
  };

  useEffect(() => {
    if (errorState && Object.entries(errorState).length > 0) {
      notification(
        NotificationTypes.ERROR,
        errorState.statusText,
        errorState.data.errors[0],
        5
      );
      form.resetFields();
      setErrorState(null);
    }
    if (successState && Object.entries(successState).length > 0) {
      notification(
        NotificationTypes.SUCCESS,
        "Success",
        "New password to your inbox. Please check your email.",
        5
      );
      setSuccesState(null);
    }
  }, [errorState, successState]);

  return (
    <div className="auth-pages">
      <Row>
        <Col span={8} offset={8}>
          <div className="login-wrapper custom-antd-form">
            <h1 className="text-center mb-2 text-uppercase dark-gray-text-color">
              {AUTH_MODULES.FORGOT_PASSWORD}{" "}
            </h1>
            <Form
              form={form}
              name="forgotPassword"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="userName"
                rules={[
                  {
                    required: true,
                    message: "Please enter a valid email address.",
                  },
                  {
                    pattern: VALID_EMAIL,
                    message: "Please enter a valid email address.",
                  },
                ]}
              >
                <Input placeholder={resources.EMAIL_PLACEHOLDER} />
              </Form.Item>

              <Form.Item>
                {loading ? (
                  <AppLoader size="large">
                    <Button style={{ width: "100%" }} className="submit-btn">
                      {AUTH_MODULES.SEND}
                    </Button>
                  </AppLoader>
                ) : (
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="submit-btn"
                    style={{ width: "100%" }}
                  >
                    {AUTH_MODULES.SEND}
                  </Button>
                )}
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ForgotPasswordPageView;
