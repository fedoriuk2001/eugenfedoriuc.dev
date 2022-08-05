// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Link from "next/link";

// ===============   Animation   ===============
import { motion } from "framer-motion";

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
          className="mb-12 lg:mb-24"
        >
          Everything you need for a perfect website
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-12 lg:mb-24">
          <div className="flex -mx-3 text-left">
            <div className="mx-3">
              <div className="rounded-lg p-4 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fal"
                  data-icon="search"
                  className="svg-inline--fa fa-search fa-w-16 text-2xl"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"
                  ></path>
                </svg>
              </div>
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
              <div className="rounded-lg p-4 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fal"
                  data-icon="sitemap"
                  className="svg-inline--fa fa-sitemap fa-w-20 text-2xl"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M608 352h-32v-97.59c0-16.77-13.62-30.41-30.41-30.41H336v-64h48c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h48v64H94.41C77.62 224 64 237.64 64 254.41V352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32H96v-96h208v96h-32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32h-32v-96h208v96h-32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-480 32v96H32v-96h96zm240 0v96h-96v-96h96zM256 128V32h128v96H256zm352 352h-96v-96h96v96z"
                  ></path>
                </svg>
              </div>
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
                <div className="rounded-lg p-4 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="pencil-ruler"
                    className="svg-inline--fa fa-pencil-ruler fa-w-16 text-2xl"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M502.71 368.14L379.88 245.31l49.4-49.4 68.65-68.66c18.76-18.76 18.75-49.17 0-67.93l-45.25-45.25C443.3 4.69 431 0 418.71 0s-24.59 4.69-33.97 14.07l-68.65 68.64-49.4 49.4L143.87 9.29C137.68 3.1 129.56 0 121.44 0s-16.23 3.1-22.43 9.29L9.31 99c-12.38 12.39-12.39 32.47 0 44.86l122.8 122.8-113.01 113L.34 487.11c-2.72 15.63 11.22 26.9 24.59 24.56l107.44-18.84 112.94-112.96L368.14 502.7a31.621 31.621 0 0 0 22.42 9.29c8.12 0 16.24-3.1 22.43-9.29l89.72-89.7c12.39-12.39 12.39-32.47 0-44.86zM407.36 36.7c4.09-4.09 18.6-4.09 22.69 0l45.25 45.24c6.25 6.25 6.25 16.42 0 22.67l-46.03 46.03-67.94-67.94 46.03-46zM31.93 121.63l89.51-89.52L177.39 88l-39.03 39.03c-3.12 3.12-3.12 8.19 0 11.31l11.31 11.31c3.12 3.12 8.19 3.12 11.31 0l39.04-39.04 44.1 44.05-89.5 89.49L31.93 121.63zm84.96 341.43L34.5 477.51l14.37-82.37 289.83-289.8 67.94 67.94-289.75 289.78zm273.88 17.02l-122.86-122.8 89.47-89.48 44.12 44.07-39.15 39.16c-3.12 3.12-3.12 8.19 0 11.31l11.31 11.31c3.12 3.12 8.19 3.12 11.31 0l39.17-39.17 55.94 55.88-89.31 89.72z"
                    ></path>
                  </svg>
                </div>
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
              <div className="rounded-lg p-4 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fal"
                  data-icon="window-alt"
                  className="svg-inline--fa fa-window-alt fa-w-16 text-2xl"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M224 160c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-32c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm96 0c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm64-48v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48zm-32 144H32v208c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16V224zm0-32V80c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v112h448z"
                  ></path>
                </svg>
              </div>
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
              <div className="rounded-lg p-4 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark">
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
              </div>
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
              <div className="rounded-lg p-4 w-16 h-16 grid place-items-center bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark">
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
              </div>
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
