import { HTTP_ACTIONS } from "redux/constants/constants";
import { httpCallBegan } from "redux/store/httpActions";

import { employeeReceived, employeeRequested, employeeRequestFailed } from '../slices/employeesSlice';
import {
  courtTypesReceived,
  courtTypesRequested,
  courtTypesRequestFailed,
  screenTypesReceived,
  screenTypesRequested,
  screenTypesRequestFailed
} from "../slices/metaSlice";

export const getCourtTypes = (data) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: "/MetaData/MetaData",
      method: HTTP_ACTIONS.POST,
      data: data,
      onStart: courtTypesRequested.type,
      onSuccess: courtTypesReceived.type,
      onError: courtTypesRequestFailed.type,
    })
  );
};

export const getScreenTypes = (data) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `/MetaData/MetaData`,
      method: HTTP_ACTIONS.POST,
      data: data,
      onStart: screenTypesRequested.type,
      onSuccess: screenTypesReceived.type,
      onError: screenTypesRequestFailed.type,
    })
  );
};

export const getEmployeeTypes = (data) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `/MetaData/MetaData`,
      method: HTTP_ACTIONS.POST,
      data: data,
      onStart: employeeRequested.type,
      onSuccess: employeeReceived.type,
      onError: employeeRequestFailed.type,
    })
  );
};
