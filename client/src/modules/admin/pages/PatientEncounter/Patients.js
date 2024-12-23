// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Input, notification, DatePicker } from 'antd';
// import height from "assets/images/height.png";
// import scale from "assets/images/scale.png";
// import age from "assets/images/age.png";
// import moment from 'moment';
// import PropTypes from 'prop-types';

// const Patients = ({ onBmiCalculated }) => {
//   const [measurements, setMeasurements] = useState({
//     age: null,
//     birthdate: null,
//     weight: 10,
//     heightFeet: 5,
//     heightInches: 5,
//     heightUnit: 'Feet',
//     weightUnit: 'KG',
//   });
//   const [loading, setLoading] = useState(false);

//   // Load measurements from localStorage when the component mounts
//   useEffect(() => {
//     const savedMeasurements = JSON.parse(localStorage.getItem('measurements'));
//     if (savedMeasurements) {
//       setMeasurements({
//         ...savedMeasurements,
//         birthdate: savedMeasurements.birthdate ? moment(savedMeasurements.birthdate) : null,
//       });
//     }
//   }, []);

//   // Save measurements to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem('measurements', JSON.stringify({
//       ...measurements,
//       birthdate: measurements.birthdate ? measurements.birthdate.format() : null,
//     }));
//   }, [measurements]);

//   const handleMeasurementChange = (value, type) => {
//     if (type === 'age') {
//       const birthdate = value ? moment().subtract(value, 'years') : null;
//       setMeasurements(prevState => ({
//         ...prevState,
//         age: value,
//         birthdate, // Update birthdate dynamically if age is manually entered
//       }));
//     } else {
//       setMeasurements(prevState => ({ ...prevState, [type]: value }));
//     }
//   };

//   const handleDateChange = (date) => {
//     if (date) {
//       const age = moment().diff(date, 'years');
//       setMeasurements(prevState => ({ ...prevState, age, birthdate: date }));
//     } else {
//       setMeasurements(prevState => ({ ...prevState, birthdate: null, age: null }));
//     }
//   };

//   const calculateBmi = async () => {
//     const { age, birthdate, heightFeet, heightInches, weight, heightUnit, weightUnit } = measurements;

//     // Ensure that either age or birthdate is provided
//     if (!age && !birthdate) {
//       notification.error({
//         message: 'Missing Age or Birthdate',
//         description: 'Please provide either your age or birthdate.',
//       });
//       return;
//     }

//     if ((!heightFeet && !heightInches) || !weight) {
//       notification.error({
//         message: 'Missing Fields',
//         description: 'Please fill out all fields before calculating BMI.',
//       });
//       return;
//     }

//     if (age && (age <= 0 || age > 120)) {
//       notification.error({
//         message: 'Invalid Age',
//         description: "Please enter a valid age.",
//       });
//       return;
//     }

//     let adjustedHeight = 0;
//     let adjustedWeight = weight;

//     if (heightUnit === 'Feet') {
//       adjustedHeight = (heightFeet * 12 + heightInches) * 2.54; // Convert feet and inches to cm
//     }

//     if (weightUnit === 'LBS') {
//       adjustedWeight = weight * 0.453592;
//     }

//     const heightInMeters = adjustedHeight / 100;
//     const bmiValue = (adjustedWeight / (heightInMeters * heightInMeters)).toFixed(2);

//     // Save the entry without displaying history
//     const newEntry = { age, weight: adjustedWeight, height: adjustedHeight, bmi: bmiValue, timestamp: new Date().toLocaleString() };
//     localStorage.setItem('patientHistory', JSON.stringify([...JSON.parse(localStorage.getItem('patientHistory') || '[]'), newEntry]));

//     try {
//       setLoading(true);
//       const response = await axios.post('http://127.0.0.1:5000/save-bmi', newEntry);
//       console.log('BMI record saved:', response.data);
//     } catch (error) {
//       console.error('Error saving BMI record:', error);
//     } finally {
//       setLoading(false);
//     }

//     setTimeout(() => {
//       notification.success({
//         message: 'BMI Calculation Result',
//         description: `Your BMI is ${bmiValue}`,
//       });
//     }, 2000);

//     onBmiCalculated();
//   };

//   return (
//     <div style={{ minHeight: '100vh', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5', fontFamily: 'Arial, sans-serif' }}>
      
//       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', width: '550px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center', margin: '10px' }}>
//         <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1890ff' }}>BMI CALCULATION</h2>

//         {/* Age Input Section */}
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', width: '100%' }}>
//           <img src={age} alt="Age" style={{ width: '80px', height: 'auto', marginRight: '20px' }} />
//           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
//             <h3 style={{ fontSize: '18px', color: '#2c3e50' }}>Enter Your Age or Birthdate</h3>
//             <Input
//               type="number"
//               value={measurements.age !== null ? measurements.age : undefined}
//               onChange={e => handleMeasurementChange(parseInt(e.target.value, 10), 'age')}
//               placeholder="Enter age"
//               min={1}
//               max={120}
//               style={{ width: '80%', textAlign: 'center', marginBottom: '10px', fontSize: '16px', color: '#2c3e50' }}
//             />
//             <DatePicker
//               value={measurements.birthdate}
//               onChange={handleDateChange}
//               placeholder="Select birthdate"
//               style={{ width: '80%', textAlign: 'center', marginBottom: '10px', fontSize: '16px', color: '#2c3e50' }}
//             />
//           </div>
//         </div>

//         {/* Height Input Section */}
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', width: '100%' }}>
//           <img src={height} alt="Height" style={{ width: '80px', height: 'auto', marginRight: '20px' }} />
//           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
//             <h3 style={{ fontSize: '18px', color: '#2c3e50' }}>Enter Your Height</h3>
//             <Input
//               type="number"
//               value={measurements.heightFeet}
//               onChange={e => handleMeasurementChange(parseInt(e.target.value, 10), 'heightFeet')}
//               placeholder="Enter feet"
//               min={1}
//               max={8}
//               style={{ width: '40%', textAlign: 'center', marginBottom: '10px', fontSize: '16px', color: '#2c3e50' }}
//             />
//             <Input
//               type="number"
//               value={measurements.heightInches}
//               onChange={e => handleMeasurementChange(parseInt(e.target.value, 10), 'heightInches')}
//               placeholder="Enter inches"
//               min={0}
//               max={11}
//               style={{ width: '40%', textAlign: 'center', marginBottom: '10px', fontSize: '16px', color: '#2c3e50' }}
//             />
//             <p style={{ fontSize: '16px', color: '#2c3e50' }}>
//               {measurements.heightFeet}&apos;{measurements.heightInches}&quot;
//             </p>
//           </div>
//         </div>

//         {/* Weight Input Section */}
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', width: '100%' }}>
//           <img src={scale} alt="Weight" style={{ width: '80px', height: 'auto', marginRight: '20px' }} />
//           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
//             <h3 style={{ fontSize: '18px', color: '#2c3e50' }}>Enter Your Weight</h3>
//             <Input
//               type="number"
//               value={measurements.weight}
//               onChange={e => handleMeasurementChange(parseInt(e.target.value, 10), 'weight')}
//               placeholder="Enter weight"
//               min={1}
//               max={500}
//               style={{ width: '80%', textAlign: 'center', marginBottom: '10px', fontSize: '16px', color: '#2c3e50' }}
//             />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <Button
//           type="primary"
//           onClick={calculateBmi}
//           style={{ marginTop: '20px', fontSize: '18px', width: '50%' }}
//           loading={loading}
//         >
//           Calculate BMI
//         </Button>
//       </div>
//     </div>
//   );
// };

// // Prop validation
// Patients.propTypes = {
//   onBmiCalculated: PropTypes.func.isRequired,
// };

// export default Patients;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Input, notification, DatePicker } from 'antd';
import height from "assets/images/height.png";
import scale from "assets/images/scale.png";
import age from "assets/images/age.png";
import moment from 'moment';
import PropTypes from 'prop-types';

const Patients = ({ onBmiCalculated }) => {
  const [measurements, setMeasurements] = useState({
    age: null,
    birthdate: null,
    weight: 10,
    heightFeet: 5,
    heightInches: 5,
    heightUnit: 'Feet',
    weightUnit: 'KG',
  });
  const [loading, setLoading] = useState(false);

  // Load measurements from localStorage when the component mounts
  useEffect(() => {
    const savedMeasurements = JSON.parse(localStorage.getItem('measurements'));
    if (savedMeasurements) {
      setMeasurements({
        ...savedMeasurements,
        birthdate: savedMeasurements.birthdate ? moment(savedMeasurements.birthdate) : null, // Parse date back into moment
      });
    }
  }, []);

  // Save measurements to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('measurements', JSON.stringify({
      ...measurements,
      birthdate: measurements.birthdate ? measurements.birthdate.format() : null, // Convert moment back to string
    }));
  }, [measurements]);

  const handleMeasurementChange = (value, type) => {
    if (type === 'age') {
      const birthdate = value ? moment().subtract(value, 'years') : null;
      setMeasurements(prevState => ({
        ...prevState,
        age: value,
        birthdate, // Update birthdate dynamically if age is manually entered
      }));
    } else {
      setMeasurements(prevState => ({ ...prevState, [type]: value }));
    }
  };

  const handleDateChange = (date) => {
    if (date) {
      const age = moment().diff(date, 'years');
      setMeasurements(prevState => ({ ...prevState, age, birthdate: date }));
    } else {
      setMeasurements(prevState => ({ ...prevState, birthdate: null, age: null }));
    }
  };

  const calculateBmi = async () => {
    const { age, birthdate, heightFeet, heightInches, weight, heightUnit, weightUnit } = measurements;

    // Ensure that either age or birthdate is provided
    if (!age && !birthdate) {
      notification.error({
        message: 'Missing Age or Birthdate',
        description: 'Please provide either your age or birthdate.',
      });
      return;
    }

    if ((!heightFeet && !heightInches) || !weight) {
      notification.error({
        message: 'Missing Fields',
        description: 'Please fill out all fields before calculating BMI.',
      });
      return;
    }

    if (age && (age <= 0 || age > 120)) {
      notification.error({
        message: 'Invalid Age',
        description: "Please enter a valid age.",
      });
      return;
    }

    let adjustedHeight = 0;
    let adjustedWeight = weight;

    if (heightUnit === 'Feet') {
      adjustedHeight = (heightFeet * 12 + heightInches) * 2.54; // Convert feet and inches to cm
    }

    if (weightUnit === 'LBS') {
      adjustedWeight = weight * 0.453592;
    }

    const heightInMeters = adjustedHeight / 100;
    const bmiValue = (adjustedWeight / (heightInMeters * heightInMeters)).toFixed(2);

    // Save the entry without displaying history
    const newEntry = { age, weight: adjustedWeight, height: adjustedHeight, bmi: bmiValue, timestamp: new Date().toLocaleString() };
    localStorage.setItem('patientHistory', JSON.stringify([...JSON.parse(localStorage.getItem('patientHistory') || '[]'), newEntry]));

    try {
      setLoading(true);
      const response = await axios.post('http://127.0.0.1:5000/save-bmi', newEntry);
      console.log('BMI record saved:', response.data);
    } catch (error) {
      console.error('Error saving BMI record:', error);
    } finally {
      setLoading(false);
    }

    setTimeout(() => {
      notification.success({
        message: 'BMI Calculation Result',
        description: `Your BMI is ${bmiValue}`,
      });
    }, 2000);

    onBmiCalculated();
  };

  return (
    <div style={{ minHeight: '100vh', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5', fontFamily: 'Arial, sans-serif' }}>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', width: '550px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center', margin: '10px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1890ff' }}>BMI CALCULATION</h2>

        {/* Age Input Section */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', width: '100%' }}>
          <img src={age} alt="Age" style={{ width: '80px', height: 'auto', marginRight: '20px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <h3 style={{ fontSize: '18px', color: '#2c3e50' }}>Enter Your Age or Birthdate</h3>
            <Input
              type="number"
              value={measurements.age !== null ? measurements.age : undefined}
              onChange={e => handleMeasurementChange(parseInt(e.target.value, 10), 'age')}
              placeholder="Enter age"
              min={1}
              max={120}
              style={{ width: '80%', textAlign: 'center', marginBottom: '10px', fontSize: '16px', color: '#2c3e50' }}
            />
            <DatePicker
              value={measurements.birthdate}
              onChange={handleDateChange}
              placeholder="Select birthdate"
              style={{ width: '80%', textAlign: 'center', marginBottom: '10px', fontSize: '16px', color: '#2c3e50' }}
            />
          </div>
        </div>

        {/* Height Input Section */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', width: '100%' }}>
          <img src={height} alt="Height" style={{ width: '80px', height: 'auto', marginRight: '20px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <h3 style={{ fontSize: '18px', color: '#2c3e50' }}>Enter Your Height</h3>
            <Input
              type="number"
              value={measurements.heightFeet}
              onChange={e => handleMeasurementChange(parseInt(e.target.value, 10), 'heightFeet')}
              placeholder="Enter feet"
              min={1}
              max={8}
              style={{ width: '40%', textAlign: 'center', marginBottom: '10px', fontSize: '16px', color: '#2c3e50' }}
            />
            <Input
              type="number"
              value={measurements.heightInches}
              onChange={e => handleMeasurementChange(parseInt(e.target.value, 10), 'heightInches')}
              placeholder="Enter inches"
              min={0}
              max={11}
              style={{ width: '40%', textAlign: 'center', marginBottom: '10px', fontSize: '16px', color: '#2c3e50' }}
            />
            <p style={{ fontSize: '16px', color: '#2c3e50' }}>
              {measurements.heightFeet}&apos;{measurements.heightInches}&quot;
            </p>
          </div>
        </div>

        {/* Weight Input Section */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', width: '100%' }}>
          <img src={scale} alt="Weight" style={{ width: '80px', height: 'auto', marginRight: '20px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <h3 style={{ fontSize: '18px', color: '#2c3e50' }}>Enter Your Weight</h3>
            <Input
              type="number"
              value={measurements.weight}
              onChange={e => handleMeasurementChange(parseInt(e.target.value, 10), 'weight')}
              placeholder="Enter weight"
              min={1}
              max={500}
              style={{ width: '80%', textAlign: 'center', marginBottom: '10px', fontSize: '16px', color: '#2c3e50' }}
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="primary"
          onClick={calculateBmi}
          style={{ marginTop: '20px', fontSize: '18px', width: '50%' }}
          loading={loading}
        >
          Calculate BMI
        </Button>
      </div>
    </div>
  );
};

// Prop validation
Patients.propTypes = {
  onBmiCalculated: PropTypes.func.isRequired,
};

export default Patients;
