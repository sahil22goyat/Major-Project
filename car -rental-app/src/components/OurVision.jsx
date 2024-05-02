import React from "react";
import TitleText from "./TitleText";
import { vgcar } from "@/contents/appdata";

const OurObjective = () => {
  return (
    <div className="bg-yellow-100 bg-opacity-70 pt-12 mb-10" style={{ backgroundColor: "#000044" }}>
      <TitleText
        title={
          <span style={{ color: "#F5DEB3" }} className="text-center font-bold">Visionary Goals</span>
        }
      />
      <div className="mx-10 md:mx-[10%] mt-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-10">
          {vgcar?.map((car, index) => (
            <div key={index} className="rounded shadow-lg bg-white overflow-hidden hover:shadow-md">
              <div className="w-full relative overflow-hidden ">
                <img
                  src={car.img}
                  alt="loading"
                  className="w-full h-[300px] object-cover transition-transform duration-300 transform hover:scale-110"
                />
              </div>
              <div className="font-bold underline text-xl mb-2 text-grey-900 p-2 text-center">
                {car.title}
              </div>
              <p className="text-ash-700 text-base font-semibold p-2">
                {car.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurObjective;
