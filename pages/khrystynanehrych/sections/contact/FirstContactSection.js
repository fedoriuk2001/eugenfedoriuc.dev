// ! ###############   Importing   ###############
// ===============   Animation   ===============
import { motion } from "framer-motion";

// ! ###############   Code   ###############
export default function FirstContactSection() {
  return (
    <section className="container">
      <div className="text-center text-[30px] sm:text-[70px] lg:w-3/4 xl:w-2/3 mx-auto my-36 xl:my-60">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
        >
           Get a fast respond about your project ideas
        </motion.h1>
      </div>
    </section>
  );
}
