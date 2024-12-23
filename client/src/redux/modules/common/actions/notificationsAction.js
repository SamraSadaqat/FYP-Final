import { httpCallBegan } from "redux/store/httpActions";

import {
  markAllReadReceived,
  markAllReadRequested,
  markAllReadRequestFailed,
  notificationsReceived,
  notificationsRequested,
  notificationsRequestFailed,
} from "../slices/notificationsSlice";

export const getNotifications = () => (dispatch, getState) => {
  return dispatch(
    httpCallBegan({
      url: "/notification/getNotifications",
      method: "get",
      onStart: notificationsRequested.type,
      onSuccess: notificationsReceived.type,
      onError: notificationsRequestFailed.type,
    })
  );
};

export const markAllRead = () => (dispatch, getState) => {
  return dispatch(
    httpCallBegan({
      url: "/notification/markAllAsRead",
      method: "get",
      onStart: markAllReadRequested.type,
      onSuccess: markAllReadReceived.type,
      onError: markAllReadRequestFailed.type,
    })
  );
};
