// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Link from "next/link";
import Image from "next/image";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ===============   Images   ===============
import DesignImg from "../../../images/photos/design.png";

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
            <Image src={DesignImg} alt="Design" />
          </div>
        </motion.div>
        <motion.div
          className="w-full md:w-7/12 md:mx-8"
          whileHover={{ scale: 1.01 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-10">My Story</h2>
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
                  Full Stack Web Developer{" "}
                </motion.b>
              </Link>
              working with people around the world to help create excellent
              websites and web apps.
            </p>

            <p>
              My name is Annmarie Jones, and I am from Houston, Texas. I got my
              start as a graphic designer by creating a logo for my dads
              barbeque joint. As locals began to see my work, I began designing
              materials for everything from western wear to crawdads on a stick.
              Today, I am open to all kinds of design work, although I am always
              drawn to passion projects that let me go back to my Texan roots.
              When I'm not working on my latest graphic design project, I might
              be thrift shopping, cuddling with my cat or volunteering at my
              local food shelter. I am fully invested in my community and would
              love to work with a brand that shares these values. If you like my
              work, please reach out by filling in the contact form below. I
              can't wait to learn about your brand's design needs!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
