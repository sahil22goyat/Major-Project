import Banners from "@/components/Banners";
import Insights from "@/components/Insights";
import Footer from "@/components/Subfooter"; // Corrected import name
import React from "react";

const OurFleet = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Banners
          img="/fleetpool.jpeg"
          title={<h1 className="text-center text-grey">Pool Fleet</h1>} // Removed unnecessary margin classes
          text="Whether you’re after pure luxury or a high capacity transporter, we have a vehicle for any occasion. What will you choose?"
        />
        <div className="relative">
          <Insights isForm={false} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurFleet;
