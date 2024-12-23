import { useEffect, useState } from "react";
import { DRAWER_ROUTES } from "modules/admin/constants/constants";
import { isAccessibleRoute } from "redux/helpers/helper";
import { useUserPermission } from "redux/modules/common/hooks/useUserPermission";

export const useUserRoleBasedInfo = () => {
  const [permittedRoutes, setRoutes] = useState([]);
  const permissions = useUserPermission();
  useEffect(() => {
    const permittedRoute = DRAWER_ROUTES.filter((item) =>
      isAccessibleRoute(item.title, permissions)
    );
    setRoutes(permittedRoute);
  }, []);
  return {
    DRAWER_ITEMS: permittedRoutes,
    //... add the required items here to used in any component based on role
  };
};
