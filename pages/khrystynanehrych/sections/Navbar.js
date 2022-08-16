// ! ###############   Importing   ###############
// ===============   React   ===============
import React from "react";

// ===============   Next JS   ===============
import Link from "next/link";

// ===============   Icons   ===============
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { RiInformationFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

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
          bg-eugen-secondary 
          dark:bg-eugen-secondary-dark
          rounded-lg 
          overflow-hidden"
      >
        <Link href="/khrystynanehrych/home">
          <a
            className="
            relative 
            text-inverted 
            text-center"
            title="Home"
          >
            <AiFillHome size="25px" className="m-auto" />
            <span className="text-xs">Home</span>
          </a>
        </Link>
        <Link href="/khrystynanehrych/about">
          <a
            className="
            relative 
            text-inverted 
            text-center"
            title="About"
          >
            <RiInformationFill size="25px" className="m-auto" />
            <span className="text-xs">About</span>
          </a>
        </Link>
        <Link href="/eugenfedoriuc/projects">
          <a className="relative text-inverted text-center" title="Projects">
            <AiFillProject size="25px" className="m-auto" />
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
          {open ? (
            <IoClose size="25px" className="m-auto" />
          ) : (
            <GiHamburgerMenu size="25px" className="m-auto" />
          )}
          {open ? (
            <span className="text-xs">Close</span>
          ) : (
            <span className="text-xs">Menu</span>
          )}
        </button>
      </nav>
    </div>
  );
}
