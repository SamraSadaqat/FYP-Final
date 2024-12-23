import { Col } from "antd";
import SearchableTable from "elements/DataTable/SearchableTable";
import { notification } from "elements/Notification/Notification";
import { NotificationTypes } from "elements/Notification/notificationConstants";
import { BOOKINGS_TABLE_COLUMNS } from "modules/admin/constants/tables-columns/bookings";
import ConfirmationModal from "modules/common/components/modals/ConfirmationModal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HTTP_ACTIONS } from "redux/constants/constants";
import {
  deleteBookingById,
  getBookings
} from "redux/modules/admin/actions/bookingsAction";
import { resources } from "resources/app_resources";
const BookingsGrid = () => {
  const dispatch = useDispatch();
  const { list, error, loading, actionStatus, actionType } = useSelector(
    (store) => store.admin.bookings
  );

  const { BOOKING_TABLE_TITLE, DELETE_LABEL, DELETE_CONTENT } = resources;

  const [bookingsData, setBookingData] = useState([]);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [deleteId, setDeleteId] = useState();

  function getRowKey(record) {
    return record.id;
  }

  useEffect(() => {
    if (actionStatus) {
      if (actionType && actionType === HTTP_ACTIONS.DELETE) {
        notification(
          NotificationTypes.SUCCESS,
          "Success",
          "Slot deleted successfully.",
          2
        );
        dispatch(getBookings());
      }
    }
  }, [actionStatus]);

  const deleteBooking = (id) => {
    setDeleteId(id);
    setVisibleDelete(true);
  };

  useEffect(() => {
    const newArray = list.map((item) => ({
      ...item,
      actions: [
        {
          title: DELETE_LABEL,
          id: item.id,
          function: deleteBooking,
        },
      ],
    }));
    setBookingData(newArray);
  }, [list]);

  return (
    <div className="container">
      <Col span={24} className="table-wrapper">
        <ConfirmationModal
          visible={visibleDelete}
          setVisible={setVisibleDelete}
          onOk={() => dispatch(deleteBookingById(deleteId))}
          content={DELETE_CONTENT}
        />

        <SearchableTable
          columns={BOOKINGS_TABLE_COLUMNS}
          tableTitle={BOOKING_TABLE_TITLE}
          data={bookingsData}
          error={error}
          loading={loading}
          search={true}
          rowKey={getRowKey}
        />
      </Col>
    </div>
  );
};

export default BookingsGrid;
