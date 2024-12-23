import AppSpinner from "elements/AppLoader/Spinner";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCourts } from "redux/modules/admin/actions/courtsAction";
import { getSlotById } from 'redux/modules/admin/actions/slotsAction';
import { resetFunction } from "redux/modules/admin/slices/courtsSlice";

import CreateSlotForm from "./CreateSlotForm";




const CreateSlot = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading } = useSelector((store) => store.admin.courts);
  useEffect(() => {
    dispatch(getCourts());
    if (id) {
      dispatch(getSlotById(id));
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
          <CreateSlotForm id={parseInt(id)} />
        </div>
      )}
    </>
  );
};
export default CreateSlot;


