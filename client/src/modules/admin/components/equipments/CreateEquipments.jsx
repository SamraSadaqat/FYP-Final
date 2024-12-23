import AppSpinner from "elements/AppLoader/Spinner";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEquipmentById } from "redux/modules/admin/actions/equipmentAction";
import { resetFunction } from "redux/modules/admin/slices/equipmentSlice";

import CreateEquipmentForm from "./CreateEquipmentForm";

const CreateEquipment = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading } = useSelector((store) => store.admin.equipments);

  useEffect(() => {
    if (id) {
      dispatch(getEquipmentById(id));
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
          <CreateEquipmentForm id={id} />
        </div>
      )}
    </>
  );
};
export default CreateEquipment;
