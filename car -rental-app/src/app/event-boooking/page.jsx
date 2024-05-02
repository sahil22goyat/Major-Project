import Banners from "@/components/Banners";
import Subfooter from "@/components/Subfooter";
import React from "react";

const Local = () => {
  return (
    <div>
      <Banners
        img="/localpage.jpeg"
        title={<span className="text-white">Event Bookings</span>}
        text={<span className="text-white">Enhance the memories of your big day with Car Pool, 
        offering unparalleled chauffeured services tailored to your special occasion. Experience luxury and comfort like never before.</span>}
      />

      <div className="max-w-[1150px] mx-4 lg:mx-auto my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-third-color text-4xl font-bold mb-10">
              Local Car, Cab, Taxi, Scooter Services
            </h1>
            <p className="leading-7 text-lg text-blue font-medium">
              "At Carpool, we understand the significance of transportation on your special day."<br />
              <br />
              "Our meticulously groomed wedding vehicles are meticulously
               prepared to ensure a flawless presentation, while our meticulous
                planning ensures unwavering reliability. We recognize the significance
                 of every detail, so don't hesitate to share any additional desires or 
                 enhancements you may wish for to enhance your journey's joy and splendor." <br />
              <br />
              "Tailor your journey with us and transform every ride into an extraordinary experience."
            </p>
          </div>
          <div className="rounded-full overflow-hidden relative">
            <img 
              src="/localpicture.jpeg" 
              className="w-full h-full transform transition-transform duration-300 hover:scale-110"
              alt="" 
            />
          </div>
        </div>
        <h2 className="text-third-color text-4xl font-bold mb-10">
          <br></br>"Whether you crave luxurious indulgence or practical versatility, our diverse fleet guarantees the perfect ride for any occasion."
        </h2>
      </div>
      <div style={{ marginTop: "100px" }}><Subfooter /></div>
    </div>
  );
};

export default Local;
