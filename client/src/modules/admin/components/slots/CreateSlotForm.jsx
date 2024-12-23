import { MinusCircleTwoTone, PlusOutlined } from "@ant-design/icons";
import { Col, Form, Row, Select as CustomSelect } from "antd";
import dayjs from "dayjs";
import Button from "elements/Button/Button";
import Checkbox from "elements/Checkbox/Checkbox";
import RangePicker from "elements/DatePicker/RangePicker";
import InputNumber from "elements/InputNumber/InputNumber";
import { notification } from "elements/Notification/Notification";
import { NotificationTypes } from "elements/Notification/notificationConstants";
import Select from "elements/Select/Select";
import Space from "elements/Spacer/Spacer";
import Typography from "elements/Title/Title";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDateTimeWithOutUtc } from 'redux/helpers/helper';
// import axios from "redux/auth/axios";
import logger from "redux/helpers/logger";
import { postSlot, updateSlot } from 'redux/modules/admin/actions/slotsAction';
import { resetActionStatus } from "redux/modules/admin/slices/slotsSlice";
import { resources } from "resources/app_resources";
const { Option } = CustomSelect;
const createSlotForm = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const {
    SLOT_DAYS_LABEL,
    SLOT_DAYS_VALIDATOR,
    SLOT_START_END_TIME_LABEL,
    SLOT_START_END_TIME_VALIDATOR,
    SLOT_AVAILABLE_LABEL,
    COURT_RATE_EMPTY_VALIDATOR,
    COURT_RATE_LABEL,
    COURT_RATE_PLACEHOLDER,
    COURT_SLOT_LABEL,
    ADD_COURT_SLOT,
    RESET_LABEL,
    SUBMIT_LABEL,
    HTTP_SUCCESS_CODE,
  } = resources;
  const { days } = useSelector((store) => store.admin.meta);

  const { loading, actionStatus, post, getById, isError, error } = useSelector(
    (store) => store.admin.slots
  );
  const { availableCourts: AvailableCourts } = useSelector((store) => store.admin.courts);

  const redirectToSlotsPage = () => {
    navigate(`/admin/slots`);
    dispatch(resetActionStatus());
  };

  const onFinish = (values) => {
    let [startTime, endTime] = values.timePicker;
    let slotDetail = {
      ...values,
      startTime: getDateTimeWithOutUtc(startTime),
      endTime: getDateTimeWithOutUtc(endTime),
    };
    createSlot(slotDetail);
  };
  const onFinishFailed = (errorInfo) => {
    logger.log("Failed:", errorInfo);
  };

  const createSlot = (slotDetail) => {
    if (id) {
      // todo: should remove this courtName after discussion with the backend team,
      const courtName = AvailableCourts.find((item) => item.id === slotDetail.courtId);
      const newObj = {
        ...slotDetail,
        courtName: courtName.name || "",
        id: parseInt(id),
      };
      dispatch(updateSlot(newObj));
    } else {
      dispatch(postSlot(slotDetail));
    }
  };

  useEffect(() => {
    if (getById) {
      const newData = {
        ...getById,
        timePicker: [dayjs(getById.startTime), dayjs(getById.endTime)],
      };
      form.setFieldsValue(newData);
    }
  }, [getById]);

  useEffect(() => {
    if (actionStatus) {
      if (post && post.statusCode === HTTP_SUCCESS_CODE) {
        notification(
          NotificationTypes.SUCCESS,
          "Success",
          "Slot submitted successfully",
          2
        );
        redirectToSlotsPage();
      }
    }
    if (isError) {
      notification(
        NotificationTypes.ERROR,
        "Error",
        error.errors.join(`\n`).toString(),
        5
      );
    }
  }, [actionStatus, isError]);
  return (
    <Col span={24} className="custom-antd-form custom-antd-form-new">
      <Form
        form={form}
        name="createSlot"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Space size={10} className="spacer" direction="vertical">
          <Row gutter={10}>
            <Col xs={24} sm={12} md={12} lg={12}>
              <Form.Item
                name="timePicker"
                labelCol={{ span: 24 }}
                label={SLOT_START_END_TIME_LABEL}
                rules={[
                  {
                    required: true,
                    message: SLOT_START_END_TIME_VALIDATOR,
                  },
                ]}
              >
                <RangePicker format="HH:mm" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item
                name={id ? "dayId" : "dayIds"}
                labelCol={{ span: 24 }}
                label={SLOT_DAYS_LABEL}
                rules={[
                  {
                    required: true,
                    message: SLOT_DAYS_VALIDATOR,
                  },
                ]}
              >
                <Select
                  placeholder={SLOT_DAYS_LABEL}
                  showSearch
                  mode={id ? "single" : "multiple"}
                >
                  {days.map((item) => {
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
          {id ? (
            <Row gutter={10}>
              <Col xs={24} sm={12} md={6} lg={6}>
                <Form.Item
                  name={"courtId"}
                  labelCol={{ span: 24 }}
                  label="Court"
                  rules={[
                    {
                      required: true,
                      message: `Please select court.`,
                    },
                  ]}
                >
                  <Select placeholder={"Court"}>
                    {AvailableCourts.map((item) => {
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
                  name={"rate"}
                  labelCol={{ span: 24 }}
                  label={`Court ${COURT_RATE_LABEL}`}
                  rules={[
                    {
                      required: true,
                      message: COURT_RATE_EMPTY_VALIDATOR,
                    },
                  ]}
                >
                  <InputNumber
                    maxLength={5}
                    controls={false}
                    placeholder={COURT_RATE_PLACEHOLDER}
                  />
                </Form.Item>
              </Col>
            </Row>
          ) : (
            <>
              <Typography
                type="title"
                level={4}
                title={COURT_SLOT_LABEL}
                className="ant-result-subtitle"
              />
              <Row gutter={16}>
                <Form.List
                  name="courtSlots"
                  rules={[
                    ({ getFieldValue }) => ({
                      validator() {
                        if (
                          getFieldValue("courtSlots") &&
                          getFieldValue("courtSlots").length
                        ) {
                          return Promise.resolve();
                        }
                        return notification(
                          NotificationTypes.ERROR,
                          "Error",
                          "Please add court slot",
                          2
                        );
                      },
                    }),
                  ]}
                >
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => (
                        <Space
                          key={key}
                          style={{
                            display: "flex",
                            marginBottom: 8,
                          }}
                          align="baseline"
                        >
                          <Form.Item
                            {...restField}
                            name={[name, "courtId"]}
                            labelCol={{ span: 24 }}
                            label="Court"
                            rules={[
                              ({ getFieldValue }) => ({
                                validator(rule, value) {
                                  if (getFieldValue("courtSlots") && value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject("Please select court.");
                                },
                              }),
                            ]}
                          >
                            <Select placeholder={"Court"}>
                              {AvailableCourts.map((item) => {
                                return (
                                  <Option key={item.id} value={item.id}>
                                    {item.name}
                                  </Option>
                                );
                              })}
                            </Select>
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, "rate"]}
                            labelCol={{ span: 24 }}
                            label={`Court ${COURT_RATE_LABEL}`}
                            rules={[
                              ({ getFieldValue }) => ({
                                validator(rule, value) {
                                  if (getFieldValue("courtSlots") && value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject(
                                    COURT_RATE_EMPTY_VALIDATOR
                                  );
                                },
                              }),
                            ]}
                          >
                            <InputNumber
                              maxLength={5}
                              controls={false}
                              placeholder={COURT_RATE_PLACEHOLDER}
                            />
                          </Form.Item>
                          <MinusCircleTwoTone
                            onClick={() => remove(name)}
                            height={"2em"}
                          />
                        </Space>
                      ))}
                      <Row>
                        <Form.Item>
                          <Button
                            type="dashed"
                            onClick={() => add()}
                            block
                            icon={<PlusOutlined />}
                          >
                            {ADD_COURT_SLOT}
                          </Button>
                        </Form.Item>
                      </Row>
                    </>
                  )}
                </Form.List>
              </Row>
            </>
          )}
          <Row>
            <Col span={4}>
              <Form.Item name="isAvailable" valuePropName="checked">
                <Checkbox> {SLOT_AVAILABLE_LABEL} </Checkbox>
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
export default createSlotForm;
