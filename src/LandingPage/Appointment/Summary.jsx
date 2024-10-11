import React from "react";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const navigate=useNavigate()
  const { selectedCenter, startDate, time, plateNo, brand, selectedServices, name, email, carModel, year  } =
    useSelector((state) => state.services);
  //   console.log(selectedCenter,startDate,time,plateNo,selectedServices,brand)
  const options = { year: "numeric", month: "short", day: "numeric" }; // Custom format
  const formattedDate = startDate.toLocaleDateString("en-US", options);

  const bookingInfo = {
    name: name,
    email: email,
    selectedCenter:selectedCenter,
    startDate: formattedDate,
    time: time,
    plateNo:plateNo,
    brand:brand,
    selectedServices:selectedServices,
    carModel:carModel,
    year:year
  };
  // console.log(bookingInfo);
const handleConfirm=async()=>{
  await fetch("https://vic-server.vercel.app/sendBookingemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    }).then((res) => {
      if (res.status === 200) {
        fetch("https://vic-server.vercel.app/bookingData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingInfo),
        }).then((res) => res.json());
        fetch("https://emapp-sub-server.vercel.app/bookingData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingInfo),
        }).then((res) => res.json());

        navigate('/')
      }
    });
}
  
  return (
    <div className="h-screen">
      <ul className="steps">
        <li className="step step-primary">Appointment</li>
        <li className="step step-primary">Car Details</li>
        <li className="step step-primary">Service Type</li>
        <li className="step step-primary">Summary</li>
      </ul>
      <div className="font-bold text-xl my-6">Booking Summary</div>
      <div className="font-bold  text-lg">Appointment Details</div>
      <div className="font-semibold  text-gray-500 text-lg">
        Booking Center : {selectedCenter.toUpperCase()}
      </div>
      <div className="font-semibold  text-gray-500 text-lg">
        Booking Date : {formattedDate}
      </div>
      <div className="font-semibold  text-gray-500 text-lg">
        Booking Time : {time}
      </div>
      <div className="font-bold mt-6 text-xl">Car Details</div>
      <div className="font-semibold  text-gray-500 text-lg">
        Car Plate No. : {plateNo}
      </div>
      <div className="font-semibold  text-gray-500 text-lg">
        Car Brand : {brand}
      </div>
      <div className="font-semibold  text-gray-500 text-lg">
        Car Model : {carModel}
      </div>
      <div className="font-semibold  text-gray-500 text-lg">
        Car Year : {year}
      </div>
      <div className="font-bold mt-6 text-xl">Service Type</div>
      <div>
        {selectedServices.map((service) => (
          <div className="font-semibold  text-gray-500 text-lg">{service}</div>
        ))}
      </div>
      <button
      onClick={handleConfirm}
        className={`border w-full border-gray-500 text-center py-2 my-6 rounded-lg bg-yellow-400 font-bold cursor-pointer
        `}
      >
        Confirm
      </button>
    </div>
  );
};

export default Summary;
