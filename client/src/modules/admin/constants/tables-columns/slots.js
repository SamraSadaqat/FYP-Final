import React from "react";
import Button from "elements/Button/Button";
import Space from "elements/Spacer/Spacer";
import Tag from "elements/Tag/Tag";
import { DAYS } from "redux/constants/constants";
import { getFormattedDT } from "redux/helpers/helper";
import { resources } from "resources/app_resources";

import { DeleteFilled, EditFilled } from "@ant-design/icons";


export const SLOTS_TABLE_COLUMNS = [
  {
    title: "Name",
    dataIndex: "courtName",
    type: "text",
    key: "courtName",
  },
  {
    title: "Rate",
    dataIndex: "rate",
    type: "text",
    key: "rate",
  },
  {
    title: "Start Time ",
    dataIndex: "startTime",
    type: "text",
    key: "startTime",
    render: (dt) => getFormattedDT(dt, 'h:mm A'),
  },
  {
    title: "End Time",
    dataIndex: "endTime",
    type: "text",
    key: "endTime",
    render: (dt) => getFormattedDT(dt, 'h:mm A'),
  },
  {
    title: "Day",
    dataIndex: "dayId",
    type: "text",
    key: "dayId",
    render: (dt) => DAYS[dt],
  },
  {
    title: "Duration",
    dataIndex: "duration",
    type: "text",
    key: "duration",
  },
  {
    title: "Available",
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
              key={`${item.id}-edit`}
              className="iconBorder"
              onClick={() => item.function(item.id)}
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
