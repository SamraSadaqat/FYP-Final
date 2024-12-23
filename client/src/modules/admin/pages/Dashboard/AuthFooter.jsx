import { Image } from "antd";
import React from "react";
import Logo from "assets/images/nephro_health_coach-01-removebg-preview.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Styled components for Footer
const StyledFooter = styled.footer`
  background-color: #2c3e50;
  padding: 8px 0; /* Compact padding, similar to the header */
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
`;

const FooterContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterLogoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const FooterLogoImage = styled(Image)`
  height: 45px; /* Same logo height as header */
  width: auto;
`;

const FooterNav = styled.nav`
  flex: 3; /* Same flex structure as header */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterNavigation = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 0 20px; /* Same spacing as header */
    white-space: nowrap;

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
  }
`;

const FooterBottom = styled.div`
 background-color: #2c3e50; // Same background color as StyledFooter
  border-top: 1px solid #34495e; 
  padding: 5px 0; 
  text-align: center;
  color: #ecf0f1;
  font-size: 14px;
  margin-top: 0; 
  `;

const AuthFooter = () => {
  return (
    <>
      <StyledFooter>
        <FooterContainer>
          {/* Logo section */}
          <FooterLogoContainer>
            <NavLink to="/">
              <FooterLogoImage preview={false} src={Logo} />
            </NavLink>
          </FooterLogoContainer>

          {/* Navigation Links */}
          <FooterNav>
            <FooterNavigation>
              <li>
                <NavLink to="/privacy-policy">• Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="/terms-of-services">• Terms of Service</NavLink>
              </li>
            </FooterNavigation>
          </FooterNav>
        </FooterContainer>
      </StyledFooter>

      {/* Footer Bottom Section */}
      <FooterBottom>
        © 2024 Nephro Health Coach. All Rights Reserved.
      </FooterBottom>
    </>
  );
};

export default AuthFooter;
