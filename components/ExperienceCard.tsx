import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gtripicture from "../Images/gtripicture.jpg";
import nextjslogo from "../Images/nextjslogo.png";
import reactlogo from "../Images/reactlogo.png";
import typescriptlogo from "../Images/typescriptlogo.png";
import vsclogo from "../Images/vsclogo.png";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    //  article classname changes bg rectangles
    <article
      className="flex  flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] 
    md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={gtripicture.src}
        alt="GTRI Logo"
      />

      {/* GTRI */}

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Software Engineer Intern</h4>
        <p className="font-bold text-2xl mt-1">
          Georgia Tech Research Institute
        </p>
        <div className="flex space-x-2 my-2">
          {/* Tech used logos*/}

          <Image
            className="h-10 w-10 rounded-full"
            src={nextjslogo}
            alt="Next.js Logo"
          />
          <Image
            className="h-10 w-10 rounded-full"
            src={reactlogo}
            alt="React Logo"
          />
          <Image
            className="h-10 w-10 rounded-full"
            src={typescriptlogo}
            alt="TypeScript Logo"
          />
          <Image
            className="h-10 w-10 rounded-full"
            src={vsclogo}
            alt="Visual Studio Code Logo"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... Ended Work...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg h-[170px]">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
