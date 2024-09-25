import React from "react";
import logo from "../assets/logo.svg"
import "../styles/header.css"

export default function Header() {
  return (
    <div>
      <header className="header-header">
        <img src={logo} className="header-logo" alt="logo" />
        <p>
          Edit <code>src/Header.js</code> and save to reload.
        </p>
        <a
          className="header-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
