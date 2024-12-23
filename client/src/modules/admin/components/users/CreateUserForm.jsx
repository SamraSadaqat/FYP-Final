import {
  Col,
  Form,
  Input as AntInput,
  Row,
  Select as CustomSelect,
} from "antd";
import { REGEX } from "constants/constants";
import Button from "elements/Button/Button";
import Checkbox from "elements/Checkbox/Checkbox";
import Input from "elements/Input/Input";
import { notification } from "elements/Notification/Notification";
import { NotificationTypes } from "elements/Notification/notificationConstants";
import Select from "elements/Select/Select";
import Space from "elements/Spacer/Spacer";
import Text from "elements/Title/Text";
import { PropTypes } from "prop-types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logger from "redux/helpers/logger";
import { postUser, updateUser } from "redux/modules/admin/actions/usersAction";
import { resources } from "resources/app_resources";

const { Option } = CustomSelect;

const VALID_MOBILE = new RegExp(REGEX.NUMBERS_ONLY);

const ALPHANUM_VALIDATE = new RegExp(REGEX.EXTRA_SPACE_SPECIAL_CHARACTERS);

const VALID_PASSWORD = new RegExp(REGEX.PASSWORD);

const CreateUserForm = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const {
    HTTP_SUCCESS_CODE,
    USER_NAME_LABEL,
    USER_NAME_EMPTY_VALIDATOR,
    USER_NAME_VALIDATOR,

    FIRST_NAME_LABEL,
    FIRST_NAME_EMPTY_VALIDATOR,
    FIRST_NAME_PLACEHOLDER,

    LAST_NAME_LABEL,
    LAST_NAME_EMPTY_VALIDATOR,
    LAST_NAME_PLACEHOLDER,

    USER_NAME_PLACEHOLDER,
    USER_CONTACT_LABEL,
    USER_PASSWORD_LABEL,
    USER_EMAIL_LABEL,
    USER_EMAIL_PLACEHOLDER,
    USER_EMAIL_EMPTY_VALIDATOR,
    USER_ROLE_LABEL,
    USER_ROLE_VALIDATOR,
    ROLE_ACTIVE_LABEL,
    RESET_LABEL,
    SUBMIT_LABEL,
    PASSWORD_NOTE,
  } = resources;

  const { loading, actionStatus, getById, post, isError, error } = useSelector(
    (store) => store.admin.users
  );
  const { list: Roles } = useSelector((store) => store.admin.roles);

  const redirectToMainPage = () => {
    navigate(`/admin/users`);
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
        phoneNumber: data.mobile,
        ...(data && data.roles && { roleId: data?.roles[0].id }),
      });
    }
  }, [getById]);

  useEffect(() => {
    if (actionStatus) {
      if (post && post.statusCode === HTTP_SUCCESS_CODE) {
        notification(
          NotificationTypes.SUCCESS,
          "Success",
          "User created successfully.",
          2
        );
        redirectToMainPage();
      } else {
        const message = post?.message || "Something went wrong.";
        notification(NotificationTypes.ERROR, "Error", message, 2);
      }
    }
    if (isError && Object.entries(error).length > 0) {
      notification(
        NotificationTypes.ERROR,
        "Error",
        error.title ? error.title : error.data,
        2
      );
    }
  }, [actionStatus, isError]);

  const submitUser = (values) => {
    values.mediaIds = [];
    if (id) {
      values.id = id;
      dispatch(updateUser(values));
    } else {
      dispatch(postUser(values));
    }
  };

  return (
    <Col span={24} className="custom-antd-form">
      <Form
        form={form}
        name="createCourt"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Space size={10} className="spacer" direction="vertical">
          {id && (
            <Row>
              <Col span={24}>
                <Text className="redColor" title={PASSWORD_NOTE} />
                <p></p>
              </Col>
            </Row>
          )}
          <Row gutter={10}>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item
                name="firstName"
                labelCol={{ span: 24 }}
                label={FIRST_NAME_LABEL}
                rules={[
                  {
                    required: true,
                    message: FIRST_NAME_EMPTY_VALIDATOR,
                  },
                  {
                    pattern: ALPHANUM_VALIDATE,
                    message: FIRST_NAME_EMPTY_VALIDATOR,
                  },
                ]}
              >
                <Input placeholder={FIRST_NAME_PLACEHOLDER} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item
                name="lastName"
                labelCol={{ span: 24 }}
                label={LAST_NAME_LABEL}
                rules={[
                  {
                    required: true,
                    message: LAST_NAME_EMPTY_VALIDATOR,
                  },
                  {
                    pattern: ALPHANUM_VALIDATE,
                    message: LAST_NAME_EMPTY_VALIDATOR,
                  },
                ]}
              >
                <Input placeholder={LAST_NAME_PLACEHOLDER} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item
                name="userName"
                labelCol={{ span: 24 }}
                label={USER_NAME_LABEL}
                rules={[
                  {
                    required: true,
                    message: USER_NAME_EMPTY_VALIDATOR,
                  },
                  {
                    pattern: ALPHANUM_VALIDATE,
                    message: USER_NAME_VALIDATOR,
                  },
                ]}
              >
                <Input placeholder={USER_NAME_PLACEHOLDER} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item
                name="email"
                labelCol={{ span: 24 }}
                label={USER_EMAIL_LABEL}
                rules={[
                  {
                    required: true,
                    message: USER_EMAIL_EMPTY_VALIDATOR,
                  },
                ]}
              >
                <Input type="email" placeholder={USER_EMAIL_PLACEHOLDER} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item
                name="phoneNumber"
                className="pass-field"
                labelCol={{ span: 24 }}
                label={USER_CONTACT_LABEL}
                rules={[
                  {
                    required: true,
                    message: resources.PH_NO_EMPTY_VALIDATOR,
                  },
                  {
                    pattern: VALID_MOBILE,
                    message: resources.PH_NO_VALIDATOR,
                  },
                ]}
              >
                <Input
                  // addonBefore={prefixSelector}
                  type="number"
                  placeholder={resources.PH_NO_PLACEHOLDER}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
            {!id && (
              <Col xs={24} sm={12} md={6} lg={6}>
                <Form.Item
                  label={USER_PASSWORD_LABEL}
                  labelCol={{ span: 24 }}
                  name="password"
                  className="pass-field"
                  rules={[
                    {
                      required: true,
                      message: resources.PASSWORD_EMPTY_VALIDATOR,
                    },
                    {
                      pattern: VALID_PASSWORD,
                      message: resources.PASSWORD_VALIDATE,
                    },
                  ]}
                >
                  <AntInput.Password
                    placeholder={resources.PASSWORD_PLACEHOLDER}
                  />
                </Form.Item>
              </Col>
            )}

            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item
                name="roleId"
                labelCol={{ span: 24 }}
                label={USER_ROLE_LABEL}
                rules={[
                  {
                    required: true,
                    message: USER_ROLE_VALIDATOR,
                  },
                ]}
              >
                <Select placeholder={USER_ROLE_LABEL}>
                  {Roles.map((item) => {
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
export default CreateUserForm;
CreateUserForm.propTypes = {
  id: PropTypes.number,
};
