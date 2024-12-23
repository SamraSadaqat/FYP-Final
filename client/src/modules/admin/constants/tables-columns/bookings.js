import React from "react";
import { Col, Row } from "antd";
import Button from "elements/Button/Button";
import Space from "elements/Spacer/Spacer";
import Tag from "elements/Tag/Tag";
import { BOOKING_STATUS, DAYS } from "redux/constants/constants";
import { getFormattedDT } from "redux/helpers/helper";
import { resources } from "resources/app_resources";

import { DeleteFilled, EditFilled } from "@ant-design/icons";

const getFormattedTime = (dt) => getFormattedDT(dt, "h:mm A");

export const BOOKINGS_TABLE_COLUMNS = [
  {
    title: "Booking Date",
    dataIndex: "bookingDate",
    type: "text",
    key: "bookingDate",
    width: "20%",
    render: (dt) => getFormattedDT(dt, "DD MMMM, YYYY"),
  },
  {
    title: "Booking Amount",
    dataIndex: "bookingAmount",
    type: "text",
    key: "bookingAmount",
    render: (dt) => {
      return (
        <Row gutter={16}>
          <Tag
            color="#AED6F1"
            fontcolor="#154360"
            title={dt}
            fullWidth={true}
          />
        </Row>
      );
    },
  },
  {
    title: "Booking Slots",
    dataIndex: "bookingSlots",
    type: "text",
    key: "bookingSlots",
    width: "40%",
    render: (dt) => {
      return (
        <Row gutter={16}>
          {React.Children.toArray(
            dt.map((item) => {
              const data =
                item?.startTime &&
                item?.endTime &&
                `${DAYS[item.dayId || 0]} (${getFormattedTime(
                  item.startTime
                )} -- ${getFormattedTime(item.endTime)})`;
              return (
                <Col span={"auto"} style={{ marginBottom: "0.5rem" }}>
                  <Tag
                    color="#A3E4D7"
                    fontcolor="#0E6251"
                    title={data}
                    fullWidth={true}
                  />
                </Col>
              );
            })
          )}
        </Row>
      );
    },
  },
  {
    title: "Court Name",
    dataIndex: "court",
    type: "text",
    key: "court",
    width: "15%",
    render: (dt) => {
      return (
        <Row gutter={16}>
          <Tag color="#F5B7B1" fontcolor="#78281F" title={dt.name} />
        </Row>
      );
    },
  },
  {
    title: "Internal",
    dataIndex: "isInternal",
    type: "text",
    key: "isInternal",
    render: (dt) => {
      return (
        <Tag color="#f3f3f3" fontcolor="#000000" title={dt ? "Yes" : "No"} />
      );
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    type: "text",
    key: "status",
    render: (dt) => {
      const { color, fontColor, title } = BOOKING_STATUS[dt | 0];
      return <Tag color={color} fontcolor={fontColor} title={title} />;
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
