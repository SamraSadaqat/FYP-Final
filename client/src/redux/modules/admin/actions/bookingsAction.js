import { HTTP_ACTIONS } from "../../../constants/constants";
import { httpCallBegan } from "../../../store/httpActions";
import {
  bookingReceived,
  bookingRequested,
  bookingRequestFailed,
  bookingsCreated,
  bookingsCreationFailed,
  bookingsCreationRequested,
  bookingsDeleted,
  bookingsDeletionFailed,
  bookingsDeletionRequested,
  bookingsReceived,
  bookingsRequested,
  bookingsRequestFailed,
  bookingsUpdated,
  bookingsUpdateFailed,
  bookingsUpdateRequested,
} from "../slices/bookingsSlice";

const BOOKING = "Booking";
export const getBookings = () => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${BOOKING}/GetAllBookings`,
      method: HTTP_ACTIONS.GET,
      onStart: bookingsRequested.type,
      onSuccess: bookingsReceived.type,
      onError: bookingsRequestFailed.type,
    })
  );
};

export const getBookingById = (id) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${BOOKING}/GetBookingById?bookingId=${id}`,
      method: HTTP_ACTIONS.GET,
      onStart: bookingRequested.type,
      onSuccess: bookingReceived.type,
      onError: bookingRequestFailed.type,
    })
  );
};

export const deleteBookingById = (id) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${BOOKING}/DeleteBooking?bookingId=${id}`,
      method: HTTP_ACTIONS.POST,
      onStart: bookingsDeletionRequested.type,
      onSuccess: bookingsDeleted.type,
      onError: bookingsDeletionFailed.type,
    })
  );
};

export const postBooking = (data) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${BOOKING}/CreateBooking`,
      method: HTTP_ACTIONS.POST,
      data: data,
      onStart: bookingsCreationRequested.type,
      onSuccess: bookingsCreated.type,
      onError: bookingsCreationFailed.type,
    })
  );
};
export const updateBooking = (data) => (dispatch) => {
  return dispatch(
    httpCallBegan({
      url: `${BOOKING}/UpdateBooking`,
      method: HTTP_ACTIONS.POST,
      data: data,
      onStart: bookingsUpdateRequested.type,
      onSuccess: bookingsUpdated.type,
      onError: bookingsUpdateFailed.type,
    })
  );
};
