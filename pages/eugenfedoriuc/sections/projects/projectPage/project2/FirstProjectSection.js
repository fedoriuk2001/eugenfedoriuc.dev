// ! ###############   Importing   ###############
// ===============   Animation   ===============
import { motion } from "framer-motion";

// ! ###############   Code   ###############
export default function FirstProjectSection() {
  return (
    <section className="container">
      <div className="text-center lg:w-3/4 xl:w-2/3 mx-auto my-20 xl:my-40">
        <motion.h1
          className="mb-10"
          // whileHover={{ scale: 1.01 }}
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Codeflügel
        </motion.h1>
      </div>
    </section>
  );
}
