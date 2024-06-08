"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/contents/motion";
import styles from "@/contents/styles";
import TitleText from "./TitleText";
import { insights } from "@/contents/appdata";
import InsightCard from "./InsightCard";


const Insights = ({ isForm, form }) => {
  return (
    <motion.div
      variants={!isForm && staggerContainer}
      initial={!isForm && "hidden"}
      whileInView={!isForm && "show"}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {!isForm && <TitleText style={{ fontFamily: 'Brush Script MT', fontSize: '4rem', color: 'grey' }} title={<>Car Pool Fleet</>} />}


      <div className="mt-12 flex flex-col gap-9">
        {insights?.map((insight, index) => (
          <InsightCard
            key={index}
            {...insight}
            index={index}
            isForm={isForm}
            form={form}
          />
      
    
      
      
      ))}
       
      </div>
    </motion.div>
  );
};

export default Insights;
