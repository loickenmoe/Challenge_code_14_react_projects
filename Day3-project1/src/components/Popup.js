import React, { useState } from "react";
import "../styles/popup.css";

function Popup({ children, onClose }) {
  const [backgroundColor, setBackgroundColor] = useState("#fff"); // Couleur initiale
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    // Générer une couleur aléatoire au format hexadécimal
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div>
      <h1>Magic Popup App</h1>
      <button className="openPopup" onClick={handleOpen}>
        Open Popup
      </button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content" style={{ backgroundColor }}>
            <h4>Time out popup</h4>
            {children}
            <button className="closePopup" onClick={handleClose}>
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
