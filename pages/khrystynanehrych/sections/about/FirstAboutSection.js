// ! ###############   Importing   ###############
// ===============   Animation   ===============
import { motion } from "framer-motion";

// ! ###############   Code   ###############
export default function FirstAboutSection() {
  return (
    <motion.section
      className="container"
      whileHover={{ scale: 1.01 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="text-center lg:w-3/4 xl:w-2/3 mx-auto my-20 xl:my-60">
        <p className="text-2xl font-semibold antialiased my-6 max-w-prose mx-auto">
          Hi there!
        </p>
        <h1 className="mb-10 text-[30px] sm:text-[70px]">
          I&apos;m Khrystyna Nehrych
        </h1>
      </div>
    </motion.section>
  );
}
