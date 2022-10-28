// ! ###############   Importing   ###############
// ===============   Animation   ===============
import { motion } from "framer-motion";

// ! ###############   Code   ###############
export default function FifthProjectSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <p>I needed this one for the job.</p>

      <p>
        I think the design is very good and the website was created with the
        great technologies.
      </p>

      <h2>Step 1: Understanding</h2>

      <p>I had to figure out, how to make this website.</p>

      <h2>Compliting</h2>

      <p>
        I finished coding the website and it looks very nice. The pages as Home,
        About and Kontakt were created.
      </p>
    </motion.div>
  );
}
