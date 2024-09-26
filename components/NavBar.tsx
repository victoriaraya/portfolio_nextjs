"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { DarkmodeSwitch } from "./DarkModeSwitch";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-3 md:p-0 border-b-2 md:border-b-0 border-white relative text-white dark:text-gray-200 bg-fuchsia-950 dark:bg-[#332429]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 z-30 md:pt-4 sm:pl-3">
          <a
            href="https://github.com/victoriaraya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
          >
            <FaGithub className="text-2xl transition-all duration-200 ease-in-out transform hover:scale-90 dark:grayscale dark:brightness-75" />
          </a>
          <a
            href="https://www.linkedin.com/in/victoriaraya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin"
          >
            <FaLinkedin className="text-2xl transition-all duration-200 ease-in-out transform hover:scale-90 dark:grayscale dark:brightness-75" />
          </a>
        </div>
        <button
          className="text-3xl pr-8 md:hidden focus:outline-none z-40 dark:grayscale dark:brightness-75"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <DarkmodeSwitch />
      </div>

      <ul
        className={`flex flex-col md:flex-row gap-3 sm:gap-8 justify-center items-center text-center text-2xl font-bold w-full absolute top-0 left-0 mt-14 md:mt-0 sm:p-3 z-20 border-b-2 border-white dark:border-gray-200 ${
          isOpen ? "block" : "hidden"
        } md:flex bg-fuchsia-950 dark:bg-[#332429]`}
      >
        <li className="hover:[text-shadow:1px_1px_3px_white] dark:hover:[text-shadow:1px_1px_3px_black]">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li className="hover:[text-shadow:1px_1px_3px_white] dark:hover:[text-shadow:1px_1px_3px_black]">
          <Link href="/expertise" onClick={() => setIsOpen(false)}>
            Expertise
          </Link>
        </li>
        <li className="hover:[text-shadow:1px_1px_3px_white] dark:hover:[text-shadow:1px_1px_3px_black]">
          <Link href="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
        </li>
        <li className="hover:[text-shadow:1px_1px_3px_white] dark:hover:[text-shadow:1px_1px_3px_black]">
          <Link href="/about-me" onClick={() => setIsOpen(false)}>
            About Me
          </Link>
        </li>
        <li className="hover:[text-shadow:1px_1px_3px_white] pb-3 sm:pb-0 dark:hover:[text-shadow:1px_1px_3px_black]">
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
