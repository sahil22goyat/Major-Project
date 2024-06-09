

"use client";


import Banners from "@/components/Banners";
import Feedback from "@/components/Feedback";
import Subfooter from "@/components/Subfooter";
import TitleText from "@/components/TitleText";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <Banners
        img="/aboutpage.jpeg"
        title={<span className="text-center text-wheaty">About Us</span>}
        text={<span className="text-center text-wheaty">"Embark on a journey of luxury and convenience with our premier chauffeured car service,
         proudly serving Victoria with unparalleled elegance and reliability."</span>}
      />
      <TitleText
        title={<span className="text-red ">About Car Pool</span>}
        textStyles="mt-16"
      />
      <Feedback />
      <Subfooter />
    </div>
  );
};

export default AboutUs;
