import AppSpinner from "elements/AppLoader/Spinner";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById } from "redux/modules/admin/actions/usersAction";
import { resetFunction } from "redux/modules/admin/slices/usersSlice";

import CreateUserForm from "./CreateUserForm";

const CreateUser = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading } = useSelector((store) => store.admin.users);

  useEffect(() => {
    if (id) {
      dispatch(getUserById(id));
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
          <CreateUserForm id={id} />
        </div>
      )}
    </>
  );
};
export default CreateUser;
