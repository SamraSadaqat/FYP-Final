import AppSpinner from "elements/AppLoader/Spinner";
import { META_DATA_ENUMS } from "modules/admin/constants/constants";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCourtById } from "redux/modules/admin/actions/courtsAction";
import { getCourtTypes } from "redux/modules/admin/actions/metaAction";
import { resetFunction } from "redux/modules/admin/slices/courtsSlice";

import CreateCourtForm from "./CreateCourtForm";

const CreateCourt = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading } = useSelector((store) => store.admin.courts);
  useEffect(() => {
    dispatch(getCourtTypes({ typeName: META_DATA_ENUMS.COURT_TYPES }));
    if (id) {
      dispatch(getCourtById(id));
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
          <CreateCourtForm id={parseInt(id)} />
        </div>
      )}
    </>
  );
};
export default CreateCourt;


