import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '', middleName: '', lastName: '', suffix: '', religion: '',
    email: '', mobile: '', landline: '',
    street: '', barangay: '', city: '', province: '', zip: '',
    gsName: '', gsYear: '', gsAddress: '',
    jhsName: '', jhsYear: '', jhsAddress: '',
    shsName: '', shsYear: '', shsAverage: '', shsAddress: '',
    academicLevel: '', deptOrType: '', degree: ''
  });

  const programData = {
    Undergraduate: {
      "College of Engineering and Architecture": ["BS Architecture", "BS Chemical Engineering", "BS Civil Engineering", "BS Computer Engineering", "BS Electrical Engineering", "BS Electronics Engineering", "BS Industrial Engineering", "BS Mechanical Engineering"],
      "College of Computer Studies": ["BS Computer Science", "BS Data Science and Analytics", "BS Entertainment and Multimedia Computing", "BS Information Technology"],
      "College of Business Education": ["BS Accountancy", "BS Accounting Information System", "BS Business Administration (Financial Management)", "BS Business Administration (Human Resource Management)", "BS Business Administration (Logistics and Supply Chain Management)", "BS Business Administration (Marketing Management)"],
      "College of Arts": ["Bachelor of Arts in English Language", "Bachelor of Arts in Political Science"]
    },
    Graduate: {
      "Doctorate Degrees": ["Doctor in Information Technology", "Doctor of Engineering with Specialization in Computer Engineering", "Doctor of Philosophy in Computer Science"],
      "Master's Degrees": ["Master in Information Systems", "Master in Information Technology", "Master in Logistics and Supply Chain Management", "Master of Engineering with Specialization in Civil Engineering", "Master of Engineering with Specialization in Computer Engineering", "Master of Engineering with Specialization in Electrical Engineering", "Master of Engineering with Specialization in Electronics Engineering", "Master of Engineering with Specialization in Industrial Engineering", "Master of Engineering with Specialization in Mechanical Engineering", "Master of Science in Computer Science"]
    }
  };

  // STRICT FILTER: Letters and spaces only
  const handleString = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value.replace(/[^A-Za-z\s]/g, "") });
  };

  // STRICT FILTER: Numbers only with length limit
  const handleNumeric = (e, limit) => {
    const { name, value } = e.target;
    const digits = value.replace(/\D/g, "");
    if (digits.length <= limit) setFormData({ ...formData, [name]: digits });
  };

  // STRICT FILTER: GPA (Max 5.0)
  const handleGPA = (e) => {
    const val = e.target.value;
    if (val === '' || (parseFloat(val) <= 5 && val.length <= 4)) {
      setFormData({ ...formData, shsAverage: val });
    }
  };

  return (
    <div className="container">
      <header>
        <h2>ADEi University Digital Registrar</h2>
        <p>Student Enrollment Portal</p>
      </header>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* PERSONAL INFORMATION */}
        <fieldset>
          <legend>Personal Information</legend>
          <div className="grid-4">
            <label>First Name <input type="text" name="firstName" value={formData.firstName} onChange={handleString} required /></label>
            <label>Middle Name <input type="text" name="middleName" value={formData.middleName} onChange={handleString} /></label>
            <label>Last Name <input type="text" name="lastName" value={formData.lastName} onChange={handleString} required /></label>
            <label>Suffix <input type="text" name="suffix" value={formData.suffix} onChange={handleString} /></label>
          </div>
          <div className="grid-3">
            <label>Date of Birth <input type="date" required onKeyDown={(e) => e.preventDefault()} /></label>
            <label>Gender
              <select required>
                <option value="">Select...</option>
                <option>Male</option><option>Female</option><option>Non-binary</option>
              </select>
            </label>
            <label>Nationality
              <select required>
                <option value="">Select...</option>
                <option>Filipino</option><option>Foreign National</option>
              </select>
            </label>
          </div>
          <label>Religion <input type="text" name="religion" value={formData.religion} onChange={handleString} required /></label>
        </fieldset>

        {/* CONTACT DETAILS */}
        <fieldset>
          <legend>Contact Details</legend>
          <div className="grid-3">
            <label>Email <input type="email" required /></label>
            <label>Mobile (11 Digits) <input type="text" name="mobile" value={formData.mobile} onChange={(e) => handleNumeric(e, 11)} required /></label>
            <label>Landline (10 Digits) <input type="text" name="landline" value={formData.landline} onChange={(e) => handleNumeric(e, 10)} /></label>
          </div>
          <div className="grid-3">
            <label>Street <input type="text" required /></label>
            <label>Barangay <input type="text" required /></label>
            <label>City <input type="text" name="city" value={formData.city} onChange={handleString} required /></label>
          </div>
          <div className="grid-2">
            <label>Province <input type="text" name="province" value={formData.province} onChange={handleString} required /></label>
            <label>Zip Code <input type="text" name="zip" value={formData.zip} onChange={(e) => handleNumeric(e, 4)} required /></label>
          </div>
        </fieldset>

        {/* ACADEMIC HISTORY */}
        <fieldset>
          <legend>Academic History</legend>
          <div className="academic-block">
            <h4>Grade School</h4>
            <div className="grid-3">
              <label>School Name <input type="text" name="gsName" value={formData.gsName} onChange={handleString} required /></label>
              <label>Year Graduated <input type="text" name="gsYear" value={formData.gsYear} onChange={(e) => handleNumeric(e, 4)} required /></label>
              <label>Address <input type="text" required /></label>
            </div>
            <h4>Junior High School</h4>
            <div className="grid-3">
              <label>School Name <input type="text" name="jhsName" value={formData.jhsName} onChange={handleString} required /></label>
              <label>Year Graduated <input type="text" name="jhsYear" value={formData.jhsYear} onChange={(e) => handleNumeric(e, 4)} required /></label>
              <label>Address <input type="text" required /></label>
            </div>
            <h4>Senior High School</h4>
            <div className="grid-4">
              <label>School Name <input type="text" name="shsName" value={formData.shsName} onChange={handleString} required /></label>
              <label>Year Graduated <input type="text" name="shsYear" value={formData.shsYear} onChange={(e) => handleNumeric(e, 4)} required /></label>
              <label>Grade Average <input type="number" step="0.01" value={formData.shsAverage} onChange={handleGPA} required /></label>
              <label>Address <input type="text" required /></label>
            </div>
          </div>
        </fieldset>

        {/* ENROLLMENT CHOICES */}
        <fieldset>
          <legend>Enrollment Choices</legend>
          <div className="choice-row">
            <div className="radio-box">
              <p>Academic Level:</p>
              <label><input type="radio" name="level" value="Undergraduate" onChange={(e) => setFormData({...formData, academicLevel: e.target.value, deptOrType: '', degree: ''})} /> Undergraduate</label>
              <label><input type="radio" name="level" value="Graduate" onChange={(e) => setFormData({...formData, academicLevel: e.target.value, deptOrType: '', degree: ''})} /> Graduate</label>
            </div>
            <div className="radio-box">
              <p>Semester:</p>
              <label><input type="radio" name="sem" /> 1st Sem</label>
              <label><input type="radio" name="sem" /> 2nd Sem</label>
            </div>
            <div className="radio-box">
              <p>Campus:</p>
              <label><input type="radio" name="campus" /> Manila</label>
              <label><input type="radio" name="campus" /> Quezon City</label>
            </div>
          </div>

          {formData.academicLevel && (
            <div className="grid-2 fade-in">
              <label>{formData.academicLevel === 'Undergraduate' ? 'College Department' : 'Program Type'}
                <select value={formData.deptOrType} onChange={(e) => setFormData({...formData, deptOrType: e.target.value, degree: ''})} required>
                  <option value="">-- Select --</option>
                  {Object.keys(programData[formData.academicLevel]).map(item => <option key={item} value={item}>{item}</option>)}
                </select>
              </label>
              <label>Degree Program
                <select value={formData.degree} onChange={(e) => setFormData({...formData, degree: e.target.value})} disabled={!formData.deptOrType} required>
                  <option value="">-- Select Degree --</option>
                  {formData.deptOrType && programData[formData.academicLevel][formData.deptOrType].map(deg => <option key={deg} value={deg}>{deg}</option>)}
                </select>
              </label>
            </div>
          )}
        </fieldset>

        <button type="submit" className="submit-btn">Submit Registration</button>
      </form>
    </div>
  );
}

export default App;