"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  return (
    <header className="shadow-md sticky top-0 z-50 outline outline-lime-50 outline-1  transition-colors duration-300">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo / Name */}
        <Link href="/">
          <h1 className="text-lg font-bold hover:text-blue-500 transition-colors duration-300">
            Nyamwe Cliff Jansen
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {["Home", "About", "Projects", "Contact"].map((item, idx) => (
            <li key={idx}>
              <Link
                href={`/${item == "Home" ? "/" : item.toLowerCase()}`}
                className="text-gray-600 dark:text-gray-200 hover:text-blue-500 transition-colors duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Switch */}
        <div className="hidden md:flex items-center gap-2 rounded-3xl p-2 outline outline-1 outline-gray-100">
          <span className="text-sm ">{isDarkMode ? "Dark" : "Light"}</span>
          <label
            htmlFor="mobile-theme-toggle"
            className="relative inline-flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="mobile-theme-toggle"
              checked={isDarkMode}
              onChange={toggleTheme}
              className="sr-only"
            />
            <div className="w-12 h-6 bg-gray-300 dark:bg-gray-500 rounded-full peer transition-colors duration-300 outline outline-1 outline-gray-50 dark:outline-gray-700">
              <div
                className={`w-6 h-6 
                    outline outline-1 outline-gray-50
                    rounded-full transform transition-all duration-300 ease-in-out ${
                      isDarkMode ? "translate-x-6" : "translate-x-0"
                    }`}
              ></div>
            </div>
          </label>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Open Menu"
            onClick={toggleMenu}
            className="focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-4">
          {["Home", "About", "Projects", "Contact"].map((item, idx) => (
            <li key={idx}>
              <Link
                href={`/${item == "Home" ? "/" : item.toLowerCase()}`}
                className="hover:text-blue-500 transition-colors duration-300"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {item}
              </Link>
            </li>
          ))}

          {/* Mobile Theme Toggle Switch */}
          <div className="flex items-center gap-2 rounded-3xl p-2 outline outline-1 outline-gray-100">
            <span className="text-sm ">{isDarkMode ? "Dark" : "Light"}</span>
            <label
              htmlFor="mobile-theme-toggle"
              className="relative inline-flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="mobile-theme-toggle"
                checked={isDarkMode}
                onChange={toggleTheme}
                className="sr-only"
              />
              <div className="w-12 h-6 bg-gray-300 dark:bg-gray-500 rounded-full peer transition-colors duration-300 outline outline-1 outline-gray-50 dark:outline-gray-700">
                <div
                  className={`w-6 h-6 
                    outline outline-1 outline-gray-50
                    rounded-full transform transition-all duration-300 ease-in-out ${
                      isDarkMode ? "translate-x-6" : "translate-x-0"
                    }`}
                ></div>
              </div>
            </label>
          </div>
        </ul>
      )}
    </header>
  );
};

export default Header;
