"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { AnimatedDiv } from "../ui/3DanimateDiv";
import { FooterFloatingDock } from "@/components/FooterFlowtingDock";

const linkStyle = "hover:text-blue-500 transition-colors p-1 px-3 bg-black hover:bg-blue-900/30 rounded-full";

export default function Footer() {
  return (
    <footer className="bg-black text-blue-200/50 z-10 w-full border-t border-blue-700/50">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col justify-center items-center">
        {/* Logo + Name */}
        <AnimatedDiv
          className="flex items-center mb-4"
          rotateDepth={5}
          translateDepth={5}
        >
          <a
            href="#"
            className="relative z-20 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black justify-center"
          >
            <img src="./images/ca_white_logo.webp" alt="logo" width={55} />
          </a>
        </AnimatedDiv>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center text-sm">
          <Link href="#about" className={linkStyle}>
            About
          </Link>
          <Link
            href="#skills"
            className={linkStyle}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className={linkStyle}
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className={linkStyle}
          >
            Experience
          </Link>
          <Link
            href="#company"
            className={linkStyle}
          >
            Company
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            className={linkStyle}
          >
            Resume
          </Link>
          <Link
            href="#startups"
            className={linkStyle}
          >
            Startups
          </Link>
          <Link
            href="#education"
            className={linkStyle}
          >
            Education
          </Link>
          <Link
            href="#contact"
            className={linkStyle}
          >
            Contact
          </Link>
          <Link
            href="#testimonials"
            className={linkStyle}
          >
            Testimonials
          </Link>
          <Link
            href="#sitemap"
            className={linkStyle}
          >
            Site Map
          </Link>
        </nav>

        <AnimatedDiv rotateDepth={2} translateDepth={2}>
          <h1 className="text-[15vw] font-extrabold bg-gradient-to-b from-black via-blue-700 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
            Shamim Akhtar
          </h1>
        </AnimatedDiv>

        {/* Social Links */}
        <FooterFloatingDock />

        {/* Bottom Section */}
        <div className="w-full text-center text-xs text-blue-200/50">
          © {new Date().getFullYear()} Shamim Akhtar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
