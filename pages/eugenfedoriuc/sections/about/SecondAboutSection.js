// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Link from "next/link";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ! ###############   Code   ###############
export default function SecondAboutSection() {
  return (
    <section className="container">
      <div className="md:flex md:-mx-8 py-8 items-center md:flex-row-reverse">
        <div className="w-full md:w-5/12 md:mx-8 mb-6">
          <div className="rounded-lg block overflow-hidden relative">2</div>
        </div>
        <div className="w-full md:w-7/12 md:mx-8">
          <h2 className="mb-10">My Story</h2>
          <div>
            <p>
              I&#39;m
              <Link href="/eugenfedoriuc/contact">
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
              I&#39;ve been a developer since I started my career 4 years ago, and
              have always taken a deep interest in making websites the best they
              can be for everyone using them.
            </p>

            <p>
              Now I design and develop beautiful websites which focus on
              providing the best experience for everyone using them, ensuring
              they are easy for your team to edit while also delivering the best
              experience for your users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
