// import React from 'react';

// const PatientNavigation = () => {
//   const buttonStyle = {
//     backgroundColor: 'white', // Button color
//     color: '#2c3e50',
//     border: 'none',
//     borderRadius: '5px',
//     padding: '20px',
//     margin: '10px',
//     fontSize: '18px',
//     cursor: 'pointer',
//     width: '200px',
//     height: '100px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     transition: 'background-color 0.3s ease, transform 0.3s ease',
//     marginTop: '150px',
//     marginBottom: '100px',
//   };

//   const buttonHoverStyle = {
//     backgroundColor: 'beige', // Background color on hover
//     transform: 'scale(1.05)',  // Slightly enlarge the button on hover
//   };

//   const handleClick = (section) => {
//     console.log(`Navigating to ${section}`);
//     // Add your navigation logic here
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
//       <button
//         style={buttonStyle}
//         onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
//         onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
//         onClick={() => handleClick('Patient Input')}
//       >
//         <h2>Patient Input</h2>
//       </button>
//       <button
//         style={buttonStyle}
//         onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
//         onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
//         onClick={() => handleClick('Patient History')}
//       >
//         <h2>Patient History</h2>
//       </button>
//     </div>
//   );
// };

// export default PatientNavigation;
import React from 'react';

const PatientNavigation = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    height: '100vh', // Full viewport height
    backgroundColor: 'white', // Page background color
    margin: 0,
    padding: 0,
  };

  const buttonStyle = {
    backgroundColor: 'white', // Button color
    color: '#2c3e50',
    border: '2px solid #2c3e50', // Border to enhance visibility
    borderRadius: '8px', // Slightly larger border radius for a modern look
    padding: '20px',
    margin: '10px',
    marginTop: '150px',
    fontSize: '18px',
    cursor: 'pointer',
    width: '200px',
    height: '130px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  };

  const handleClick = (section) => {
    console.log(`Navigating to ${section}`);
    // Add your navigation logic here
  };

  return (
    <div style={containerStyle}>
      <button
        style={buttonStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'beige'; // Change background color on hover
          e.currentTarget.style.borderColor = '#d1a80a'; // Change border color on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'white'; // Reset background color on leave
          e.currentTarget.style.borderColor = '#2c3e50'; // Reset border color on leave
        }}
        onClick={() => handleClick('Patient Input')}
      >
        <h2 style={{ margin: 0 }}>Patient Input</h2>
      </button>
      <button
        style={buttonStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'beige'; // Change background color on hover
          e.currentTarget.style.borderColor = '#d1a80a'; // Change border color on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'white'; // Reset background color on leave
          e.currentTarget.style.borderColor = '#2c3e50'; // Reset border color on leave
        }}
        onClick={() => handleClick('Patient History')}
      >
        <h2 style={{ margin: 0 }}>Patient History</h2>
      </button>
    </div>
  );
};

export default PatientNavigation;
