import React from 'react';
import insurance from 'assets/images/insurance.png';

const Purpose = () => {
    // Styles for the main page container
    const pageContainerStyle = {
        backgroundColor: '#f5f5dc', // Match the background color of the AboutUs component
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '20px',
    };

    // Adding shapes (optional, to add a nice background effect)
    const shapeStyle = {
        position: 'absolute',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
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

    // Container style for each section
    const sectionContainerStyle = {
        width: '100%',
        maxWidth: '1200px', // Maximum width for large screens
        display: 'flex',
        flexDirection: 'row', // Side-by-side layout
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '20px 0', // Space between sections
        padding: '30px', // Padding inside the container
        borderRadius: '20px', // Rounded corners
        backgroundColor: '#2c3e50',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        color: '#f5f5dc', // Text color adjusted to match the AboutUs component
        position: 'relative',
        zIndex: 1, // Ensure the container is above the shapes
        border: '1px solid #e0e0e0', // Subtle border for a cleaner look
        backgroundSize: 'contain',
        flexWrap: 'wrap', // Allow wrapping for smaller screens
    };

    const contentStyle = {
        flex: 1,
        paddingRight: '20px',
        display: 'flex',
        flexDirection: 'column', // Column layout for text content
    };

    const titleStyle = {
        fontSize: '30px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#f5f5dc', // Title color matching AboutUs component
    };

    const paragraphStyle = {
        fontSize: '16px',
        marginBottom: '20px',
        textAlign: 'justify',
        color: '#ffffff', // Paragraph text color matching AboutUs component
    };

    const imageStyle = {
        width: '100%',
        maxWidth: '400px', // Ensures the image doesn’t get too large
        height: 'auto',
    };

    return (
        <div style={pageContainerStyle}>
            {/* Symmetrical shapes */}
            <div style={topLeftShapeStyle}></div>
            <div style={bottomRightShapeStyle}></div>

            <div style={sectionContainerStyle}>
                {/* Text content on the left */}
                <div style={contentStyle}>
                    <h2 style={titleStyle}>OUR MISSION</h2>
                    <p style={paragraphStyle}>
                        Our mission is to revolutionize the way Chronic Kidney Disease is managed by providing an all-in-one platform that addresses the unique needs of CKD patients. We are committed to:
                        Supporting Lifestyle Changes: Providing practical tools such as BMI calculators, personalized diet plans, and stress management techniques that make it easier for users to adopt and maintain healthy habits.
                    </p>
                    <p style={paragraphStyle}>
                        Enhancing Patient Outcomes: By combining medical tracking with lifestyle support, our app aims to improve the overall quality of life for CKD patients, reducing complications and enhancing long-term health outcomes.
                    </p>
                </div>

                {/* Image on the right */}
                <img src={insurance} alt="Our Purpose" style={imageStyle} />
            </div>
        </div>
    );
};

export default Purpose;
