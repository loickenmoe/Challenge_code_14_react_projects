
import React, { useState, useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";

export default function HiddenSearchBar() {
  const [uiProps, setUiProps] = useState({
    bg: "purple",
    shadow: "",
    transition: "all 0.3s ease-in-out",
    opacity: "0",
    showSearchIcon: true,
    showSearchBar: false,
    borderBottomColor: "#fff",
  });

  let bodyColor = document.body.style;

  let styleInput = {
    width: "20vw",
    padding: "1rem 5px",
    marginTop: "5rem",
    border: "none",
    borderBottom: `1px solid ${uiProps.borderBottomColor}`,
    outline: "none",
    backgroundColor: "transparent",
    color: "white",
    boxShadow: "0px 55px 70px rgba(0, 0, 0, 0.7)",
    opacity: uiProps.opacity,
    transition: "all 0.3s ease-in-out",
  };

  let styleBsSearch = {
    position: "absolute",
    top: "20%",
    right: "10px",
    fontSize: "40px",
    color: "white",
    cursor: "pointer",
  };

  const inputEl = useRef(null);

  useEffect(() => {
    bodyColor.background = uiProps.bg;
    bodyColor.boxShadow = uiProps.shadow;
    bodyColor.transition = uiProps.transition;
  }, [uiProps]);

  useEffect(() => {
    if (uiProps.showSearchBar && inputEl.current) {
      inputEl.current.focus(); 
    }
  }, [uiProps.showSearchBar]);

  const showSearch = () => {
    setUiProps((prevProps) => ({
      ...prevProps,  
      opacity: 1,
      showSearchIcon: false,
      showSearchBar: true,
    }));
  };

  const handleSearchFocus = () => {
    setUiProps((prevProps) => ({
      ...prevProps,
      shadow: "inset 0 -60vh 30vw 200px rgba(0, 0, 0, 0.8)",
      borderBottomColor: "green",
    }));
  };

  const handleSearchBlur = () => {
    setUiProps((prevProps) => ({
      ...prevProps,
      shadow: "none",
      opacity: "0",
      borderBottomColor: "#fff",
      showSearchIcon: true,
    }));
  };

  return (
    <div className="container" style={{ height: "100vh" }}>
      {uiProps.showSearchIcon ? (
        <BsSearch style={styleBsSearch} onClick={showSearch} />
      ) : (
        <input
          type="text"
          placeholder="Search..."
          style={styleInput}
          ref={inputEl}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
      )}
    </div>
  );
}



