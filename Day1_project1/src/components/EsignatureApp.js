import React, { useState } from "react";
import Title from "../components/Title.js";

export default function EsignatureApp() {
  const [name, setName] = useState("Your signature");
  const [date, setDate] = useState("Select date");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: "0.35rem  0",
  };
  document.body.style.background = "#eee";

  return (
    <div className="container text-center ">
      <Title classes={"title"} text={name} />
      <Title classes={"main-title mb_4"} text={!date ? "DoB" : date} />
      <p>
        lorem ipsum, dolor sit met consecteur adipisicing elit. Deserunt quia,
        mlkqd olmf,dj iojfd jijfdmh pkoesk zdsgr odflkiez jikd ^lmsk kjfsaù mi
      </p>
      <footer
        className="d-flex"
        style={{
          display: "flex",
          justifyContent: "space-around",
          position: "relative",
          top: "40vh",
        }}
      >
        <input
          type="date"
          value={date}
          style={inputStyle}
          onChange={handleDateChange}
        />
        <input
          type="text"
          value={name}
          style={inputStyle}
          onChange={handleNameChange}
        />
      </footer>
    </div>
  );
}
