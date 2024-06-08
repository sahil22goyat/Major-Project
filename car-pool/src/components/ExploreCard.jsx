import React from "react";

const ExploreCard = ({ cardhold }) => {
  return (
    <div className="text-center w-full sm:mx-auto mt-16 shadow-xl text-white px-10 py-6 gradient-05 sm:p-8 rounded-lg bg-gray-900 bg-opacity-80 border-third-color border-2 relative cursor-pointer hover:shadow-third-color">
      <div className="mx-auto w-32 h-32 relative -mt-[85px] border-4 border-white rounded-full overflow-hidden">
        <img
          src={cardhold.imgUrl}
          alt=""
          className="object-cover object-center h-32"
        />
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold">{cardhold.title}</h2>
        <p className="text-gray-200 mt-6">{cardhold.description}</p>
      </div>
    </div>
  );
};

export default ExploreCard;
