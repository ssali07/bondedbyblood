import React, { useState } from "react";
import "./OrganPledgeModal.css";

const organsList = [
  "Heart", "Kidney", "Liver", "Lung", "Pancreas", "Intestines", "Hands", "Face",
  "Corneas", "Skin", "Middle Ear", "Bones", "Heart Valves", "Cartilage", "Tendons", "Ligaments"
];

function OrganPledgeModal({ isOpen, onClose, onSelectOrgans, selectedOrgans }) {
  const [tempSelectedOrgans, setTempSelectedOrgans] = useState(selectedOrgans || []);

  if (!isOpen) return null;

  const handleCheckboxChange = (organ) => {
    setTempSelectedOrgans((prev) =>
      prev.includes(organ) ? prev.filter((o) => o !== organ) : [...prev, organ]
    );
  };

  const handleSubmit = () => {
    onSelectOrgans(tempSelectedOrgans); // Pass data back to Register component
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Select Organ to Pledge</h2>
        <div id="organs">
          {organsList.map((organ, index) => (
            <label key={index} className="modal-label">
              <input
                type="checkbox"
                className="modal-checkbox"
                value={organ}
                checked={tempSelectedOrgans.includes(organ)}
                onChange={() => handleCheckboxChange(organ)}
              /> {organ}
            </label>
          ))}
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default OrganPledgeModal;
