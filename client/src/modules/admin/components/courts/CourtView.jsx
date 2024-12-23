import { Col, Row } from "antd";
import Button from "elements/Button/Button";
import React from "react";
import { useNavigate } from "react-router-dom";

import CourtsGrid from "./CourtGrid";

function CourtsView() {
  const navigate = useNavigate();

  const redirectToCreateCourtsPage = () => {
    navigate(`/admin/courts/create`);
  };
  return (
    <Row>
      <Col span={24}>
        <div className="justify-end">
          <Button
            onClick={redirectToCreateCourtsPage}
            className="submit-btn-sm"
          >
            Create Court
          </Button>
        </div>
      </Col>
      <Col span={24}>
        <CourtsGrid />
      </Col>
    </Row>
  );
}

export default CourtsView;
