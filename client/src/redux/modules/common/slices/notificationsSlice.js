/*eslint-disable*/
import { createSlice } from "@reduxjs/toolkit";
import { HTTP_ACTIONS } from "redux/constants/constants";
const INITIAL_STATE = {
  list: [],
  error: {},
  loading: false,
  success: {},
  markedRead: false,
  isError: false,
  actionType: "",
  actionStatus: false,
};
const slice = createSlice({
  name: "notifications",
  initialState: INITIAL_STATE,
  reducers: {
    //getAll
    notificationsRequested: (notifications, action) => {
      notifications.loading = true;
      notifications.isError = false;
      notifications.error = {};
      notifications.markedRead = false;
    },
    notificationsReceived: (notifications, action) => {
      notifications.loading = false;
      notifications.list = action.payload.data;
      notifications.success = action.payload;
      notifications.error = {};
      notifications.actionStatus = false;
      notifications.isError = false;
      notifications.markedRead = false;
    },
    notificationsRequestFailed: (notifications, action) => {
      notifications.loading = false;
      notifications.error = action.payload;
      notifications.isError = true;
      notifications.markedRead = false;
    },

    //mark read
    markAllReadRequested: (notifications, action) => {
      notifications.loading = true;
      notifications.isError = false;
      notifications.error = {};
      notifications.markedRead = false;
    },
    markAllReadReceived: (notifications, action) => {
      notifications.loading = false;
      notifications.success = action.payload;
      notifications.error = {};
      notifications.actionStatus = false;
      notifications.isError = false;
      notifications.markedRead = true;
    },
    markAllReadRequestFailed: (notifications, action) => {
      notifications.loading = false;
      notifications.error = action.payload;
      notifications.isError = true;
      notifications.markedRead = false;
    },

    //reset entity
    resetFunction: () => {
      return INITIAL_STATE;
    },
  },
});

export const {
  notificationsRequested,
  notificationsReceived,
  notificationsRequestFailed,
  markAllReadRequested,
  markAllReadReceived,
  markAllReadRequestFailed,
  resetFunction,
} = slice.actions;
export default slice.reducer;
