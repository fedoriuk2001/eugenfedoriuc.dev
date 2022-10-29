// ! ###############   Importing   ###############
// ===============   Animation   ===============
import { motion } from "framer-motion";

// ! ###############   Code   ###############
export default function FifthProjectSection() {
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <p>
        Here you can see the best portfolio, that was ever made!
      </p>

      <h2>Step 1: Development</h2>

      <p>
        Understanding the proccess and write all steps, like design, choosing technologies etc.
      </p>

      <h2>Step 2: Completing</h2>

      <ul>
        <li>
          Compliting Design
        </li>
        <li>
          Coding pages and their components
        </li>
        <li>
          Deploying the website on Internet
        </li>
      </ul>
    </motion.div>
  );
}
