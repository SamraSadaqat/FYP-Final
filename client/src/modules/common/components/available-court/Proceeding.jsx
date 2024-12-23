import "./available-court.scss";

import { Button, Col, Image,Row } from "antd";
import Check from "assets/images/check.svg";
import DropDown from "assets/images/dropdown.svg";
import Plus from "assets/images/plus.svg";
import Slider1 from "assets/images/rule-slider-1.jpg";
import Voucher from "assets/images/voucher.svg";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import BackPage from "../back-page/BackPage";
import Footer from "../Footer";

const Proceeding = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <BackPage title="Booking" />
      <div className="container custom-container-pt section-pb">
        <div className="court-row proceding">
          <div className="court-col">
            <a
              href="#/"
              onClick={() => {
                return false;
              }}
            >
              <div className="court-img">
                <Image preview={false} src={Slider1} width="100%" />
              </div>
              <div className="court-content">
                <h4>Full Dome Pitch 1</h4>
                <Row>
                  <Col span={20}>
                    <p className="gray-text-color d-flex align-items-center">
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="calendar"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                      </svg>
                      <span>06-06-2023</span>
                    </p>
                    <p className="gray-text-color d-flex align-items-center">
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="clock-circle"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                      </svg>
                      <span> 02:00 PM | 04:00 PM</span>
                    </p>
                  </Col>
                  <Col span={4}>
                    <p className="cancel text-right">x Cancel</p>
                  </Col>
                </Row>
              </div>
            </a>
          </div>
        </div>
        <hr />
        <div className="add-a-referee">
          <Row align="center" className="add-a-referee-col">
            <Col span={1}>
              <Image preview={false} src={Plus} width="33px" />
            </Col>
            <Col span={22}>
              <Row>
                <Col>
                  <h4>Add a Referee</h4>
                </Col>
                <Col>
                  <p className="primary-text-color">PKR 1,990</p>
                </Col>
              </Row>
            </Col>
            <Col span={1}>
              {" "}
              <img src={Check} alt="plus" />
            </Col>
          </Row>
        </div>
        <hr />
        <div className="add-a-referee">
          <Row align="middle" className="add-a-referee-col rent-col">
            <Col span={1}>
              <Image preview={false} src={Plus} width="33px" />
            </Col>
            <Col span={22}>
              <Row align="middle">
                <Col>
                  <h4>Rent Equipment</h4>
                </Col>
                <Col>
                  <p className="primary-text-color">Clear</p>
                </Col>
              </Row>
            </Col>
            <Col span={1}>
              <Image
                preview={false}
                src={DropDown}
                width="40px"
                onClick={handleClick}
                className="cursor"
              />
            </Col>
          </Row>
          <Row
            className="add-a-inner-referee align-items-center"
            style={{ display: toggle ? "flex" : "none" }}
          >
            <Col span={10}>
              <p>Balls</p>
            </Col>
            <Col span={4}>
              <div className="duration mb-2">
                <Button className="btn-round  minus-btn" shape="circle">
                  <svg
                    width="31"
                    height="5"
                    viewBox="0 0 31 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.421875"
                      y="0.785034"
                      width="30.1963"
                      height="3.35514"
                      rx="1.67757"
                      fill="white"
                    />
                  </svg>
                </Button>
                <span className="btn-span">2</span>
                <Button className="btn-round plus-btn" shape="circle">
                  <svg
                    width="32"
                    height="31"
                    viewBox="0 0 32 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="17.6738"
                      y="0.364502"
                      width="30.1963"
                      height="3.35514"
                      rx="1.67757"
                      transform="rotate(90 17.6738 0.364502)"
                      fill="white"
                    />
                    <rect
                      x="0.898438"
                      y="13.7851"
                      width="30.1963"
                      height="3.35514"
                      rx="1.67757"
                      fill="white"
                    />
                  </svg>
                </Button>
              </div>
            </Col>
            <Col span={10}>
              {" "}
              <p className="text-right primary-text-color">PKR 2,500</p>
            </Col>
          </Row>
          <Row
            className="add-a-inner-referee align-items-center"
            style={{ display: toggle ? "flex" : "none" }}
          >
            <Col span={10}>
              <p>Balls</p>
            </Col>
            <Col span={4}>
              <div className="duration mb-2">
                <Button className="btn-round  minus-btn" shape="circle">
                  <svg
                    width="31"
                    height="5"
                    viewBox="0 0 31 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.421875"
                      y="0.785034"
                      width="30.1963"
                      height="3.35514"
                      rx="1.67757"
                      fill="white"
                    />
                  </svg>
                </Button>
                <span className="btn-span">2</span>
                <Button className="btn-round plus-btn" shape="circle">
                  <svg
                    width="32"
                    height="31"
                    viewBox="0 0 32 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="17.6738"
                      y="0.364502"
                      width="30.1963"
                      height="3.35514"
                      rx="1.67757"
                      transform="rotate(90 17.6738 0.364502)"
                      fill="white"
                    />
                    <rect
                      x="0.898438"
                      y="13.7851"
                      width="30.1963"
                      height="3.35514"
                      rx="1.67757"
                      fill="white"
                    />
                  </svg>
                </Button>
              </div>
            </Col>
            <Col span={10}>
              {" "}
              <p className="text-right primary-text-color">PKR 2,500</p>
            </Col>
          </Row>

          <a
            href="#/"
            className="d-flex align-items-center fs-md  primary-text-color voucher-btn"
          >
            <Image preview={false} src={Voucher} width="42px" />
            <span className="ml6">Apply a Voucher</span>
          </a>
        </div>

        <div className="total-booking-cost mt-1">
          <Row>
            <Col span={12}>
              <h3 className="primary-text-color">Total Booking Cost</h3>
            </Col>
            <Col span={12}>
              <h5 className="primary-text-color text-right font-400 ">
                PKR 11,228
              </h5>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col span={12}>
              <h5 className="font-400 gray-text-color">Full Dome Pitch 1</h5>
            </Col>
            <Col span={12}>
              <h5 className="text-right font-400 gray-text-color">PKR 8,000</h5>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <h5 className="font-400 gray-text-color">Football Referee</h5>
            </Col>
            <Col span={12}>
              <h5 className="text-right font-400 gray-text-color">PKR 1,990</h5>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <h5 className="font-400 gray-text-color">SST 13%</h5>
            </Col>
            <Col span={12}>
              <h5 className="text-right font-400 gray-text-color">PKR 1,228</h5>
            </Col>
          </Row>
          <Button type="primary" htmlType="submit" block className="btn mt-1">
            <NavLink to="/payment">Proceed</NavLink>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Proceeding;
