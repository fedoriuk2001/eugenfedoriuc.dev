// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

// ===============   React   ===============
import { useState, useEffect } from "react";

// ===============   Icons   ===============
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

// ! ###############   Code   ###############
export default function Background() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          classNameName="w-[50px] h-[50px] text-yellow-500"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          classNameName="w-[50px] h-[50px] text-gray-900"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div className="relative w-full min-w-screen xl:overflow-auto ">
      <div className=" min-h-[828px] absolute top-0 left-0 right-0 flex items-center pl-4 pr-20 py-4 transition-all duration-500 xl:hidden">
        <nav className="z-0">
          <div className="mb-8">
            <div className="relative flex items-center">
              <button className="flex items-center text-inverted text-center px-1 py-2 my-2">
                <IoClose size="30px" />
                <span className="text-sm ml-3">Close Menu</span>
              </button>
              <div className="w-[30px] ml-9">{renderThemeChanger()}</div>
            </div>
            <a
              className="flex items-center justify-start p-2 hover:no-underline"
              href="index.html"
            >
              <div className="rounded-full block overflow-hidden relative">
                {/* <Image className="block w-full"/> */}
                <div className="bg-[#333333] w-[40px] h-[40px] opacity-1 transition inset-0"></div>
              </div>
              <span className="font-semibold text-inverted ml-4">
                Eugen Fedoriuc
              </span>
            </a>
          </div>
          <ul className="list-none">
            <li className="relative">
              <span className="flex items-center">
                <a
                  className="block text-inverted font-semibold p-3 flex items-center"
                  href="#"
                >
                  <AiOutlineHome size="25px" className="mr-6 ml-4" />
                  Home
                </a>
              </span>
            </li>
            <li className="relative">
              <span className="flex items-center">
                <a
                  className="block text-inverted font-semibold p-3 flex items-center"
                  href="#"
                >
                  <AiOutlineHome size="25px" className="mr-6 ml-4" />
                  About
                </a>
              </span>
            </li>
            <li className="relative">
              <span className="flex items-center">
                <a
                  className="block text-inverted font-semibold p-3 flex items-center"
                  href="#"
                >
                  <AiOutlineHome size="25px" className="mr-6 ml-4" />
                  Projects
                </a>
              </span>
            </li>
            <li className="relative">
              <span className="flex items-center">
                <a
                  className="block text-inverted font-semibold p-3 flex items-center"
                  href="#"
                >
                  <AiOutlineHome size="25px" className="mr-6 ml-4" />
                  Services
                </a>
              </span>
            </li>
            <li className="relative">
              <span className="flex items-center">
                <a
                  className="block text-inverted font-semibold p-3 flex items-center"
                  href="#"
                >
                  <AiOutlineHome size="25px" className="mr-6 ml-4" />
                  Blog
                </a>
              </span>
            </li>
            <li className="relative">
              <span className="flex items-center">
                <a
                  className="block text-inverted font-semibold p-3 flex items-center"
                  href="#"
                >
                  <AiOutlineHome size="25px" className="mr-6 ml-4" />
                  Hire me today
                </a>
              </span>
            </li>
          </ul>
          <div className="flex mt-8">
            <a
              href="https://twitter.com/dan_spratling"
              className="p-1 pl-0"
              title="Instagram"
            >
              <BsInstagram size="25px" />
            </a>
            <a
              href="https://www.linkedin.com/in/dan-spratling/"
              className="p-1 pl-2"
              title="LinkedIn"
            >
              <BsLinkedin size="25px" />
            </a>
            <a
              href="https://dribbble.com/danspratling"
              className="p-1 pl-2"
              title="GitHub"
            >
              <BsGithub size="25px" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
