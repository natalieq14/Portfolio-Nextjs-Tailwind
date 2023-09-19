import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import campus_logic from "../Images/campus_logic.jpg";
import reactlogo from "../Images/reactlogo.png";
import typescriptlogo from "../Images/typescriptlogo.png";
import mga_logo from "../Images/mga_logo.jpg";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    //  article classname changes bg rectangles
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] 
    md:w-[600px] xl:w-[755px] snap-center bg-[#292929] p-10 hover:opacity-100 
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
        src={mga_logo.src}
        alt="MGA Logo"
      />

      {/* MGA */}

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Chatbot Developer</h4>
        <p className="font-bold text-2xl mt-1">
          Middle Georgia State University
        </p>
        <div className="flex space-x-2 my-2">
          {/* Tech used logos*/}

          <Image
            className="h-10 w-10 rounded-full"
            src={campus_logic}
            alt="Campus Logic Logo"
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
        </div>
        <p className="uppercase py-5 text-gray-300">2022</p>

        <ul className="list-disc space-y-4 ml-5 text-lg h-[170px]">
          <li>
            Define an efficient process for identifying targeted follow-up
            questions based on keywords
          </li>
          <li>
            Interview various department managers to develop frequent
            conversational strategies from MGSU website users to implement in
            the Chat Bot
          </li>
          <li>
            Complete testing, reporting and optimization of training phrases
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
