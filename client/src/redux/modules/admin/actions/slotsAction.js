import {
  HTTP_ACTIONS
} from "../../../constants/constants";
import {
  httpCallBegan
} from "../../../store/httpActions";
import {
  slotReceived,
  slotRequested,
  slotRequestFailed,
  slotsAvailableReceived,
  slotsAvailableRequested,
  slotsAvailableRequestFailed,
  slotsCreated,
  slotsCreationFailed,
  slotsCreationRequested,
  slotsDeleted,
  slotsDeletionFailed,
  slotsDeletionRequested,
  slotsReceived,
  slotsRequested,
  slotsRequestFailed,
  slotsUpdated,
  slotsUpdateFailed,
  slotsUpdateRequested
} from "../slices/slotsSlice";

const SLOT = 'Slot';
export const getSlots = () => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${SLOT}/GetAllSlots`,
      method: "get",
      onStart: slotsRequested.type,
      onSuccess: slotsReceived.type,
      onError: slotsRequestFailed.type,
    })
  );
};

export const getAvailableSlots = (id, date) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${SLOT}/GetAvailableSlots?courtId=${id}&bookingDate=${date}`,
      method: "get",
      onStart: slotsAvailableRequested.type,
      onSuccess: slotsAvailableReceived.type,
      onError: slotsAvailableRequestFailed.type,
    })
  );
};

export const getSlotById = (id) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${SLOT}/GetSlotById?Id=${id}`,
      method: HTTP_ACTIONS.GET,
      onStart: slotRequested.type,
      onSuccess: slotReceived.type,
      onError: slotRequestFailed.type,
    })
  );
};

export const deleteSlotById = (id) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${SLOT}/DeleteSlot?slotId=${id}`,
      method: HTTP_ACTIONS.POST,
      onStart: slotsDeletionRequested.type,
      onSuccess: slotsDeleted.type,
      onError: slotsDeletionFailed.type,
    })
  );
};

export const postSlot = (data) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${SLOT}/AddSlot`,
      method: HTTP_ACTIONS.POST,
      data: data,
      onStart: slotsCreationRequested.type,
      onSuccess: slotsCreated.type,
      onError: slotsCreationFailed.type,
    })
  );
};
export const updateSlot = (data) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${SLOT}/UpdateSlot`,
      method: HTTP_ACTIONS.POST,
      data: data,
      onStart: slotsUpdateRequested.type,
      onSuccess: slotsUpdated.type,
      onError: slotsUpdateFailed.type,
    })
  );
};