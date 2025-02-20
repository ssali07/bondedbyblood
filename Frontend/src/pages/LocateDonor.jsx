import React, { useState } from "react";
import "./LocateDonor.css";

function LocateDonor() {
  const [queryType, setQueryType] = useState("null");
  const [location, setLocation] = useState("");
  const [bloodGroup, setBloodGroup] = useState("null");
  const [organ, setOrgan] = useState("null");
  const [range, setRange] = useState("null");

  const handleQueryTypeChange = (event) => {
    setQueryType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      queryType,
      location,
      bloodGroup: queryType === "B" ? bloodGroup : null,
      organ: queryType === "O" ? organ : null,
      range,
    };
    console.log("Search Data:", formData);
    alert("Search submitted! Check the console for details.(backend in progress)");
    // Add API integration or further logic here.
  };

  return (
    <div className="locate-donor-container">
      <h2>Locate a Donor</h2>
      <div className="row">
        <select
          name="type"
          id="type"
          value={queryType}
          onChange={handleQueryTypeChange}
          required
        >
          <option value="null">Select Query Type</option>
          <option value="O">Organ</option>
          <option value="B">Blood</option>
        </select>
      </div>
      <form id="search_module" onSubmit={handleSubmit}>
        <div className="row">
          {queryType === "B" && (
            <select
              name="bloodGroup"
              id="bgrp"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              required
            >
              <option value="null">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+,A-,B+,B-,AB+,AB-,O+,O-">All</option>
            </select>
          )}
          {queryType === "O" && (
            <select
              name="organ"
              id="organ"
              value={organ}
              onChange={(e) => setOrgan(e.target.value)}
              required
            >
              <option value="null">Select Organ/Tissue</option>
              <option value="Kidney">Kidney</option>
              <option value="Liver">Liver</option>
              <option value="Lung">Lung</option>
              <option value="Pancreas">Pancreas</option>
              <option value="Heart">Heart</option>
              <option value="Intestines">Intestines</option>
              <option value="Hands">Hand</option>
              <option value="Corneas">Corneas</option>
              <option value="Face">Face</option>
              <option value="Skin">Skin</option>
              <option value="Middle Ear">Middle Ear</option>
              <option value="Heart Valves">Heart Valves</option>
              <option value="Cartilage">Cartilage</option>
              <option value="Tendons">Tendons</option>
              <option value="Ligaments">Ligaments</option>
            </select>
          )}
          <select
            name="range"
            id="range"
            value={range}
            onChange={(e) => setRange(e.target.value)}
            required
          >
            <option value="null">Select Range (in kms)</option>
            <option value="5000">5</option>
            <option value="10000">10</option>
            <option value="20000">20</option>
            <option value="99999999">20</option>
          </select>
        </div>
        <div className="row">
          <input
            type="text"
            placeholder="Location"
            name="location"
            id="geocoder"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="row">
          <button type="submit" className="submit-button">
            Find
          </button>
        </div>
      </form>
    </div>
  );
}

export default LocateDonor;
