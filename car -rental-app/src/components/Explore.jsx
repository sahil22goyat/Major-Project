import styles from "@/contents/styles";
import React from "react";
import TitleText from "./TitleText";
import { cardhold } from "@/contents/appdata";
import ExploreCard from "./ExploreCard";

const Explore = () => {
  return (
    <section className="px-6 py-10">
      <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <TitleText
          title={
            <span className="text-gray-900 font-extrabold">
              why Only Car Pool?
            </span>
          }
        />
        <div className="my-9 flex lg:flex-row flex-col min-h-[50vh] gap-8 lg:mx-32">
          {cardhold?.map((cardvalue, index) => (
            <ExploreCard key={index} cardhold={cardvalue} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
