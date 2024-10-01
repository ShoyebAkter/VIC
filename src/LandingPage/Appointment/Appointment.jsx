import React from "react";
import ServiceLocation from "./ServiceLocation";

const Appointment = () => {
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
          <div className="text-center ">VIC</div>
          <div className="font-bold text-center my-6">Book a Service Appointment</div>
          <ServiceLocation/>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
