import { HTTP_ACTIONS } from "redux/constants/constants";
import { httpCallBegan } from "redux/store/httpActions";

import {
  loginFailed,
  loginReceived,
  loginRequested,
} from "../slices/loginSlice";

export const loginCall = (data) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: "/Accounts/Login",
      method: HTTP_ACTIONS.POST,
      data: data,
      onStart: loginReceived.type,
      onSuccess: loginRequested.type,
      onError: loginFailed.type,
    })
  );
};
