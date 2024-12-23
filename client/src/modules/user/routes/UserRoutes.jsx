// import { MODULES } from "constants/constants";
// import React from "react";
// import { RoleBasedRoute } from "routes/RoleBasedRoutes";

// import { USER_ROUTES } from "../constants/constants";

// const UserRoutes = () => {
//   return (
//     <>
//       <RoleBasedRoute
//         module={MODULES.USER}
//         path={USER_ROUTES.DASHBOARD}
//         element={<p>User Dashboard</p>}
//         itemKey="user-dashboard"
//       />
//     </>
//   );
// };

// export default UserRoutes;

import BreadCrumbs from "elements/Breadcrumbs/Breadcrumbs";
import Header from "modules/common/components/header/Header";
import LayoutWrapper from "modules/common/components/layout/LayoutWrapper";
import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { NOT_FOUND } from "resources/error_handlers";
import { USER_ROUTES } from "../constants/constants";
import Dashboard from "modules/user/pages/Dashboard";
import { Auth } from "redux/auth/auth";



const UserRoutes = () => {


  return (
    <div className="admin-layout">
      {!Auth.isAdmin() && <Header />}
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
            USER_ROUTES.map(({ Component, Path }) => (
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

export default UserRoutes;
