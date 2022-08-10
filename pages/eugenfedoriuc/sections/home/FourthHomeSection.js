// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Link from "next/link";

// ===============   Animation   ===============
import { motion } from "framer-motion";
import Image from "next/image";

// ===============   Logos   ===============
import htmlLogo from "./../../../images/languagesLogos/html5Logo.png";
import cssLogo from "./../../../images/languagesLogos/css3Logo.png";
import jsLogo from "./../../../images/languagesLogos/jsLogo.png";
import bootstrapLogo from "./../../../images/languagesLogos/bootstrapLogo.png";
import tsLogo from "./../../../images/languagesLogos/tsLogo.png";
import reactLogo from "./../../../images/languagesLogos/reactLogo.png";
import angularLogo from "./../../../images/languagesLogos/angularLogo.png";
import sassLogo from "./../../../images/languagesLogos/sassLogo.png";
import nodejsLogo from "./../../../images/languagesLogos/nodejsLogo.png";
import firebaseLogo from "./../../../images/languagesLogos/firebaseLogo.png";
import mongodbLogo from "./../../../images/languagesLogos/mongodbLogo.png";
import graphqlLogo from "./../../../images/languagesLogos/graphqlLogo.png";
import reduxLogo from "./../../../images/languagesLogos/reduxLogo.png";
import jqueryLogo from "./../../../images/languagesLogos/jqueryLogo.png";
import springLogo from "./../../../images/languagesLogos/springLogo.png";
import nextjsLogo from "./../../../images/languagesLogos/nextjsLogo.png";
import gatsbyLogo from "./../../../images/languagesLogos/gatsbyLogo.png";
import tailwindcssLogo from "./../../../images/languagesLogos/tailwindcssLogo.png";
import gitLogo from "./../../../images/languagesLogos/gitLogo.png";

// ===============   Icons Logo   ===============
import tailwindcss from "./../../../images/languagesLogos/tailwindcss.png";
import typescript from "./../../../images/languagesLogos/typescript.png";
import gatsby from "./../../../images/languagesLogos/gatsby.png";
import mongodb from "./../../../images/languagesLogos/mongodb.png";
import firebase from "./../../../images/languagesLogos/firebase.png";

// ! ###############   Code   ###############
export default function FourthHomeSection() {
  return (
    <section>
      <div className="text-center py-8 xl:py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="mb-12 lg:mb-5"
        >
          My Skills
        </motion.h2>
      </div>
      <motion.div
        className="slider mb-12 lg:mb-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="slide-track">
          <div className="slide">
            <Image src={htmlLogo} />
          </div>
          <div className="slide">
            <Image src={cssLogo} />
          </div>
          <div className="slide">
            <Image src={sassLogo} />
          </div>
          <div className="slide">
            <Image src={tailwindcssLogo} />
          </div>
          <div className="slide">
            <Image src={bootstrapLogo} />
          </div>
          <div className="slide">
            <Image src={jsLogo} />
          </div>
          <div className="slide">
            <Image src={jqueryLogo} />
          </div>
          <div className="slide">
            <Image src={tsLogo} />
          </div>
          <div className="slide">
            <Image src={reactLogo} />
          </div>
          <div className="slide">
            <Image src={reduxLogo} />
          </div>
          <div className="slide">
            <Image src={nextjsLogo} />
          </div>
          <div className="slide">
            <Image src={gatsbyLogo} />
          </div>
          <div className="slide">
            <Image src={angularLogo} />
          </div>
          <div className="slide">
            <Image src={gitLogo} />
          </div>
          <div className="slide">
            <Image src={nodejsLogo} />
          </div>
          <div className="slide">
            <Image src={springLogo} />
          </div>
          <div className="slide">
            <Image src={firebaseLogo} />
          </div>
          <div className="slide">
            <Image src={mongodbLogo} />
          </div>
          <div className="slide">
            <Image src={graphqlLogo} />
          </div>
        </div>
      </motion.div>
      <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-12 lg:mb-24 py-8 xl:py-20">
        <div className="flex -mx-3 text-left">
          <div className="mx-3">
            <motion.div
              className="rounded-lg p-3 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Image src={htmlLogo} />
            </motion.div>
          </div>
          <div className="mx-3">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="text-2xl mb-4"
            >
              HTML
            </motion.h3>

            <motion.div
              className="bar w-[100%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="info">
                <span className="cursor-default">Experience Level 95%</span>
              </div>
              <div className="progress-line html">
                <span className="w-[95%] bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"></span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex -mx-3 text-left">
          <div className="mx-3 ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg p-3 w-16 h-16 grid place-items-center bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"
            >
              <Image src={cssLogo} />
            </motion.div>
          </div>
          <div className="mx-3">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="text-2xl mb-4"
            >
              CSS
            </motion.h3>
            <motion.div
              className="bar w-[100%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="info">
                <span className="cursor-default">Experience Level 95%</span>
              </div>
              <div className="progress-line html">
                <span className="w-[95%] bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"></span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex -mx-3 text-left">
          <div className="mx-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg p-2 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark"
            >
              <Image src={sassLogo} />
            </motion.div>
          </div>
          <div className="mx-3">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="text-2xl mb-4"
            >
              Sass
            </motion.h3>
            <motion.div
              className="bar w-[100%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="info">
                <span className="cursor-default">Experience Level 90%</span>
              </div>
              <div className="progress-line html">
                <span className="w-[90%] bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"></span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex -mx-3 text-left">
          <div className="mx-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg p-2 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark"
            >
              <Image src={bootstrapLogo} />
            </motion.div>
          </div>
          <div className="mx-3">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="text-2xl mb-4"
            >
              Bootstrap
            </motion.h3>
            <motion.div
              className="bar w-[100%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="info">
                <span className="cursor-default">Experience Level 85%</span>
              </div>
              <div className="progress-line html">
                <span className="w-[85%] bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"></span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex -mx-3 text-left">
          <div className="mx-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg p-2 w-16 h-16 grid place-items-center bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"
            >
              <Image src={tailwindcss} />
            </motion.div>
          </div>
          <div className="mx-3">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="text-2xl mb-4"
            >
              Tailwind CSS
            </motion.h3>
            <motion.div
              className="bar w-[100%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="info">
                <span className="cursor-default">Experience Level 90%</span>
              </div>
              <div className="progress-line html">
                <span className="w-[90%] bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"></span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex -mx-3 text-left">
          <div className="mx-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg p-3 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark"
            >
              <Image src={jsLogo} />
            </motion.div>
          </div>
          <div className="mx-3">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="text-2xl mb-4"
            >
              JavaScript
            </motion.h3>
            <motion.div
              className="bar w-[100%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="info">
                <span className="cursor-default">Experience Level 80%</span>
              </div>
              <div className="progress-line html">
                <span className="w-[80%] bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"></span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex -mx-3 text-left">
          <div className="mx-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg p-0 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark"
            >
              <Image src={reactLogo} />
            </motion.div>
          </div>
          <div className="mx-3">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="text-2xl mb-4"
            >
              React
            </motion.h3>
            <motion.div
              className="bar w-[100%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="info">
                <span className="cursor-default">Experience Level 80%</span>
              </div>
              <div className="progress-line html">
                <span className="w-[80%] bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"></span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex -mx-3 text-left">
          <div className="mx-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg p-3 w-16 h-16 grid place-items-center bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"
            >
              <Image src={jqueryLogo} />
            </motion.div>
          </div>
          <div className="mx-3">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="text-2xl mb-4"
            >
              JQuery
            </motion.h3>
            <motion.div
              className="bar w-[100%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="info">
                <span className="cursor-default">Experience Level 85%</span>
              </div>
              <div className="progress-line html">
                <span className="w-[85%] bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"></span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex -mx-3 text-left">
          <div className="mx-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg p-2 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark"
            >
              <Image src={nextjsLogo} />
            </motion.div>
          </div>
          <div className="mx-3">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="text-2xl mb-4"
            >
              Next JS
            </motion.h3>
            <motion.div
              className="bar w-[100%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="info">
                <span className="cursor-default">Experience Level 75%</span>
              </div>
              <div className="progress-line html">
                <span className="w-[75%] bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"></span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex -mx-3 text-left">
          <div className="mx-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg p-3 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark"
            >
              <Image src={gatsby} />
            </motion.div>
          </div>
          <div className="mx-3">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="text-2xl mb-4"
            >
              Gatsby
            </motion.h3>
            <motion.div
              className="bar w-[100%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="info">
                <span className="cursor-default">Experience Level 60%</span>
              </div>
              <div className="progress-line html">
                <span className="w-[60%] bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"></span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex -mx-3 text-left">
          <div className="mx-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg p-3 w-16 h-16 grid place-items-center bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"
            >
              <Image src={typescript} />
            </motion.div>
          </div>
          <div className="mx-3">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="text-2xl mb-4"
            >
              TypeScript
            </motion.h3>
            <motion.div
              className="bar w-[100%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="info">
                <span className="cursor-default">Experience Level 65%</span>
              </div>
              <div className="progress-line html">
                <span className="w-[65%] bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"></span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex -mx-3 text-left">
          <div className="mx-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg p-2 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark"
            >
              <Image src={nodejsLogo} />
            </motion.div>
          </div>
          <div className="mx-3">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="text-2xl mb-4"
            >
              Node JS
            </motion.h3>
            <motion.div
              className="bar w-[100%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="info">
                <span className="cursor-default">Experience Level 50%</span>
              </div>
              <div className="progress-line html">
                <span className="w-[50%] bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"></span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex -mx-3 text-left">
          <div className="mx-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg p-2 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark"
            >
              <Image src={springLogo} />
            </motion.div>
          </div>
          <div className="mx-3">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="text-2xl mb-4"
            >
              Java Spring Boot
            </motion.h3>
            <motion.div
              className="bar w-[100%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="info">
                <span className="cursor-default">Experience Level 30%</span>
              </div>
              <div className="progress-line html">
                <span className="w-[30%] bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"></span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex -mx-3 text-left">
          <div className="mx-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg p-2 w-16 h-16 grid place-items-center bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"
            >
              <Image src={angularLogo} />
            </motion.div>
          </div>
          <div className="mx-3">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="text-2xl mb-4"
            >
              Angular
            </motion.h3>
            <motion.div
              className="bar w-[100%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="info">
                <span className="cursor-default">Experience Level 45%</span>
              </div>
              <div className="progress-line html">
                <span className="w-[45%] bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"></span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex -mx-3 text-left">
          <div className="mx-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg p-3 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark"
            >
              <Image src={firebase} />
            </motion.div>
          </div>
          <div className="mx-3">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="text-2xl mb-4"
            >
              Firebase
            </motion.h3>
            <motion.div
              className="bar w-[100%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="info">
                <span className="cursor-default">Experience Level 30%</span>
              </div>
              <div className="progress-line html">
                <span className="w-[30%] bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"></span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex -mx-3 text-left">
          <div className="mx-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg p-3 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark"
            >
              <Image src={mongodb} />
            </motion.div>
          </div>
          <div className="mx-3">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="text-2xl mb-4"
            >
              MongoDB
            </motion.h3>
            <motion.div
              className="bar w-[100%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="info">
                <span className="cursor-default">Experience Level 30%</span>
              </div>
              <div className="progress-line html">
                <span className="w-[30%] bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"></span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex -mx-3 text-left">
          <div className="mx-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg p-3 w-16 h-16 grid place-items-center bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"
            >
              <Image src={reduxLogo} />
            </motion.div>
          </div>
          <div className="mx-3">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="text-2xl mb-4"
            >
              Redux
            </motion.h3>
            <motion.div
              className="bar w-[100%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="info">
                <span className="cursor-default">Experience Level 30%</span>
              </div>
              <div className="progress-line html">
                <span className="w-[30%] bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"></span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex -mx-3 text-left">
          <div className="mx-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg p-3 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark"
            >
              <Image src={graphqlLogo} />
            </motion.div>
          </div>
          <div className="mx-3">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="text-2xl mb-4"
            >
              GraphQL
            </motion.h3>
            <motion.div
              className="bar w-[100%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="info">
                <span className="cursor-default">Experience Level 25%</span>
              </div>
              <div className="progress-line html">
                <span className="w-[25%] bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"></span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
