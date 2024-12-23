import React from "react";

import AvailableCourt from "../components/available-court/AvailableCourt";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import LegendArena from "../components/legend-arena/LegendArena";
import SportsCategory from "../components/sports-category/SportsCategory";
import SportsCategorySlider from "../components/sports-category-slider/SportsCategorySlider";
import SportsPlaySlider from "../components/sports-play-slider/SportsPlaySlider";
import UpcomingEvents from "../components/upcoming-events/UpcomingEvents";

const Home = () => {
  return (
    <>
      <Header />
      <SportsPlaySlider />
      <SportsCategorySlider />
      <AvailableCourt />
      <UpcomingEvents title="Upcoming Events" />
      <LegendArena />
      <SportsCategory />
      <LegendArena />
      <Footer />
    </>
  );
};

export default Home;
