import React from "react";
import "./Header.css";
const Header = ({setLanguage}) => {
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div className="header-container">
      <nav className="navbar">
        <div className="nav-item highlight">About VIC</div>
        <div className="nav-item">Where We Work</div>
        <div className="nav-item highlight">Services</div>
        <div className="nav-item highlight">Pricing</div>
        <div className="nav-item button">Book A Consultation</div>
      </nav>
      <div className="centered-title"> <span className="vic">VIC</span> Auto Services</div>
      <div className="bookButtonArea">
      <div className="bookButton">Book Now</div>
      <div class="arrow-container">
        <div class="arrow-down"></div>
        <div class="arrow-down"></div>
      </div>
      </div>
      
      <div className="language-dropdown">
        Language:
        <select onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
      <div className="bottom-lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Header;
