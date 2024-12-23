import { Col, Row } from "antd";
import Button from "elements/Button/Button";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRoles } from "redux/modules/admin/actions/rolesAction";
import { resources } from "resources/app_resources";

import UsersGrid from "./UserGrid";

function UsersView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { CREATE_USERS_PAGE_TITLE } = resources;
  const redirectToCreateRolesPage = () => {
    navigate(`/admin/users/create`);
  };

  useEffect(() => {
    dispatch(getRoles());
  }, []);
  return (
    <Row>
      <Col span={24}>
        <div className="justify-end">
          <Button onClick={redirectToCreateRolesPage} className="submit-btn-sm">
            {CREATE_USERS_PAGE_TITLE}
          </Button>
        </div>
      </Col>
      <Col span={24}>
        <UsersGrid />
      </Col>
    </Row>
  );
}

export default UsersView;
