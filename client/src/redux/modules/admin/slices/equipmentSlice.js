import { HTTP_ACTIONS } from "redux/constants/constants";

import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
  list: [],
  availableEquipments: [],
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
  name: "equipments",
  initialState: INITIAL_STATE,
  reducers: {
    //getAll
    equipmentsRequested: (equipments) => {
      equipments.loading = true;
      equipments.isError = false;
      equipments.error = {};
    },
    equipmentsReceived: (equipments, action) => {
      equipments.loading = false;
      equipments.list = action.payload.data.data;
      equipments.availableEquipments = action.payload.data.data.filter(item => item.isAvailable);
      equipments.success = action.payload.data;
      equipments.error = {};
      equipments.actionStatus = false;
      equipments.isError = false;
    },
    equipmentsRequestFailed: (equipments, action) => {
      equipments.loading = false;
      equipments.error = action.payload;
      equipments.isError = true;
    },

    //getById
    equipmentRequested: (equipments) => {
      equipments.loading = true;
      equipments.isError = false;
      equipments.actionStatus = false;
    },
    equipmentReceived: (equipments, action) => {
      equipments.loading = false;
      equipments.getById = action.payload.data.data;
      equipments.success = action.payload.data;
    },
    equipmentRequestFailed: (equipments, action) => {
      equipments.loading = false;
      equipments.error = action.payload;
      equipments.isError = true;
    },

    //post
    equipmentsCreationRequested: (equipments) => {
      equipments.loading = true;
      equipments.isError = false;
      equipments.actionStatus = false;
    },
    equipmentsCreated: (equipments, action) => {
      equipments.post = action.payload.data;
      equipments.success = action.payload.statusText;
      equipments.actionType = HTTP_ACTIONS.POST;
      equipments.actionStatus = true;
      equipments.loading = false;
    },
    equipmentsCreationFailed: (equipments, action) => {
      equipments.loading = false;
      equipments.error = action.payload;
      equipments.isError = true;
      equipments.actionType = HTTP_ACTIONS.POST;
      equipments.actionStatus = false;
    },

    //delete
    equipmentsDeletionRequested: (equipments) => {
      equipments.loading = true;
      equipments.isError = false;
      equipments.actionStatus = false;
    },
    equipmentsDeleted: (equipments, action) => {
      equipments.success = action.payload;
      equipments.loading = false;
      equipments.actionStatus = true;
      equipments.actionType = HTTP_ACTIONS.DELETE;
    },
    equipmentsDeletionFailed: (equipments, action) => {
      equipments.loading = false;
      equipments.error = action.payload;
      equipments.isError = true;
      equipments.actionStatus = false;
    },

    //update
    equipmentsUpdateRequested: (equipments) => {
      equipments.loading = true;
      equipments.isError = false;
      equipments.actionStatus = false;
    },
    equipmentsUpdated: (equipments, action) => {
      equipments.post = action.payload.data;
      equipments.success = action.payload.statusText;
      equipments.actionType = HTTP_ACTIONS.POST;
      equipments.actionStatus = true;
      equipments.loading = false;
    },
    equipmentsUpdateFailed: (equipments, action) => {
      equipments.loading = false;
      equipments.error = action.payload;
      equipments.actionStatus = false;
      equipments.isError = true;
    },

    //reset entity
    resetFunction: () => {
      return INITIAL_STATE;
    },

    resetAvailableEquipments: (slots) => {
      slots.availableEquipments = [];
    },
  },
});

export const {
  equipmentsCreated,
  equipmentsCreationFailed,
  equipmentsCreationRequested,

  equipmentRequested,
  equipmentReceived,
  equipmentRequestFailed,

  equipmentsReceived,
  equipmentsRequested,
  equipmentsRequestFailed,

  equipmentsUpdateRequested,
  equipmentsUpdated,
  equipmentsUpdateFailed,

  equipmentsDeletionRequested,
  equipmentsDeletionFailed,
  equipmentsDeleted,

  resetFunction,
  resetAvailableEquipments,
} = slice.actions;
export default slice.reducer;
