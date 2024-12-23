import React from 'react';
import docpage from 'assets/images/docpage.png'; // Adjust the path based on your folder structure

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '40px 20px',
    backgroundColor: '#f5f5dc',
    // borderRadius: '8px',
    overflow: 'hidden',
  },
  svgBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  textContainer: {
    zIndex: 1,
    maxWidth: '50%',
    padding: '20px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '15px',
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#e74c3c',
    border: 'none',
    borderRadius: '5px',
    
  },
  illustration: {
    zIndex: 1,
    width: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const ServiceComponent = () => {
  return (
    <div style={styles.container}>
      <div style={styles.svgBackground}>
      <svg width="100%" height="50%" viewBox="0 0 1440 315" xmlns="http://www.w3.org/2000/svg">
  <path fill="#dceffb" fillOpacity="1" d="M0,0L0,250C480,400 960,100 1440,250L1440,0Z"></path>
      </svg>


      </div>
      <div style={styles.textContainer}>
        <h2 style={styles.title}>Where Compassion Meets Convenience</h2>
        <div style={styles.buttonContainer}>
          <button style={styles.button}>Easy to Access</button>
          <button style={styles.button}>Primary Care</button>
          <button style={styles.button}>Virtual Care</button>
        </div>
      </div>
      <div style={styles.illustration}>
        <img 
          src={docpage} 
          alt="Medical Illustration" 
          style={{ maxWidth: '100%', borderRadius: '8px' }}
        />
      </div>
    </div>
  );
};

export default ServiceComponent;
