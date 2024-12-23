import {
  HTTP_ACTIONS
} from "redux/constants/constants";

import {
  createSlice
} from "@reduxjs/toolkit";





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
  name: "bookings",
  initialState: INITIAL_STATE,
  reducers: {
    //getAll
    bookingsRequested: (bookings) => {
      bookings.loading = true;
      bookings.isError = false;
      bookings.error = {};
    },
    bookingsReceived: (bookings, action) => {
      bookings.loading = false;
      bookings.list = action.payload.data.data;
      bookings.success = action.payload.data;
      bookings.error = {};
      bookings.actionStatus = false;
      bookings.isError = false;
    },
    bookingsRequestFailed: (bookings, action) => {
      bookings.loading = false;
      bookings.error = action.payload;
      bookings.isError = true;
    },

    //getById
    bookingRequested: (bookings) => {
      bookings.loading = true;
      bookings.isError = false;
      bookings.actionStatus = false;
    },
    bookingReceived: (bookings, action) => {
      bookings.loading = false;
      bookings.getById = action.payload.data.data;
      bookings.success = action.payload;
    },
    bookingRequestFailed: (bookings, action) => {
      bookings.loading = false;
      bookings.error = action.payload;
      bookings.isError = true;
    },

    //post
    bookingsCreationRequested: (bookings) => {
      bookings.loading = true;
      bookings.isError = false;
      bookings.actionStatus = false;
    },
    bookingsCreated: (bookings, action) => {
      bookings.post = action.payload.data;
      bookings.success = action.payload.statusText;
      bookings.actionType = HTTP_ACTIONS.POST;
      bookings.actionStatus = true;
      bookings.loading = false;
    },
    bookingsCreationFailed: (bookings, action) => {
      bookings.loading = false;
      bookings.error = action.payload.data;
      bookings.isError = true;
      bookings.actionType = HTTP_ACTIONS.POST;
      bookings.actionStatus = false;
    },
    //delete
    bookingsDeletionRequested: (bookings) => {
      bookings.loading = true;
      bookings.isError = false;
      bookings.actionStatus = false;
    },
    bookingsDeleted: (bookings, action) => {
      bookings.success = action.payload;
      bookings.loading = false;
      bookings.actionStatus = true;
      bookings.actionType = HTTP_ACTIONS.DELETE;
    },
    bookingsDeletionFailed: (bookings, action) => {
      bookings.loading = false;
      bookings.error = action.payload;
      bookings.isError = true;
      bookings.actionStatus = false;
    },

    //update
    bookingsUpdateRequested: (bookings) => {
      bookings.loading = true;
      bookings.isError = false;
      bookings.actionStatus = false;
    },
    bookingsUpdated: (bookings, action) => {
      bookings.post = action.payload.data;
      bookings.success = action.payload.statusText;
      bookings.actionType = HTTP_ACTIONS.POST;
      bookings.loading = false;
      bookings.actionStatus = true;
    },
    bookingsUpdateFailed: (bookings, action) => {
      bookings.loading = false;
      bookings.error = action.payload;
      bookings.actionStatus = false;
      bookings.isError = true;
    },

    //reset entity
    resetFunction: () => {
      return INITIAL_STATE;
    },

    resetActionStatus: (bookings) => {
      bookings.actionStatus = false;
    },
  },
});

export const {
  bookingsCreated,
  bookingsCreationFailed,
  bookingsCreationRequested,

  bookingRequested,
  bookingReceived,
  bookingRequestFailed,

  bookingsReceived,
  bookingsRequested,
  bookingsRequestFailed,

  bookingsUpdateRequested,
  bookingsUpdated,
  bookingsUpdateFailed,

  bookingsDeletionRequested,
  bookingsDeletionFailed,
  bookingsDeleted,

  resetFunction,
  resetActionStatus,
} = slice.actions;
export default slice.reducer;