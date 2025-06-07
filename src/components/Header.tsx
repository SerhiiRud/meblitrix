"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Twirl as Hamburger } from "hamburger-react";
import clsx from "clsx";

import Logo from "./Logo";
import MenuLink from "./MenuLink";
import { Modal } from "./Modal";
import Telegram from "/public/icons/telegram.svg";
import Viber from "/public/icons/viber.svg";
import Phone from "/public/icons/phone.svg";
import TelegramOp from "/public/icons/telegram_op.svg";
import ViberOp from "/public/icons/viber_op.svg";
import PhoneOp from "/public/icons/phone_op.svg";

import { useViewportSize } from "@/utils/useScreen";

import headerData from "@/data/header.json";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const buttonStyles =
    "md:text-sm md:block font-oswald rounded-full px-1 py-1 cursor-pointer text-white hover:bg-white  hover:text-mainBcg hover:shadow-[4px_4px_30px_0px_rgba(207,188,185,0.9)] transition-all duration-300 ease-in-out active:scale-120";

  const screenWidth = useViewportSize().width || 768;

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
                  className="backdrop-opacity-30ursor-pointer hover-text-shadow transition-all duration-300 ease-in-out"
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
            <ul className="flex flex-col right-10 absolute md:static md:flex-row md:gap-6">
              <li>
                <Link
                  href={`tel:${headerData.phone}`}
                  className={clsx(
                    buttonStyles,
                    "md:border border-white md:px-2"
                  )}
                >
                  <div className="flex items-center gap-1 xl:gap-2">
                    {screenWidth > 767 ? (
                      <Phone className="h-8 w-8" />
                    ) : (
                      <PhoneOp className="h-8 w-8" />
                    )}
                    <span className="hidden md:block">{headerData.phone}</span>
                  </div>
                </Link>
              </li>
              <li className="">
                <Link href={headerData.telegram} className={buttonStyles}>
                  {screenWidth > 767 ? (
                    <Telegram className="h-8 w-8" />
                  ) : (
                    <TelegramOp className="h-8 w-8" />
                  )}
                </Link>
              </li>
              <li className="">
                <Link href={headerData.viber} className={buttonStyles}>
                  {screenWidth > 767 ? (
                    <Viber className="h-8 w-8" />
                  ) : (
                    <ViberOp className="h-8 w-8" />
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
