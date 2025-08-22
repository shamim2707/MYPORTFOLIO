"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AnimatedHeroImage } from "@/components/Hero/AnimatedHeroImage ";
import { AnimatedText } from "@/components/ui/3DanimateText";
import { AnimatedDiv } from "@/components/ui/3DanimateDiv";
import { MdDownloading } from "react-icons/md";
import Navbar from "@/components/common/Navbar";
import { useState, useEffect } from "react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { TfiDownload } from "react-icons/tfi";
import { MdFileDownloadDone } from "react-icons/md";

const myCv = "/myFakeCV.pdf";

const titles = [
  {
    title: "Full Stack Developer",
    description: "Builds end-to-end web apps from database to user interface.",
  },
  {
    title: "Frontend Developer",
    description:
      "Creates responsive, user-friendly interfaces using modern frameworks and tools.",
  },
  {
    title: "Backend Developer",
    description:
      "Designs secure, scalable servers and APIs for complex applications.",
  },
  {
    title: "MERN Developer",
    description:
      "Develops full-stack solutions with MongoDB, Express, React, and Node.",
  },
  {
    title: "Next.js Developer",
    description:
      "Builds SEO-friendly, fast applications with server-side rendering.",
  },
  {
    title: "API Developer",
    description:
      "Develops secure, scalable APIs to streamline communication between services.",
  },
  {
    title: "Database Developer",
    description:
      "Optimizes database performance and ensures robust data management.",
  },
  {
    title: "TypeScript Developer",
    description:
      "Writes type-safe, maintainable JavaScript for scalable applications.",
  },
  {
    title: "Problem Solver",
    description:
      "Finds creative, efficient solutions to challenging technical issues.",
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: FaGithub,
    url: "https://github.com/your-username",
    label: "GitHub",
  },
  {
    id: 2,
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/your-username/",
    label: "LinkedIn",
  },
  {
    id: 3,
    icon: AiFillInstagram,
    url: "https://www.instagram.com/your-username/",
    label: "Instagram",
  },
  {
    id: 4,
    icon: SiLeetcode,
    url: "https://leetcode.com/your-username/",
    label: "LeetCode",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [downloadHover, setDownloadHover] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDownload = async () => {
    setIsDownloading(true);
    const res = await fetch(myCv);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "CaptainAj-CV.pdf";
    link.click();
    URL.revokeObjectURL(url);
    setIsDownloading(false);
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 3000);
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center text-white overflow-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Subtle radial gradient fade */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-transparent to-blue-700/48 opacity-80" />

      {/* Content */}
      <div className="relative w-full z-10 flex flex-col-reverse md:flex-row items-center gap-10 p-12">
        {/* Left content */}
        <div className="text-center md:text-left flex-2">
          <p className="text-xl">Hello, It&apos;s Me</p>
          <AnimatedText
            text="Ajmal Faris"
            className="text-[16vw] sm:text-[8vw] font-bold text-nowrap animate-shine"
            rotateDepth={10}
            translateDepth={10}
          />
          <div className="flex flex-col sm:flex-row justify-start items-center sm:gap-2 text-[8vw] md:text-[2.5vw] xl:text-[3.5vw] font-semibold mt-2">
            <span className="text-white">And I'm a</span>
            <AnimatePresence mode="wait">
              <motion.h2
                key={index}
                className="text-blue-600"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                {titles[index].title}
              </motion.h2>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              className="mt-4 text-gray-300 max-w-md xl:max-w-xl text-[4vw] md:text-[2vw] lg:text-[1.3vw] xl:text-[1.5vw]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {titles[index].description}
            </motion.p>
          </AnimatePresence>

          {/* Social icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            {socialLinks.map(({ id, icon: Icon, url }) => (
              <AnimatedDiv key={id} rotateDepth={5} translateDepth={6}>
                <span
                  key={id}
                  className="bg-gray-800 hover:bg-transparent rounded-2xl"
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 xl:w-14 xl:h-14 flex items-center justify-center bg-gray-800 hover:bg-blue-700 transition-all duration-500 shadow-md rotate-90"
                    style={{
                      clipPath:
                        "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                    }}
                  >
                    <Icon size={20} className="-rotate-90" />
                  </a>
                </span>
              </AnimatedDiv>
            ))}
          </div>

          {/* Button animation */}
          <button
            className="relative inline-flex h-12 xl:h-14 overflow-hidden rounded-full p-[1px] focus:outline-none mt-6"
            onMouseEnter={() => setDownloadHover(true)}
            onMouseLeave={() => setDownloadHover(false)}
            onClick={handleDownload}
          >
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000ff_0%,#fff_50%,#0000ff_100%)]" />
            <span
              className={`relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-1 text-sm font-medium backdrop-blur-3xl gap-2 xl:gap-4 xl:hover:gap-8 hover:gap-4 transform duration-300 transition-all ease-in-out 
                ${downloadHover ? "text-blue-500" : "text-white"}`}
            >
              {isDownloaded && (
                <>
                  <img
                    // key={Date.now()}
                    src="/confetti.gif"
                    alt="success"
                    className="absolute"
                  />
                </>
              )}

              <p className={`${isDownloading ? "animate-pulse" : null}`}>
                Download CV
              </p>
              {isDownloaded ? (
                <MdFileDownloadDone className="text-xl text-blue-500 animate-pulse" />
              ) : isDownloading ? (
                <MdDownloading className="text-lg text-blue-500 animate-pulse" />
              ) : (
                <TfiDownload
                  className={`text-blue-400 ${
                    downloadHover ? "animate-pulse" : "animate-null"
                  }`}
                />
              )}
            </span>
          </button>
        </div>

        {/* Right image */}
        <motion.div
          className="relative flex-2"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex justify-center">
            <AnimatedHeroImage />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
