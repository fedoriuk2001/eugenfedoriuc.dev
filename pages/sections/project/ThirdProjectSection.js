// ! ###############   Importing   ###############

// ! ###############   Code   ###############
export default function ThirdProjectSection() {
  return (
    <article>
      <div className="relative max-w-3xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 p-5 bg-[#ff0000] rounded-lg my-12">
          <div className="text-center">
            <p className="font-semibold mb-0">Industry</p>
            <p className="mb-0">Technology</p>
          </div>
          <div className="text-center">
            <p className="font-semibold mb-0">Location</p>
            <p className="mb-0">Texas, USA</p>
          </div>
          <div className="text-center">
            <p className="font-semibold mb-0">Website</p>
            <p className="mb-0">
              <a href="https://bonsai.io">
                Visit website
                {/* <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fal"
                  data-icon="external-link"
                  className="svg-inline--fa fa-external-link fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M440,256H424a8,8,0,0,0-8,8V464a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V112A16,16,0,0,1,48,96H248a8,8,0,0,0,8-8V72a8,8,0,0,0-8-8H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V264A8,8,0,0,0,440,256ZM500,0,364,.34a12,12,0,0,0-12,12v10a12,12,0,0,0,12,12L454,34l.7.71L131.51,357.86a12,12,0,0,0,0,17l5.66,5.66a12,12,0,0,0,17,0L477.29,57.34l.71.7-.34,90a12,12,0,0,0,12,12h10a12,12,0,0,0,12-12L512,12A12,12,0,0,0,500,0Z"
                  ></path>
                </svg> */}
              </a>
            </p>
          </div>
        </div>
        <div className="md:absolute md:top-0 md:bottom-0 md:left-0 md:transform md:-translate-x-full md:-mt-12">
          <div className="md:sticky md:top-0 flex md:flex-col -mx-2 md:mx-8 pb-12 md:pt-12">
            <a
              href="https://twitter.com/intent/tweet?url=file:///C:/My%20Projects/template-portfolio-master/projects/bonsai.html&amp;text=Improving the developer experience to save time and money by Dan Spratling"
              className="group"
            >
              <p className="sr-only">Share on Twitter</p>
              <span className="grid place-items-center rounded w-12 h-12 p-1 m-2 transform transition-all duration-200 cursor-pointer group-hover:shadow-lg group-focus:shadow-lg group-hover:-translate-y-1 group-focus:-translate-y-1 bg-blue-400">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="twitter"
                  className="svg-inline--fa fa-twitter fa-w-16 text-3xl text-neutral"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/shareArticle?mini=true&amp;url=file:///C:/My%20Projects/template-portfolio-master/projects/bonsai.html&amp;title=Improving the developer experience to save time and money by Dan Spratling&amp;summary=&amp;source="
              className="group"
            >
              <p className="sr-only">Share on Linkedin</p>
              <span className="grid place-items-center rounded w-12 h-12 p-1 m-2 transform transition-all duration-200 cursor-pointer group-hover:shadow-lg group-focus:shadow-lg group-hover:-translate-y-1 group-focus:-translate-y-1 bg-blue-600">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="linkedin-in"
                  className="svg-inline--fa fa-linkedin-in fa-w-14 text-3xl text-neutral"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  ></path>
                </svg>
              </span>
            </a>
            <a
              href="https://pinterest.com/pin/create/button/?url=file:///C:/My%20Projects/template-portfolio-master/projects/bonsai.html&amp;media=undefined&amp;description=Improving the developer experience to save time and money by Dan Spratling"
              className="group"
            >
              <p className="sr-only">Share on Pinterest</p>
              <span className="grid place-items-center rounded w-12 h-12 p-1 m-2 transform transition-all duration-200 cursor-pointer group-hover:shadow-lg group-focus:shadow-lg group-hover:-translate-y-1 group-focus:-translate-y-1 bg-red-600">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="pinterest-p"
                  className="svg-inline--fa fa-pinterest-p fa-w-12 text-3xl text-neutral"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
                  ></path>
                </svg>
              </span>
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=file:///C:/My%20Projects/template-portfolio-master/projects/bonsai.html"
              className="group"
            >
              <p className="sr-only">Share on Facebook</p>
              <span className="grid place-items-center rounded w-12 h-12 p-1 m-2 transform transition-all duration-200 cursor-pointer group-hover:shadow-lg group-focus:shadow-lg group-hover:-translate-y-1 group-focus:-translate-y-1 bg-blue-700">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  className="svg-inline--fa fa-facebook-f fa-w-10 text-3xl text-neutral"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div>
          <p>
            One More Cloud were looking to make significant improvements to
            their product website but they had a number of challenges to
            overcome.
          </p>

          <p>
            Bonsai is a managed elasticsearch platform which looks after your
            search tools and makes sure they&#39;re always running and
            performing the best for you. Their team is built up of mostly
            backend developers and marketers and they have a very relaxed
            company culture, which gives me the flexibility to work in a way
            which will be most beneficial to them.
          </p>

          <h2>Step 1: Completing their new marketing website</h2>

          <p>
            When I began working with Bonsai, they were in a tough situation.
            They were working on a new marketing website which they desperately
            needed to make their brand feel fresh, but the site had only been
            half completed and they needed somebody who could pick up the
            project and finish it off.
          </p>

          <p>
            The website had been built using Jekyll, a headless platform that
            I&#39;d not worked with before but was very familiar to a
            combination of other tools I&#39;d used previously. With my
            experience using many different development platforms across my
            career
            <a href="https://www.notion.so/Skills-7c10c6cc2cd140c5955bfcb509cfa8f5">
              including headless websites
            </a>
            it was no problem for me to take over and help them finish creating
            their new marketing site.
          </p>

          <h2>Step 2: Creating a better experience for the team</h2>

          <p>
            The next step was to make improvements to the site. Even though the
            marketing site had just been recreated, the new build only solved
            problems for the websites users but was still causing a ton of
            issues for the team. That wasn&#39;t good enough.
          </p>

          <p>
            The problem was the Jekyll/Parcel combination which resulted in 2
            build processes and two different public folders, a very awkward
            experience for the team. This combination also caused other weird
            issues like not being able to check the 404 page.
          </p>

          <p>
            The next issue was poor maintainability. The site hadn&#39;t been
            created in an optimal way making changes time consuming and
            expensive. Most of the site needed to be adjusted so that it was
            easy to edit, and more beneficial for a team short on time.
          </p>

          <p>
            Together, we decided to convert the site to NextJS while using the
            current design. React was a favourite library of the team, and
            NextJS provides a ton of great benefits like flexibility, static
            pages and a load of optimisations built in.
          </p>

          <p>
            Rebuilding the site took a few weeks, but the benefits gained were
            tremendous, returning control of changes to the team and making it
            much easier for them to understand how their own website works.
            There were also some performance gains inherited from using improved
            tools which was a nice side effect.
          </p>

          <p>
            I also built in Documentation and basic visual tests in the form of
            Storybook, which makes it much easier for the team to understand how
            the website fits together which encourages best practice. It also
            reduces bottlenecks as design and development can refer back to the
            documentation to remind themselves how everything works, rather than
            a single developer.
          </p>

          <h2>Future Changes</h2>

          <p>
            Bonsai are always looking to improve their software and their
            website is no exception, and as a result we&#39;ve already discussed
            changes which would further optimise their website improving its
            reliability and making it easier to work with.
          </p>

          <ul>
            <li>
              We want to create more landing pages to help focus on specific
              sectors, help with SEO and improve conversions, without creating
              too much additional work. Ideally these landing pages would be
              able to be created without any development oversight.
            </li>
            <li>
              To improve their brand consistency between their company and their
              products, and to help reduce the complexity (and therefore time to
              release), we want to standardise the components across all their
              websites by creating a component library that is specific to their
              needs. Changes made in the component library would then update all
              3 of their websites automatically.
            </li>
            <li>
              To help improve the reliability of their website we want to add
              more tests to ensure that we never miss issues when things either
              look wrong or work incorrectly. This is especially important for
              them as a team of developers, who can&#39;t afford to have
              mistakes in any of their software, including their website.
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
