import Link from "next/link";

import Logo from "./Logo";
import Telegram from "/public/icons/telegram.svg";
import Phone from "/public/icons/phone.svg";
import headerData from "@/data/header.json";

const Footer = () => {
  const buttonStyles =
    "md:text-sm md:block font-oswald md:border-2 border-white rounded-full px-2 xl:px-3 py-1 cursor-pointer text-white hover:bg-white  hover:text-mainBcg hover:shadow-[4px_4px_30px_0px_rgba(207,188,185,0.9)] transition-all duration-300 ease-in-out";

  return (
    <footer className=" overflow-hidden py-14 bg-mainBcg">
      <div id="container" className="container">
        <div className="px-5 w-full h-full items-center flex justify-between mb-6 sm:mb-0">
          <Logo />
          <ul className="flex justify-center sm:flex-row items-center sm:gap-16">
            <li className="">
              <Link href={`tel:${headerData.phone}`} className={buttonStyles}>
                <div className="flex items-center gap-1 xl:gap-2">
                  <Phone className="h-5 w-5" />
                  <span className="hidden md:block">{headerData.phone}</span>
                </div>
              </Link>
            </li>
            <li className=""></li>
            <Link href={headerData.telegram} className={buttonStyles}>
              <div className="flex gap-1 xl:gap-2">
                <Telegram className="h-6 w-6" />
                <span className="hidden md:block">{headerData.buttonText}</span>
              </div>
            </Link>
            <li className="text-white/60">© 2017-2025 MebliTRIX</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
