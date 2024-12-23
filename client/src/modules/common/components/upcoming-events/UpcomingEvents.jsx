/*eslint-disable*/
import React from "react";
// import { Row, Col, Image } from "antd";
// import ScrollContainer from "react-indiana-drag-scroll";

// import Event1 from "assets/images/event-1.jpg";
// import Event2 from "assets/images/event-2.jpg";
// import Event3 from "assets/images/event-3.jpg";

import "./upcoming-events.scss";

const UpcomingEvents = ({ title }) => {
  return (
    <>
      {/* <section className="section-pb">
        <div className="container">
          <Row className="primary-title-row">
            <Col span={12}>
              <h3>{title}</h3>
            </Col>
            <Col span={12} className="text-right">
              <a href="#/" className="see-all-btn">
                See all{" "}
                <svg
                  width="10"
                  height="15"
                  viewBox="0 0 15 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.13088 23.2249L12.1025 12.2479L1.12555 1.27627"
                    stroke="#FF4C29"
                    strokeWidth="2.74065"
                  />
                </svg>
              </a>
            </Col>
          </Row>
        </div>
        <ScrollContainer className="scroll-container">
          <div className="container">
            <div className="events-row">
              <div className="custom-col">
                <a href="#/" className="custom-col-img">
                  <Image preview={false} src={Event1} width="100%" />
                </a>
              </div>
              <div className="custom-col">
                <a href="#/" className="custom-col-img">
                  <Image preview={false} src={Event2} width="100%" />
                </a>
              </div>
              <div className="custom-col">
                <a href="#/" className="custom-col-img">
                  <Image preview={false} src={Event3} width="100%" />
                </a>
              </div>
              <div className="custom-col">
                <a href="#/" className="custom-col-img">
                  <Image preview={false} src={Event1} width="100%" />
                </a>
              </div>
              <div className="custom-col">
                <a href="#/" className="custom-col-img">
                  <Image preview={false} src={Event2} width="100%" />
                </a>
              </div>
              <div className="custom-col">
                <a href="#/" className="custom-col-img">
                  <Image preview={false} src={Event3} width="100%" />
                </a>
              </div>
            </div>
          </div>
        </ScrollContainer>
      </section> */}
    </>
  );
};

export default UpcomingEvents;
