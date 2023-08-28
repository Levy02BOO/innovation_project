import React, { useState } from 'react';
import './App.css'; // Import your CSS file


const Audit = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };
  return (
    <div className="body">
      <div className="container">
        <h1>Submit Your Audit</h1>
        <form action="Audit.php" method="post">
          <label>Name:</label>
          <input type="text" name="name" maxLength="20" required pattern="[A-Za-z0-9 ,.!]+" title="name" /><br />

          <label>Company Name:</label>
          <input type="text" name="company" maxLength="40" required pattern="[A-Za-z0-9 ,.!]+" title="Max 20 alphanumeric characters, spaces, comma, period, exclamation point" /><br />

          <label>Description:</label>
          <textarea name="description" rows="4" cols="50" maxLength="250" required></textarea><br />

          <label>Date:</label>
          <input type="date" name="date" required /><br />

          <label>Your email address:</label>
          <input type="text" name="email" maxLength="40"  title="email" /><br />

          <label>Phone Number:</label>
          <input type="text" name="phonenum" required pattern="+\\d{2-3}-\\d{9}" title="phonenum" /><br />

          <label>Password:</label>
          <input type="text" name="pwd" maxLength="15" required pattern="[A-Za-z0-9 ,.!]+" title="pwd" /><br />
          <div className="upload-section">
        <label className="upload-label">Upload Your .sol File:</label>
        <input type="file" accept=".sol" onChange={handleFileUpload} />
        {uploadedFile && (
          <div className="uploaded-file">
            <p>Uploaded File: {uploadedFile.name}</p>
            {/* Display other processing results here */}
          </div>
        )}
      </div>
          <input className="submit" type="submit" value="Submit" />
        </form>
        

        <div className="footer-nav">
          <a href="homepage.js">Back to Home Page</a>
        </div>
      </div>
    </div>
  );
};

export default Audit;
