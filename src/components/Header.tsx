"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Twirl as Hamburger } from "hamburger-react";

import Telegram from "/public/icons/telegram.svg";
import Phone from "/public/icons/phone.svg";

import headerData from "@/data/header.json";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className="w-full flex justify-between items-center absolute z-10 bg-mainBcg">
      <div className="container">
        <div className="flex justify-between items-center w-full py-3 px-5">
          <Link
            href="/"
            className="text-white font-oswald text-4xl hover-text-shadow transition-all duration-300 ease-in-out"
          >
            MebliTRIX
          </Link>

          <ul
            className={`flex flex-col transition-all duration-300 ease-in-out sm:flex-row absolute right-0 bg-mainBcg w-screen h-screen sm:h-fit sm:w-fit sm:top-0 sm:relative sm:bg-transparent gap-6 justify-center items-center ${
              showMenu ? "top-0" : "-top-[100vh]"
            }`}
          >
            {headerData.header.map((item) => (
              <li key={item.label} className="text-base uppercase text-white  ">
                <ScrollLink
                  to={item.href}
                  // href={item.href}
                  onClick={closeMenu}
                  className="cursor-pointer hover-text-shadow transition-all duration-300 ease-in-out"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <div>
            <div className="text-white sm:hidden z-20 relative">
              <Hamburger
                hideOutline={false}
                toggled={showMenu}
                toggle={toggleMenu}
              />
            </div>
            <div className="flex gap-6">
              <Link
                href={`tel:${headerData.phone}`}
                className="sm:block font-oswald hidden border-2 border-white rounded-full px-3 py-1 cursor-pointer text-white hover:bg-white  hover:text-mainBcg hover:shadow-[4px_4px_30px_0px_rgba(207,188,185,0.9)] transition-all duration-300 ease-in-out"
              >
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>{headerData.phone}</span>
                </div>
              </Link>

              <Link
                href="https://t.me/"
                className="sm:block font-oswald hidden border-2 border-white rounded-full px-3 py-1 cursor-pointer text-white hover:bg-white  hover:text-mainBcg hover:shadow-[4px_4px_30px_0px_rgba(207,188,185,0.9)] transition-all duration-300 ease-in-out"
              >
                <div className="flex gap-2">
                  <Telegram className="h-6 w-6" />
                  <span>СПИТАТИ</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
