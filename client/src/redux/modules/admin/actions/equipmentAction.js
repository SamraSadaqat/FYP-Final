import { HTTP_ACTIONS } from "../../../constants/constants";
import { httpCallBegan } from "../../../store/httpActions";
import {
  equipmentReceived,
  equipmentRequested,
  equipmentRequestFailed,
  equipmentsCreated,
  equipmentsCreationFailed,
  equipmentsCreationRequested,
  equipmentsDeleted,
  equipmentsDeletionFailed,
  equipmentsDeletionRequested,
  equipmentsReceived,
  equipmentsRequested,
  equipmentsRequestFailed,
  equipmentsUpdated,
  equipmentsUpdateFailed,
  equipmentsUpdateRequested
} from "../slices/equipmentSlice";

const equipment = "/Equipment";
export const getEquipments = (bookingDate = '', slotsIDs = []) => (dispatch) => {
  let nextQuery = bookingDate && `?bookingDate=${bookingDate}`;
  slotsIDs.forEach(slotId => {
    nextQuery = nextQuery + `&slotIds=${slotId}`;
  });
  return dispatch(
    httpCallBegan({
      url: `${equipment}/GetEquipment${nextQuery}`,
      method: "get",
      onStart: equipmentsRequested.type,
      onSuccess: equipmentsReceived.type,
      onError: equipmentsRequestFailed.type,
    })
  );
};

export const getEquipmentById = (id) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${equipment}/GetEquipmentbyid?id=${id}`,
      method: HTTP_ACTIONS.GET,
      onStart: equipmentRequested.type,
      onSuccess: equipmentReceived.type,
      onError: equipmentRequestFailed.type,
    })
  );
};

export const deleteEquipmentById = (id) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${equipment}/DeleteEquipmentById?Id=${id}`,
      method: HTTP_ACTIONS.POST,
      onStart: equipmentsDeletionRequested.type,
      onSuccess: equipmentsDeleted.type,
      onError: equipmentsDeletionFailed.type,
    })
  );
};

export const postEquipment = (data) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${equipment}/AddEquipment`,
      method: HTTP_ACTIONS.POST,
      data: data,
      onStart: equipmentsCreationRequested.type,
      onSuccess: equipmentsCreated.type,
      onError: equipmentsCreationFailed.type,
    })
  );
};
export const updateEquipment = (data) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${equipment}/UpdateEquipment`,
      method: HTTP_ACTIONS.POST,
      data: data,
      onStart: equipmentsUpdateRequested.type,
      onSuccess: equipmentsUpdated.type,
      onError: equipmentsUpdateFailed.type,
    })
  );
};
