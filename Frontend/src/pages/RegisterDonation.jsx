import React, { useState } from "react";
import OrganPledgeModal from "./OrganPledgeModal";
import "./Register.css";

function Register() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

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
    const {
      fName,
      lName,
      contact,
      email,
      dateOfBirth,
      sex,
      bloodGroup,
      height,
      weight,
      location,
    } = formData;

    if (
      !fName ||
      !lName ||
      !contact ||
      !email ||
      !dateOfBirth ||
      !sex ||
      !bloodGroup ||
      !height ||
      !weight ||
      !location
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    alert(`
      Registration Successful!
      Name: ${fName} ${lName}
      Contact: ${contact}
      Email: ${email}
      DOB: ${dateOfBirth}
      Sex: ${sex}
      Blood Group: ${bloodGroup}
      Height: ${height}
      Weight: ${weight}
      Location: ${location}
      Organs to Donate: ${selectedOrgans.join(", ")}
    `);

    // Add API call or further submission logic here
  };

  return (
    <div className="register-container">
      <h1>Register for Donation</h1>
      <h2>Be a Real Hero!</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-row">
          <input
            type="text"
            name="fName"
            placeholder="First Name"
            value={formData.fName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="lName"
            placeholder="Last Name"
            value={formData.lName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="tel"
            name="contact"
            placeholder="Contact"
            value={formData.contact}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="dateOfBirth"
            placeholder="Date of Birth (18+)"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="number"
            name="height"
            placeholder="Height (cm)"
            value={formData.height}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="weight"
            placeholder="Weight (kg)"
            value={formData.weight}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <select
            name="sex"
            value={formData.sex}
            onChange={handleInputChange}
            required
          >
            <option value="">Sex</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="N">Non Binary</option>
            <option value="X">Prefer not to disclose</option>
          </select>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleInputChange}
            required
          >
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
          <button className="submit-button-organpledge" onClick={openModal}>
            Select Organ to Pledge
          </button>
          <OrganPledgeModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
        
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
