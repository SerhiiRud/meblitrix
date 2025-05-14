"use client";
//import Link from "next/link";

import { Link as ScrollLink } from "react-scroll";
import sections from "@/data/sections.json";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-home text-mainBcg py-6 sm:py-24 max-h-[1120px] h-screen sm:max-h-screen relative w-full justify-center flex items-center sm:items-end bg-hero bg-no-repeat bg-cover bg-center"
    >
      <div className="container">
        <div className="flex sm:flex-row flex-col-reverse items-start sm:items-end gap-3 xl:gap-0 sm:justify-between w-full relative bottom-0 h-full">
          <ScrollLink
            to="about"
            className="cursor-pointer border-2 text-white/60 font-bebas pt-1 pb-[6px] hover:bg-white hover:text-mainBcg hover:shadow-[4px_4px_30px_0px_rgba(207,188,185,0.9)] text-lg  border-white rounded-full px-9 transition-all duration-300 ease-in-out"
          >
            Про нас
          </ScrollLink>
          <div className="flex flex-col">
            <h1 className="text-white/60 font-bold text-5xl leading-none font-bebas ">
              {sections.hero.title}
            </h1>
            <p className="text-white/40 text-xl">{sections.hero.tag} </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
