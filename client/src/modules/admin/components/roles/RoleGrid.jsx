import { Col } from "antd";
import SearchableTable from "elements/DataTable/SearchableTable";
import { notification } from "elements/Notification/Notification";
import { NotificationTypes } from "elements/Notification/notificationConstants";
import { ROLES_TABLE_COLUMNS } from "modules/admin/constants/tables-columns/roles";
import ConfirmationModal from "modules/common/components/modals/ConfirmationModal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HTTP_ACTIONS } from "redux/constants/constants";
import {
  deleteRoleById,
  getRoles
} from "redux/modules/admin/actions/rolesAction";
import { resources } from "resources/app_resources";

const RolesGrid = () => {
  const dispatch = useDispatch();
  const { list, error, loading, actionStatus, actionType, isError } =
    useSelector((store) => store.admin.roles);
  const navigate = useNavigate();

  const [rolesData, setRolesData] = useState([]);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [deleteId, setDeleteId] = useState();

  function getRowKey(record) {
    return record.id;
  }

  const getRoleByItem = (item) => {
    const { id } = item;
    navigate(`/admin/roles/edit/${id}`, item);
  };

  const deleteRole = (id) => {
    setDeleteId(id);
    setVisibleDelete(true);
  };

  useEffect(() => {
    dispatch(getRoles());
  }, []);

  useEffect(() => {
      const newArray = list.map((item) => ({
        ...item,
        actions: [
          {
            title: resources.EDIT_LABEL,
            id: item.id,
            function: getRoleByItem,
          },
          {
            title: resources.DELETE_LABEL,
            id: item.id,
            function: deleteRole,
          },
        ],
      }));
      setRolesData(newArray);
  }, [list]);

  useEffect(() => {
    if (actionStatus) {
      if (actionType && actionType === HTTP_ACTIONS.DELETE) {
        notification(
          NotificationTypes.SUCCESS,
          "Success",
          "Role deleted successfully.",
          2
        );
        dispatch(getRoles());
      }
    }
    if (isError) {
      const incomingError = error.errors.join(`\n`).toString();
      notification(NotificationTypes.ERROR, "Error", incomingError, 2);
    }
  }, [actionStatus, isError]);

  return (
    <Col span={24}>
      <ConfirmationModal
        visible={visibleDelete}
        setVisible={setVisibleDelete}
        onOk={() => dispatch(deleteRoleById(deleteId))}
        content={resources.DELETE_CONTENT}
      />
      <SearchableTable
        columns={ROLES_TABLE_COLUMNS}
        tableTitle={"All Roles"}
        data={rolesData}
        error={error}
        loading={loading}
        search={true}
        rowKey={getRowKey}
      />
    </Col>
  );
};

export default RolesGrid;
