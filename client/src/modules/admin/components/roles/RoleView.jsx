import { Col, Row } from "antd";
import Button from "elements/Button/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import { resources } from "resources/app_resources";

import RolesGrid from "./RoleGrid";

function RolesView() {
  const navigate = useNavigate();
  const { CREATE_ROLES_PAGE_TITLE } = resources;
  const redirectToCreateRolesPage = () => {
    navigate(`/admin/roles/create`);
  };
  return (
    <Row>
      <Col span={24}>
        <div className="justify-end">
          <Button onClick={redirectToCreateRolesPage} className="submit-btn-sm">
            {CREATE_ROLES_PAGE_TITLE}
          </Button>
        </div>
      </Col>
      <Col span={24}>
        <RolesGrid />
      </Col>
    </Row>
  );
}

export default RolesView;
