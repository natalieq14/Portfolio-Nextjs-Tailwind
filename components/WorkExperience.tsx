import React from "react";
import { motion } from "framer-motion";
import ExperienceCard1 from "./ExperienceCard1";
import ExperienceCard2 from "./ExperienceCard2";
import ExperienceCard3 from "./ExperienceCard3";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      {/* format for experience cards */}

      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory  scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#273b27]/80"
      >
        <ExperienceCard1 />
        <ExperienceCard2 />
        <ExperienceCard3 />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
