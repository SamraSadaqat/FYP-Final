import { PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import { PropTypes } from "prop-types";
import React from "react";
import axios from "redux/auth/axios";

import { handleBeforeUpload } from "./UploadImageHelpers";

const MediaUpload = (props) => {
  const { setFileList, onPreview } = props;

  return (
    <Upload
      listType="picture-card"
      beforeUpload={(file) => handleBeforeUpload(file, setFileList)}
      name="image"
      onPreview={onPreview}
      {...props}
    >
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    </Upload>
  );
};

export default MediaUpload;
MediaUpload.propTypes = {
  setFileList: PropTypes.func,
  onPreview: PropTypes.func,
};
export const bulkMediaUpload = (fileList) => {
  const formData = new FormData();
  const token = localStorage.getItem("accessToken");

  fileList.forEach((file) => {
    formData.append("MediaFiles", file.file);
  });

  return axios.post("/Media/UploadBulk", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteMedia = (id) => {
  return axios.post(`/Media/DeleteMedia?mediaId=${id}`);
};
