import { Col, Form, Row, Select as CustomSelect } from "antd";
import { REGEX } from "constants/constants";
import Button from "elements/Button/Button";
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
import { postEmployee } from "redux/modules/admin/actions/employeesAction";
import { resources } from "resources/app_resources";

const { Option } = CustomSelect;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="92">+92</Option>
    </Select>
  </Form.Item>
);

const CreateEmployeeForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { employeeTypes } = useSelector((store) => store.admin.meta);

  const {
    HTTP_SUCCESS_CODE,
    EMPLOYEE_NAME_LABEL,
    EMPLOYEE_NAME_EMPTY_VALIDATOR,
    EMPLOYEE_NAME_VALIDATOR,
    EMPLOYEE_NAME_PLACEHOLDER,
    EMPLOYEE_CONTACT_LABEL,
    EMPLOYEE_CONTACT_PLACEHOLDER,
    EMPLOYEE_CONTACT_EMPTY_VALIDATOR,
    EMPLOYEE_CONTACT_VALIDATOR,
    EMPLOYEE_EMAIL_LABEL,
    EMPLOYEE_EMAIL_PLACEHOLDER,
    EMPLOYEE_EMAIL_EMPTY_VALIDATOR,
    EMPLOYEE_EMAIL_VALIDATOR,
    EMPLOYEE_ADDRESS_LABEL,
    EMPLOYEE_ADDRESS_PLACEHOLDER,
    EMPLOYEE_ADDRESS_EMPTY_VALIDATOR,
    EMPLOYEE_ADDRESS_VALIDATOR,
    EMPLOYEE_TYPE_LABEL,
    EMPLOYEE_TYPE_VALIDATOR,
    EMPLOYEE_TYPE_PLACEHOLDER,
    RESET_LABEL,
    SUBMIT_LABEL,
  } = resources;

  const ALPHANUM_VALIDATE = new RegExp(REGEX.EXTRA_SPACE_SPECIAL_CHARACTERS);

  const { loading, actionStatus, getById, post } = useSelector(
    (store) => store.admin.employees
  );

  const redirectToMainPage = () => {
    navigate(`/admin/employees`);
  };

  const onFinish = (values) => {
    dispatch(postEmployee(values));
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
          "Employee submitted successfully",
          2
        );
        redirectToMainPage();
      } else {
        const message = post?.message || "Something went wrong.";
        notification(NotificationTypes.ERROR, "Error", message, 2);
      }
    }
  }, [actionStatus]);
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
          <Row gutter={10}>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item
                name="name"
                labelCol={{ span: 24 }}
                label={EMPLOYEE_NAME_LABEL}
                rules={[
                  {
                    required: true,
                    message: EMPLOYEE_NAME_EMPTY_VALIDATOR,
                  },
                  {
                    pattern: ALPHANUM_VALIDATE,
                    message: EMPLOYEE_NAME_VALIDATOR,
                  },
                ]}
              >
                <Input placeholder={EMPLOYEE_NAME_PLACEHOLDER} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item
                name="email"
                labelCol={{ span: 24 }}
                label={EMPLOYEE_EMAIL_LABEL}
                rules={[
                  {
                    required: true,
                    message: EMPLOYEE_EMAIL_EMPTY_VALIDATOR,
                  },
                  {
                    max: 4,
                    message: EMPLOYEE_EMAIL_VALIDATOR,
                  },
                ]}
              >
                <Input type="email" placeholder={EMPLOYEE_EMAIL_PLACEHOLDER} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12}>
              <Form.Item
                name="contactno"
                className="pass-field"
                label={EMPLOYEE_CONTACT_LABEL}
                rules={[
                  {
                    required: true,
                    message: EMPLOYEE_CONTACT_EMPTY_VALIDATOR,
                  },
                  {
                    type: "phone",
                    message: EMPLOYEE_CONTACT_VALIDATOR,
                  },
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  placeholder={EMPLOYEE_CONTACT_PLACEHOLDER}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={10}>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item
                name="employeeType"
                labelCol={{ span: 24 }}
                label={EMPLOYEE_TYPE_LABEL}
                rules={[
                  {
                    required: true,
                    message: EMPLOYEE_TYPE_VALIDATOR,
                  },
                ]}
              >
                <Select placeholder={EMPLOYEE_TYPE_PLACEHOLDER}>
                  {employeeTypes?.map((item) => {
                    return (
                      <Option key={item.id} value={item.id}>
                        {item.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item
                name="address"
                labelCol={{ span: 24 }}
                label={EMPLOYEE_ADDRESS_LABEL}
                rules={[
                  {
                    required: true,
                    message: EMPLOYEE_ADDRESS_EMPTY_VALIDATOR,
                  },
                  {
                    pattern: ALPHANUM_VALIDATE,
                    message: EMPLOYEE_ADDRESS_VALIDATOR,
                  },
                ]}
              >
                <Input placeholder={EMPLOYEE_ADDRESS_PLACEHOLDER} />
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
export default CreateEmployeeForm;
CreateEmployeeForm.propTypes = {
  id: PropTypes.number,
};
