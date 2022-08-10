// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Image from "next/image";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ===============   Images   ===============
import DesignImg from "../../../images/photos/design.png";

// ! ###############   Code   ###############
export default function FifthAboutSection() {
  return (
    <section className="container">
      <div className="py-8 items-center md:flex md:-mx-8 md:flex-row-normal">
        <div className="w-full md:w-5/12 md:mx-8 mb-6">
          <motion.div
            className="rounded-lg block overflow-hidden relative"
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Image src={DesignImg} alt="Design" />
          </motion.div>
        </div>
        <motion.div
          className="w-full md:w-7/12 md:mx-8"
          whileHover={{ scale: 1.01 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <p>
              When working with teams I tailor my approach to your needs. One
              tool does not work for everybody and I always aim to achieve the
              best results for who I’m currently working with.
            </p>

            <p>
              I focus on building approaches which scale well to help promote
              growth while being simple enough to understand without extensive
              documentation. Whatever your team requires, I’ll be able to help
              out and provide improvements along the way.
            </p>

            <p>
              Here&#39;s just a few of the tools I’ve worked with in the past.
              I’m always open to adding more to this list if they will help the
              project in need.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
