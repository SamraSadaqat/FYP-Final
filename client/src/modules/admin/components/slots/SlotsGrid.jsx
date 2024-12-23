import { Col } from "antd";
import SearchableTable from "elements/DataTable/SearchableTable";
import { notification } from "elements/Notification/Notification";
import { NotificationTypes } from "elements/Notification/notificationConstants";
import { SLOTS_TABLE_COLUMNS } from "modules/admin/constants/tables-columns/slots";
import ConfirmationModal from "modules/common/components/modals/ConfirmationModal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HTTP_ACTIONS } from "redux/constants/constants";
import {
  deleteSlotById,
  getSlots
} from "redux/modules/admin/actions/slotsAction";
import { resources } from "resources/app_resources";
const SlotsGrid = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list, error, loading, actionStatus, actionType } = useSelector(
    (store) => store.admin.slots
  );

  const { EDIT_LABEL, SLOTS_TABLE_TITLE, DELETE_LABEL, DELETE_CONTENT } =
    resources;

  const [slotsData, setSlotsData] = useState([]);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [deleteId, setDeleteId] = useState();

  function getRowKey(record) {
    return record.id;
  }

  useEffect(() => {
    dispatch(getSlots());
  }, []);

  useEffect(() => {
    if (actionStatus) {
      if (actionType && actionType === HTTP_ACTIONS.DELETE) {
        notification(
          NotificationTypes.SUCCESS,
          "Success",
          "Slot deleted successfully.",
          2
        );
        dispatch(getSlots());
      }
    }
  }, [actionStatus]);

  const getSlotId = (id) => {
    navigate(`/admin/slots/edit/${id}`);
  };

  const deleteSlot = (id) => {
    setDeleteId(id);
    setVisibleDelete(true);
  };

  useEffect(() => {
      const newArray = list.map((item) => ({
        ...item,
        actions: [
          {
            title: EDIT_LABEL,
            id: item.id,
            function: getSlotId,
          },
          {
            title: DELETE_LABEL,
            id: item.id,
            function: deleteSlot,
          },
        ],
      }));
      setSlotsData(newArray);
  }, [list]);

  return (
    <div className="container">
      <Col span={24} className="table-wrapper">
        <ConfirmationModal
          visible={visibleDelete}
          setVisible={setVisibleDelete}
          onOk={() => dispatch(deleteSlotById(deleteId))}
          content={DELETE_CONTENT}
        />

        <SearchableTable
          columns={SLOTS_TABLE_COLUMNS}
          tableTitle={SLOTS_TABLE_TITLE}
          data={slotsData}
          error={error}
          loading={loading}
          search={true}
          rowKey={getRowKey}
        />
      </Col>
    </div>
  );
};

export default SlotsGrid;
