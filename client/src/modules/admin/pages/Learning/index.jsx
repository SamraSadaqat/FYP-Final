import React from "react";
import AuthFooter from "../Dashboard/AuthFooter";
// import videoFile from "assets/images/learninggVideo.mp4";
import learninggVideo from "assets/images/learninggVideoo.mp4";

const DoctorsInformation = () => {
  return (
    <>
      <DashboardView />
      <AuthFooter />
    </>
  );
};

export default DoctorsInformation;

const DashboardView = () => {
  // Style for the page
  const pageContainerStyle = {
    backgroundColor: '#f5f5dc', // Beige background color
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column', // Allows stacking of content
    alignItems: 'center', // Center-aligns items horizontally
    justifyContent: 'flex-start', // Aligns items to the top of the page
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#2c3e50',
    fontWeight: 'bold',
    fontSize: '50px',
    marginBottom: '20px',
  };

  const subtitleStyle = {
    fontSize: '22px',
    marginBottom: '15px',
    color: '#34495e', // Darker subtitle color
    textAlign: 'center',
  };

  const paragraphStyle = {
    fontSize: '16px',
    marginBottom: '20px',
    textAlign: 'justify',
    color: '#555', // Lighter text color
    maxWidth: '800px', // Optional: limits the width for better readability
  };

  const highlightParagraphStyle = {
    fontSize: '20px',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#E74C3C', // Highlight color
  };

  return (
    <div style={pageContainerStyle}>
      <h3 style={titleStyle}>SYMPTOMS OF CKD</h3>

      {/* Video element */}
      <video
        style={{ width: '100%', borderRadius: '15px', marginBottom: '20px' }}
        controls
        autoPlay
        loop
        muted
      >
        <source src={learninggVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p style={subtitleStyle}>
        <strong>
          Chronic kidney disease (CKD) is a gradual loss of kidney function over time. The symptoms may not be noticeable in the early stages but tend to become more apparent as the disease progresses. Here are some common symptoms associated with CKD:
        </strong>
      </p>

      <h3 style={subtitleStyle}><strong>Early Stages</strong></h3>
      <p style={paragraphStyle}><strong>• Fatigue: </strong>Feeling tired or having less energy.</p>
      <p style={paragraphStyle}><strong>• Difficulty concentrating: </strong>Experiencing trouble focusing on tasks.</p>
      <p style={paragraphStyle}><strong>• Poor appetite: </strong>Reduced desire to eat.</p>
      <p style={paragraphStyle}><strong>• Trouble sleeping: </strong>Insomnia or other sleep disturbances.</p>
      <p style={paragraphStyle}><strong>• Muscle cramping: </strong>Especially in the legs.</p>

      <h3 style={subtitleStyle}><strong>Intermediate Stages</strong></h3>
      <p style={paragraphStyle}><strong>• Swelling (edema): </strong>Particularly in the ankles, feet, and hands due to fluid retention.</p>
      <p style={paragraphStyle}><strong>• Changes in urine output: </strong>Increased or decreased frequency, dark urine, or presence of blood.</p>
      <p style={paragraphStyle}><strong>• Foamy urine: </strong>Excessive bubbles in urine, indicating protein leakage.</p>
      <p style={paragraphStyle}><strong>• Persistent itching: </strong>Resulting from the buildup of waste products in the blood.</p>

      <h3 style={subtitleStyle}><strong>Advanced Stages</strong></h3>
      <p style={paragraphStyle}><strong>• Nausea and vomiting: </strong>Due to waste buildup in the body.</p>
      <p style={paragraphStyle}><strong>• Loss of appetite: </strong>Leading to weight loss.</p>
      <p style={paragraphStyle}><strong>• Shortness of breath: </strong>Fluid buildup in the lungs or anemia.</p>
      <p style={paragraphStyle}><strong>• High blood pressure (hypertension): </strong>Difficult to control even with medication.</p>
      <p style={paragraphStyle}><strong>• Chest pain: </strong>If fluid builds up around the lining of the heart.</p>
      <p style={paragraphStyle}><strong>• Muscle twitches and cramps: </strong>Especially at night.</p>
      <p style={paragraphStyle}><strong>• Metallic taste in mouth: </strong>Due to toxins in the bloodstream.</p>
      <p style={paragraphStyle}><strong>• Ammonia breath: </strong>Breath may have an ammonia or urine-like smell.</p>
      <p style={paragraphStyle}><strong>• Decreased mental sharpness: </strong>Confusion or difficulty thinking clearly.</p>

      <p style={highlightParagraphStyle}>
        <strong>It is essential to consult a healthcare professional if any of these symptoms are present, especially if there are known risk factors for CKD such as diabetes, hypertension, or a family history of kidney disease. Early detection and management are crucial to slowing the progression of the disease.</strong>
      </p>
    </div>
  );
};
