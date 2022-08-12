// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

// ===============   React   ===============
import { useState, useEffect } from "react";

// ===============   Icons   ===============
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

// ===============   Animation   ===============
import { motion } from "framer-motion";

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
          className="w-[50px] h-[50px]"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-[50px] h-[50px]"
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
          <Link href="/eugenfedoriuc/home">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center font-semibold whitespace-nowrap text-lg sm:text-xl dark:text-white">
                Eugen Fedoriuc
              </span>
            </motion.a>
          </Link>
          <div className="flex items-center lg:order-2">
            <ul className="flex flex-row font-medium mt-4 mr-[25px] hidden xl:flex xl:w-auto xl:flex-row xl:space-x-8">
              <Link href="/eugenfedoriuc/about">
                <li>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="block text-lg py-2 pr-4 pl-3 border-b border-gray-100 rounded-lg hover:bg-black lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </motion.a>
                </li>
              </Link>
              <Link href="/eugenfedoriuc/projects">
                <li>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="block text-lg py-2 pr-4 pl-3 border-b border-gray-100 rounded-lg hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Projects
                  </motion.a>
                </li>
              </Link>
              <Link href="/eugenfedoriuc/services">
                <li>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="block text-lg py-2 pr-4 pl-3 border-b border-gray-100 rounded-lg hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </motion.a>
                </li>
              </Link>
            </ul>
            <Link href="/eugenfedoriuc/contact">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-bold text-md px-4 rounded-lg text-center bg-eugen-secondary py-2 mr-2 xs:text-sm lg:text-lg lg:px-5 lg:py-2.5 hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark"
              >
                Hire Me
              </motion.a>
            </Link>
            <div className="px-1 xs:hidden"></div>
            <motion.div
              className="w-[40px] xs:w-[30px] text-gray-900 dark:text-yellow-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {renderThemeChanger()}
            </motion.div>
          </div>
        </div>
      </nav>
    </header>
  );
}
