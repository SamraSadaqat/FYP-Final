import { Col, Row } from "antd";
import Button from "elements/Button/Button";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getEquipments } from "redux/modules/admin/actions/equipmentAction";
import { resources } from "resources/app_resources";

import EquipmentGrid from "./EquipmentGrid";


function EquipmentView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { CREATE_EQUIPMENTS_PAGE_TITLE } = resources;
  const redirectToCreateEquipmentPage = () => {
    navigate(`/admin/equipments/create`);
  };

  useEffect(() => {
    dispatch(getEquipments());
  }, []);
  return (
    <Row>
      <Col span={24}>
        <div className="justify-end">
          <Button
            onClick={redirectToCreateEquipmentPage}
            className="submit-btn-sm"
          >
            {CREATE_EQUIPMENTS_PAGE_TITLE}
          </Button>
        </div>
      </Col>
      <Col span={24}>
        <EquipmentGrid />
      </Col>
    </Row>
  );
}

export default EquipmentView;
