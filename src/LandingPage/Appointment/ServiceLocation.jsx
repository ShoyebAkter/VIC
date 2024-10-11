import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Appointment.css";
import PropTypes from "prop-types";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setName,
  setSelectedCenter,
  setStartDate,
  setTime,
} from "../../Redux/serviceSlice";
const ServiceLocation = ({ setStep }) => {
  const dispatch = useDispatch();
  const { selectedCenter, startDate, time, name, email } = useSelector(
    (state) => state.services
  );
  console.log(selectedCenter);
  const timeSlots = [
    "7.00AM",
    "7.30AM",
    "8.00AM",
    "8.30AM",
    "9.00AM",
    "9.30AM",
  ];
  const AfternoonSlots=[
    "1.00PM",
    "1.30PM",
    "2.00PM",
    "2.30PM",
    "3.00PM"
  ]
  const navigate = useNavigate();
  const isButtonDisabled =
    !selectedCenter || !time || !startDate || !email || !name;

  const changeStep = () => {
    setStep("Car");
  };

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };
  //   console.log(setStep)
  return (
    <div className="text-white pb-20">
      <ul className="steps">
        <li className="step step-primary">Appointment</li>
        <li className="step">Car Details</li>
        <li className="step">Service Type</li>
        <li className="step">Summary</li>
      </ul>
      <div className="font-bold text-xl mt-3">User Information</div>
      <div className="w-full ">
        <div className="relative  flex flex-col gap-2">
          <label
            for="name"
            className="leading-7 text-sm text-white font-semibold labelDesign"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
            className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 py-2 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="w-full">
        <div className="relative  flex flex-col gap-2">
          <label
            for="email"
            className="leading-7 text-sm text-white font-semibold labelDesign"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 py-2 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="font-bold text-xl my-4">Service Center Location</div>
      <div className="bg-blue-500 px-3 py-1 rounded-xl mb-2 w-1/3 text-center text-white font-semibold">
        VIC Centers
      </div>
      <div
        className={`border border-gray-400 rounded-lg cursor-pointer text-center py-4 ${
          selectedCenter === "Orlando City in Florida, USA" ? "bg-gray-300" : ""
        }`}
        onClick={() =>
          dispatch(setSelectedCenter("Orlando City in Florida, USA"))
        }
      >
        <div>Orlando City in Florida, USA</div>
      </div>

      <div className="font-bold text-xl my-4">Select Date & Time</div>
      <div className="datepicker">
        <DatePicker
          selected={startDate}
          onChange={(date) => dispatch(setStartDate(date))}
          minDate={new Date()}
          className=" cursor-pointer bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-5 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      {startDate && (
        <div>
          <div>
            <div className="flex justify-start gap-2 my-3 font-bold items-center">
              <IoPartlySunnyOutline />
              Morning
            </div>
            <div>
              {chunkArray(timeSlots, 2).map((timePair, rowIndex) => (
                <div key={rowIndex} className="flex gap-8 mb-2">
                  {timePair.map((timeSlot, index) => (
                    <div
                      key={index}
                      onClick={() => dispatch(setTime(timeSlot))}
                      className={`border cursor-pointer border-gray-500 rounded-md px-16 py-1 ${
                        time === timeSlot ? "bg-gray-300" : ""
                      }`}
                    >
                      {timeSlot}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex justify-start gap-2 my-3 font-bold items-center">
              <MdOutlineWbSunny />
              Afternoon
            </div>
            <div>
            {chunkArray(AfternoonSlots, 2).map((timePair, rowIndex) => (
                <div key={rowIndex} className="flex gap-8 mb-2">
                  {timePair.map((timeSlot, index) => (
                    <div
                      key={index}
                      onClick={() => dispatch(setTime(timeSlot))}
                      className={`border cursor-pointer border-gray-500 rounded-md px-16 py-1 ${
                        time === timeSlot ? "bg-gray-300" : ""
                      }`}
                    >
                      {timeSlot}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <button
        disabled={isButtonDisabled}
        onClick={changeStep}
        className={`border w-full border-gray-500 text-center py-2 my-6 rounded-lg bg-yellow-400 font-bold cursor-pointer
        ${isButtonDisabled ? "text-gray-400 bg-yellow-100" : ""}`}
      >
        Continue
      </button>
    </div>
  );
};

export default ServiceLocation;
ServiceLocation.propTypes = {
  setStep: PropTypes.func.isRequired,
};
