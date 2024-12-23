import { Carousel, Image, Tabs } from "antd";
import Slider1 from "assets/images/rule-slider-1.jpg";
import Slider2 from "assets/images/rule-slider-2.jpg";
import React from "react";
import logger from "redux/helpers/logger";

import BackPage from "../components/back-page/BackPage";
import Footer from "../components/Footer";

const Rules = () => {
  function onChange(a, b, c) {
    logger.log(a, b, c);
  }

  const { TabPane } = Tabs;

  function callback(key) {
    logger.log(key);
  }

  return (
    <>
      <BackPage title="Rule" />
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
      <div className="main-wrapper container">
        <main className="page rules-page">
        </main>
      </div>
      <section className="container">
        <h3 className="secondary-title-style">Sports Rules</h3>
        <Tabs defaultActiveKey="1" onChange={callback} className="rules-tabs">
          <TabPane tab="Football" key="1">
            <ul>
              <li>
                Each team must have five players on the court at all times,
                including a goalkeeper.
              </li>
              <li>
                The game begins with a kickoff from the center of the court.
              </li>
              <li>
                A goal is scored when the ball fully crosses the goal line
                between the goalposts and under the crossbar.
              </li>
              <li>
                If the ball goes out of bounds, it is returned to play with a
                throw-in, taken by the team that did not touch the ball last.
              </li>
              <li>
                A free kick is awarded if a player commits a foul, such as
                pushing or tripping an opponent.
              </li>
            </ul>
          </TabPane>
          <TabPane tab="Cricket" key="2">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the {`industry's`} standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the {`industry's`} standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </TabPane>
          <TabPane tab="Volleyball" key="3">
            <ul>
              <li>
                Each team must have five players on the court at all times,
                including a goalkeeper.
              </li>
              <li>
                The game begins with a kickoff from the center of the court.
              </li>
              <li>
                A goal is scored when the ball fully crosses the goal line
                between the goalposts and under the crossbar.
              </li>
              <li>
                If the ball goes out of bounds, it is returned to play with a
                throw-in, taken by the team that did not touch the ball last.
              </li>
              <li>
                A free kick is awarded if a player commits a foul, such as
                pushing or tripping an opponent.
              </li>
            </ul>
          </TabPane>
          <TabPane tab="Tennis" key="4">
            <ul>
              <li>
                Each team must have five players on the court at all times,
                including a goalkeeper.
              </li>
              <li>
                The game begins with a kickoff from the center of the court.
              </li>
              <li>
                A goal is scored when the ball fully crosses the goal line
                between the goalposts and under the crossbar.
              </li>
              <li>
                If the ball goes out of bounds, it is returned to play with a
                throw-in, taken by the team that did not touch the ball last.
              </li>
              <li>
                A free kick is awarded if a player commits a foul, such as
                pushing or tripping an opponent.
              </li>
            </ul>
          </TabPane>
          <TabPane tab="Hockey" key="5">
            <ul>
              <li>
                Each team must have five players on the court at all times,
                including a goalkeeper.
              </li>
              <li>
                The game begins with a kickoff from the center of the court.
              </li>
              <li>
                A goal is scored when the ball fully crosses the goal line
                between the goalposts and under the crossbar.
              </li>
              <li>
                If the ball goes out of bounds, it is returned to play with a
                throw-in, taken by the team that did not touch the ball last.
              </li>
              <li>
                A free kick is awarded if a player commits a foul, such as
                pushing or tripping an opponent.
              </li>
            </ul>
          </TabPane>
          <TabPane tab="Track" key="6">
            <ul>
              <li>
                Each team must have five players on the court at all times,
                including a goalkeeper.
              </li>
              <li>
                The game begins with a kickoff from the center of the court.
              </li>
              <li>
                A goal is scored when the ball fully crosses the goal line
                between the goalposts and under the crossbar.
              </li>
              <li>
                If the ball goes out of bounds, it is returned to play with a
                throw-in, taken by the team that did not touch the ball last.
              </li>
              <li>
                A free kick is awarded if a player commits a foul, such as
                pushing or tripping an opponent.
              </li>
            </ul>
          </TabPane>
          <TabPane tab="Padel" key="7">
            <ul>
              <li>
                Each team must have five players on the court at all times,
                including a goalkeeper.
              </li>
              <li>
                The game begins with a kickoff from the center of the court.
              </li>
              <li>
                A goal is scored when the ball fully crosses the goal line
                between the goalposts and under the crossbar.
              </li>
              <li>
                If the ball goes out of bounds, it is returned to play with a
                throw-in, taken by the team that did not touch the ball last.
              </li>
              <li>
                A free kick is awarded if a player commits a foul, such as
                pushing or tripping an opponent.
              </li>
            </ul>
          </TabPane>
        </Tabs>
      </section>
      <Footer />
    </>
  );
};

export default Rules;
