import BreadCrumbs from "elements/Breadcrumbs/Breadcrumbs";
import Header from "modules/common/components/header/Header";
import LayoutWrapper from "modules/common/components/layout/LayoutWrapper";
import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { NOT_FOUND } from "resources/error_handlers";

import { ADMIN_ROUTES } from "../constants/constants";
import Dashboard from "../pages/Dashboard/Dashboard";

const AdminRoutes = () => {


  return (
    <div className="admin-layout">
      <Header />
      <Routes>
        <Route
          element={
            <LayoutWrapper>
              <BreadCrumbs />
              <Outlet />
            </LayoutWrapper>
          }
        >
          <Route index element={<Dashboard />} />
          {React.Children.toArray(
            ADMIN_ROUTES.map(({ Component, Path }) => (
              <Route
                path={Path}
                element={
                  <React.Fragment>
                    <Component />
                  </React.Fragment>
                }
              />
            ))
          )}
        </Route>
        <Route path="*" element={<NOT_FOUND />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;