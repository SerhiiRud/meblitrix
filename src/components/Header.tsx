"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Twirl as Hamburger } from "hamburger-react";

import Logo from "./Logo";
import MenuLink from "./MenuLink";
import { Modal } from "./Modal";
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
    <header className="w-full items-center absolute z-10 bg-mainBcg">
      {showMenu && <Modal onClick={closeMenu} />}
      <div className="container w-full mx-auto">
        <div className="flex justify-between items-center w-full py-3">
          <Logo onClick={closeMenu} />
          <ul className="absolute right-0 hidden md:flex  md:flex-row  w-screen h-screen md:h-fit md:w-fit md:top-0 md:relative md:bg-transparent gap-6 justify-center items-center transition-all duration-300 ease-in-out bg-mainBcg">
            {headerData.header.map((item) => (
              <li
                key={item.label}
                className="text-xl md:text-base uppercase text-white  "
              >
                <MenuLink
                  to={item.href}
                  onClick={closeMenu}
                  text={item.label}
                  className="cursor-pointer hover-text-shadow transition-all duration-300 ease-in-out"
                />
              </li>
            ))}
          </ul>
          <div>
            <div className="text-white md:hidden z-51 relative">
              <Hamburger
                hideOutline={false}
                toggled={showMenu}
                toggle={toggleMenu}
              />
            </div>
            <div className="flex gap-6">
              <Link
                href={`tel:${headerData.phone}`}
                className="md:text-sm md:block font-oswald hidden border-2 border-white rounded-full px-2 xl:px-3 py-1 cursor-pointer text-white hover:bg-white  hover:text-mainBcg hover:shadow-[4px_4px_30px_0px_rgba(207,188,185,0.9)] transition-all duration-300 ease-in-out"
              >
                <div className="flex items-center gap-1 xl:gap-2">
                  <Phone className="h-5 w-5" />
                  <span>{headerData.phone}</span>
                </div>
              </Link>

              <Link
                href="https://t.me/"
                className="md:text-sm md:block font-oswald hidden border-2 border-white rounded-full px-2 xl:px-3 py-1 cursor-pointer text-white hover:bg-white  hover:text-mainBcg hover:shadow-[4px_4px_30px_0px_rgba(207,188,185,0.9)] transition-all duration-300 ease-in-out"
              >
                <div className="flex gap-1 xl:gap-2">
                  <Telegram className="h-6 w-6" />
                  <span>{headerData.buttonText}</span>
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
