import { Col, Row } from "antd";
import Button from "elements/Button/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import { resources } from "resources/app_resources";

import SlotsGrid from "./SlotsGrid";



function SlotsView() {
  const navigate = useNavigate();
  const {
    CREATE_SLOTS_PAGE_TITLE,
  } = resources;
  const redirectToCreateCourtsPage = () => {
    navigate(`/admin/slots/create`);
  };
  return (
    <Row>
      <Col span={24}>
        <div className="justify-end">
          <Button
            onClick={redirectToCreateCourtsPage}
            className="submit-btn-sm"
          >
            {CREATE_SLOTS_PAGE_TITLE}s
          </Button>
        </div>
      </Col>
      <Col span={24}>
        <SlotsGrid />
      </Col>
    </Row>
  );
}

export default SlotsView;
