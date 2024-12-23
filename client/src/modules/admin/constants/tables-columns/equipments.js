import React from "react";
import Button from "elements/Button/Button";
import Space from "elements/Spacer/Spacer";
import Tag from "elements/Tag/Tag";
import { resources } from "resources/app_resources";

import { DeleteFilled, EditFilled } from "@ant-design/icons";

export const EQUIPMENTS_TABLE_COLUMNS = [
  {
    title: "Name",
    dataIndex: "name",
    type: "text",
    key: "name",
  },
  {
    title: "Charges",
    dataIndex: "rate",
    type: "text",
    key: "rate",
  },
  {
    title: "Availability",
    dataIndex: "isAvailable",
    type: "text",
    key: "isAvailable",
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
