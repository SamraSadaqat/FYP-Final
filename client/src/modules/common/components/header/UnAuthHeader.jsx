import { Col, Image, Row } from "antd";
import Logo from "assets/images/nephro_health_coach-01-removebg-preview.png";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Styled components
const Header = styled.header`
  background-color: #2c3e50;
  padding: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px 0; /* Reduce padding on smaller screens */
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px; /* Reduce padding for smaller screens */
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LogoImage = styled(Image)`
  height: 80px;
  width: auto;
  z-index: 1000;

  @media (max-width: 768px) {
    height: 60px; /* Reduce logo size on smaller screens */
  }
`;

const LogoText = styled.h1`
  color: #ecf0f1;
  font-size: 24px;
  margin: 0;
  margin-left: 10px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 20px; /* Reduce text size on smaller screens */
  }
`;

const MainNavigation = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack navigation items vertically */
    align-items: center;
    width: 100%;
    margin-top: 10px;
  }
`;

const NavItem = styled.li`
  margin: 0 15px;

  a {
    color: #ecf0f1;
    font-size: 16px;
    text-decoration: none;
    padding: 8px 15px;
    transition: color 0.3s ease;
    text-align: center;

    &:hover {
      color: #3498db;
    }

    @media (max-width: 768px) {
      font-size: 14px; /* Reduce font size on smaller screens */
      padding: 6px 10px; /* Adjust padding for better spacing */
    }
  }
`;

const Button = styled(NavLink)`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }

  @media (max-width: 768px) {
    font-size: 14px; /* Reduce font size on smaller screens */
    padding: 8px 15px; /* Adjust padding for smaller screens */
    width: 100%; /* Make the button full width */
    text-align: center;
    margin-top: 10px; /* Add space between navigation and button */
  }
`;

const LoginButton = styled(Button)`
  margin-left: 15px; /* Space between login and signup buttons */
  margin-right: 15px;
`;

const SignupButton = styled(Button)``;

const MainHeader = () => {
  return (
    <Header>
      <Container>
        <Row align="middle" gutter={[16, 16]}>
          <Col xs={24} md={6}>
            <LogoContainer>
            <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
    <LogoImage preview={false} src={Logo} />
    <LogoText>NephroHealth Coach</LogoText>
  </a>
            </LogoContainer>
          </Col>
          <Col xs={24} md={12}>
            <MainNavigation>
              <NavItem>
               
              </NavItem>
              {/* Add more NavItems here as needed */}
            </MainNavigation>
          </Col>
          <Col xs={24} md={6} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <LoginButton to="/auth/login">Login</LoginButton>
            <SignupButton to="/auth/signup">Sign Up</SignupButton>
          </Col>
        </Row>
      </Container>
    </Header>
  );
};

export default MainHeader;
