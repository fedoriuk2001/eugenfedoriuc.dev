// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Image from "next/image";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ===============   Images   ===============
import HandsImg from "../../../images/eugen/hands.png";

// ! ###############   Code   ###############
export default function LastAboutSection() {
  return (
    <section className="container">
      <div className="py-8 items-center md:flex md:-mx-8  md:flex-row-reverse">
        <motion.div
          className="w-full md:w-5/12 md:mx-8 mb-6"
          whileHover={{ scale: 1.01 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="rounded-lg block relative overflow-hidden">
            <Image src={HandsImg} alt="Design" />
          </div>
        </motion.div>
        <motion.div
          className="w-full md:w-7/12 md:mx-8"
          whileHover={{ scale: 1.01 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>
              <strong>Don’t know what you need?</strong> I’ll help you build a
              plan of action which&#39;ll help you to understand how your future
              project&#39;ll look like.
            </p>

            <p>
              <strong>
                Already have an idea and need somebody to help create it?
              </strong>{" "}
              I&#39;ll listen to what you&#39;re trying to achieve and make it
              as close to your vision as possible, with suggestions along the
              way to create the best product possible.
            </p>

            <p>
              <strong>
                Have a team working on a project but need a boost of support?
              </strong>{" "}
              I&#39;m flexible enough to work with any team, even if they&#39;re
              part way through a project. Just let me know how to get started.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
