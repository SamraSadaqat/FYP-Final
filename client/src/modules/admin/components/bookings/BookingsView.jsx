import { Card, Col, Row } from "antd";
import Button from "elements/Button/Button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getBookings } from 'redux/modules/admin/actions/bookingsAction';
import { resources } from "resources/app_resources";

import BookingCalender from './BookingCalender';
import BookingsGrid from "./BookingsGrid";




function BookingsView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showCalender, setShowCalender] = useState(false);
  const { list } = useSelector(
    (store) => store.admin.bookings
  );
  const {
    CREATE_BOOKING,
    VIEW_CALENDER,
    HIDE_CALENDER
  } = resources;

  useEffect(() => {
    dispatch(getBookings());
  }, []);

  const redirectToCreatePage = () => {
    navigate(`/user/bookings/create`);
  };
  const setCalender = () => {
    setShowCalender(!showCalender);
  };
  const BTN_CALENDER = showCalender? HIDE_CALENDER: VIEW_CALENDER;
  return (
    <Row>
      <Col span={24}>
        <div className="justify-end">
          <Button
            onClick={redirectToCreatePage}
            className="submit-btn-sm"
          >
            {CREATE_BOOKING}
          </Button>
          <Button
            onClick={setCalender}
            className="submit-btn-sm ml4"
          >
            {BTN_CALENDER}
          </Button>
        </div>
      </Col>
      <Col span={24}>
        {showCalender && (
          <Card className="mt5">
          <BookingCalender data={list}/>
          </Card>
        )}
        <BookingsGrid />
      </Col>
    </Row>
  );
}

export default BookingsView;
