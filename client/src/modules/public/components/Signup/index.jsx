// // // // // // // // // // // // // // import { Button, Col, Form, Input, Row } from "antd";
// // // // // // // // // // // // // // import { AUTH_LINKS, AUTH_MODULES, REGEX } from "constants/constants";
// // // // // // // // // // // // // // import { GENDERS } from "constants/constants";

// // // // // // // // // // // // // // import AppLoader from "elements/AppLoader/AppLoader";
// // // // // // // // // // // // // // import { notification } from "elements/Notification/Notification";
// // // // // // // // // // // // // // import { NotificationTypes } from "elements/Notification/notificationConstants";
// // // // // // // // // // // // // // import SocialSignup from "modules/common/components/social-signup/SocialSignup";
// // // // // // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // // // // // import { NavLink, useNavigate } from "react-router-dom";
// // // // // // // // // // // // // // import axios from "redux/auth/axios";
// // // // // // // // // // // // // // import logger from "redux/helpers/logger";
// // // // // // // // // // // // // // import { resources } from "resources/app_resources";
// // // // // // // // // // // // // // import Select from "elements/Select/Select";



// // // // // // // // // // // // // // const VALID_PASSWORD = new RegExp(REGEX.PASSWORD);
// // // // // // // // // // // // // // const ALPHANUM_VALIDATE = new RegExp(REGEX.EXTRA_SPACE_SPECIAL_CHARACTERS);
// // // // // // // // // // // // // // const { Option } = Select;

// // // // // // // // // // // // // // const SignupPageView = () => {
// // // // // // // // // // // // // //   const [form] = Form.useForm();
// // // // // // // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // // // // // // //   const [errorState, setErrorState] = useState();
// // // // // // // // // // // // // //   const [successState, setSuccessState] = useState();
// // // // // // // // // // // // // //   const navigate = useNavigate();

// // // // // // // // // // // // // //   // const GENDERS = ["Male", "Female", "Other"]; // Define locally

// // // // // // // // // // // // // //   const onFinish = (values) => {
// // // // // // // // // // // // // //     logger.log("Success:", values);
// // // // // // // // // // // // // //     registerUser(values);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const onFinishFailed = (errorInfo) => {
// // // // // // // // // // // // // //     logger.log("Failed:", errorInfo);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const registerUser = async (values) => {
// // // // // // // // // // // // // //     const url = `/user/register`;

// // // // // // // // // // // // // //     setLoading(true);
// // // // // // // // // // // // // //     axios
// // // // // // // // // // // // // //       .post(url, values)
// // // // // // // // // // // // // //       .then((res) => {
// // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // //         setSuccessState({
// // // // // // // // // // // // // //           message: res.data.message,
// // // // // // // // // // // // // //           statusCode: res.data.statusCode,
// // // // // // // // // // // // // //         });
// // // // // // // // // // // // // //         navigate("/auth/login");
// // // // // // // // // // // // // //       })
// // // // // // // // // // // // // //       .catch((err) => {
// // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // //         setErrorState(err.response);
// // // // // // // // // // // // // //       });
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     if (errorState && Object.entries(errorState).length > 0) {
// // // // // // // // // // // // // //       notification(
// // // // // // // // // // // // // //         NotificationTypes.ERROR,
// // // // // // // // // // // // // //         errorState.statusText,
// // // // // // // // // // // // // //         errorState.data.title,
// // // // // // // // // // // // // //         5
// // // // // // // // // // // // // //       );
// // // // // // // // // // // // // //       form.resetFields();
// // // // // // // // // // // // // //       setErrorState(null);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //     if (successState && Object.entries(successState).length > 0) {
// // // // // // // // // // // // // //       notification(
// // // // // // // // // // // // // //         NotificationTypes.SUCCESS,
// // // // // // // // // // // // // //         successState.statusCode,
// // // // // // // // // // // // // //         successState.message,
// // // // // // // // // // // // // //         5
// // // // // // // // // // // // // //       );
// // // // // // // // // // // // // //       setSuccessState(null);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   }, [errorState, successState]);

// // // // // // // // // // // // // //   // Styles for the container and form
// // // // // // // // // // // // // //   const pageContainerStyle = {
// // // // // // // // // // // // // //     background: 'linear-gradient(135deg, #a1c4fd 50%, #c2e9fb 50%)',
// // // // // // // // // // // // // //     minHeight: '100vh',
// // // // // // // // // // // // // //     display: 'flex',
// // // // // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // // // // //     justifyContent: 'center',
// // // // // // // // // // // // // //     padding: '20px',
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const formWrapperStyle = {
// // // // // // // // // // // // // //     backgroundColor: '#fff',
// // // // // // // // // // // // // //     borderRadius: '15px',
// // // // // // // // // // // // // //     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
// // // // // // // // // // // // // //     padding: '40px',
// // // // // // // // // // // // // //     width: '100%',
// // // // // // // // // // // // // //     maxWidth: '400px',
// // // // // // // // // // // // // //     position: 'relative',
// // // // // // // // // // // // // //     zIndex: 1,
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const titleStyle = {
// // // // // // // // // // // // // //     fontSize: '24px',
// // // // // // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // // // // // //     marginBottom: '20px',
// // // // // // // // // // // // // //     color: '#2c3e50',
// // // // // // // // // // // // // //     textAlign: 'center',
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const linkStyle = {
// // // // // // // // // // // // // //     color: '#3498db',
// // // // // // // // // // // // // //     textDecoration: 'none',
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div style={pageContainerStyle}>
// // // // // // // // // // // // // //       <div style={formWrapperStyle}>
// // // // // // // // // // // // // //         <h1 className="text-center mb-2 text-uppercase dark-gray-text-color" style={titleStyle}>
// // // // // // // // // // // // // //           {AUTH_MODULES.SIGN_UP}
// // // // // // // // // // // // // //         </h1>
// // // // // // // // // // // // // //         <Form
// // // // // // // // // // // // // //           form={form}
// // // // // // // // // // // // // //           name="registerForm"
// // // // // // // // // // // // // //           onFinish={onFinish}
// // // // // // // // // // // // // //           onFinishFailed={onFinishFailed}
// // // // // // // // // // // // // //           autoComplete="off"
// // // // // // // // // // // // // //         >
// // // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // // //             name="firstName"
// // // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // // //                 message: resources.FIRST_NAME_EMPTY_VALIDATOR,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 pattern: ALPHANUM_VALIDATE,
// // // // // // // // // // // // // //                 message: resources.FIRST_NAME_EMPTY_VALIDATOR,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //             ]}
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             <Input placeholder={resources.FIRST_NAME_PLACEHOLDER} />
// // // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // // //             name="lastName"
// // // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // // //                 message: resources.LAST_NAME_EMPTY_VALIDATOR,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 pattern: ALPHANUM_VALIDATE,
// // // // // // // // // // // // // //                 message: resources.LAST_NAME_EMPTY_VALIDATOR,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //             ]}
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             <Input placeholder={resources.LAST_NAME_PLACEHOLDER} />
// // // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // // //             name="email"
// // // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // // //                 message: resources.EMAIL_EMPTY_VALIDATOR,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 type: "email",
// // // // // // // // // // // // // //                 message: resources.EMAIL_VALIDATOR,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //             ]}
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             <Input type="email" placeholder={resources.EMAIL_PLACEHOLDER} />
// // // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // // //             name="password"
// // // // // // // // // // // // // //             className="pass-field"
// // // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // // //                 message: resources.PASSWORD_EMPTY_VALIDATOR,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 pattern: VALID_PASSWORD,
// // // // // // // // // // // // // //                 message: resources.PASSWORD_VALIDATE,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //             ]}
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             <Input.Password placeholder={resources.PASSWORD_PLACEHOLDER} />
// // // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // // //             name="mobile"
// // // // // // // // // // // // // //             className="pass-field"
// // // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // // //                 message: resources.PH_NO_EMPTY_VALIDATOR,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 max: 11,
// // // // // // // // // // // // // //                 min: 11,
// // // // // // // // // // // // // //                 message: resources.PH_NO_VALIDATOR,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //             ]}
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             <Input
// // // // // // // // // // // // // //               type="number"
// // // // // // // // // // // // // //               placeholder={resources.PH_NO_PLACEHOLDER}
// // // // // // // // // // // // // //               style={{ width: "100%" }}
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // // //             name="gender"
// // // // // // // // // // // // // //             labelCol={{ span: 24 }}
// // // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // // //                 message: resources.USER_GENDER_VALIDATOR,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //             ]}
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             <Select placeholder={resources.USER_GENDER_LABEL}>
// // // // // // // // // // // // // //               {React.Children.toArray(GENDERS.map((item) => (
// // // // // // // // // // // // // //                 <Option key={item} value={item}>
// // // // // // // // // // // // // //                   {item}
// // // // // // // // // // // // // //                 </Option>
// // // // // // // // // // // // // //               )))}
// // // // // // // // // // // // // //             </Select>
// // // // // // // // // // // // // //           </Form.Item>

// // // // // // // // // // // // // //           {/* <Form.Item
// // // // // // // // // // // // // //             name="gender"
// // // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // // //                 message: resources.USER_GENDER_VALIDATOR,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //             ]}
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             <Select
// // // // // // // // // // // // // //               placeholder={resources.USER_GENDER_LABEL}
// // // // // // // // // // // // // //               allowClear
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //               {GENDERS.map((gender) => (
// // // // // // // // // // // // // //                 <Option key={gender} value={gender}>
// // // // // // // // // // // // // //                   {gender}
// // // // // // // // // // // // // //                 </Option>
// // // // // // // // // // // // // //               ))}
// // // // // // // // // // // // // //             </Select>
// // // // // // // // // // // // // //           </Form.Item> */}

// // // // // // // // // // // // // //           <Form.Item>
// // // // // // // // // // // // // //             {loading ? (
// // // // // // // // // // // // // //               <AppLoader size="large">
// // // // // // // // // // // // // //                 <Button style={{ width: "100%" }} className="submit-btn">
// // // // // // // // // // // // // //                   {AUTH_MODULES.SIGN_UP}
// // // // // // // // // // // // // //                 </Button>
// // // // // // // // // // // // // //               </AppLoader>
// // // // // // // // // // // // // //             ) : (
// // // // // // // // // // // // // //               <Button
// // // // // // // // // // // // // //                 type="primary"
// // // // // // // // // // // // // //                 htmlType="submit"
// // // // // // // // // // // // // //                 className="submit-btn"
// // // // // // // // // // // // // //                 style={{ width: "100%" }}
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 {AUTH_MODULES.SIGN_UP}
// // // // // // // // // // // // // //               </Button>
// // // // // // // // // // // // // //             )}
// // // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // // //           <SocialSignup />
// // // // // // // // // // // // // //         </Form>
// // // // // // // // // // // // // //         <hr />
// // // // // // // // // // // // // //         <Row className="py-1">
// // // // // // // // // // // // // //           <Col span={24} className="text-center">
// // // // // // // // // // // // // //             <NavLink to={AUTH_LINKS.FORGOT_PASSWORD} style={linkStyle}>
// // // // // // // // // // // // // //               {AUTH_MODULES.CANT_LOGIN}
// // // // // // // // // // // // // //             </NavLink>
// // // // // // // // // // // // // //             <br />
// // // // // // // // // // // // // //             <NavLink to={AUTH_LINKS.LOGIN} style={linkStyle}>
// // // // // // // // // // // // // //               {AUTH_MODULES.LOGIN_ACCOUNT}
// // // // // // // // // // // // // //             </NavLink>
// // // // // // // // // // // // // //           </Col>
// // // // // // // // // // // // // //         </Row>
// // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default SignupPageView;

// // // // // // // // // // // // // // // import { Button, Col, Form, Input, Row } from "antd";
// // // // // // // // // // // // // // // import { AUTH_LINKS, AUTH_MODULES, REGEX } from "constants/constants";
// // // // // // // // // // // // // // // import AppLoader from "elements/AppLoader/AppLoader";
// // // // // // // // // // // // // // // import { notification } from "elements/Notification/Notification";
// // // // // // // // // // // // // // // import { NotificationTypes } from "elements/Notification/notificationConstants";
// // // // // // // // // // // // // // // import SocialSignup from "modules/common/components/social-signup/SocialSignup";
// // // // // // // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // // // // // // import { NavLink, useNavigate } from "react-router-dom";
// // // // // // // // // // // // // // // import axios from "redux/auth/axios";
// // // // // // // // // // // // // // // import logger from "redux/helpers/logger";
// // // // // // // // // // // // // // // import { resources } from "resources/app_resources";
// // // // // // // // // // // // // // // import Select from "antd/lib/select"; // Import Select from Ant Design directly

// // // // // // // // // // // // // // // const VALID_PASSWORD = new RegExp(REGEX.PASSWORD);
// // // // // // // // // // // // // // // const ALPHANUM_VALIDATE = new RegExp(REGEX.EXTRA_SPACE_SPECIAL_CHARACTERS);
// // // // // // // // // // // // // // // const { Option } = Select;

// // // // // // // // // // // // // // // const GENDERS = [
// // // // // // // // // // // // // // //   { value: "male", label: "Male" },
// // // // // // // // // // // // // // //   { value: "female", label: "Female" },
// // // // // // // // // // // // // // //   { value: "other", label: "Other" },
// // // // // // // // // // // // // // // ];

// // // // // // // // // // // // // // // const SignupPageView = () => {
// // // // // // // // // // // // // // //   const [form] = Form.useForm();
// // // // // // // // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // // // // // // // //   const [errorState, setErrorState] = useState();
// // // // // // // // // // // // // // //   const [successState, setSuccessState] = useState();
// // // // // // // // // // // // // // //   const navigate = useNavigate();

// // // // // // // // // // // // // // //   const onFinish = (values) => {
// // // // // // // // // // // // // // //     logger.log("Success:", values);
// // // // // // // // // // // // // // //     registerUser(values);
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const onFinishFailed = (errorInfo) => {
// // // // // // // // // // // // // // //     logger.log("Failed:", errorInfo);
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const registerUser = async (values) => {
// // // // // // // // // // // // // // //     const url = "/user/register";

// // // // // // // // // // // // // // //     setLoading(true);
// // // // // // // // // // // // // // //     axios
// // // // // // // // // // // // // // //       .post(url, values)
// // // // // // // // // // // // // // //       .then((res) => {
// // // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // // //         setSuccessState({
// // // // // // // // // // // // // // //           message: res.data.message,
// // // // // // // // // // // // // // //           statusCode: res.data.statusCode,
// // // // // // // // // // // // // // //         });
// // // // // // // // // // // // // // //         navigate("/auth/login");
// // // // // // // // // // // // // // //       })
// // // // // // // // // // // // // // //       .catch((err) => {
// // // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // // //         setErrorState(err.response);
// // // // // // // // // // // // // // //       });
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // //     if (errorState && Object.entries(errorState).length > 0) {
// // // // // // // // // // // // // // //       notification(
// // // // // // // // // // // // // // //         NotificationTypes.ERROR,
// // // // // // // // // // // // // // //         errorState.statusText,
// // // // // // // // // // // // // // //         errorState.data.title,
// // // // // // // // // // // // // // //         5
// // // // // // // // // // // // // // //       );
// // // // // // // // // // // // // // //       form.resetFields();
// // // // // // // // // // // // // // //       setErrorState(null);
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //     if (successState && Object.entries(successState).length > 0) {
// // // // // // // // // // // // // // //       notification(
// // // // // // // // // // // // // // //         NotificationTypes.SUCCESS,
// // // // // // // // // // // // // // //         successState.statusCode,
// // // // // // // // // // // // // // //         successState.message,
// // // // // // // // // // // // // // //         5
// // // // // // // // // // // // // // //       );
// // // // // // // // // // // // // // //       setSuccessState(null);
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   }, [errorState, successState]);

// // // // // // // // // // // // // // //   // Styles for the container and form
// // // // // // // // // // // // // // //   const pageContainerStyle = {
// // // // // // // // // // // // // // //     backgroundColor: "#f5f5dc",
// // // // // // // // // // // // // // //     minHeight: "100vh",
// // // // // // // // // // // // // // //     display: "flex",
// // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // //     justifyContent: "center",
// // // // // // // // // // // // // // //     padding: "20px",
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const formWrapperStyle = {
// // // // // // // // // // // // // // //     backgroundColor: "#fff",
// // // // // // // // // // // // // // //     borderRadius: "15px",
// // // // // // // // // // // // // // //     boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
// // // // // // // // // // // // // // //     padding: "40px",
// // // // // // // // // // // // // // //     width: "100%",
// // // // // // // // // // // // // // //     maxWidth: "400px",
// // // // // // // // // // // // // // //     position: "relative",
// // // // // // // // // // // // // // //     zIndex: 1,
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const titleStyle = {
// // // // // // // // // // // // // // //     fontSize: "24px",
// // // // // // // // // // // // // // //     fontWeight: "bold",
// // // // // // // // // // // // // // //     marginBottom: "20px",
// // // // // // // // // // // // // // //     color: "#2c3e50",
// // // // // // // // // // // // // // //     textAlign: "center",
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const linkStyle = {
// // // // // // // // // // // // // // //     color: "#3498db",
// // // // // // // // // // // // // // //     textDecoration: "none",
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <div style={pageContainerStyle}>
// // // // // // // // // // // // // // //       <div style={formWrapperStyle}>
// // // // // // // // // // // // // // //         <h1 style={titleStyle}>
// // // // // // // // // // // // // // //           {AUTH_MODULES.SIGN_UP}
// // // // // // // // // // // // // // //         </h1>
// // // // // // // // // // // // // // //         <Form
// // // // // // // // // // // // // // //           form={form}
// // // // // // // // // // // // // // //           name="registerForm"
// // // // // // // // // // // // // // //           onFinish={onFinish}
// // // // // // // // // // // // // // //           onFinishFailed={onFinishFailed}
// // // // // // // // // // // // // // //           autoComplete="off"
// // // // // // // // // // // // // // //         >
// // // // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // // // //             name="firstName"
// // // // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // // // //               {
// // // // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // // // //                 message: resources.FIRST_NAME_EMPTY_VALIDATOR,
// // // // // // // // // // // // // // //               },
// // // // // // // // // // // // // // //               {
// // // // // // // // // // // // // // //                 pattern: ALPHANUM_VALIDATE,
// // // // // // // // // // // // // // //                 message: resources.FIRST_NAME_EMPTY_VALIDATOR,
// // // // // // // // // // // // // // //               },
// // // // // // // // // // // // // // //             ]}
// // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // //             <Input placeholder={resources.FIRST_NAME_PLACEHOLDER} />
// // // // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // // // //             name="lastName"
// // // // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // // // //               {
// // // // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // // // //                 message: resources.LAST_NAME_EMPTY_VALIDATOR,
// // // // // // // // // // // // // // //               },
// // // // // // // // // // // // // // //               {
// // // // // // // // // // // // // // //                 pattern: ALPHANUM_VALIDATE,
// // // // // // // // // // // // // // //                 message: resources.LAST_NAME_EMPTY_VALIDATOR,
// // // // // // // // // // // // // // //               },
// // // // // // // // // // // // // // //             ]}
// // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // //             <Input placeholder={resources.LAST_NAME_PLACEHOLDER} />
// // // // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // // // //             name="email"
// // // // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // // // //               {
// // // // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // // // //                 message: resources.EMAIL_EMPTY_VALIDATOR,
// // // // // // // // // // // // // // //               },
// // // // // // // // // // // // // // //               {
// // // // // // // // // // // // // // //                 type: "email",
// // // // // // // // // // // // // // //                 message: resources.EMAIL_VALIDATOR,
// // // // // // // // // // // // // // //               },
// // // // // // // // // // // // // // //             ]}
// // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // //             <Input type="email" placeholder={resources.EMAIL_PLACEHOLDER} />
// // // // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // // // //             name="password"
// // // // // // // // // // // // // // //             className="pass-field"
// // // // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // // // //               {
// // // // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // // // //                 message: resources.PASSWORD_EMPTY_VALIDATOR,
// // // // // // // // // // // // // // //               },
// // // // // // // // // // // // // // //               {
// // // // // // // // // // // // // // //                 pattern: VALID_PASSWORD,
// // // // // // // // // // // // // // //                 message: resources.PASSWORD_VALIDATE,
// // // // // // // // // // // // // // //               },
// // // // // // // // // // // // // // //             ]}
// // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // //             <Input.Password placeholder={resources.PASSWORD_PLACEHOLDER} />
// // // // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // // // //             name="mobile"
// // // // // // // // // // // // // // //             className="pass-field"
// // // // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // // // //               {
// // // // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // // // //                 message: resources.PH_NO_EMPTY_VALIDATOR,
// // // // // // // // // // // // // // //               },
// // // // // // // // // // // // // // //               {
// // // // // // // // // // // // // // //                 max: 11,
// // // // // // // // // // // // // // //                 min: 11,
// // // // // // // // // // // // // // //                 message: resources.PH_NO_VALIDATOR,
// // // // // // // // // // // // // // //               },
// // // // // // // // // // // // // // //             ]}
// // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // //             <Input
// // // // // // // // // // // // // // //               type="number"
// // // // // // // // // // // // // // //               placeholder={resources.PH_NO_PLACEHOLDER}
// // // // // // // // // // // // // // //               style={{ width: "100%" }}
// // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // // // //             name="gender"
// // // // // // // // // // // // // // //             labelCol={{ span: 24 }}
// // // // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // // // //               {
// // // // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // // // //                 message: resources.USER_GENDER_VALIDATOR,
// // // // // // // // // // // // // // //               },
// // // // // // // // // // // // // // //             ]}
// // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // //             <Select placeholder={resources.USER_GENDER_LABEL}>
// // // // // // // // // // // // // // //               {GENDERS.map((item) => (
// // // // // // // // // // // // // // //                 <Option key={item.value} value={item.value}>
// // // // // // // // // // // // // // //                   {item.label}
// // // // // // // // // // // // // // //                 </Option>
// // // // // // // // // // // // // // //               ))}
// // // // // // // // // // // // // // //             </Select>
// // // // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // // // //           <Form.Item>
// // // // // // // // // // // // // // //             {loading ? (
// // // // // // // // // // // // // // //               <AppLoader size="large">
// // // // // // // // // // // // // // //                 <Button style={{ width: "100%" }} className="submit-btn">
// // // // // // // // // // // // // // //                   {AUTH_MODULES.SIGN_UP}
// // // // // // // // // // // // // // //                 </Button>
// // // // // // // // // // // // // // //               </AppLoader>
// // // // // // // // // // // // // // //             ) : (
// // // // // // // // // // // // // // //               <Button
// // // // // // // // // // // // // // //                 type="primary"
// // // // // // // // // // // // // // //                 htmlType="submit"
// // // // // // // // // // // // // // //                 className="submit-btn"
// // // // // // // // // // // // // // //                 style={{ width: "100%", backgroundColor: "#2c3e50", borderColor: "#2c3e50" }}
// // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // //                 {AUTH_MODULES.SIGN_UP}
// // // // // // // // // // // // // // //               </Button>
// // // // // // // // // // // // // // //             )}
// // // // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // // // //           <SocialSignup />
// // // // // // // // // // // // // // //         </Form>
// // // // // // // // // // // // // // //         <hr />
// // // // // // // // // // // // // // //         <Row className="py-1">
// // // // // // // // // // // // // // //           <Col span={24} className="text-center">
// // // // // // // // // // // // // // //             <NavLink to={AUTH_LINKS.FORGOT_PASSWORD} style={linkStyle}>
// // // // // // // // // // // // // // //               {AUTH_MODULES.CANT_LOGIN}
// // // // // // // // // // // // // // //             </NavLink>
// // // // // // // // // // // // // // //             <br />
// // // // // // // // // // // // // // //             <NavLink to={AUTH_LINKS.LOGIN} style={linkStyle}>
// // // // // // // // // // // // // // //               {AUTH_MODULES.LOGIN_ACCOUNT}
// // // // // // // // // // // // // // //             </NavLink>
// // // // // // // // // // // // // // //           </Col>
// // // // // // // // // // // // // // //         </Row>
// // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default SignupPageView;
// // // // // // // // // // // // // // import { Button, Col, Form, Input, Row } from "antd";
// // // // // // // // // // // // // // import { AUTH_LINKS, AUTH_MODULES, REGEX, GENDERS } from "constants/constants";
// // // // // // // // // // // // // // import AppLoader from "elements/AppLoader/AppLoader";
// // // // // // // // // // // // // // import { notification } from "elements/Notification/Notification";
// // // // // // // // // // // // // // import { NotificationTypes } from "elements/Notification/notificationConstants";
// // // // // // // // // // // // // // import SocialSignup from "modules/common/components/social-signup/SocialSignup";
// // // // // // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // // // // // import { NavLink, useNavigate } from "react-router-dom";
// // // // // // // // // // // // // // import axios from "redux/auth/axios";
// // // // // // // // // // // // // // import logger from "redux/helpers/logger";
// // // // // // // // // // // // // // import { resources } from "resources/app_resources";
// // // // // // // // // // // // // // import Select from "elements/Select/Select";
// // // // // // // // // // // // // // // // // import { GENDERS } from "constants/constants";


// // // // // // // // // // // // // // const VALID_PASSWORD = new RegExp(REGEX.PASSWORD);
// // // // // // // // // // // // // // const ALPHANUM_VALIDATE = new RegExp(REGEX.EXTRA_SPACE_SPECIAL_CHARACTERS);
// // // // // // // // // // // // // // const { Option } = Select;

// // // // // // // // // // // // // // const SignupPageView = () => {
// // // // // // // // // // // // // //   const [form] = Form.useForm();
// // // // // // // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // // // // // // //   const [errorState, setErrorState] = useState();
// // // // // // // // // // // // // //   const [successState, setSuccessState] = useState();
// // // // // // // // // // // // // //   const navigate = useNavigate();

// // // // // // // // // // // // // //   const onFinish = (values) => {
// // // // // // // // // // // // // //     logger.log("Success:", values);
// // // // // // // // // // // // // //     registerUser(values);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const onFinishFailed = (errorInfo) => {
// // // // // // // // // // // // // //     logger.log("Failed:", errorInfo);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const registerUser = async (values) => {
// // // // // // // // // // // // // //     const url = `/user/register`;

// // // // // // // // // // // // // //     setLoading(true);
// // // // // // // // // // // // // //     axios
// // // // // // // // // // // // // //       .post(url, values)
// // // // // // // // // // // // // //       .then((res) => {
// // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // //         setSuccessState({
// // // // // // // // // // // // // //           message: res.data.message,
// // // // // // // // // // // // // //           statusCode: res.data.statusCode,
// // // // // // // // // // // // // //         });
// // // // // // // // // // // // // //         navigate("/auth/login");
// // // // // // // // // // // // // //       })
// // // // // // // // // // // // // //       .catch((err) => {
// // // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // // //         setErrorState(err.response);
// // // // // // // // // // // // // //       });
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     if (errorState && Object.entries(errorState).length > 0) {
// // // // // // // // // // // // // //       notification(
// // // // // // // // // // // // // //         NotificationTypes.ERROR,
// // // // // // // // // // // // // //         errorState.statusText,
// // // // // // // // // // // // // //         errorState.data.title,
// // // // // // // // // // // // // //         5
// // // // // // // // // // // // // //       );
// // // // // // // // // // // // // //       form.resetFields();
// // // // // // // // // // // // // //       setErrorState(null);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //     if (successState && Object.entries(successState).length > 0) {
// // // // // // // // // // // // // //       notification(
// // // // // // // // // // // // // //         NotificationTypes.SUCCESS,
// // // // // // // // // // // // // //         successState.statusCode,
// // // // // // // // // // // // // //         successState.message,
// // // // // // // // // // // // // //         5
// // // // // // // // // // // // // //       );
// // // // // // // // // // // // // //       setSuccessState(null);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   }, [errorState, successState]);

// // // // // // // // // // // // // //   // Styles for the container and form
// // // // // // // // // // // // // //   const pageContainerStyle = {
// // // // // // // // // // // // // //     background: 'linear-gradient(135deg, #a1c4fd 50%, #c2e9fb 50%)',
// // // // // // // // // // // // // //     minHeight: '100vh',
// // // // // // // // // // // // // //     display: 'flex',
// // // // // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // // // // //     justifyContent: 'center',
// // // // // // // // // // // // // //     padding: '20px',
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const formWrapperStyle = {
// // // // // // // // // // // // // //     backgroundColor: '#fff',
// // // // // // // // // // // // // //     borderRadius: '15px',
// // // // // // // // // // // // // //     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
// // // // // // // // // // // // // //     padding: '40px',
// // // // // // // // // // // // // //     width: '100%',
// // // // // // // // // // // // // //     maxWidth: '400px',
// // // // // // // // // // // // // //     position: 'relative',
// // // // // // // // // // // // // //     zIndex: 1,
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const titleStyle = {
// // // // // // // // // // // // // //     fontSize: '24px',
// // // // // // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // // // // // //     marginBottom: '20px',
// // // // // // // // // // // // // //     color: '#2c3e50',
// // // // // // // // // // // // // //     textAlign: 'center',
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const linkStyle = {
// // // // // // // // // // // // // //     color: '#3498db',
// // // // // // // // // // // // // //     textDecoration: 'none',
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div style={pageContainerStyle}>
// // // // // // // // // // // // // //       <div style={formWrapperStyle}>
// // // // // // // // // // // // // //         <h1 className="text-center mb-2 text-uppercase dark-gray-text-color" style={titleStyle}>
// // // // // // // // // // // // // //           {AUTH_MODULES.SIGN_UP}
// // // // // // // // // // // // // //         </h1>
// // // // // // // // // // // // // //         <Form
// // // // // // // // // // // // // //           form={form}
// // // // // // // // // // // // // //           name="registerForm"
// // // // // // // // // // // // // //           onFinish={onFinish}
// // // // // // // // // // // // // //           onFinishFailed={onFinishFailed}
// // // // // // // // // // // // // //           autoComplete="off"
// // // // // // // // // // // // // //         >
// // // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // // //             name="firstName"
// // // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // // //                 message: resources.FIRST_NAME_EMPTY_VALIDATOR,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 pattern: ALPHANUM_VALIDATE,
// // // // // // // // // // // // // //                 message: resources.FIRST_NAME_EMPTY_VALIDATOR,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //             ]}
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             <Input placeholder={resources.FIRST_NAME_PLACEHOLDER} />
// // // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // // //             name="lastName"
// // // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // // //                 message: resources.LAST_NAME_EMPTY_VALIDATOR,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 pattern: ALPHANUM_VALIDATE,
// // // // // // // // // // // // // //                 message: resources.LAST_NAME_EMPTY_VALIDATOR,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //             ]}
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             <Input placeholder={resources.LAST_NAME_PLACEHOLDER} />
// // // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // // //             name="email"
// // // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // // //                 message: resources.EMAIL_EMPTY_VALIDATOR,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 type: "email",
// // // // // // // // // // // // // //                 message: resources.EMAIL_VALIDATOR,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //             ]}
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             <Input type="email" placeholder={resources.EMAIL_PLACEHOLDER} />
// // // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // // //             name="password"
// // // // // // // // // // // // // //             className="pass-field"
// // // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // // //                 message: resources.PASSWORD_EMPTY_VALIDATOR,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 pattern: VALID_PASSWORD,
// // // // // // // // // // // // // //                 message: resources.PASSWORD_VALIDATE,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //             ]}
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             <Input.Password placeholder={resources.PASSWORD_PLACEHOLDER} />
// // // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // // //             name="mobile"
// // // // // // // // // // // // // //             className="pass-field"
// // // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // // //                 message: resources.PH_NO_EMPTY_VALIDATOR,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 max: 11,
// // // // // // // // // // // // // //                 min: 11,
// // // // // // // // // // // // // //                 message: resources.PH_NO_VALIDATOR,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //             ]}
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             <Input
// // // // // // // // // // // // // //               type="number"
// // // // // // // // // // // // // //               placeholder={resources.PH_NO_PLACEHOLDER}
// // // // // // // // // // // // // //               style={{ width: "100%" }}
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // // //             name="gender"
// // // // // // // // // // // // // //             labelCol={{ span: 24 }}
// // // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // // //               {
// // // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // // //                 message: resources.USER_GENDER_VALIDATOR,
// // // // // // // // // // // // // //               },
// // // // // // // // // // // // // //             ]}
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             <Select placeholder={resources.USER_GENDER_LABEL}>
// // // // // // // // // // // // // //               {React.Children.toArray(GENDERS.map((item) => (
// // // // // // // // // // // // // //                 <Option key={item} value={item}>
// // // // // // // // // // // // // //                   {item}
// // // // // // // // // // // // // //                 </Option>
// // // // // // // // // // // // // //               )))}
// // // // // // // // // // // // // //             </Select>
// // // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // // //           <Form.Item>
// // // // // // // // // // // // // //             {loading ? (
// // // // // // // // // // // // // //               <AppLoader size="large">
// // // // // // // // // // // // // //                 <Button style={{ width: "100%" }} className="submit-btn">
// // // // // // // // // // // // // //                   {AUTH_MODULES.SIGN_UP}
// // // // // // // // // // // // // //                 </Button>
// // // // // // // // // // // // // //               </AppLoader>
// // // // // // // // // // // // // //             ) : (
// // // // // // // // // // // // // //               <Button
// // // // // // // // // // // // // //                 type="primary"
// // // // // // // // // // // // // //                 htmlType="submit"
// // // // // // // // // // // // // //                 className="submit-btn"
// // // // // // // // // // // // // //                 style={{ width: "100%" }}
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 {AUTH_MODULES.SIGN_UP}
// // // // // // // // // // // // // //               </Button>
// // // // // // // // // // // // // //             )}
// // // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // // //           <SocialSignup />
// // // // // // // // // // // // // //         </Form>
// // // // // // // // // // // // // //         <hr />
// // // // // // // // // // // // // //         <Row className="py-1">
// // // // // // // // // // // // // //           <Col span={24} className="text-center">
// // // // // // // // // // // // // //             <NavLink to={AUTH_LINKS.FORGOT_PASSWORD} style={linkStyle}>
// // // // // // // // // // // // // //               {AUTH_MODULES.CANT_LOGIN}
// // // // // // // // // // // // // //             </NavLink>
// // // // // // // // // // // // // //             <br />
// // // // // // // // // // // // // //             <NavLink to={AUTH_LINKS.LOGIN} style={linkStyle}>
// // // // // // // // // // // // // //               {AUTH_MODULES.LOGIN_ACCOUNT}
// // // // // // // // // // // // // //             </NavLink>
// // // // // // // // // // // // // //           </Col>
// // // // // // // // // // // // // //         </Row>
// // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default SignupPageView;
// // // // // // // // // // // // // import { Button, Col, Form, Input, Row } from "antd";
// // // // // // // // // // // // // import { AUTH_LINKS, AUTH_MODULES, REGEX } from "constants/constants";
// // // // // // // // // // // // // // import { GENDERS } from "constants/constants";

// // // // // // // // // // // // // import AppLoader from "elements/AppLoader/AppLoader";
// // // // // // // // // // // // // import { notification } from "elements/Notification/Notification";
// // // // // // // // // // // // // import { NotificationTypes } from "elements/Notification/notificationConstants";
// // // // // // // // // // // // // import SocialSignup from "modules/common/components/social-signup/SocialSignup";
// // // // // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // // // // import { NavLink, useNavigate } from "react-router-dom";
// // // // // // // // // // // // // import axios from "redux/auth/axios";
// // // // // // // // // // // // // import logger from "redux/helpers/logger";
// // // // // // // // // // // // // import { resources } from "resources/app_resources";
// // // // // // // // // // // // // import Select from "elements/Select/Select";

// // // // // // // // // // // // // const VALID_PASSWORD = new RegExp(REGEX.PASSWORD);
// // // // // // // // // // // // // const ALPHANUM_VALIDATE = new RegExp(REGEX.EXTRA_SPACE_SPECIAL_CHARACTERS);
// // // // // // // // // // // // // const { Option } = Select;

// // // // // // // // // // // // // const SignupPageView = () => {
// // // // // // // // // // // // //   const [form] = Form.useForm();
// // // // // // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // // // // // //   const [errorState, setErrorState] = useState();
// // // // // // // // // // // // //   const [successState, setSuccessState] = useState();
// // // // // // // // // // // // //   const navigate = useNavigate();

// // // // // // // // // // // // //   const onFinish = (values) => {
// // // // // // // // // // // // //     logger.log("Success:", values);
// // // // // // // // // // // // //     registerUser(values);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const onFinishFailed = (errorInfo) => {
// // // // // // // // // // // // //     logger.log("Failed:", errorInfo);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const registerUser = async (values) => {
// // // // // // // // // // // // //     const url = `/user/register`;

// // // // // // // // // // // // //     setLoading(true);
// // // // // // // // // // // // //     axios
// // // // // // // // // // // // //       .post(url, values)
// // // // // // // // // // // // //       .then((res) => {
// // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // //         setSuccessState({
// // // // // // // // // // // // //           message: res.data.message,
// // // // // // // // // // // // //           statusCode: res.data.statusCode,
// // // // // // // // // // // // //         });
// // // // // // // // // // // // //         navigate("/auth/login");
// // // // // // // // // // // // //       })
// // // // // // // // // // // // //       .catch((err) => {
// // // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // // //         setErrorState(err.response);
// // // // // // // // // // // // //       });
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     if (errorState && Object.entries(errorState).length > 0) {
// // // // // // // // // // // // //       notification(
// // // // // // // // // // // // //         NotificationTypes.ERROR,
// // // // // // // // // // // // //         errorState.statusText,
// // // // // // // // // // // // //         errorState.data.title,
// // // // // // // // // // // // //         5
// // // // // // // // // // // // //       );
// // // // // // // // // // // // //       form.resetFields();
// // // // // // // // // // // // //       setErrorState(null);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //     if (successState && Object.entries(successState).length > 0) {
// // // // // // // // // // // // //       notification(
// // // // // // // // // // // // //         NotificationTypes.SUCCESS,
// // // // // // // // // // // // //         successState.statusCode,
// // // // // // // // // // // // //         successState.message,
// // // // // // // // // // // // //         5
// // // // // // // // // // // // //       );
// // // // // // // // // // // // //       setSuccessState(null);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   }, [errorState, successState]);

// // // // // // // // // // // // //   // Styles for the container and form
// // // // // // // // // // // // //   const pageContainerStyle = {
// // // // // // // // // // // // //     background: 'linear-gradient(135deg, #a1c4fd 50%, #c2e9fb 50%)',
// // // // // // // // // // // // //     minHeight: '100vh',
// // // // // // // // // // // // //     display: 'flex',
// // // // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // // // //     justifyContent: 'center',
// // // // // // // // // // // // //     padding: '20px',
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const formWrapperStyle = {
// // // // // // // // // // // // //     backgroundColor: '#fff',
// // // // // // // // // // // // //     borderRadius: '15px',
// // // // // // // // // // // // //     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
// // // // // // // // // // // // //     padding: '40px',
// // // // // // // // // // // // //     width: '100%',
// // // // // // // // // // // // //     maxWidth: '400px',
// // // // // // // // // // // // //     position: 'relative',
// // // // // // // // // // // // //     zIndex: 1,
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const titleStyle = {
// // // // // // // // // // // // //     fontSize: '24px',
// // // // // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // // // // //     marginBottom: '20px',
// // // // // // // // // // // // //     color: '#2c3e50',
// // // // // // // // // // // // //     textAlign: 'center',
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const linkStyle = {
// // // // // // // // // // // // //     color: '#3498db',
// // // // // // // // // // // // //     textDecoration: 'none',
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div style={pageContainerStyle}>
// // // // // // // // // // // // //       <div style={formWrapperStyle}>
// // // // // // // // // // // // //         <h1 className="text-center mb-2 text-uppercase dark-gray-text-color" style={titleStyle}>
// // // // // // // // // // // // //           {AUTH_MODULES.SIGN_UP}
// // // // // // // // // // // // //         </h1>
// // // // // // // // // // // // //         <Form
// // // // // // // // // // // // //           form={form}
// // // // // // // // // // // // //           name="registerForm"
// // // // // // // // // // // // //           onFinish={onFinish}
// // // // // // // // // // // // //           onFinishFailed={onFinishFailed}
// // // // // // // // // // // // //           autoComplete="off"
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // //             name="firstName"
// // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // //               {
// // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // //                 message: resources.FIRST_NAME_EMPTY_VALIDATOR,
// // // // // // // // // // // // //               },
// // // // // // // // // // // // //               {
// // // // // // // // // // // // //                 pattern: ALPHANUM_VALIDATE,
// // // // // // // // // // // // //                 message: resources.FIRST_NAME_EMPTY_VALIDATOR,
// // // // // // // // // // // // //               },
// // // // // // // // // // // // //             ]}
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <Input placeholder={resources.FIRST_NAME_PLACEHOLDER} />
// // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // //             name="lastName"
// // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // //               {
// // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // //                 message: resources.LAST_NAME_EMPTY_VALIDATOR,
// // // // // // // // // // // // //               },
// // // // // // // // // // // // //               {
// // // // // // // // // // // // //                 pattern: ALPHANUM_VALIDATE,
// // // // // // // // // // // // //                 message: resources.LAST_NAME_EMPTY_VALIDATOR,
// // // // // // // // // // // // //               },
// // // // // // // // // // // // //             ]}
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <Input placeholder={resources.LAST_NAME_PLACEHOLDER} />
// // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // //             name="email"
// // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // //               {
// // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // //                 message: resources.EMAIL_EMPTY_VALIDATOR,
// // // // // // // // // // // // //               },
// // // // // // // // // // // // //               {
// // // // // // // // // // // // //                 type: "email",
// // // // // // // // // // // // //                 message: resources.EMAIL_VALIDATOR,
// // // // // // // // // // // // //               },
// // // // // // // // // // // // //             ]}
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <Input type="email" placeholder={resources.EMAIL_PLACEHOLDER} />
// // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // //             name="password"
// // // // // // // // // // // // //             className="pass-field"
// // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // //               {
// // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // //                 message: resources.PASSWORD_EMPTY_VALIDATOR,
// // // // // // // // // // // // //               },
// // // // // // // // // // // // //               {
// // // // // // // // // // // // //                 pattern: VALID_PASSWORD,
// // // // // // // // // // // // //                 message: resources.PASSWORD_VALIDATE,
// // // // // // // // // // // // //               },
// // // // // // // // // // // // //             ]}
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <Input.Password placeholder={resources.PASSWORD_PLACEHOLDER} />
// // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // //             name="mobile"
// // // // // // // // // // // // //             className="pass-field"
// // // // // // // // // // // // //             rules={[
// // // // // // // // // // // // //               {
// // // // // // // // // // // // //                 required: true,
// // // // // // // // // // // // //                 message: resources.PH_NO_EMPTY_VALIDATOR,
// // // // // // // // // // // // //               },
// // // // // // // // // // // // //               {
// // // // // // // // // // // // //                 max: 11,
// // // // // // // // // // // // //                 min: 11,
// // // // // // // // // // // // //                 message: resources.PH_NO_VALIDATOR,
// // // // // // // // // // // // //               },
// // // // // // // // // // // // //             ]}
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <Input
// // // // // // // // // // // // //               type="number"
// // // // // // // // // // // // //               placeholder={resources.PH_NO_PLACEHOLDER}
// // // // // // // // // // // // //               style={{ width: "100%" }}
// // // // // // // // // // // // //             />
// // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // // //   name="gender"
// // // // // // // // // // // // //   rules={[
// // // // // // // // // // // // //     {
// // // // // // // // // // // // //       required: true,
// // // // // // // // // // // // //       message: resources.USER_GENDER_VALIDATOR,
// // // // // // // // // // // // //     },
// // // // // // // // // // // // //   ]}
// // // // // // // // // // // // // >
// // // // // // // // // // // // //   <Select placeholder={resources.USER_GENDER_LABEL}>
// // // // // // // // // // // // //     {/* Hardcoded options for testing */}
// // // // // // // // // // // // //     <Option value="Male">Male</Option>
// // // // // // // // // // // // //     <Option value="Female">Female</Option>
// // // // // // // // // // // // //     <Option value="Other">Other</Option>
    
// // // // // // // // // // // // //     {/* Uncomment the following code if GENDERS is defined correctly */}
// // // // // // // // // // // // //     {/* {GENDERS.map((gender) => (
// // // // // // // // // // // // //       <Option key={gender} value={gender}>
// // // // // // // // // // // // //         {gender}
// // // // // // // // // // // // //       </Option>
// // // // // // // // // // // // //     ))} */}
// // // // // // // // // // // // //   </Select>
// // // // // // // // // // // // // </Form.Item>


// // // // // // // // // // // // //           <Form.Item>
// // // // // // // // // // // // //             {loading ? (
// // // // // // // // // // // // //               <AppLoader size="large">
// // // // // // // // // // // // //                 <Button style={{ width: "100%" }} className="submit-btn">
// // // // // // // // // // // // //                   {AUTH_MODULES.SIGN_UP}
// // // // // // // // // // // // //                 </Button>
// // // // // // // // // // // // //               </AppLoader>
// // // // // // // // // // // // //             ) : (
// // // // // // // // // // // // //               <Button
// // // // // // // // // // // // //                 type="primary"
// // // // // // // // // // // // //                 htmlType="submit"
// // // // // // // // // // // // //                 className="submit-btn"
// // // // // // // // // // // // //                 style={{ width: "100%" }}
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 {AUTH_MODULES.SIGN_UP}
// // // // // // // // // // // // //               </Button>
// // // // // // // // // // // // //             )}
// // // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // // //           <SocialSignup />
// // // // // // // // // // // // //         </Form>
// // // // // // // // // // // // //         <hr />
// // // // // // // // // // // // //         <Row className="py-1">
// // // // // // // // // // // // //           <Col span={24} className="text-center">
// // // // // // // // // // // // //             <NavLink to={AUTH_LINKS.FORGOT_PASSWORD} style={linkStyle}>
// // // // // // // // // // // // //               {AUTH_MODULES.CANT_LOGIN}
// // // // // // // // // // // // //             </NavLink>
// // // // // // // // // // // // //             <br />
// // // // // // // // // // // // //             <NavLink to={AUTH_LINKS.LOGIN} style={linkStyle}>
// // // // // // // // // // // // //               {AUTH_MODULES.LOGIN_ACCOUNT}
// // // // // // // // // // // // //             </NavLink>
// // // // // // // // // // // // //           </Col>
// // // // // // // // // // // // //         </Row>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default SignupPageView;
// // // // // // // // // // // // import { Button, Col, Form, Input, Row } from "antd";
// // // // // // // // // // // // import { AUTH_LINKS, AUTH_MODULES, REGEX } from "constants/constants";
// // // // // // // // // // // // import { GENDERS } from "constants/constants"; // Ensure this path is correct

// // // // // // // // // // // // import AppLoader from "elements/AppLoader/AppLoader";
// // // // // // // // // // // // import { notification } from "elements/Notification/Notification";
// // // // // // // // // // // // import { NotificationTypes } from "elements/Notification/notificationConstants";
// // // // // // // // // // // // import SocialSignup from "modules/common/components/social-signup/SocialSignup";
// // // // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // // // import { NavLink, useNavigate } from "react-router-dom";
// // // // // // // // // // // // import axios from "redux/auth/axios";
// // // // // // // // // // // // import logger from "redux/helpers/logger";
// // // // // // // // // // // // import { resources } from "resources/app_resources";
// // // // // // // // // // // // import Select from "elements/Select/Select";

// // // // // // // // // // // // const VALID_PASSWORD = new RegExp(REGEX.PASSWORD);
// // // // // // // // // // // // const ALPHANUM_VALIDATE = new RegExp(REGEX.EXTRA_SPACE_SPECIAL_CHARACTERS);
// // // // // // // // // // // // const { Option } = Select;

// // // // // // // // // // // // const SignupPageView = () => {
// // // // // // // // // // // //   const [form] = Form.useForm();
// // // // // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // // // // //   const [errorState, setErrorState] = useState();
// // // // // // // // // // // //   const [successState, setSuccessState] = useState();
// // // // // // // // // // // //   const navigate = useNavigate();

// // // // // // // // // // // //   const onFinish = (values) => {
// // // // // // // // // // // //     logger.log("Success:", values);
// // // // // // // // // // // //     registerUser(values);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const onFinishFailed = (errorInfo) => {
// // // // // // // // // // // //     logger.log("Failed:", errorInfo);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const registerUser = async (values) => {
// // // // // // // // // // // //     const url = `/user/register`;

// // // // // // // // // // // //     setLoading(true);
// // // // // // // // // // // //     axios
// // // // // // // // // // // //       .post(url, values)
// // // // // // // // // // // //       .then((res) => {
// // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // //         setSuccessState({
// // // // // // // // // // // //           message: res.data.message,
// // // // // // // // // // // //           statusCode: res.data.statusCode,
// // // // // // // // // // // //         });
// // // // // // // // // // // //         navigate("/auth/login");
// // // // // // // // // // // //       })
// // // // // // // // // // // //       .catch((err) => {
// // // // // // // // // // // //         setLoading(false);
// // // // // // // // // // // //         setErrorState(err.response);
// // // // // // // // // // // //       });
// // // // // // // // // // // //   };

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     if (errorState && Object.entries(errorState).length > 0) {
// // // // // // // // // // // //       notification(
// // // // // // // // // // // //         NotificationTypes.ERROR,
// // // // // // // // // // // //         errorState.statusText,
// // // // // // // // // // // //         errorState.data.title,
// // // // // // // // // // // //         5
// // // // // // // // // // // //       );
// // // // // // // // // // // //       form.resetFields();
// // // // // // // // // // // //       setErrorState(null);
// // // // // // // // // // // //     }
// // // // // // // // // // // //     if (successState && Object.entries(successState).length > 0) {
// // // // // // // // // // // //       notification(
// // // // // // // // // // // //         NotificationTypes.SUCCESS,
// // // // // // // // // // // //         successState.statusCode,
// // // // // // // // // // // //         successState.message,
// // // // // // // // // // // //         5
// // // // // // // // // // // //       );
// // // // // // // // // // // //       setSuccessState(null);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   }, [errorState, successState]);

// // // // // // // // // // // //   // Styles for the container and form
// // // // // // // // // // // //   const pageContainerStyle = {
// // // // // // // // // // // //     background: 'linear-gradient(135deg, #a1c4fd 50%, #c2e9fb 50%)',
// // // // // // // // // // // //     minHeight: '100vh',
// // // // // // // // // // // //     display: 'flex',
// // // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // // //     justifyContent: 'center',
// // // // // // // // // // // //     padding: '20px',
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const formWrapperStyle = {
// // // // // // // // // // // //     backgroundColor: '#fff',
// // // // // // // // // // // //     borderRadius: '15px',
// // // // // // // // // // // //     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
// // // // // // // // // // // //     padding: '40px',
// // // // // // // // // // // //     width: '100%',
// // // // // // // // // // // //     maxWidth: '400px',
// // // // // // // // // // // //     position: 'relative',
// // // // // // // // // // // //     zIndex: 1,
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const titleStyle = {
// // // // // // // // // // // //     fontSize: '24px',
// // // // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // // // //     marginBottom: '20px',
// // // // // // // // // // // //     color: '#2c3e50',
// // // // // // // // // // // //     textAlign: 'center',
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const linkStyle = {
// // // // // // // // // // // //     color: '#3498db',
// // // // // // // // // // // //     textDecoration: 'none',
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Debugging log
// // // // // // // // // // // //   console.log("GENDERS:", GENDERS); // Check if GENDERS is defined and what it contains

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div style={pageContainerStyle}>
// // // // // // // // // // // //       <div style={formWrapperStyle}>
// // // // // // // // // // // //         <h1 className="text-center mb-2 text-uppercase dark-gray-text-color" style={titleStyle}>
// // // // // // // // // // // //           {AUTH_MODULES.SIGN_UP}
// // // // // // // // // // // //         </h1>
// // // // // // // // // // // //         <Form
// // // // // // // // // // // //           form={form}
// // // // // // // // // // // //           name="registerForm"
// // // // // // // // // // // //           onFinish={onFinish}
// // // // // // // // // // // //           onFinishFailed={onFinishFailed}
// // // // // // // // // // // //           autoComplete="off"
// // // // // // // // // // // //         >
// // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // //             name="firstName"
// // // // // // // // // // // //             rules={[
// // // // // // // // // // // //               {
// // // // // // // // // // // //                 required: true,
// // // // // // // // // // // //                 message: resources.FIRST_NAME_EMPTY_VALIDATOR,
// // // // // // // // // // // //               },
// // // // // // // // // // // //               {
// // // // // // // // // // // //                 pattern: ALPHANUM_VALIDATE,
// // // // // // // // // // // //                 message: resources.FIRST_NAME_EMPTY_VALIDATOR,
// // // // // // // // // // // //               },
// // // // // // // // // // // //             ]}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <Input placeholder={resources.FIRST_NAME_PLACEHOLDER} />
// // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // //             name="lastName"
// // // // // // // // // // // //             rules={[
// // // // // // // // // // // //               {
// // // // // // // // // // // //                 required: true,
// // // // // // // // // // // //                 message: resources.LAST_NAME_EMPTY_VALIDATOR,
// // // // // // // // // // // //               },
// // // // // // // // // // // //               {
// // // // // // // // // // // //                 pattern: ALPHANUM_VALIDATE,
// // // // // // // // // // // //                 message: resources.LAST_NAME_EMPTY_VALIDATOR,
// // // // // // // // // // // //               },
// // // // // // // // // // // //             ]}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <Input placeholder={resources.LAST_NAME_PLACEHOLDER} />
// // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // //             name="email"
// // // // // // // // // // // //             rules={[
// // // // // // // // // // // //               {
// // // // // // // // // // // //                 required: true,
// // // // // // // // // // // //                 message: resources.EMAIL_EMPTY_VALIDATOR,
// // // // // // // // // // // //               },
// // // // // // // // // // // //               {
// // // // // // // // // // // //                 type: "email",
// // // // // // // // // // // //                 message: resources.EMAIL_VALIDATOR,
// // // // // // // // // // // //               },
// // // // // // // // // // // //             ]}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <Input type="email" placeholder={resources.EMAIL_PLACEHOLDER} />
// // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // //             name="password"
// // // // // // // // // // // //             className="pass-field"
// // // // // // // // // // // //             rules={[
// // // // // // // // // // // //               {
// // // // // // // // // // // //                 required: true,
// // // // // // // // // // // //                 message: resources.PASSWORD_EMPTY_VALIDATOR,
// // // // // // // // // // // //               },
// // // // // // // // // // // //               {
// // // // // // // // // // // //                 pattern: VALID_PASSWORD,
// // // // // // // // // // // //                 message: resources.PASSWORD_VALIDATE,
// // // // // // // // // // // //               },
// // // // // // // // // // // //             ]}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <Input.Password placeholder={resources.PASSWORD_PLACEHOLDER} />
// // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // //             name="mobile"
// // // // // // // // // // // //             className="pass-field"
// // // // // // // // // // // //             rules={[
// // // // // // // // // // // //               {
// // // // // // // // // // // //                 required: true,
// // // // // // // // // // // //                 message: resources.PH_NO_EMPTY_VALIDATOR,
// // // // // // // // // // // //               },
// // // // // // // // // // // //               {
// // // // // // // // // // // //                 max: 11,
// // // // // // // // // // // //                 min: 11,
// // // // // // // // // // // //                 message: resources.PH_NO_VALIDATOR,
// // // // // // // // // // // //               },
// // // // // // // // // // // //             ]}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <Input
// // // // // // // // // // // //               type="number"
// // // // // // // // // // // //               placeholder={resources.PH_NO_PLACEHOLDER}
// // // // // // // // // // // //               style={{ width: "100%" }}
// // // // // // // // // // // //             />
// // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // //           <Form.Item
// // // // // // // // // // // //             name="gender"
// // // // // // // // // // // //             rules={[
// // // // // // // // // // // //               {
// // // // // // // // // // // //                 required: true,
// // // // // // // // // // // //                 message: resources.USER_GENDER_VALIDATOR,
// // // // // // // // // // // //               },
// // // // // // // // // // // //             ]}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <Select placeholder={resources.USER_GENDER_LABEL}>
// // // // // // // // // // // //               {GENDERS && GENDERS.length > 0 ? (
// // // // // // // // // // // //                 GENDERS.map((gender) => (
// // // // // // // // // // // //                   <Option key={gender} value={gender}>
// // // // // // // // // // // //                     {gender}
// // // // // // // // // // // //                   </Option>
// // // // // // // // // // // //                 ))
// // // // // // // // // // // //               ) : (
// // // // // // // // // // // //                 <Option value="">No options available</Option> // Fallback option
// // // // // // // // // // // //               )}
// // // // // // // // // // // //             </Select>
// // // // // // // // // // // //           </Form.Item>

// // // // // // // // // // // //           <Form.Item>
// // // // // // // // // // // //             {loading ? (
// // // // // // // // // // // //               <AppLoader size="large">
// // // // // // // // // // // //                 <Button style={{ width: "100%" }} className="submit-btn">
// // // // // // // // // // // //                   {AUTH_MODULES.SIGN_UP}
// // // // // // // // // // // //                 </Button>
// // // // // // // // // // // //               </AppLoader>
// // // // // // // // // // // //             ) : (
// // // // // // // // // // // //               <Button
// // // // // // // // // // // //                 type="primary"
// // // // // // // // // // // //                 htmlType="submit"
// // // // // // // // // // // //                 className="submit-btn"
// // // // // // // // // // // //                 style={{ width: "100%" }}
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 {AUTH_MODULES.SIGN_UP}
// // // // // // // // // // // //               </Button>
// // // // // // // // // // // //             )}
// // // // // // // // // // // //           </Form.Item>
// // // // // // // // // // // //           <SocialSignup />
// // // // // // // // // // // //         </Form>
// // // // // // // // // // // //         <hr />
// // // // // // // // // // // //         <Row className="py-1">
// // // // // // // // // // // //           <Col span={24} className="text-center">
// // // // // // // // // // // //             <NavLink to={AUTH_LINKS.FORGOT_PASSWORD} style={linkStyle}>
// // // // // // // // // // // //               {AUTH_MODULES.CANT_LOGIN}
// // // // // // // // // // // //             </NavLink>
// // // // // // // // // // // //             <br />
// // // // // // // // // // // //             <NavLink to={AUTH_LINKS.LOGIN} style={linkStyle}>
// // // // // // // // // // // //               {AUTH_MODULES.LOGIN_ACCOUNT}
// // // // // // // // // // // //             </NavLink>
// // // // // // // // // // // //           </Col>
// // // // // // // // // // // //         </Row>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default SignupPageView;
// // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // import { Button, Form, Input, notification } from "antd";
// // // // // // // // // // // import axios from "redux/auth/axios";
// // // // // // // // // // // import { resources } from "resources/app_resources";

// // // // // // // // // // // const GENDERS = ['Male', 'Female', 'Other']; // Define gender options

// // // // // // // // // // // const SignupPageView = () => {
// // // // // // // // // // //   const [form] = Form.useForm();
// // // // // // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // // // // // //   const onFinish = async (values) => {
// // // // // // // // // // //     console.log("Received values:", values);
// // // // // // // // // // //     await registerUser(values);
// // // // // // // // // // //   };

// // // // // // // // // // //   const onFinishFailed = (errorInfo) => {
// // // // // // // // // // //     console.log("Failed:", errorInfo);
// // // // // // // // // // //   };

// // // // // // // // // // //   const registerUser = async (values) => {
// // // // // // // // // // //     const url = `/user/register`;

// // // // // // // // // // //     setLoading(true);
// // // // // // // // // // //     try {
// // // // // // // // // // //       const res = await axios.post(url, values);
// // // // // // // // // // //       notification.success({
// // // // // // // // // // //         message: "Registration Successful",
// // // // // // // // // // //         description: res.data.message,
// // // // // // // // // // //       });
// // // // // // // // // // //       form.resetFields(); // Reset form after successful registration
// // // // // // // // // // //     } catch (error) {
// // // // // // // // // // //       notification.error({
// // // // // // // // // // //         message: "Registration Failed",
// // // // // // // // // // //         description: error.response?.data?.message || "An error occurred.",
// // // // // // // // // // //       });
// // // // // // // // // // //     } finally {
// // // // // // // // // // //       setLoading(false);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div style={{ maxWidth: 400, margin: "0 auto" }}>
// // // // // // // // // // //       <h1>Signup Page</h1>
// // // // // // // // // // //       <Form
// // // // // // // // // // //         form={form}
// // // // // // // // // // //         name="registerForm"
// // // // // // // // // // //         onFinish={onFinish}
// // // // // // // // // // //         onFinishFailed={onFinishFailed}
// // // // // // // // // // //         autoComplete="off"
// // // // // // // // // // //       >
// // // // // // // // // // //         <Form.Item
// // // // // // // // // // //           name="firstName"
// // // // // // // // // // //           rules={[{ required: true, message: resources.FIRST_NAME_EMPTY_VALIDATOR }]}
// // // // // // // // // // //         >
// // // // // // // // // // //           <Input placeholder="First Name" />
// // // // // // // // // // //         </Form.Item>

// // // // // // // // // // //         <Form.Item
// // // // // // // // // // //           name="lastName"
// // // // // // // // // // //           rules={[{ required: true, message: resources.LAST_NAME_EMPTY_VALIDATOR }]}
// // // // // // // // // // //         >
// // // // // // // // // // //           <Input placeholder="Last Name" />
// // // // // // // // // // //         </Form.Item>

// // // // // // // // // // //         <Form.Item
// // // // // // // // // // //           name="email"
// // // // // // // // // // //           rules={[{ required: true, type: 'email', message: resources.USER_EMAIL_VALIDATOR }]}
// // // // // // // // // // //         >
// // // // // // // // // // //           <Input placeholder="Email" />
// // // // // // // // // // //         </Form.Item>

// // // // // // // // // // //         <Form.Item
// // // // // // // // // // //           name="password"
// // // // // // // // // // //           rules={[{ required: true, message: resources.USER_PASSWORD_VALIDATOR }]}
// // // // // // // // // // //         >
// // // // // // // // // // //           <Input.Password placeholder="Password" />
// // // // // // // // // // //         </Form.Item>

// // // // // // // // // // //         <Form.Item
// // // // // // // // // // //           name="mobile"
// // // // // // // // // // //           rules={[
// // // // // // // // // // //             { required: true, message: resources.PH_NO_EMPTY_VALIDATOR },
// // // // // // // // // // //             { len: 11, message: resources.PH_NO_VALIDATOR }, // Example: Validates mobile number length
// // // // // // // // // // //           ]}
// // // // // // // // // // //         >
// // // // // // // // // // //           <Input placeholder="Mobile Number" />
// // // // // // // // // // //         </Form.Item>

// // // // // // // // // // //         <Form.Item
// // // // // // // // // // //           name="gender"
// // // // // // // // // // //           rules={[{ required: true, message: resources.USER_GENDER_VALIDATOR }]}
// // // // // // // // // // //         >
// // // // // // // // // // //           <select placeholder="Select Gender" style={{ width: "100%", padding: "8px" }}>
// // // // // // // // // // //             <option value="" disabled>Select Gender</option>
// // // // // // // // // // //             {GENDERS.map((gender) => (
// // // // // // // // // // //               <option key={gender} value={gender}>
// // // // // // // // // // //                 {gender}
// // // // // // // // // // //               </option>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </select>
// // // // // // // // // // //         </Form.Item>

// // // // // // // // // // //         <Form.Item>
// // // // // // // // // // //           <Button
// // // // // // // // // // //             type="primary"
// // // // // // // // // // //             htmlType="submit"
// // // // // // // // // // //             loading={loading}
// // // // // // // // // // //             style={{ width: "100%" }}
// // // // // // // // // // //           >
// // // // // // // // // // //             Sign Up
// // // // // // // // // // //           </Button>
// // // // // // // // // // //         </Form.Item>
// // // // // // // // // // //       </Form>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default SignupPageView;
// // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // import { Button, Form, Input, notification } from "antd";
// // // // // // // // // // import axios from "redux/auth/axios";
// // // // // // // // // // import { resources } from "resources/app_resources";

// // // // // // // // // // const GENDERS = ['Male', 'Female', 'Other']; // Define gender options

// // // // // // // // // // const SignupPageView = () => {
// // // // // // // // // //   const [form] = Form.useForm();
// // // // // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // // // // //   const onFinish = async (values) => {
// // // // // // // // // //     console.log("Received values:", values);
// // // // // // // // // //     await registerUser(values);
// // // // // // // // // //   };

// // // // // // // // // //   const onFinishFailed = (errorInfo) => {
// // // // // // // // // //     console.log("Failed:", errorInfo);
// // // // // // // // // //   };

// // // // // // // // // //   const registerUser = async (values) => {
// // // // // // // // // //     const url = `/user/register`;

// // // // // // // // // //     setLoading(true);
// // // // // // // // // //     try {
// // // // // // // // // //       const res = await axios.post(url, values);
// // // // // // // // // //       notification.success({
// // // // // // // // // //         message: "Registration Successful",
// // // // // // // // // //         description: res.data.message,
// // // // // // // // // //       });
// // // // // // // // // //       form.resetFields(); // Reset form after successful registration
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       notification.error({
// // // // // // // // // //         message: "Registration Failed",
// // // // // // // // // //         description: error.response?.data?.message || "An error occurred.",
// // // // // // // // // //       });
// // // // // // // // // //     } finally {
// // // // // // // // // //       setLoading(false);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div style={{ maxWidth: 400, margin: "0 auto" }}>
// // // // // // // // // //       <h1>Signup Page</h1>
// // // // // // // // // //       <Form
// // // // // // // // // //         form={form}
// // // // // // // // // //         name="registerForm"
// // // // // // // // // //         onFinish={onFinish}
// // // // // // // // // //         onFinishFailed={onFinishFailed}
// // // // // // // // // //         autoComplete="off"
// // // // // // // // // //       >
// // // // // // // // // //         <Form.Item
// // // // // // // // // //           name="firstName"
// // // // // // // // // //           rules={[
// // // // // // // // // //             { required: true, message: resources.FIRST_NAME_EMPTY_VALIDATOR },
// // // // // // // // // //             { pattern: /^[A-Za-z]+$/, message: "First name must contain only alphabets." },
// // // // // // // // // //           ]}
// // // // // // // // // //         >
// // // // // // // // // //           <Input placeholder="First Name" />
// // // // // // // // // //         </Form.Item>

// // // // // // // // // //         <Form.Item
// // // // // // // // // //           name="lastName"
// // // // // // // // // //           rules={[
// // // // // // // // // //             { required: true, message: resources.LAST_NAME_EMPTY_VALIDATOR },
// // // // // // // // // //             { pattern: /^[A-Za-z]+$/, message: "Last name must contain only alphabets." },
// // // // // // // // // //           ]}
// // // // // // // // // //         >
// // // // // // // // // //           <Input placeholder="Last Name" />
// // // // // // // // // //         </Form.Item>

// // // // // // // // // //         <Form.Item
// // // // // // // // // //           name="email"
// // // // // // // // // //           rules={[
// // // // // // // // // //             { required: true, message: resources.USER_EMAIL_EMPTY_VALIDATOR },
// // // // // // // // // //             { type: 'email', message: "Please enter a valid email." },
// // // // // // // // // //             { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Email must contain @ and .com" },
// // // // // // // // // //           ]}
// // // // // // // // // //         >
// // // // // // // // // //           <Input placeholder="Email" />
// // // // // // // // // //         </Form.Item>

// // // // // // // // // //         <Form.Item
// // // // // // // // // //           name="password"
// // // // // // // // // //           rules={[
// // // // // // // // // //             { required: true, message: resources.USER_PASSWORD_EMPTY_VALIDATOR },
// // // // // // // // // //             {
// // // // // // // // // //               pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
// // // // // // // // // //               message: "Password must contain at least one uppercase letter, one number, and one special character."
// // // // // // // // // //             },
// // // // // // // // // //           ]}
// // // // // // // // // //         >
// // // // // // // // // //           <Input.Password placeholder="Password" />
// // // // // // // // // //         </Form.Item>

// // // // // // // // // //         <Form.Item
// // // // // // // // // //           name="mobile"
// // // // // // // // // //           rules={[
// // // // // // // // // //             { required: true, message: resources.PH_NO_EMPTY_VALIDATOR },
// // // // // // // // // //             { len: 11, message: resources.PH_NO_VALIDATOR }, // Example: Validates mobile number length
// // // // // // // // // //           ]}
// // // // // // // // // //         >
// // // // // // // // // //           <Input placeholder="Mobile Number" />
// // // // // // // // // //         </Form.Item>

// // // // // // // // // //         <Form.Item
// // // // // // // // // //           name="gender"
// // // // // // // // // //           rules={[{ required: true, message: resources.USER_GENDER_VALIDATOR }]}
// // // // // // // // // //         >
// // // // // // // // // //           <select placeholder="Select Gender" style={{ width: "100%", padding: "8px" }}>
// // // // // // // // // //             <option value="" disabled>Select Gender</option>
// // // // // // // // // //             {GENDERS.map((gender) => (
// // // // // // // // // //               <option key={gender} value={gender}>
// // // // // // // // // //                 {gender}
// // // // // // // // // //               </option>
// // // // // // // // // //             ))}
// // // // // // // // // //           </select>
// // // // // // // // // //         </Form.Item>

// // // // // // // // // //         <Form.Item>
// // // // // // // // // //           <Button
// // // // // // // // // //             type="primary"
// // // // // // // // // //             htmlType="submit"
// // // // // // // // // //             loading={loading}
// // // // // // // // // //             style={{ width: "100%" }}
// // // // // // // // // //           >
// // // // // // // // // //             Sign Up
// // // // // // // // // //           </Button>
// // // // // // // // // //         </Form.Item>
// // // // // // // // // //       </Form>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default SignupPageView;
// // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // import { Button, Form, Input, notification } from "antd";
// // // // // // // // // // import axios from "redux/auth/axios";
// // // // // // // // // // import { resources } from "resources/app_resources";

// // // // // // // // // // const GENDERS = ['Male', 'Female', 'Other']; // Define gender options

// // // // // // // // // // const SignupPageView = () => {
// // // // // // // // // //   const [form] = Form.useForm();
// // // // // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // // // // //   const onFinish = async (values) => {
// // // // // // // // // //     console.log("Received values:", values);
// // // // // // // // // //     await registerUser(values);
// // // // // // // // // //   };

// // // // // // // // // //   const onFinishFailed = () => {
// // // // // // // // // //     // General error notification when signup fails due to validation
// // // // // // // // // //     notification.error({
// // // // // // // // // //       message: "User Not Signed Up",
// // // // // // // // // //       description: "Missing details or incorrect fields. Please fill all required fields correctly.",
// // // // // // // // // //     });
// // // // // // // // // //   };

// // // // // // // // // //   const registerUser = async (values) => {
// // // // // // // // // //     const url = `/user/register`;

// // // // // // // // // //     setLoading(true);
// // // // // // // // // //     try {
// // // // // // // // // //       const res = await axios.post(url, values);
// // // // // // // // // //       notification.success({
// // // // // // // // // //         message: "Registration Successful",
// // // // // // // // // //         description: res.data.message,
// // // // // // // // // //       });
// // // // // // // // // //       form.resetFields(); // Reset form after successful registration
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       notification.error({
// // // // // // // // // //         message: "Registration Failed",
// // // // // // // // // //         description: error.response?.data?.message || "An error occurred.",
// // // // // // // // // //       });
// // // // // // // // // //     } finally {
// // // // // // // // // //       setLoading(false);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div style={{ maxWidth: 400, margin: "0 auto" }}>
// // // // // // // // // //       <h1>Signup Page</h1>
// // // // // // // // // //       <Form
// // // // // // // // // //         form={form}
// // // // // // // // // //         name="registerForm"
// // // // // // // // // //         onFinish={onFinish}
// // // // // // // // // //         onFinishFailed={onFinishFailed}
// // // // // // // // // //         autoComplete="off"
// // // // // // // // // //       >
// // // // // // // // // //         <Form.Item
// // // // // // // // // //           name="firstName"
// // // // // // // // // //           rules={[
// // // // // // // // // //             { required: true, message: resources.FIRST_NAME_EMPTY_VALIDATOR },
// // // // // // // // // //             { pattern: /^[A-Za-z]+$/, message: "First name must contain only alphabets." },
// // // // // // // // // //           ]}
// // // // // // // // // //         >
// // // // // // // // // //           <Input placeholder="First Name" />
// // // // // // // // // //         </Form.Item>

// // // // // // // // // //         <Form.Item
// // // // // // // // // //           name="lastName"
// // // // // // // // // //           rules={[
// // // // // // // // // //             { required: true, message: resources.LAST_NAME_EMPTY_VALIDATOR },
// // // // // // // // // //             { pattern: /^[A-Za-z]+$/, message: "Last name must contain only alphabets." },
// // // // // // // // // //           ]}
// // // // // // // // // //         >
// // // // // // // // // //           <Input placeholder="Last Name" />
// // // // // // // // // //         </Form.Item>

// // // // // // // // // //         <Form.Item
// // // // // // // // // //           name="email"
// // // // // // // // // //           rules={[
// // // // // // // // // //             { required: true, message: resources.USER_EMAIL_EMPTY_VALIDATOR },
// // // // // // // // // //             { type: 'email', message: "Please enter a valid email." },
// // // // // // // // // //             { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Email must contain @ and .com" },
// // // // // // // // // //           ]}
// // // // // // // // // //         >
// // // // // // // // // //           <Input placeholder="Email" />
// // // // // // // // // //         </Form.Item>

// // // // // // // // // //         <Form.Item
// // // // // // // // // //           name="password"
// // // // // // // // // //           rules={[
// // // // // // // // // //             { required: true, message: resources.USER_PASSWORD_EMPTY_VALIDATOR },
// // // // // // // // // //             {
// // // // // // // // // //               pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
// // // // // // // // // //               message: "Password must contain at least one uppercase letter, one number, and one special character."
// // // // // // // // // //             },
// // // // // // // // // //           ]}
// // // // // // // // // //         >
// // // // // // // // // //           <Input.Password placeholder="Password" />
// // // // // // // // // //         </Form.Item>

// // // // // // // // // //         <Form.Item
// // // // // // // // // //           name="mobile"
// // // // // // // // // //           rules={[
// // // // // // // // // //             { required: true, message: resources.PH_NO_EMPTY_VALIDATOR },
// // // // // // // // // //             { len: 11, message: resources.PH_NO_VALIDATOR }, // Example: Validates mobile number length
// // // // // // // // // //           ]}
// // // // // // // // // //         >
// // // // // // // // // //           <Input placeholder="Mobile Number" />
// // // // // // // // // //         </Form.Item>

// // // // // // // // // //         <Form.Item
// // // // // // // // // //           name="gender"
// // // // // // // // // //           rules={[{ required: true, message: resources.USER_GENDER_VALIDATOR }]}
// // // // // // // // // //         >
// // // // // // // // // //           <select placeholder="Select Gender" style={{ width: "100%", padding: "8px" }}>
// // // // // // // // // //             <option value="" disabled>Select Gender</option>
// // // // // // // // // //             {GENDERS.map((gender) => (
// // // // // // // // // //               <option key={gender} value={gender}>
// // // // // // // // // //                 {gender}
// // // // // // // // // //               </option>
// // // // // // // // // //             ))}
// // // // // // // // // //           </select>
// // // // // // // // // //         </Form.Item>

// // // // // // // // // //         <Form.Item>
// // // // // // // // // //           <Button
// // // // // // // // // //             type="primary"
// // // // // // // // // //             htmlType="submit"
// // // // // // // // // //             loading={loading}
// // // // // // // // // //             style={{ width: "100%" }}
// // // // // // // // // //           >
// // // // // // // // // //             Sign Up
// // // // // // // // // //           </Button>
// // // // // // // // // //         </Form.Item>
// // // // // // // // // //       </Form>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default SignupPageView;

// // // // // // // // // import React, { useState } from "react";
// // // // // // // // // import { Button, Form, Input, notification } from "antd";
// // // // // // // // // import axios from "redux/auth/axios";
// // // // // // // // // import { resources } from "resources/app_resources";
// // // // // // // // // import { useNavigate } from "react-router-dom"; // Import useNavigate

// // // // // // // // // const GENDERS = ['Male', 'Female', 'Other']; // Define gender options

// // // // // // // // // const SignupPageView = () => {
// // // // // // // // //   const [form] = Form.useForm();
// // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // //   const navigate = useNavigate(); // Initialize navigate

// // // // // // // // //   const onFinish = async (values) => {
// // // // // // // // //     console.log("Received values:", values);
// // // // // // // // //     await registerUser(values);
// // // // // // // // //   };

// // // // // // // // //   const onFinishFailed = () => {
// // // // // // // // //     // General error notification when signup fails due to validation
// // // // // // // // //     notification.error({
// // // // // // // // //       message: "User Not Signed Up",
// // // // // // // // //       description: "Missing details or incorrect fields. Please fill all required fields correctly.",
// // // // // // // // //     });
// // // // // // // // //   };

// // // // // // // // //   const registerUser = async (values) => {
// // // // // // // // //     const url = `/user/register`;

// // // // // // // // //     setLoading(true);
// // // // // // // // //     try {
// // // // // // // // //       const res = await axios.post(url, values);
// // // // // // // // //       notification.success({
// // // // // // // // //         message: "Registration Successful",
// // // // // // // // //         description: res.data.message,
// // // // // // // // //       });
// // // // // // // // //       form.resetFields(); // Reset form after successful registration

// // // // // // // // //       // Navigate to the login page on successful signup
// // // // // // // // //       navigate("/auth/login"); // Redirect to the login page
// // // // // // // // //     } catch (error) {
// // // // // // // // //       notification.error({
// // // // // // // // //         message: "Registration Failed",
// // // // // // // // //         description: error.response?.data?.message || "An error occurred.",
// // // // // // // // //       });
// // // // // // // // //     } finally {
// // // // // // // // //       setLoading(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div style={{ maxWidth: 400, margin: "0 auto" }}>
// // // // // // // // //       <h1>Signup Page</h1>
// // // // // // // // //       <Form
// // // // // // // // //         form={form}
// // // // // // // // //         name="registerForm"
// // // // // // // // //         onFinish={onFinish}
// // // // // // // // //         onFinishFailed={onFinishFailed}
// // // // // // // // //         autoComplete="off"
// // // // // // // // //       >
// // // // // // // // //         <Form.Item
// // // // // // // // //           name="firstName"
// // // // // // // // //           rules={[
// // // // // // // // //             { required: true, message: resources.FIRST_NAME_EMPTY_VALIDATOR },
// // // // // // // // //             { pattern: /^[A-Za-z]+$/, message: "First name must contain only alphabets." },
// // // // // // // // //           ]}
// // // // // // // // //         >
// // // // // // // // //           <Input placeholder="First Name" />
// // // // // // // // //         </Form.Item>

// // // // // // // // //         <Form.Item
// // // // // // // // //           name="lastName"
// // // // // // // // //           rules={[
// // // // // // // // //             { required: true, message: resources.LAST_NAME_EMPTY_VALIDATOR },
// // // // // // // // //             { pattern: /^[A-Za-z]+$/, message: "Last name must contain only alphabets." },
// // // // // // // // //           ]}
// // // // // // // // //         >
// // // // // // // // //           <Input placeholder="Last Name" />
// // // // // // // // //         </Form.Item>

// // // // // // // // //         <Form.Item
// // // // // // // // //           name="email"
// // // // // // // // //           rules={[
// // // // // // // // //             { required: true, message: resources.USER_EMAIL_EMPTY_VALIDATOR },
// // // // // // // // //             { type: 'email', message: "Please enter a valid email." },
// // // // // // // // //             { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Email must contain @ and .com" },
// // // // // // // // //           ]}
// // // // // // // // //         >
// // // // // // // // //           <Input placeholder="Email" />
// // // // // // // // //         </Form.Item>

// // // // // // // // //         <Form.Item
// // // // // // // // //           name="password"
// // // // // // // // //           rules={[
// // // // // // // // //             { required: true, message: resources.USER_PASSWORD_EMPTY_VALIDATOR },
// // // // // // // // //             {
// // // // // // // // //               pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
// // // // // // // // //               message: "Password must contain at least one uppercase letter, one number, and one special character."
// // // // // // // // //             },
// // // // // // // // //           ]}
// // // // // // // // //         >
// // // // // // // // //           <Input.Password placeholder="Password" />
// // // // // // // // //         </Form.Item>

// // // // // // // // //         <Form.Item
// // // // // // // // //           name="mobile"
// // // // // // // // //           rules={[
// // // // // // // // //             { required: true, message: resources.PH_NO_EMPTY_VALIDATOR },
// // // // // // // // //             { len: 11, message: resources.PH_NO_VALIDATOR }, // Example: Validates mobile number length
// // // // // // // // //           ]}
// // // // // // // // //         >
// // // // // // // // //           <Input placeholder="Mobile Number" />
// // // // // // // // //         </Form.Item>

// // // // // // // // //         <Form.Item
// // // // // // // // //           name="gender"
// // // // // // // // //           rules={[{ required: true, message: resources.USER_GENDER_VALIDATOR }]}
// // // // // // // // //         >
// // // // // // // // //           <select placeholder="Select Gender" style={{ width: "100%", padding: "8px" }}>
// // // // // // // // //             <option value="" disabled>Select Gender</option>
// // // // // // // // //             {GENDERS.map((gender) => (
// // // // // // // // //               <option key={gender} value={gender}>
// // // // // // // // //                 {gender}
// // // // // // // // //               </option>
// // // // // // // // //             ))}
// // // // // // // // //           </select>
// // // // // // // // //         </Form.Item>

// // // // // // // // //         <Form.Item>
// // // // // // // // //           <Button
// // // // // // // // //             type="primary"
// // // // // // // // //             htmlType="submit"
// // // // // // // // //             loading={loading}
// // // // // // // // //             style={{ width: "100%" }}
// // // // // // // // //           >
// // // // // // // // //             Sign Up
// // // // // // // // //           </Button>
// // // // // // // // //         </Form.Item>
// // // // // // // // //       </Form>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default SignupPageView;
// // // // // // // // import React, { useState } from "react";
// // // // // // // // import { Button, Form, Input, notification } from "antd";
// // // // // // // // import axios from "redux/auth/axios";
// // // // // // // // import { resources } from "resources/app_resources";

// // // // // // // // const GENDERS = ['Male', 'Female', 'Other']; // Define gender options

// // // // // // // // const SignupPageView = () => {
// // // // // // // //   const [form] = Form.useForm();
// // // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // // //   const onFinish = async (values) => {
// // // // // // // //     console.log("Received values:", values);
// // // // // // // //     await registerUser(values);
// // // // // // // //   };

// // // // // // // //   const onFinishFailed = () => {
// // // // // // // //     // General error notification when signup fails due to validation
// // // // // // // //     notification.error({
// // // // // // // //       message: "User Not Signed Up",
// // // // // // // //       description: "Missing details or incorrect fields. Please fill all required fields correctly.",
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   const registerUser = async (values) => {
// // // // // // // //     const url = `/user/register`;

// // // // // // // //     setLoading(true);
// // // // // // // //     try {
// // // // // // // //       const res = await axios.post(url, values);
// // // // // // // //       notification.success({
// // // // // // // //         message: "Registration Successful",
// // // // // // // //         description: res.data.message,
// // // // // // // //       });
// // // // // // // //       form.resetFields(); // Reset form after successful registration
// // // // // // // //       // Navigate to login page (add your navigation logic here)
// // // // // // // //       // navigate("/auth/login"); // Uncomment this line if using react-router
// // // // // // // //     } catch (error) {
// // // // // // // //       notification.error({
// // // // // // // //         message: "Registration Failed",
// // // // // // // //         description: error.response?.data?.message || "An error occurred.",
// // // // // // // //       });
// // // // // // // //     } finally {
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div
// // // // // // // //       style={{
// // // // // // // //         maxWidth: 400,
// // // // // // // //         margin: "0 auto",
// // // // // // // //         backgroundColor: "#f5f5dc", // Beige background color
// // // // // // // //         padding: "20px",
// // // // // // // //         borderRadius: "8px",
// // // // // // // //         boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
// // // // // // // //       }}
// // // // // // // //     >
// // // // // // // //       <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Signup Page</h1>
// // // // // // // //       <Form
// // // // // // // //         form={form}
// // // // // // // //         name="registerForm"
// // // // // // // //         onFinish={onFinish}
// // // // // // // //         onFinishFailed={onFinishFailed}
// // // // // // // //         autoComplete="off"
// // // // // // // //       >
// // // // // // // //         <Form.Item
// // // // // // // //           name="firstName"
// // // // // // // //           rules={[
// // // // // // // //             { required: true, message: resources.FIRST_NAME_EMPTY_VALIDATOR },
// // // // // // // //             { pattern: /^[A-Za-z]+$/, message: "First name must contain only alphabets." },
// // // // // // // //           ]}
// // // // // // // //         >
// // // // // // // //           <Input placeholder="First Name" />
// // // // // // // //         </Form.Item>

// // // // // // // //         <Form.Item
// // // // // // // //           name="lastName"
// // // // // // // //           rules={[
// // // // // // // //             { required: true, message: resources.LAST_NAME_EMPTY_VALIDATOR },
// // // // // // // //             { pattern: /^[A-Za-z]+$/, message: "Last name must contain only alphabets." },
// // // // // // // //           ]}
// // // // // // // //         >
// // // // // // // //           <Input placeholder="Last Name" />
// // // // // // // //         </Form.Item>

// // // // // // // //         <Form.Item
// // // // // // // //           name="email"
// // // // // // // //           rules={[
// // // // // // // //             { required: true, message: resources.USER_EMAIL_EMPTY_VALIDATOR },
// // // // // // // //             { type: 'email', message: "Please enter a valid email." },
// // // // // // // //             { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Email must contain @ and .com" },
// // // // // // // //           ]}
// // // // // // // //         >
// // // // // // // //           <Input placeholder="Email" />
// // // // // // // //         </Form.Item>

// // // // // // // //         <Form.Item
// // // // // // // //           name="password"
// // // // // // // //           rules={[
// // // // // // // //             { required: true, message: resources.USER_PASSWORD_EMPTY_VALIDATOR },
// // // // // // // //             {
// // // // // // // //               pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
// // // // // // // //               message: "Password must contain at least one uppercase letter, one number, and one special character."
// // // // // // // //             },
// // // // // // // //           ]}
// // // // // // // //         >
// // // // // // // //           <Input.Password placeholder="Password" />
// // // // // // // //         </Form.Item>

// // // // // // // //         <Form.Item
// // // // // // // //           name="mobile"
// // // // // // // //           rules={[
// // // // // // // //             { required: true, message: resources.PH_NO_EMPTY_VALIDATOR },
// // // // // // // //             { len: 11, message: resources.PH_NO_VALIDATOR }, // Example: Validates mobile number length
// // // // // // // //           ]}
// // // // // // // //         >
// // // // // // // //           <Input placeholder="Mobile Number" />
// // // // // // // //         </Form.Item>

// // // // // // // //         <Form.Item
// // // // // // // //           name="gender"
// // // // // // // //           rules={[{ required: true, message: resources.USER_GENDER_VALIDATOR }]}
// // // // // // // //         >
// // // // // // // //           <select placeholder="Select Gender" style={{ width: "100%", padding: "8px" }}>
// // // // // // // //             <option value="" disabled>Select Gender</option>
// // // // // // // //             {GENDERS.map((gender) => (
// // // // // // // //               <option key={gender} value={gender}>
// // // // // // // //                 {gender}
// // // // // // // //               </option>
// // // // // // // //             ))}
// // // // // // // //           </select>
// // // // // // // //         </Form.Item>

// // // // // // // //         <Form.Item>
// // // // // // // //           <Button
// // // // // // // //             type="primary"
// // // // // // // //             htmlType="submit"
// // // // // // // //             loading={loading}
// // // // // // // //             style={{ width: "100%" }}
// // // // // // // //           >
// // // // // // // //             Sign Up
// // // // // // // //           </Button>
// // // // // // // //         </Form.Item>
// // // // // // // //       </Form>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default SignupPageView;
// // // // // // // import React, { useState } from "react";
// // // // // // // import { Button, Form, Input, notification } from "antd";
// // // // // // // import axios from "redux/auth/axios";
// // // // // // // import { resources } from "resources/app_resources";

// // // // // // // const GENDERS = ['Male', 'Female', 'Other']; // Define gender options

// // // // // // // const SignupPageView = () => {
// // // // // // //   const [form] = Form.useForm();
// // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // //   const onFinish = async (values) => {
// // // // // // //     console.log("Received values:", values);
// // // // // // //     await registerUser(values);
// // // // // // //   };

// // // // // // //   const onFinishFailed = () => {
// // // // // // //     // General error notification when signup fails due to validation
// // // // // // //     notification.error({
// // // // // // //       message: "User Not Signed Up",
// // // // // // //       description: "Missing details or incorrect fields. Please fill all required fields correctly.",
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const registerUser = async (values) => {
// // // // // // //     const url = `/user/register`;

// // // // // // //     setLoading(true);
// // // // // // //     try {
// // // // // // //       const res = await axios.post(url, values);
// // // // // // //       notification.success({
// // // // // // //         message: "Registration Successful",
// // // // // // //         description: res.data.message,
// // // // // // //       });
// // // // // // //       form.resetFields(); // Reset form after successful registration
// // // // // // //       // Navigate to login page (add your navigation logic here)
// // // // // // //       // navigate("/auth/login"); // Uncomment this line if using react-router
// // // // // // //     } catch (error) {
// // // // // // //       notification.error({
// // // // // // //         message: "Registration Failed",
// // // // // // //         description: error.response?.data?.message || "An error occurred.",
// // // // // // //       });
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div
// // // // // // //       style={{
// // // // // // //         backgroundColor: "#f5f5dc", // Beige background color for the page
// // // // // // //         minHeight: "100vh",
// // // // // // //         display: "flex",
// // // // // // //         justifyContent: "center",
// // // // // // //         alignItems: "center",
// // // // // // //       }}
// // // // // // //     >
// // // // // // //       <div
// // // // // // //         style={{
// // // // // // //           maxWidth: 400,
// // // // // // //           width: "100%",
// // // // // // //           backgroundColor: "#ffffff", // White background color for the container
// // // // // // //           padding: "20px",
// // // // // // //           borderRadius: "8px",
// // // // // // //           boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
// // // // // // //         }}
// // // // // // //       >
// // // // // // //         <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Signup Page</h1>
// // // // // // //         <Form
// // // // // // //           form={form}
// // // // // // //           name="registerForm"
// // // // // // //           onFinish={onFinish}
// // // // // // //           onFinishFailed={onFinishFailed}
// // // // // // //           autoComplete="off"
// // // // // // //         >
// // // // // // //           <Form.Item
// // // // // // //             name="firstName"
// // // // // // //             rules={[
// // // // // // //               { required: true, message: resources.FIRST_NAME_EMPTY_VALIDATOR },
// // // // // // //               { pattern: /^[A-Za-z]+$/, message: "First name must contain only alphabets." },
// // // // // // //             ]}
// // // // // // //           >
// // // // // // //             <Input placeholder="First Name" />
// // // // // // //           </Form.Item>

// // // // // // //           <Form.Item
// // // // // // //             name="lastName"
// // // // // // //             rules={[
// // // // // // //               { required: true, message: resources.LAST_NAME_EMPTY_VALIDATOR },
// // // // // // //               { pattern: /^[A-Za-z]+$/, message: "Last name must contain only alphabets." },
// // // // // // //             ]}
// // // // // // //           >
// // // // // // //             <Input placeholder="Last Name" />
// // // // // // //           </Form.Item>

// // // // // // //           <Form.Item
// // // // // // //             name="email"
// // // // // // //             rules={[
// // // // // // //               { required: true, message: resources.USER_EMAIL_EMPTY_VALIDATOR },
// // // // // // //               { type: 'email', message: "Please enter a valid email." },
// // // // // // //               { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Email must contain @ and .com" },
// // // // // // //             ]}
// // // // // // //           >
// // // // // // //             <Input placeholder="Email" />
// // // // // // //           </Form.Item>

// // // // // // //           <Form.Item
// // // // // // //             name="password"
// // // // // // //             rules={[
// // // // // // //               { required: true, message: resources.USER_PASSWORD_EMPTY_VALIDATOR },
// // // // // // //               {
// // // // // // //                 pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
// // // // // // //                 message: "Password must contain at least one uppercase letter, one number, and one special character."
// // // // // // //               },
// // // // // // //             ]}
// // // // // // //           >
// // // // // // //             <Input.Password placeholder="Password" />
// // // // // // //           </Form.Item>

// // // // // // //           <Form.Item
// // // // // // //             name="mobile"
// // // // // // //             rules={[
// // // // // // //               { required: true, message: resources.PH_NO_EMPTY_VALIDATOR },
// // // // // // //               { len: 11, message: resources.PH_NO_VALIDATOR }, // Example: Validates mobile number length
// // // // // // //             ]}
// // // // // // //           >
// // // // // // //             <Input placeholder="Mobile Number" />
// // // // // // //           </Form.Item>

// // // // // // //           <Form.Item
// // // // // // //             name="gender"
// // // // // // //             rules={[{ required: true, message: resources.USER_GENDER_VALIDATOR }]}
// // // // // // //           >
// // // // // // //             <select placeholder="Select Gender" style={{ width: "100%", padding: "8px" }}>
// // // // // // //               <option value="" disabled>Select Gender</option>
// // // // // // //               {GENDERS.map((gender) => (
// // // // // // //                 <option key={gender} value={gender}>
// // // // // // //                   {gender}
// // // // // // //                 </option>
// // // // // // //               ))}
// // // // // // //             </select>
// // // // // // //           </Form.Item>

// // // // // // //           <Form.Item>
// // // // // // //             <Button
// // // // // // //               type="primary"
// // // // // // //               htmlType="submit"
// // // // // // //               loading={loading}
// // // // // // //               style={{ width: "100%" }}
// // // // // // //             >
// // // // // // //               Sign Up
// // // // // // //             </Button>
// // // // // // //           </Form.Item>
// // // // // // //         </Form>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default SignupPageView;
// // // // // // import React, { useState } from "react";
// // // // // // import { Button, Form, Input, notification } from "antd";
// // // // // // import axios from "redux/auth/axios";
// // // // // // import { resources } from "resources/app_resources";

// // // // // // const GENDERS = ['Male', 'Female', 'Other']; // Define gender options

// // // // // // const SignupPageView = () => {
// // // // // //   const [form] = Form.useForm();
// // // // // //   const [loading, setLoading] = useState(false);

// // // // // //   const onFinish = async (values) => {
// // // // // //     console.log("Received values:", values);
// // // // // //     await registerUser(values);
// // // // // //   };

// // // // // //   const onFinishFailed = () => {
// // // // // //     // General error notification when signup fails due to validation
// // // // // //     notification.error({
// // // // // //       message: "User Not Signed Up",
// // // // // //       description: "Missing details or incorrect fields. Please fill all required fields correctly.",
// // // // // //     });
// // // // // //   };

// // // // // //   const registerUser = async (values) => {
// // // // // //     const url = `/user/register`;

// // // // // //     setLoading(true);
// // // // // //     try {
// // // // // //       const res = await axios.post(url, values);
// // // // // //       notification.success({
// // // // // //         message: "Registration Successful",
// // // // // //         description: res.data.message,
// // // // // //       });
// // // // // //       form.resetFields(); // Reset form after successful registration
// // // // // //       // Navigate to login page (add your navigation logic here)
// // // // // //       // navigate("/auth/login"); // Uncomment this line if using react-router
// // // // // //     } catch (error) {
// // // // // //       notification.error({
// // // // // //         message: "Registration Failed",
// // // // // //         description: error.response?.data?.message || "An error occurred.",
// // // // // //       });
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div
// // // // // //       style={{
// // // // // //         backgroundColor: "#f5f5dc", // Beige background color for the page
// // // // // //         minHeight: "100vh",
// // // // // //         display: "flex",
// // // // // //         justifyContent: "center",
// // // // // //         alignItems: "center",
// // // // // //       }}
// // // // // //     >
// // // // // //       <div
// // // // // //         style={{
// // // // // //           maxWidth: 400,
// // // // // //           width: "100%",
// // // // // //           backgroundColor: "#ffffff", // White background color for the container
// // // // // //           padding: "20px",
// // // // // //           borderRadius: "8px",
// // // // // //           boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
// // // // // //         }}
// // // // // //       >
// // // // // //         <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Signup Page</h1>
// // // // // //         <Form
// // // // // //           form={form}
// // // // // //           name="registerForm"
// // // // // //           onFinish={onFinish}
// // // // // //           onFinishFailed={onFinishFailed}
// // // // // //           autoComplete="off"
// // // // // //         >
// // // // // //           <Form.Item
// // // // // //             name="firstName"
// // // // // //             label="First Name"
// // // // // //             rules={[
// // // // // //               { required: true, message: resources.FIRST_NAME_EMPTY_VALIDATOR },
// // // // // //               { pattern: /^[A-Za-z]+$/, message: "First name must contain only alphabets." },
// // // // // //             ]}
// // // // // //           >
// // // // // //             <Input placeholder="Enter your first name" />
// // // // // //           </Form.Item>

// // // // // //           <Form.Item
// // // // // //             name="lastName"
// // // // // //             label="Last Name"
// // // // // //             rules={[
// // // // // //               { required: true, message: resources.LAST_NAME_EMPTY_VALIDATOR },
// // // // // //               { pattern: /^[A-Za-z]+$/, message: "Last name must contain only alphabets." },
// // // // // //             ]}
// // // // // //           >
// // // // // //             <Input placeholder="Enter your last name" />
// // // // // //           </Form.Item>

// // // // // //           <Form.Item
// // // // // //             name="email"
// // // // // //             label="Email"
// // // // // //             rules={[
// // // // // //               { required: true, message: resources.USER_EMAIL_EMPTY_VALIDATOR },
// // // // // //               { type: 'email', message: "Please enter a valid email." },
// // // // // //               { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Email must contain @ and .com" },
// // // // // //             ]}
// // // // // //           >
// // // // // //             <Input placeholder="Enter your email" />
// // // // // //           </Form.Item>

// // // // // //           <Form.Item
// // // // // //             name="password"
// // // // // //             label="Password"
// // // // // //             rules={[
// // // // // //               { required: true, message: resources.USER_PASSWORD_EMPTY_VALIDATOR },
// // // // // //               {
// // // // // //                 pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
// // // // // //                 message: "Password must contain at least one uppercase letter, one number, and one special character."
// // // // // //               },
// // // // // //             ]}
// // // // // //           >
// // // // // //             <Input.Password placeholder="Enter your password" />
// // // // // //           </Form.Item>

// // // // // //           <Form.Item
// // // // // //             name="mobile"
// // // // // //             label="Mobile Number"
// // // // // //             rules={[
// // // // // //               { required: true, message: resources.PH_NO_EMPTY_VALIDATOR },
// // // // // //               { len: 11, message: resources.PH_NO_VALIDATOR }, // Example: Validates mobile number length
// // // // // //             ]}
// // // // // //           >
// // // // // //             <Input placeholder="Enter your mobile number" />
// // // // // //           </Form.Item>

// // // // // //           <Form.Item
// // // // // //             name="gender"
// // // // // //             label="Gender"
// // // // // //             rules={[{ required: true, message: resources.USER_GENDER_VALIDATOR }]}
// // // // // //           >
// // // // // //             <select placeholder="Select Gender" style={{ width: "100%", padding: "8px" }}>
// // // // // //               <option value="" disabled>Select Gender</option>
// // // // // //               {GENDERS.map((gender) => (
// // // // // //                 <option key={gender} value={gender}>
// // // // // //                   {gender}
// // // // // //                 </option>
// // // // // //               ))}
// // // // // //             </select>
// // // // // //           </Form.Item>

// // // // // //           <Form.Item>
// // // // // //             <Button
// // // // // //               type="primary"
// // // // // //               htmlType="submit"
// // // // // //               loading={loading}
// // // // // //               style={{ width: "100%" }}
// // // // // //             >
// // // // // //               Sign Up
// // // // // //             </Button>
// // // // // //           </Form.Item>
// // // // // //         </Form>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default SignupPageView;
// // // // // import React, { useState } from "react";
// // // // // import { Button, Form, Input, notification } from "antd";
// // // // // import axios from "redux/auth/axios";
// // // // // import { resources } from "resources/app_resources";

// // // // // const GENDERS = ['Male', 'Female', 'Other']; // Define gender options

// // // // // const SignupPageView = () => {
// // // // //   const [form] = Form.useForm();
// // // // //   const [loading, setLoading] = useState(false);

// // // // //   const onFinish = async (values) => {
// // // // //     console.log("Received values:", values);
// // // // //     await registerUser(values);
// // // // //   };

// // // // //   const onFinishFailed = () => {
// // // // //     // General error notification when signup fails due to validation
// // // // //     notification.error({
// // // // //       message: "User Not Signed Up",
// // // // //       description: "Missing details or incorrect fields. Please fill all required fields correctly.",
// // // // //     });
// // // // //   };

// // // // //   const registerUser = async (values) => {
// // // // //     const url = `/user/register`;

// // // // //     setLoading(true);
// // // // //     try {
// // // // //       const res = await axios.post(url, values);
// // // // //       notification.success({
// // // // //         message: "Registration Successful",
// // // // //         description: res.data.message,
// // // // //       });
// // // // //       form.resetFields(); // Reset form after successful registration
// // // // //       // Navigate to login page (add your navigation logic here)
// // // // //       // navigate("/auth/login"); // Uncomment this line if using react-router
// // // // //     } catch (error) {
// // // // //       notification.error({
// // // // //         message: "Registration Failed",
// // // // //         description: error.response?.data?.message || "An error occurred.",
// // // // //       });
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div
// // // // //       style={{
// // // // //         backgroundColor: "#f5f5dc", // Beige background color for the page
// // // // //         minHeight: "100vh",
// // // // //         display: "flex",
// // // // //         justifyContent: "center",
// // // // //         alignItems: "center",
// // // // //       }}
// // // // //     >
// // // // //       <div
// // // // //         style={{
// // // // //           maxWidth: 400,
// // // // //           width: "100%",
// // // // //           backgroundColor: "#ffffff", // White background color for the container
// // // // //           padding: "20px",
// // // // //           borderRadius: "8px",
// // // // //           boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
// // // // //         }}
// // // // //       >
// // // // //         <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#2c3e50" }}>Signup Page</h1>
// // // // //         <Form
// // // // //           form={form}
// // // // //           name="registerForm"
// // // // //           onFinish={onFinish}
// // // // //           onFinishFailed={onFinishFailed}
// // // // //           autoComplete="off"
// // // // //         >
// // // // //           <Form.Item
// // // // //             name="firstName"
// // // // //             label={<span style={{ color: "#2c3e50" }}>First Name</span>}
// // // // //             rules={[
// // // // //               { required: true, message: resources.FIRST_NAME_EMPTY_VALIDATOR },
// // // // //               { pattern: /^[A-Za-z]+$/, message: "First name must contain only alphabets." },
// // // // //             ]}
// // // // //           >
// // // // //             <Input placeholder="Enter your first name" />
// // // // //           </Form.Item>

// // // // //           <Form.Item
// // // // //             name="lastName"
// // // // //             label={<span style={{ color: "#2c3e50" }}>Last Name</span>}
// // // // //             rules={[
// // // // //               { required: true, message: resources.LAST_NAME_EMPTY_VALIDATOR },
// // // // //               { pattern: /^[A-Za-z]+$/, message: "Last name must contain only alphabets." },
// // // // //             ]}
// // // // //           >
// // // // //             <Input placeholder="Enter your last name" />
// // // // //           </Form.Item>

// // // // //           <Form.Item
// // // // //             name="email"
// // // // //             label={<span style={{ color: "#2c3e50" }}>Email</span>}
// // // // //             rules={[
// // // // //               { required: true, message: resources.USER_EMAIL_EMPTY_VALIDATOR },
// // // // //               { type: 'email', message: "Please enter a valid email." },
// // // // //               { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Email must contain @ and .com" },
// // // // //             ]}
// // // // //           >
// // // // //             <Input placeholder="Enter your email" />
// // // // //           </Form.Item>

// // // // //           <Form.Item
// // // // //             name="password"
// // // // //             label={<span style={{ color: "#2c3e50" }}>Password</span>}
// // // // //             rules={[
// // // // //               { required: true, message: resources.USER_PASSWORD_EMPTY_VALIDATOR },
// // // // //               {
// // // // //                 pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
// // // // //                 message: "Password must contain at least one uppercase letter, one number, and one special character."
// // // // //               },
// // // // //             ]}
// // // // //           >
// // // // //             <Input.Password placeholder="Enter your password" />
// // // // //           </Form.Item>

// // // // //           <Form.Item
// // // // //             name="mobile"
// // // // //             label={<span style={{ color: "#2c3e50" }}>Mobile Number</span>}
// // // // //             rules={[
// // // // //               { required: true, message: resources.PH_NO_EMPTY_VALIDATOR },
// // // // //               { len: 11, message: resources.PH_NO_VALIDATOR }, // Example: Validates mobile number length
// // // // //             ]}
// // // // //           >
// // // // //             <Input placeholder="Enter your mobile number" />
// // // // //           </Form.Item>

// // // // //           <Form.Item
// // // // //             name="gender"
// // // // //             label={<span style={{ color: "#2c3e50" }}>Gender</span>}
// // // // //             rules={[{ required: true, message: resources.USER_GENDER_VALIDATOR }]}
// // // // //           >
// // // // //             <select placeholder="Select Gender" style={{ width: "100%", padding: "8px" }}>
// // // // //               <option value="" disabled>Select Gender</option>
// // // // //               {GENDERS.map((gender) => (
// // // // //                 <option key={gender} value={gender}>
// // // // //                   {gender}
// // // // //                 </option>
// // // // //               ))}
// // // // //             </select>
// // // // //           </Form.Item>

// // // // //           <Form.Item>
// // // // //             <Button
// // // // //               type="primary"
// // // // //               htmlType="submit"
// // // // //               loading={loading}
// // // // //               style={{
// // // // //                 width: "100%",
// // // // //                 backgroundColor: "#2c3e50", // Dark color for the button
// // // // //                 borderColor: "#2c3e50",
// // // // //               }}
// // // // //             >
// // // // //               Sign Up
// // // // //             </Button>
// // // // //           </Form.Item>
// // // // //         </Form>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SignupPageView;
// // // // import React, { useState } from "react";
// // // // import { Button, Form, Input, notification } from "antd";
// // // // import axios from "redux/auth/axios";
// // // // import { resources } from "resources/app_resources";

// // // // const GENDERS = ['Male', 'Female', 'Other']; // Define gender options

// // // // const SignupPageView = () => {
// // // //   const [form] = Form.useForm();
// // // //   const [loading, setLoading] = useState(false);

// // // //   const onFinish = async (values) => {
// // // //     console.log("Received values:", values);
// // // //     await registerUser(values);
// // // //   };

// // // //   const onFinishFailed = () => {
// // // //     // General error notification when signup fails due to validation
// // // //     notification.error({
// // // //       message: "User Not Signed Up",
// // // //       description: "Missing details or incorrect fields. Please fill all required fields correctly.",
// // // //     });
// // // //   };

// // // //   const registerUser = async (values) => {
// // // //     const url = `/user/register`;

// // // //     setLoading(true);
// // // //     try {
// // // //       const res = await axios.post(url, values);
// // // //       notification.success({
// // // //         message: "Registration Successful",
// // // //         description: res.data.message,
// // // //       });
// // // //       form.resetFields(); // Reset form after successful registration
// // // //       // Navigate to login page (add your navigation logic here)
// // // //       // navigate("/auth/login"); // Uncomment this line if using react-router
// // // //     } catch (error) {
// // // //       notification.error({
// // // //         message: "Registration Failed",
// // // //         description: error.response?.data?.message || "An error occurred.",
// // // //       });
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div
// // // //       style={{
// // // //         backgroundColor: "#f5f5dc", // Beige background color for the page
// // // //         minHeight: "100vh",
// // // //         display: "flex",
// // // //         justifyContent: "center",
// // // //         alignItems: "center",
// // // //         fontFamily: "'Roboto', sans-serif", // Set the font to Roboto
// // // //       }}
// // // //     >
// // // //       <div
// // // //         style={{
// // // //           maxWidth: 400,
// // // //           width: "100%",
// // // //           backgroundColor: "#ffffff", // White background color for the container
// // // //           padding: "20px",
// // // //           borderRadius: "8px",
// // // //           boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
// // // //         }}
// // // //       >
// // // //         <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#2c3e50", fontFamily: "'Lato', sans-serif" }}>Signup Page</h1>
// // // //         <Form
// // // //           form={form}
// // // //           name="registerForm"
// // // //           onFinish={onFinish}
// // // //           onFinishFailed={onFinishFailed}
// // // //           autoComplete="off"
// // // //         >
// // // //           <Form.Item
// // // //             name="firstName"
// // // //             label={<span style={{ color: "#2c3e50" }}>First Name</span>}
// // // //             rules={[
// // // //               { required: true, message: resources.FIRST_NAME_EMPTY_VALIDATOR },
// // // //               { pattern: /^[A-Za-z]+$/, message: "First name must contain only alphabets." },
// // // //             ]}
// // // //           >
// // // //             <Input placeholder="Enter your first name" />
// // // //           </Form.Item>

// // // //           <Form.Item
// // // //             name="lastName"
// // // //             label={<span style={{ color: "#2c3e50" }}>Last Name</span>}
// // // //             rules={[
// // // //               { required: true, message: resources.LAST_NAME_EMPTY_VALIDATOR },
// // // //               { pattern: /^[A-Za-z]+$/, message: "Last name must contain only alphabets." },
// // // //             ]}
// // // //           >
// // // //             <Input placeholder="Enter your last name" />
// // // //           </Form.Item>

// // // //           <Form.Item
// // // //             name="email"
// // // //             label={<span style={{ color: "#2c3e50" }}>Email</span>}
// // // //             rules={[
// // // //               { required: true, message: resources.USER_EMAIL_EMPTY_VALIDATOR },
// // // //               { type: 'email', message: "Please enter a valid email." },
// // // //               { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Email must contain @ and .com" },
// // // //             ]}
// // // //           >
// // // //             <Input placeholder="Enter your email" />
// // // //           </Form.Item>

// // // //           <Form.Item
// // // //             name="password"
// // // //             label={<span style={{ color: "#2c3e50" }}>Password</span>}
// // // //             rules={[
// // // //               { required: true, message: resources.USER_PASSWORD_EMPTY_VALIDATOR },
// // // //               {
// // // //                 pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
// // // //                 message: "Password must contain at least one uppercase letter, one number, and one special character."
// // // //               },
// // // //             ]}
// // // //           >
// // // //             <Input.Password placeholder="Enter your password" />
// // // //           </Form.Item>

// // // //           <Form.Item
// // // //             name="mobile"
// // // //             label={<span style={{ color: "#2c3e50" }}>Mobile Number</span>}
// // // //             rules={[
// // // //               { required: true, message: resources.PH_NO_EMPTY_VALIDATOR },
// // // //               { len: 11, message: resources.PH_NO_VALIDATOR }, // Example: Validates mobile number length
// // // //             ]}
// // // //           >
// // // //             <Input placeholder="Enter your mobile number" />
// // // //           </Form.Item>

// // // //           <Form.Item
// // // //             name="gender"
// // // //             label={<span style={{ color: "#2c3e50" }}>Gender</span>}
// // // //             rules={[{ required: true, message: resources.USER_GENDER_VALIDATOR }]}
// // // //           >
// // // //             <select placeholder="Select Gender" style={{ width: "100%", padding: "8px" }}>
// // // //               <option value="" disabled>Select Gender</option>
// // // //               {GENDERS.map((gender) => (
// // // //                 <option key={gender} value={gender}>
// // // //                   {gender}
// // // //                 </option>
// // // //               ))}
// // // //             </select>
// // // //           </Form.Item>

// // // //           <Form.Item>
// // // //             <Button
// // // //               type="primary"
// // // //               htmlType="submit"
// // // //               loading={loading}
// // // //               style={{
// // // //                 width: "100%",
// // // //                 backgroundColor: "#2c3e50", // Dark color for the button
// // // //                 borderColor: "#2c3e50",
// // // //               }}
// // // //             >
// // // //               Sign Up
// // // //             </Button>
// // // //           </Form.Item>
// // // //         </Form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SignupPageView;
// // // // import React, { useState } from "react";
// // // // import { Button, Form, Input, notification } from "antd";
// // // // import axios from "redux/auth/axios";
// // // // import { resources } from "resources/app_resources";

// // // // const GENDERS = ['Male', 'Female', 'Other']; // Define gender options

// // // // const SignupPageView = () => {
// // // //   const [form] = Form.useForm();
// // // //   const [loading, setLoading] = useState(false);

// // // //   const onFinish = async (values) => {
// // // //     console.log("Received values:", values);
// // // //     await registerUser(values);
// // // //   };

// // // //   const onFinishFailed = () => {
// // // //     // General error notification when signup fails due to validation
// // // //     notification.error({
// // // //       message: "User Not Signed Up",
// // // //       description: "Missing details or incorrect fields. Please fill all required fields correctly.",
// // // //     });
// // // //   };

// // // //   const registerUser = async (values) => {
// // // //     const url = `/user/register`;

// // // //     setLoading(true);
// // // //     try {
// // // //       const res = await axios.post(url, values);
// // // //       notification.success({
// // // //         message: "Registration Successful",
// // // //         description: res.data.message,
// // // //       });
// // // //       form.resetFields(); // Reset form after successful registration
// // // //       // Navigate to login page (add your navigation logic here)
// // // //       // navigate("/auth/login"); // Uncomment this line if using react-router
// // // //     } catch (error) {
// // // //       notification.error({
// // // //         message: "Registration Failed",
// // // //         description: error.response?.data?.message || "An error occurred.",
// // // //       });
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const titleStyle = {
// // // //     fontSize: '28px',
// // // //     fontWeight: 'bold',
// // // //     marginBottom: '20px',
// // // //     color: '#2c3e50',
// // // //     textAlign: 'center',
// // // //   };

// // // //   return (
// // // //     <div
// // // //       style={{
// // // //         backgroundColor: "#f5f5dc", // Beige background color for the page
// // // //         minHeight: "100vh",
// // // //         display: "flex",
// // // //         justifyContent: "center",
// // // //         alignItems: "center",
// // // //         fontFamily: "'Roboto', sans-serif", // Set the font to Roboto
// // // //       }}
// // // //     >
// // // //       <div
// // // //         style={{
// // // //           maxWidth: 400,
// // // //           width: "100%",
// // // //           backgroundColor: "#ffffff", // White background color for the container
// // // //           marginTop:"90px",
// // // //           padding: "20px",
// // // //           borderRadius: "8px",
// // // //           boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
// // // //         }}
// // // //       >
// // // //         <h1 style={titleStyle}>SIGNUP</h1>
// // // //         <Form
// // // //           form={form}
// // // //           name="registerForm"
// // // //           onFinish={onFinish}
// // // //           onFinishFailed={onFinishFailed}
// // // //           autoComplete="off"
// // // //         >
// // // //           <Form.Item
// // // //             name="firstName"
// // // //             label={<span style={{ color: "#2c3e50" }}>First Name</span>}
// // // //             rules={[
// // // //               { required: true, message: resources.FIRST_NAME_EMPTY_VALIDATOR },
// // // //               { pattern: /^[A-Za-z]+$/, message: "First name must contain only alphabets." },
// // // //             ]}
// // // //           >
// // // //             <Input placeholder="Enter your first name" />
// // // //           </Form.Item>

// // // //           <Form.Item
// // // //             name="lastName"
// // // //             label={<span style={{ color: "#2c3e50" }}>Last Name</span>}
// // // //             rules={[
// // // //               { required: true, message: resources.LAST_NAME_EMPTY_VALIDATOR },
// // // //               { pattern: /^[A-Za-z]+$/, message: "Last name must contain only alphabets." },
// // // //             ]}
// // // //           >
// // // //             <Input placeholder="Enter your last name" />
// // // //           </Form.Item>

// // // //           <Form.Item
// // // //             name="email"
// // // //             label={<span style={{ color: "#2c3e50" }}>Email</span>}
// // // //             rules={[
// // // //               { required: true, message: resources.USER_EMAIL_EMPTY_VALIDATOR },
// // // //               { type: 'email', message: "Please enter a valid email." },
// // // //               { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Email must contain @ and .com" },
// // // //             ]}
// // // //           >
// // // //             <Input placeholder="Enter your email" />
// // // //           </Form.Item>

// // // //           <Form.Item
// // // //             name="password"
// // // //             label={<span style={{ color: "#2c3e50" }}>Password</span>}
// // // //             rules={[
// // // //               { required: true, message: resources.USER_PASSWORD_EMPTY_VALIDATOR },
// // // //               {
// // // //                 pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
// // // //                 message: "Password must contain at least one uppercase letter, one number, and one special character."
// // // //               },
// // // //             ]}
// // // //           >
// // // //             <Input.Password placeholder="Enter your password" />
// // // //           </Form.Item>

// // // //           <Form.Item
// // // //             name="mobile"
// // // //             label={<span style={{ color: "#2c3e50" }}>Mobile Number</span>}
// // // //             rules={[
// // // //               { required: true, message: resources.PH_NO_EMPTY_VALIDATOR },
// // // //               { len: 11, message: resources.PH_NO_VALIDATOR }, // Example: Validates mobile number length
// // // //             ]}
// // // //           >
// // // //             <Input placeholder="Enter your mobile number" />
// // // //           </Form.Item>

// // // //           <Form.Item
// // // //             name="gender"
// // // //             label={<span style={{ color: "#2c3e50" }}>Gender</span>}
// // // //             rules={[{ required: true, message: resources.USER_GENDER_VALIDATOR }]}
// // // //           >
// // // //             <select placeholder="Select Gender" style={{ width: "100%", padding: "8px" }}>
// // // //               <option value="" disabled>Select Gender</option>
// // // //               {GENDERS.map((gender) => (
// // // //                 <option key={gender} value={gender}>
// // // //                   {gender}
// // // //                 </option>
// // // //               ))}
// // // //             </select>
// // // //           </Form.Item>

// // // //           <Form.Item>
// // // //             <Button
// // // //               type="primary"
// // // //               htmlType="submit"
// // // //               loading={loading}
// // // //               style={{
// // // //                 width: "100%",
// // // //                 backgroundColor: "#2c3e50", // Dark color for the button
// // // //                 borderColor: "#2c3e50",
// // // //               }}
// // // //             >
// // // //               Sign Up
// // // //             </Button>
// // // //           </Form.Item>
// // // //         </Form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SignupPageView;
// // // import React, { useState } from "react";
// // // import { Button, Form, Input, notification } from "antd";
// // // import axios from "redux/auth/axios";
// // // import { resources } from "resources/app_resources";

// // // const GENDERS = ['Male', 'Female', 'Other']; // Define gender options

// // // const SignupPageView = () => {
// // //   const [form] = Form.useForm();
// // //   const [loading, setLoading] = useState(false);

// // //   const onFinish = async (values) => {
// // //     console.log("Received values:", values);
// // //     await registerUser(values);
// // //   };

// // //   const onFinishFailed = () => {
// // //     // General error notification when signup fails due to validation
// // //     notification.error({
// // //       message: "User Not Signed Up",
// // //       description: "Missing details or incorrect fields. Please fill all required fields correctly.",
// // //     });
// // //   };

// // //   const registerUser = async (values) => {
// // //     const url = `/user/register`;

// // //     setLoading(true);
// // //     try {
// // //       const res = await axios.post(url, values);
// // //       notification.success({
// // //         message: "Registration Successful",
// // //         description: res.data.message,
// // //       });
// // //       form.resetFields(); // Reset form after successful registration
// // //       // Navigate to login page (add your navigation logic here)
// // //       // navigate("/auth/login"); // Uncomment this line if using react-router
// // //     } catch (error) {
// // //       notification.error({
// // //         message: "Registration Failed",
// // //         description: error.response?.data?.message || "An error occurred.",
// // //       });
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const titleStyle = {
// // //     fontSize: '28px',
// // //     fontWeight: 'bold',
// // //     marginBottom: '20px',
// // //     color: '#2c3e50',
// // //     textAlign: 'center',
// // //   };

// // //   return (
// // //     <div
// // //       style={{
// // //         backgroundColor: "#f5f5dc", // Beige background color for the page
// // //         minHeight: "100vh",
// // //         display: "flex",
// // //         justifyContent: "center",
// // //         alignItems: "center",
// // //         fontFamily: "'Roboto', sans-serif", // Set the font to Roboto
// // //       }}
// // //     >
// // //       <div
// // //         style={{
// // //           maxWidth: 400,
// // //           width: "100%",
// // //           backgroundColor: "#ffffff", // White background color for the container
// // //           marginTop: "90px",
// // //           padding: "20px",
// // //           borderRadius: "20px",
// // //           boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Increased shadow for depth
// // //         }}
// // //       >
// // //         <h1 style={titleStyle}>SIGNUP</h1>
// // //         <Form
// // //           form={form}
// // //           name="registerForm"
// // //           onFinish={onFinish}
// // //           onFinishFailed={onFinishFailed}
// // //           autoComplete="off"
// // //         >
// // //           <Form.Item
// // //             name="firstName"
// // //             label={<span style={{ color: "#2c3e50" }}>First Name</span>}
// // //             rules={[
// // //               { required: true, message: resources.FIRST_NAME_EMPTY_VALIDATOR },
// // //               { pattern: /^[A-Za-z]+$/, message: "First name must contain only alphabets." },
// // //             ]}
// // //           >
// // //             <Input placeholder="Enter your first name" />
// // //           </Form.Item>

// // //           <Form.Item
// // //             name="lastName"
// // //             label={<span style={{ color: "#2c3e50" }}>Last Name</span>}
// // //             rules={[
// // //               { required: true, message: resources.LAST_NAME_EMPTY_VALIDATOR },
// // //               { pattern: /^[A-Za-z]+$/, message: "Last name must contain only alphabets." },
// // //             ]}
// // //           >
// // //             <Input placeholder="Enter your last name" />
// // //           </Form.Item>

// // //           <Form.Item
// // //             name="email"
// // //             label={<span style={{ color: "#2c3e50" }}>Email</span>}
// // //             rules={[
// // //               { required: true, message: resources.USER_EMAIL_EMPTY_VALIDATOR },
// // //               { type: 'email', message: "Please enter a valid email." },
// // //               { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Email must contain @ and .com" },
// // //             ]}
// // //           >
// // //             <Input placeholder="Enter your email" />
// // //           </Form.Item>

// // //           <Form.Item
// // //             name="password"
// // //             label={<span style={{ color: "#2c3e50" }}>Password</span>}
// // //             rules={[
// // //               { required: true, message: resources.USER_PASSWORD_EMPTY_VALIDATOR },
// // //               {
// // //                 pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
// // //                 message: "Password must contain at least one uppercase letter, one number, and one special character."
// // //               },
// // //             ]}
// // //           >
// // //             <Input.Password placeholder="Enter your password" />
// // //           </Form.Item>

// // //           <Form.Item
// // //             name="mobile"
// // //             label={<span style={{ color: "#2c3e50" }}>Mobile Number</span>}
// // //             rules={[
// // //               { required: true, message: resources.PH_NO_EMPTY_VALIDATOR },
// // //               { len: 11, message: resources.PH_NO_VALIDATOR }, // Example: Validates mobile number length
// // //             ]}
// // //           >
// // //             <Input placeholder="Enter your mobile number" />
// // //           </Form.Item>

// // //           <Form.Item
// // //             name="gender"
// // //             label={<span style={{ color: "#2c3e50" }}>Gender</span>}
// // //             rules={[{ required: true, message: resources.USER_GENDER_VALIDATOR }]}
// // //           >
// // //             <select placeholder="Select Gender" style={{ width: "100%", padding: "8px" }}>
// // //               <option value="" disabled>Select Gender</option>
// // //               {GENDERS.map((gender) => (
// // //                 <option key={gender} value={gender}>
// // //                   {gender}
// // //                 </option>
// // //               ))}
// // //             </select>
// // //           </Form.Item>

// // //           <Form.Item>
// // //             <Button
// // //               type="primary"
// // //               htmlType="submit"
// // //               loading={loading}
// // //               style={{
// // //                 width: "100%",
// // //                 backgroundColor: "#2c3e50", // Dark color for the button
// // //                 borderColor: "#2c3e50",
// // //               }}
// // //             >
// // //               Sign Up
// // //             </Button>
// // //           </Form.Item>
// // //         </Form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SignupPageView;
// // import React, { useState } from "react";
// // import { Button, Form, Input, notification } from "antd";
// // import { Link } from "react-router-dom"; // Import Link for navigation
// // import axios from "redux/auth/axios";
// // import { resources } from "resources/app_resources";

// // const GENDERS = ['Male', 'Female', 'Other']; // Define gender options

// // const SignupPageView = () => {
// //   const [form] = Form.useForm();
// //   const [loading, setLoading] = useState(false);

// //   const onFinish = async (values) => {
// //     console.log("Received values:", values);
// //     await registerUser(values);
// //   };

// //   const onFinishFailed = () => {
// //     // General error notification when signup fails due to validation
// //     notification.error({
// //       message: "User Not Signed Up",
// //       description: "Missing details or incorrect fields. Please fill all required fields correctly.",
// //     });
// //   };

// //   const registerUser = async (values) => {
// //     const url = `/user/register`;

// //     setLoading(true);
// //     try {
// //       const res = await axios.post(url, values);
// //       notification.success({
// //         message: "Registration Successful",
// //         description: res.data.message,
// //       });
// //       form.resetFields(); // Reset form after successful registration
// //       // Navigate to login page (add your navigation logic here)
// //       // navigate("/auth/login"); // Uncomment this line if using react-router
// //     } catch (error) {
// //       notification.error({
// //         message: "Registration Failed",
// //         description: error.response?.data?.message || "An error occurred.",
// //       });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const titleStyle = {
// //     fontSize: '28px',
// //     fontWeight: 'bold',
// //     marginBottom: '20px',
// //     color: '#2c3e50',
// //     textAlign: 'center',
// //   };

// //   return (
// //     <div
// //       style={{
// //         backgroundColor: "#f5f5dc", // Beige background color for the page
// //         minHeight: "100vh",
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         fontFamily: "'Roboto', sans-serif", // Set the font to Roboto
// //       }}
// //     >
// //       <div
// //         style={{
// //           maxWidth: 400,
// //           width: "100%",
// //           backgroundColor: "#ffffff", // White background color for the container
// //           marginTop: "90px",
// //           padding: "20px",
// //           borderRadius: "8px",
// //           boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Increased shadow for depth
// //         }}
// //       >
// //         <h1 style={titleStyle}>SIGNUP</h1>
// //         <Form
// //           form={form}
// //           name="registerForm"
// //           onFinish={onFinish}
// //           onFinishFailed={onFinishFailed}
// //           autoComplete="off"
// //         >
// //           <Form.Item
// //             name="firstName"
// //             label={<span style={{ color: "#2c3e50" }}>First Name</span>}
// //             rules={[
// //               { required: true, message: resources.FIRST_NAME_EMPTY_VALIDATOR },
// //               { pattern: /^[A-Za-z]+$/, message: "First name must contain only alphabets." },
// //             ]}
// //           >
// //             <Input placeholder="Enter your first name" />
// //           </Form.Item>

// //           <Form.Item
// //             name="lastName"
// //             label={<span style={{ color: "#2c3e50" }}>Last Name</span>}
// //             rules={[
// //               { required: true, message: resources.LAST_NAME_EMPTY_VALIDATOR },
// //               { pattern: /^[A-Za-z]+$/, message: "Last name must contain only alphabets." },
// //             ]}
// //           >
// //             <Input placeholder="Enter your last name" />
// //           </Form.Item>

// //           <Form.Item
// //             name="email"
// //             label={<span style={{ color: "#2c3e50" }}>Email</span>}
// //             rules={[
// //               { required: true, message: resources.USER_EMAIL_EMPTY_VALIDATOR },
// //               { type: 'email', message: "Please enter a valid email." },
// //               { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Email must contain @ and .com" },
// //             ]}
// //           >
// //             <Input placeholder="Enter your email" />
// //           </Form.Item>

// //           <Form.Item
// //             name="password"
// //             label={<span style={{ color: "#2c3e50" }}>Password</span>}
// //             rules={[
// //               { required: true, message: resources.USER_PASSWORD_EMPTY_VALIDATOR },
// //               {
// //                 pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
// //                 message: "Password must contain at least one uppercase letter, one number, and one special character."
// //               },
// //             ]}
// //           >
// //             <Input.Password placeholder="Enter your password" />
// //           </Form.Item>

// //           <Form.Item
// //             name="mobile"
// //             label={<span style={{ color: "#2c3e50" }}>Mobile Number</span>}
// //             rules={[
// //               { required: true, message: resources.PH_NO_EMPTY_VALIDATOR },
// //               { len: 11, message: resources.PH_NO_VALIDATOR }, // Example: Validates mobile number length
// //             ]}
// //           >
// //             <Input placeholder="Enter your mobile number" />
// //           </Form.Item>

// //           <Form.Item
// //             name="gender"
// //             label={<span style={{ color: "#2c3e50" }}>Gender</span>}
// //             rules={[{ required: true, message: resources.USER_GENDER_VALIDATOR }]}
// //           >
// //             <select placeholder="Select Gender" style={{ width: "100%", padding: "8px" }}>
// //               <option value="" disabled>Select Gender</option>
// //               {GENDERS.map((gender) => (
// //                 <option key={gender} value={gender}>
// //                   {gender}
// //                 </option>
// //               ))}
// //             </select>
// //           </Form.Item>

// //           <Form.Item>
// //             <Button
// //               type="primary"
// //               htmlType="submit"
// //               loading={loading}
// //               style={{
// //                 width: "100%",
// //                 backgroundColor: "#2c3e50", // Dark color for the button
// //                 borderColor: "#2c3e50",
// //               }}
// //             >
// //               Sign Up
// //             </Button>
// //           </Form.Item>
// //         </Form>

// //         <div style={{ textAlign: 'center', marginTop: '10px' }}>
// //           <Link to="/auth/login" style={{ color: "#2c3e50", textDecoration: 'none' }}>
// //             Already have an account? Login
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignupPageView;
// import React, { useState } from "react";
// import { Button, Form, Input, notification } from "antd";
// import { Link } from "react-router-dom"; // Import Link for navigation
// import axios from "redux/auth/axios";
// import { resources } from "resources/app_resources";

// const GENDERS = ['Male', 'Female', 'Other']; // Define gender options

// const SignupPageView = () => {
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);

//   const onFinish = async (values) => {
//     console.log("Received values:", values);
//     await registerUser(values);
//   };

//   const onFinishFailed = () => {
//     // General error notification when signup fails due to validation
//     notification.error({
//       message: "User Not Signed Up",
//       description: "Missing details or incorrect fields. Please fill all required fields correctly.",
//     });
//   };

//   const registerUser = async (values) => {
//     const url = `/user/register`;

//     setLoading(true);
//     try {
//       const res = await axios.post(url, values);
//       notification.success({
//         message: "Registration Successful",
//         description: res.data.message,
//       });
//       form.resetFields(); // Reset form after successful registration
//       // Navigate to login page (add your navigation logic here)
//       // navigate("/auth/login"); // Uncomment this line if using react-router
//     } catch (error) {
//       notification.error({
//         message: "Registration Failed",
//         description: error.response?.data?.message || "An error occurred.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const titleStyle = {
//     fontSize: '28px',
//     fontWeight: 'bold',
//     marginBottom: '20px',
//     color: '#2c3e50',
//     textAlign: 'center',
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: "#f5f5dc", // Beige background color for the page
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         fontFamily: "'Roboto', sans-serif", // Set the font to Roboto
//       }}
//     >
//       <div
//         style={{
//           maxWidth: 400,
//           width: "100%",
//           backgroundColor: "#ffffff", // White background color for the container
//           marginTop: "90px",
//           padding: "20px",
//           borderRadius: "8px",
//           boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", 
//           marginBottom: '100px'// Increased shadow for depth
//         }}
//       >
//         <h1 style={titleStyle}>SIGNUP</h1>
//         <Form
//           form={form}
//           name="registerForm"
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed}
//           autoComplete="off"
//         >
//           <Form.Item
//             name="firstName"
//             label={<span style={{ color: "#2c3e50" }}>First Name</span>}
//             rules={[
//               { required: true, message: resources.FIRST_NAME_EMPTY_VALIDATOR },
//               { pattern: /^[A-Za-z]+$/, message: "First name must contain only alphabets." },
//             ]}
//           >
//             <Input placeholder="Enter your first name" />
//           </Form.Item>

//           <Form.Item
//             name="lastName"
//             label={<span style={{ color: "#2c3e50" }}>Last Name</span>}
//             rules={[
//               { required: true, message: resources.LAST_NAME_EMPTY_VALIDATOR },
//               { pattern: /^[A-Za-z]+$/, message: "Last name must contain only alphabets." },
//             ]}
//           >
//             <Input placeholder="Enter your last name" />
//           </Form.Item>

//           <Form.Item
//             name="email"
//             label={<span style={{ color: "#2c3e50" }}>Email</span>}
//             rules={[
//               { required: true, message: resources.USER_EMAIL_EMPTY_VALIDATOR },
//               { type: 'email', message: "Please enter a valid email." },
//               { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Email must contain @ and .com" },
//             ]}
//           >
//             <Input placeholder="Enter your email" />
//           </Form.Item>

//           <Form.Item
//             name="password"
//             label={<span style={{ color: "#2c3e50" }}>Password</span>}
//             rules={[
//               { required: true, message: resources.USER_PASSWORD_EMPTY_VALIDATOR },
//               {
//                 pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
//                 message: "Password must contain at least one uppercase letter, one number, and one special character."
//               },
//             ]}
//           >
//             <Input.Password placeholder="Enter your password"  style={{ backgroundColor: "#ffffff" }}/>
//           </Form.Item>

//           <Form.Item
//             name="mobile"
//             label={<span style={{ color: "#2c3e50" }}>Mobile Number</span>}
//             rules={[
//               { required: true, message: resources.PH_NO_EMPTY_VALIDATOR },
//               { len: 11, message: resources.PH_NO_VALIDATOR }, // Example: Validates mobile number length
//             ]}
//           >
//             <Input placeholder="Enter your mobile number" />
//           </Form.Item>

//           <Form.Item
//             name="gender"
//             label={<span style={{ color: "#2c3e50" }}>Gender</span>}
//             rules={[{ required: true, message: resources.USER_GENDER_VALIDATOR }]}
//           >
//             <select placeholder="Select Gender" style={{ width: "100%", padding: "8px" }}>
//               <option value="" disabled>Select Gender</option>
//               {GENDERS.map((gender) => (
//                 <option key={gender} value={gender}>
//                   {gender}
//                 </option>
//               ))}
//             </select>
//           </Form.Item>

//           <Form.Item>
//             <Button
//               type="primary"
//               htmlType="submit"
//               loading={loading}
//               style={{
//                 width: "100%",
//                 backgroundColor: "#2c3e50", // Dark color for the button
//                 borderColor: "#2c3e50",
//               }}
//             >
//               Sign Up
//             </Button>
//           </Form.Item>
//         </Form>

//         <div style={{ textAlign: 'center', marginTop: '10px' }}>
//           <Link 
//             to="/auth/login" 
//             style={{ 
//               color: "#2c3e50", 
//               textDecoration: 'none',
//               transition: 'color 0.3s ease' // Transition for smooth color change
//             }}
//             onMouseEnter={(e) => (e.currentTarget.style.color = "#007bff")} // Change color on hover
//             onMouseLeave={(e) => (e.currentTarget.style.color = "#2c3e50")} // Revert color when not hovered
//           >
//             Already have an account? Login
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupPageView;
import React, { useState } from "react";
import { Button, Form, Input, notification } from "antd";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate for navigation
import axios from "redux/auth/axios";
import { resources } from "resources/app_resources";

const GENDERS = ['Male', 'Female', 'Other']; // Define gender options

const SignupPageView = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const onFinish = async (values) => {
    console.log("Received values:", values);
    await registerUser(values);
  };

  const onFinishFailed = () => {
    // General error notification when signup fails due to validation
    notification.error({
      message: "User Not Signed Up",
      description: "Missing details or incorrect fields. Please fill all required fields correctly.",
    });
  };

  const registerUser = async (values) => {
    const url = `/user/register`;

    setLoading(true);
    try {
      const res = await axios.post(url, values);
      notification.success({
        message: "Registration Successful",
        description: res.data.message,
      });
      form.resetFields(); // Reset form after successful registration
      navigate("/auth/login"); // Navigate to the login page after successful registration
    } catch (error) {
      notification.error({
        message: "Registration Failed",
        description: error.response?.data?.message || "An error occurred.",
      });
    } finally {
      setLoading(false);
    }
  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#2c3e50',
    textAlign: 'center',
  };

  return (
    <div
      style={{
        backgroundColor: "#f5f5dc", // Beige background color for the page
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Roboto', sans-serif", // Set the font to Roboto
      }}
    >
      <div
        style={{
          maxWidth: 400,
          width: "100%",
          backgroundColor: "#ffffff", // White background color for the container
          marginTop: "90px",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", 
          marginBottom: '100px' // Increased shadow for depth
        }}
      >
        <h1 style={titleStyle}>SIGNUP</h1>
        <Form
          form={form}
          name="registerForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="firstName"
            label={<span style={{ color: "#2c3e50" }}>First Name</span>}
            rules={[
              { required: true, message: resources.FIRST_NAME_EMPTY_VALIDATOR },
              { pattern: /^[A-Za-z]+$/, message: "First name must contain only alphabets." },
            ]}
          >
            <Input placeholder="Enter your first name" />
          </Form.Item>

          <Form.Item
            name="lastName"
            label={<span style={{ color: "#2c3e50" }}>Last Name</span>}
            rules={[
              { required: true, message: resources.LAST_NAME_EMPTY_VALIDATOR },
              { pattern: /^[A-Za-z]+$/, message: "Last name must contain only alphabets." },
            ]}
          >
            <Input placeholder="Enter your last name" />
          </Form.Item>

          <Form.Item
            name="email"
            label={<span style={{ color: "#2c3e50" }}>Email</span>}
            rules={[
              { required: true, message: resources.USER_EMAIL_EMPTY_VALIDATOR },
              { type: 'email', message: "Please enter a valid email." },
              { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Email must contain @ and .com" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            name="password"
            label={<span style={{ color: "#2c3e50" }}>Password</span>}
            rules={[
              { required: true, message: resources.USER_PASSWORD_EMPTY_VALIDATOR },
              {
                pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                message: "Password must contain at least one uppercase letter, one number, and one special character."
              },
            ]}
          >
            <Input.Password placeholder="Enter your password"  style={{ backgroundColor: "#ffffff" }}/>
          </Form.Item>

          <Form.Item
            name="mobile"
            label={<span style={{ color: "#2c3e50" }}>Mobile Number</span>}
            rules={[
              { required: true, message: resources.PH_NO_EMPTY_VALIDATOR },
              { len: 11, message: resources.PH_NO_VALIDATOR }, // Example: Validates mobile number length
            ]}
          >
            <Input placeholder="Enter your mobile number" />
          </Form.Item>

          <Form.Item
            name="gender"
            label={<span style={{ color: "#2c3e50" }}>Gender</span>}
            rules={[{ required: true, message: resources.USER_GENDER_VALIDATOR }]}
          >
            <select placeholder="Select Gender" style={{ width: "100%", padding: "8px" }}>
              <option value="" disabled>Select Gender</option>
              {GENDERS.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              style={{
                width: "100%",
                backgroundColor: "#2c3e50", // Dark color for the button
                borderColor: "#2c3e50",
              }}
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <Link 
            to="/auth/login" 
            style={{ 
              color: "#2c3e50", 
              textDecoration: 'none',
              transition: 'color 0.3s ease' // Transition for smooth color change
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#007bff")} // Change color on hover
            onMouseLeave={(e) => (e.currentTarget.style.color = "#2c3e50")} // Revert color when not hovered
          >
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPageView;
