import "../available-court/available-court.scss";

import { Col, Image,Row } from "antd";
import AvilableSport1 from "assets/images/av-sport-1.jpg";
import AvilableSport2 from "assets/images/av-sport-2.jpg";
import AvilableSport3 from "assets/images/av-sport-3.jpg";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

const AvailableSports = () => {
  return (
    <>
      <section className="section-pt">
        <Row className="primary-title-row">
          <Col span={24}>
            <h3 className="secondary-title-style mb1">Available Sports</h3>
          </Col>
        </Row>
        <ScrollContainer className="scroll-container">
          <div className="container facilities-col">
            <Row wrap={false} gutter={[30, 30]} className="court-row pb8 pt2">
              <Col className="gutter-row" span={7}>
                <div className="court-col">
                  <a href="#/">
                    <div className="court-img">
                      <Image
                        preview={false}
                        src={AvilableSport1}
                        width="100%"
                        className="img-responsive"
                      />
                    </div>
                    <div className="court-content">
                      <h4>Volleyball</h4>
                      <p>4 couts available</p>
                    </div>
                  </a>
                </div>
              </Col>
              <Col className="gutter-row" span={7}>
                <div className="court-col">
                  <a href="#/">
                    <div className="court-img">
                      <Image
                        preview={false}
                        src={AvilableSport2}
                        width="100%"
                        className="img-responsive"
                      />
                    </div>
                    <div className="court-content">
                      <h4>Cricket</h4>
                      <p>4 pitch available</p>
                    </div>
                  </a>
                </div>
              </Col>
              <Col className="gutter-row" span={7}>
                <div className="court-col">
                  <a href="#/">
                    <div className="court-img">
                      <Image
                        preview={false}
                        src={AvilableSport3}
                        width="100%"
                        className="img-responsive"
                      />
                    </div>
                    <div className="court-content">
                      <h4>Football</h4>
                      <p>4 courts available</p>
                    </div>
                  </a>
                </div>
              </Col>
              <Col className="gutter-row" span={7}>
                <div className="court-col">
                  <a href="#/">
                    <div className="court-img">
                      <Image
                        preview={false}
                        src={AvilableSport1}
                        width="100%"
                        className="img-responsive"
                      />
                    </div>
                    <div className="court-content">
                      <h4>Volleyball</h4>
                      <p>4 couts available</p>
                    </div>
                  </a>
                </div>
              </Col>
              <Col className="gutter-row" span={7}>
                <div className="court-col">
                  <a href="#/">
                    <div className="court-img">
                      <Image
                        preview={false}
                        src={AvilableSport2}
                        width="100%"
                        className="img-responsive"
                      />
                    </div>
                    <div className="court-content">
                      <h4>Cricket</h4>
                      <p>4 pitch available</p>
                    </div>
                  </a>
                </div>
              </Col>
              <Col className="gutter-row" span={7}>
                <div className="court-col">
                  <a href="#/">
                    <div className="court-img">
                      <Image
                        preview={false}
                        src={AvilableSport3}
                        width="100%"
                        className="img-responsive"
                      />
                    </div>
                    <div className="court-content">
                      <h4>Football</h4>
                      <p>4 courts available</p>
                    </div>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </ScrollContainer>
      </section>
    </>
  );
};

export default AvailableSports;
