"use client";

import { useEffect, useState } from "react";
import { GoSun, GoMoon } from "react-icons/go";

export function DarkmodeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const handleClick = () => {
    if (isDarkMode) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className="z-30 text-2xl sm:pr-4 md:pt-4 transition-all duration-200 ease-in-out transform hover:scale-90"
      onClick={handleClick}
      aria-label="dark mode switch"
    >
      {isDarkMode ? (
        <GoSun className="dark:grayscale dark:brightness-75" />
      ) : (
        <GoMoon />
      )}
    </button>
  );
}
