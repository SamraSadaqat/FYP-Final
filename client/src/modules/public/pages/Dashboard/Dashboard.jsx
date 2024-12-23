import AvailableCourt from "modules/common/components/available-court/AvailableCourt";
import Footer from "modules/common/components/Footer";
import Header from "modules/common/components/header/Header";
// import LegendArena from "modules/common/components/legend-arena/LegendArena";
import SportsCategory from "modules/common/components/sports-category/SportsCategory";
// import SportsCategorySlider from "modules/common/components/sports-category-slider/SportsCategorySlider";
// import SportsPlaySlider from "modules/common/components/sports-play-slider/SportsPlaySlider";
// import UpcomingEvents from "modules/common/components/upcoming-events/UpcomingEvents";
import React from "react";
// import Carousel from "../Carousal/Carousel";
import AboutUs from "../About/AboutUs";
import Purpose from "../Purpose/Purpose";
import ServiceComponent from "../ServiceComponent/ServiceComponent";
import Service from "../Service/service";



const Dashboard = () => {
  return (
    <>
      <Header />
      <Service/>
      <ServiceComponent/>
      <SportsCategory />
      {/* <SportsPlaySlider /> */}
      {/* <SportsCategorySlider /> */}
      <AboutUs/>
      <AvailableCourt />
      <Purpose/>

      
      {/* <UpcomingEvents title="Upcoming Events" />  */}
       {/* <LegendArena /> */}
      {/* <LegendArena />  */}
   
      <Footer />
    </>
  );
};

export default Dashboard;
