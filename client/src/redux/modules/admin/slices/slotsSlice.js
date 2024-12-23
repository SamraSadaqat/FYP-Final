import { HTTP_ACTIONS } from "redux/constants/constants";

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  list: [],
  availableSlots: [],
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
  name: "slots",
  initialState: INITIAL_STATE,
  reducers: {
    //getAll
    slotsRequested: (slots) => {
      slots.loading = true;
      slots.isError = false;
      slots.error = {};
    },
    slotsReceived: (slots, action) => {
      slots.loading = false;
      slots.list = action.payload.data.data;
      slots.success = action.payload.data;
      slots.error = {};
      slots.actionStatus = false;
      slots.isError = false;
    },
    slotsRequestFailed: (slots, action) => {
      slots.loading = false;
      slots.error = action.payload;
      slots.isError = true;
    },

    //getAllAvailable
    slotsAvailableRequested: (slots) => {
      slots.loading = true;
      slots.isError = false;
      slots.error = {};
    },
    slotsAvailableReceived: (slots, action) => {
      slots.loading = false;
      slots.availableSlots = action.payload.data.data;
      slots.success = action.payload.data;
      slots.error = {};
      slots.actionStatus = false;
      slots.isError = false;
    },
    slotsAvailableRequestFailed: (slots, action) => {
      slots.loading = false;
      slots.error = action.payload;
      slots.isError = true;
    },

    //getById
    slotRequested: (slots) => {
      slots.loading = true;
      slots.isError = false;
      slots.actionStatus = false;
    },
    slotReceived: (slots, action) => {
      slots.loading = false;
      slots.getById = action.payload.data.data;
      slots.success = action.payload;
    },
    slotRequestFailed: (slots, action) => {
      slots.loading = false;
      slots.error = action.payload;
      slots.isError = true;
    },

    //post
    slotsCreationRequested: (slots) => {
      slots.loading = true;
      slots.isError = false;
      slots.actionStatus = false;
    },
    slotsCreated: (slots, action) => {
      slots.post = action.payload.data;
      slots.success = action.payload.statusText;
      slots.actionType = HTTP_ACTIONS.POST;
      slots.actionStatus = true;
      slots.loading = false;
    },
    slotsCreationFailed: (slots, action) => {
      slots.loading = false;
      slots.error = action.payload;
      slots.isError = true;
      slots.actionType = HTTP_ACTIONS.POST;
      slots.actionStatus = false;
    },

    //delete
    slotsDeletionRequested: (slots) => {
      slots.loading = true;
      slots.isError = false;
      slots.actionStatus = false;
    },
    slotsDeleted: (slots, action) => {
      slots.success = action.payload;
      slots.loading = false;
      slots.actionStatus = true;
      slots.actionType = HTTP_ACTIONS.DELETE;
    },
    slotsDeletionFailed: (slots, action) => {
      slots.loading = false;
      slots.error = action.payload;
      slots.isError = true;
      slots.actionStatus = false;
    },

    //update
    slotsUpdateRequested: (slots) => {
      slots.loading = true;
      slots.isError = false;
      slots.actionStatus = false;
    },
    slotsUpdated: (slots, action) => {
      slots.post = action.payload.data;
      slots.success = action.payload.statusText;
      slots.actionType = HTTP_ACTIONS.POST;
      slots.loading = false;
      slots.actionStatus = true;
    },
    slotsUpdateFailed: (slots, action) => {
      slots.loading = false;
      slots.error = action.payload;
      slots.actionStatus = false;
      slots.isError = true;
    },

    //reset entity
    resetFunction: () => {
      return INITIAL_STATE;
    },

    resetActionStatus: (slots) => {
      slots.actionStatus = false;
    },

    resetAvailableSlots: (slots) => {
      slots.availableSlots = [];
    },
  },
});

export const {
  slotsCreated,
  slotsCreationFailed,
  slotsCreationRequested,

  slotRequested,
  slotReceived,
  slotRequestFailed,

  slotsAvailableRequested,
  slotsAvailableReceived,
  slotsAvailableRequestFailed,

  slotsReceived,
  slotsRequested,
  slotsRequestFailed,

  slotsUpdateRequested,
  slotsUpdated,
  slotsUpdateFailed,

  slotsDeletionRequested,
  slotsDeletionFailed,
  slotsDeleted,

  resetFunction,
  resetActionStatus,
  resetAvailableSlots,
} = slice.actions;
export default slice.reducer;
