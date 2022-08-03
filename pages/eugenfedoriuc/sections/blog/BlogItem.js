// ! ###############   Importing   ###############

import Link from "next/link";
import { blogItemData } from "../../data/blogItem/blogItem";

// ! ###############   Code   ###############
export default function BlogItem() {
  return (
    <div className="gap-12 md:grid md:grid-cols-2 lg:grid-cols-3">
      {blogItemData.map((data, key) => {
        return (
          <div className="mb-12" key={key}>
            <Link href="blog/blog">
              <a className="group hover:no-underline focus:no-underline">
                <div className="block hidden relative rounded object-cover w-full transform duration-200 group-hover:shadow-lg group-focus:shadow-lg group-hover:-translate-y-1 group-focus:-translate-y-1">
                  Image
                </div>
                <div className="mt-6">
                  <p className="text-xs text-inverted-muted my-2">
                    {data.ticker}
                  </p>
                  <p className="text-2xl leading-tight text-inverted group-hover:underline group-focus:underline">
                    {data.stockPrice}
                  </p>
                  <p className="text-inverted-muted">{data.timeElapsed}</p>
                </div>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
