import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutpicture from "../Images/aboutpicture.jpg";

type Props = {};

export default function About({}: Props) {
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
      className="h-screen flex flex-col relative  text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src={aboutpicture.src}
        alt="Natalie with a flute before a Recital"
        className="-mb-10 md:mb-0 flex-shrink-0 w-56 rounded-full object-cover md:rounded-lg md:w-80 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#273b27]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          My name is Natalie Quesenberry and I am an Information Technology
          student at Middle Georgia State University. My concentration is
          Software Engineering, but I am learning an array of skills to take me
          far in the job world. On top of being a student, I am in several clubs
          and organizations at MGSU!
        </p>
        <p className="text-base">
          When I am not studying, you can find me playing relaxing games
          cuddling my dogs or nurturing my plants. Fun fact: I also play the
          flute for a local orchestra!
        </p>
        <p className="text-base">
          Fun fact: I also play the flute for a local orchestra!
        </p>
      </div>
    </motion.div>
  );
}
