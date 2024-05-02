import React from "react";

const Banners = ({ img, title, text }) => {
  return (
    <div className="">
      <div
        className="h-[30vh] lg:h-[70vh] bg-no-repeat bg-center bg-cover relative flex justify-center items-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="content-['']  absolute top-0 right-0 bottom-0 left-0  "></div>

        <div className="w-full lg:w-[70%] text-white font-medium opacity-0.5 text">
          <h1 className="text-2xl lg:text-7xl font-medium mb-2 lg:mb-5">{title}</h1>
          <h2 className="text-lg  text-wheaty md:text-4xl leading-6">{text}</h2>
        </div>
      </div>
    </div>
  );
};

export default Banners;
