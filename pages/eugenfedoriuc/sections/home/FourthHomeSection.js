// ! ###############   Importing   ###############
// ===============   Animation   ===============
import { motion } from "framer-motion";

// ! ###############   Code   ###############
export default function FourthHomeSection() {
  return (
    <section className="container px-0 lg:px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-5xl my-16 mx-auto lg:my-32"
      >
        <div className="rounded-lg w-full flex flex-1 flex-wrap items-center overflow-hidden bg-eugen-accent dark:bg-eugen-accent-dark md:flex-nowrap">
          <div className="w-full md:w-1/3 md:order-last">
            <div className="transform scale-125 -mx-12 -mt-12 -mb-12 block overflow-hidden relative md:ml-0 md:-mr-24">
              Hello
            </div>
          </div>
          <div className="px-4 pt-24 pb-8 md:p-12 w-full md:w-2/3">
            <motion.h2
              className="mb-4 lg:mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              Got a problem to solve?
            </motion.h2>
            <div className="mb-4 lg:mb-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                Get your space suit ready and tell me your ideas to develop your
                dream application.
              </motion.p>
            </div>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="btn btn-inverted bg-eugen-secondary hover:bg-eugen-secondary-hover dark:bg-eugen-secondary-dark dark:hover:bg-eugen-secondary-hover-dark"
            >
              Get in touch with me!
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
