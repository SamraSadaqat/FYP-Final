import { Col, Image, Row, Button, Input } from "antd";
import Logo from "assets/images/nephro_health_coach-01-removebg-preview.png";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Styled components for Footer
const Footer = styled.footer`
  background-color: #2c3e50;
  padding: 20px 0;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FooterLogoImage = styled(Image)`
  height: 60px; /* Reduced logo size */
  width: auto;
`;

const FooterNav = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 120px; /* Adjusted top margin */
`;

const FooterNavItem = styled.li`
  margin: 10px 0;
  display: flex;
  align-items: center;

  &::before {
    content: "•";
    color: #ecf0f1;
    font-size: 18px; /* Small circle size */
    margin-right: 8px;
  }

  a {
    color: #ecf0f1;
    font-size: 16px;
    text-decoration: none;
    padding: 8px 15px;
    transition: color 0.3s ease;

    &:hover {
      color: #3498db;
    }
  }
`;

const SubscriptionBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  .ant-input {
    border-radius: 5px 0 0 5px;
    border: 1px solid #ddd; /* Light color for visibility */
    padding: 10px;
    font-size: 16px;
    width: 240px; /* Slightly larger width */
  }

  .ant-btn {
    border-radius: 0 5px 5px 0;
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 10px 20px; /* Increased padding */
    font-size: 16px; /* Increased font size */
    transition: background-color 0.3s ease;
    margin-left: 10px; /* Added space between input and button */

    &:hover {
      background-color: #2980b9;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #34495e;
  padding: 10px 0;
  text-align: center;

  p {
    margin: 0;
    color: #ecf0f1;
  }
`;

const MainFooter = () => {
  return (
    <Footer>
      <Container>
        <Row gutter={40}>
          <Col xs={24} md={12}>
            <FooterLogoContainer>
              <NavLink to="/">
                <FooterLogoImage preview={false} src={Logo} />
              </NavLink>
            </FooterLogoContainer>
          </Col>
          <Col xs={24} md={12}>
            <FooterNav>
              <FooterNavItem>
                <NavLink to="/privacy-policy"> Privacy Policy</NavLink>
              </FooterNavItem>
              <FooterNavItem>
                <NavLink to="/terms-of-services">Terms of Service</NavLink>
              </FooterNavItem>
              <SubscriptionBox>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  size="large"
                />
                <Button type="primary" size="large">Subscribe</Button>
              </SubscriptionBox>
            </FooterNav>
          </Col>
        </Row>
      </Container>
      <FooterBottom>
        <Row justify="center">
          <p>© 2024 Nephro Health Coach. All Rights Reserved.</p>
        </Row>
      </FooterBottom>
    </Footer>
  );
};

export default MainFooter;
