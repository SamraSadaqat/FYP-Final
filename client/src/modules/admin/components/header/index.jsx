import { Card, Typography } from "antd";
import Button from "elements/Button/Button";
import { PropTypes } from "prop-types";
import React from "react";

const { Header } = Layout;
const { Title } = Typography;
function AdminHeader(props) {
  const { title } = props;
  return (
    <Card className="admin-header">
      <Title>
        {title}
        <Button type="primary" className="admin-header--btn">
          Create
        </Button>
      </Title>
    </Card>
  );
}

AdminHeader.propTypes = {
  title: PropTypes.string,
};

export default AdminHeader;
