import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import portfolio from "../images/portfolio.jpeg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="logo-div">
        <img onClick={() => navigate("/")} src={portfolio} alt="logo" />
      </div>

      <div className={`list-style ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>

      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Header;
