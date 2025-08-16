"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";


import React from "react";

export default function Page() {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];

  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <Navbar className="absolute top-4 pr-3 flex justify-center bg-white/10 rounded-full w-[90%] justify-self-center backdrop-blur-sm border border-white/10">
      {/* Desktop Navbar */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navLinks} />
        <div className="flex gap-6 text-xl z-10">
          <a
            href="https://github.com/ajmalfaris11"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-75"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ajmal-faris11/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-75"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com/ajmal_faris11"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-75"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://leetcode.com/u/AjmalFaris/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-75"
          >
            <SiLeetcode />
          </a>
        </div>
      </NavBody>

      {/* Mobile Navbar */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-black dark:text-white"
            >
              {item.name}
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
