import { useState } from "react";
import "./Pricing.css";

const Pricing = ({ language }) => {
  return (
    <div id="pricing" className="pricingContainer">
      <div className="centerLine">
        <div className="centeryellowline"></div>
      </div>
      <div className="topLine">
        <div className="toprightline1"></div>
        <div className="toprightline2"></div>
      </div>
      <div className="priceTag">Pricing</div>
      <div className="priceDescription">
        {language === "es" ? (
          <span>
            Nuestros precios son competitivos y transparentes.
            <br />
            Ofrecemos diferentes paquetes y servicios personalizados según tus
            necesidades.<br />
             Contáctanos para obtener una cotización detallada y sin
            compromiso.
          </span>
        ) : (
          <span>
            Our prices are competitive and transparent.
             We offer various packages and personalized services according
            to your needs.<br/>
             Contact us for a detailed and no-obligation quote
          </span>
        )}
      </div>
      <div
        className="contactButton "
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Contact Us
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute bg-black right-2 top-2">
              ✕
            </button>
          </form>
          <div class="p-2 w-full">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        </div>
        </div>
      </dialog>
    </div>
  );
};

export default Pricing;
