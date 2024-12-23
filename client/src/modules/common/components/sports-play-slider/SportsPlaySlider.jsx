import "./sports-play-slider.scss";
import { useNavigate } from "react-router-dom";
import { Image } from "antd";
import history from "assets/images/history.png";
// import Football from "assets/images/footerbal-slide.png";
import excercise from "assets/images/excercise.png";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

const SportsPlaySlider = () => {
const navigate = useNavigate();
const handler2=()=>{
navigate('/user/excercise');
}
const handler3=()=>{
  navigate('/user/learning');
}
  return (
    <>
      <section className="section-pb">
        <ScrollContainer className="scroll-container">
          <div className="container">
            <div className="sport-play-slider-row">
              <div className="sport-play-slider-col orange">
                <div className="inner">
                  <div className="sport-play-slider-image men">
                    <Image preview={false} src={history} width="100%" />
                  </div>
                  <div className="sport-play-slider-content">
                    <h3 style={{cursor: 'pointer'}} onClick={handler3}>
                      Learning Prospect
                      
                    </h3>
                    <p>Learn more about the diagnosis</p>
                  </div>
                </div>
              </div>
              <div className="sport-play-slider-col blue righ-image">
                <div className="inner">
                  <div className="sport-play-slider-content">
                    <h3 style={{cursor: 'pointer'}} onClick={handler2} >Excercise Videos</h3>
                    <p>Empowering CKD Warriors: Exercise for Strength & Wellness</p>
                  </div>
                  <div className="sport-play-slider-image girl">
                    <Image preview={false} src={excercise} width="45%" />
                  </div>
                </div>
              </div>
              
              
              
            </div>
          </div>
        </ScrollContainer>
      </section>
    </>
  );
};

export default SportsPlaySlider;
