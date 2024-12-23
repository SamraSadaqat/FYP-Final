import { HTTP_ACTIONS } from "redux/constants/constants";
import { httpCallBegan } from "redux/store/httpActions";

import {
  employeeReceived,
  employeeRequested,
  employeeRequestFailed,
  employeesCreated,
  employeesCreationFailed,
  employeesCreationRequested,
  employeesDeleted,
  employeesDeletionFailed,
  employeesDeletionRequested,
  employeesReceived,
  employeesRequested,
  employeesRequestFailed,
  employeesUpdated,
  employeesUpdateFailed,
  employeesUpdateRequested,
} from "../slices/employeesSlice";

const Employee = "/Employee";
export const getEmployees = () => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${Employee}/GetEmployee`,
      method: "get",
      onStart: employeesRequested.type,
      onSuccess: employeesReceived.type,
      onError: employeesRequestFailed.type,
    })
  );
};

export const getEmployeeById = (id) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${Employee}/GetEmployeeById?id=${id}`,
      method: HTTP_ACTIONS.GET,
      onStart: employeeRequested.type,
      onSuccess: employeeReceived.type,
      onError: employeeRequestFailed.type,
    })
  );
};

export const deleteEmployeeById = (ids) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${Employee}/Addemployee`,
      data: ids,
      method: HTTP_ACTIONS.DELETE,
      onStart: employeesDeletionRequested.type,
      onSuccess: employeesDeleted.type,
      onError: employeesDeletionFailed.type,
    })
  );
};

export const postEmployee = (data) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${Employee}/AddEmployee`,
      method: HTTP_ACTIONS.POST,
      data: data,
      onStart: employeesCreationRequested.type,
      onSuccess: employeesCreated.type,
      onError: employeesCreationFailed.type,
    })
  );
};
export const updateEmployee = (data) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${Employee}/AddEmployee`,
      method: HTTP_ACTIONS.POST,
      data: data,
      onStart: employeesUpdateRequested.type,
      onSuccess: employeesUpdated.type,
      onError: employeesUpdateFailed.type,
    })
  );
};
