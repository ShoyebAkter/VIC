import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import "./Header.css";
import { useNavigate } from "react-router-dom";
const Header = ({ setLanguage }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [car, setCar] = useState("");
  const [service, setService] = useState("");
  const [time, setTime] = useState("");
  const [nameError, setNameError] = useState(false);
const [emailError, setEmailError] = useState(false);
const [contactError, setContactError] = useState(false);
const [dateError, setDateError] = useState(false);
const [timeError, setTimeError] = useState(false);
const [carError, setCarError] = useState(false);
const [serviceError, setServiceError] = useState(false);
// toasttttttttttt

useEffect(()=>{
  window.onload = () => {
    const navbar = document.querySelector(".navbar");
    
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    
    if (mediaQuery.matches) { // If mobile view
      navbar.style.display = "none";
    }
  };
},[])
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleCarChange = (event) => {
    setCar(event.target.value);
    // console.log(car)
  };
  const handleService = (event) => {
    setService(event.target.value);
    // console.log(car)
  };
  const handleTime = (event) => {
    setTime(event.target.value);
    // console.log(car)
  };
  // console.log(car)
  const navigate = useNavigate();
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  // console.log(name,email,contact,startDate,time)

  const handleBookingData = () => {
    setNameError(!name);
  setEmailError(!email);
  setContactError(!contact);
  setDateError(!startDate);
  setTimeError(!time);
  setCarError(!car);
  setServiceError(!service);
    const bookingInfo = {
      name: name,
      email: email,
      contact: contact,
      date: startDate,
      car: car,
      service: service,
      time:time
    };
    console.log(bookingInfo);
    
    if(email && name && contact && service && car){
      fetch("https://vic-server.vercel.app/sendBookingemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    }).then((res) => 
    {
      if(res.status===200){
        setContact("");
    setEmail("");
    setName("");
    setStartDate("");
    setCar("");
    setService("");
        document.getElementById("my_modal_2").close();
        toast.success("Your Booking is successful");
        fetch("https://vic-server.vercel.app/bookingData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    }).then(res=>res.json())
    }
  }
    );
    }
    

    
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
            Book a consultation
          </div>
          <div className="nav-item button" onClick={() => navigate("/login")}>
            Login
          </div>
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
          BOOK NOW
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
      <ToastContainer />
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box modalArea2">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute bg-black right-2 top-2">
              ✕
            </button>
          </form>
          <div className="p-2 w-full mt-10">
            <div className="relative  flex items-center gap-2">
              <label
                for="name"
                className="leading-7 text-sm text-black font-semibold labelDesign"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleNameChange}
                className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              
            </div>
            {
                nameError && <div className="ml-4 text-red-700 mt-1 text-sm text-center">Enter your name</div> 
              }
          </div>
          <div className="p-2 w-full">
            <div className="relative  flex items-center gap-2">
              <label
                for="email"
                className="leading-7 text-sm text-black font-semibold labelDesign"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {
                emailError && <div className="ml-4 text-red-700 mt-1 text-sm text-center">Enter your Email</div> 
              }
          </div>
          <div className="p-2 w-full">
            <div className="relative  flex  items-center gap-2">
              <label
                for="number"
                className="leading-7 text-sm text-black font-semibold labelDesign"
              >
                Contact
              </label>
              <input
                type="number"
                id="number"
                name="number"
                value={contact}
                onChange={handleContactChange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {
                contactError && <div className="ml-8 text-red-700 mt-1 text-sm text-center">Enter your Contact</div> 
              }
          </div>
          <div className="p-2 w-full">
            <div className="relative  flex  items-center gap-2 ">
              <label
                for="number"
                className="leading-7 text-sm text-black font-semibold labelDesign"
              >
                Date
              </label>
              <div>
                <DatePicker
                  className=" cursor-pointer bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            {
                dateError && <div className=" text-red-700 mt-1 text-sm text-center">Select your Date</div> 
              }
          </div>
          <div className="p-2 w-full">
            <div className="relative flex timeSec items-center gap-2">
              <label
                for="time"
                className="leading-7 text-sm text-black font-semibold labelDesign"
              >
                Time
              </label>
              <select
                id="time"
                name="time"
                value={time}
                onChange={handleTime}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option value="">Select</option>
                <option value="10AM - 12PM">10AM - 12PM</option>
                <option value="12PM - 3PM">12PM - 3PM</option>
                <option value="3PM - 6PM">3PM - 6PM</option>
              </select>
            </div>
            {
                timeError && <div className="ml-6 text-red-700 mt-1 text-sm text-center">Select your time</div> 
              }
          </div>
          <div className="p-2 w-full">
            <div className="relative  flex justify-evenly items-center gap-2">
              <label
                for="time"
                className="leading-7 text-sm text-black font-semibold labelDesign"
              >
                Car Model
              </label>
              <select
                id="car"
                name="car"
                value={car}
                onChange={handleCarChange}
                className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option value="">Select</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Mercedes">Mercedes</option>
                <option value="BMW">BMW</option>
                <option value="Ferrari">Ferrari</option>
              </select>
            </div>
            {
                carError && <div className="ml-5 text-red-700 mt-1 text-sm text-center">Select your car </div> 
              }
          </div>
          <div className="p-2 w-full">
            <div className="relative  flex justify-evenly items-center gap-2">
              <label
                for="time"
                className="leading-7 text-sm text-black font-semibold labelDesign"
              >
                Service Type
              </label>
              <select
                id="service"
                name="service"
                value={service}
                onChange={handleService}
                className="w-full  py-2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option value="">
                  Select
                </option>
                <option value="Air-Conditioning Service & Repair">
                  Air-Conditioning Service & Repair
                </option>
                <option value="Wheel Alignment & Tire Service">
                  Wheel Alignment & Tire Service
                </option>
                <option value="Car Wash & Car Grooming Service">
                  Car Wash & Car Grooming Service
                </option>
                <option value="Body & Paint Service">
                  Body & Paint Service
                </option>
                <option value="Others">Others</option>
              </select>
            </div>
            {
                serviceError && <div className=" ml-10 text-red-700 mt-1 text-sm text-center">Select your service</div> 
              }
          </div>
          <div className="p-2 w-full">
            <button
              onClick={handleBookingData}
              className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              BOOK
            </button>
          </div>
        </div>
      </dialog>
      
    </div>
  );
};

export default Header;
