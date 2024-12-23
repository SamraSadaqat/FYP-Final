import "./booked.scss";

import { Button, Col, Image, Row } from "antd";
import Football from "assets/images/football-fusball.svg";
import Logo from "assets/images/footer-logo.png";
import React from "react";
import { NavLink } from "react-router-dom";

import BackPage from "../back-page/BackPage";
import Footer from "../Footer";

const Booked = () => {
  return (
    <>
      <BackPage title="Booked" />
      <div className="booked-page container custom-container-pt section-pb ">
        <Row>
          <Col span={10} offset={7}>
            <div className="text-center">
              <Image preview={false} src={Logo} />
              <h2>Thank you for booking</h2>
            </div>
            <div className="thank-you-box">
              <div className="p10">
                <h4 className="thank-you-main-title">Full Dome Pitch 1</h4>
                <div className="thank-you-box-inner d-flex">
                  <div className="img-box">
                    <Image preview={false} src={Football} width="100%" />
                    <span> Football/Futsal </span>
                  </div>
                  <div className="content-box">
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
                      <span className="ml3">06-06-2023</span>
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
                      <span className="ml3"> 02:00 PM | 04:00 PM</span>
                    </p>
                    <p>At Legends Arena</p>
                  </div>
                </div>
              </div>
              <div className="thank-you-box-footer d-flex align-items-center justify-center ">
                <svg
                  width="26"
                  height="30"
                  viewBox="0 0 26 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.1636 29.4358C19.9908 29.4358 18.9939 29.0113 18.1729 28.1624C17.3519 27.3134 16.9414 26.2826 16.9414 25.0698C16.9414 24.9 16.9532 24.724 16.9766 24.5416C17.0001 24.3601 17.0353 24.1966 17.0822 24.0511L7.16006 18.0843C6.7613 18.4482 6.31563 18.7329 5.82304 18.9386C5.33045 19.1453 4.81441 19.2486 4.27491 19.2486C3.10208 19.2486 2.10518 18.8241 1.2842 17.9752C0.463224 17.1263 0.0527344 16.0954 0.0527344 14.8827C0.0527344 13.6699 0.463224 12.6391 1.2842 11.7901C2.10518 10.9412 3.10208 10.5167 4.27491 10.5167C4.81441 10.5167 5.33045 10.6196 5.82304 10.8252C6.31563 11.0319 6.7613 11.3171 7.16006 11.681L17.0822 5.71419C17.0353 5.56866 17.0001 5.40518 16.9766 5.22375C16.9532 5.04136 16.9414 4.86526 16.9414 4.69548C16.9414 3.48272 17.3519 2.45187 18.1729 1.60294C18.9939 0.75401 19.9908 0.329544 21.1636 0.329544C22.3364 0.329544 23.3333 0.75401 24.1543 1.60294C24.9753 2.45187 25.3858 3.48272 25.3858 4.69548C25.3858 5.90824 24.9753 6.93908 24.1543 7.78801C23.3333 8.63694 22.3364 9.06141 21.1636 9.06141C20.6241 9.06141 20.1081 8.95808 19.6155 8.75143C19.1229 8.54575 18.6772 8.26099 18.2785 7.89716L8.35635 13.8639C8.40326 14.0095 8.43845 14.1729 8.4619 14.3544C8.48536 14.5368 8.49709 14.7129 8.49709 14.8827C8.49709 15.0524 8.48536 15.228 8.4619 15.4095C8.43845 15.5919 8.40326 15.7558 8.35635 15.9014L18.2785 21.8681C18.6772 21.5043 19.1229 21.2191 19.6155 21.0124C20.1081 20.8067 20.6241 20.7039 21.1636 20.7039C22.3364 20.7039 23.3333 21.1284 24.1543 21.9773C24.9753 22.8262 25.3858 23.8571 25.3858 25.0698C25.3858 26.2826 24.9753 27.3134 24.1543 28.1624C23.3333 29.0113 22.3364 29.4358 21.1636 29.4358Z"
                    fill="black"
                  />
                </svg>

                <h4 className="ml4 mb1">Share</h4>
              </div>
            </div>
            <Button type="primary" htmlType="submit" block className="btn mt-1">
              <NavLink to="/">Go Back To Home</NavLink>
            </Button>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default Booked;
