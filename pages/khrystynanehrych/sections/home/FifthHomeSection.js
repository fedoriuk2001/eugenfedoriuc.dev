// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Image from "next/image";
import Link from "next/link";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ===============   Images   ===============
import DesignImg from "../../../images/photos/design.png";

// ! ###############   Code   ###############
export default function FifthHomeSection() {
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
            <div className="transform scale-125 -mx-22 -mt-12 -mb-11 block overflow-hidden relative md:ml-0 md:-mr-24">
              <Image src={DesignImg} alt="Design" />
            </div>
          </div>
          <div className="px-4 pt-24 pb-8 md:p-12 w-full md:w-2/3">
            <motion.h2
              className="mb-4 lg:mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Got a problem to solve?
            </motion.h2>

            <div className="mb-4 lg:mb-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Get your space suit ready and tell me your ideas to create the
                project of your dream.
              </motion.p>
            </div>
            <Link href="/khrystynanehrych/contact">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="btn btn-inverted bg-kris-secondary hover:bg-kris-secondary-hover dark:bg-kris-secondary-dark dark:hover:bg-kris-secondary-hover-dark"
              >
                Get in touch with me!
              </motion.a>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
