import "./sports-play-slider.scss";
import { useNavigate } from "react-router-dom";

import { Image } from "antd";
import encounter from "assets/images/encounter.png";
// import Football from "assets/images/footerbal-slide.png";
import medical from "assets/images/medical.png";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
// import { Link } from "react-router-dom";

const SportsPlaySlider1 = () => {
const navigate = useNavigate();
const handler=()=>{
navigate('/user/patient-encounter');
}
const handler1=()=>{
  navigate('/user/doctors-information');
}
  return (
    <>
      <section className="section-pb">
        <ScrollContainer className="scroll-container">
          <div className="container">
            <div className="sport-play-slider-row">
              <div className="sport-play-slider-col orange">
                <div className="inner">
                  <div className="sport-play-slider-image encounter">
                    <Image preview={false} src={encounter} width="120%" />
                  </div>
                  <div className="sport-play-slider-content">
                   
                    <h3  style={{cursor: 'pointer'}} onClick={handler}> 

                      Patient Encounter 
                      
  
                    </h3>
                    <p>Unveil the Story:Your Health Journey Awaits</p>
                  </div>
                </div>
              </div>
              <div className="sport-play-slider-col blue righ-image">
                <div className="inner">
                  <div className="sport-play-slider-content">
                    <h3 style={{cursor: 'pointer'}} onClick={handler1}> Doctors Information</h3>
                    <p>Meet Your Healing Partner:Doctor Insights Await</p>
                  </div>
                  <div className="sport-play-slider-image medical">
                    <Image preview={false} src={medical} width="40%"  />
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

export default SportsPlaySlider1;
