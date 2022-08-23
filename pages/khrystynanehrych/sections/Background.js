// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

// ===============   React   ===============
import { useState, useEffect } from "react";

// ===============   Icons   ===============
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
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

            <Link href="/khrystynanehrych/home">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center justify-start p-2 hover:no-underline"
              >
                <div className="rounded-full block overflow-hidden relative">
                  {/* <Image className="block w-full"/> */}
                  <div className="bg-[#333333] w-[40px] h-[40px] opacity-1 transition inset-0"></div>
                </div>
                <span className="font-semibold text-inverted ml-4">
                  Khrystyna Nehrych
                </span>
              </motion.a>
            </Link>
          </div>
          <ul className="list-none">
            <Link href="/khrystynanehrych/home">
              <motion.li
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="flex items-center">
                  <a className="block text-inverted font-semibold p-3 flex items-center">
                    <AiFillHome size="25px" className="mr-6 ml-4" />
                    Home
                  </a>
                </span>
              </motion.li>
            </Link>
            <Link href="/khrystynanehrych/about">
              <motion.li
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="flex items-center">
                  <a className="block text-inverted font-semibold p-3 flex items-center">
                    <RiInformationFill size="25px" className="mr-6 ml-4" />
                    About
                  </a>
                </span>
              </motion.li>
            </Link>
            <Link href="/khrystynanehrych/projects">
              <motion.li
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="flex items-center">
                  <a className="block text-inverted font-semibold p-3 flex items-center">
                    <AiFillProject size="25px" className="mr-6 ml-4" />
                    Projects
                  </a>
                </span>
              </motion.li>
            </Link>
            <Link href="/khrystynanehrych/services">
              <motion.li
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="flex items-center">
                  <a className="block text-inverted font-semibold p-3 flex items-center">
                    <RiCustomerServiceFill size="25px" className="mr-6 ml-4" />
                    Services
                  </a>
                </span>
              </motion.li>
            </Link>
            <Link href="/khrystynanehrych/contact">
              <motion.li
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="flex items-center">
                  <a className="block text-inverted font-semibold p-3 flex items-center">
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
              href=""
              className="p-1 pl-2"
              title="Instagram"
            >
              <BsInstagram size="25px" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              href=""
              className="p-1 pl-3"
              title="LinkedIn"
            >
              <BsLinkedin size="25px" />
            </motion.a>
          </div>
        </nav>
      </div>
    </div>
  );
}
