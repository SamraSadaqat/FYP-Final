import { Col, Form, Image, Row } from "antd";
import Question from "assets/images/question.svg";
import React from "react";
import { useNavigate } from "react-router-dom";
import logger from "redux/helpers/logger";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
// import LegendArena from "../components/legend-arena/LegendArena";

const Contact = () => {
    const nav = useNavigate();

    const onFinish = (values) => {
        logger.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        logger.log("Failed:", errorInfo);
    };

    // Styles for the container and main content
    const pageContainerStyle = {
        background: 'linear-gradient(135deg, #a1c4fd 50%, #c2e9fb 50%)', // Two-tone gradient background
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '20px',
    };

    const contentContainerStyle = {
        width: '80%',
        maxWidth: '1000px',
        padding: '30px',
        borderRadius: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        color: '#333',
        position: 'relative',
        zIndex: '1',
        border: '1px solid #e0e0e0',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/diamond-upholstery.png")',
        backgroundSize: 'contain',
    };

    const titleStyle = {
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#2c3e50',
    };

    const subtitleStyle = {
        fontSize: '20px',
        marginBottom: '15px',
        color: '#34495e',
    };

    const paragraphStyle = {
        fontSize: '16px',
        marginBottom: '20px',
        textAlign: 'justify',
    };

    // const listStyle = {
    //     fontSize: '16px',
    //     marginBottom: '20px',
    //     paddingLeft: '20px',
    // };

    return (
        <>
            <Header />
            <div style={pageContainerStyle}>
                <div style={contentContainerStyle}>
                    <Row className="mb-1">
                        <Col span={10} offset={7} className="text-center">
                            <h2 style={titleStyle}>Features of our App</h2>
                            <p style={paragraphStyle}>
                                Explore the full spectrum of CKD management with the NephroHealth Coach App. From secure login to personalized health reminders, BMI assessment to stress reduction techniques, our comprehensive platform empowers you to take charge of your kidney health journey.
                            </p>
                        </Col>
                    </Row>
                    <Row className="section-pb justify-content-center">
                        <Col span={12} className="contact-left">
                            <Image
                                preview={false}
                                src={Question}
                                width="90px"
                                onClick={() => nav(-1)}
                                style={{ marginBottom: '20px' }}
                            />
                            <h3 style={subtitleStyle}><strong>1. Patient Profiling</strong></h3>
                            <p style={paragraphStyle}>
                                Keep track of your health journey with our patient profiling and medical history feature. Easily input and manage your medical records, including diagnoses, medications, lab results, and treatment history. This comprehensive profile provides valuable insights into your health status, empowering you to make informed decisions and collaborate effectively with healthcare providers.
                            </p>
                            <h4 style={subtitleStyle}><strong>2. Educational Awareness</strong></h4>
                            <p style={paragraphStyle}>
                                Stay informed and empowered with our educational awareness feature. Access evidence-based information and resources about Chronic Kidney Disease (CKD), its causes, symptoms, treatment options, and lifestyle management strategies. Our educational content is curated by healthcare professionals to ensure accuracy and relevance, helping you understand your condition and take proactive steps towards better health.
                            </p>
                            <h4 style={subtitleStyle}><strong>3. Diet Plan</strong></h4>
                            <p style={paragraphStyle}>
                                Take control of your nutrition and dietary habits with our personalized diet plan feature. Receive tailored diet recommendations based on your medical history, nutritional needs, and dietary preferences. Our diet plans are designed to support kidney health and optimize your overall nutritional intake, making it easier for you to follow a kidney-friendly diet and improve your well-being.
                            </p>
                            <h4 style={subtitleStyle}><strong>4. Water Intake</strong></h4>
                            <p style={paragraphStyle}>
                                Stay hydrated and maintain optimal kidney health with our water intake tracker. Monitor your daily water consumption and set personalized goals to ensure you are meeting your hydration needs. Regular hydration is essential for kidney function and overall well-being, and our intuitive tracker makes it easy to stay on track and prioritize your health.
                            </p>
                        </Col>
                        <Col span={12} className="contact-form">
                            <Form
                                name="basic"
                                labelCol={{ span: 8 }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                {/* Form items commented out for now, uncomment and adjust as needed */}
                                {/* <Form.Item
                                    label="Full Name"
                                    name="fullname"
                                    labelCol={{ span: 24 }}
                                    rules={[
                                        { required: true, message: "Please input your Full Name!" },
                                    ]}
                                >
                                    <Input />
                                </Form.Item> */}
                                {/* <Form.Item
                                    label="Email"
                                    name="email"
                                    labelCol={{ span: 24 }}
                                    rules={[
                                        { required: true, message: "Please input your Email!" },
                                    ]}
                                >
                                    <Input />
                                </Form.Item> */}
                                {/* <Form.Item
                                    label="Phone Number"
                                    name="Phonenumber"
                                    labelCol={{ span: 24 }}
                                    rules={[
                                        {
                                            required: false,
                                            message: "Please input your Phone Number!",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item> */}
                                {/* <Form.Item
                                    label="Message"
                                    name="message"
                                    labelCol={{ span: 24 }}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input your Message!",
                                        },
                                    ]}
                                >
                                    <TextArea
                                        showCount
                                        maxLength={100}
                                        style={{ height: 200, marginBottom: 24 }}
                                    />
                                </Form.Item> */}
                                {/* <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        block
                                        className="submit-btn"
                                    >
                                        Send
                                    </Button>
                                </Form.Item> */}
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
            {/* <LegendArena /> */}
            <Footer />
        </>
    );
};

export default Contact;
