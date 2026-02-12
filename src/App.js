import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Submitted Successfully!");
    console.log(formData);
  };

  return (
    <div className="container">
      <header>
        <h2>ADEi University Digital Registrar</h2>
        <p>New Student Registration Page</p>
      </header>

      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <fieldset>
          <legend>Personal Information</legend>
          <div className="grid-row-4">
            <label>First Name <input type="text" required /></label>
            <label>Middle Name <input type="text" /></label>
            <label>Last Name <input type="text" required /></label>
            <label>Suffix <input type="text" /></label>
          </div>
          <div className="grid-row-3">
            <label>Date of Birth 
              <input type="date" onKeyDown={(e) => e.preventDefault()} required />
            </label>
            <label>Gender
              <select required>
                <option value="">Select...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
              </select>
            </label>
            <label>Nationality
              <select required>
                <option value="Filipino">Filipino</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>
        </fieldset>

        {/* Contact Details */}
        <fieldset>
          <legend>Contact Details</legend>
          <div className="grid-row-3">
            <label>Email <input type="email" required /></label>
            <label>Mobile <input type="tel" required /></label>
            <label>Landline <input type="tel" /></label>
          </div>
          <div className="grid-row-2">
            <label>Street Address <input type="text" required /></label>
            <label>Barangay <input type="text" required /></label>
          </div>
        </fieldset>

        {/* Academic History */}
        <fieldset>
          <legend>Academic History (Senior High School)</legend>
          <div className="grid-row-2">
            <label>SHS Name <input type="text" required /></label>
            <label>SHS Address <input type="text" required /></label>
          </div>
          <div className="grid-row-2">
            <label>Year Graduated 
              <input type="number" min="1900" max="2026" required />
            </label>
            <label>Grade Average 
              <input type="number" step="0.01" required />
            </label>
          </div>
        </fieldset>

        {/* Enrollment Choices */}
        <fieldset>
          <legend>Enrollment Choices</legend>
          <div className="radio-group">
            <p>Campus:</p>
            <label><input type="radio" name="campus" value="Manila" /> Manila</label>
            <label><input type="radio" name="campus" value="QC" /> Quezon City</label>
          </div>
          <div className="grid-row-2">
            <label>College Department
              <select required>
                <option value="">Select Department...</option>
                <option value="CEA">College of Engineering & Architecture</option>
                <option value="CCS">College of Computer Studies</option>
              </select>
            </label>
            <label>Degree Program
              <select required>
                <option value="">Select Program...</option>
                <option value="BSCpE">BS Computer Engineering</option>
                <option value="BSCS">BS Computer Science</option>
              </select>
            </label>
          </div>
        </fieldset>

        <button type="submit" className="submit-btn">Submit Registration</button>
      </form>
    </div>
  );
}

export default App;