// ! ###############   Importing   ###############
// ===============   Animation   ===============
import { motion } from "framer-motion";

// ! ###############   Code   ###############
export default function SecondContactSection() {
  return (
    <section className="container">
      <div className="items-center grid md:grid-cols-2 gap-24">
        <div>
          <div className="mb-8 text-2xl font-normal leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-gray-50">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              Send me a quick note
            </motion.h1>
          </div>
          <div className="mb-12 text-lg font-light text-gray-700 md:text-xl lg:text-2xl dark:text-gray-200">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              Or if you prefer to send me something longer, feel free to email
              us me{" "}
              <a
                href="mailto:fedoriuk2001@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-eugen-accent hover:text-eugen-accent-hover dark:text-eugen-accent-dark dark:hover:text-eugen-accent-hover-dark"
              >
                fedoriuk2001@gmail.com
              </a>
            </motion.p>
          </div>
          <div className="flex flex-wrap gap-3">
            <motion.a
              href="mailto:fedoriuk2001@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center w-[100%] btn btn-primary btn-xl bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Ask me a question
            </motion.a>
          </div>
        </div>

        <motion.div
          className="px-6 bg-gray-100 rounded-lg md:px-10 md:py-4 dark:bg-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <form
            className="max-w-3xl mx-auto my-6"
            name="contact"
            method="POST"
            id="contactForm"
          >
            <div className="grid">
              <div className="mb-4 text-left grid gap-1">
                <label className="">First Name</label>
                <input
                  name="first_name"
                  id="first_name"
                  type="text"
                  className="w-full px-3 py-4 bg-white border border-gray-200 rounded-lg outline-none shadow-xs dark:text-black focus:ring-1 focus:ring-gray-700"
                  placeholder="Your first name"
                />
              </div>
            </div>

            <div className="grid">
              <div className="mb-4 text-left grid gap-1">
                <label className="">Last Name</label>
                <input
                  name="last_name"
                  id="last_name"
                  type="text"
                  className="w-full px-3 py-4 bg-white border border-gray-200 rounded-lg outline-none shadow-xs dark:text-black focus:ring-1 focus:ring-gray-700"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div className="grid">
              <div className="mb-4 text-left grid gap-1">
                <label className="">Email Address</label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  className="w-full px-3 py-4 bg-white border border-gray-200 rounded-lg outline-none shadow-xs dark:text-black focus:ring-1 focus:ring-gray-700"
                  placeholder="hello@skyward.digital"
                />
              </div>
            </div>

            <div className="mb-4 text-left grid gap-1">
              <label>Message</label>
              <textarea
                name="message"
                id="message"
                className="w-full px-3 py-4 bg-white border border-gray-200 rounded-lg outline-none shadow-xs dark:text-black focus:ring-1 focus:ring-gray-700"
                placeholder="How can we help you?"
                rows="4"
              ></textarea>
            </div>

            <div className="flex flex-wrap items-center justify-center mt-4 lg:justify-start">
              <motion.button
                type="submit"
                className="w-[100%] btn btn-primary btn-xl bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Send
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
