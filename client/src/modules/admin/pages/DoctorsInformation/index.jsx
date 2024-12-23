// // // // import React, { useState, useMemo } from "react";
// // // // import AuthFooter from "modules/admin/pages/Dashboard/AuthFooter";

// // // // const doctorsData = [

// // // //   {
// // // //     name: "Dr. Anita Haroon",
// // // //     qualifications: "MBBS, MRCP (UK), FCPS (Nephrology)",
// // // //     experience: "11+ years",
// // // //     hospital: "Ziauddin Hospital",
// // // //     fees: 1650,
// // // //     description:
// // // //       "Dr. Anita Haroon is a highly respected nephrologist with more than 11 years of experience in diagnosing and treating kidney-related conditions. With a deep commitment to patient care and a robust educational background, Dr. Haroon has established herself as a leading expert in nephrology. Her practice is dedicated to improving the quality of life for patients suffering from kidney diseases, offering comprehensive care and advanced treatments tailored to each individual's needs.",
// // // //   },
// // // //   {
// // // //     name: "Dr. Syed Mansoor Ahmed Shah",
// // // //     qualifications: "MBBS, MRCP (UK)",
// // // //     experience: "27 years",
// // // //     hospital: "South City Hospital, AKUH Consulting Clinic",
// // // //     fees: 1000,
// // // //     description:
// // // //       "Dr. Syed Mansoor Ahmed Shah is a highly experienced nephrologist with 27 years of dedicated service in the field of kidney care. Renowned for his clinical expertise and compassionate patient care, Dr. Shah has established himself as a leading expert in nephrology, specializing in the diagnosis and treatment of complex kidney disorders.",
// // // //   },
// // // //   {
// // // //     name: "Dr. Moin Ahmed Qureshi",
// // // //     qualifications: "MBBS, FCPS, MCPS",
// // // //     experience: "10+ years",
// // // //     hospital: "Jamal Noor Hospital",
// // // //     fees: 1200,
// // // //     description:
// // // //       "Dr. Moin Ahmed Qureshi is a highly skilled nephrologist with over 10 years of experience in providing comprehensive care for patients with kidney disorders. His commitment to excellence in patient care, combined with his extensive training, has made him a trusted expert in nephrology. Dr. Qureshi specializes in diagnosing and treating a wide range of kidney-related conditions, ensuring that his patients receive the highest quality of care.",
// // // //   },
// // // //   {
// // // //     name: "Dr. Salman Imtiaz",
// // // //     qualifications: "MBBS, FCPS",
// // // //     experience: "14 years",
// // // //     hospital: "The Kidney Centre, 197/9, Rafiqui Shaheed Road, Askari 3, Cantt, Karachi",
// // // //     fees: 1000,
// // // //     description:
// // // //       "Dr. Salman Imtiaz is a highly experienced nephrologist specializing in kidney health and related conditions. With over 14 years of dedicated service in the field, Dr. Imtiaz is recognized for his expertise in diagnosing and treating a wide range of kidney disorders. His commitment to providing comprehensive, patient-centered care has made him a respected figure in the medical community, especially in nephrology and hypertension management. Dr. Salman Imtiaz specializes in a broad spectrum of kidney-related conditions and treatments, including Blood Pressure Management, Metabolic Abnormalities, Renal Artery Stenosis, Kidney Stones, Kidney Infections, Nephrotic Syndrome, End-Stage Kidney Disease, Swelling (Edema), Kidney Biopsy, Peritoneal Dialysis, Kidney Transplant, and Kidney Cancer.",
// // // //   },
// // // //   {
// // // //     name: "Dr. Mehwish Qamar",
// // // //     qualifications: "MBBS, FCPS (Nephrology)",
// // // //     experience: "12 years",
// // // //     hospital: "Anum Hospital, Malir, Karachi",
// // // //     fees: 700,
// // // //     description:
// // // //       "Dr. Mehwish Qamar is dedicated to providing compassionate and personalized care to her patients, focusing on improving outcomes and enhancing quality of life for those affected by kidney diseases. She believes in building strong doctor-patient relationships based on trust, empathy, and open communication. By taking the time to understand each patient’s unique circumstances, Dr. Qamar develops personalized treatment plans that address their specific needs and goals.",
// // // //   },
// // // //   {
// // // //     name: "Dr. Aijaz Ahmed",
// // // //     qualifications: "MBBS, FCPS (Nephrology)",
// // // //     experience: "13 years",
// // // //     hospital: "Anum Hospital, Malir, Karachi",
// // // //     fees: 700 - 1500,
// // // //     description:
// // // //       "Dr. Aijaz Ahmed is a highly experienced nephrologist specializing in kidney health and management of related conditions. With 13 years of dedicated service, Dr. Ahmed is known for his expertise in nephrology and commitment to providing comprehensive patient care. His clinical acumen and compassionate approach have earned him a reputation as a trusted specialist in the field of nephrology. Dr. Aijaz Ahmed specializes in General Nephrology, Hypertension, and Kidney Transplant Management.",
// // // //   },
// // // //   {
// // // //     name: "Dr. Santosh Kumar",
// // // //     qualifications: "FCPS (Nephrology)",
// // // //     experience: "8 years",
// // // //     hospital: "Anklesaria Hospital, Saddar",
// // // //     fees: 1500,
// // // //     description:
// // // //       "Dr. Santosh Kumar is a skilled nephrologist with 8 years of experience specializing in general nephrology. He holds an FCPS in Nephrology, showcasing his advanced training and expertise in managing kidney-related conditions.",
// // // //   },
// // // //   {
// // // //     name: "Prof. Dr. Waqar Hussain Kazmi",
// // // //     qualifications: "MS",
// // // //     experience: "46 years",
// // // //     hospital: "Hill Park General Hospital, PECHS",
// // // //     fees: 3000,
// // // //     description:
// // // //       "Prof. Dr. Waqar Hussain Kazmi is a distinguished nephrologist with an extensive career spanning 46 years. With a Master of Surgery (MS) degree, he brings a wealth of expertise to the field of nephrology. His profound experience and dedication to patient care have established him as a leading specialist in both diabetology and general nephrology.",
// // // //   },
// // // //   {
// // // //     name: "Dr. Aasim Ahmad",
// // // //     qualifications: "MBBS, FCPS, MHSc (Bioethics)",
// // // //     experience: "9+ years",
// // // //     hospital: "Kidney Center",
// // // //     fees: 700,
// // // //     description:
// // // //       "Dr. Aasim Ahmad is a highly experienced nephrologist with over nine years of expertise in the field. He holds an MBBS, FCPS, and MHSc in Bioethics, showcasing his extensive knowledge and commitment to patient care. Specializing in nephrology, Dr. Ahmad offers a range of services, including hemodialysis, kidney biopsy, and AV fistula procedures. He is dedicated to providing personalized and effective treatment plans for patients with kidney-related issues.",
// // // //   },


// // // // ]; // The doctor data remains the same

// // // // const DoctorsInformation = () => {
// // // //   return (
// // // //     <>
// // // //       <DashboardView />
// // // //       <AuthFooter />
// // // //     </>
// // // //   );
// // // // };

// // // // export default DoctorsInformation;

// // // // const DashboardView = () => {
// // // //   const [filters, setFilters] = useState({
// // // //     place: "",
// // // //     maxFees: "",
// // // //     minExperience: "",
// // // //   });

// // // //   const handleFilterChange = (event) => {
// // // //     const { name, value } = event.target;
// // // //     setFilters({
// // // //       ...filters,
// // // //       [name]: value,
// // // //     });
// // // //   };

// // // //   const getNumericExperience = (experience) => {
// // // //     return parseInt(experience.replace(/\D/g, ""));
// // // //   };

// // // //   const filteredDoctors = useMemo(() => {
// // // //     return doctorsData.filter((doctor) => {
// // // //       const matchesPlace = filters.place
// // // //         ? doctor.hospital.toLowerCase().includes(filters.place.toLowerCase())
// // // //         : true;
// // // //       const matchesFees = filters.maxFees
// // // //         ? doctor.fees <= Number(filters.maxFees)
// // // //         : true;
// // // //       const matchesExperience = filters.minExperience
// // // //         ? getNumericExperience(doctor.experience) >= Number(filters.minExperience)
// // // //         : true;

// // // //       return matchesPlace && matchesFees && matchesExperience;
// // // //     });
// // // //   }, [filters]);

// // // //   const pageContainerStyle = {
// // // //     background: '#f5f5dc',
// // // //     minHeight: '100vh',
// // // //     padding: '40px 20px',
// // // //   };

// // // //   const headerStyle = {
// // // //     textAlign: 'center',
// // // //     color: '#2c3e50',
// // // //     fontWeight: 'bold',
// // // //     fontSize: '50px',
// // // //     marginBottom: '20px',
// // // //   };

// // // //   const filterSectionStyle = {
// // // //     marginBottom: '30px',
// // // //     display: 'flex',
// // // //     justifyContent: 'center',
// // // //     gap: '20px',
// // // //     color: "#4d4d4d",
// // // //   };

// // // //   const filterWrapperStyle = {
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     gap: '10px',
// // // //     backgroundColor: '#fff',
// // // //     padding: '10px 15px',
// // // //     borderRadius: '10px',
// // // //     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
// // // //   };

// // // //   const labelStyle = {
// // // //     margin: 0,
// // // //     fontSize: '18px',
// // // //     fontWeight: 'bold',
// // // //     color: '#2c3e50',
// // // //   };

// // // //   const inputStyle = {
// // // //     padding: '8px 12px',
// // // //     borderRadius: '5px',
// // // //     border: '1px solid #ccc',
// // // //     fontSize: '16px',
// // // //     outline: 'none',
// // // //     transition: 'border-color 0.3s',
// // // //     color: '#2c3e50',
// // // //   };

// // // //   const doctorInfoStyle = {
// // // //     marginBottom: '20px',
// // // //     padding: '30px',
// // // //     borderRadius: '10px',
// // // //     backgroundColor: '#fff',
// // // //     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
// // // //     fontFamily: 'Arial, sans-serif',
// // // //     lineHeight: '1.6',
// // // //     color: '#333',
// // // //   };

// // // //   const doctorNameStyle = {
// // // //     fontSize: '24px',
// // // //     color: '#2c3e50',
// // // //     fontWeight: 'bold',
// // // //     marginBottom: '10px',
// // // //   };

// // // //   const doctorDetailStyle = {
// // // //     fontSize: '18px',
// // // //     color: '#4d4d4d',
// // // //     marginBottom: '10px',
// // // //   };

// // // //   const doctorListStyle = {
// // // //     display: 'grid',
// // // //     gap: '20px',
// // // //     gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
// // // //   };

// // // //   return (
// // // //     <div style={pageContainerStyle}>
// // // //       <h3 style={headerStyle}>DOCTOR INFORMATION</h3>

// // // //       <div style={filterSectionStyle}>
// // // //         <div style={filterWrapperStyle}>
// // // //           <label style={labelStyle}>
// // // //             Place:{" "}
// // // //           </label>
// // // //           <input
// // // //             type="text"
// // // //             name="place"
// // // //             value={filters.place}
// // // //             onChange={handleFilterChange}
// // // //             placeholder="Enter hospital/place"
// // // //             style={inputStyle}
// // // //           />
// // // //         </div>

// // // //         <div style={filterWrapperStyle}>
// // // //           <label style={labelStyle}>
// // // //             Max Fees:{" "}
// // // //           </label>
// // // //           <input
// // // //             type="number"
// // // //             name="maxFees"
// // // //             value={filters.maxFees}
// // // //             onChange={handleFilterChange}
// // // //             placeholder="Enter max fees"
// // // //             style={inputStyle}
// // // //           />
// // // //         </div>

// // // //         <div style={filterWrapperStyle}>
// // // //           <label style={labelStyle}>
// // // //             Min Experience:{" "}
// // // //           </label>
// // // //           <input
// // // //             type="number"
// // // //             name="minExperience"
// // // //             value={filters.minExperience}
// // // //             onChange={handleFilterChange}
// // // //             placeholder="Enter min experience"
// // // //             style={inputStyle}
// // // //           />
// // // //         </div>
// // // //       </div>

// // // //       <div style={doctorListStyle}>
// // // //         {filteredDoctors.map((doctor, index) => (
// // // //           <div key={index} style={doctorInfoStyle}>
// // // //             <h3 style={doctorNameStyle}>
// // // //               {index + 1}. {doctor.name}
// // // //             </h3>
// // // //             <p style={doctorDetailStyle}>
// // // //               <strong>Qualifications: </strong>{doctor.qualifications}
// // // //             </p>
// // // //             <p style={doctorDetailStyle}>
// // // //               <strong>Experience: </strong>{doctor.experience}
// // // //             </p>
// // // //             <p style={doctorDetailStyle}>
// // // //               <strong>Hospital: </strong>{doctor.hospital}
// // // //             </p>
// // // //             <p style={doctorDetailStyle}>
// // // //               <strong>Fees: </strong>Rs. {doctor.fees}
// // // //             </p>
// // // //             <p style={doctorDetailStyle}>
// // // //               {doctor.description}
// // // //             </p>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };
// // // import React, { useState, useMemo } from "react";
// // // import AuthFooter from "modules/admin/pages/Dashboard/AuthFooter";
// // // import { Modal } from "antd"; // Using Ant Design Modal for simplicity

// // // const doctorsData = [
// // //   {
// // //     name: "Dr. Anita Haroon",
// // //     qualifications: "MBBS, MRCP (UK), FCPS (Nephrology)",
// // //     experience: "11+ years",
// // //     hospital: "Ziauddin Hospital",
// // //     fees: 1650,
// // //     specialty: "Nephrologist",
// // //     rating: 4.9,
// // //     contact: "021-1234567",
// // //     email: "anita.haroon@example.com",
// // //     clinicAddress: "123 Ziauddin St, Karachi",
// // //     availability: "Mon-Fri, 9 AM - 5 PM",
// // //     description:
// // //       "Dr. Anita Haroon is a highly respected nephrologist with more than 11 years of experience in diagnosing and treating kidney-related conditions. With a deep commitment to patient care and a robust educational background, Dr. Haroon has established herself as a leading expert in nephrology. Her practice is dedicated to improving the quality of life for patients suffering from kidney diseases, offering comprehensive care and advanced treatments tailored to each individual's needs.",
// // //   },
// // //   {
// // //     name: "Dr. Syed Mansoor Ahmed Shah",
// // //     qualifications: "MBBS, MRCP (UK)",
// // //     experience: "27 years",
// // //     hospital: "South City Hospital, AKUH Consulting Clinic",
// // //     fees: 1000,
// // //     specialty: "Nephrologist",
// // //     rating: 4.7,
// // //     contact: "021-2345678",
// // //     email: "syed.shah@example.com",
// // //     clinicAddress: "456 South City Rd, Karachi",
// // //     availability: "Tue-Sat, 10 AM - 6 PM",
// // //     description:
// // //       "Dr. Syed Mansoor Ahmed Shah is a highly experienced nephrologist with 27 years of dedicated service in the field of kidney care. Renowned for his clinical expertise and compassionate patient care, Dr. Shah has established himself as a leading expert in nephrology, specializing in the diagnosis and treatment of complex kidney disorders.",
// // //   },
// // //   {
// // //     name: "Dr. Moin Ahmed Qureshi",
// // //     qualifications: "MBBS, FCPS, MCPS",
// // //     experience: "10+ years",
// // //     hospital: "Jamal Noor Hospital",
// // //     fees: 1200,
// // //     specialty: "Nephrologist",
// // //     rating: 4.8,
// // //     contact: "021-3456789",
// // //     email: "moin.qureshi@example.com",
// // //     clinicAddress: "789 Jamal Noor St, Karachi",
// // //     availability: "Mon-Fri, 8 AM - 4 PM",
// // //     description:
// // //       "Dr. Moin Ahmed Qureshi is a highly skilled nephrologist with over 10 years of experience in providing comprehensive care for patients with kidney disorders. His commitment to excellence in patient care, combined with his extensive training, has made him a trusted expert in nephrology. Dr. Qureshi specializes in diagnosing and treating a wide range of kidney-related conditions, ensuring that his patients receive the highest quality of care.",
// // //   },
// // //   {
// // //     name: "Dr. Salman Imtiaz",
// // //     qualifications: "MBBS, FCPS",
// // //     experience: "14 years",
// // //     hospital: "The Kidney Centre, 197/9, Rafiqui Shaheed Road, Askari 3, Cantt, Karachi",
// // //     fees: 1000,
// // //     specialty: "Nephrologist",
// // //     rating: 4.5,
// // //     contact: "021-4567890",
// // //     email: "salman.imtiaz@example.com",
// // //     clinicAddress: "197 Rafiqui Shaheed Rd, Karachi",
// // //     availability: "Wed-Sun, 9 AM - 5 PM",
// // //     description:
// // //       "Dr. Salman Imtiaz is a highly experienced nephrologist specializing in kidney health and related conditions. With over 14 years of dedicated service in the field, Dr. Imtiaz is recognized for his expertise in diagnosing and treating a wide range of kidney disorders. His commitment to providing comprehensive, patient-centered care has made him a respected figure in the medical community, especially in nephrology and hypertension management.",
// // //   },
// // //   {
// // //     name: "Dr. Mehwish Qamar",
// // //     qualifications: "MBBS, FCPS (Nephrology)",
// // //     experience: "12 years",
// // //     hospital: "Anum Hospital, Malir, Karachi",
// // //     fees: 700,
// // //     specialty: "Nephrologist",
// // //     rating: 4.6,
// // //     contact: "021-5678901",
// // //     email: "mehwish.qamar@example.com",
// // //     clinicAddress: "456 Anum St, Karachi",
// // //     availability: "Mon-Fri, 10 AM - 5 PM",
// // //     description:
// // //       "Dr. Mehwish Qamar is dedicated to providing compassionate and personalized care to her patients, focusing on improving outcomes and enhancing quality of life for those affected by kidney diseases. She believes in building strong doctor-patient relationships based on trust, empathy, and open communication. By taking the time to understand each patient’s unique circumstances, Dr. Qamar develops personalized treatment plans that address their specific needs and goals.",
// // //   },
// // //   {
// // //     name: "Dr. Aijaz Ahmed",
// // //     qualifications: "MBBS, FCPS (Nephrology)",
// // //     experience: "13 years",
// // //     hospital: "Anum Hospital, Malir, Karachi",
// // //     fees: "700 - 1500",
// // //     specialty: "Nephrologist",
// // //     rating: 4.4,
// // //     contact: "021-6789012",
// // //     email: "aijaz.ahmed@example.com",
// // //     clinicAddress: "456 Anum St, Karachi",
// // //     availability: "Tue-Sat, 9 AM - 6 PM",
// // //     description:
// // //       "Dr. Aijaz Ahmed is a highly experienced nephrologist specializing in kidney health and management of related conditions. With 13 years of dedicated service, Dr. Ahmed is known for his expertise in nephrology and commitment to providing comprehensive patient care. His clinical acumen and compassionate approach have earned him a reputation as a trusted specialist in the field of nephrology.",
// // //   },
// // //   {
// // //     name: "Dr. Santosh Kumar",
// // //     qualifications: "FCPS (Nephrology)",
// // //     experience: "8 years",
// // //     hospital: "Anklesaria Hospital, Saddar",
// // //     fees: 1500,
// // //     specialty: "Nephrologist",
// // //     rating: 4.3,
// // //     contact: "021-7890123",
// // //     email: "santosh.kumar@example.com",
// // //     clinicAddress: "456 Anklesaria St, Karachi",
// // //     availability: "Mon-Fri, 10 AM - 5 PM",
// // //     description:
// // //       "Dr. Santosh Kumar is a skilled nephrologist with 8 years of experience specializing in general nephrology. He holds an FCPS in Nephrology, showcasing his advanced training and expertise in managing kidney-related conditions.",
// // //   },
// // //   {
// // //     name: "Prof. Dr. Waqar Hussain Kazmi",
// // //     qualifications: "MS",
// // //     experience: "46 years",
// // //     hospital: "Hill Park General Hospital, PECHS",
// // //     fees: 3000,
// // //     specialty: "Nephrologist",
// // //     rating: 5.0,
// // //     contact: "021-8901234",
// // //     email: "waqar.kazmi@example.com",
// // //     clinicAddress: "123 Hill Park Rd, Karachi",
// // //     availability: "Mon-Sat, 9 AM - 5 PM",
// // //     description:
// // //       "Prof. Dr. Waqar Hussain Kazmi is a distinguished nephrologist with an extensive career spanning 46 years. With a Master of Surgery (MS) degree, he brings a wealth of expertise to the field of nephrology. His profound experience and dedication to patient care have established him as a leading specialist in both diabetology and general nephrology.",
// // //   },
// // //   {
// // //     name: "Dr. Aasim Ahmad",
// // //     qualifications: "MBBS, FCPS, MHSc (Bioethics)",
// // //     experience: "9+ years",
// // //     hospital: "Kidney Center",
// // //     fees: 700,
// // //     specialty: "Nephrologist",
// // //     rating: 4.2,
// // //     contact: "021-9012345",
// // //     email: "aasim.ahmad@example.com",
// // //     clinicAddress: "789 Kidney Center Rd, Karachi",
// // //     availability: "Mon-Fri, 8 AM - 4 PM",
// // //     description:
// // //       "Dr. Aasim Ahmad is a highly experienced nephrologist with over nine years of expertise in the field. He holds an MBBS, FCPS, and MHSc in Bioethics, showcasing his extensive knowledge and commitment to patient care. Specializing in nephrology, Dr. Ahmad offers a range of services, including hemodialysis, kidney biopsy, and AV fistula procedures. He is dedicated to providing personalized and effective treatment plans for patients with kidney-related issues.",
// // //   },
// // // ];


// // // const DoctorsInformation = () => {
// // //   return (
// // //     <>
// // //       <DashboardView />
// // //       <AuthFooter />
// // //     </>
// // //   );
// // // };

// // // const DashboardView = () => {
// // //   const [filters, setFilters] = useState({
// // //     place: "",
// // //     maxFees: "",
// // //     minExperience: "",
// // //   });
// // //   const [selectedDoctor, setSelectedDoctor] = useState(null);

// // //   const handleFilterChange = (event) => {
// // //     const { name, value } = event.target;
// // //     setFilters({ ...filters, [name]: value });
// // //   };

// // //   const getNumericExperience = (experience) => {
// // //     return parseInt(experience.replace(/\D/g, ""));
// // //   };

// // //   const filteredDoctors = useMemo(() => {
// // //     return doctorsData.filter((doctor) => {
// // //       const matchesPlace = filters.place
// // //         ? doctor.hospital.toLowerCase().includes(filters.place.toLowerCase())
// // //         : true;
// // //       const matchesFees = filters.maxFees
// // //         ? doctor.fees <= Number(filters.maxFees)
// // //         : true;
// // //       const matchesExperience = filters.minExperience
// // //         ? getNumericExperience(doctor.experience) >= Number(filters.minExperience)
// // //         : true;
// // //       return matchesPlace && matchesFees && matchesExperience;
// // //     });
// // //   }, [filters]);

// // //   const openModal = (doctor) => setSelectedDoctor(doctor);
// // //   const closeModal = () => setSelectedDoctor(null);

// // //   return (
// // //     <div style={styles.pageContainer}>
// // //       <h3 style={styles.header}>DOCTORS INFORMATION</h3>

// // //       <div style={styles.filterSection}>
// // //         <input
// // //           type="text"
// // //           name="place"
// // //           value={filters.place}
// // //           onChange={handleFilterChange}
// // //           placeholder="Enter hospital/place"
// // //           style={styles.input}
// // //         />
// // //         <input
// // //           type="number"
// // //           name="maxFees"
// // //           value={filters.maxFees}
// // //           onChange={handleFilterChange}
// // //           placeholder="Max Fees"
// // //           style={styles.input}
// // //         />
// // //         <input
// // //           type="number"
// // //           name="minExperience"
// // //           value={filters.minExperience}
// // //           onChange={handleFilterChange}
// // //           placeholder="Min Experience"
// // //           style={styles.input}
// // //         />
// // //       </div>

// // //       <div style={styles.doctorList}>
// // //         {filteredDoctors.map((doctor, index) => (
// // //           <div key={index} style={styles.doctorCard} onClick={() => openModal(doctor)}>
// // //             <h4 style={styles.doctorName}>{doctor.name}</h4>
// // //             <p style={styles.doctorRole}>{doctor.specialty}</p>
// // //             <p>⭐ {doctor.rating} / 5</p>
// // //             <p>Experience: {doctor.experience}</p>
// // //             <p>Contact: {doctor.contact}</p>
// // //             <div style={styles.buttonGroup}>
// // //               <button style={styles.profileButton}>View Profile</button>
            
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {selectedDoctor && (
// // //         <Modal
// // //           visible={!!selectedDoctor}
// // //           onCancel={closeModal}
// // //           footer={null}
// // //           title={`${selectedDoctor.name} - ${selectedDoctor.specialty}`}
// // //         >
// // //           <p><strong>Qualifications:</strong> {selectedDoctor.qualifications}</p>
// // //           <p><strong>Experience:</strong> {selectedDoctor.experience}</p>
// // //           <p><strong>Hospital:</strong> {selectedDoctor.hospital}</p>
// // //           <p><strong>Clinic Address:</strong> {selectedDoctor.clinicAddress}</p>
// // //           <p><strong>Fees:</strong> Rs. {selectedDoctor.fees}</p>
// // //           <p><strong>Contact:</strong> {selectedDoctor.contact}</p>
// // //           <p><strong>Email:</strong> {selectedDoctor.email}</p>
// // //           <p><strong>Rating:</strong> {selectedDoctor.rating} / 5</p>
// // //           <p><strong>Availability:</strong> {selectedDoctor.availability}</p>
// // //           <p>{selectedDoctor.description}</p>
// // //         </Modal>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // const styles = {
// // //   pageContainer: {
// // //     background: '#f5f5dc',
// // //     minHeight: '100vh',
// // //     padding: '20px',
// // //   },
// // //   header: {
// // //     textAlign: 'center',
// // //     color: '#2c3e50',
// // //     fontWeight: 'bold',
// // //     fontSize: '50px',
// // //     marginBottom: '20px',
// // //   },
// // //   filterSection: {
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     gap: '15px',
// // //     marginBottom: '30px',
// // //   },
// // //   input: {
// // //     padding: '8px 12px',
// // //     borderRadius: '5px',
// // //     border: '1px solid #ccc',
// // //     fontSize: '16px',
// // //     outline: 'none',
// // //   },
// // //   doctorList: {
// // //     display: 'grid',
// // //     gap: '20px',
// // //     gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
// // //   },
// // //   // doctorCard: {
// // //   //   padding: '20px',
// // //   //   borderRadius: '10px',
// // //   //   backgroundColor: '#fff',
// // //   //   boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
// // //   //   cursor: 'pointer',
// // //   //   transition: 'transform 0.3s',
// // //   // },
// // //   doctorName: {
// // //     fontSize: '22px',
// // //     fontWeight: 'bold',
// // //     color: '#2c3e50',
// // //   },
// // //   doctorRole: {
// // //     fontSize: '16px',
// // //     color: '#4d4d4d',
// // //   },
// // //   buttonGroup: {
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     marginTop: 'auto',
// // //   },
// // //   // profileButton: {
// // //   //   backgroundColor: '#3498db',
// // //   //   color: '#fff',
// // //   //   padding: '8px 12px',
// // //   //   borderRadius: '5px',
// // //   //   border: 'none',
// // //   //   cursor: 'pointer',

// // //   // },
// // //   doctorCard: {
// // //     padding: '20px',
// // //     borderRadius: '10px',
// // //     backgroundColor: '#fff',
// // //     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
// // //     cursor: 'pointer',
// // //     transition: 'transform 0.3s',
// // //     display: 'flex',
// // //     flexDirection: 'column',  // Ensures the content stacks vertically
    
// // //   },
// // //   profileButton: {
// // //     backgroundColor: '#3498db',
// // //     color: '#fff',
// // //     padding: '8px 12px',
// // //     borderRadius: '5px',
// // //     border: 'none',
// // //     cursor: 'pointer',
// // //     marginTop: 'auto',  // Pushes the button to the bottom
// // //   },
  
// // //   bookButton: {
// // //     backgroundColor: '#3498db',
// // //     color: '#fff',
// // //     padding: '8px 12px',
// // //     borderRadius: '5px',
// // //     border: 'none',
// // //     cursor: 'pointer',
// // //   },
// // //   messageButton: {
// // //     backgroundColor: '#2ecc71',
// // //     color: '#fff',
// // //     padding: '8px 12px',
// // //     borderRadius: '5px',
// // //     border: 'none',
// // //     cursor: 'pointer',
// // //   },
// // // };

// // // export default DoctorsInformation;
// // import React, { useState, useMemo } from "react";
// // import AuthFooter from "modules/admin/pages/Dashboard/AuthFooter";
// // import { Modal } from "antd"; // Using Ant Design Modal for simplicity

// // const doctorsData = [
// //   // Sample doctor data here...
// // ];

// // const DoctorsInformation = () => {
// //   return (
// //     <>
// //       <DashboardView />
// //       <AuthFooter />
// //     </>
// //   );
// // };

// // const DashboardView = () => {
// //   const [filters, setFilters] = useState({
// //     place: "",
// //     maxFees: "",
// //     minExperience: "",
// //   });
// //   const [selectedDoctor, setSelectedDoctor] = useState(null);

// //   const handleFilterChange = (event) => {
// //     const { name, value } = event.target;
// //     setFilters({ ...filters, [name]: value });
// //   };

// //   const getNumericExperience = (experience) => {
// //     return parseInt(experience.replace(/\D/g, ""));
// //   };

// //   const filteredDoctors = useMemo(() => {
// //     return doctorsData.filter((doctor) => {
// //       const matchesPlace = filters.place
// //         ? doctor.hospital.toLowerCase().includes(filters.place.toLowerCase())
// //         : true;
// //       const matchesFees = filters.maxFees
// //         ? doctor.fees <= Number(filters.maxFees)
// //         : true;
// //       const matchesExperience = filters.minExperience
// //         ? getNumericExperience(doctor.experience) >= Number(filters.minExperience)
// //         : true;
// //       return matchesPlace && matchesFees && matchesExperience;
// //     });
// //   }, [filters]);

// //   const openModal = (doctor) => setSelectedDoctor(doctor);
// //   const closeModal = () => setSelectedDoctor(null);

// //   return (
// //     <div style={styles.pageContainer}>
// //       <h3 style={styles.header}>DOCTORS INFORMATION</h3>

// //       <div style={styles.filterSectionContainer}>
// //         <h4 style={styles.filterHeading}>Search for Doctors</h4> {/* Small heading */}
// //         <div style={styles.filterSection}>
// //           <div style={styles.inputContainer}>
// //             <label style={styles.label}>Hospital/Place</label>
// //             <input
// //               type="text"
// //               name="place"
// //               value={filters.place}
// //               onChange={handleFilterChange}
// //               placeholder="Enter hospital/place"
// //               style={styles.input}
// //             />
// //           </div>
// //           <div style={styles.inputContainer}>
// //             <label style={styles.label}>Max Fees</label>
// //             <input
// //               type="number"
// //               name="maxFees"
// //               value={filters.maxFees}
// //               onChange={handleFilterChange}
// //               placeholder="Max Fees"
// //               style={styles.input}
// //             />
// //           </div>
// //           <div style={styles.inputContainer}>
// //             <label style={styles.label}>Min Experience</label>
// //             <input
// //               type="number"
// //               name="minExperience"
// //               value={filters.minExperience}
// //               onChange={handleFilterChange}
// //               placeholder="Min Experience"
// //               style={styles.input}
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       <div style={styles.doctorList}>
// //         {filteredDoctors.map((doctor, index) => (
// //           <div key={index} style={styles.doctorCard} onClick={() => openModal(doctor)}>
// //             <h4 style={styles.doctorName}>{doctor.name}</h4>
// //             <p style={styles.doctorRole}>{doctor.specialty}</p>
// //             <p>⭐ {doctor.rating} / 5</p>
// //             <p>Experience: {doctor.experience}</p>
// //             <p>Contact: {doctor.contact}</p>
// //             <button style={styles.profileButton}>View Profile</button>
// //           </div>
// //         ))}
// //       </div>

// //       {selectedDoctor && (
// //         <Modal
// //           visible={!!selectedDoctor}
// //           onCancel={closeModal}
// //           footer={null}
// //           title={`${selectedDoctor.name} - ${selectedDoctor.specialty}`}
// //         >
// //           <p><strong>Qualifications:</strong> {selectedDoctor.qualifications}</p>
// //           <p><strong>Experience:</strong> {selectedDoctor.experience}</p>
// //           <p><strong>Hospital:</strong> {selectedDoctor.hospital}</p>
// //           <p><strong>Clinic Address:</strong> {selectedDoctor.clinicAddress}</p>
// //           <p><strong>Fees:</strong> Rs. {selectedDoctor.fees}</p>
// //           <p><strong>Contact:</strong> {selectedDoctor.contact}</p>
// //           <p><strong>Email:</strong> {selectedDoctor.email}</p>
// //           <p><strong>Rating:</strong> {selectedDoctor.rating} / 5</p>
// //           <p><strong>Availability:</strong> {selectedDoctor.availability}</p>
// //           <p>{selectedDoctor.description}</p>
// //         </Modal>
// //       )}
// //     </div>
// //   );
// // };

// // const styles = {
// //   pageContainer: {
// //     background: '#f5f5dc',
// //     minHeight: '100vh',
// //     padding: '20px',
// //   },
// //   header: {
// //     textAlign: 'center',
// //     color: '#2c3e50',
// //     fontWeight: 'bold',
// //     fontSize: '50px',
// //     marginBottom: '20px',
// //   },
// //   filterSectionContainer: {
// //     textAlign: 'center',
// //     marginBottom: '20px',
// //   },
// //   filterHeading: {
// //     fontSize: '18px',
// //     fontWeight: 'bold',
// //     color: '#2c3e50',
// //     marginBottom: '10px',
// //   },
// //   filterSection: {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     gap: '15px',
// //     marginBottom: '30px',
// //   },
// //   inputContainer: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //   },
// //   label: {
// //     marginBottom: '5px',
// //     fontSize: '14px',
// //     color: '#4d4d4d',
// //   },
// //   input: {
// //     padding: '8px 12px',
// //     borderRadius: '5px',
// //     border: '1px solid #ccc',
// //     fontSize: '16px',
// //     outline: 'none',
// //   },
// //   doctorList: {
// //     display: 'grid',
// //     gap: '20px',
// //     gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
// //   },
// //   doctorCard: {
// //     padding: '20px',
// //     borderRadius: '10px',
// //     backgroundColor: '#fff',
// //     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
// //     cursor: 'pointer',
// //     transition: 'transform 0.3s',
// //     display: 'flex',
// //     flexDirection: 'column',
// //   },
// //   doctorName: {
// //     fontSize: '22px',
// //     fontWeight: 'bold',
// //     color: '#2c3e50',
// //   },
// //   doctorRole: {
// //     fontSize: '16px',
// //     color: '#4d4d4d',
// //   },
// //   profileButton: {
// //     backgroundColor: '#3498db',
// //     color: '#fff',
// //     padding: '8px 12px',
// //     borderRadius: '5px',
// //     border: 'none',
// //     cursor: 'pointer',
// //     marginTop: 'auto', // Pushes the button to the bottom
// //   },
// // };

// // export default DoctorsInformation;
// import React, { useState, useMemo } from "react";
// import AuthFooter from "modules/admin/pages/Dashboard/AuthFooter";
// import { Modal } from "antd"; // Using Ant Design Modal for simplicity

// const doctorsData = [
//   {
//     name: "Dr. Anita Haroon",
//     qualifications: "MBBS, MRCP (UK), FCPS (Nephrology)",
//     experience: "11+ years",
//     hospital: "Ziauddin Hospital",
//     fees: 1650,
//     specialty: "Nephrologist",
//     rating: 4.9,
//     contact: "021-1234567",
//     email: "anita.haroon@example.com",
//     clinicAddress: "123 Ziauddin St, Karachi",
//     availability: "Mon-Fri, 9 AM - 5 PM",
//     description:
//       "Dr. Anita Haroon is a highly respected nephrologist with more than 11 years of experience in diagnosing and treating kidney-related conditions. With a deep commitment to patient care and a robust educational background, Dr. Haroon has established herself as a leading expert in nephrology. Her practice is dedicated to improving the quality of life for patients suffering from kidney diseases, offering comprehensive care and advanced treatments tailored to each individual's needs.",
//   },
//   {
//     name: "Dr. Syed Mansoor Ahmed Shah",
//     qualifications: "MBBS, MRCP (UK)",
//     experience: "27 years",
//     hospital: "South City Hospital, AKUH Consulting Clinic",
//     fees: 1000,
//     specialty: "Nephrologist",
//     rating: 4.7,
//     contact: "021-2345678",
//     email: "syed.shah@example.com",
//     clinicAddress: "456 South City Rd, Karachi",
//     availability: "Tue-Sat, 10 AM - 6 PM",
//     description:
//       "Dr. Syed Mansoor Ahmed Shah is a highly experienced nephrologist with 27 years of dedicated service in the field of kidney care. Renowned for his clinical expertise and compassionate patient care, Dr. Shah has established himself as a leading expert in nephrology, specializing in the diagnosis and treatment of complex kidney disorders.",
//   },
//   {
//     name: "Dr. Moin Ahmed Qureshi",
//     qualifications: "MBBS, FCPS, MCPS",
//     experience: "10+ years",
//     hospital: "Jamal Noor Hospital",
//     fees: 1200,
//     specialty: "Nephrologist",
//     rating: 4.8,
//     contact: "021-3456789",
//     email: "moin.qureshi@example.com",
//     clinicAddress: "789 Jamal Noor St, Karachi",
//     availability: "Mon-Fri, 8 AM - 4 PM",
//     description:
//       "Dr. Moin Ahmed Qureshi is a highly skilled nephrologist with over 10 years of experience in providing comprehensive care for patients with kidney disorders. His commitment to excellence in patient care, combined with his extensive training, has made him a trusted expert in nephrology. Dr. Qureshi specializes in diagnosing and treating a wide range of kidney-related conditions, ensuring that his patients receive the highest quality of care.",
//   },
//   {
//     name: "Dr. Salman Imtiaz",
//     qualifications: "MBBS, FCPS",
//     experience: "14 years",
//     hospital: "The Kidney Centre, 197/9, Rafiqui Shaheed Road, Askari 3, Cantt, Karachi",
//     fees: 1000,
//     specialty: "Nephrologist",
//     rating: 4.5,
//     contact: "021-4567890",
//     email: "salman.imtiaz@example.com",
//     clinicAddress: "197 Rafiqui Shaheed Rd, Karachi",
//     availability: "Wed-Sun, 9 AM - 5 PM",
//     description:
//       "Dr. Salman Imtiaz is a highly experienced nephrologist specializing in kidney health and related conditions. With over 14 years of dedicated service in the field, Dr. Imtiaz is recognized for his expertise in diagnosing and treating a wide range of kidney disorders. His commitment to providing comprehensive, patient-centered care has made him a respected figure in the medical community, especially in nephrology and hypertension management.",
//   },
//   {
//     name: "Dr. Mehwish Qamar",
//     qualifications: "MBBS, FCPS (Nephrology)",
//     experience: "12 years",
//     hospital: "Anum Hospital, Malir, Karachi",
//     fees: 700,
//     specialty: "Nephrologist",
//     rating: 4.6,
//     contact: "021-5678901",
//     email: "mehwish.qamar@example.com",
//     clinicAddress: "456 Anum St, Karachi",
//     availability: "Mon-Fri, 10 AM - 5 PM",
//     description:
//       "Dr. Mehwish Qamar is dedicated to providing compassionate and personalized care to her patients, focusing on improving outcomes and enhancing quality of life for those affected by kidney diseases. She believes in building strong doctor-patient relationships based on trust, empathy, and open communication. By taking the time to understand each patient’s unique circumstances, Dr. Qamar develops personalized treatment plans that address their specific needs and goals.",
//   },
//   {
//     name: "Dr. Aijaz Ahmed",
//     qualifications: "MBBS, FCPS (Nephrology)",
//     experience: "13 years",
//     hospital: "Anum Hospital, Malir, Karachi",
//     fees: "700 - 1500",
//     specialty: "Nephrologist",
//     rating: 4.4,
//     contact: "021-6789012",
//     email: "aijaz.ahmed@example.com",
//     clinicAddress: "456 Anum St, Karachi",
//     availability: "Tue-Sat, 9 AM - 6 PM",
//     description:
//       "Dr. Aijaz Ahmed is a highly experienced nephrologist specializing in kidney health and management of related conditions. With 13 years of dedicated service, Dr. Ahmed is known for his expertise in nephrology and commitment to providing comprehensive patient care. His clinical acumen and compassionate approach have earned him a reputation as a trusted specialist in the field of nephrology.",
//   },
//   {
//     name: "Dr. Santosh Kumar",
//     qualifications: "FCPS (Nephrology)",
//     experience: "8 years",
//     hospital: "Anklesaria Hospital, Saddar",
//     fees: 1500,
//     specialty: "Nephrologist",
//     rating: 4.3,
//     contact: "021-7890123",
//     email: "santosh.kumar@example.com",
//     clinicAddress: "456 Anklesaria St, Karachi",
//     availability: "Mon-Fri, 10 AM - 5 PM",
//     description:
//       "Dr. Santosh Kumar is a skilled nephrologist with 8 years of experience specializing in general nephrology. He holds an FCPS in Nephrology, showcasing his advanced training and expertise in managing kidney-related conditions.",
//   },
//   {
//     name: "Prof. Dr. Waqar Hussain Kazmi",
//     qualifications: "MS",
//     experience: "46 years",
//     hospital: "Hill Park General Hospital, PECHS",
//     fees: 3000,
//     specialty: "Nephrologist",
//     rating: 5.0,
//     contact: "021-8901234",
//     email: "waqar.kazmi@example.com",
//     clinicAddress: "123 Hill Park Rd, Karachi",
//     availability: "Mon-Sat, 9 AM - 5 PM",
//     description:
//       "Prof. Dr. Waqar Hussain Kazmi is a distinguished nephrologist with an extensive career spanning 46 years. With a Master of Surgery (MS) degree, he brings a wealth of expertise to the field of nephrology. His profound experience and dedication to patient care have established him as a leading specialist in both diabetology and general nephrology.",
//   },
//   {
//     name: "Dr. Aasim Ahmad",
//     qualifications: "MBBS, FCPS, MHSc (Bioethics)",
//     experience: "9+ years",
//     hospital: "Kidney Center",
//     fees: 700,
//     specialty: "Nephrologist",
//     rating: 4.2,
//     contact: "021-9012345",
//     email: "aasim.ahmad@example.com",
//     clinicAddress: "789 Kidney Center Rd, Karachi",
//     availability: "Mon-Fri, 8 AM - 4 PM",
//     description:
//       "Dr. Aasim Ahmad is a highly experienced nephrologist with over nine years of expertise in the field. He holds an MBBS, FCPS, and MHSc in Bioethics, showcasing his extensive knowledge and commitment to patient care. Specializing in nephrology, Dr. Ahmad offers a range of services, including hemodialysis, kidney biopsy, and AV fistula procedures. He is dedicated to providing personalized and effective treatment plans for patients with kidney-related issues.",
//   },
// ];


// const DoctorsInformation = () => {
//   return (
//     <>
//       <DashboardView />
//       <AuthFooter />
//     </>
//   );
// };

// const DashboardView = () => {
//   const [filters, setFilters] = useState({
//     place: "",
//     maxFees: "",
//     minExperience: "",
//   });
//   const [selectedDoctor, setSelectedDoctor] = useState(null);

//   const handleFilterChange = (event) => {
//     const { name, value } = event.target;
//     setFilters({ ...filters, [name]: value });
//   };

//   const getNumericExperience = (experience) => {
//     return parseInt(experience.replace(/\D/g, ""), 10);
//   };

//   const filteredDoctors = useMemo(() => {
//     return doctorsData.filter((doctor) => {
//       const matchesPlace = filters.place
//         ? doctor.hospital.toLowerCase().includes(filters.place.toLowerCase())
//         : true;
//       const matchesFees = filters.maxFees
//         ? doctor.fees <= Number(filters.maxFees)
//         : true;
//       const matchesExperience = filters.minExperience
//         ? getNumericExperience(doctor.experience) >= Number(filters.minExperience)
//         : true;
//       return matchesPlace && matchesFees && matchesExperience;
//     });
//   }, [filters]);

//   const openModal = (doctor) => setSelectedDoctor(doctor);
//   const closeModal = () => setSelectedDoctor(null);

//   // const resetFilters = () => {
//   //   setFilters({ place: "", maxFees: "", minExperience: "" });
//   // };

//   return (
//     <div style={styles.pageContainer}>
//       <h3 style={styles.header}>DOCTORS INFORMATION</h3>

//       <div style={styles.filterSectionContainer}>
//         <h4 style={styles.filterHeading}>Search for Doctors</h4>
//         <div style={styles.filterSection}>
//           <div style={styles.inputContainer}>
//             <label style={styles.label}>Hospital/Place:</label>
//             <input
//               type="text"
//               name="place"
//               value={filters.place}
//               onChange={handleFilterChange}
//               placeholder="Enter hospital/place"
//               style={styles.input}
//             />
//           </div>
//           <div style={styles.inputContainer}>
//             <label style={styles.label}>Max Fees:</label>
//             <input
//               type="number"
//               name="maxFees"
//               value={filters.maxFees}
//               onChange={handleFilterChange}
//               placeholder="Max Fees"
//               style={styles.input}
//             />
//           </div>
//           <div style={styles.inputContainer}>
//             <label style={styles.label}>Min Experience:</label>
//             <input
//               type="number"
//               name="minExperience"
//               value={filters.minExperience}
//               onChange={handleFilterChange}
//               placeholder="Min Experience"
//               style={styles.input}
//             />
//           </div>
//           {/* <button onClick={resetFilters} style={styles.resetButton}>Reset Filters</button> */}
//         </div>
//       </div>

//       <div style={styles.doctorList}>
//         {filteredDoctors.map((doctor, index) => (
//           <div key={index} style={styles.doctorCard} onClick={() => openModal(doctor)}>
//             <h4 style={styles.doctorName}>{doctor.name}</h4>
//             <p style={styles.doctorRole}>{doctor.specialty}</p>
//             <p>⭐ {doctor.rating} / 5</p>
//             <p>Experience: {doctor.experience}</p>
//             <p>Contact: {doctor.contact}</p>
//             <button style={styles.profileButton}>View Profile</button>
//           </div>
//         ))}
//       </div>

//       {selectedDoctor && (
//         <Modal
//           visible={!!selectedDoctor}
//           onCancel={closeModal}
//           footer={null}
//           title={`${selectedDoctor.name} - ${selectedDoctor.specialty}`}
//         >
//           <p><strong>Qualifications:</strong> {selectedDoctor.qualifications}</p>
//           <p><strong>Experience:</strong> {selectedDoctor.experience}</p>
//           <p><strong>Hospital:</strong> {selectedDoctor.hospital}</p>
//           <p><strong>Clinic Address:</strong> {selectedDoctor.clinicAddress}</p>
//           <p><strong>Fees:</strong> Rs. {selectedDoctor.fees}</p>
//           <p><strong>Contact:</strong> {selectedDoctor.contact}</p>
//           <p><strong>Email:</strong> {selectedDoctor.email}</p>
//           <p><strong>Rating:</strong> {selectedDoctor.rating} / 5</p>
//           <p><strong>Availability:</strong> {selectedDoctor.availability}</p>
//           <p>{selectedDoctor.description}</p>
//         </Modal>
//       )}
//     </div>
//   );
// };

// const styles = {
//   pageContainer: {
//     background: '#f5f5dc',
//     minHeight: '100vh',
//     padding: '20px',
//   },
//   header: {
//     textAlign: 'center',
//     color: '#2c3e50',
//     fontWeight: 'bold',
//     fontSize: '50px',
//     marginBottom: '20px',
//   },
//   filterSectionContainer: {
//     textAlign: 'center',
//     marginBottom: '20px',
//   },
//   filterHeading: {
//     fontSize: '18px',
//     fontWeight: 'bold',
//     color: '#2c3e50',
//     marginBottom: '10px',
//   },
//   filterSection: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '15px',
//     marginBottom: '30px',
//   },
//   inputContainer: {
//     display: 'flex',
//     alignItems: 'center', // Aligns items in the center
//   },
//   label: {
//     marginRight: '10px', // Adds space between label and input
//     fontSize: '14px',
//     color: '#4d4d4d',
//   },
//   input: {
//     padding: '8px 12px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     fontSize: '16px',
//     outline: 'none',
//   },
//   doctorList: {
//     display: 'grid',
//     gap: '20px',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//   },
//   doctorCard: {
//     padding: '20px',
//     borderRadius: '10px',
//     backgroundColor: '#fff',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//     cursor: 'pointer',
//     transition: 'transform 0.3s',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   doctorName: {
//     fontSize: '22px',
//     fontWeight: 'bold',
//     color: '#2c3e50',
//   },
//   doctorRole: {
//     fontSize: '16px',
//     color: '#4d4d4d',
//   },
//   profileButton: {
//     backgroundColor: '#3498db',
//     color: '#fff',
//     padding: '8px 12px',
//     borderRadius: '5px',
//     border: 'none',
//     cursor: 'pointer',
//     marginTop: 'auto',
//   },
//   // resetButton: {
//   //   marginTop: '20px',
//   //   backgroundColor: '#e74c3c',
//   //   color: '#fff',
//   //   border: 'none',
//   //   padding: '10px 15px',
//   //   borderRadius: '5px',
//   //   cursor: 'pointer',
//   // },
// };

// export default DoctorsInformation;
import React, { useState, useMemo } from "react";
import AuthFooter from "modules/admin/pages/Dashboard/AuthFooter";
import { Modal } from "antd"; // Using Ant Design Modal for simplicity

const doctorsData = [
  {
    name: "Dr. Anita Haroon",
    qualifications: "MBBS, MRCP (UK), FCPS (Nephrology)",
    experience: "11+ years",
    hospital: "Ziauddin Hospital",
    fees: 1650,
    specialty: "Nephrologist",
    rating: 4.9,
    contact: "021-1234567",
    email: "anita.haroon@gmail.com",
    clinicAddress: "123 Ziauddin St, Karachi",
    availability: "Mon-Fri, 9 AM - 5 PM",
    description:
      "Dr. Anita Haroon is a highly respected nephrologist with more than 11 years of experience in diagnosing and treating kidney-related conditions. With a deep commitment to patient care and a robust educational background, Dr. Haroon has established herself as a leading expert in nephrology. Her practice is dedicated to improving the quality of life for patients suffering from kidney diseases, offering comprehensive care and advanced treatments tailored to each individual's needs.",
  },
  {
    name: "Dr. Syed Mansoor Ahmed Shah",
    qualifications: "MBBS, MRCP (UK)",
    experience: "27 years",
    hospital: "South City Hospital, AKUH Consulting Clinic",
    fees: 1000,
    specialty: "Nephrologist",
    rating: 4.7,
    contact: "021-2345678",
    email: "syed.shah@hotmail.com",
    clinicAddress: "456 South City Rd, Karachi",
    availability: "Tue-Sat, 10 AM - 6 PM",
    description:
      "Dr. Syed Mansoor Ahmed Shah is a highly experienced nephrologist with 27 years of dedicated service in the field of kidney care. Renowned for his clinical expertise and compassionate patient care, Dr. Shah has established himself as a leading expert in nephrology, specializing in the diagnosis and treatment of complex kidney disorders.",
  },
  {
    name: "Dr. Moin Ahmed Qureshi",
    qualifications: "MBBS, FCPS, MCPS",
    experience: "10+ years",
    hospital: "Jamal Noor Hospital",
    fees: 1200,
    specialty: "Nephrologist",
    rating: 4.8,
    contact: "021-3456789",
    email: "moin.qureshi@gmail.com",
    clinicAddress: "789 Jamal Noor St, Karachi",
    availability: "Mon and Fri, 8 AM -  PM",
    description:
      "Dr. Moin Ahmed Qureshi is a highly skilled nephrologist with over 10 years of experience in providing comprehensive care for patients with kidney disorders. His commitment to excellence in patient care, combined with his extensive training, has made him a trusted expert in nephrology. Dr. Qureshi specializes in diagnosing and treating a wide range of kidney-related conditions, ensuring that his patients receive the highest quality of care.",
  },
  {
    name: "Dr. Salman Imtiaz",
    qualifications: "MBBS, FCPS",
    experience: "14 years",
    hospital: "The Kidney Centre, 197/9, Rafiqui Shaheed Road, Askari 3, Cantt, Karachi",
    fees: 1000,
    specialty: "Nephrologist",
    rating: 4.5,
    contact: "021-4567890",
    email: "salman.imtiaz@gmail.com",
    clinicAddress: "197 Rafiqui Shaheed Rd, Karachi",
    availability: "Wed-Sun, 9 AM - 5 PM",
    description:
      "Dr. Salman Imtiaz is a highly experienced nephrologist specializing in kidney health and related conditions. With over 14 years of dedicated service in the field, Dr. Imtiaz is recognized for his expertise in diagnosing and treating a wide range of kidney disorders. His commitment to providing comprehensive, patient-centered care has made him a respected figure in the medical community, especially in nephrology and hypertension management.",
  },
  {
    name: "Dr. Mehwish Qamar",
    qualifications: "MBBS, FCPS (Nephrology)",
    experience: "12 years",
    hospital: "Anum Hospital, Malir, Karachi",
    fees: 700,
    specialty: "Nephrologist",
    rating: 4.6,
    contact: "021-5678901",
    email: "mehwish.qamar@gmail.com",
    clinicAddress: "456 Anum St, Karachi",
    availability: "Mon-Fri, 10 AM - 5 PM",
    description:
      "Dr. Mehwish Qamar is dedicated to providing compassionate and personalized care to her patients, focusing on improving outcomes and enhancing quality of life for those affected by kidney diseases. She believes in building strong doctor-patient relationships based on trust, empathy, and open communication. By taking the time to understand each patient’s unique circumstances, Dr. Qamar develops personalized treatment plans that address their specific needs and goals.",
  },
  {
    name: "Dr. Aijaz Ahmed",
    qualifications: "MBBS, FCPS (Nephrology)",
    experience: "13 years",
    hospital: "Anum Hospital, Malir, Karachi",
    fees: "700 - 1500",
    specialty: "Nephrologist",
    rating: 4.4,
    contact: "021-6789012",
    email: "aijaz.ahmed1@yahoo.com",
    clinicAddress: "456 Anum St, Karachi",
    availability: "Tue-Sat, 9 AM - 6 PM",
    description:
      "Dr. Aijaz Ahmed is a highly experienced nephrologist specializing in kidney health and management of related conditions. With 13 years of dedicated service, Dr. Ahmed is known for his expertise in nephrology and commitment to providing comprehensive patient care. His clinical acumen and compassionate approach have earned him a reputation as a trusted specialist in the field of nephrology.",
  },
  {
    name: "Dr. Santosh Kumar",
    qualifications: "FCPS (Nephrology)",
    experience: "8 years",
    hospital: "Anklesaria Hospital, Saddar",
    fees: 1500,
    specialty: "Nephrologist",
    rating: 4.3,
    contact: "021-7890123",
    email: "santosh.kumar09@gmail.com",
    clinicAddress: "456 Anklesaria St, Karachi",
    availability: "Mon-Fri, 10 AM - 5 PM",
    description:
      "Dr. Santosh Kumar is a skilled nephrologist with 8 years of experience specializing in general nephrology. He holds an FCPS in Nephrology, showcasing his advanced training and expertise in managing kidney-related conditions.",
  },
  {
    name: "Prof. Dr. Waqar Hussain Kazmi",
    qualifications: "MS",
    experience: "46 years",
    hospital: "Hill Park General Hospital, PECHS",
    fees: 3000,
    specialty: "Nephrologist",
    rating: 5.0,
    contact: "021-8901234",
    email: "waqar_kazmi12@hotmail.com",
    clinicAddress: "123 Hill Park Rd, Karachi",
    availability: "Mon-Sat, 9 AM - 5 PM",
    description:
      "Prof. Dr. Waqar Hussain Kazmi is a distinguished nephrologist with an extensive career spanning 46 years. With a Master of Surgery (MS) degree, he brings a wealth of expertise to the field of nephrology. His profound experience and dedication to patient care have established him as a leading specialist in both diabetology and general nephrology.",
  },
  {
    name: "Dr. Aasim Ahmad",
    qualifications: "MBBS, FCPS, MHSc (Bioethics)",
    experience: "9+ years",
    hospital: "Kidney Center",
    fees: 700,
    specialty: "Nephrologist",
    rating: 4.2,
    contact: "021-9012345",
    email: "aasim.ahmad76@gmail.com",
    clinicAddress: "789 Kidney Center Rd, Karachi",
    availability: "Mon-Fri, 8 AM - 4 PM",
    description:
      "Dr. Aasim Ahmad is a highly experienced nephrologist with over nine years of expertise in the field. He holds an MBBS, FCPS, and MHSc in Bioethics, showcasing his extensive knowledge and commitment to patient care. Specializing in nephrology, Dr. Ahmad offers a range of services, including hemodialysis, kidney biopsy, and AV fistula procedures. He is dedicated to providing personalized and effective treatment plans for patients with kidney-related issues.",
  },
];


const DoctorsInformation = () => {
  return (
    <>
      <DashboardView />
      <AuthFooter />
    </>
  );
};

const DashboardView = () => {
  const [filters, setFilters] = useState({
    place: "",
    maxFees: "",
    minExperience: "",
  });
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const getNumericExperience = (experience) => {
    return parseInt(experience.replace(/\D/g, ""), 10);
  };

  const filteredDoctors = useMemo(() => {
    return doctorsData.filter((doctor) => {
      const matchesPlace = filters.place
        ? doctor.hospital.toLowerCase().includes(filters.place.toLowerCase())
        : true;
      const matchesFees = filters.maxFees
        ? doctor.fees <= Number(filters.maxFees)
        : true;
      const matchesExperience = filters.minExperience
        ? getNumericExperience(doctor.experience) >= Number(filters.minExperience)
        : true;
      return matchesPlace && matchesFees && matchesExperience;
    });
  }, [filters]);

  const openModal = (doctor) => setSelectedDoctor(doctor);
  const closeModal = () => setSelectedDoctor(null);

  

  return (
    <div style={styles.pageContainer}>
      <h3 style={styles.header}>DOCTORS INFORMATION</h3>

      <div style={styles.filterSectionContainer}>
        <h4 style={styles.filterHeading}>Search for Doctors</h4>
        <div style={styles.filterSection}>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Hospital/Place:</label>
            <input
              type="text"
              name="place"
              value={filters.place}
              onChange={handleFilterChange}
              placeholder="Enter hospital/place"
              style={styles.input}
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Max Fees:</label>
            <input
              type="number"
              name="maxFees"
              value={filters.maxFees}
              onChange={handleFilterChange}
              placeholder="Max Fees"
              style={styles.input}
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Min Experience:</label>
            <input
              type="number"
              name="minExperience"
              value={filters.minExperience}
              onChange={handleFilterChange}
              placeholder="Min Experience"
              style={styles.input}
            />
          </div>
        
        </div>
        <h4 style={styles.doctorCategoryHeading}>Nephrologists:</h4> {/* Heading added here */}
      </div>

      <div style={styles.doctorList}>
        {filteredDoctors.map((doctor, index) => (
          <div key={index} style={styles.doctorCard} onClick={() => openModal(doctor)}>
            <h4 style={styles.doctorName}>{doctor.name}</h4>
            <p style={styles.doctorRole}>{doctor.specialty}</p>
            <p>⭐ {doctor.rating} / 5</p>
            <p>Experience: {doctor.experience}</p>
            <p>Contact: {doctor.contact}</p>
            <button style={styles.profileButton}>View Profile</button>
          </div>
        ))}
      </div>

      {selectedDoctor && (
        <Modal
          visible={!!selectedDoctor}
          onCancel={closeModal}
          footer={null}
          title={`${selectedDoctor.name} - ${selectedDoctor.specialty}`}
        >
          <p><strong>Qualifications:</strong> {selectedDoctor.qualifications}</p>
          <p><strong>Experience:</strong> {selectedDoctor.experience}</p>
          <p><strong>Hospital:</strong> {selectedDoctor.hospital}</p>
          <p><strong>Clinic Address:</strong> {selectedDoctor.clinicAddress}</p>
          <p><strong>Fees:</strong> Rs. {selectedDoctor.fees}</p>
          <p><strong>Contact:</strong> {selectedDoctor.contact}</p>
          <p><strong>Email:</strong> {selectedDoctor.email}</p>
          <p><strong>Rating:</strong> {selectedDoctor.rating} / 5</p>
          <p><strong>Availability:</strong> {selectedDoctor.availability}</p>
          <p>{selectedDoctor.description}</p>
        </Modal>
      )}
    </div>
  );
};

const styles = {
  pageContainer: {
    background: '#f5f5dc',
    minHeight: '100vh',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    color: '#2c3e50',
    fontWeight: 'bold',
    fontSize: '50px',
    marginBottom: '20px',
  },
  filterSectionContainer: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  filterHeading: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '10px',
  },
  filterSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '30px',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center', // Aligns items in the center
  },
  label: {
    marginRight: '10px', // Adds space between label and input
    fontSize: '14px',
    color: '#4d4d4d',
  },
  input: {
    padding: '8px 12px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
  },
  doctorCategoryHeading: {
    marginTop: '20px',
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'left',
  },
  doctorList: {
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  },
  doctorCard: {
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.3s',
    display: 'flex',
    flexDirection: 'column',
  },
  doctorName: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  doctorRole: {
    fontSize: '16px',
    color: '#4d4d4d',
  },
  profileButton: {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    marginTop: 'auto',
  },
 
};

export default DoctorsInformation;
