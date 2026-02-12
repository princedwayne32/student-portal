import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Submitted Successfully!");
  };

  return (
    <div className="container">
      <header>
        <h2>ADEi University Digital Registrar</h2>
        <p>Complete the form below for institutional records.</p>
      </header>

      <form onSubmit={handleSubmit}>
        {/* Personal Information Section  */}
        <fieldset>
          <legend>Personal Information</legend>
          <div className="grid-row-4">
            <label>First Name <input type="text" required /></label>
            <label>Middle Name <input type="text" /></label>
            <label>Last Name <input type="text" required /></label>
            <label>Suffix <input type="text" placeholder="e.g. Jr." /></label>
          </div>
          <div className="grid-row-3">
            <label>Date of Birth 
              <input type="date" onKeyDown={(e) => e.preventDefault()} required />
            </label>
            <label>Gender
              <select required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
              </select>
            </label>
            <label>Nationality
              <select required>
                <option value="">Select Nationality</option>
                <option value="Filipino">Filipino</option>
                <option value="American">American</option>
                <option value="Chinese">Chinese</option>
              </select>
            </label>
          </div>
          <div className="grid-row-1">
            <label>Religion <input type="text" required /></label>
          </div>
        </fieldset>

        {/* Contact Details Section  */}
        <fieldset>
          <legend>Contact Details</legend>
          <div className="grid-row-3">
            <label>Email Address <input type="email" required /></label>
            <label>Mobile Number <input type="tel" placeholder="09XXXXXXXXX" required /></label>
            <label>Landline <input type="tel" /></label>
          </div>
          <div className="grid-row-2">
            <label>Street / Unit <input type="text" required /></label>
            <label>Barangay <input type="text" required /></label>
          </div>
          <div className="grid-row-3">
            <label>City <input type="text" required /></label>
            <label>Province <input type="text" required /></label>
            <label>Zip Code <input type="text" required /></label>
          </div>
        </fieldset>

        {/* Academic History Section  */}
        <fieldset>
          <legend>Academic History</legend>
          {/* Grade School */}
          <h4 className="sub-section">Grade School</h4>
          <div className="grid-row-3">
            <label>School Name <input type="text" required /></label>
            <label>Year Graduated <input type="number" min="1900" max="2026" required /></label>
            <label>School Address <input type="text" required /></label>
          </div>
          
          {/* Junior High School */}
          <h4 className="sub-section">Junior High School</h4>
          <div className="grid-row-3">
            <label>School Name <input type="text" required /></label>
            <label>Year Graduated <input type="number" min="1900" max="2026" required /></label>
            <label>School Address <input type="text" required /></label>
          </div>

          {/* Senior High School */}
          <h4 className="sub-section">Senior High School</h4>
          <div className="grid-row-4">
            <label>School Name <input type="text" required /></label>
            <label>Year Graduated <input type="number" min="1900" max="2026" required /></label>
            <label>Grade Average <input type="number" step="0.01" required /></label>
            <label>School Address <input type="text" required /></label>
          </div>
        </fieldset>

        {/* Enrollment Choices Section  */}
        <fieldset>
          <legend>Enrollment Choices</legend>
          <div className="choice-flex">
            <div className="radio-group">
              <p>Academic Level:</p>
              <label><input type="radio" name="level" required /> Undergraduate</label>
              <label><input type="radio" name="level" /> Graduate</label>
            </div>
            <div className="radio-group">
              <p>Semester:</p>
              <label><input type="radio" name="sem" required /> 1st Sem</label>
              <label><input type="radio" name="sem" /> 2nd Sem</label>
            </div>
            <div className="radio-group">
              <p>Campus:</p>
              <label><input type="radio" name="campus" required /> Manila</label>
              <label><input type="radio" name="campus" /> Quezon City</label>
            </div>
          </div>

          <div className="grid-row-2">
            <label>College Department
              <select required>
                <option value="">Select...</option>
                <option>College of Engineering and Architecture</option>
                <option>College of Computer Studies</option>
                <option>College of Business Education</option>
                <option>College of Arts</option>
              </select>
            </label>
            <label>Degree Program
              <select required>
                <option value="">Select...</option>
                {/* Engineering  */}
                <optgroup label="Engineering">
                  <option>BS Architecture</option>
                  <option>BS Chemical Engineering</option>
                  <option>BS Civil Engineering</option>
                  <option>BS Computer Engineering</option>
                  <option>BS Electronics Engineering</option>
                </optgroup>
                {/* Computer Studies  */}
                <optgroup label="Computer Studies">
                  <option>BS Computer Science</option>
                  <option>BS Information Technology</option>
                  <option>BS Data Science and Analytics</option>
                </optgroup>
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