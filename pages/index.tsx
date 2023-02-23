import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "components/About";
import WorkExperience from "components/WorkExperience";
import Skills from "components/Skills";
import ContactMe from "components/ContactMe";
import Image from "next/image";
import portfolioprofile from "../Images/portfolioprofile.jpg";
import Link from "next/link";

import Projects from "components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white snap-y h-screen snap-mandatory 
    overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#273b27]/80"
    >
      <Head>
        <title>Natalie{"'"}s Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        {/* <Projects /> */}
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      {/* Home */}

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer ">
          <div className="flex items-center justify-center">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src={portfolioprofile}
              alt="Home icon, picture of Natalie Quesenberry"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
