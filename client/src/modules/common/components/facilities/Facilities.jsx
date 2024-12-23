import "./facilities.scss";

import { Col, Image, Row } from "antd";
import Cafetaria from "assets/images/Facilities/cafetaria.svg";
import Coaches from "assets/images/Facilities/coaches.svg";
import Equipments from "assets/images/Facilities/equipments.svg";
import Gym from "assets/images/Facilities/gym.svg";
import VideoHighlight from "assets/images/Facilities/video-highlights.svg";
import React from "react";

const Facilities = () => {
  return (
    <>
      <section className="section-pb section-pt">
        <h3 className="secondary-title-style">Facilities</h3>
        <Row>
          <Col span={18} offset={3}>
            <div className="facilities-row">
              <div className="d-flex align-items-center facilities-col">
                <span>
                  <Image preview={false} src={Gym} />
                </span>
                <h4>Gym</h4>
              </div>
              <div className="d-flex align-items-center facilities-col">
                <span>
                  <Image preview={false} src={Cafetaria} />
                </span>
                <h4>Cafeteria</h4>
              </div>
              <div className="d-flex align-items-center facilities-col">
                <span>
                  <Image preview={false} src={Coaches} />
                </span>
                <h4>Coaches</h4>
              </div>
              <div className="d-flex align-items-center facilities-col">
                <span>
                  <Image preview={false} src={Equipments} />
                </span>
                <h4>Equipments</h4>
              </div>
              <div className="d-flex align-items-center facilities-col">
                <span>
                  <Image preview={false} src={VideoHighlight} />
                </span>
                <h4>Video Highlights</h4>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Facilities;
