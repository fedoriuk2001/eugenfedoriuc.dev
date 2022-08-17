// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Link from "next/link";
import Image from "next/image";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ===============   Icons   ===============
import SearchIcon from "../../../images/iconsJS/SearchIcon";
import PlanningIcon from "../../../images/iconsJS/PlanningIcon";
import TestingIcon from "../../../images/iconsJS/TestingIcon";
import { BiBookContent } from "react-icons/bi";

// ! ###############   Code   ###############
export default function ThirdHomeSection() {
  return (
    <section className="container">
      <div className="text-center py-8 xl:py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="mb-12 lg:mb-24 mt-12 lg:mt-24"
        >
          Everything you need for a perfect design
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-12 lg:mb-24">
          <div className="flex -mx-3 text-left">
            <div className="mx-3">
              <motion.div
                className="rounded-lg p-4 w-16 h-16 grid place-items-center bg-kris-secondary hover:bg-kris-secondary-hover dark:bg-kris-secondary-dark dark:hover:bg-kris-secondary-hover-dark"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <SearchIcon />
              </motion.div>
            </div>
            <div className="mx-3">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl mb-4"
              >
                Information Gathering &#38; Planning
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                I get a clear understanding of your future project, what you
                wish to get, and the target audience you want to attract to the
                project and I create the data that allows you to judge how the
                entire project will look like.
              </motion.p>
            </div>
          </div>
          <div className="flex -mx-3 text-left">
            <div className="mx-3">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg p-4 w-16 h-16 grid place-items-center bg-kris-secondary hover:bg-kris-secondary-hover dark:bg-kris-secondary-dark dark:hover:bg-kris-secondary-hover-dark"
              >
                <BiBookContent className="w-8 h-8" />
              </motion.div>
            </div>
            <div className="mx-3">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl mb-4"
              >
                Doing a project
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                I build a perfect project with your goals in mind.
              </motion.p>
            </div>
          </div>
          <div className="flex -mx-3 text-left">
            <div className="mx-3">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg p-4 w-16 h-16 grid place-items-center bg-kris-secondary hover:bg-kris-secondary-hover dark:bg-kris-secondary-dark dark:hover:bg-kris-secondary-hover-dark"
              >
                <TestingIcon />
              </motion.div>
            </div>
            <div className="mx-3">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl mb-4"
              >
                Review
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                On this point, you can review the project and be sure that the
                it&#39;s done.
              </motion.p>
            </div>
          </div>
        </div>
        <Link href="/khrystynanehrych/services">
          <motion.a
            className="btn btn-muted"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Find out more about my services
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="long-arrow-right"
              className="svg-inline--fa fa-long-arrow-right fa-w-14 text-xl w-6 ml-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"
              ></path>
            </svg>
          </motion.a>
        </Link>
      </div>
    </section>
  );
}
