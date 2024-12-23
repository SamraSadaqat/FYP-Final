import "./payment-method.scss";

import { Button, Col, Image, Radio, Row, Space } from "antd";
import DebitCard from "assets/images/debit-card.svg";
import EasyPaisa from "assets/images/easypaisa.svg";
import JazzCash from "assets/images/jazzcash.svg";
import MasterCard from "assets/images/mastercard.svg";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import BackPage from "../back-page/BackPage";

const PaymentMethod = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <BackPage title="Payment Method" />
      <div className="payment-page container section-pb section-pt mt10">
        <Row>
          <Col span={12} offset={6}>
            <Row>
              <Col span={24}>
                <Radio.Group onChange={onChange} value={value}>
                  <Space direction="vertical">
                    <Radio value={1}>
                      <Row>
                        <Col>
                          <div className="image">
                            <Image
                              preview={false}
                              src={JazzCash}
                              width="70px"
                            />
                          </div>
                        </Col>
                        <Col>
                          <h3>Jazz Cash</h3>
                          <p>Pay With Your Jazz Cash Wallet</p>
                        </Col>
                      </Row>
                    </Radio>
                    <Radio value={2}>
                      <Row>
                        <Col>
                          <div className="image">
                            <Image
                              preview={false}
                              src={EasyPaisa}
                              width="53px"
                            />
                          </div>
                        </Col>
                        <Col>
                          <h3>Easy paisa</h3>
                          <p>Pay With Your Easypaisa Wallet</p>
                        </Col>
                      </Row>
                    </Radio>
                    <Radio value={3}>
                      <Row>
                        <Col>
                          <div className="image">
                            <Image
                              preview={false}
                              src={MasterCard}
                              width="68px"
                            />
                          </div>
                        </Col>
                        <Col>
                          <h3>MasterCard 9821</h3>
                          <p>08/2024</p>
                        </Col>
                      </Row>
                    </Radio>
                    <Radio value={4}>
                      <Row>
                        <Col>
                          <div className="image">
                            <Image
                              preview={false}
                              src={DebitCard}
                              width="64px"
                            />
                          </div>
                        </Col>
                        <Col>
                          <h3>Add Credit/Debit Card</h3>
                          <p>Add New Credit/Debit Card</p>
                        </Col>
                      </Row>
                    </Radio>
                  </Space>
                </Radio.Group>
              </Col>
            </Row>
            <Button type="primary" htmlType="submit" block className="btn mt-1">
              <NavLink to="/payment-card">Pay & Book</NavLink>
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PaymentMethod;
