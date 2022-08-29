// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Image from "next/image";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ===============   Images   ===============
import IllustratorImg from "../../../images/khrystyna/illustrator.png";

// ! ###############   Code   ###############
export default function FifthAboutSection() {
  return (
    <section className="container">
      <div className="py-8 items-center md:flex md:-mx-8 md:flex-row-normal">
        <div className="w-full md:w-5/12 md:mx-8 mb-6">
          <motion.div
            className="rounded-lg block overflow-hidden relative"
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Image src={IllustratorImg} alt="Design" />
          </motion.div>
        </div>
        <div className="w-full md:w-7/12 md:mx-8">
          <motion.div
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-10">Adobe Illustrator</h2>
            <p>
              I originally learned about Adobe Illustrator, including vector
              graphic using Youtube. I can do logos, icons etc without any
              issues.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
