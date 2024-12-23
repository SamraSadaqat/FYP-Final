import { Col, Row } from "antd";
import Button from "elements/Button/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import { resources } from "resources/app_resources";

import EmployeesGrid from "./EmployeeGrid";

function EmployeesView() {
  const navigate = useNavigate();
  const { CREATE_EMPLOYEES_PAGE_TITLE } = resources;
  const redirectToCreateRolesPage = () => {
    navigate(`/admin/employees/create`);
  };
  return (
    <Row>
      <Col span={24}>
        <div className="justify-end">
          <Button onClick={redirectToCreateRolesPage} className="submit-btn-sm">
            {CREATE_EMPLOYEES_PAGE_TITLE}
          </Button>
        </div>
      </Col>
      <Col span={24}>
        <EmployeesGrid />
      </Col>
    </Row>
  );
}

export default EmployeesView;
