// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Image from "next/image";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ===============   Images   ===============
import ResponsImg from "../../../images/eugen/respons.png";

// ! ###############   Code   ###############
export default function SixthAboutSection() {
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
            <Image src={ResponsImg} alt="Design" />
          </motion.div>
        </div>
        <div className="w-full md:w-7/12 md:mx-8">
          <motion.div
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
          <h2 className="mb-10">Responsive Design</h2>
            <p>
              I originally learned about responsive design and Bootstrap using
              Youtube. I can do responsive design without any additional
              framework, but it&#39;s far easier with the help of a responsive
              framework like Bootstrap.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
