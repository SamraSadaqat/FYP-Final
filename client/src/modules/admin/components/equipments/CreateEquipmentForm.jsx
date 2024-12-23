import { Col, Form, Row } from "antd";
import { REGEX } from "constants/constants";
import Button from "elements/Button/Button";
import Checkbox from "elements/Checkbox/Checkbox";
import Input from "elements/Input/Input";
import InputNumber from "elements/InputNumber/InputNumber";
import { notification } from "elements/Notification/Notification";
import { NotificationTypes } from "elements/Notification/notificationConstants";
import Space from "elements/Spacer/Spacer";
import { PropTypes } from "prop-types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logger from "redux/helpers/logger";
import {
  postEquipment,
  updateEquipment,
} from "redux/modules/admin/actions/equipmentAction";
import { resources } from "resources/app_resources";

const ALPHANUM_VALIDATE = new RegExp(REGEX.EXTRA_SPACE_SPECIAL_CHARACTERS);

const CreateEquipmentForm = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const {
    HTTP_SUCCESS_CODE,
    RESET_LABEL,
    SUBMIT_LABEL,
    EQUIPMENT_RATE,
    EQUIPMENT_RATE_REQ,
    EQUIPMENT_NAME_VALID,
    EQUIPMENT_NAME_REQ,
    EQUIPMENT_NAME,
    AVAILABLE,
  } = resources;

  const { loading, actionStatus, getById, post, isError, error } = useSelector(
    (store) => store.admin.equipments
  );

  const redirectToMainPage = () => {
    navigate(`/admin/equipments`);
  };

  const onFinish = (values) => {
    submitUser(values);
  };

  const onFinishFailed = (errorInfo) => {
    logger.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (getById) {
      const data = getById;
      form.setFieldsValue({
        ...data,
      });
    }
  }, [getById]);

  useEffect(() => {
    if (actionStatus) {
      if (post && post.statusCode === HTTP_SUCCESS_CODE) {
        notification(
          NotificationTypes.SUCCESS,
          "Success",
          "Equipment created successfully.",
          2
        );
        redirectToMainPage();
      } else {
        const message = post?.message || "Something went wrong.";
        notification(NotificationTypes.ERROR, "Error", message, 2);
      }
    }
    if (isError) {
      notification(
        NotificationTypes.ERROR,
        "Error",
        error.errors.join(`\n`).toString(),
        2
      );
    }
  }, [actionStatus, isError]);

  const submitUser = (values) => {
    if (id) {
      values.id = id;
      dispatch(updateEquipment(values));
    } else {
      dispatch(postEquipment(values));
    }
  };

  return (
    <Col span={24} className="custom-antd-form">
      <Form
        form={form}
        name="createEquipment"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Space size={10} className="spacer" direction="vertical">
          <Row gutter={10}>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item
                name="name"
                labelCol={{ span: 24 }}
                label={EQUIPMENT_NAME}
                rules={[
                  {
                    required: true,
                    message: EQUIPMENT_NAME_REQ,
                  },
                  {
                    pattern: ALPHANUM_VALIDATE,
                    message: EQUIPMENT_NAME_VALID,
                  },
                ]}
              >
                <Input placeholder={EQUIPMENT_NAME} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item
                name="rate"
                labelCol={{ span: 24 }}
                label={EQUIPMENT_RATE}
                rules={[
                  {
                    required: true,
                    message: EQUIPMENT_RATE_REQ,
                  },
                ]}
              >
                <InputNumber
                  maxLength={5}
                  controls={false}
                  placeholder={EQUIPMENT_RATE}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item
                name="quantiy"
                labelCol={{ span: 24 }}
                label={"Quantity"}
                rules={[
                  {
                    required: true,
                    message: "Equipment quantity is required.",
                  },
                ]}
              >
                <InputNumber
                  maxLength={4}
                  controls={false}
                  placeholder={"Quantity "}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item name="isAvailable" valuePropName="checked">
                <Checkbox>{AVAILABLE}</Checkbox>
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
export default CreateEquipmentForm;
CreateEquipmentForm.propTypes = {
  id: PropTypes.number,
};
