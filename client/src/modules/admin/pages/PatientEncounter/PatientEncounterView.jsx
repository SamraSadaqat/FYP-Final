
import { Row, Col, Steps, Button, notification } from "antd";
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from "@ant-design/icons";
import Patients from "./Patients";
import PatientsReport from "./PatientsReport";
import GfrCalculator from "./GfrCalculator";
import AuthFooter from "../Dashboard/AuthFooter";
import React, { useState, useEffect } from "react";

const PatientEncounterView = () => {
  // State to manage the current step in the Steps component
  const [currentStep, setCurrentStep] = useState(0);

  // State to track if BMI is calculated successfully
  const [bmiCalculated, setBmiCalculated] = useState(false);

  // Effect to restore the step on component mount
  useEffect(() => {
    const savedStep = localStorage.getItem("currentStep");
    if (savedStep) {
      setCurrentStep(parseInt(savedStep, 10));
    }
  }, []);

  // Effect to save the current step to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("currentStep", currentStep.toString());
  }, [currentStep]);

  // Define each step's content (starting from Patients)
  const steps = [
    {
      title: "BMI Calculator",
      content: <Patients onBmiCalculated={() => setBmiCalculated(true)} />, // Pass the callback to Patients component
      icon: <UserOutlined />,
    },
    {
      title: "Patients Report",
      content: <PatientsReport />,
      icon: <SolutionOutlined />,
    },
    {
      title: "GFR Calculator and Diet Plan",
      content: <GfrCalculator />,
      icon: <LoadingOutlined />,
    },
    {
      title: "History",
      content: <AuthFooter />,
      icon: <SmileOutlined />,
    },
  ];

  // Function to go to the next step
  const next = () => {
    if (!bmiCalculated && currentStep === 0) {
      notification.error({
        message: "BMI Calculation Incomplete",
        description: "Please complete the BMI calculation before proceeding.",
      });
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  // Function to go to the previous step
  const prev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <Row style={{ backgroundColor: "white", minHeight: "100vh", padding: "20px" }}>
      <header className="top-header" style={{ marginBottom: "20px" }}></header>
      <Col
        span={24}
        className="dashboardResultImage"
        style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px" }}
      >
        {/* Render the Steps component */}
        <Steps current={currentStep}>
          {steps.map((item, index) => (
            <Steps.Step key={index} title={item.title} icon={item.icon} />
          ))}
        </Steps>

        {/* Render the content for the current step */}
        <div className="steps-content" style={{ padding: "20px 0", backgroundColor: "white" }}>
          {steps[currentStep].content}
        </div>

        {/* Navigation buttons */}
        <div className="steps-action" style={{ marginTop: "20px" }}>
          {currentStep > 0 && (
            <Button style={{ marginRight: 8 }} onClick={prev}>
              Previous
            </Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button
              type="primary"
              onClick={next}
              disabled={currentStep === 0 && !bmiCalculated} // Disable Next button until BMI is calculated
            >
              Next
            </Button>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default PatientEncounterView;

