// ! ###############   Importing   ###############
import Link from "next/link";

// ! ###############   Code   ###############
export default function FourthAboutSection() {
  return (
    <section className="container">
      <div className="py-8 items-center md:flex md:-mx-8  md:flex-row-normal">
        <div className="w-full md:w-5/12 md:mx-8 mb-6">
          <div className="rounded-lg block overflow-hidden relative">4</div>
        </div>
        <div className="w-full md:w-7/12 md:mx-8">
          <h2></h2>
          <div>
            <p>
              I’ve worked with agencies for 5 years, so I’ve built a large
              variety of websites. My main focus has been development but as a
              core member of small teams there were lots of responsibilites I
              often took charge on so I’ve done things from business strategy to
              leading teams.
            </p>

            <p>
              I used this flexibility to expand what I can offer. I am no longer
              just a developer, with expertise in User Experience Design,
              Accessibility, Strategy and Testing I help businesses realise
              their goal by bringing their ideas to life.
            </p>

            <p>
              <Link href="/services">
                <a className="text-[#ff0000]">
                  How the services I offer could help you
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
