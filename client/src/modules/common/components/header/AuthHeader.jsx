import "./header.scss";
import { Image } from "antd";
import React from "react";
import Logo from "assets/images/nephro_health_coach-01-removebg-preview.png";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

// Styled components
const StyledHeader = styled.header`
  background-color: #2c3e50;
  padding: 8px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 4px 0; /* Reduce padding on smaller screens */
  }
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    align-items: flex-start;
  }
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const LogoImage = styled(Image)`
  height: 55px;
  width: auto;
  z-index: 1000;
`;

const NavigationContainer = styled.nav`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    overflow-x: auto; /* Allow horizontal scrolling if content overflows */
  }
`;

const MainNavigation = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack links vertically on smaller screens */
    align-items: flex-start;
    width: 100%;
  }

  li {
    margin: 0 8px;
    white-space: nowrap;

    @media (max-width: 768px) {
      margin: 4px 0; /* Reduce margin between links on smaller screens */
    }

    a {
      color: #ecf0f1;
      font-size: 13px;
      text-decoration: none;
      padding: 8px 15px;
      transition: color 0.3s ease;

      &:hover {
        color: #3498db;
      }

      @media (max-width: 768px) {
        padding: 6px 10px; /* Adjust padding on smaller screens */
      }
    }
  }
`;

const ExtraContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding-bottom: 20px; /* Reduce padding on smaller screens */
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <LogoContainer>
          <LogoImage preview={false} src={Logo} />
        </LogoContainer>

        <NavigationContainer>
          <MainNavigation>
            <li>
              <NavLink to="/user/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/user/patient-encounter">Patient Encounter</NavLink>
            </li>
            <li>
              <NavLink to="/user/excercise">Exercise Videos</NavLink>
            </li>
            <li>
              <NavLink to="/user/doctors-information">Doctors Information</NavLink>
            </li>
            <li>
              <NavLink to="/user/learning">Learning Prospects</NavLink>
            </li>
            <li>
              <NavLink to="/user/herbal-medication">Herbal Medication</NavLink>
            </li>
          </MainNavigation>
        </NavigationContainer>

        <ExtraContainer>
          <Navbar /> {/* Navbar is the hamburger menu */}
        </ExtraContainer>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
