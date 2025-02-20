import React from "react";
import "./OrganPledgeModal.css";

const organsList = [
  "Heart",
  "Kidney",
  "Liver",
  "Lung",
  "Pancreas",
  "Intestines",
  "Hands",
  "Face",
  "Corneas",
  "Skin",
  "Middle Ear",
  "Bones",
  "Heart Valves",
  "Cartilage",
  "Tendons",
  "Ligaments",
];

function OrganPledgeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Select Organ to Pledge</h2>
        <div id="organs">
          {organsList.map((organ, index) => (
            <label key={index} className="modal-label">
              <input type="checkbox" className="modal-checkbox" value={organ} /> {organ}
            </label>
          ))}
        </div>
        <button className="submit-button" onClick={onClose}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default OrganPledgeModal;
