import AuthHeader from "modules/common/components/header/AuthHeader";
import UnAuthHeader from "modules/common/components/header/UnAuthHeader";
import React from "react";
import { Auth } from "redux/auth/auth";
const Header = () => {
  const auth = Auth.getAuth();
  console.log(auth);
  return auth ? <AuthHeader /> : <UnAuthHeader />;
};

export default Header;
