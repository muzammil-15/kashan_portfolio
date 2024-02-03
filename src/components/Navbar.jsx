"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Close the menu by default on screens above md
    setMenuOpen(false);
  }, []);

  return (
    <nav className="bg-[#1d1d1def] sticky top-0 left-0 shadow-lg z-[100]">
      <div className="max-w-screen-xl  flex items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src="/assets/logo.png" width={60} height={60} alt="logo"/>
        </Link>
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex relative items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={` md:flex md:w-auto ${
            isMenuOpen ? "block absolute top-20 right-10 rounded-lg w-[160px] bg-black" : "hidden bg-transparent"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0   md:flex-row md:space-x-8   text-white ">
            <li>
              <Link
                href="/"
                className="block py-2 px-3  rounded md:hover:bg-transparent  hover:text-orange-600  text-white"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/about-me"
                className="block py-2 px-3  rounded md:hover:bg-transparent  hover:text-orange-600   text-white"
              >
                ABOUT ME
              </Link>
            </li>
            <li>
              <Link
                href="#work"
                className="block py-2 px-3  rounded-[30px]  md:hover:bg-transparent  hover:text-orange-600   text-white"
              >
                MY WORKS
              </Link>
            </li>
            <li>
              <Link
                href="/contact-me"
                className="block py-2 px-4 border bg-[#03030480]  border-orange-300 hover:border-orange-500  rounded-[30px] md:hover:bg-transparent  md:hover:text-orange-500  text-white "
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
