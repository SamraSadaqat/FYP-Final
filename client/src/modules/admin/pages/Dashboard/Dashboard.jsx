import React from "react";
import { Col, Row, Card } from "antd";
import { NavLink } from "react-router-dom";
import AuthFooter from "modules/admin/pages/Dashboard/AuthFooter";
import nurse from "assets/images/nurse.png";
import heart from "assets/images/heart.png";
import record from "assets/images/record.png"; // Add your image paths
import yoga from "assets/images/yoga.png";
import stethoscope1 from "assets/images/stethoscope1.png";

const Dashboard = () => {
  return (
    <>
      <DashboardView />
    </>
  );
};

export default Dashboard;

const DashboardView = () => {
  const cardData = [
    {
      content: 'Patient Encounter',
      link: '/user/patient-encounter',
      image: record,
    },
    {
      content: 'Excercise Video',
      link: '/user/excercise',
      image: yoga,
    },
    {
      content: 'Doctor Information',
      link: '/user/doctors-information',
      image: stethoscope1,
    },
  ];

  const pageContainerStyle = {
    background: '#f5f5dc', // Change the background color to #f5f5dc (beige)
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: '20px',
  };

  const largeCardGradientStyle = {
    background: 'linear-gradient(135deg, #fff1eb, #ace0f9)',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  };

  const smallCardGradientStyle = {
    background: 'linear-gradient(135deg, #f0d5d5, #8fc1d4)',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const smallBoxInLargeContainerStyle = {
    width: '230px',
    height: '180px',
    background: 'linear-gradient(135deg, #f0d5d5, #8fc1d4)',
    borderRadius: '10px',
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const secondSmallBoxStyle = {
    width: '230px',
    height: '180px',
    background: 'linear-gradient(135deg, #f0d5d5, #8fc1d4)',
    borderRadius: '10px',
    position: 'absolute',
    bottom: '20px',
    left: '270px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };

  const imageStyle = {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    width: '380px',
    height: '90%',
  };

  const smallBoxImageStyle = {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    marginTop: '25px',
  };

  const textStyle = {
    position: 'absolute',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    textAlign: 'center',
    zIndex: 1,
    left: '50%',
    transform: 'translateX(-50%)',
    top: '10px',
  };

  const secondSmallBoxTextStyle = {
    color: '#7E91C5',
    fontWeight: 'bold',
    fontSize: '14px',
    textAlign: 'center',
  };

  const highlightTextStyle = {
    color: '#0C2056',
    fontWeight: 'bold',
    fontSize: '30px',
  };

  const containerStyle = {
    ...smallCardGradientStyle, // Apply gradient background and other styles
    position: 'relative',
    width: '100%',
    height: '250px', // Adjust height as needed
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageInContainerStyle = {
    position: 'absolute',
    top: '10px', // Adjust as needed
    width: '50%',
    height: 'auto',
    objectFit: 'cover',
    zIndex: 0,
    marginTop: '25px',
  };

  const contentStyle = {
    position: 'absolute', // Absolute positioning to keep it on top of the image
    bottom: '10px', // Position it near the bottom (or adjust as needed)
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '16px',
    zIndex: 1, // Ensure the text is above the image
    left: '50%', // Center text horizontally
    transform: 'translateX(-50%)', // Adjust for horizontal centering
    top: '10px',
  };

  const loggedInUser = localStorage.getItem("userName");

  return (
    
    <>
      <div style={pageContainerStyle}>
        <div style={{ width: '100%' }}>
          <Row justify="center" style={{ marginBottom: '40px' }}>
            <Col span={24}>
              <div style={largeCardGradientStyle}>
                <Card
                  bordered={false}
                  style={{
                    backgroundColor: 'transparent',
                    height: '550px',
                    position: 'relative',
                  }}
                  bodyStyle={{ padding: '40px' }}
                >
                  <div>
                    <h2 style={{ padding: '5%', color: '#333' }}>
                      Welcome {loggedInUser} to,<br />NephroHealthCoach!
                    </h2>
                    <p style={{ paddingLeft: '60px', color: '#555', fontSize: '14px', marginTop: '10px' }}>
                      Empower Your Kidney Health. Take Control, Stay Informed, and Live Well with Confidence and Peace of Mind.
                    </p>
                  </div>

                  <div style={smallBoxInLargeContainerStyle}>
                    <p style={textStyle}>Stay Healthy</p>
                    <img src={heart} alt="Small Box" style={smallBoxImageStyle} />
                  </div>

                  <div style={secondSmallBoxStyle}>
                    <p style={secondSmallBoxTextStyle}>
                      Worldwide, the number of people currently receiving treatment with kidney dialysis to stay alive is{' '}
                      <span style={highlightTextStyle}>OVER 2M!</span>
                    </p>
                  </div>

                  <img
                    src={nurse}
                    alt="nurse"
                    style={imageStyle}
                  />
                </Card>
              </div>
            </Col>
          </Row>

          <Row justify="center" gutter={[16, 16]}>
            {cardData.map((card, index) => (
              <Col key={index} span={8}>
                <NavLink to={card.link}>
                  <div style={containerStyle}>
                    <img src={card.image} alt={`Card ${index + 1}`} style={imageInContainerStyle} />
                    <p style={contentStyle}>{card.content}</p>
                  </div>
                </NavLink>
              </Col>
            ))}
          </Row>
        </div>
        <br />
      </div>
      <AuthFooter />
    </>
  );
};
