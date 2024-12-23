import {
  Button,
  Carousel,
  Col,
  DatePicker,
  Form,
  Image,
  Row,
  TimePicker,
} from "antd";
import BackButton from "assets/images/bacl-btn.svg";
import Phone from "assets/images/phone.svg";
import Slider1 from "assets/images/rule-slider-1.jpg";
import Slider2 from "assets/images/rule-slider-2.jpg";
import SocialShare from "assets/images/social-share.svg";
import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logger from "redux/helpers/logger";

import Footer from "../Footer";
import LegendArena from "../legend-arena/LegendArena";
import SportsCategory from "../sports-category/SportsCategory";

const AvailableCourtSingle = () => {
  const nav = useNavigate();
  function onChange(a, b, c) {
    logger.log(a, b, c);
  }

  return (
    <>
      <Row className="page-top-single-row">
        <Col span={8}>
          <Image
            preview={false}
            src={BackButton}
            width="49px"
            className="back-btn"
            onClick={() => nav(-1)}
          />
        </Col>
      </Row>

      <Carousel afterChange={onChange}>
        <div className="img-slider">
          <Image preview={false} src={Slider1} width="100%" />
        </div>
        <div className="img-slider">
          <Image preview={false} src={Slider2} width="100%" />
        </div>
        <div className="img-slider">
          <Image preview={false} src={Slider1} width="100%" />
        </div>
        <div className="img-slider">
          <Image preview={false} src={Slider2} width="100%" />
        </div>
      </Carousel>

      <div className="single-main-content container section-pt">
        <Row className="mb-2">
          <Col span={16}>
            <h1>Full Dome Pitch 1</h1>
            <p className="gray-text-color">9-a Side Pitch</p>
          </Col>
          <Col span={8}>
            <p className="primary-text-color text-right">PKR 4,000 Per Hour</p>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col span={11}>
            <Form.Item>
              <Button type="primary" htmlType="submit" block className="btn">
                Book now
              </Button>
            </Form.Item>
          </Col>
          <Col span={2}></Col>
          <Col span={11}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                className="btn secondary-btn btn-icon"
              >
                <Image preview={false} src={Phone} width="26px" />
                <span className="ml3">Call Now</span>
              </Button>
            </Form.Item>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col span={24}>
            <h3 className="fs-lg">Timings</h3>
            <p>All Days - 8 AM to 1 AM</p>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col span={11}>
            <label className="label">Date</label>
            <DatePicker
              onChange={onChange}
              direction="vertical"
              style={{ width: "100%" }}
              className="custom-date-picker mb-2"
            />
          </Col>
          <Col span={2}></Col>
          <Col span={11}>
            <label className="label">Starting Time</label>
            <TimePicker
              style={{ width: "100%" }}
              className="custom-time-picker mb-2"
              showTime={{ format: "hh:mm A", use12Hours: true }}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col span={24}>
            <h3 className="fs-lg">Duration</h3>
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
              <span className="btn-span">2 Hrs</span>
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
        </Row>
        <Row className="mb-2">
          <Col span={12}>
            <h3 className="fs-lg">Total Booking Cost</h3>
          </Col>
          <Col span={12}>
            <p className="primary-text-color text-right">PKR 4,000 Per Hour</p>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col span={24}>
            <Form.Item>
              <Button type="primary" htmlType="submit" block className="btn">
                <NavLink to="/proceeding">Book now</NavLink>
              </Button>
            </Form.Item>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col span={24}>
            <h3 className="fs-lg">About Venue</h3>
            <p>
              TS Builders has been part of the construction industry since 1984.
              With an experience of 35 years, TS Builders has expanded to become
              the industry leader in turnkey sports construction, renovation,
              along with our conventional civil works division.
            </p>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col span={24}>
            <h3 className="fs-lg">Facilities</h3>
            <ul className="menu-style-two">
              <li>
                <span className="checkmark">
                  <div className="checkmark_stem"></div>
                  <div className="checkmark_kick"></div>
                </span>
                Gym
              </li>
              <li>
                <span className="checkmark">
                  <div className="checkmark_stem"></div>
                  <div className="checkmark_kick"></div>
                </span>
                Cafeteria
              </li>
              <li>
                <span className="checkmark">
                  <div className="checkmark_stem"></div>
                  <div className="checkmark_kick"></div>
                </span>
                Equipments
              </li>
              <li>
                <span className="checkmark">
                  <div className="checkmark_stem"></div>
                  <div className="checkmark_kick"></div>
                </span>
                Video Highlights
              </li>
              <li>
                <span className="checkmark">
                  <div className="checkmark_stem"></div>
                  <div className="checkmark_kick"></div>
                </span>
                Coaches
              </li>
              <li>
                <span className="checkmark">
                  <div className="checkmark_stem"></div>
                  <div className="checkmark_kick"></div>
                </span>
                Parking
              </li>
            </ul>
            <Row>
              <Col span={11}>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    className="btn"
                  >
                    Book now
                  </Button>
                </Form.Item>
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    className="btn secondary-btn btn-icon"
                  >
                    <img src={SocialShare} alt="Phone" /> Share
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <LegendArena />
      <SportsCategory />
      <Footer />
    </>
  );
};

export default AvailableCourtSingle;
