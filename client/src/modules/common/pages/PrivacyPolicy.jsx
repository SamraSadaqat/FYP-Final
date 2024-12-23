import React from "react";
import AuthFooter from "modules/admin/pages/Dashboard/AuthFooter";
import Header from "../components/header/Header";

const PrivacyPolicy = () => {
    // Styles for the main content
    const pageContainerStyle = {
        background: '#f5f5dc', // Beige background
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        color: '#333', // Default text color
    };

    const titleStyle = {
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#2c3e50', // Primary color for title
        textAlign: 'center',
    };

    // const subtitleStyle = {
    //     fontSize: '20px',
    //     marginBottom: '15px',
    //     color: '#34495e', // Darker subtitle color
    //     textAlign: 'center',
    // };

    const paragraphStyle = {
        fontSize: '16px',
        marginBottom: '20px',
        textAlign: 'justify',
        maxWidth: '800px', // Limit paragraph width for readability
    };

    return (
        <>
            <Header />
            <div style={pageContainerStyle}>
                <h3 style={titleStyle}>PRIVACY NOTICE Last updated May 7, 2024</h3>

                <p style={paragraphStyle}>
                    At Nephro Health Coach, we are committed to protecting the privacy and security of our users personal information.
                </p>

                <p style={paragraphStyle}>
                    When you use our app, we may collect certain types of information, including but not limited to your name, email address, medical history, and usage data. This information is used solely for the purpose of providing personalized health coaching services, improving the apps functionality, and communicating with users about their health goals. We do not share or sell your personal information to third parties without your consent.
                </p>

                <p style={paragraphStyle}>
                    We implement strict security measures to safeguard your data against unauthorized access, disclosure, alteration, or destruction. By using the Nephro Health Coach app, you agree to the terms outlined in this Privacy Policy.
                </p>

                <h3 style={titleStyle}>SUMMARY OF KEY POINTS</h3>

                <p style={paragraphStyle}>
                    At Nephro Health Coach, your privacy and security are our top priorities. We collect limited personal information, such as name, email, and medical history, solely to enhance your health coaching experience. Your data is never shared or sold to third parties without consent. We employ robust security measures to protect against unauthorized access or misuse. By using our app, you agree to our commitment to safeguarding your privacy.
                </p>
            </div>
            <AuthFooter />
        </>
    );
};

export default PrivacyPolicy;
