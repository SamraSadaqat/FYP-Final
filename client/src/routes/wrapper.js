import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Auth } from "redux/auth/auth";

export const ProtectedRoutes = () => {
  const auth = Auth.getAuth();
  const navigation = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigation("/");
    }
  }, [auth]);

  return auth ? <Outlet /> : <Navigate to={"/"} />;
};

export const PublicRoutes = () => {
  const auth = Auth.getAuth();
  useEffect(() => {
    if (!auth) {
      <Outlet />;
    }
  }, [auth]);

  return auth ? <Navigate to={"/admin"} /> : <Outlet />;
};
