// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function PatientsReport() {
//   const [file, setFile] = useState(null);
//   const [file2, setFile2] = useState(null);
//   const [file3, setFile3] = useState(null);
//   const [file4, setFile4] = useState(null);
//   const [file5, setFile5] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [popupMessage, setPopupMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showHistory, setShowHistory] = useState(false);
//   const [savedFileId, setSavedFileId] = useState(null); // Store the extracted ID from the first report

//   // Handlers for file input changes
//   const handleFileChange = (event) => setFile(event.target.files[0]);
//   const handleFile2Change = (event) => setFile2(event.target.files[0]);
//   const handleFile3Change = (event) => setFile3(event.target.files[0]);
//   const handleFile4Change = (event) => setFile4(event.target.files[0]);
//   const handleFile5Change = (event) => setFile5(event.target.files[0]);

//   // Helper function to extract the ID (digits) from the file name
//   const extractIdFromFileName = (fileName) => {
//     const match = fileName.match(/\d+/); // Extract digits from the file name
//     return match ? match[0] : null;
//   };

//   // Handler to upload the report file
//   const handleUpload = async (fileToUpload, reportType, isFirstReport = false) => {
//     if (!fileToUpload) {
//       alert("Please select a file first!");
//       return;
//     }

//     const fileId = extractIdFromFileName(fileToUpload.name);

//     if (isFirstReport) {
//       // First report: Accept without validation and store the ID
//       setSavedFileId(fileId);
//     } else {
//       // Validate ID for subsequent uploads
//       if (fileId !== savedFileId) {
//         setPopupMessage(
//           `Error: Uploaded report's ID (${fileId}) does not match the initial ID (${savedFileId}). Please upload the correct report.`
//         );
//         return;
//       }
//     }

//     // Proceed with the file upload
//     const formData = new FormData();
//     formData.append("file", fileToUpload);

//     try {
//       const res = await axios.post("http://127.0.0.1:5000/process-pdf", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       // Extract response data
//       const { message: responseMessage } = res.data;

//       // Update popup message
//       setPopupMessage(responseMessage || `${reportType} uploaded successfully.`);

//       // Fetch history after each successful upload
//       fetchHistory();
//     } catch (error) {
//       console.error("Error uploading the file:", error);
//       setPopupMessage("Error uploading the file. Please try again.");
//     }
//   };

//   // Individual upload handlers
//   const handleUploadFile1 = () => handleUpload(file, "Creatinine Report", true); // First report
//   const handleUploadFile2 = () => handleUpload(file2, "Serum Albumin Report");
//   const handleUploadFile3 = () => handleUpload(file3, "Serum Electrolyte Report");
//   const handleUploadFile4 = () => handleUpload(file4, "Urea Report");
//   const handleUploadFile5 = () => handleUpload(file5, "Urine Analysis Report");

//   // Close the popup message
//   const handleClosePopup = () => setPopupMessage("");

//   // Fetch the patient history from backend
//   const fetchHistory = async () => {
//     setLoading(true);

//     try {
//       const res = await axios.get("http://127.0.0.1:5000/patient-history");
//       setHistory(res.data);
//     } catch (error) {
//       console.error("Error fetching patient history:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchHistory();
//   }, []); // Fetch the history on component mount

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "300vh",
//         backgroundColor: "beige",
//         padding: "20px",
//         fontFamily: "'Arial', sans-serif",
//         color: "#333",
//         boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//         borderRadius: "8px",
//       }}
//     >
//       <h2 style={{ marginBottom: "20px", color: "#444" }}>Upload PDF Files</h2>

//       {/* File upload sections */}
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUploadFile1}>Upload Creatinine Report</button>

//       {file && (
//         <>
//           <input type="file" onChange={handleFile2Change} />
//           <button onClick={handleUploadFile2}>Upload Serum Albumin Report</button>
//         </>
//       )}

//       {file2 && (
//         <>
//           <input type="file" onChange={handleFile3Change} />
//           <button onClick={handleUploadFile3}>Upload Serum Electrolyte Report</button>
//         </>
//       )}

//       {file3 && (
//         <>
//           <input type="file" onChange={handleFile4Change} />
//           <button onClick={handleUploadFile4}>Upload Urea Report</button>
//         </>
//       )}

//       {file4 && (
//         <>
//           <input type="file" onChange={handleFile5Change} />
//           <button onClick={handleUploadFile5}>Upload Urine Analysis Report</button>
//         </>
//       )}

//       {/* Button to toggle history view */}
//       <button onClick={() => setShowHistory(!showHistory)}>
//         {showHistory ? "Hide History" : "Show History"}
//       </button>

//       {/* Display the popup message */}
//       {popupMessage && (
//         <div
//           style={{
//             position: "fixed",
//             bottom: "20px",
//             left: "50%",
//             transform: "translateX(-50%)",
//             backgroundColor: "#f8d7da",
//             color: "#721c24",
//             padding: "10px 20px",
//             borderRadius: "4px",
//             boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
//             zIndex: 1000,
//           }}
//         >
//           {popupMessage}
//           <button onClick={handleClosePopup}>&times;</button>
//         </div>
//       )}

//       {/* Patient History Display */}
//       {showHistory && (
//         <div style={{ marginTop: "20px", textAlign: "left", maxWidth: "600px" }}>
//           <h3>Patient History</h3>
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             <ul style={{ listStyleType: "none", padding: 0 }}>
//               {history.map((entry, index) => (
//                 <li
//                   key={index}
//                   style={{
//                     marginBottom: "10px",
//                     padding: "10px",
//                     border: "1px solid #ccc",
//                     borderRadius: "4px",
//                   }}
//                 >
//                   {Object.entries(entry).map(([key, value]) => (
//                     <div key={key} style={{ marginBottom: "5px" }}>
//                       <strong>{key}:</strong> {value}
//                     </div>
//                   ))}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default PatientsReport;



import React, { useState, useEffect } from "react";
import axios from "axios";

function PatientsReport() {
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);
  const [file5, setFile5] = useState(null);
  const [history, setHistory] = useState([]);
  const [popupMessage, setPopupMessage] = useState("");
  const [reminderPopup, setReminderPopup] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [savedFileId, setSavedFileId] = useState(null);

  // Handlers for file input changes
  const handleFileChange = (event) => setFile(event.target.files[0]);
  const handleFile2Change = (event) => setFile2(event.target.files[0]);
  const handleFile3Change = (event) => setFile3(event.target.files[0]);
  const handleFile4Change = (event) => setFile4(event.target.files[0]);
  const handleFile5Change = (event) => setFile5(event.target.files[0]);

  // Helper function to extract the ID (digits) from the file name
  const extractIdFromFileName = (fileName) => {
    const match = fileName.match(/\d+/);
    return match ? match[0] : null;
  };

  // Handler to upload the report file
  const handleUpload = async (fileToUpload, reportType, isFirstReport = false) => {
    if (!fileToUpload) {
      alert("Please select a file first!");
      return;
    }

    const fileId = extractIdFromFileName(fileToUpload.name);

    if (isFirstReport) {
      setSavedFileId(fileId);
    } else {
      if (fileId !== savedFileId) {
        setPopupMessage(
          `Error: Uploaded report's ID (${fileId}) does not match the initial ID (${savedFileId}). Please upload the correct report.`
        );
        return;
      }
    }

    const formData = new FormData();
    formData.append("file", fileToUpload);

    try {
      const res = await axios.post("http://127.0.0.1:5000/process-pdf", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { message: responseMessage } = res.data;
      setPopupMessage(responseMessage || `${reportType} uploaded successfully.`);
      fetchHistory();
    } catch (error) {
      console.error("Error uploading the file:", error);
      setPopupMessage("Error uploading the file. Please try again.");
    }
  };

  // Individual upload handlers
  const handleUploadFile1 = () => handleUpload(file, "Creatinine Report", true);
  const handleUploadFile2 = () => handleUpload(file2, "Serum Albumin Report");
  const handleUploadFile3 = () => handleUpload(file3, "Serum Electrolyte Report");
  const handleUploadFile4 = () => handleUpload(file4, "Urea Report");
  const handleUploadFile5 = () => handleUpload(file5, "Urine Analysis Report");

  // Close the popup message
  const handleClosePopup = () => setPopupMessage("");
  const handleCloseReminderPopup = () => setReminderPopup(false);

  // Fetch the patient history from backend
  const fetchHistory = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://127.0.0.1:5000/patient-history");
      setHistory(res.data);
    } catch (error) {
      console.error("Error fetching patient history:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "300vh",
        backgroundColor: "beige",
        padding: "20px",
        fontFamily: "'Arial', sans-serif",
        color: "#333",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#444" }}>Upload PDF Files</h2>

      {/* Reminder popup for file naming */}
      {reminderPopup && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#f8f9fa",
            color: "#212529",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            zIndex: 1000,
            textAlign: "center",
            width: "80%",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Important Instructions</h3>
          <p>
            Please rename your reports in the following format before uploading:
          </p>
          <ul style={{ textAlign: "left", margin: "10px auto", maxWidth: "400px" }}>
            <li><strong>Creatinine-ID</strong> (e.g., Creatinine-09876543)</li>
            <li><strong>Serum_Albumin-ID</strong> (e.g., Serum_Albumin-09876543)</li>
            <li><strong>Serum_Electrolyte-ID</strong> (e.g., Serum_Electrolyte-09876543)</li>
            <li><strong>Urea-ID</strong> (e.g., Urea-09876543)</li>
            <li><strong>Urine_Dr-ID</strong> (e.g., Urine_Dr-09876543)</li>
          </ul>
          <button
            onClick={handleCloseReminderPopup}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Got it!
          </button>
        </div>
      )}

      {/* File upload sections */}
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUploadFile1}>Upload Creatinine Report</button>

      {file && (
        <>
          <input type="file" onChange={handleFile2Change} />
          <button onClick={handleUploadFile2}>Upload Serum Albumin Report</button>
        </>
      )}

      {file2 && (
        <>
          <input type="file" onChange={handleFile3Change} />
          <button onClick={handleUploadFile3}>Upload Serum Electrolyte Report</button>
        </>
      )}

      {file3 && (
        <>
          <input type="file" onChange={handleFile4Change} />
          <button onClick={handleUploadFile4}>Upload Urea Report</button>
        </>
      )}

      {file4 && (
        <>
          <input type="file" onChange={handleFile5Change} />
          <button onClick={handleUploadFile5}>Upload Urine Analysis Report</button>
        </>
      )}

      {/* Button to toggle history view */}
      <button onClick={() => setShowHistory(!showHistory)}>
        {showHistory ? "Hide History" : "Show History"}
      </button>

      {/* Display the popup message */}
      {popupMessage && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            padding: "10px 20px",
            borderRadius: "4px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
          }}
        >
          {popupMessage}
          <button onClick={handleClosePopup}>&times;</button>
        </div>
      )}

      {/* Patient History Display */}
      {showHistory && (
        <div style={{ marginTop: "20px", textAlign: "left", maxWidth: "600px" }}>
          <h3>Patient History</h3>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {history.map((entry, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "10px",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                >
                  {Object.entries(entry).map(([key, value]) => (
                    <div key={key} style={{ marginBottom: "5px" }}>
                      <strong>{key}:</strong> {value}
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default PatientsReport;
