// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Link from "next/link";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ! ###############   Code   ###############
export default function ThirdProjectSection() {
  return (
    <motion.div
      className="grid md:grid-cols-3 gap-6 p-5 rounded-lg my-12 bg-eugen-accent dark:bg-eugen-accent-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="text-center">
        <p className="font-semibold mb-0">Industry</p>
        <p className="mb-0">Technology</p>
      </div>
      <div className="text-center">
        <p className="font-semibold mb-0">Location</p>
        <p className="mb-0">Graz, Austria</p>
      </div>
      <div className="text-center">
        <p className="font-semibold mb-0">Website</p>
        <p className="mb-0">
          <motion.a
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://codefluegel.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit website
          </motion.a>
        </p>
      </div>
    </motion.div>
  );
}
