import { Col } from "antd";
import SearchableTable from "elements/DataTable/SearchableTable";
import { notification } from "elements/Notification/Notification";
import { NotificationTypes } from "elements/Notification/notificationConstants";
import { USERS_TABLE_COLUMNS } from "modules/admin/constants/tables-columns/users";
import ConfirmationModal from "modules/common/components/modals/ConfirmationModal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HTTP_ACTIONS } from "redux/constants/constants";
import {
  deleteUserById,
  getUsers
} from "redux/modules/admin/actions/usersAction";
import { resources } from "resources/app_resources";

const UsersGrid = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [usersData, setUsersData] = useState([]);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [deleteId, setDeleteId] = useState();

  const { EDIT_LABEL, DELETE_LABEL, DELETE_CONTENT } = resources;

  const { list, error, loading, actionStatus, actionType, isError } =
    useSelector((store) => store.admin.users);

  function getRowKey(record) {
    return record.id;
  }
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const getUserById = (id) => {
    navigate(`/admin/users/edit/${id}`);
  };

  const deleteUser = (id) => {
    setDeleteId(id);
    setVisibleDelete(true);
  };

  useEffect(() => {
    if (actionStatus) {
      if (actionType && actionType === HTTP_ACTIONS.DELETE) {
        notification(
          NotificationTypes.SUCCESS,
          "Success",
          "User deleted successfully.",
          2
        );
        dispatch(getUsers());
      }
    }
    if (isError && Object.entries(error).length > 0) {
      const errorMessage = error.errors;
      notification(NotificationTypes.ERROR, "Error", errorMessage[0], 2);
    }
  }, [actionStatus, isError]);
  useEffect(() => {
      const newArray = list.map((item) => ({
        ...item,
        actions: [
          {
            title: EDIT_LABEL,
            id: item.id,
            function: getUserById,
          },
          {
            title: DELETE_LABEL,
            id: item.id,
            function: deleteUser,
          },
        ],
      }));
      setUsersData(newArray);
  }, [list]);

  return (
    <Col span={24}>
      <ConfirmationModal
        visible={visibleDelete}
        setVisible={setVisibleDelete}
        onOk={() => dispatch(deleteUserById(deleteId))}
        content={DELETE_CONTENT}
      />

      <SearchableTable
        columns={USERS_TABLE_COLUMNS}
        tableTitle={"All Users"}
        data={usersData}
        error={error}
        loading={loading}
        search={true}
        rowKey={getRowKey}
      />
    </Col>
  );
};

export default UsersGrid;
