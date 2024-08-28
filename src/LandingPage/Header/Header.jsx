import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./Header.css";
import { useNavigate } from "react-router-dom";
const Header = ({ setLanguage }) => {
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  function toggleMenu() {
    const navbar = document.querySelector(".navbar");
    navbar.style.display = navbar.style.display === "flex" ? "none" : "flex";
  }
  return (
    <div className="header-container">
      <nav className="header">
        <div>
          <img className="headerLogo" src="/logo2.png" alt="" />
        </div>
        <div className="navbar">
          <a href="#about" className="nav-item highlight">
            About VIC
          </a>
          <a href="#work" className="nav-item">
            Where We Work
          </a>
          <a href="#service" className="nav-item highlight">
            Services
          </a>
          <a href="#pricing" className="nav-item highlight">
            Pricing
          </a>
          <div
            className="nav-item button"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            BOOK A CONSULTATION
          </div>
          <div className="nav-item button" onClick={()=>navigate('/login')}>Login</div>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          ☰
        </div>
      </nav>
      <div className="centered-title">
        <img className="vic" src="/logo1.png" alt="" />
      </div>
      <div className="bookButtonArea">
        <div
          className="bookButton"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Book Now
        </div>
        <div className="arrow-container">
          <div className="arrow-down"></div>
          <div className="arrow-down"></div>
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
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box modalArea">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute bg-black right-2 top-2">
              ✕
            </button>
          </form>
          <div className="p-2 w-full">
            <div className="relative">
              <label for="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label for="number" className="leading-7 text-sm text-gray-600">
                Contact Number
              </label>
              <input
                type="number"
                id="number"
                name="number"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="ml-2">
            <label for="number" className="leading-7 text-sm text-gray-600">
              Date
            </label>
            <div>
              <DatePicker
                className="text-black"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label for="time" className="leading-7 text-sm text-gray-600">
                Time
              </label>
              <input
                type="number"
                id="time"
                name="time"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Header;
