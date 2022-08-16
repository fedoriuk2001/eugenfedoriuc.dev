// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Link from "next/link";

// ===============   Animation   ===============
import { motion } from "framer-motion";
import TextTransition, { presets } from "react-text-transition";
import MovingComponent from "react-moving-text";

// ! ###############   Code   ###############

export default function FirstHomeSection() {
  return (
    <section className="container">
      <div className="text-center mx-auto my-20 lg:w-3/4 xl:w-2/3 xl:my-40">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-2xl font-semibold cursor-default"
        >
          <MovingComponent
            type="typewriter"
            dataText={[
              "Start",
              "Information Gathering",
              "Planning",
              "Design",
              "Content Writing and Assembly",
              "Coding",
              "Testing, Review, Launch & Maintenance",
              "Result",
            ]}
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="mb-10"
        >
          One of the easiest way to realize, what you want is to <br /> let me
          make it
        </motion.h1>

        <Link href="/khrystynanehrych/contact">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="btn btn-primary bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"
          >
            Let&#39;s discuss
          </motion.a>
        </Link>
      </div>
    </section>
  );
}
