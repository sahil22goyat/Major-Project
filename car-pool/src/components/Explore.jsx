

"use client"

import styles from "@/contents/styles";
import React, { useEffect } from "react";
import TitleText from "./TitleText";
import { cardhold } from "@/contents/appdata";
import ExploreCard from "./ExploreCard";

const Explore = () => {
  useEffect(() => {
    // Define the animation using keyframes
    const colorChangeAnimation = `
      @keyframes colorChange {
        0% { color: #ff0000; } /* Red */
        25% { color: #00ff00; } /* Green */
        50% { color: #0000ff; } /* Blue */
        75% { color: #ffff00; } /* Yellow */
        100% { color: #ff0000; } /* Red */
      }
    `;

    // Create a style element to hold the keyframes
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(colorChangeAnimation, styleSheet.cssRules.length);
  }, []);

  // Define inline styles for the animation
  const colorAnimationStyle = {
    animation: "colorChange 5s infinite"
  };

  return (
    <section className="px-6 py-10">
      <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <TitleText
          title={
            <span className="text-gray-900 font-extrabold" style={colorAnimationStyle}>
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
