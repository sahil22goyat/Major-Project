import Banners from "@/components/Banners";
import Insights from "@/components/Insights";
import Footer from "@/components/Subfooter"; // corrected import name
import React from "react";

const Ourfleet = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
        <Banners
          img="/fleetpool.jpeg"
          title={<h1 className="text-center md-0 text-grey mg-16">Pool Fleet</h1>}
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

export default Ourfleet;
