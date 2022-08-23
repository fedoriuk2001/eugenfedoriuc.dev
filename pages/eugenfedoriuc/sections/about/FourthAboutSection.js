// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Link from "next/link";
import Image from "next/image";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ===============   Images   ===============
import DesignImg from "../../../images/photos/design.png";

// ! ###############   Code   ###############
export default function FourthAboutSection() {
  return (
    <section className="container">
      <div className="py-8 items-center md:flex md:-mx-8  md:flex-row-reverse">
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
        <div className="w-full md:w-7/12 md:mx-8">
          <h2 className="mb-10">HTML &#38; CSS</h2>
          <motion.div
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>
              I proceeded to learn the fundamentals of HTML &#38; CSS and web
              design through Youtube and W3School. They are still my
              favorites today, since the pacing is great, and the overall scope
              of what they cover allowed me to acquire a stronger foundation to
              this.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
