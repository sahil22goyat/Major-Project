import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/contents/motion";
import styles from "@/contents/styles";

const CustomComponent = () => {
  return (
    <section className="xs:p-8 my-6 sm:my-2 px-[10%]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col gap-6`}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }} // Background color set to gray with 80% opacity
      >
        <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
          <div className="" />
          <div>
            <h4 className="font-bold text-white sm:text-5xl text-[26px] border-5 border-l-third-color mb-3 text-center">
            why to choose us? 
            </h4>
            <p className="mt-2.5 sm:mt-5 text-white font-bold underline sm:text-lg text-md leading-6 text-slate-400 text-center">
            "Car Pool: Transforming Every Journey into a Memorable Experience of Comfort, Convenience, and Style."
            </p>
          </div>
          <p className="mt-2.5 sm:mt-5 font-normal text-white sm:text-lg text-md leading-6 text-slate-400 text-center">
          "At Car Pool, we epitomize the perfect balance – not too vast, not too diminutive. Our ethos revolves around maintaining an intimate yet adept team of chauffeurs, 
            committed to delivering unparalleled service. With a fleet tailored to diverse preferences, we assure you of finding the ideal ride for any occasion. Experience our
            unwavering commitment to excellence, coupled with the warmth of genuine hospitality. Reserve your next journey with us today and indulge in luxury beyond compare."
          </p>
        </motion.div>
        <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
          <img
            src="/aboutus.jpeg"
            className="px-0 lg:px-4 xl:px-14 w-full h-auto object-cover rounded-3xl"
            alt=""
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CustomComponent;
