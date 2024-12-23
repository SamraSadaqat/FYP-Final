import "./legend-arena.scss";

import { Col, Image,Row } from "antd";
import Slide1 from "assets/images/lg-arena-slide-1.png";
import Slide2 from "assets/images/lg-arena-slide-2.png";
import Slide3 from "assets/images/lg-arena-slide-3.png";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

const LegendArena = () => {
  return (
    <>
       <section className="section-pb">
        <div className="container">
          <Row className="primary-title-row">
            <Col span={12}>
              <h3>Nephro Health Coach</h3>
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
            <div className="custom-row">
              <div className="custom-col">
                <a href="#/" className="custom-col-img">
                  <Image preview={false} src={Slide1} width="100%" />
                </a>
              </div>
              <div className="custom-col">
                <a href="#/" className="custom-col-img">
                  <Image preview={false} src={Slide2} width="100%" />
                </a>
              </div>
              <div className="custom-col">
                <a href="#/" className="custom-col-img">
                  <Image preview={false} src={Slide3} width="100%" />
                </a>
              </div>
              <div className="custom-col">
                <a href="#/" className="custom-col-img">
                  <Image preview={false} src={Slide1} width="100%" />
                </a>
              </div>
              <div className="custom-col">
                <a href="#/" className="custom-col-img">
                  <Image preview={false} src={Slide2} width="100%" />
                </a>
              </div>
              <div className="custom-col">
                <a href="#/" className="custom-col-img">
                  <Image preview={false} src={Slide3} width="100%" />
                </a>
              </div>
            </div>
          </div>
        </ScrollContainer>
      </section> 
    </>
  );
};

export default LegendArena;
