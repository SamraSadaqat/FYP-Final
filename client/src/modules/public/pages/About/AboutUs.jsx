import React from 'react';
import About from 'assets/images/About.png';

const AboutUs = () => {
    // Styles for the main page container
    const pageContainerStyle = {
        backgroundColor: '#f5f5dc', // Background color for the entire page
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column', // Stack sections vertically
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
        flexDirection: 'row', // Side-by-side layout for content and image
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '20px 0', // Space between sections
        padding: '30px', // Padding inside the container
        borderRadius: '20px', // Rounded corners
        backgroundColor: '#2c3e50',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        color: '#ffffff', // Text color
        position: 'relative',
        zIndex: 1, // Ensure the container is above the shapes
        border: '1px solid #e0e0e0', // Subtle border for a cleaner look
    };

    const contentStyle = {
        flex: 1,
        paddingRight: '20px',
    };

    const titleStyle = {
        fontSize: '30px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#f5f5dc',
    };

    const subtitleStyle = {
        fontSize: '22px',
        marginBottom: '15px',
        color: '#f5f5dc',
    };

    const paragraphStyle = {
        fontSize: '16px',
        marginBottom: '20px',
        textAlign: 'justify',
    };

    const imageStyle = {
        width: '40%', // Adjust image size relative to parent container
        height: 'auto',
        
    };

    return (
        <div style={pageContainerStyle}>
            {/* Symmetrical shapes */}
            <div style={topLeftShapeStyle}></div>
            <div style={bottomRightShapeStyle}></div>

            {/* First Section */}
            <div style={sectionContainerStyle}>
                <div style={contentStyle}>
                    <h1 style={titleStyle}>About Us</h1>
                    <h2 style={subtitleStyle}>Who We Are?</h2>
                    <p style={paragraphStyle}>
                        Filling the Gap in CKD Management, The NephroHealth Coach App was developed to address this critical gap. Unlike existing applications that often provide limited functionality, our app offers a holistic solution tailored specifically for CKD patients. We understand that managing CKD requires more than just tracking symptoms or lab results—it involves making informed lifestyle changes, adhering to personalized diet plans, and understanding the nuances of one’s health journey. That’s why we’ve built an app that goes beyond basic health tracking to provide a full suite of features designed to meet the specific needs of CKD patients.
                    </p>
                </div>
                <img src={About} alt="Our Team" style={imageStyle} />
            </div>
        </div>
    );
};

export default AboutUs;
