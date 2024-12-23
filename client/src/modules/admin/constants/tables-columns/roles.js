import React from "react";
import { Col, Row } from "antd";
import Button from "elements/Button/Button";
import Space from "elements/Spacer/Spacer";
import Tag from "elements/Tag/Tag";
import { resources } from "resources/app_resources";

import { DeleteFilled, EditFilled } from "@ant-design/icons";

export const ROLES_TABLE_COLUMNS = [
  {
    title: "Name",
    dataIndex: "name",
    type: "text",
    key: "name",
  },
  {
    title: "Role Permissions",
    dataIndex: "rolePermissions",
    type: "text",
    key: "rolePermissions",
    width: "40%",
    render: (dt) => {
      return (
        <Row gutter={16}>
          {React.Children.toArray(
            dt.map((permission) => (
              <Col span={"auto"} style={{ marginBottom: "0.5rem" }}>
                <Tag
                  color="#d9d8d8"
                  fontcolor="#000"
                  title={permission.screenName}
                  key={permission.screenId}
                />
              </Col>
            ))
          )}
        </Row>
      );
    },
  },
  {
    title: "Active",
    dataIndex: "isActive",
    type: "text",
    key: "isActive",
    render: (dt) => {
      return (
        <Tag color="#f3f3f3" fontcolor="#000000" title={dt ? "Yes" : "No"} />
      );
    },
  },
  {
    title: "Actions",
    dataIndex: "actions",
    type: "text",
    key: "actions",
    render: (dt) => (
      <Space direction="horizontal" size={10}>
        {dt.map((item) => {
          return item.title === resources.EDIT_LABEL ? (
            <Button
              key={`${item.id}-edit`}
              className="iconBorder"
              onClick={() => item.function(item)}
              icon={<EditFilled />}
            />
          ) : (
            <Button
              key={`${item.id}-delete`}
              className="iconBorder"
              onClick={() => item.function(item.id)}
              icon={<DeleteFilled />}
            />
          );
        })}
      </Space>
    ),
  },
];
