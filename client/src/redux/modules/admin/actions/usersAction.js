import { HTTP_ACTIONS } from "../../../constants/constants";
import { httpCallBegan } from "../../../store/httpActions";
import {
  userReceived,
  userRequested,
  userRequestFailed,
  usersCreated,
  usersCreationFailed,
  usersCreationRequested,
  usersDeleted,
  usersDeletionFailed,
  usersDeletionRequested,
  usersReceived,
  usersRequested,
  usersRequestFailed,
  usersUpdated,
  usersUpdateFailed,
  usersUpdateRequested,
} from "../slices/usersSlice";

const user = "/Accounts";
export const getUsers = () => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${user}/GetUser`,
      method: "get",
      onStart: usersRequested.type,
      onSuccess: usersReceived.type,
      onError: usersRequestFailed.type,
    })
  );
};

export const getUserById = (id) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${user}/GetUserById?id=${id}`,
      method: HTTP_ACTIONS.GET,
      onStart: userRequested.type,
      onSuccess: userReceived.type,
      onError: userRequestFailed.type,
    })
  );
};

export const deleteUserById = (id) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${user}/DeleteUserById?Id=${id}`,
      method: HTTP_ACTIONS.POST,
      onStart: usersDeletionRequested.type,
      onSuccess: usersDeleted.type,
      onError: usersDeletionFailed.type,
    })
  );
};

export const postUser = (data) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${user}/Register`,
      method: HTTP_ACTIONS.POST,
      data: data,
      onStart: usersCreationRequested.type,
      onSuccess: usersCreated.type,
      onError: usersCreationFailed.type,
    })
  );
};
export const updateUser = (data) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${user}/UpdateUser`,
      method: HTTP_ACTIONS.POST,
      data: data,
      onStart: usersUpdateRequested.type,
      onSuccess: usersUpdated.type,
      onError: usersUpdateFailed.type,
    })
  );
};
