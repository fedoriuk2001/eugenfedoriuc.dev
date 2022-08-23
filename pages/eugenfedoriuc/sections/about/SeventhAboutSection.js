// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Image from "next/image";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ===============   Images   ===============
import DesignImg from "../../../images/photos/design.png";

// ! ###############   Code   ###############
export default function SeventhAboutSection() {
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
            <Image src={DesignImg} alt="Design" />
          </motion.div>
        </div>
        <motion.div
          className="w-full md:w-7/12 md:mx-8"
          whileHover={{ scale: 1.01 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-10">JavaScript</h2>

          <p>
            I began to start learning JavaScript through Youtube. Once I got the
            basics out of the way, I proceeded to get a stronger JavaScript
            foundation. 
          </p>
        </motion.div>
      </div>
    </section>
  );
}
