import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  error: {},
  loading: false,
  success: {},
  details: {},
  permissions: [],
  isError: false,
};
const slice = createSlice({
  name: "loggedInUser",
  initialState: INITIAL_STATE,
  reducers: {
    //getAll
    loginRequested: (auth) => {
      auth.loading = true;
      auth.isError = false;
      auth.error = {};
    },
    loginReceived: (auth, action) => {
      auth.details = action.payload.data;
      auth.success = action.payload;
    },
    loginFailed: (auth, action) => {
      auth.loading = false;
      auth.error = action.payload;
      auth.isError = true;
    },

    //reset entity
    resetFunction: () => {
      return INITIAL_STATE;
    },
  },
});

export const { loginRequested, loginReceived, loginFailed, resetFunction } =
  slice.actions;
export default slice.reducer;