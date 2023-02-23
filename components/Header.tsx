import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  {
    /*header className puts icons inline; justify-between- puts space btwn icons */
  }
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/*Social Icons */}

        <SocialIcon
          url="https://twitter.com.NatalieQberry?t=TaojQLXJf5aYIFfXpZ3g0Q&s=09"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/natalieq14"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://linkedin.com/in/natalie-quesenberry-5525161a8"
          fgColor="grey"
          bgColor="transparent"
        />
      </motion.div>

      {/* Link for contact => get in touch */}

      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <div className="cursor-pointer">
            <SocialIcon network="email" fgColor="grey" bgColor="transparent" />
          </div>

          {/*md refers to size of screen, text is hidden on sm screens */}
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
