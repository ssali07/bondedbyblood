import React, { useState } from "react";
import OrganPledgeModal from "./OrganPledgeModal";
import "./Register.css";

function Register() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedOrgans, setSelectedOrgans] = useState([]); // State for selected organs

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const updateSelectedOrgans = (organs) => {
    setSelectedOrgans(organs); // Update selected organs
  };

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    contact: "",
    email: "",
    dateOfBirth: "",
    sex: "",
    bloodGroup: "",
    height: "",
    weight: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (Object.values(formData).some(field => !field)) {
      alert("Please fill out all required fields.");
      return;
    }

    alert(`
      Registration Successful!
      Name: ${formData.fName} ${formData.lName}
      Contact: ${formData.contact}
      Email: ${formData.email}
      DOB: ${formData.dateOfBirth}
      Sex: ${formData.sex}
      Blood Group: ${formData.bloodGroup}
      Height: ${formData.height}
      Weight: ${formData.weight}
      Location: ${formData.location}
      Organs to Donate: ${selectedOrgans.length > 0 ? selectedOrgans.join(", ") : "None"}
    `);

    // Add API call or further submission logic here
  };

  return (
    <div className="register-container">
      <h1>Register for Donation</h1>
      <h2>Be a Real Hero!</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-row">
          <input type="text" name="fName" placeholder="First Name" value={formData.fName} onChange={handleInputChange} required />
          <input type="text" name="lName" placeholder="Last Name" value={formData.lName} onChange={handleInputChange} required />
        </div>
        <div className="form-row">
          <input type="tel" name="contact" placeholder="Contact" value={formData.contact} onChange={handleInputChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} required />
          <input type="date" name="dateOfBirth" placeholder="Date of Birth (18+)" value={formData.dateOfBirth} onChange={handleInputChange} required />
        </div>
        <div className="form-row">
          <input type="number" name="height" placeholder="Height (cm)" value={formData.height} onChange={handleInputChange} required />
          <input type="number" name="weight" placeholder="Weight (kg)" value={formData.weight} onChange={handleInputChange} required />
        </div>
        <div className="form-row">
          <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleInputChange} required />
        </div>
        <div className="form-row">
          <select name="sex" value={formData.sex} onChange={handleInputChange} required>
            <option value="">Sex</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="N">Non Binary</option>
            <option value="X">Prefer not to disclose</option>
          </select>
          <select name="bloodGroup" value={formData.bloodGroup} onChange={handleInputChange} required>
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          <button className="submit-button-organpledge" type="button" onClick={openModal}>
            Select Organ to Pledge
          </button>
        </div>

        {/* Modal Component with props */}
        <OrganPledgeModal isOpen={isModalOpen} onClose={closeModal} onSelectOrgans={updateSelectedOrgans} selectedOrgans={selectedOrgans} />

        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
}

export default Register;
