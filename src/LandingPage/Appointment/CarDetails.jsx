import React, { useState } from "react";

const CarDetails = ({setStep}) => {
    const [plateNo,setPlateNo]=useState("")
    const [brand,setBrand]=useState("")
    const isButtonDisabled= !plateNo || !brand;
  return (
    <div>
      <ul className="steps">
        <li className="step step-primary">Appointment</li>
        <li className="step step-primary">Car Details</li>
        <li className="step">Service Type</li>
        <li className="step">Summary</li>
      </ul>
      <div className="font-bold text-xl my-6">Car Details</div>
      <div className="font-bold text-xl mb-3">Car Plate No.</div>
      <div>
        <input
        onChange={(e)=>setPlateNo(e.target.value)}
        className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
         type="text" />
      </div>
      <div className="font-bold text-xl my-3">Car Brand</div>
      <div>
      <select
                id="car"
                name="car"
                // value={car}
                onChange={(e)=>setBrand(e.target.value)}
                className="w-full py-3 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option value="">Select</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Mercedes">Mercedes</option>
                <option value="BMW">BMW</option>
                <option value="Ferrari">Ferrari</option>
              </select>
      </div>
      <button
        disabled={isButtonDisabled}
        onClick={()=>setStep("Service")}
        className={`border w-full border-gray-500 text-center py-2 my-6 rounded-lg bg-yellow-400 font-bold cursor-pointer
        ${isButtonDisabled ? "text-gray-400 bg-yellow-100" : ""}`}
      >
        Continue
      </button>
    </div>
  );
};

export default CarDetails;
