import React from "react";
import { Col, Row } from "antd";
import Button from "elements/Button/Button";
import Space from "elements/Spacer/Spacer";
import Tag from "elements/Tag/Tag";
import { resources } from "resources/app_resources";

import { DeleteFilled, EditFilled } from "@ant-design/icons";

export const USERS_TABLE_COLUMNS = [
  {
    title: "Name",
    dataIndex: "userName",
    type: "text",
    key: "userName",
  },
  {
    title: "Email",
    dataIndex: "email",
    type: "text",
    key: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
    type: "text",
    key: "mobile",
  },
  {
    title: "Roles",
    dataIndex: "roles",
    type: "text",
    key: "roles",
    width: "40%",
    render: (dt) => {
      return (
        <Row gutter={16}>
          {React.Children.toArray(
            dt.map((role) => (
              <Col span={"auto"} style={{ marginBottom: "0.5rem" }}>
                <Tag
                  color="#f3f3f3"
                  fontcolor="#000000"
                  title={role.name}
                  key={role.id}
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
              key={`${item}-edit`}
              className="iconBorder"
              onClick={() => item.function(item.id)}
              icon={<EditFilled />}
            />
          ) : (
            <Button
              key={`${item}-delete`}
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
