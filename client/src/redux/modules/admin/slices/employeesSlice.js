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
  name: "employees",
  initialState: INITIAL_STATE,
  reducers: {
    //getAll
    employeesRequested: (employees) => {
      employees.loading = true;
      employees.isError = false;
      employees.error = {};
    },
    employeesReceived: (employees, action) => {
      employees.loading = false;
      employees.list = action.payload.data;
      employees.success = action.payload;
      employees.error = {};
      employees.actionStatus = false;
      employees.isError = false;
    },
    employeesRequestFailed: (employees, action) => {
      employees.loading = false;
      employees.error = action.payload;
      employees.isError = true;
    },

    //getById
    employeeRequested: (employees) => {
      employees.loading = true;
      employees.isError = false;
      employees.actionStatus = false;
    },
    employeeReceived: (employees, action) => {
      employees.loading = false;
      employees.getById = action.payload.data.data;
      employees.success = action.payload.data;
    },
    employeeRequestFailed: (employees, action) => {
      employees.loading = false;
      employees.error = action.payload;
      employees.isError = true;
    },

    //post
    employeesCreationRequested: (employees) => {
      employees.loading = true;
      employees.isError = false;
      employees.actionStatus = false;
    },
    employeesCreated: (employees, action) => {
      employees.post = action.payload.data;
      employees.success = action.payload.statusText;
      employees.actionType = HTTP_ACTIONS.POST;
      employees.actionStatus = true;
      employees.loading = false;
    },
    employeesCreationFailed: (employees, action) => {
      employees.loading = false;
      employees.error = action.payload;
      employees.isError = true;
      employees.actionType = HTTP_ACTIONS.POST;
      employees.actionStatus = false;
    },

    //delete
    employeesDeletionRequested: (employees) => {
      employees.loading = true;
      employees.isError = false;
      employees.actionStatus = false;
    },
    employeesDeleted: (employees, action) => {
      employees.success = action.payload;
      employees.loading = false;
      employees.actionStatus = true;
      employees.actionType = HTTP_ACTIONS.DELETE;
    },
    employeesDeletionFailed: (employees, action) => {
      employees.loading = false;
      employees.error = action.payload;
      employees.isError = true;
      employees.actionStatus = false;
    },

    //update
    employeesUpdateRequested: (employees) => {
      employees.loading = true;
      employees.isError = false;
      employees.actionStatus = false;
    },
    employeesUpdated: (employees, action) => {
      employees.post = action.payload.data;
      employees.success = action.payload.statusText;
      employees.actionType = HTTP_ACTIONS.POST;
      employees.actionStatus = true;
      employees.loading = false;
    },
    employeesUpdateFailed: (employees, action) => {
      employees.loading = false;
      employees.error = action.payload;
      employees.actionStatus = false;
      employees.isError = true;
    },

    //reset entity
    resetFunction: () => {
      return INITIAL_STATE;
    },
  },
});

export const {
  employeesCreated,
  employeesCreationFailed,
  employeesCreationRequested,

  employeeRequested,
  employeeReceived,
  employeeRequestFailed,

  employeesReceived,
  employeesRequested,
  employeesRequestFailed,

  employeesUpdateRequested,
  employeesUpdated,
  employeesUpdateFailed,

  employeesDeletionRequested,
  employeesDeletionFailed,
  employeesDeleted,

  resetFunction,
} = slice.actions;
export default slice.reducer;
