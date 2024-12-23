import AppSpinner from "elements/AppLoader/Spinner";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBookingById } from "redux/modules/admin/actions/bookingsAction";
import { getCourts } from "redux/modules/admin/actions/courtsAction";
import { resetFunction } from "redux/modules/admin/slices/bookingsSlice";

import CreateBookingForm from "./CreateBookingForm";


const CreateBooking = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading } = useSelector((store) => store.admin.courts);
  useEffect(() => {
    dispatch(getCourts());
    if (id) {
      dispatch(getBookingById(id));
    }
    return () => {
      dispatch(resetFunction());
    };
  }, []);
  return (
    <>
      {loading ? (
        <AppSpinner size="large">
          <div className="login-wrapper" />
        </AppSpinner>
      ) : (
        <div className="login-wrapper">
          <CreateBookingForm id={parseInt(id)} />
        </div>
      )}
    </>
  );
};
export default CreateBooking;
