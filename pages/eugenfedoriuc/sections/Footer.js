// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Link from "next/link";
import Image from "next/image";

// ===============   Icons   ===============
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ! ###############   Code   ###############
export default function Footer() {
  // const [childname, changeChildName] = useState("I am a child");

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
                whileHover={{ scale: 1.01 }}
                className="text-2xl font-semibold"
              >
                Eugen Fedoriuc
              </motion.p>
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
                >
                  One of the easiest way to make a modern website is to let me
                  make it.
                </motion.p>
                <br />
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
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
                  <Link href="https://at.linkedin.com/in/eugen-fedoriuc-745804227">
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
                  <Link href="https://github.com/fedoriuk2001">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="p-1 pl-2 pt-0"
                      title="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsGithub size="25px" />
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
                  whileHover={{ scale: 1.01 }}
                  className="mb-6 font-semibold"
                >
                  Quick Links
                </motion.p>
                <div className="grid gap-2">
                  <Link href="/eugenfedoriuc/home">
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
                  <Link href="/eugenfedoriuc/about">
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
                  <Link href="/eugenfedoriuc/projects">
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
                  <Link href="/eugenfedoriuc/services">
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
                  <Link href="/eugenfedoriuc/contact">
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
                  whileHover={{ scale: 1.01 }}
                  className="font-semibold"
                >
                  Do you need a beautiful design of photos, websites, web apps,
                  3D models, mock ups and more other stuff?
                </motion.p>
                <Link href="/khrystynanehrych/home">
                  <motion.p
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="transition-all cursor-pointer dark:hover:text-eugen-accent-hover-dark"
                  >
                    <strong className="">
                      Click here to check Khrystyna&#39;s Profile
                    </strong>
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
          <motion.p whileHover={{ scale: 1.01 }} className="text-sm">
            © 2022 Eugen Fedoriuc
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
