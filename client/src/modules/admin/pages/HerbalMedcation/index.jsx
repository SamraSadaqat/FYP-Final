import React, { useState } from "react";
import { Modal, Button, Select } from "antd";
import ScrollContainer from "react-indiana-drag-scroll";
import AuthFooter from "../Dashboard/AuthFooter";

const herbalMedicationsData = [
  {
    name: "STAGE 1",
    cardSymptoms: [
      "• Elevated Creatinine.",
      "• Elevated Blood Pressure.",
      "• Proteinuria.",
    ],
    modalSymptoms: [
      "In the early stages of Chronic Kidney Disease (CKD), particularly stages 1 and 2, symptoms are often mild or even absent. However, some individuals may experience subtle signs that indicate kidney function is beginning to decline.",
      "Symptoms:",
      "• Generally, there are no noticeable symptoms.",
      "• May be detected through blood tests showing slightly elevated creatinine or urea levels.",
      "• Slightly elevated blood pressure.",
      "• Presence of protein or blood in the urine (often detected through a urine test).",
      "Herbs:",
      "• Turmeric: Can be taken to manage mild inflammation, which might be present if there’s underlying kidney damage.",
      "• Dandelion Root: Useful if there is mild fluid retention, although usually, symptoms like swelling are not prominent in Stage 1.",
      "• Ginger: Beneficial for digestive health, which can support overall wellness and reduce stress on the kidneys.",
    ],
  },
  {
    name: "STAGE 2",
    cardSymptoms: [
      "• Fatigue",
      "• Mild Swelling (Edema)",
      "• Changes in Urine",
      "• Mild Anemia",
    ],
    modalSymptoms: [
      "In the early stages of Chronic Kidney Disease (CKD), particularly stages 1 and 2, symptoms are often mild or even absent. However, some individuals may experience subtle signs that indicate kidney function is beginning to decline.",
      "SYMPTOMS",
      "• Fatigue: Due to the body’s inability to filter waste products effectively.",
      "• Mild Swelling (Edema): In the hands or feet, although this is more common in later stages.",
      "• Changes in Urine: Such as changes in frequency or color, or the presence of bubbles (indicative of protein).",
      "• Mild Anemia: Leading to tiredness or paleness, as the kidneys start to have difficulty producing erythropoietin (a hormone that stimulates red blood cell production).",
      "Herbs:",
      "• Turmeric: Continued use may help reduce inflammation and support overall health. However, its intake should be moderated to avoid potential potassium buildup.",
      "• Dandelion Root: Could be more relevant if there’s evidence of mild fluid retention or blood pressure increases. However, potassium levels should be monitored.",
      "• Ginger: Helpful in managing mild nausea or digestive issues, which can sometimes occur as kidney function begins to decline.",
    ]
  },
  {
    name: "STAGE 3",
    cardSymptoms: [
      "• Back Pain",
      "• High Blood Pressure (Hypertension)",
      "• Bone Health Issues",
      "• Mild Anemia",
      "• Swelling (Edema)",
    ],
    modalSymptoms: [
      "In Stage 3 CKD, kidney function is more significantly reduced, typically reflected by a glomerular filtration rate (GFR) of 30-59 mL/min. Symptoms start to become more noticeable, though they can still vary in intensity.",
      "Symptoms:",
      "• Fatigue: A common symptom due to the accumulation of waste products in the blood, leading to a feeling of general tiredness.",
      "• Swelling (Edema): More noticeable in the hands, feet, and ankles due to fluid retention.",
      "• Changes in Urine: Alterations in urine frequency, color, or consistency, possibly including foamy urine due to protein leakage.",
      "• Back Pain: Some patients may experience dull pain in the back, particularly in the kidney area.",
      "• Mild Anemia: Resulting from reduced production of erythropoietin, leading to symptoms like fatigue, weakness, and pale skin.",
      "• High Blood Pressure (Hypertension): Kidney disease often contributes to elevated blood pressure, which can further damage kidney function.",
      "• Bone Health Issues: Possible early signs of bone pain or weakness due to disrupted calcium and phosphorus balance.",
      "Herbs:",
      "• Astragalus: Common in traditional Chinese medicine, believed to support kidney function and protect against kidney damage.",
      "• Hawthorn: Known for cardiovascular support, including improving heart health and managing hypertension, which is crucial in CKD.",
      "• Milk Thistle: Primarily known for its liver-protective properties, but it may also have benefits for overall detoxification.",
    ],

  },
  {
    name: "STAGE 4",
    cardSymptoms: [
      "• High Blood Pressure.",
      "• Confusion or Difficulty Concentrating.",
      "• Bone Pain.",
      "• Changes in Urine Output.",
      "• Severe Swelling.",
      "• Itchy Skin",
    ],
    modalSymptoms: [
      "In Stage 4 CKD, kidney function is severely reduced, and symptoms become more pronounced and potentially debilitating.",
      "Symptoms:",
      "• Severe Fatigue: Significant tiredness and weakness due to reduced kidney function and anemia.",
      "• Severe Edema: Pronounced swelling in the legs, ankles, feet, and sometimes around the eyes and face.",
      "• Persistent Nausea and Vomiting: Accumulation of toxins in the blood can lead to significant digestive discomfort.",
      "• Loss of Appetite: Marked decrease in appetite, often leading to weight loss.",
      "• Difficulty Breathing: Fluid buildup can cause pulmonary edema, leading to shortness of breath.",
      "• Itchy Skin: Due to the buildup of waste products and imbalances in electrolytes.",
      "• Confusion or Difficulty Concentrating: Cognitive issues due to the accumulation of toxins and electrolyte imbalances.",
      "• Persistent Itching: Often related to uremic pruritus from toxin accumulation.",
      "• High Blood Pressure: Usually more difficult to control, contributing to cardiovascular issues.",
      "• Changes in Urine Output: Significant decrease in urine output or very dark-colored urine.",
      "• Bone Pain: Bone disease due to imbalances in calcium and phosphorus.",
      "Herbs:",
      "• Ginkgo Biloba: Sometimes used for cognitive support and improving memory.",
      "• Cranberry: Often recommended for urinary tract health and preventing infections.",
      "• Corn Silk: Traditionally used for urinary health and to soothe the urinary tract.",
    ],
  },
  {
    name: "STAGE 5",
    cardSymptoms: [
      "• Severe Fatigue.",
      "• Persistent Swelling.",
      "• Severe Nausea and Vomiting.",
      "• Loss of Appetite.",
      "• Severe Itchy Skin.",
      "• Difficulty in Breathing.",
    ],
    modalSymptoms: [
      "At Stage 5 CKD, the kidneys have lost nearly all their functionality, and patients often require dialysis or a kidney transplant.",
      "Symptoms:",
      "• Severe Fatigue: Extreme tiredness due to the body’s inability to filter toxins effectively.",
      "• Persistent Edema: Significant swelling in the legs, arms, and face due to fluid retention.",
      "• Severe Nausea and Vomiting: Persistent digestive discomfort caused by toxin buildup.",
      "• Loss of Appetite: Marked decrease in appetite, leading to potential malnutrition.",
      "• Difficulty Breathing: Pulmonary edema or fluid in the lungs causing shortness of breath.",
      "• Severe Itchy Skin: Uremic pruritus from the buildup of waste products.",
      "• Mental Confusion: Cognitive difficulties or delirium due to high toxin levels and electrolyte imbalances.",
      "• Bone Pain: Due to imbalances in calcium and phosphorus, which can lead to bone disease.",
      "• Changes in Urine Output: Very low urine output or no urine production at all.",
      "• Difficulty Sleeping: Problems with sleep due to discomfort and other symptoms.",
      "Herbs:",
      "At Stage 5 CKD, herbal medications should be used with extreme caution, if at all. The risk of adverse effects is high due to the critically reduced kidney function. Here’s a look at how specific herbs might be used and their considerations:",
      "• Marshmallow Root: Known for its anti-inflammatory and soothing properties, often used to relieve irritation and inflammation in mucous membranes.",
      "• Nettle Leaf: Often used for its anti-inflammatory properties and to support general health.",
      "• Chamomile: Known for its calming effects and ability to help with sleep disturbances and digestive issues.",
    ],

  },
];

const { Option } = Select;

const HerbalMedication = () => {
  const [welcomeModalVisible, setWelcomeModalVisible] = useState(true);
  const [selectedHerb, setSelectedHerb] = useState(null);
  const [moreModalVisible, setMoreModalVisible] = useState(false);

  const [selectedStage, setSelectedStage] = useState(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const handleWelcomeModalClose = () => {
    setWelcomeModalVisible(false);
  };

  const showMoreModal = (herb) => {
    console.log("Selected Herb:", herb); // Debugging line
    setSelectedHerb(herb);
    setMoreModalVisible(true);
  };

  const handleMoreModalClose = () => {
    setMoreModalVisible(false);
    setSelectedHerb(null); // Clear selected herb when closing modal
  };

  const handleStageChange = (value) => {
    // Handle 'Select All Stages' option
    if (value === 'all') {
      setSelectedStage(null); // Display all stages
    } else {
      setSelectedStage(value);
    }
  };

  const handleSymptomChange = (value) => {
    setSelectedSymptoms(value);
  };

  const filterHerbalMedications = (data) => {
    return data.filter((herb) => {
      const matchesStage = selectedStage ? herb.name === selectedStage : true;
      const matchesSymptoms = selectedSymptoms.length > 0 
        ? herb.cardSymptoms.some(symptom => selectedSymptoms.includes(symptom)) 
        : true;

      return matchesStage && matchesSymptoms;
    });
  };
  const pageContainerStyle = {
    background: "#F5F5DC",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    padding: "20px",
  };

  const containerStyle = {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px",
    // borderRadius: "20px",
    backgroundColor: "##F5F5DC",
    // boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    position: "relative",
    zIndex: "1",
    // border: "1px solid #e0e0e0",
    // backgroundImage: 'url("https://www.transparenttextures.com/patterns/diamond-upholstery.png")',
    backgroundSize: "contain",
  };

  const titleStyle = {
    fontSize: "50px",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#2c3e50",
    textAlign: "center",
  };

  const cardsWrapperStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginBottom: "30px",
  };

  const centeredCardsWrapperStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "66%",
  };

  const cardStyle = {
    marginBottom: '20px',
    padding: '30px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  }

  const cardTitleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#34495e",
    textAlign: "center",
  };

  const buttonStyle = {
    marginTop: "20px",
    width: "100%",
    backgroundColor: "#3498db",
    color: "#fff",
    borderRadius: "5px",
    padding: "10px",
    textAlign: "center",
    cursor: "pointer",
    alignSelf: 'flex-end',
  };

  const modalContentStyle = {
    maxWidth: "1000px",
    width: "100%",
    margin: "0 auto", // Center align the modal content
    background: "linear-gradient(135deg, #d0e1ff 0%, #e0f4ff 100%)", // Apply gradient background
    padding: "20px", // Add some padding for better spacing
    borderRadius: "15px", // Match the card border radius
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add a subtle shadow for depth
    border: "1px solid #e0e0e0", // Light border for better definition
  };


  const filterContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '490px', // Space between the filters
    marginBottom: '20px',
  };

  return (
    <>
      <div style={pageContainerStyle}>
        <div style={containerStyle}>
          <h3 style={titleStyle}>HERBAL MEDICATION</h3>

          {/* Filters */}
          <div style={filterContainerStyle}>
            <Select
              placeholder="Select Stage"
              style={{ width: 200 }}
              onChange={handleStageChange}
              allowClear
            >
              <Option value="all">Select All Stages</Option>
              {herbalMedicationsData.map((herb) => (
                <Option key={herb.name} value={herb.name}>
                  {herb.name}
                </Option>
              ))}
            </Select>

            <Select
              mode="multiple"
              placeholder="Select Symptoms"
              style={{ width: 400 }}
              onChange={handleSymptomChange}
              allowClear
            >
              {Array.from(new Set(herbalMedicationsData.flatMap(herb => herb.cardSymptoms))).map(symptom => (
                <Option key={symptom} value={symptom}>
                  {symptom}
                </Option>
              ))}
            </Select>
          </div>

          <ScrollContainer className="scroll-container">
            <div style={cardsWrapperStyle}>
              {filterHerbalMedications(herbalMedicationsData.slice(0, 3)).map((herb, index) => (
                <div key={index} style={cardStyle}>
                  <h4 style={cardTitleStyle}>{herb.name}</h4>
                  <div>
                    <h4>Symptoms</h4>
                    {herb.cardSymptoms.map((symptom, i) => (
                      <p key={i}>{symptom}</p>
                    ))}
                  </div>
                  <div style={buttonStyle} onClick={() => showMoreModal(herb)}>
                    More
                  </div>
                </div>
              ))}
            </div>

            <div style={centeredCardsWrapperStyle}>
              {filterHerbalMedications(herbalMedicationsData.slice(3)).map((herb, index) => (
                <div key={index} style={cardStyle}>
                  <h4 style={cardTitleStyle}>{herb.name}</h4>
                  <div>
                    <h4>Symptoms</h4>
                    {herb.cardSymptoms.map((symptom, i) => (
                      <p key={i}>{symptom}</p>
                    ))}
                  </div>
                  <div style={buttonStyle} onClick={() => showMoreModal(herb)}>
                    More
                  </div>
                </div>
              ))}
            </div>
          </ScrollContainer>
        </div>
      </div>
      <AuthFooter />

      {/* Welcome Modal */}
      <Modal
        title="CAUTION!!!"
        visible={welcomeModalVisible}
        centered
        footer={[
          <Button key="proceed" type="primary" onClick={handleWelcomeModalClose}>
            Got it
          </Button>,
        ]}
        closable={false}
      >
        <p>
          Remember to consult your physician before taking any herbal medications. 
          While natural remedies can be beneficial, they can also cause adverse effects, 
          interact with other medications, or worsen underlying health conditions. 
        </p>
      </Modal>

      {/* More Info Modal */}
      <Modal
        title={selectedHerb ? selectedHerb.name : ""}
        visible={moreModalVisible}
        onCancel={handleMoreModalClose}
        footer={[
          <Button key="close" onClick={handleMoreModalClose}>
            Close
          </Button>,
        ]}
        bodyStyle={modalContentStyle} // Apply the inline style here
        width="80%" // Set modal width to 80%
      >
        {selectedHerb ? (
          <>
            <h4>Symptoms Details:</h4>
            {selectedHerb.modalSymptoms.map((symptom, i) => (
              <p key={i}>{symptom}</p>
            ))}
          </>
        ) : (
          <p>No details available.</p> // Handle case when selectedHerb is null
        )}
      </Modal>
    </>
  );
};

export default HerbalMedication;
