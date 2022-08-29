// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Link from "next/link";
import Image from "next/image";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ===============   Images   ===============
import GraphicImg from "../../../images/khrystyna/graphic.png";

// ! ###############   Code   ###############
export default function SecondAboutSection() {
  return (
    <section className="container">
      <div className="md:flex md:-mx-8 py-8 items-center md:flex-row-reverse">
        <motion.div
          className="w-full md:w-5/12 md:mx-8 mb-6"
          whileHover={{ scale: 1.01 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="rounded-lg block overflow-hidden relative">
            <Image src={GraphicImg} alt="Design" />
          </div>
        </motion.div>
        <motion.div
          className="w-full md:w-7/12 md:mx-8"
          whileHover={{ scale: 1.01 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-10">About Me</h2>
          <div>
            <p>
              I&#39;m
              <Link href="/khrystynanehrych/contact">
                <motion.b
                  className="transition-all cursor-pointer hover:text-primary dark:hover:text-yellow-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {" "}
                  Graphic Designer &#38; Web Designer{" "}
                </motion.b>
              </Link>
              working with people around the world to help create excellent
              projects.
            </p>

            <p>
              I got my start as a graphic designer by editing a photo for my
              sister. As locals began to see my work, I began designing
              materials for everything. Today, I am open to all kinds of design
              work. I am fully invested in my community and would love to work
              with a brand that shares these values. If you like my work, reach
              out by filling in the contact form.
            </p>
            <p>I can&#39;t wait to learn about your brand&#39;s design needs!</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
