/*eslint-disable*/
import { AUTH_ROUTES } from "constants/constants";
import AppSpinner from "elements/AppLoader/Spinner";
import BreadCrumbs from "elements/Breadcrumbs/Breadcrumbs";
import Space from "elements/Spacer/Spacer";
// import LayoutWrapper from "modules/common/components/LayoutWrapper/LayoutWrapper";
import { PropTypes } from "prop-types";
import React, { Suspense, useState } from "react";
import { useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { Auth } from "redux/auth/auth";
import { isRoleAllowed } from "redux/helpers/helper";
import { UNAUTHORIZED } from "resources/error_handlers";

export const RoleBasedRoute = (props) => {
  const { path, element, roles, itemKey, module } = props;
  const navigation = useNavigate();
  const auth = true;
  // const auth = Auth.getAuth();
  const [allowed, setAllowed] = useState(true);
  useEffect(() => {
    // if (auth) {
    //   setAllowed(isRoleAllowed(module, ...roles));
    // }
    if (!auth) {
      navigation(AUTH_ROUTES.LOGIN);
    }
  }, [auth]);

  return (
    <>
      {auth && allowed ? (
        <Routes>
          <Route
            element={
              <Suspense
                fallback={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <AppSpinner size="large" />
                  </div>
                }
                key="suspense"
              >
                <Space
                  key={itemKey}
                  direction="vertical"
                  size={5}
                  className={`spacer`}
                >
                  <BreadCrumbs />
                  <Outlet />
                </Space>
              </Suspense>
            }
          >
            <Route path={path} element={element} key={itemKey} />
          </Route>
        </Routes>
      ) : (
        <>
          <Routes>
            <Route path={path} element={<UNAUTHORIZED />} />
          </Routes>
        </>
      )}
    </>
  );
};
RoleBasedRoute.propTypes = {
  path: PropTypes.string,
  element: PropTypes.object,
  roles: PropTypes.array,
  itemKey: PropTypes.string,
  module: PropTypes.string,
};
