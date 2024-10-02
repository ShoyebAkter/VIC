import React, { useState } from "react";
import ServiceLocation from "./ServiceLocation";
import CarDetails from "./CarDetails";
import ServiceType from "./ServiceType";
import Summary from "./Summary";

const Appointment = () => {
    const [step,setStep]=useState("")
    // console.log(step)
  return (
    <div>
      <div className="flex justify-between mx-10 mt-4">
        <div className="font-bold"> Back</div>
        <div className="font-bold"> X </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <div className="text-center text-3xl font-bold">VIC</div>
          <div className="font-bold text-2xl text-center my-6">Book a Service Appointment</div>
          {step === "" && <ServiceLocation setStep={setStep}/>}
          {step === "Car" ? <CarDetails setStep={setStep}/>  : ""}
          {step === "Service" ? <ServiceType setStep={setStep}/>  : ""}
          {step === "Summary" ? <Summary setStep={setStep}/>  : ""}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
