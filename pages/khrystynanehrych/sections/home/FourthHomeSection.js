// ! ###############   Importing   ###############
// ===============   Animation   ===============
import { motion } from "framer-motion";
import Image from "next/image";

// ===============   Logos   ===============
import photoshopLogo from "./../../../images/logosIcons/photoshop.svg";
import figmaLogo from "./../../../images/logosIcons/figma.svg";
import illustratorLogo from "./../../../images/logosIcons/illustrator.svg";

// ! ###############   Code   ###############
export default function FourthHomeSection() {
  return (
    <section>
      <div className="text-center py-8 xl:py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 mb-12 lg:mb-2"
        >
          My Skills
        </motion.h2>
      </div>

      <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-12 lg:mb-24 py-8 xl:py-20">
        <div className="flex -mx-3 text-left">
          <div className="mx-3">
            <motion.div
              className="rounded-lg p-3 w-16 h-16 grid place-items-center bg-kris-secondary hover:bg-kris-secondary-hover dark:bg-kris-secondary-dark dark:hover:bg-kris-secondary-hover-dark"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Image src={photoshopLogo} />
            </motion.div>
          </div>
          <div className="mx-3">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl mb-4"
            >
              Adobe Photoshop
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
                <span className="w-[95%] bg-kris-accent hover:bg-kris-accent-hover dark:bg-kris-accent-dark dark:hover:bg-kris-accent-hover-dark"></span>
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
              className="rounded-lg p-3 w-16 h-16 grid place-items-center bg-kris-accent hover:bg-kris-accent-hover dark:bg-kris-accent-dark dark:hover:bg-kris-accent-hover-dark"
            >
              <Image src={figmaLogo} />
            </motion.div>
          </div>
          <div className="mx-3">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl mb-4"
            >
              Figma
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
                <span className="w-[95%] bg-kris-accent hover:bg-kris-accent-hover dark:bg-kris-accent-dark dark:hover:bg-kris-accent-hover-dark"></span>
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
              className="rounded-lg p-2 w-16 h-16 grid place-items-center bg-kris-secondary hover:bg-kris-secondary-hover dark:bg-kris-secondary-dark dark:hover:bg-kris-secondary-hover-dark"
            >
              <Image src={illustratorLogo} />
            </motion.div>
          </div>
          <div className="mx-3">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl mb-4"
            >
              Adobe Illustrator
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
                <span className="w-[85%] bg-kris-accent hover:bg-kris-accent-hover dark:bg-kris-accent-dark dark:hover:bg-kris-accent-hover-dark"></span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
