import React from "react";
import { Col, Image, Row } from "antd";
import styled from "styled-components";

import exercise from "assets/images/exercise.png";
import dietplann from "assets/images/dietplann.png";
import learn from "assets/images/learn.png";
import BMIcal from "assets/images/BMIcal.png";
import doc from "assets/images/doc.png";
import remind from "assets/images/remind.png";
import time from "assets/images/time.png";
import water from "assets/images/water.png";

// Styled components
const Section = styled.section`
  background-color: #f5f5dc; /* Beige background */
  padding: 50px 0;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  background-color: #2c3e50; /* Inner container with dark background */
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1200px; /* Max width for larger screens */
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 50px;
  color: #ffffff;
`;

const SportCategoryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Four columns by default */
  gap: 30px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* Three columns for medium screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns for small screens */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* One column for extra small screens */
  }
`;

const SportCategoryItem = styled.li`
  background: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  // transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  text-align: center;
  padding: 20px;

  // &:hover {
  //   transform: translateY(-10px);
  //   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  // }
`;

const SportCategoryLink = styled.a`
  text-decoration: none;
  color: #34495e;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: default;

  &:hover {
    color: #34495e; /* Keep the text color the same on hover */
  }
`;

const CategoryName = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

const SportsCategory = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col span={24}>
            <Heading>Features</Heading>
            <SportCategoryList>
              <SportCategoryItem>
                <SportCategoryLink>
                  <Image preview={false} src={exercise} />
                  <CategoryName>Exercise Videos</CategoryName>
                </SportCategoryLink>
              </SportCategoryItem>

              <SportCategoryItem>
                <SportCategoryLink href="#/">
                  <Image preview={false} src={dietplann} />
                  <CategoryName>Diet Plan</CategoryName>
                </SportCategoryLink>
              </SportCategoryItem>

              <SportCategoryItem>
                <SportCategoryLink href="#/">
                  <Image preview={false} src={learn} />
                  <CategoryName>Learning Prospects</CategoryName>
                </SportCategoryLink>
              </SportCategoryItem>

              <SportCategoryItem>
                <SportCategoryLink href="#/">
                  <Image preview={false} src={BMIcal} />
                  <CategoryName>BMI Calculator</CategoryName>
                </SportCategoryLink>
              </SportCategoryItem>

              <SportCategoryItem>
                <SportCategoryLink href="#/">
                  <Image preview={false} src={doc} />
                  <CategoryName>Doctor Information</CategoryName>
                </SportCategoryLink>
              </SportCategoryItem>

              <SportCategoryItem>
                <SportCategoryLink href="#/">
                  <Image preview={false} src={time} />
                  <CategoryName>Alerts</CategoryName>
                </SportCategoryLink>
              </SportCategoryItem>

              <SportCategoryItem>
                <SportCategoryLink href="#/">
                  <Image preview={false} src={remind} />
                  <CategoryName>Reminders</CategoryName>
                </SportCategoryLink>
              </SportCategoryItem>

              <SportCategoryItem>
                <SportCategoryLink href="#/">
                  <Image preview={false} src={water} />
                  <CategoryName>Water Intake</CategoryName>
                </SportCategoryLink>
              </SportCategoryItem>
            </SportCategoryList>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default SportsCategory;
