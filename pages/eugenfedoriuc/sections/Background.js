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
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { RiInformationFill, RiCustomerServiceFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ! ###############   Code   ###############
export default function Background({ onClick, open }) {
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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-[40px] h-[40px] text-yellow-500"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-[40px] h-[40px] text-gray-900"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div className="relative w-full min-w-screen xl:overflow-auto z-9000">
      <div className=" min-h-[628px] fixed top-0 left-0 right-0 flex items-center pl-4 pr-20 py-4 transition-all duration-500 xl:hidden">
        <nav className="z-0">
          <div className="mb-8">
            <div className="relative flex items-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                onClick={onClick}
                className="flex items-center text-inverted text-center px-1 py-2 my-2"
              >
                <IoClose size="30px" />
                <span className="text-sm ml-3">Close Menu</span>
              </motion.button>
              <div className="w-[30px] ml-9">{renderThemeChanger()}</div>
            </div>

            <Link href="/eugenfedoriuc/home">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center justify-start p-2 hover:no-underline"
                href=""
              >
                <span className="font-semibold text-inverted ml-4">
                  Eugen Fedoriuc
                </span>
              </motion.a>
            </Link>
          </div>
          <ul className="list-none">
            <Link href="/eugenfedoriuc/home">
              <motion.li
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="flex items-center">
                  <a
                    className="block text-inverted font-semibold p-3 flex items-center"
                    href="#"
                  >
                    <AiFillHome size="25px" className="mr-6 ml-4" />
                    Home
                  </a>
                </span>
              </motion.li>
            </Link>
            <Link href="/eugenfedoriuc/about">
              <motion.li
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="flex items-center">
                  <a
                    className="block text-inverted font-semibold p-3 flex items-center"
                    href="#"
                  >
                    <RiInformationFill size="25px" className="mr-6 ml-4" />
                    About
                  </a>
                </span>
              </motion.li>
            </Link>
            <Link href="/eugenfedoriuc/projects">
              <motion.li
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="flex items-center">
                  <a
                    className="block text-inverted font-semibold p-3 flex items-center"
                    href="#"
                  >
                    <AiFillProject size="25px" className="mr-6 ml-4" />
                    Projects
                  </a>
                </span>
              </motion.li>
            </Link>
            <Link href="/eugenfedoriuc/services">
              <motion.li
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="flex items-center">
                  <a
                    className="block text-inverted font-semibold p-3 flex items-center"
                    href="#"
                  >
                    <RiCustomerServiceFill size="25px" className="mr-6 ml-4" />
                    Services
                  </a>
                </span>
              </motion.li>
            </Link>
            <Link href="/eugenfedoriuc/contact">
              <motion.li
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="flex items-center">
                  <a
                    className="block text-inverted font-semibold p-3 flex items-center"
                    href="#"
                  >
                    <FaHandshake size="25px" className="mr-6 ml-4" />
                    Hire me today
                  </a>
                </span>
              </motion.li>
            </Link>
          </ul>
          <div className="flex mt-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              href="https://www.instagram.com/fedoriuk_/"
              className="p-1 pl-2"
              title="Instagram"
              target="_blank"
            >
              <BsInstagram size="25px" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              href="https://at.linkedin.com/in/eugen-fedoriuc-745804227"
              className="p-1 pl-3"
              title="LinkedIn"
              target="_blank"
            >
              <BsLinkedin size="25px" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              href="https://github.com/fedoriuk2001"
              className="p-1 pl-3"
              title="GitHub"
              target="_blank"
            >
              <BsGithub size="25px" />
            </motion.a>
          </div>
        </nav>
      </div>
    </div>
  );
}
