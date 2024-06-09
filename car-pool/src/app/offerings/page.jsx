import Banners from "@/components/Banners";
import Service from "@/components/Service";
import Subfooter from "@/components/Subfooter";
import { serviceList } from "@/contents/appdata";
import React from "react";

const Services = () => {
  return (
    <div>
    <Banners
  img="/offerings.jpeg"
  title={<span className="text-white font-bold opacity-0.1">Services</span>}
  text={<span className="text-white font-bold opacity-0.1">Experience elevated travel with Car pool: Where style, comfort, and safety meet for every occasion. Travel in sophistication and peace of mind.</span>}
/>

      <div className="mb-5">
        {serviceList?.map((service, index) => (
          <div key={index}>
            <Service service={service} />
          </div>
        ))}
      </div>
      <Subfooter />
    </div>
  );
};

export default Services;
