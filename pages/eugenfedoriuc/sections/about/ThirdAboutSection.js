// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Image from "next/image";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ===============   Images   ===============
import CodeImg from "../../../images/eugen/code.png";

// ! ###############   Code   ###############
export default function FirstAboutSection() {
  return (
    <section className="container">
      <div className="md:flex md:-mx-8 py-8 items-center md:flex-row-normal">
        <div className="w-full md:w-5/12 md:mx-8 mb-6">
          <motion.div
            className="rounded-lg block overflow-hidden relative"
            // whileHover={{ scale: 1.01 }}
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Image src={CodeImg} alt="Design" />
          </motion.div>
        </div>
        <motion.div
          className="w-full md:w-7/12 md:mx-8"
          // whileHover={{ scale: 1.01 }}
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-10">Getting the Basics</h2>
          <div>
            <p>
              After deciding I wanted to get into web development the first
              question on my mind was “What do I learn?” After doing some
              research, I ended up making my learning path based on what most
              entry-level web developer positions asked for, which was:
            </p>

            <p>
              HTML, CSS, CSS Preprocessors &#40;Less &#38; Sass&#41;, Responsive
              Design, JavaScript, Boostrap, Tailwind CSS, JQuery, Next JS,
              Gatsby, TypeScript, Node JS, Java Spring Boot, Firebase, MongoDB,
              Redux, GraphQL, npm, React, Angular, Design Patterns, Git, Task
              Runners
            </p>

            <p>Here&#39;s how it went.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
