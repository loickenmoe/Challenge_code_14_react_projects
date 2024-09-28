import React, { useState } from "react";
import LockSlider from "./LockSlider";
import { AiFillUnlock } from "react-icons/ai";
import LockScreenImg from "../assets/moon.jpg";
import HomeScreenImg from "../assets/home.jpg";

function SlideToUnlock() {
  const [uiProps, setUiProps] = useState({
    uiText: "Unlock screen",
    uiColor: "#eee",
    uiBg: `url(${LockScreenImg}) center/cover no-repeat`,
  });

  const [showLockSlider, setShowLockSlider] = useState(true);
  const [lockSliderValue, setLockSliderValue] = useState(0);

  //fonction de changement   en fonction  de l'etat ( lock ou unlock)
  const handleLockSliderInput = (e) => {
    const sliderValue = e.target.value;
    setLockSliderValue(sliderValue);

    if (sliderValue == 0) {
      setUiProps({
        ...uiProps,
        uiText: "Unlock screen",
        uiBg: `url(${LockScreenImg}) center/cover no-repeat`,
      });
    } else if (sliderValue == 100) {
      setUiProps({
        ...uiProps,
        uiText: "Welcome Home",
        uiBg: `url(${HomeScreenImg}) center/cover no-repeat`,
      });
    }

    if (sliderValue >= 100) {
      setShowLockSlider(false);
    }
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "15vh auto",
        height: "70vh",
        width: "340px",
        border: "4px solid #000",
        borderRadius: 20,
        padding: "0 30px",
        boxShadow: " shadow-md",
        background: uiProps.uiBg,
      }}
    >
      <h1 className="title" style={{ color: uiProps.uiColor }}>
        {uiProps.uiText}
      </h1>
      {showLockSlider ? (
        <LockSlider
          width={"250px"}
          handleInput={handleLockSliderInput}
          value={lockSliderValue}
        />
      ) : (
        <AiFillUnlock className="unlockIcon" />
      )}
    </div>
  );
}

export default SlideToUnlock;
