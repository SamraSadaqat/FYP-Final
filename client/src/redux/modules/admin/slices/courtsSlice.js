import {
  HTTP_ACTIONS
} from "redux/constants/constants";

import {
  createSlice
} from "@reduxjs/toolkit";




const INITIAL_STATE = {
  list: [],
  getById: {},
  availableCourts: [],
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
  name: "courts",
  initialState: INITIAL_STATE,
  reducers: {
    //getAll
    courtsRequested: (courts) => {
      courts.loading = true;
      courts.isError = false;
      courts.error = {};
    },
    courtsReceived: (courts, action) => {
      courts.loading = false;
      courts.list = action.payload.data.data;
      courts.availableCourts = action.payload.data.data.filter(item => item.isAvailable);
      courts.success = action.payload.data;
      courts.error = {};
      courts.actionStatus = false;
      courts.isError = false;
    },
    courtsRequestFailed: (courts, action) => {
      courts.loading = false;
      courts.error = action.payload;
      courts.isError = true;
    },

    //getById
    courtRequested: (courts) => {
      courts.loading = true;
      courts.isError = false;
      courts.actionStatus = false;
    },
    courtReceived: (courts, action) => {
      courts.loading = false;
      courts.getById = action.payload.data.data;
      courts.success = action.payload;
    },
    courtRequestFailed: (courts, action) => {
      courts.loading = false;
      courts.error = action.payload;
      courts.isError = true;
    },

    //post
    courtsCreationRequested: (courts) => {
      courts.loading = true;
      courts.isError = false;
      courts.actionStatus = false;
    },
    courtsCreated: (courts, action) => {
      courts.post = action.payload.data;
      courts.success = action.payload.statusText;
      courts.actionType = HTTP_ACTIONS.POST;
      courts.loading = false;
      courts.actionStatus = true;
    },
    courtsCreationFailed: (courts, action) => {
      courts.loading = false;
      courts.error = action.payload;
      courts.isError = true;
      courts.actionType = HTTP_ACTIONS.POST;
      courts.actionStatus = false;
    },

    //delete
    courtsDeletionRequested: (courts) => {
      courts.loading = true;
      courts.isError = false;
      courts.actionStatus = false;
    },
    courtsDeleted: (courts, action) => {
      courts.success = action.payload;
      courts.loading = false;
      courts.actionStatus = true;
      courts.actionType = HTTP_ACTIONS.DELETE;
    },
    courtsDeletionFailed: (courts, action) => {
      courts.loading = false;
      courts.error = action.payload;
      courts.isError = true;
      courts.actionStatus = false;
    },

    //update
    courtsUpdateRequested: (courts) => {
      courts.loading = true;
      courts.isError = false;
      courts.actionStatus = false;
    },
    courtsUpdated: (courts, action) => {
      courts.post = action.payload.data;
      courts.success = action.payload.statusText;
      courts.actionType = HTTP_ACTIONS.POST;
      courts.loading = false;
      courts.actionStatus = true;
    },
    courtsUpdateFailed: (courts, action) => {
      courts.loading = false;
      courts.error = action.payload;
      courts.actionStatus = false;
      courts.isError = true;
    },

    //reset entity
    resetFunction: () => {
      return INITIAL_STATE;
    },
  },
});

export const {
  courtsCreated,
  courtsCreationFailed,
  courtsCreationRequested,

  courtRequested,
  courtReceived,
  courtRequestFailed,

  courtsReceived,
  courtsRequested,
  courtsRequestFailed,

  courtsUpdateRequested,
  courtsUpdated,
  courtsUpdateFailed,

  courtsDeletionRequested,
  courtsDeletionFailed,
  courtsDeleted,

  resetFunction,
} = slice.actions;
export default slice.reducer;