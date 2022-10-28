// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Link from "next/link";

// ===============   Animation   ===============
import { motion } from "framer-motion";

// ===============   ProjectItem Data   ===============
import { projectItemData } from "../../data/projectItem/projectItem";
import Image from "next/image";

// ! ###############   Code   ###############
export default function ProjectItem() {
  return (
    <div className="gap-12 md:grid md:grid-cols-2 lg:grid-cols-3">
      {projectItemData.map((data, key) => {
        return (
          <motion.div
            className="mb-12 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            key={key}
          >
            <Link
              href={{
                pathname: "projects/[id]",
                query: {
                  id: data.page,
                },
              }}
            >
              <a className="group hover:no-underline focus:no-underline">
                <div className="block relative object-cover w-full transform duration-200 cursor-pointer group-hover:shadow-lg group-focus:shadow-lg group-hover:-translate-y-1 group-focus:-translate-y-1">
                  <Image
                    src={data.photo}
                    className="rounded-md"
                    height="350px"
                    width="600px"
                    alt="Design"
                  />
                </div>
                <div className="mt-6">
                  <p className="text-xs text-inverted-muted my-2 cursor-pointer">
                    {data.ticker}
                  </p>
                  <p className="text-2xl leading-tight text-inverted cursor-pointer group-hover:underline group-focus:underline">
                    {data.stockPrice}
                  </p>
                  <p className="text-inverted-muted cursor-pointer">
                    {data.timeElapsed}
                  </p>
                </div>
              </a>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
