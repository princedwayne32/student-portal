import React, { useState } from 'react';
import './App.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully! Check the console for data.");
  };

  // Prevent typing in number fields that should be integers only
  const handleIntegerOnly = (e) => {
    if (["e", "E", "+", "-", "."].includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="container">
      <header>
        <h2>ADEi University Digital Registrar</h2>
        <p>Student Registration Portal</p>
      </header>

      <form onSubmit={handleSubmit}>
        {/* PERSONAL INFORMATION */}
        <fieldset>
          <legend>Personal Information</legend>
          <div className="grid-row-4">
            <label>First Name 
              <input type="text" required pattern="[A-Za-z\s]+" title="Letters only" />
            </label>
            <label>Middle Name 
              <input type="text" pattern="[A-Za-z\s]+" title="Letters only" />
            </label>
            <label>Last Name 
              <input type="text" required pattern="[A-Za-z\s]+" title="Letters only" />
            </label>
            <label>Suffix 
              <input type="text" placeholder="e.g. Jr." pattern="[A-Za-z\s.]+" />
            </label>
          </div>
          <div className="grid-row-3">
            <label>Date of Birth 
              <input type="date" required onKeyDown={(e) => e.preventDefault()} />
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
                <option value="">Select...</option>
                <option value="Filipino">Filipino</option>
                <option value="Others">Others</option>
              </select>
            </label>
          </div>
          <div className="grid-row-1">
            <label>Religion 
              <input type="text" required pattern="[A-Za-z\s]+" title="Letters only" />
            </label>
          </div>
        </fieldset>

        {/* CONTACT DETAILS */}
        <fieldset>
          <legend>Contact Details</legend>
          <div className="grid-row-3">
            <label>Email Address <input type="email" required /></label>
            <label>Mobile Number <input type="tel" required placeholder="09XXXXXXXXX" /></label>
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

        {/* ACADEMIC HISTORY */}
        <fieldset>
          <legend>Academic History</legend>
          {['Grade School', 'Junior High School'].map((level) => (
            <div key={level} className="sub-section-group">
              <h4>{level}</h4>
              <div className="grid-row-3">
                <label>School Name <input type="text" required /></label>
                <label>Year Graduated 
                  <input type="number" min="1900" max="2026" required onKeyDown={handleIntegerOnly} />
                </label>
                <label>School Address <input type="text" required /></label>
              </div>
            </div>
          ))}
          
          <div className="sub-section-group">
            <h4>Senior High School</h4>
            <div className="grid-row-4">
              <label>School Name <input type="text" required /></label>
              <label>Year Graduated 
                <input type="number" min="1900" max="2026" required onKeyDown={handleIntegerOnly} />
              </label>
              <label>Grade Average 
                <input type="number" step="0.01" required />
              </label>
              <label>School Address <input type="text" required /></label>
            </div>
          </div>
        </fieldset>

        {/* ENROLLMENT CHOICES */}
        <fieldset>
          <legend>Enrollment Choices</legend>
          <div className="choice-container">
            <div className="radio-group">
              <p>Academic Level:</p>
              <label><input type="radio" name="level" required /> Undergraduate</label>
              <label><input type="radio" name="level" /> Graduate</label>
            </div>
            <div className="radio-group">
              <p>Semester:</p>
              <label><input type="radio" name="semester" required /> 1st Sem</label>
              <label><input type="radio" name="semester" /> 2nd Sem</label>
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
                <option value="">Select Dept.</option>
                <option>College of Engineering and Architecture</option>
                <option>College of Computer Studies</option>
                <option>College of Business Education</option>
              </select>
            </label>
            <label>Degree Program
              <select required>
                <option value="">Select Degree</option>
                <option>BS Computer Engineering</option>
                <option>BS Computer Science</option>
                <option>BS Architecture</option>
                <option>BS Information Technology</option>
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