/*eslint-disable*/
import React from "react";
// import Header from "modules/common/components/header/Header";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Login";
import SignupPage from "./Signup";
import ForgotPasswordPage from "./ForgotPassword";
import { AUTH_ROUTES } from "constants/constants";
import "./Auth.module.scss";
import Header from "modules/common/components/header/Header";
import Footer from "modules/common/components/Footer";

const AuthRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={AUTH_ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={AUTH_ROUTES.SIGN_UP} element={<SignupPage />} />
        <Route
          path={AUTH_ROUTES.FORGOT_PASSWORD}
          element={<ForgotPasswordPage />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default AuthRoutes;
