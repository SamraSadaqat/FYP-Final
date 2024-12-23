import {
  HTTP_ACTIONS
} from "../../../constants/constants";
import {
  httpCallBegan
} from "../../../store/httpActions";
import {
  courtReceived,
  courtRequested,
  courtRequestFailed,
  courtsCreated,
  courtsCreationFailed,
  courtsCreationRequested,
  courtsDeleted,
  courtsDeletionFailed,
  courtsDeletionRequested,
  courtsReceived,
  courtsRequested,
  courtsRequestFailed,
  courtsUpdated,
  courtsUpdateFailed,
  courtsUpdateRequested
} from "../slices/courtsSlice";

export const getCourts = () => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: "/Courts/GetCourt",
      method: "get",
      onStart: courtsRequested.type,
      onSuccess: courtsReceived.type,
      onError: courtsRequestFailed.type,
    })
  );
};

export const getCourtById = (id) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `/Courts/GetCourtbyid?id=${id}`,
      method: HTTP_ACTIONS.GET,
      onStart: courtRequested.type,
      onSuccess: courtReceived.type,
      onError: courtRequestFailed.type,
    })
  );
};

export const deleteCourtById = (id) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `/Courts/DeleteCourtById?Id=${id}`,
      method: HTTP_ACTIONS.POST,
      onStart: courtsDeletionRequested.type,
      onSuccess: courtsDeleted.type,
      onError: courtsDeletionFailed.type,
    })
  );
};

export const postCourt = (data) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: "/Courts/AddCourt",
      method: HTTP_ACTIONS.POST,
      data: data,
      onStart: courtsCreationRequested.type,
      onSuccess: courtsCreated.type,
      onError: courtsCreationFailed.type,
    })
  );
};
export const updateCourt = (data) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `/Courts/UpdateCourt`,
      method: HTTP_ACTIONS.POST,
      data: data,
      onStart: courtsUpdateRequested.type,
      onSuccess: courtsUpdated.type,
      onError: courtsUpdateFailed.type,
    })
  );
};