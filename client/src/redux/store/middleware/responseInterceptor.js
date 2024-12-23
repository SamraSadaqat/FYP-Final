import { logout } from "redux/auth/auth";

import logger from "../../helpers/logger";

export default function (config) {
  logger.log("Response Interceptor Called", config);
  if (config.status === 401) {
    logout();
  }
}
