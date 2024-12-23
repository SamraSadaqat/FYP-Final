import axios from "axios";
import { BaseURL } from "redux/constants/constants";

import * as actions from "../httpActions";

import requestInterceptor from "./requestInterceptor";
import responseInterceptor from "./responseInterceptor";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.httpCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;
    if (onStart) dispatch({ type: onStart });
    next(action);
    requestInterceptor(action);
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.request({
        baseURL: BaseURL.BACKEND_SERVICE,
        url,
        method,
        data,
        headers: {
          Authorization: "Bearer " + token,
          "content-type": "application/json",
        },
      });
      responseInterceptor(response);
      // General
      dispatch(actions.httpCallSuccess(response.data));
      // Specific
      if (onSuccess) dispatch({ type: onSuccess, payload: response });
    } catch (error) {
      responseInterceptor(error.response);

      // General
      dispatch(actions.httpCallFailed(error));
      // Specific
      if (onError)
        dispatch({
          type: onError,
          payload: error && error.response ? error.response.data : error,
        });
    }
  };

export default api;
