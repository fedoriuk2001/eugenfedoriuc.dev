// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Link from "next/link";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ===============   Icons   ===============
import { CodeIcon } from "@heroicons/react/solid";
import SearchIcon from "../../../images/iconsJS/SearchIcon";
import PlanningIcon from "../../../images/iconsJS/PlanningIcon";
import DesignIcon from "../../../images/iconsJS/DesignIcon";
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
          Everything you need for a perfect website
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-12 lg:mb-24">
          <div className="flex -mx-3 text-left">
            <div className="mx-3">
              <motion.div
                className="rounded-lg p-4 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark"
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
                whileHover={{ scale: 1.01 }}
                className="text-2xl mb-4"
              >
                Information Gathering
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                I get a clear understanding of your future website purposes, the
                main goals are, what you wish to get, and the target audience
                you want to attract to your site.
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
                className="rounded-lg p-4 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark"
              >
                <PlanningIcon />
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
                Planning
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                I create the data that allows you to judge how the entire site
                will look like.
              </motion.p>
            </div>
          </div>
          <Link href="/khrystynanehrych/home">
            <div className="flex -mx-3 text-left cursor-pointer">
              <div className="mx-3">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-lg p-4 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark"
                >
                  <DesignIcon />
                </motion.div>
              </div>
              <div className="mx-3">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
                  className="text-2xl mb-4 cursor-pointer"
                >
                  Design
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
                  className="cursor-pointer"
                >
                  <strong>Khrystyna Nehrych</strong> creates a beautiful design
                  for you beyond my control.
                </motion.p>
              </div>
            </div>
          </Link>
          <div className="flex -mx-3 text-left">
            <div className="mx-3">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg p-4 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark"
              >
                <BiBookContent className="w-8 h-8" />
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
                Content Writing and Assembly
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                I build with your goals in mind, whether you want a simple
                flexible website, a custom storefront or a SaaS product.
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
                className="rounded-lg p-4 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark"
              >
                <CodeIcon />
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
                Coding
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                I ensure your website is of excellent quality by thoroughly
                testing using multiple approaches.
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
                className="rounded-lg p-4 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fal"
                  data-icon="vial"
                  className="svg-inline--fa fa-vial fa-w-15 text-2xl"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 512"
                >
                  <path
                    fill="currentColor"
                    d="M477.7 188L308 18.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l17 17L28.1 332.1c-37.5 37.5-37.6 98.2 0 135.7 37.5 37.5 98.2 37.6 135.7 0L438 193.6l17 17c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.2-3.1 3.2-8.1.1-11.3zM141.3 445.2c-24.2 24.2-66.3 24.2-90.5 0-25-25-25-65.5 0-90.5l66.7-66.7h181L141.3 445.2zM330.5 256h-181L324.9 80.6l90.5 90.5-84.9 84.9z"
                  ></path>
                </svg>
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
                Testing, Review, Launch &#38; Maintenance
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                Your website is always growing. Whether you’re adding new
                features or making improvements I’m here to help.
              </motion.p>
            </div>
          </div>
        </div>
        <Link href="/eugenfedoriuc/services">
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
