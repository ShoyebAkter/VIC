import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import "./Header.css";
import { useNavigate } from "react-router-dom";
const Header = ({language, setLanguage }) => {

  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    // Function to handle visibility based on screen width
    const handleResize = () => {
      const mediaQuery = window.matchMedia("(max-width: 768px)");
      
      if (mediaQuery.matches) {
        // Mobile view - hide the navbar
        if (navbar) navbar.style.display = "none";
      } 
    };

    // Run on component mount
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // console.log(car)
  const navigate = useNavigate();
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  

  function toggleMenu() {
      const navbar = document.querySelector(".navbar");
      const vic = document.querySelector(".vic");
      const bookButtonArea = document.querySelector(".bookButtonArea");
    navbar.style.display = navbar.style.display === "flex" ? "none" : "flex";
    vic.style.display=navbar.style.display=== "flex" ? "none" : "block";
    bookButtonArea.style.display=navbar.style.display=== "flex" ? "none" : "block";
    
  }
  
  return (
    <div className="header-container">
      <nav className="header">
        <div>
          <img className="headerLogo" src="/logo2.png" alt="" />
        </div>
        <div className="navbar">
          <a href="#about" className="nav-item highlight">
            {language==='es'?"Sobre VIC ":"About VIC"}
          </a>
          <a href="#work" className="nav-item">
           {language === 'es' ? "Donde trabajamos":" Where We Work"}
          </a>
          <a href="#service" className="nav-item highlight">
            {language === 'es' ?"Servicios":"Services"}
          </a>
          <a href="#pricing" className="nav-item highlight">
            {language === "es" ?"Precios":"Pricing"}
          </a>
          <div
            className="nav-item button"
            onClick={() => navigate("/appointment")}
          >
            {language ==="es" ?"Agendar una cita":"Book a consultation"}
          </div>
          {/* <div className="nav-item button" onClick={() => navigate("/login")}>
            Login
          </div> */}
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          ☰
        </div>
      </nav>
      <div className="centered-title">
        <img className="vic" src="/logo1.png" alt="" />
      </div>
      <div className="bookButtonArea">
      <div className="arrow-container">
          <div className="arrow-down"></div>
          <div className="arrow-down"></div>
        </div>
        <div
          className="bookButton"
          onClick={() => navigate("/appointment")}
        >
          BOOK NOW
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
