"use client";

import Link from "next/link";

import Logo from "./Logo";
import Phone from "/public/icons/phone.svg";
import Telegram from "/public/icons/telegram.svg";
import Viber from "/public/icons/viber.svg";
import headerData from "@/data/header.json";

const Footer = () => {
  const buttonStyles =
    "md:text-sm md:block font-oswald rounded-full px-1 py-1 cursor-pointer text-white hover:bg-white  hover:text-mainBcg hover:fill-mainBcg hover:shadow-[4px_4px_30px_0px_rgba(207,188,185,0.9)] transition-all duration-300 ease-in-out active:bg-violet-700";

  return (
    <footer className=" overflow-hidden py-14 bg-mainBcg">
      <div id="container" className="container">
        <div className="px-5 w-full h-full items-center flex flex-col justify-between mb-6 sm:mb-0">
          <div className="flex w-full justify-between items-center">
            <Logo />
            <ul className="flex gap-6 sm:gap-10 md:gap-16 items-center ">
              <li className="">
                <Link href={`tel:${headerData.phone}`} className={buttonStyles}>
                  <Phone className="h-8 w-8" />
                </Link>
              </li>
              <li className="">
                <Link href={headerData.telegram} className={buttonStyles}>
                  <Telegram className="h-8 w-8" />
                </Link>
              </li>
              <li className="">
                <Link href={headerData.viber} className={buttonStyles}>
                  <Viber className="h-8 w-8" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-white/60">© 2017-2025 MebliTRIX</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
