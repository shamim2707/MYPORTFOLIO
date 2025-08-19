"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AnimatedHeroImage } from "@/components/Hero/AnimatedHeroImage ";
import Navbar from "@/components/common/Navbar";
import { useState, useEffect } from "react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { TfiDownload } from "react-icons/tfi";

const titles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "MERN & Next.js Developer",
  "API Developer",
  "Database Developer",
  "TypeScript Developer",
  "Problem Solver",
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
  const [downloadHover, setDownloadHover] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center text-white overflow-hidden">
      {/* Navbar */}
      <Navbar  />

      {/* Dots background */}
      <div
        className="absolute inset-0
        [background-size:20px_20px]
        [background-image:radial-gradient(#2d2d2d_1px,transparent_1px)]
        dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
      />

      {/* Subtle radial gradient fade */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-transparent to-blue-700/50 opacity-80" />

      {/* Content */}
      <div className="relative w-full z-10 flex flex-col md:flex-row items-center gap-10 p-12">
        {/* Left content */}
        <div className="text-center md:text-left flex-2">
          <p className="text-xl">Hello, It's Me</p>
          <h1 className="text-6xl font-bold">AJMAL FARIS</h1>

          {/* Animated text loop */}
          <div className="flex justify-start items-center gap-2 text-3xl font-semibold mt-2">
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
                {titles[index]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <p className="mt-4 text-gray-400 max-w-md">
            I craft scalable web applications with a focus on performance and
            clean design.
          </p>

          {/* Social icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            {socialLinks.map(({ id, icon: Icon, url }) => (
              <span
                key={id}
                className="bg-gray-800 hover:bg-transparent rounded-full"
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-700 transition-all duration-500 shadow-md rotate-90"
                  style={{
                    clipPath:
                      "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                  }}
                >
                  <Icon size={20} className="-rotate-90" />
                </a>
              </span>
            ))}
          </div>

          {/* Button animation */}
          <button
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-6"
            onMouseEnter={() => setDownloadHover(true)}
            onMouseLeave={() => setDownloadHover(false)}
          >
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000ff_0%,#fff_50%,#0000ff_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 hover:gap-4 transform duration-300 transition-all ease-in-out">
              Download CV {downloadHover ? <TfiDownload /> : null}
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
