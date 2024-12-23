import React from "react";

import BackPage from "../components/back-page/BackPage";
import Footer from "../components/Footer";
import UpcomingEvents from "../components/upcoming-events/UpcomingEvents";

const Booking = () => {
  return (
    <>
      <BackPage title="Activities" />
      <section className="section-pt">
        <UpcomingEvents title="Upcoming Events " />
      </section>
      <UpcomingEvents title="Upcoming Classes " />
      <Footer />
    </>
  );
};

export default Booking;
