// ! ###############   Importing   ###############
// ===============   Animation   ===============
import { motion } from "framer-motion";

// ! ###############   Code   ###############
export default function SixthProjectSection() {
  return (
    <div className="max-w-3xl mx-auto my-12">
      <div className="flex flex-wrap items-center my-4 py-6 border-t-2 border-b-2 border-solid border-secondary">
        <p className="py-2 mr-2 my-2 rounded">Tags:</p>
        <motion.p
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          // whileHover={{ scale: 1.03 }}
          className="font-semibold py-2 px-4 mr-2 my-2 rounded bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"
        >
          Career
        </motion.p>
        <motion.p
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          // whileHover={{ scale: 1.03 }}
          className="font-semibold py-2 px-4 mr-2 my-2 rounded bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"
        >
          Job
        </motion.p>
        <motion.p
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          // whileHover={{ scale: 1.03 }}
          className="font-semibold py-2 px-4 mr-2 my-2 rounded bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"
        >
          Coding
        </motion.p>
      </div>
    </div>
  );
}
