import React from 'react';
import timee from 'assets/images/timee.png';
import convenience from 'assets/images/convenience.png';
import user from 'assets/images/user.png';

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: '#2c3e50',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#ecf0f1',
  },
  subtitle: {
    fontSize: '18px',
    color: '#bdc3c7',
    marginBottom: '40px',
  },
  iconsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  iconWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '150px',
    marginBottom: '20px',
  },
  iconCircle: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: '#3498db',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '15px',
    overflow: 'hidden',
  },
  iconImage: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
  },
  iconText: {
    fontSize: '16px',
    color: '#ecf0f1',
    textAlign: 'center',
  },
};

const ServiceComponent = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Quality Care the Moment You Need It!</h2>
      <p style={styles.subtitle}>
        Get easy access to comprehensive kidney care, all under one roof.
      </p>
      <div style={styles.iconsContainer}>
        <div style={styles.iconWrapper}>
          <div style={styles.iconCircle}>
            <img
              style={styles.iconImage}
              src={user}
              alt="Icon 1"
            />
          </div>
          <p style={styles.iconText}>Patient Profiling</p>
        </div>
        <div style={styles.iconWrapper}>
          <div style={styles.iconCircle}>
            <img
              style={styles.iconImage}
              src={timee}
              alt="Icon 2"
            />
          </div>
          <p style={styles.iconText}>Short Wait Time</p>
        </div>
        <div style={styles.iconWrapper}>
          <div style={styles.iconCircle}>
            <img
              style={styles.iconImage}
              src={convenience}
              alt="Icon 3"
            />
          </div>
          <p style={styles.iconText}>Convenience</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
