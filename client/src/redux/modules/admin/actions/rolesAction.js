import { HTTP_ACTIONS } from "redux/constants/constants";
import { httpCallBegan } from "redux/store/httpActions";

import {
  roleReceived,
  roleRequested,
  roleRequestFailed,
  rolesCreated,
  rolesCreationFailed,
  rolesCreationRequested,
  rolesDeleted,
  rolesDeletionFailed,
  rolesDeletionRequested,
  rolesReceived,
  rolesRequested,
  rolesRequestFailed,
  rolesUpdated,
  rolesUpdateFailed,
  rolesUpdateRequested,
} from "../slices/rolesSlice";

const Roles = "/Roles";
export const getRoles = () => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${Roles}/GetRoles`,
      method: "get",
      onStart: rolesRequested.type,
      onSuccess: rolesReceived.type,
      onError: rolesRequestFailed.type,
    })
  );
};

export const getRoleById = (id) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${Roles}/GetByRoleId?id=${id}`,
      method: HTTP_ACTIONS.GET,
      onStart: roleRequested.type,
      onSuccess: roleReceived.type,
      onError: roleRequestFailed.type,
    })
  );
};

export const deleteRoleById = (id) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${Roles}/DeleteRoleById?id=${id}`,
      method: HTTP_ACTIONS.POST,
      onStart: rolesDeletionRequested.type,
      onSuccess: rolesDeleted.type,
      onError: rolesDeletionFailed.type,
    })
  );
};

export const postRole = (data) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${Roles}/CreateOrUpdate`,
      method: HTTP_ACTIONS.POST,
      data: data,
      onStart: rolesCreationRequested.type,
      onSuccess: rolesCreated.type,
      onError: rolesCreationFailed.type,
    })
  );
};
export const updateRole = (data) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${Roles}/CreateOrUpdate`,
      method: HTTP_ACTIONS.POST,
      data,
      onStart: rolesUpdateRequested.type,
      onSuccess: rolesUpdated.type,
      onError: rolesUpdateFailed.type,
    })
  );
};
