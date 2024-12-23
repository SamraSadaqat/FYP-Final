import AppSpinner from "elements/AppLoader/Spinner";
import { META_DATA_ENUMS } from "modules/admin/constants/constants";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getScreenTypes } from "redux/modules/admin/actions/metaAction";
import { getRoleById } from 'redux/modules/admin/actions/rolesAction';
import { resetFunction } from "redux/modules/admin/slices/rolesSlice";

import CreateRoleForm from "./CreateRoleForm";


const CreateRole = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading } = useSelector((store) => store.admin.roles);
  useEffect(() => {
    dispatch(getScreenTypes({ typeName: META_DATA_ENUMS.SCREENS }));
    if (id) {
      dispatch(getRoleById(id));
    }
    return () => {
      dispatch(resetFunction());
    };
  }, []);
  return (
    <>
      {loading ? (
        <AppSpinner size="large">
          <div className="login-wrapper custom-antd-form" />
        </AppSpinner>
      ) : (
        <div className="login-wrapper custom-antd-form">
          <CreateRoleForm id={id}/>
        </div>
      )}
    </>
  );
};
export default CreateRole;
