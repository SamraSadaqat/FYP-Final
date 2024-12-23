import { Button, Col, DatePicker, Form, Image, Input, Row } from "antd";
import MasterCard from "assets/images/input-mastercard.svg";
import React from "react";
import { NavLink } from "react-router-dom";
import logger from "redux/helpers/logger";

import BackPage from "../back-page/BackPage";
import Footer from "../Footer";

// const onChange = (date, dateString) => {
//   console.log(date, dateString);
// };

const PaymentCard = () => {
  const onFinish = (values) => {
    logger.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    logger.log("Failed:", errorInfo);
  };

  const onChange = (value) => {
    logger.log("changed", value);
  };

  return (
    <>
      <BackPage title="Add New Card" />
      <div className="payment-page container custom-container-pt section-pb custom-antd-form">
        <Row>
          <Col span={10} offset={7}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Full Name"
                name="fullname"
                labelCol={{ span: 24 }}
                rules={[
                  { required: false, message: "Please input your Full Name!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Card Number"
                name="CardNumber"
                labelCol={{ span: 24 }}
                className="input-with-icon"
              >
                <span className="left-icon">
                  <Image preview={false} src={MasterCard} />
                </span>
                <Input type="number" />
              </Form.Item>
              <Row>
                <Col span={11}>
                  <Form.Item
                    label="Validity Period"
                    name="ValidityPeriod"
                    labelCol={{ span: 24 }}
                  >
                    <DatePicker
                      onChange={onChange}
                      direction="vertical"
                      style={{ width: "100%" }}
                      className="custom-date-picker"
                    />
                  </Form.Item>
                </Col>
                <Col span={2}></Col>
                <Col span={11}>
                  <Form.Item label="CVV" name="CVV" labelCol={{ span: 24 }}>
                    <Input type="number" />
                  </Form.Item>
                </Col>
              </Row>

              <p className="gray-text-color text-center fs-lg pt10">
                Enter verification code from SMS or Email, which sent was to you
                to add new card
              </p>
              <div className="send-code-row">
                <div>
                  <Input type="number" />
                </div>
                <div>
                  <Input type="number" />
                </div>
                <div>
                  <Input type="number" />
                </div>
                <div>
                  <Input type="number" />
                </div>
              </div>

              <h3 className="primary-text-color text-center fs-lg mt-1">
                RESEND CODE ( 1:59 )
              </h3>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  className="submit-btn mt-1"
                >
                  <NavLink to="/booked">Save Card</NavLink>
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default PaymentCard;
