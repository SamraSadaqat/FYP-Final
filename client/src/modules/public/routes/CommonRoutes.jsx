import AvailableCourtSingle from "modules/common/components/available-court/AvailableCourtSingle";
import Proceeding from "modules/common/components/available-court/Proceeding";
import Booked from "modules/common/components/booked/Booked";
import Facilities from "modules/common/components/facilities/Facilities";
import PaymentCard from "modules/common/components/payment-method/PaymentCard";
import PaymentMethod from "modules/common/components/payment-method/PaymentMethod";
import Booking from "modules/common/pages/Booking";
import Contact from "modules/common/pages/Contact";
import PrivacyPolicy from "modules/common/pages/PrivacyPolicy";
import Rules from "modules/common/pages/Rules";
import Terms from "modules/common/pages/Terms";
import Venue from "modules/common/pages/Venue";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { NOT_FOUND } from "resources/error_handlers";
import Dashboard from "../pages/Dashboard/Dashboard";
const CommonRoutes = () => {
  return (
    <>
      <Routes>
        <Route index path={"/"} element={<Dashboard />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-services" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route
          path="/available-court-single"
          element={<AvailableCourtSingle />}
        />
        <Route path="/proceeding" element={<Proceeding />} />
        <Route path="/payment" element={<PaymentMethod />} />
        <Route path="/payment-card" element={<PaymentCard />} />
        <Route path="/booked" element={<Booked />} />
        <Route path="*" element={<NOT_FOUND />} />

      </Routes>
    </>
  );
};

export default CommonRoutes;
