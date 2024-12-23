import { Carousel, Col, Image, Row } from "antd";
import Slider1 from "assets/images/rule-slider-1.jpg";
import Slider2 from "assets/images/rule-slider-2.jpg";
import React from "react";
import logger from "redux/helpers/logger";

import AvailableSports from "../components/available-sports/AvailableSports";
import BackPage from "../components/back-page/BackPage";
import Facilities from "../components/facilities/Facilities";
import Footer from "../components/Footer";
import GoogleMap from "../components/google-map/GoogleMap";
import LegendArena from "../components/legend-arena/LegendArena";

const Venue = () => {
  function onChange(a, b, c) {
    logger.log(a, b, c);
  }

  return (
    <>
      <BackPage title="Venue" />
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
      <AvailableSports />
      <div className="container">
        <Facilities />
        <Row className="section-pb">
          <Col span={24} className="text-center">
            <h3 className="secondary-title-style">Venue Location</h3>
            <GoogleMap />
          </Col>
        </Row>
      </div>
      <LegendArena />
      <Footer />
    </>
  );
};

export default Venue;
