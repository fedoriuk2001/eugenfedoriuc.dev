// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Image from "next/image";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ===============   Images   ===============
import PhotoshopImg from "../../../images/khrystyna/photoshop.png";

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
            <Image src={PhotoshopImg} alt="Design" />
          </motion.div>
        </div>
        <div className="w-full md:w-7/12 md:mx-8">
          <motion.div
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-10">Adobe Photoshop</h2>
            <p>
              I proceeded to learn the functions of Adobe Photoshop through
              Youtube. Adobe Phoroshop is still my favorite today, since my
              childhood I&#39;ve been interested in Graphic Design.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
