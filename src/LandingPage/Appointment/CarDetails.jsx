import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setBrand,
  setModel,
  setPlateNo,
  setYear,
} from "../../Redux/serviceSlice";
const CarDetails = ({ setStep }) => {
  const dispatch = useDispatch();
  const { plateNo, brand, carModel } = useSelector((state) => state.services);
  const isButtonDisabled = !plateNo || !brand;

  const carBrands = [
    {
      brand: "Toyota",
      models: ["Corolla", "Camry", "RAV4", "Highlander", "Prius"],
    },
    {
      brand: "Honda",
      models: ["Civic", "Accord", "CR-V", "Pilot", "Fit"],
    },
    {
      brand: "Ford",
      models: ["Mustang", "F-150", "Explorer", "Escape", "Fusion"],
    },
    {
      brand: "BMW",
      models: ["3 Series", "5 Series", "X3", "X5", "i8"],
    },
    {
      brand: "Mercedes-Benz",
      models: ["C-Class", "E-Class", "S-Class", "GLC", "GLE"],
    },
  ];

  const carYear = [
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];
  const brandObj = carBrands.find((car) => car.brand === brand);
  // console.log(brandObj)
  return (
    <div className="">
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
          value={plateNo}
          onChange={(e) => dispatch(setPlateNo(e.target.value.toUpperCase()))}
          className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="text"
        />
      </div>
      <div className="font-bold text-xl my-3">Car Brand</div>
      <div>
        <select
          id="car"
          name="car"
          // value={car}
          onChange={(e) => dispatch(setBrand(e.target.value))}
          className="w-full py-3 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
        >
          <option value="">Select</option>
          {carBrands.map((car) => (
            <option key={car.brand} value={car.brand}>
              {car.brand}
            </option>
          ))}
        </select>
      </div>
      <div>
        {brand && (
          <div>
            <div>
            <div className="font-bold text-xl mt-3">Car Model</div>
              <select
                id="carModel"
                name="carModel"
                // value={car}
                onChange={(e) => dispatch(setModel(e.target.value))}
                className="w-full my-5 py-3 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option value="">Select</option>
                {brandObj.models.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>
            <div>
            <div className="font-bold text-xl mb-3">Car Year</div>
              <select
                id="carYear"
                name="carYear"
                // value={car}
                onChange={(e) => dispatch(setYear(e.target.value))}
                className="w-full py-3 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option value="">Select</option>
                {carYear.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
      <button
        disabled={isButtonDisabled}
        onClick={() => setStep("Service")}
        className={`border w-full border-gray-500 text-center py-2 my-6 rounded-lg bg-yellow-400 font-bold cursor-pointer
        ${isButtonDisabled ? "text-gray-400 bg-yellow-100" : ""}`}
      >
        Continue
      </button>
    </div>
  );
};

export default CarDetails;
