import {
  MinusSquareTwoTone,
  PlusOutlined,
  PlusSquareTwoTone
} from '@ant-design/icons'
import { Col, Form, Row, Select as CustomSelect } from 'antd'
import { REGEX } from 'constants/constants'
import dayjs from 'dayjs'
import Button from 'elements/Button/Button'
import Checkbox from 'elements/Checkbox/Checkbox'
import DatePicker from 'elements/DatePicker/DatePicker'
import Input from 'elements/Input/Input'
import { notification } from 'elements/Notification/Notification'
import { NotificationTypes } from 'elements/Notification/notificationConstants'
import Select from 'elements/Select/Select'
import Space from 'elements/Spacer/Spacer'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { DAYS } from 'redux/constants/constants'
import { getFormattedDT } from 'redux/helpers/helper'
import logger from 'redux/helpers/logger'
import {
  postBooking,
  updateBooking
} from 'redux/modules/admin/actions/bookingsAction'
import { getEquipments } from 'redux/modules/admin/actions/equipmentAction'
import { getAvailableSlots } from 'redux/modules/admin/actions/slotsAction'
import { resetActionStatus } from 'redux/modules/admin/slices/bookingsSlice'
import { resetAvailableEquipments } from 'redux/modules/admin/slices/equipmentSlice'
import { resetAvailableSlots } from 'redux/modules/admin/slices/slotsSlice'
import { resources } from 'resources/app_resources'

const { Option } = CustomSelect

const getFormattedTime = (dt) => getFormattedDT(dt, 'h:mm A')

const createBookingForm = (props) => {
  const { id } = props
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const ALPHANUM_VALIDATE = new RegExp(REGEX.EXTRA_SPACE_SPECIAL_CHARACTERS)
  const VALID_MOBILE = new RegExp(REGEX.NUMBERS_ONLY)
  const VALID_EMAIL = new RegExp(REGEX.EMAIL)

  const bookingDate = Form.useWatch('bookingDate', form)
  const courtId = Form.useWatch('courtId', form)
  const equipmentId = Form.useWatch('equipmentIds', form)
  const slotId = Form.useWatch('slotIds', form)
  const addRefree = Form.useWatch('addRefree', form)
  const bookingAmount = Form.useWatch('bookingAmount', form)
  const bookingEquipment = Form.useWatch('bookingEquipmentRequest', form) || []
  const {
    BOOKING_AMOUNT,
    BOOKING_DATE,
    BOOKING_DATE_VALIDATOR,
    BOOKING_IS_INTERNAL_LABEL,
    ADD_REFREE_LABEL,
    SLOTS_LABEL,
    SLOTS_VALIDATOR,
    RESET_LABEL,
    SUBMIT_LABEL,
    HTTP_SUCCESS_CODE,

    CUSTOMER_NAME_LABEL,
    CUSTOMER_NAME_PLACEHOLDER,
    CUSTOMER_NAME_EMPTY_VALIDATOR,

    CUSTOMER_EMAIL_LABEL,
    CUSTOMER_EMAIL_PLACEHOLDER,
    CUSTOMER_EMAIL_EMPTY_VALIDATOR,

    CUSTOMER_NUMBER_LABEL,
    CUSTOMER_NUMBER_PLACEHOLDER,
  } = resources

  const { loading, actionStatus, post, getById } = useSelector(
    (store) => store.admin.bookings,
  )

  const { availableSlots } = useSelector((store) => store.admin.slots)
  const { availableCourts: AvailableCourts } = useSelector(
    (store) => store.admin.courts,
  )
  const { availableEquipments: Equipments } = useSelector(
    (store) => store.admin.equipments,
  )

  const redirectToMainPage = () => {
    navigate(`/admin/bookings`)
    dispatch(resetActionStatus())
  }

  const onFinish = (values) => {
    let bookingDetail = {
      ...values,
      status: 1,
      bookingDate: dayjs(values.bookingDate).format('YYYY-MM-DD'),
    }
    bookingDetail.isAdmin = true
    createBooking(bookingDetail)
  }
  const onFinishFailed = (errorInfo) => {
    logger.log('Failed:', errorInfo)
  }

  const createBooking = (bookingDetail) => {
    if (id) {
      const newObj = {
        ...bookingDetail,
        id: parseInt(id),
        slotIds: getSlotsValue(bookingDetail.slotIds),
      }
      dispatch(updateBooking(newObj))
    } else {
      dispatch(postBooking(bookingDetail))
    }
  }

  const getSlotsValue = (slots) => {
    if (getById.bookingSlots && slots) {
      return slots.map((item) =>
        typeof item === 'string'
          ? getById.bookingSlots.find((bS) => {
              const value = `${DAYS[bS.dayId || 0]} (${getFormattedTime(
                bS.startTime,
              )} -- ${getFormattedTime(bS.endTime)})`
              return value === item
            }).id
          : item,
      )
    }
    return []
  }

  //const filteredData = Equipments.filter((elem) => !bookingEquipment.some((ele) => elem?.id === ele?.id));

  const disabledDate = (current) => {
    return current && current < dayjs().endOf('day')
  }

  const setEquipmentQuantity = (data, type = '') => {
    const fieldName = 'bookingEquipmentRequest'
    let bookingEq = bookingEquipment
    const availableQuantity = data.availableQuantity || 0
    const rate = data.rate || 0
    const { key } = data
    const quantity = bookingEq[key]?.quantity || 1
    const amount = bookingEq[key]?.rate || 0
    switch (type) {
      case 'inc':
        if (quantity < bookingEq[key]?.availableQuantity) {
          bookingEq[key] = { ...bookingEq[key], quantity: quantity + 1 }
          form.setFieldValue('bookingAmount', bookingAmount + amount)
        }
        break
      case 'dec':
        if (quantity && quantity > 0) {
          bookingEq[key] = { ...bookingEq[key], quantity: quantity - 1 }
          form.setFieldValue('bookingAmount', bookingAmount - amount)
        }
        break
      default:
        bookingEq[key] = {
          ...bookingEq[key],
          quantity,
          availableQuantity,
          rate,
        }
        break
    }
    form.setFieldValue(fieldName, bookingEq)
  }

  useEffect(() => {
    if (getById) {
      const newData = {
        ...getById,
        courtId: getById.court?.id,
        bookingDate: dayjs(getById.bookingDate),
        ...(getById.bookingSlots && {
          slotIds: getById.bookingSlots.map(
            (item) =>
              `${DAYS[item.dayId || 0]} (${getFormattedTime(
                item.startTime,
              )} -- ${getFormattedTime(item.endTime)})`,
          ),
        }),
      }
      form.setFieldsValue(newData)
    }
  }, [getById])

  useEffect(() => {
    let date
    if (bookingDate && courtId) {
      date = getFormattedDT(bookingDate, 'YYYY-MM-DD')
      dispatch(getAvailableSlots(courtId, date))
    }

    let [slotRates, equipmentRates, refreeRates] = [0, 0, 0]

    if (slotId && slotId.length > 0) {
      slotId.forEach((slot) => {
        let details = availableSlots.find((item) => item.id === slot)
        if (details && details.rate) {
          details = details.rate
          slotRates += details
        }
      })
      if (date) {
        dispatch(getEquipments(date, slotId))
      }
    }


    if (addRefree) {
      let courtDetails = AvailableCourts.find((item) => item.id === courtId)
      if (courtDetails && courtDetails.refereeRate) {
        refreeRates = courtDetails.refereeRate
      }
    }
    let totalSum = equipmentRates + slotRates + refreeRates

    form.setFieldValue('bookingAmount', totalSum)
    return () => {
      dispatch(resetAvailableSlots())
      dispatch(resetAvailableEquipments())
    }
  }, [bookingDate, courtId, equipmentId, slotId, addRefree])

  useEffect(() => {
    if (actionStatus) {
      if (post && post.statusCode === HTTP_SUCCESS_CODE) {
        notification(
          NotificationTypes.SUCCESS,
          'Success',
          'Slot submitted successfully',
          2,
        )
        redirectToMainPage()
      } else {
        let message = post?.message || 'Something went wrong.'
        if (post.errors) {
          message = post.errors.join(`\n`).toString()
        }
        notification(NotificationTypes.ERROR, 'Error', message, 2)
      }
    }
  }, [actionStatus])

  return (
    <Col span={24} className="custom-antd-form custom-antd-form-new">
      <Form
        form={form}
        name="createBooking"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Space size={10} className="spacer" direction="vertical">
          <Row gutter={10}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item
                name={'courtId'}
                labelCol={{ span: 24 }}
                label="Court"
                rules={[
                  {
                    required: true,
                    message: `Please select court.`,
                  },
                ]}
              >
                <Select placeholder={'Court'}>
                  {AvailableCourts?.map((item) => {
                    return (
                      <Option key={item.id} value={item.id}>
                        {item.name}
                      </Option>
                    )
                  })}
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={12} lg={12}>
              <Form.Item
                name="bookingDate"
                labelCol={{ span: 24 }}
                label={BOOKING_DATE}
                rules={[
                  {
                    required: true,
                    message: BOOKING_DATE_VALIDATOR,
                  },
                ]}
              >
                <DatePicker
                  disabledDate={disabledDate}
                  format="DD MMMM, YYYY"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col xs={24} sm={12} md={12} lg={12}>
              <Form.Item
                name={'slotIds'}
                labelCol={{ span: 24 }}
                label={SLOTS_LABEL}
                rules={[
                  {
                    required: true,
                    message: SLOTS_VALIDATOR,
                  },
                ]}
              >
                <Select placeholder={SLOTS_LABEL} showSearch mode={'multiple'}>
                  {availableSlots?.map((item) => {
                    return (
                      <Option key={item.id} value={item.id}>
                        {item?.startTime &&
                          item?.endTime &&
                          `${DAYS[item.dayId || 0]} (${getFormattedTime(
                            item.startTime,
                          )} -- ${getFormattedTime(item.endTime)})`}
                      </Option>
                    )
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Form.List name="bookingEquipmentRequest">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      style={{
                        display: 'flex',
                        marginBottom: 8,
                      }}
                      align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, 'id']}
                        labelCol={{ span: 24 }}
                        label="Equipment"
                      >
                        <Select placeholder={'Equipment'}>
                          {React.Children.toArray(
                            Equipments.map((item) => {
                              const _eq = { ...item, key }
                              const isExist = bookingEquipment.some((ele) => item?.id === ele?.id);
                              const isZero = item.availableQuantity === 0;
                              return (
                                <Option key={item.id} value={item.id} disabled={isExist || isZero}>
                                  <p
                                    onClick={() => {
                                      if(!isZero && !isExist) {
                                        setEquipmentQuantity(_eq)
                                      }
                                    }}
                                  >
                                    {item.name} {isZero && ` - ${item.availableQuantity} Quantity`}
                                  </p>
                                </Option>
                              )
                            }),
                          )}
                        </Select>
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'quantity']}
                        labelCol={{ span: 24 }}
                        label={`Quantity`}
                      >
                        <div className="d-flex align-items-center">
                          <MinusSquareTwoTone
                            style={{ fontSize: '20px' }}
                            onClick={() => setEquipmentQuantity({ key }, 'dec')}
                          />
                          <p className="quantity-tag">
                            {' '}
                            {bookingEquipment[key]?.quantity || 1}
                          </p>
                          <PlusSquareTwoTone
                            style={{ fontSize: '20px' }}
                            onClick={() => setEquipmentQuantity({ key }, 'inc')}
                          />
                        </div>
                      </Form.Item>
                      <MinusSquareTwoTone
                        style={{ fontSize: '20px' }}
                        onClick={() => remove(name)}
                      />
                    </Space>
                  ))}
                  <Col>
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add Equipment
                      </Button>
                    </Form.Item>
                  </Col>
                </>
              )}
            </Form.List>
          </Row>

          <Row gutter={10}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item
                labelCol={{ span: 24 }}
                name="bookingAmount"
                label="Total Booking Amount"
              >
                <Input disabled placeholder={BOOKING_AMOUNT} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col xs={24} sm={24} md={8} lg={8}>
              <Form.Item
                name="customerName"
                labelCol={{ span: 24 }}
                label={CUSTOMER_NAME_LABEL}
                rules={[
                  {
                    required: true,
                    message: CUSTOMER_NAME_EMPTY_VALIDATOR,
                  },
                  {
                    pattern: ALPHANUM_VALIDATE,
                    message: CUSTOMER_NAME_EMPTY_VALIDATOR,
                  },
                ]}
              >
                <Input placeholder={CUSTOMER_NAME_PLACEHOLDER} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <Form.Item
                name="phone"
                labelCol={{ span: 24 }}
                label={CUSTOMER_NUMBER_LABEL}
                rules={[
                  {
                    pattern: VALID_MOBILE,
                    message: 'Enter a valid phone number',
                  },
                  {
                    max: 11,
                    message: 'Enter a valid phone number of min 11 digits.',
                  },
                  {
                    min: 11,
                    message: 'Enter a valid phone number of min 11 digits.',
                  },
                ]}
              >
                <Input placeholder={CUSTOMER_NUMBER_PLACEHOLDER} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <Form.Item
                name="email"
                labelCol={{ span: 24 }}
                label={CUSTOMER_EMAIL_LABEL}
                rules={[
                  {
                    required: true,
                    message: CUSTOMER_EMAIL_EMPTY_VALIDATOR,
                  },
                  {
                    pattern: VALID_EMAIL,
                    message: 'Enter a valid email address',
                  },
                ]}
              >
                <Input placeholder={CUSTOMER_EMAIL_PLACEHOLDER} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <Form.Item name="isInternal" valuePropName="checked">
                <Checkbox> {BOOKING_IS_INTERNAL_LABEL} </Checkbox>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="addRefree" valuePropName="checked">
                <Checkbox> {ADD_REFREE_LABEL} </Checkbox>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} justify="end">
            <Col span={3}>
              <Form.Item>
                <Button
                  className="cancel-btn-sm"
                  style={{ width: '100%' }}
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
                  style={{ width: '100%' }}
                >
                  {SUBMIT_LABEL}
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Space>
      </Form>
    </Col>
  )
}
export default createBookingForm
