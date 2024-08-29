import { useEffect, useState } from "react";
import "./Booking.css";

const BookingData = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/bookingData")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((error) => console.error(error));
  },[])
  console.log(data)
  return (
    <div className="tableContainer">
     <div class="">
  <div class="">
    <div>
      <h2 class="text-2xl font-semibold leading-tight">Booking Information</h2>
    </div>
    <div class=" ">
      <div
        class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
      >
        <table className="min-w-full leading-normal">
      <thead>
        <tr>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Name
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Email
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Contact Number
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Date
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
          Time(hour)
          </th>
          
        </tr>
      </thead>
      <tbody>
        {data.map((invoice) => (
          <tr key={invoice.id}>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <div className="flex">
                
                <div className="ml-3">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {invoice.name}
                  </p>
                  <p className="text-gray-600 whitespace-no-wrap">{invoice.id}</p>
                </div>
              </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">{invoice.email}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">{invoice.contact}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <span
                className={`relative inline-block px-3 py-1 font-semibold  leading-tight`}
              >
                <span
                  aria-hidden
                  className={`absolute inset-0 opacity-50 rounded-full`}
                ></span>
                <span className="relative">{invoice.date}</span>
              </span>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
            {invoice.time}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
    </div>
  </div>
</div>
</div>
  );
};

export default BookingData;
