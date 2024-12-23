import { Col } from "antd";
import SearchableTable from "elements/DataTable/SearchableTable";
import { notification } from "elements/Notification/Notification";
import { NotificationTypes } from "elements/Notification/notificationConstants";
import { COURTS_TABLE_COLUMNS } from "modules/admin/constants/tables-columns/courts";
import ConfirmationModal from "modules/common/components/modals/ConfirmationModal";
import ImagePreviewModal from "modules/common/components/modals/ImagePreviewModal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HTTP_ACTIONS } from "redux/constants/constants";
import {
  deleteCourtById,
  getCourts
} from "redux/modules/admin/actions/courtsAction";
import { resources } from "resources/app_resources";
const CourtsGrid = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list, error, loading, actionStatus, actionType } = useSelector(
    (store) => store.admin.courts
  );

  const {
    EDIT_LABEL,
    PREVIEW_LABEL,
    COURT_TABLE_TITLE,
    DELETE_LABEL,
    DELETE_CONTENT,
  } = resources;

  const [courtsData, setCourtsData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [imageUrl, setImageUrl] = useState([]);

  function getRowKey(record) {
    return record.id;
  }

  useEffect(() => {
    dispatch(getCourts());
  }, []);

  useEffect(() => {
    if (actionStatus) {
      if (actionType && actionType === HTTP_ACTIONS.DELETE) {
        notification(
          NotificationTypes.SUCCESS,
          "Success",
          "Court deleted successfully.",
          2
        );
        dispatch(getCourts());
      }
    }
  }, [actionStatus]);

  const getCourtId = (id) => {
    navigate(`/admin/courts/edit/${id}`);
  };

  const previewCourtImageById = (id) => {
    setVisible(true);
    const courtDetails = list.find((item) => item.id === id);
    const medias = courtDetails.medias;
    const response = [];
    if (medias && medias.length > 0) {
      medias.forEach((item) => {
        const url = item.path;
        const obj = {
          image: url,
        };
        response.push(obj);
      });
    }
    setImageUrl(response);
  };
  const deleteCourt = (id) => {
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
            function: getCourtId,
          },
          {
            title: PREVIEW_LABEL,
            id: item.id,
            function: previewCourtImageById,
          },
          {
            title: DELETE_LABEL,
            id: item.id,
            function: deleteCourt,
          },
        ],
      }));
      setCourtsData(newArray);
  }, [list]);

  return (
    <div className="container">
      <Col span={24} className="table-wrapper">
        <ImagePreviewModal
          visible={visible}
          setVisible={setVisible}
          src={imageUrl}
        />

        <ConfirmationModal
          visible={visibleDelete}
          setVisible={setVisibleDelete}
          onOk={() => dispatch(deleteCourtById(deleteId))}
          content={DELETE_CONTENT}
        />

        <SearchableTable
          columns={COURTS_TABLE_COLUMNS}
          tableTitle={COURT_TABLE_TITLE}
          data={courtsData}
          error={error}
          loading={loading}
          search={true}
          rowKey={getRowKey}
        />
      </Col>
    </div>
  );
};

export default CourtsGrid;
