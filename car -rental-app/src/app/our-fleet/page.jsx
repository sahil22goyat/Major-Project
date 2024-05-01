import Banners from "@/components/Banners";
import Insights from "@/components/Insights";
import Subfooter from "@/components/Subfooter";
import React from "react";

const Ourfleet = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div>
        <Banners
          img="/our-fleet-banner.jpg"
          title="Our Fleet"
          text="Whether you’re after pure luxury or a high capacity transporter, we have a vehicle for any occasion. What will you choose?"
        />
        <div className="relative">
          <Insights isForm={false} />
        </div>
      </div>style={{ marginTop: "50px" }}
      <div >
        <Subfooter />
      </div>
    </div>
  );
};

export default Ourfleet;
