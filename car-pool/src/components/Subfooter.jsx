import React from "react";
import { IoMdContacts } from "react-icons/io";
import { MdCardTravel } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";

const UniqueSubfooterComponent = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 rounded-lg shadow-[0_2px_15px_-3px-rgba(0,0,0,0.07),0_10px_20px_-2px-rgba(0,0,0,0.04)] md:flex-row relative overflow-hidden">
      <img
        src="/subfooter.jpeg"
        alt=""
        className="h-96 w-full object-cover md:h-[60vh] lg:h-[80vh] rounded-lg border-4 border-third-color transition-transform duration-300 transform hover:scale-105"
      />
      <div className="flex flex-col justify-center gap-8 md:px-16 px-8 md:my-0 my-8">
        <div className="flex items-center gap-5 transition-transform duration-300 transform hover:scale-105">
          <span className="shadow-xl text-2xl p-6 rounded-full">
            <MdCardTravel className="text-third-color" />
          </span>
          <div className="flex flex-col gap-2">
            <h5 className="text-2xl text-gray-900 font-bold">Unique Events</h5>
            <p className="mb-4 text-base text-gray-500 border-l-4 border-third-color pl-4">
              "Planning an unforgettable event? Elevate the experience with our tailored transportation services. Contact us to customize every detail for your special occasion!"
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 transition-transform duration-300 transform hover:scale-105">
          <span className="shadow-xl text-2xl p-6 rounded-full">
            <IoCarSport className="text-third-color" />
          </span>
          <div className="flex flex-col gap-2">
            <h5 className="text-2xl text-gray-900 font-bold">Our Car Fleet</h5>
            <p className="mb-4 text-base text-gray-500 border-l-4 border-third-color pl-4">
              "Explore our diverse fleet for the perfect ride for any occasion. What's your ideal choice?"
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 transition-transform duration-300 transform hover:scale-105">
          <span className="shadow-xl text-2xl p-6 rounded-full">
            <IoMdContacts className="text-third-color" />
          </span>
          <div className="flex flex-col gap-2">
            <h5 className="text-2xl text-gray-900 font-bold">Get in Touch</h5>
            <p className="mb-4 text-base text-gray-500 border-l-4 border-third-color pl-4">
              Contact us at:
              <br />
              Phone: 9466901628, 6005076996
              <br />
              Email: sahilgoyatssn@gmail.com, sartajmir@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueSubfooterComponent;
