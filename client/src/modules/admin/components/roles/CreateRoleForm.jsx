import { Col, Form, Row, Select as CustomSelect } from "antd";
import { REGEX } from "constants/constants";
import Button from "elements/Button/Button";
import Checkbox from "elements/Checkbox/Checkbox";
import Input from "elements/Input/Input";
import { notification } from "elements/Notification/Notification";
import { NotificationTypes } from "elements/Notification/notificationConstants";
import Select from "elements/Select/Select";
import Space from "elements/Spacer/Spacer";
import { PropTypes } from "prop-types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logger from "redux/helpers/logger";
import { postRole, updateRole } from "redux/modules/admin/actions/rolesAction";
import { resources } from "resources/app_resources";

const { Option } = CustomSelect;

const CreateRoleForm = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { screenTypes } = useSelector((store) => store.admin.meta);
  const navigate = useNavigate();

  const redirectToMainPage = () => {
    navigate(`/admin/roles`);
  };
  const {
    HTTP_SUCCESS_CODE,
    ROLE_NAME_LABEL,
    ROLE_NAME_EMPTY_VALIDATOR,
    ROLE_NAME_VALIDATOR,
    ROLE_NAME_PLACEHOLDER,
    ROLE_PERMISSIONS_LABEL,
    ROLE_PERMISSIONS_VALIDATOR,
    ROLE_ACTIVE_LABEL,
    RESET_LABEL,
    SUBMIT_LABEL,
  } = resources;
  const ALPHANUM_VALIDATE = new RegExp(REGEX.EXTRA_SPACE_SPECIAL_CHARACTERS);

  const { loading, actionStatus, isError, getById, post, error } = useSelector(
    (store) => store.admin.roles
  );

  useEffect(() => {
    if (getById) {
      const data = getById;
      form.setFieldsValue({
        ...data,
        rolePermissions: data.rolePermissions?.map(
          (rolePerm) => rolePerm.screenId
        ),
      });
    }
  }, [getById]);

  useEffect(() => {
    if (actionStatus) {
      if (post && post.statusCode === HTTP_SUCCESS_CODE) {
        notification(
          NotificationTypes.SUCCESS,
          "Success",
          "Role submitted successfully",
          2
        );
        redirectToMainPage();
      }
      if (isError) {
        notification(
          NotificationTypes.ERROR,
          "Error",
          error.errors.join(`\n`).toString(),
          2
        );
      }
    }
  }, [actionStatus, isError]);

  const onFinish = (values) => {
    values.rolePermissions = values.rolePermissions?.map((id) => ({
      screenId: id,
    }));
    submitRole(values);
  };

  const onFinishFailed = (errorInfo) => {
    logger.log("Failed:", errorInfo);
  };

  const submitRole = (values) => {
    if (id) {
      values.id = id;
      dispatch(updateRole(values));
    } else {
      dispatch(postRole(values));
    }
  };

  return (
    <Col span={24} className="custom-antd-form custom-antd-form-new">
      <Form
        form={form}
        name="createRole"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Space size={10} className="spacer" direction="vertical">
          <Row gutter={10}>
            <Col xs={24} sm={12} md={8} lg={8}>
              <Form.Item
                name="name"
                labelCol={{ span: 24 }}
                label={ROLE_NAME_LABEL}
                rules={[
                  {
                    required: true,
                    message: ROLE_NAME_EMPTY_VALIDATOR,
                  },
                  {
                    pattern: ALPHANUM_VALIDATE,
                    message: ROLE_NAME_VALIDATOR,
                  },
                ]}
              >
                <Input placeholder={ROLE_NAME_PLACEHOLDER} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12}>
              <Form.Item
                name="rolePermissions"
                labelCol={{ span: 24 }}
                label={ROLE_PERMISSIONS_LABEL}
                rules={[
                  {
                    required: true,
                    message: ROLE_PERMISSIONS_VALIDATOR,
                  },
                ]}
              >
                <Select placeholder={ROLE_PERMISSIONS_LABEL} mode="multiple">
                  {screenTypes.map((item) => {
                    return (
                      <Option key={item.id} value={item.id}>
                        {item.displayName}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item name="isActive" valuePropName="checked">
                <Checkbox>{ROLE_ACTIVE_LABEL}</Checkbox>
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
export default CreateRoleForm;
CreateRoleForm.propTypes = {
  id: PropTypes.number,
};
