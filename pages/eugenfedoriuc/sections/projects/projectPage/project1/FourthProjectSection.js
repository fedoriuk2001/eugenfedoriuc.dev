// ! ###############   Importing   ###############
// ===============   Icons   ===============
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ! ###############   Code   ###############
export default function FourthProjectSection() {
  return (
    <div className="md:absolute md:top-0 md:bottom-0 md:left-0 md:transform md:-translate-x-full md:-mt-12">
      <div className="md:sticky md:top-0 flex md:flex-col -mx-2 md:mx-8 pb-12 md:pt-12">
        <motion.a
          className="group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          href=""
          title="Instagram"
        >
          <span className="grid place-items-center w-12 h-12 p-1 m-2 transform transition-all duration-200 cursor-pointer group-hover:shadow-lg group-focus:shadow-lg group-hover:-translate-y-1 group-focus:-translate-y-1">
            {" "}
            <BsInstagram size="35px" />
          </span>
        </motion.a>
        <motion.a
          className="group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          href=""
          title="LinkedIn"
        >
          <span className="grid place-items-center w-12 h-12 p-1 m-2 transform transition-all duration-200 cursor-pointer group-hover:shadow-lg group-focus:shadow-lg group-hover:-translate-y-1 group-focus:-translate-y-1">
            {" "}
            <BsLinkedin size="35px" />
          </span>
        </motion.a>
        <motion.a
          className="group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          href=""
          title="Github"
        >
          <span className="grid place-items-center w-12 h-12 p-1 m-2 transform transition-all duration-200 cursor-pointer group-hover:shadow-lg group-focus:shadow-lg group-hover:-translate-y-1 group-focus:-translate-y-1">
            {" "}
            <BsGithub size="35px" />
          </span>
        </motion.a>
      </div>
    </div>
  );
}
