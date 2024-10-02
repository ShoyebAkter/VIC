
import { useSelector, useDispatch } from 'react-redux';
import { addService, removeService } from "../../Redux/serviceSlice";
const ServiceType = () => {
    const dispatch = useDispatch();
  const selectedServices = useSelector((state) => state.services.selectedServices);
    const isButtonDisabled = selectedServices.length === 0;
  const services = [
    "Periodic Maintenance",
    "20-point Inspection",
    "Brake System",
    "Aircon System",
    "Battery",
    "Suspension",
    "Tyre service",
    "General Service",
    "Aircon Pollen Filter",
    "Others",
  ];
  // console.log(service)
  const handleServiceClick = (service) => {
    if (selectedServices.includes(service)) {
      // Remove service if already selected (toggle off)
      dispatch(removeService(service)); 
    } else {
      // Add service if not selected
      dispatch(addService(service)); 
    }
  };
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };
  console.log(selectedServices)
  return (
    <div>
      <ul className="steps">
        <li className="step step-primary">Appointment</li>
        <li className="step step-primary">Car Details</li>
        <li className="step step-primary">Service Type</li>
        <li className="step">Summary</li>
      </ul>
      <div className="font-bold text-xl my-6">I'm Looking For..</div>
      <div className="text-gray-500 font-semibold my-4">
        You can select more than one
      </div>
      <div>
      {chunkArray(services, 2).map((servicePair, rowIndex) => (
        <div key={rowIndex} className="flex gap-2 mb-2">
          {servicePair.map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(service)}
              className={`border cursor-pointer border-gray-500 rounded-md w-1/2 text-center py-2 ${
                selectedServices.includes(service) ? "bg-gray-300" : ""
              }`}
            >
              {service}
            </div>
          ))}
        </div>
      ))}
        
      </div>
      <button
        disabled={isButtonDisabled}
        // onClick={changeStep}
        className={`border w-full border-gray-500 text-center py-2 my-6 rounded-lg bg-yellow-400 font-bold cursor-pointer
        ${isButtonDisabled ? "text-gray-400 bg-yellow-100" : ""}
        `}
      >
        Continue
      </button>
    </div>
  );
};

export default ServiceType;
