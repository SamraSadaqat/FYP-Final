import React from 'react';
import { Col, Image, Row } from 'antd';
// import user from 'assets/images/user.png'; // Ensure this image is relevant for the single card
import kin1 from "assets/images/kin1.jpeg";
import kidney2 from "assets/images/kidney2.jpg";
import kid4 from "assets/images/kid4.jpg";
import Blogdisease from "assets/images/Blogdisease.png";

const AvailableCourt = () => {
    // Page container style
    const pageContainerStyle = {
        backgroundColor: '#2c3e50',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '20px',
        width: '100%',
    };

    // Title style
    const titleStyle = {
        fontSize: '36px',
        fontWeight: 'bold',
        marginBottom: '30px',
        color: '#f5f5dc',
        textAlign: 'center',
    };

    // Card item style
    const cardColStyle = {
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f8f9fa',
        transition: 'transform 0.3s',
        padding: '0 10px',
        textAlign: 'center',
        maxWidth: '300px', // Adjusted width of the card
        height: '200px', // Adjusted height of the card
        margin: '10px', // Space between cards
    };

    // Card content style
    const cardContentStyle = {
        padding: '20px',
        textAlign: 'center',
        fontSize: '16px',
    };

    // Image style
    const imageStyle = {
        width: '100%',
        height: '100px', // Adjusted image size for single card display
        // objectFit: 'cover',
        borderRadius: '15px 15px 0 0',
    };

    return (
        <div style={pageContainerStyle}>
            <div>
                <h2 style={titleStyle}>BLOGS</h2>
                <Row
                    justify="center" // Center the cards horizontally
                    gutter={[20, 20]} // Add spacing between rows and columns
                >
                    <Col
                        span={6} // Adjusted span for four cards
                        style={cardColStyle}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <a href="https://www.thinkkidneys.nhs.uk/ckd/personal-stories/" target="_blank" rel="noopener noreferrer">
                            <Image preview={false} src={kin1} style={imageStyle} />
                            <div style={cardContentStyle}>
                                <p>Personal Stories– helping others can help you too</p>
                            </div>
                        </a>
                    </Col>
                    <Col
                        span={6} // Adjusted span for four cards
                        style={cardColStyle}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <a href="https://www.reidhealth.org/blog/what-is-chronic-kidney-disease-ckd" target="_blank" rel="noopener noreferrer">
                            <Image preview={false} src={kidney2} style={imageStyle} />
                            <div style={cardContentStyle}>
                                <p>What is Chronic Kidney Disease (CKD)?</p>
                            </div>
                        </a>
                    </Col>
                    <Col
                        span={6} // Adjusted span for four cards
                        style={cardColStyle}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <a href="https://www.bookdialysis.com/en/nutrition-and-ckd?campaignid=21439066471&adgroupid=&keyword=&device=c&locationid=1011081&gad_source=1&gclid=Cj0KCQjwt4a2BhD6ARIsALgH7DppXKn2dUIeZ0ZY-Qw2gBzkfbRrEPROX544dLOK65AQFyCia9AOmQ4aAkKaEALw_wcB" target="_blank" rel="noopener noreferrer">
                            <Image preview={false} src={kid4} style={imageStyle} />
                            <div style={cardContentStyle}>
                                <p>Nutrition & Chronic Kidney Disease (CKD)</p>
                            </div>
                        </a>
                    </Col>
                    <Col
                        span={6} // Adjusted span for four cards
                        style={cardColStyle}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <a href="https://my.clevelandclinic.org/health/diseases/15096-chronic-kidney-disease" target="_blank" rel="noopener noreferrer">
                            <Image preview={false} src={Blogdisease} style={imageStyle} />
                            <div style={cardContentStyle}>
                                <p>Symptoms and Causes of (CKD)</p>
                            </div>
                        </a>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AvailableCourt;
