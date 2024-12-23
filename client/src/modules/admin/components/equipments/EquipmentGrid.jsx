import { Col } from "antd";
import SearchableTable from "elements/DataTable/SearchableTable";
import { notification } from "elements/Notification/Notification";
import { NotificationTypes } from "elements/Notification/notificationConstants";
import { EQUIPMENTS_TABLE_COLUMNS } from "modules/admin/constants/tables-columns/equipments";
import ConfirmationModal from "modules/common/components/modals/ConfirmationModal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HTTP_ACTIONS } from "redux/constants/constants";
import {
  deleteEquipmentById,
  getEquipments
} from "redux/modules/admin/actions/equipmentAction";
import { resources } from "resources/app_resources";

const EquipmentGrid = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [equipmentsData, setEquipmentsData] = useState([]);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [deleteId, setDeleteId] = useState();

  const { EDIT_LABEL, DELETE_LABEL, DELETE_CONTENT, EQUIPMENT_TABLE_TITLE } =
    resources;

  const { list, error, loading, actionStatus, actionType } = useSelector(
    (store) => store.admin.equipments
  );

  function getRowKey(record) {
    return record.id;
  }

  const getEquipmentById = (id) => {
    navigate(`/admin/equipments/edit/${id}`);
  };

  const deleteEquipment = (id) => {
    setDeleteId(id);
    setVisibleDelete(true);
  };

  useEffect(() => {
    if (actionStatus) {
      if (actionType && actionType === HTTP_ACTIONS.DELETE) {
        notification(
          NotificationTypes.SUCCESS,
          "Success",
          "Equipment deleted successfully.",
          2
        );
        dispatch(getEquipments());
      }
    }
  }, [actionStatus]);
  useEffect(() => {
      const newArray = list.map((item) => ({
        ...item,
        actions: [
          {
            title: EDIT_LABEL,
            id: item.id,
            function: getEquipmentById,
          },
          {
            title: DELETE_LABEL,
            id: item.id,
            function: deleteEquipment,
          },
        ],
      }));
      setEquipmentsData(newArray);
  }, [list]);

  return (
    <Col span={24}>
      <ConfirmationModal
        visible={visibleDelete}
        setVisible={setVisibleDelete}
        onOk={() => dispatch(deleteEquipmentById(deleteId))}
        content={DELETE_CONTENT}
      />

      <SearchableTable
        columns={EQUIPMENTS_TABLE_COLUMNS}
        tableTitle={EQUIPMENT_TABLE_TITLE}
        data={equipmentsData}
        error={error}
        loading={loading}
        search={true}
        rowKey={getRowKey}
      />
    </Col>
  );
};

export default EquipmentGrid;
