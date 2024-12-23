import { DAYS_LIST } from 'redux/constants/constants';

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  courtTypes: [],
  screenTypes: [],
  employeeTypes: [],
  days: DAYS_LIST,
  error: {},
  loading: false,
  success: {},
  isError: false,
};
const slice = createSlice({
  name: "meta",
  initialState: INITIAL_STATE,
  reducers: {
    //getAll
    courtTypesRequested: (courts) => {
      courts.loading = true;
      courts.isError = false;
      courts.error = {};
    },
    courtTypesReceived: (courts, action) => {
      courts.loading = false;
      courts.courtTypes = action.payload.data;
      courts.success = action.payload;
      courts.error = {};
      courts.isError = false;
    },
    courtTypesRequestFailed: (courts, action) => {
      courts.loading = false;
      courts.error = action.payload;
      courts.isError = true;
    },

    screenTypesRequested: (screens) => {
      screens.loading = true;
      screens.isError = false;
      screens.error = {};
    },
    screenTypesReceived: (screens, action) => {
      screens.loading = false;
      screens.screenTypes = action.payload.data;
      screens.success = action.payload;
      screens.error = {};
      screens.isError = false;
    },
    screenTypesRequestFailed: (screens, action) => {
      screens.loading = false;
      screens.error = action.payload;
      screens.isError = true;
    },

    employeeTypeRequested: (employees) => {
      employees.loading = true;
      employees.isError = false;
      employees.error = {};
    },
    employeeTypeReceived: (employees, action) => {
      employees.loading = false;
      employees.employeeType = action.payload.data;
      employees.success = action.payload;
      employees.error = {};
      employees.isError = false;
    },
    employeeTypeRequestFailed: (employees, action) => {
      employees.loading = false;
      employees.error = action.payload;
      employees.isError = true;
    },

    //reset entity
    resetFunction: () => {
      return INITIAL_STATE;
    },
  },
});

export const {
  courtTypesRequested,
  courtTypesReceived,
  courtTypesRequestFailed,

  screenTypesRequested,
  screenTypesReceived,
  screenTypesRequestFailed,

  employeeTypesRequested,
  employeeTypesReceived,
  employeeTypesRequestFailed,

  resetFunction,
} = slice.actions;
export default slice.reducer;
