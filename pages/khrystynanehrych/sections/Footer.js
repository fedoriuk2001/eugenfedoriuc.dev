// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Link from "next/link";
import Image from "next/image";

// ===============   Icons   ===============
import { BsInstagram, BsLinkedin } from "react-icons/bs";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ! ###############   Code   ###############
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="pt-32">
          <div className="flex mb-6">
            <div className="relative rounded-full block overflow-hidden">
              {/* <Image className="block w-full bg-cover opacity-1 transition absolute inset-0" /> */}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-12">
            <div className="grid gap-4 mb-auto md:col-span-5">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold"
              >
                Khrystyna Nehrych
              </motion.p>
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Simplicity is the soul of efficiency
                </motion.p>
                <br />
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="font-semibold"
                >
                  Social Media
                </motion.p>
              </div>
              <div className="-mx-4">
                <div className="flex mx-4">
                  <Link href="#">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="p-1 pl-0 pt-0"
                      title="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsInstagram size="25px" />
                    </motion.a>
                  </Link>
                  <Link href="#">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="p-1 pl-2 pt-0"
                      title="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsLinkedin size="25px" />
                    </motion.a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:col-span-7 md:grid-cols-2">
              <div className="my-4 md:mx-auto">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-6 font-semibold"
                >
                  Quick Links
                </motion.p>
                <div className="grid gap-2">
                  <Link href="/khrystynanehrych/home">
                    <motion.p
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <a className="text-inverted hover:text-highlight focus:text-highlight">
                        Home
                      </a>
                    </motion.p>
                  </Link>
                  <Link href="/khrystynanehrych/about">
                    <motion.p
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <a className="text-inverted hover:text-highlight focus:text-highlight">
                        About
                      </a>
                    </motion.p>
                  </Link>
                  <Link href="/khrystynanehrych/projects">
                    <motion.p
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <a className="text-inverted hover:text-highlight focus:text-highlight">
                        Projects
                      </a>
                    </motion.p>
                  </Link>
                  <Link href="/khrystynanehrych/services">
                    <motion.p
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <a className="text-inverted hover:text-highlight focus:text-highlight">
                        Services
                      </a>
                    </motion.p>
                  </Link>
                  <Link href="/khrystynanehrych/contact">
                    <motion.p
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <a className="text-inverted hover:text-highlight focus:text-highlight">
                        Contact
                      </a>
                    </motion.p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid my-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="font-semibold"
                >
                  Do you need a website or web app to create?
                </motion.p>
                <Link href="/eugenfedoriuc/home">
                  <motion.p
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="transition-all cursor-pointer dark:hover:text-eugen-accent-hover-dark"
                  >
                    <strong>Click here to check Eugen&#39;s Profile</strong>
                  </motion.p>
                </Link>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-8 mt-16 border-t-[1px] border-gray-900 dark:border-gray-300"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm"
          >
            © 2022 Eugen Fedoriuc
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
