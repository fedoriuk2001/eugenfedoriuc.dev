// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Link from "next/link";
import Image from "next/image";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ===============   Images   ===============
import DesignImg from "../../../images/photos/design.png";

// ! ###############   Code   ###############
export default function FourthAboutSection() {
  return (
    <section className="container">
      <div className="py-8 items-center md:flex md:-mx-8  md:flex-row-reverse">
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
        <div className="w-full md:w-7/12 md:mx-8">
          <h2></h2>
          <motion.div
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>
              I used this flexibility to expand what I can offer. I am no longer
              just a developer, with expertise in User Experience Design,
              Accessibility, Strategy and Testing I help businesses realise
              their goal by bringing their ideas to life.
            </p>

            <p>
              <Link href="/services">
                <a className="text-[#ff0000]">
                  How the services I offer could help you
                </a>
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
