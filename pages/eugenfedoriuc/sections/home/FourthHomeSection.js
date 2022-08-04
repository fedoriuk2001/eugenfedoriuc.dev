// ! ###############   Importing   ###############
// ===============   Animation   ===============
import { motion } from "framer-motion";

// ! ###############   Code   ###############
export default function FourthHomeSection() {
  return (
    <section className="container px-0 lg:px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-5xl my-16 mx-auto lg:my-32"
      >
        <div className="bg-[#444444] rounded-lg w-full flex flex-1 flex-wrap items-center overflow-hidden md:flex-nowrap">
          <div className="w-full md:w-1/3 md:order-last">
            <div className="transform scale-125 -mx-12 -mt-12 -mb-12 block overflow-hidden relative md:ml-0 md:-mr-24"></div>
          </div>
          <div className="px-4 pt-24 pb-8 md:p-12 w-full md:w-2/3">
            <h2 className="mb-4 lg:mb-4">Where do we start?</h2>
            <div className="mb-4 lg:mb-4">
              <p>
                Schedule a call so I can learn about your product and we can
                discuss the best way to help you meet your goals. I only work
                with two people each month so book a call now to avoid missing
                out.
              </p>
            </div>
            <a className="btn btn-inverted bg-[#777777]" href="#">
              Level up your business
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
