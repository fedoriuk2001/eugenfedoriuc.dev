// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

// ===============   React   ===============
import { useState, useEffect } from "react";

// ===============   Icons   ===============
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

// ! ###############   Code   ###############
export default function Header() {
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
    <header>
      <nav className="container border-gray-200 px-4 py-[15px] sm:py-[30px] lg:px-6">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <Link href="/">
          <a className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center font-semibold whitespace-nowrap text-xl sm:text-xl dark:text-white">
              Eugen Fedoriuc
            </span>
          </a>
          </Link>
          <div className="flex items-center lg:order-2">
            <ul className="flex flex-row font-medium mt-4 mr-[25px]  hidden xl:flex xl:w-auto xl:flex-row xl:space-x-8">
            <Link href="/about">
              <li>
                <a
                  href="#"
                  className="block text-lg py-2 pr-4 pl-3 border-b border-gray-100 rounded-lg hover:bg-black lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              </Link>
              <Link href="/projects">
              <li>
                <a
                  href="#"
                  className="block text-lg py-2 pr-4 pl-3 border-b border-gray-100 rounded-lg hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Projects
                </a>
              </li>
              </Link>
              <Link href="/services">
              <li>
                <a
                  href="#"
                  className="block text-lg py-2 pr-4 pl-3 border-b border-gray-100 rounded-lg hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              </Link>
              <Link href="/blog">
              <li>
                <a
                  href="#"
                  className="block text-lg py-2 pr-4 pl-3 border-b border-gray-100 rounded-lg hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blog
                </a>
              </li>
              </Link>
            </ul>
            <a
              href="#"
              className="font-bold text-md px-4 rounded-lg text-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 xs:text-sm lg:text-lg lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Hire Me
            </a>
            <div className="px-1 xs:hidden"></div>
            <div className="w-[40px] xs:w-[30px]">{renderThemeChanger()}</div>
          </div>
        </div>
      </nav>
    </header>
  );
}
