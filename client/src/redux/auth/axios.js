/*eslint-disable*/
import Axios from "axios";
import { BaseURL, HTTP_STATUSCODES } from "../constants/constants";
import { logout } from "./auth";

const token = localStorage.getItem("accessToken");
const axios = Axios.create({
  baseURL: BaseURL.BACKEND_SERVICE,
  headers: {
    ...(token && { Authorization: `Bearer ${token}` }),
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

let failedQueue = [];
const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

const interceptor = (store) => {
  Axios.interceptors.request.use(
    (config) => {
      if (!config.headers["Authorization"]) {
        let accessToken = localStorage.getItem("accessToken");
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );
  Axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      const originalRequest = err.config;
      if (
        err.response.status === HTTP_STATUSCODES.UNAUTHORISED &&
        !originalRequest._retry
      ) {
        logout();
        processQueue(err, null);

        // return new Promise(function (resolve, reject) {
        //   refreshToken(localStorage.getItem(TOKEN.REFRESH))
        //     .then((newAccessToken) => {
        //       axios.defaults.headers.common["Authorization"] =
        //         "Bearer " + newAccessToken.accessToken;
        //       originalRequest.headers["Authorization"] =
        //         "Bearer " + newAccessToken.accessToken;
        //       localStorage.setItem("accessToken", newAccessToken.accessToken);
        //       processQueue(null, newAccessToken.accessToken);
        //       resolve(axios(originalRequest));
        //     })
        //     .catch((err) => {
        //       logger.log("err @ catch block", err);
        //       logout();
        //       processQueue(err, null);
        //       reject(err);
        //     })
        //     .then(() => {
        //       isRefreshing = false;
        //     });
        // });
      }

      return Promise.reject(err);
    }
  );
};

export default {
  interceptor,
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
  axios,
};
