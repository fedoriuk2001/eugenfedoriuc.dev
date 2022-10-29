// ! ###############   Importing   ###############
// ===============   Animation   ===============
import { motion } from "framer-motion";

// ! ###############   Code   ###############
export default function SecondProjectSection() {
  return (
    <section className="container">
      <motion.div
        className="macbook"
        // whileHover={{ scale: 1.01 }}
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="screen">
          <div className="viewport project2"></div>
        </div>
        <div className="base"></div>
        <div className="notch"></div>
      </motion.div>
    </section>
  );
}
