import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import { notification } from "elements/Notification/Notification";
import { NotificationTypes } from "elements/Notification/notificationConstants";
import { PropTypes } from "prop-types";
import React, { useState } from "react";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  if (file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      notification(
        NotificationTypes.ERROR,
        "resources_EN.ERROR",
        "resources_EN.INVLID_IMAGE",
        2
      );
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      notification(
        NotificationTypes.ERROR,
        "resources_EN.ERROR",
        "resources_EN.INVLID_IMAGE_SIZE",
        2
      );
    }
    return isJpgOrPng && isLt2M;
  } else {
    return false;
  }
};
const UploadImage = (props) => {
  const [loading, setLoading] = useState(false);
  const { setPictureInfo } = props;
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    getBase64(info.file.originFileObj, (url) => {
      setLoading(false);
      setImageUrl(url);
      setPictureInfo(imageUrl);
    });
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
          marginLeft: -12,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
      <Upload
        name="avatar"
        listType="picture-circle"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {uploadButton}
      </Upload>
    </>
  );
};
export default UploadImage;
UploadImage.propTypes = {
  setPictureInfo: PropTypes.func,
};
