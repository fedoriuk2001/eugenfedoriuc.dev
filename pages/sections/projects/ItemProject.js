// ! ###############   Importing   ###############
import Link from "next/link";

import { projectsData } from "../../data/projects/projects";

// ! ###############   Code   ###############
export default function ItemProject() {
  return (
    <div className="mb-24">
      {projectsData.map((data, key) => {
        return (
          <Link href="/projects/project" key={key}>
            <a className="group hover:no-underline focus:no-underline">
              <div className="gap-12 items-center max-w-lg lg:grid lg:grid-cols-12 lg:max-w-none mx-auto">
                <div className="lg:col-span-7">
                  <div className="rounded-lg block overflow-hidden relative shadow-xl border-neutral-muted object-cover w-full transform duration-200 group-hover:shadow-lg group-focus:shadow-lg group-hover:-translate-y-1 group-focus:-translate-y-1">
                    Hello
                  </div>
                </div>
                <div className="lg:col-span-5 mt-6">
                  <p className="text-4xl leading-tight text-inverted group-hover:underline group-focus:underline">
                    {data.ticker}
                  </p>
                  <p className="text-xs text-inverted-muted my-2">
                    {data.stockPrice}
                  </p>
                  <p className="text-inverted-muted">{data.timeElapsed}</p>
                  <p className="flex items-center text-[#ff0000] text-xl group-hover:underline group-focus:underline">
                    Read more
                    {/* <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fal"
                  data-icon="long-arrow-right"
                  className="svg-inline--fa fa-long-arrow-right fa-w-14 text-2xl ml-2 transform duration-200 group-hover:translate-x-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"
                  ></path>
                </svg> */}
                  </p>
                </div>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
}
