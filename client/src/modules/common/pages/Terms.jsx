import React from "react";
import AuthFooter from "modules/admin/pages/Dashboard/AuthFooter";
import Header from "../components/header/Header";

const Terms = () => {
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
        textAlign: 'left',
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

    const listStyle = {
        fontSize: '16px',
        marginBottom: '20px',
        paddingLeft: '20px',
        maxWidth: '800px', // Limit list width for readability
    };

    return (
        <>
            <Header />
            <div style={pageContainerStyle}>
                <h3 style={titleStyle}>1. Website Terms and Conditions of Use</h3>

                <p style={paragraphStyle}>
                    By accessing this Website, accessible from NephroHealthCoach.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trademark law.
                </p>

                <h3 style={titleStyle}>2. Terms and Conditions</h3>
                <p style={paragraphStyle}>
                    By accessing and using the Nephro Health Coach app, you agree to abide by the following terms and conditions. The app is intended for informational and educational purposes only and should not be used as a substitute for professional medical advice or treatment. Users are responsible for providing accurate and up-to-date information about their health status and following any recommendations provided by the app. Nephro Health Coach is not liable for any damages or losses arising from the use of the app or reliance on its content. We reserve the right to modify or discontinue the app at any time without prior notice. Any disputes or claims arising from the use of the app shall be resolved through binding arbitration in accordance with the laws of Pakistan.
                </p>

                <h3 style={titleStyle}>3. Restrictions</h3>
                <ul style={listStyle}>
                    <li>Use the materials for any commercial purpose or for any public display;</li>
                    <li>Attempt to reverse engineer any software contained on Nephro Health Coachs Website;</li>
                    <li>Remove any copyright or other proprietary notations from the materials;</li>
                    <li>Transfer the materials to another person or mirror the materials on any other server.</li>
                </ul>

                <p style={paragraphStyle}>
                    This will let Nephro Health Coach terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.
                </p>

                <h3 style={titleStyle}>4. Disclaimer</h3>
                <p style={paragraphStyle}>
                    Nephro Health Coach disclaims any responsibility for providing medical advice or treatment to individuals in the last stages of CKD and shall not be held liable for any consequences arising from the use of the app by such individuals. Users with advanced CKD are encouraged to consult their healthcare providers for personalized care and support.
                </p>
            </div>
            <AuthFooter />
        </>
    );
};

export default Terms;
