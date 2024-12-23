import { DeleteFilled } from "@ant-design/icons";
import { Col, Form, Image, Row, Select as CustomSelect } from "antd";
import { REGEX } from "constants/constants";
import Button from "elements/Button/Button";
import Checkbox from "elements/Checkbox/Checkbox";
import Input from "elements/Input/Input";
import InputNumber from "elements/InputNumber/InputNumber";
import { notification } from "elements/Notification/Notification";
import { NotificationTypes } from "elements/Notification/notificationConstants";
import Select from "elements/Select/Select";
import Space from "elements/Spacer/Spacer";
import CustomTextArea from "elements/TextArea/TextArea";
import MediaUpload, {
  bulkMediaUpload,
  deleteMedia
} from "elements/Upload/MediaWizard";
import { handleRemove, onPreview } from "elements/Upload/UploadImageHelpers";
import { PropTypes } from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logger from "redux/helpers/logger";
import {
  postCourt,
  updateCourt
} from "redux/modules/admin/actions/courtsAction";
import { resources } from "resources/app_resources";

const { Option } = CustomSelect;

const CreateCourtForm = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [mediaIds, setMediaIds] = useState(new Set([]));
  const [fileList, setFileList] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);

  const ALPHANUM_VALIDATE = new RegExp(REGEX.EXTRA_SPACE_SPECIAL_CHARACTERS);

  const {
    COURT_NAME_EMPTY_VALIDATOR,
    COURT_NAME_VALIDATOR,
    COURT_NAME_PLACEHOLDER,
    COURT_NAME_LABEL,
    COACH_RATE_PLACEHOLDER,
    RESET_LABEL,
    SUBMIT_LABEL,
    HTTP_SUCCESS_CODE,
    REFREE_RATE_LABEL,
    REFREE_RATE_PLACEHOLDER,
    REFREE_RATE_EMPTY_VALIDATOR,
    COACH_RATE_LABEL,
    COACH_RATE_EMPTY_VALIDATOR,
    COURT_RATE_VALIDATOR,
  } = resources;

  const { loading, actionStatus, post, getById } = useSelector(
    (store) => store.admin.courts
  );

  const { courtTypes } = useSelector((store) => store.admin.meta);

  const redirectToCourtsPage = () => {
    navigate(`/admin/courts`);
  };

  const getCourtType = (id) => {
    let courtType = courtTypes.find((item) => item.id === id);
    courtType = courtType.name;
    return courtType;
  };

  const onFinish = async (values) => {
    if (fileList && fileList.length > 0) {
      await bulkMediaUpload(fileList)
        .then((response) => {
          logger.log(response.data);
          const incomingData = response.data.data;
          if (incomingData && incomingData.length >= 0) {
            const incomingIds = incomingData.map((item) => item.id);
            values.mediaIds = [...mediaIds, ...incomingIds];
            setMediaIds([...mediaIds, ...incomingIds]);
          }
        })
        .catch((error) => {
          logger.log(error);
        });
    } else {
      values.mediaIds = mediaIds;
    }
    createCourt(values);
  };

  const deleteMediaHandler = async (mediaId) => {
    await deleteMedia(mediaId)
      .then((response) => {
        logger.log(response.data);
        if (response.data.isValid) {
          notification(
            NotificationTypes.SUCCESS,
            "Delete",
            "Media deleted successfully.",
            2
          );
          const updatedImages = imageUrl.filter((item) => item.id !== mediaId);
          const updatedIds = mediaIds.filter((item) => item !== mediaId);
          setImageUrl(updatedImages);
          setMediaIds(updatedIds);
        }
      })
      .catch((error) => {
        logger.log(error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    logger.log("Failed:", errorInfo);
  };

  const createCourt = (values) => {
    let obj = {
      ...values,
      courtType: getCourtType(values.courtTypeId),
    };
    if (id) {
      const newObj = {
        ...obj,
        id: parseInt(id),
      };
      dispatch(updateCourt(newObj));
    } else {
      dispatch(postCourt(obj));
    }
  };

  useEffect(() => {
    if (getById) {
      form.setFieldsValue(getById);
      const medias = getById.medias;
      const response = [];
      if (medias && medias.length >= 0) {
        medias.forEach((item) => {
          const url = item.path;
          const obj = {
            ...item,
            image: url,
          };
          response.push(obj);
        });
        const existingIds = medias.map((item) => item.id);
        setMediaIds([...existingIds, ...mediaIds]);
      }
      setImageUrl(response);
    }
  }, [getById]);

  useEffect(() => {
    if (actionStatus) {
      if (post && post.statusCode === HTTP_SUCCESS_CODE) {
        notification(
          NotificationTypes.SUCCESS,
          "Success",
          "Court submitted successfully",
          2
        );
        redirectToCourtsPage();
      } else {
        const message = post?.message || "Something went wrong.";
        notification(NotificationTypes.ERROR, "Error", message, 2);
      }
    }
  }, [actionStatus]);
  return (
    <Col span={24} className="custom-antd-form custom-antd-form-new">
      <Form
        form={form}
        name="createCourt"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Space size={20} className="spacer" direction="vertical">
          <Row gutter={10}>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item
                name="name"
                labelCol={{ span: 24 }}
                label={COURT_NAME_LABEL}
                rules={[
                  {
                    required: true,
                    message: COURT_NAME_EMPTY_VALIDATOR,
                  },
                  {
                    pattern: ALPHANUM_VALIDATE,
                    message: COURT_NAME_VALIDATOR,
                  },
                ]}
              >
                <Input placeholder={COURT_NAME_PLACEHOLDER} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item
                name="refereeRate"
                labelCol={{ span: 24 }}
                label={REFREE_RATE_LABEL}
                rules={[
                  {
                    required: true,
                    message: REFREE_RATE_EMPTY_VALIDATOR,
                  },
                  {
                    type: "number",
                    message: COURT_RATE_VALIDATOR,
                  },
                ]}
              >
                <InputNumber
                  maxLength={5}
                  controls={false}
                  placeholder={REFREE_RATE_PLACEHOLDER}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item
                name="coachRate"
                labelCol={{ span: 24 }}
                label={COACH_RATE_LABEL}
                rules={[
                  {
                    required: true,
                    message: COACH_RATE_EMPTY_VALIDATOR,
                  },
                  {
                    type: "number",
                    message: COURT_RATE_VALIDATOR,
                  },
                ]}
              >
                <InputNumber
                  maxLength={5}
                  controls={false}
                  placeholder={COACH_RATE_PLACEHOLDER}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item
                name="courtTypeId"
                labelCol={{ span: 24 }}
                label="Court Type"
                rules={[
                  {
                    required: true,
                    message: `Please select court type.`,
                  },
                ]}
              >
                <Select placeholder={"Court Type"}>
                  {courtTypes.map((item) => {
                    return (
                      <Option key={item.id} value={item.id}>
                        {item.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={12} md={24} lg={24}>
              <Form.Item
                name="description"
                labelCol={{ span: 24 }}
                label="Description"
                rules={[
                  {
                    required: true,
                    message: `Please insert court description.`,
                  },
                ]}
              >
                <CustomTextArea
                  placeholder={"Courts description"}
                  allowClear
                  autoSize={{ minRows: 2, maxRows: 6 }}
                  showCount
                  maxLength={500}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="files"
                labelCol={{ span: 24 }}
                label="Upload Court Image"
                rules={[
                  {
                    required: mediaIds && mediaIds.length > 0 ? false : true,
                    message: "Please select a file to upload",
                  },
                ]}
              >
                <MediaUpload
                  onPreview={(file) => onPreview(file)}
                  mediaIds={mediaIds}
                  setMediaIds={setMediaIds}
                  setFileList={setFileList}
                  fileList={fileList.map((item) => ({
                    ...item,
                    url: item.url,
                  }))}
                  onRemove={(obj) => handleRemove(obj, fileList, setFileList)}
                />
              </Form.Item>
            </Col>
          </Row>
          {imageUrl && imageUrl.length >= 0 && (
            <Row gutter={16}>
              <Col span={24}>
                <Row gutter={16} className="multipleImagesView">
                  <Image.PreviewGroup>
                    {imageUrl.map((item, index) => {
                      return (
                        <Col key={`courtImage-${index}`} span={6}>
                          <Button
                            key={`${index}-edit`}
                            className="icon-btn"
                            type="primary"
                            align="center"
                            style={{
                              alignSelf: "center",
                            }}
                            onClick={() => {
                              deleteMediaHandler(item.id);
                            }}
                            danger
                            icon={<DeleteFilled />}
                          />
                          <Image
                            key={index}
                            src={item.image}
                            style={{
                              width: "100%",
                              height: "100%",
                              paddingTop: 16,
                            }}
                          />
                        </Col>
                      );
                    })}
                  </Image.PreviewGroup>
                </Row>
              </Col>
            </Row>
          )}
          <Row>
            <Col span={4}>
              <Form.Item name="isAvailable" valuePropName="checked">
                <Checkbox> Available</Checkbox>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} justify="end">
            <Col span={3}>
              <Form.Item>
                <Button
                  className="cancel-btn-sm"
                  style={{ width: "100%" }}
                  onClick={() => form.resetFields()}
                >
                  {RESET_LABEL}
                </Button>
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item>
                <Button
                  type="primary"
                  loading={loading}
                  htmlType="submit"
                  className="submit-btn-sm"
                  style={{ width: "100%" }}
                >
                  {SUBMIT_LABEL}
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Space>
      </Form>
    </Col>
  );
};
export default CreateCourtForm;
CreateCourtForm.propTypes = {
  id: PropTypes.number,
};
