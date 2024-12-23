import jwt_decode from "jwt-decode";
import logger from "redux/helpers/logger";

import { TOKEN } from "../constants/constants";


export const tokenExpiryCheck = () => {
  const auth_token = jwt_decode(localStorage.getItem("accessToken"));

  let exp = new Date(auth_token.exp * 1000);

  if (Date.now() >= exp) {
    return true;
  } else {
    return false;
  }
};

export async function logoutCall() {
  const token = localStorage.getItem(TOKEN.REFRESH);
  try {
    const url = `${process.env.REACT_APP_BACKEND_WEB_SERVICE}/auth/logout`;
    const result = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken: token }),
    });
    return result;
  } catch (e) {
    logger.log("error at logoutCall", e);
    throw e;
  }
}