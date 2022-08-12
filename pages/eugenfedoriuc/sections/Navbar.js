// ! ###############   Importing   ###############
// ===============   React   ===============
import React from "react";

// ===============   Next JS   ===============
import Link from "next/link";

// ===============   Icons   ===============
import AstronautIcon from "../../images/iconsJS/AstronautIcon";
import BurgerLinesIcon from "../../images/iconsJS/BurgerLinesIcon";
import HomeIcon from "../../images/iconsJS/HomeIcon";
import LightIcon from "../../images/iconsJS/LightIcon";

// ! ###############   Code   ###############
export default function Navbar({ onClick, open }) {
  return (
    <div
    className={
      open 
      ? "xl:hidden fixed z-50 top-auto bottom-0 w-full md:w-2/3 md:left-1/2 p-4 transition-all duration-500 transform md:-translate-x-1/2 scale-90 -translate-y-8 translate-x-9/12 sm:translate-x-1/2 xl:translate-x-0" 
      : "xl:hidden fixed z-50 top-auto bottom-0 w-full md:w-2/3 md:left-1/2 p-4 transition-all duration-500 transform md:-translate-x-1/2"
    }
    >
      <nav
        className="
          flex 
          justify-evenly 
          py-3 
          bg-[#118dff]
          rounded-lg 
          overflow-hidden"
      >
        <Link href="/">
          <a
            className="
            relative 
            text-inverted 
            text-center"
            title="Home"
          >
            <HomeIcon />
            <span className="text-xs">Home</span>
          </a>
        </Link>
        <Link href="/about">
          <a
            className="
            relative 
            text-inverted 
            text-center"
            title="About"
          >
            <AstronautIcon />
            <span className="text-xs">About</span>
          </a>
        </Link>
        <Link href="/">
          <a className="relative text-inverted text-center" title="Projects">
            <LightIcon />
            <span className="text-xs">Projects</span>
          </a>
        </Link>

        <button
          className="
            text-inverted 
            text-center"
          id="navbar-button-menu"
          onClick={onClick}
        >
          <BurgerLinesIcon />
          <span>Menu</span>
        </button>
      </nav>
    </div>
  );
}
