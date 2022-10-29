// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Image from "next/image";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ===============   Images   ===============
import SassImg from "../../../images/eugen/sass.png";

// ! ###############   Code   ###############
export default function FifthAboutSection() {
  return (
    <section className="container">
      <div className="py-8 items-center md:flex md:-mx-8 md:flex-row-normal">
        <div className="w-full md:w-5/12 md:mx-8 mb-6">
          <motion.div
            className="rounded-lg block overflow-hidden relative"
            // whileHover={{ scale: 1.01 }}
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Image src={SassImg} alt="Design" />
          </motion.div>
        </div>
        <motion.div
          className="w-full md:w-7/12 md:mx-8"
          // whileHover={{ scale: 1.01 }}
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-10">Less / Sass</h2>

          <p>
            For those unfamiliar, Less &#38; Sass are CSS transpilers that allow you
            to write CSS in a more elegant manner. This lets you do things that
            aren&#39;t normally supported, like nesting CSS rules. Once finished,
            these CSS transpilers “compile” your code and convert it to normal
            CSS. There are 2 major CSS transpilers right now: Less and Sass.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
