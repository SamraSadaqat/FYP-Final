import { HTTP_ACTIONS } from "redux/constants/constants";

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  list: [],
  getById: {},
  deleted: [],
  error: {},
  loading: false,
  success: {},
  isError: false,
  actionType: "",
  actionStatus: false,
};
const slice = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {
    //getAll
    usersRequested: (users) => {
      users.loading = true;
      users.isError = false;
      users.error = {};
    },
    usersReceived: (users, action) => {
      users.loading = false;
      users.list = action.payload.data.data;
      users.success = action.payload.data;
      users.error = {};
      users.actionStatus = false;
      users.isError = false;
    },
    usersRequestFailed: (users, action) => {
      users.loading = false;
      users.error = action.payload;
      users.isError = true;
    },

    //getById
    userRequested: (users) => {
      users.loading = true;
      users.isError = false;
      users.actionStatus = false;
    },
    userReceived: (users, action) => {
      users.loading = false;
      users.getById = action.payload.data.data;
      users.success = action.payload.data;
    },
    userRequestFailed: (users, action) => {
      users.loading = false;
      users.error = action.payload;
      users.isError = true;
    },

    //post
    usersCreationRequested: (users) => {
      users.loading = true;
      users.isError = false;
      users.actionStatus = false;
    },
    usersCreated: (users, action) => {
      users.post = action.payload.data;
      users.success = action.payload.statusText;
      users.actionType = HTTP_ACTIONS.POST;
      users.actionStatus = true;
      users.loading = false;
    },
    usersCreationFailed: (users, action) => {
      users.loading = false;
      users.error = action.payload;
      users.isError = true;
      users.actionType = HTTP_ACTIONS.POST;
      users.actionStatus = false;
    },

    //delete
    usersDeletionRequested: (users) => {
      users.loading = true;
      users.isError = false;
      users.actionStatus = false;
    },
    usersDeleted: (users, action) => {
      users.success = action.payload;
      users.loading = false;
      users.actionStatus = true;
      users.actionType = HTTP_ACTIONS.DELETE;
    },
    usersDeletionFailed: (users, action) => {
      users.loading = false;
      users.error = action.payload;
      users.isError = true;
      users.actionStatus = false;
    },

    //update
    usersUpdateRequested: (users) => {
      users.loading = true;
      users.isError = false;
      users.actionStatus = false;
    },
    usersUpdated: (users, action) => {
      users.post = action.payload.data;
      users.success = action.payload.statusText;
      users.actionType = HTTP_ACTIONS.POST;
      users.actionStatus = true;
      users.loading = false;
    },
    usersUpdateFailed: (users, action) => {
      users.loading = false;
      users.error = action.payload;
      users.actionStatus = false;
      users.isError = true;
    },

    //reset entity
    resetFunction: () => {
      return INITIAL_STATE;
    },
  },
});

export const {
  usersCreated,
  usersCreationFailed,
  usersCreationRequested,

  userRequested,
  userReceived,
  userRequestFailed,

  usersReceived,
  usersRequested,
  usersRequestFailed,

  usersUpdateRequested,
  usersUpdated,
  usersUpdateFailed,

  usersDeletionRequested,
  usersDeletionFailed,
  usersDeleted,

  resetFunction,
} = slice.actions;
export default slice.reducer;
