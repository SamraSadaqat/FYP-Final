import { Row, Col } from "antd";
import App from "modules/admin/components/cards/CardWithFrame";
import React from "react";
import AuthFooter from "modules/admin/pages/Dashboard/AuthFooter";

const Excercise = () => {
  return (
    <>
      <DashboardView />
    </>
  );
};

export default Excercise;

const DashboardView = () => {
  // Page container with the beige background
  const pageContainerStyle = {
    background: '#f5f5dc', // Warm beige background
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    position: 'relative',
  };

  // Symmetrical shapes for decoration with a dark slate tint
  const shapeStyle = {
    position: 'absolute',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundColor: 'rgba(44, 62, 80, 0.1)', // Transparent dark slate color
  };

  const topLeftShapeStyle = {
    ...shapeStyle,
    top: '10%',
    left: '5%',
  };

  const bottomRightShapeStyle = {
    ...shapeStyle,
    bottom: '10%',
    right: '5%',
  };

  // Styles for the content container with a subtle patterned background
  // const contentContainerStyle = {
  //   width: '100%', // Full width
  //   maxWidth: '1200px', // Limit the width for better readability
  //   backgroundColor: 'white',
  //   backgroundImage: 'url("https://www.transparenttextures.com/patterns/diamond-upholstery.png")', // Patterned background
  //   backgroundSize: 'contain',
  //   boxShadow: '0px 4px 20px rgba(44, 62, 80, 0.2)', // Shadow with dark slate tint
  //   borderRadius: '20px',
  //   padding: '50px', // Ample padding for content spacing
  //   marginBottom: '40px', // Margin for spacing between content and footer
  //   zIndex: '1', // Above background shapes
  // };

  // Style for headings
  const headingStyle = {
    textAlign: 'center',
    color: '#2c3e50', // Dark slate color for text
    fontWeight: 'bold',
    fontSize: '50px',
    marginBottom: '20px', // Space below heading
  };

  return (
    <>
      <div style={pageContainerStyle}>
        {/* Symmetrical shapes */}
        <div style={topLeftShapeStyle}></div>
        <div style={bottomRightShapeStyle}></div>

        <Row justify="center" style={{ width: '100%' }}>
          <Col span={24}>
            <h1 style={headingStyle}>EXERCISE VIDEOS</h1>
            {/* Content component */}
            <App />
          </Col>
        </Row>
      </div>
      <AuthFooter />
    </>
  );
};
