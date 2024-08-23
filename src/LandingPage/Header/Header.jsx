import React from "react";
import "./Header.css";
const Header = ({ setLanguage }) => {
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
  }
  return (
    <div className="header-container">
      <nav className="header">
        <div>
          <img className="headerLogo" src="/logo2.png" alt="" />
        </div>
        <div className="navbar">
          <a href="#about" className="nav-item highlight">About VIC</a>
          <a href="#work" className="nav-item">Where We Work</a>
          <a href="#service" className="nav-item highlight">Services</a>
          <a href="#pricing" className="nav-item highlight">Pricing</a>
          <div  className="nav-item button">Book A Consultation</div>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>☰</div>
      </nav>
      <div className="centered-title">
        <img className="vic" src="/logo1.png" alt="" />
      </div>
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
