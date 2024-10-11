import React, { useState } from "react";
import ServiceLocation from "./ServiceLocation";
import CarDetails from "./CarDetails";
import ServiceType from "./ServiceType";
import Summary from "./Summary";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Appointment = () => {
    const [step,setStep]=useState("Start")
    const navigate=useNavigate()
    // console.log(step)
    const handleBack=()=>{
      if(step === "Start"){
        navigate('/')
      }else if(step==="Car"){
        setStep("Start")
      }else if(step==="Service"){
        setStep("Car")
      }else if(step === "Summary"){
        setStep("Service")
      }
    }
  return (
    <div className="h-screen" style={{backgroundColor:"#171717" ,color:"white"}}>
      <div className="flex justify-between mx-10 pt-2">
        <div onClick={handleBack} className="font-bold cursor-pointer flex items-center gap-1"><IoIosArrowBack /> Back</div>
        <div onClick={()=>navigate('/')} className="font-bold cursor-pointer"> X </div>
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
          {step === "Start" && <ServiceLocation setStep={setStep}/>}
          {step === "Car" ? <CarDetails setStep={setStep}/>  : ""}
          {step === "Service" ? <ServiceType setStep={setStep}/>  : ""}
          {step === "Summary" ? <Summary setStep={setStep}/>  : ""}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
