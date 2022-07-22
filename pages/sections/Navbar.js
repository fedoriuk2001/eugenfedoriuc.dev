// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Link from "next/link";

// ===============   React   ===============
import React, { useState } from 'react';

// ===============   Icons   ===============
import AstronautIcon from "../images/AstronautIcon";
import BurgerLinesIcon from "../images/BurgerLinesIcon";
import HomeIcon from "../images/HomeIcon";
import LightIcon from "../images/LightIcon";


// ! ###############   Code   ###############
export default function Navbar() {
  // const classes = ["first","second","third"];
  // const navRef = React.useRef(null);
  // const bodyRef = React.useRef(null);

  // classes.forEach(c => {
  //   if (elem.classList.contains(c)) {
  //      element.classList.remove(c);
  //   }
  // })
  // const list = ['first', 'second', 'third']

  // const onAddClick = (e) => {
  //   navRef.current.classList.add(...list);
  //   if (navRef.contains(list)) {
  //     navRef.classList.remove(c);
  //   }
  // };

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  // const onRemoveClick = (e) => {
  //   navRef.current.classList.remove("show");
  // };

  // const onToggleClick = (e) => {
  //   navRef.current.classList.toggle("red");
  //   // bodyRef.current.classList.toggle("show");
  // };

  return (
    <div
      className="
        xl:hidden 
        fixed 
        z-50 
        top-auto 
        bottom-0 
        w-full 
        md:w-2/3 
        md:left-1/2 
        p-4 
        transition-all 
        duration-500 
        transform 
        md:-translate-x-1/2"
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
          onClick={toggleClass}
        >
          <BurgerLinesIcon />
          <span className="text-xs">Menu</span>
          {/* {isActive ? "your-class" : "text-sm"} */}
        </button>
      </nav>
    </div>
  );
}