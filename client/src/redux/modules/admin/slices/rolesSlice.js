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
  post: {},
  actionStatus: false,
};
const slice = createSlice({
  name: "roles",
  initialState: INITIAL_STATE,
  reducers: {
    //getAll
    rolesRequested: (roles) => {
      roles.loading = true;
      roles.isError = false;
      roles.error = {};
    },
    rolesReceived: (roles, action) => {
      const payload = action.payload.data;
      roles.loading = false;
      roles.list = payload.data;
      roles.success = payload;
      roles.error = {};
      roles.actionStatus = false;
      roles.isError = false;
    },
    rolesRequestFailed: (roles, action) => {
      roles.loading = false;
      roles.error = action.payload.data;
      roles.isError = true;
    },

    //getById
    roleRequested: (roles) => {
      roles.loading = true;
      roles.isError = false;
      roles.actionStatus = false;
    },
    roleReceived: (roles, action) => {
      roles.loading = false;
      roles.getById = action.payload.data.data;
      roles.success = action.payload.data;
    },
    roleRequestFailed: (roles, action) => {
      roles.loading = false;
      roles.error = action.payload;
      roles.isError = true;
    },

    //post
    rolesCreationRequested: (roles) => {
      roles.loading = true;
      roles.isError = false;
      roles.actionStatus = false;
    },
    rolesCreated: (roles, action) => {
      roles.post = action.payload.data;
      roles.success = action.payload.statusText;
      roles.actionType = HTTP_ACTIONS.POST;
      roles.actionStatus = true;
      roles.loading = false;
    },
    rolesCreationFailed: (roles, action) => {
      roles.loading = false;
      roles.error = action.payload;
      roles.isError = true;
      roles.actionType = HTTP_ACTIONS.POST;
      roles.actionStatus = false;
    },

    //delete
    rolesDeletionRequested: (roles) => {
      roles.loading = true;
      roles.isError = false;
      roles.actionStatus = false;
    },
    rolesDeleted: (roles, action) => {
      roles.success = action.payload;
      roles.loading = false;
      roles.actionStatus = true;
      roles.actionType = HTTP_ACTIONS.DELETE;
    },
    rolesDeletionFailed: (roles, action) => {
      roles.loading = false;
      roles.error = action.payload;
      roles.isError = true;
      roles.actionStatus = false;
    },

    //update
    rolesUpdateRequested: (roles) => {
      roles.loading = true;
      roles.isError = false;
      roles.actionStatus = false;
    },
    rolesUpdated: (roles, action) => {
      roles.post = action.payload.data;
      roles.success = action.payload.statusText;
      roles.actionType = HTTP_ACTIONS.POST;
      roles.actionStatus = true;
      roles.loading = false;
    },
    rolesUpdateFailed: (roles, action) => {
      roles.loading = false;
      roles.error = action.payload;
      roles.actionStatus = false;
      roles.isError = true;
    },

    //reset entity
    resetFunction: () => {
      return INITIAL_STATE;
    },
  },
});

export const {
  rolesCreated,
  rolesCreationFailed,
  rolesCreationRequested,

  roleRequested,
  roleReceived,
  roleRequestFailed,

  rolesReceived,
  rolesRequested,
  rolesRequestFailed,

  rolesUpdateRequested,
  rolesUpdated,
  rolesUpdateFailed,

  rolesDeletionRequested,
  rolesDeletionFailed,
  rolesDeleted,

  resetFunction,
} = slice.actions;
export default slice.reducer;
