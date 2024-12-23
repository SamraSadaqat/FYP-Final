import AppSpinner from "elements/AppLoader/Spinner";
import { META_DATA_ENUMS } from 'modules/admin/constants/constants';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getEmployeeById } from 'redux/modules/admin/actions/employeesAction';
import { getScreenTypes } from 'redux/modules/admin/actions/metaAction';
import { resetFunction } from 'redux/modules/admin/slices/employeesSlice';

import CreateEmployeeForm from "./CreateEmployeeForm";


const CreateEmployee = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading } = useSelector((store) => store.admin.employees);
  useEffect(() => {
    dispatch(getScreenTypes({ typeName: META_DATA_ENUMS.EMPLOYEE_TYPES }));
    if (id) {
      dispatch(getEmployeeById(id));
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
          <CreateEmployeeForm />
        </div>
      )}
    </>
  );
};
export default CreateEmployee;
