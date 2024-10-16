import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Appointment.css";
import PropTypes from "prop-types";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import {
  setEmail,
  setName,
  setPhoneNum,
  setSelectedCenter,
  setStartDate,
  setTime,
  setUserLocation,
} from "../../Redux/serviceSlice";
import { useState } from "react";
const ServiceLocation = ({ setStep }) => {
  const [placeObj, setPlaceObj] = useState({});
   const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const { selectedCenter, startDate, time, name, email, userLocation } =
    useSelector((state) => state.services);
  console.log(selectedCenter);
  const timeSlots = [
    "7.00AM",
    "7.30AM",
    "8.00AM",
    "8.30AM",
    "9.00AM",
    "9.30AM",
  ];
  const AfternoonSlots = ["1.00PM", "1.30PM", "2.00PM", "2.30PM", "3.00PM"];

  const popularPlacesInOrlando = [
    {
      placeName: "Walt Disney World Resort",
      placeLocation: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2774.4904387804227!2d-81.57331492571747!3d28.377190395632475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd7ee634caa5f7%3A0xa71e391fd01cf1a0!2sWalt%20Disney%20World%C2%AE%20Resort!5e1!3m2!1sbn!2sbd!4v1728971356315!5m2!1sbn!2sbd" width="400" height="200"  allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
      placeName: "Universal Studios Florida",
      placeLocation: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2771.8129648832873!2d-81.47111712571308!3d28.479380091021095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77ec39415df75%3A0xf985d8fc7734a5a1!2sUniversal%20Studios%20Florida!5e1!3m2!1sbn!2sbd!4v1728971525355!5m2!1sbn!2sbd" width="400" height="200"  allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
      placeName: "SeaWorld Orlando",
      placeLocation: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2773.6043532078997!2d-81.46584092816327!3d28.411046440611912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77e288cd6237f%3A0x997f9e39a3d62bd5!2sSeaWorld%20Orlando!5e1!3m2!1sbn!2sbd!4v1728971588731!5m2!1sbn!2sbd" width="400" height="200" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
      placeName: "Orlando Science Center",
      placeLocation: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.3715759043803!2d-81.37083942570906!3d28.57226728681704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77a9097ea66a3%3A0xb505a1f1f4cd84fc!2sOrlando%20Science%20Center!5e1!3m2!1sbn!2sbd!4v1728971662752!5m2!1sbn!2sbd" width="400" height="200"  allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
      placeName: "ICON Park",
      placeLocation: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2772.7608227064325!2d-81.47186562571464!3d28.443242192653567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77e5301d598c3%3A0x3eea75118971c349!2sICON%20Park!5e1!3m2!1sbn!2sbd!4v1728971708847!5m2!1sbn!2sbd" width="400" height="200"  allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    {
      placeName: "Lake Eola Park",
      placeLocation: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11080.500251350559!2d-81.38307776352694!3d28.543629011125297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77ae34d79ceeb%3A0xe5ebfa3195f24aec!2sLake%20Eola%20Park!5e1!3m2!1sbn!2sbd!4v1728971769083!5m2!1sbn!2sbd" width="400" height="200" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
  ];

  const isButtonDisabled =
    !selectedCenter || !time || !startDate || !email || !name;

  const changeStep = () => {
    setStep("Car");
    dispatch(setPhoneNum(value))
  };
// console.log(value)
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const setMap = (e) => {
    // console.log(e.target.value)
    dispatch(setUserLocation(e.target.value));
    const mapIframe = popularPlacesInOrlando.find(
      (place) => place.placeName === e.target.value
    );
    if (mapIframe) {
      setPlaceObj(mapIframe);
    }
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
      <div className="mt-5">
        <div className="text-sm text-white font-semibold mb-2">Phone Number</div>
        <PhoneInput
          defaultCountry="US"
          value={value}
          onChange={setValue}
          placeholder="Enter phone number"
        />
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
      <div>
        <div className="font-bold text-xl mt-3">Select Your Location</div>
        <select
          id="location"
          name="location"
          value={userLocation}
          onChange={(e) => setMap(e)}
          className="w-full my-5 py-3 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
        >
          <option value="">Select</option>
          {popularPlacesInOrlando.map((place) => (
            <option key={place.placeName} value={place.placeName}>
              {place.placeName}
            </option>
          ))}
        </select>
      </div>
      <div dangerouslySetInnerHTML={{ __html: placeObj?.placeLocation }} />
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
