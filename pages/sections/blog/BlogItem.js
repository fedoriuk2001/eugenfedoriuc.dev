// ! ###############   Importing   ###############

// ! ###############   Code   ###############
export default function BlogItem() {
  return (
    <div className="mb-12">
      <a
        className="group hover:no-underline focus:no-underline"
        href="blog/why-i-soft-launched-my-website.html"
      >
        <div className="block hidden relative rounded object-cover w-full transform duration-200 group-hover:shadow-lg group-focus:shadow-lg group-hover:-translate-y-1 group-focus:-translate-y-1">
          {/* <img
                            style="display: block; width: 100%"
                            role="presentation"
                          /> */}
        </div>
        <div className="mt-6">
          <p className="text-xs text-inverted-muted my-2">
            Posted January 25, 2021
          </p>
          <p className="text-2xl leading-tight text-inverted group-hover:underline group-focus:underline">
            Why I soft launched my website
          </p>
          <p className="text-inverted-muted">
            My website released to critical acclaim, with thousands of visits in
            a few days. Learn why did I soft launch my website nearly a month
            earlier in secret
          </p>
        </div>
      </a>
    </div>
  );
}
