// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Image from "next/image";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ===============   Images   ===============
import DesignImg from "../../../images/photos/design.png";

// ! ###############   Code   ###############
export default function FirstAboutSection() {
  return (
    <section className="container">
      <div className="md:flex md:-mx-8 py-8 items-center md:flex-row-normal">
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
              I don&#39;t know when I fell in love with programming. I know that
              I just did. Maybe it was when I went to college and started
              participating in the coding events. Maybe it was before. I knew
              always that I wanted to be a programmer. Engineering college
              opened up a whole new world for me. When I was writing code, I
              realized I was strong, happiest, I could even call myself
              invincible. Needless to say, I was thrilled because of websites
              and web apps.
            </p>

            <p>
              The more I played with code, the more I wanted to understand how
              things worked. If something broke or didn&#39;t work, I would
              figure out what had gone wrong, trying to get it back to normal.
            </p>

            <p>
              Now I focus on people and learning how they interact with websites
              and web apps, making sure they can achieve their goals leaving
              them satisfied and more likely to return as customers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
