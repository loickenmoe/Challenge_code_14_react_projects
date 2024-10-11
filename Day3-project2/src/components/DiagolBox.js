import "../styles/dialogBox.css";
import React, { useState, useEffect } from "react";

const DialogBox = () => {
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    // Change le background du body en fonction de l'état
    document.body.style.backgroundColor = subscribed ? "#ecbcbc" : "#87c9ad";

    // Nettoyage pour réinitialiser la couleur du body
    return () => {
      document.body.style.backgroundColor = "white"; // ou la couleur par défaut
    };
  }, [subscribed]); // Dépendance sur `subscribed`

  const handleSubscribe = () => {
    setSubscribed(true);
  };

  const handleUnsubscribe = () => {
    setSubscribed(false);
  };

  return (
    <div className={`dialog-container ${subscribed ? "subscribed" : ""}`}>
      {subscribed ? (
        <>
          <div className="flex-container">
            <div>
              <h1>Thank you,</h1>
              <p>for your inscription</p>
            </div>
            {/* icone insert */}
            <div role="img" aria-label="Souriant" style={{ fontSize: "2rem" }}>
              😊
            </div>
          </div>
          <button onClick={handleUnsubscribe}>Unsubscribe</button>
        </>
      ) : (
        <>
          <div className="flex-container">
            <div>
              <h1>Hello</h1>
              <p>Would you like to subscribe?</p>
            </div>
            {/* icone insert */}
            <div role="img" aria-label="Fâché" style={{ fontSize: "2rem" }}>
              😠
            </div>
          </div>
          <button onClick={() => alert("Cancelled")}>Cancel</button>
          <button onClick={handleSubscribe}>Subscribe</button>
        </>
      )}
    </div>
  );
};

export default DialogBox;
