import React from "react";
import TitleText from "./TitleText";
import { vgcar } from "@/contents/appdata";
import Link from "next/link"; // Ensure Link is correctly imported

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
            <div className="rounded shadow-lg bg-white overflow-hidden hover:shadow-md cursor-pointer block" key={index}>
              <Link href="/offerings" legacyBehavior passHref>
                <a className="w-full h-[300px] relative overflow-hidden block">
                  <img
                    src={car.img}
                    alt="loading"
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110 cursor-pointer"
                  />
                </a>
              </Link>
              <div className="flex flex-col justify-between p-2 h-auto">
                <div className="font-bold underline text-xl mb-2 text-gray-900 text-center">
                  {car.title}
                </div>
                <p className="text-gray-700 text-base font-semibold text-center">
                  {car.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurObjective;
