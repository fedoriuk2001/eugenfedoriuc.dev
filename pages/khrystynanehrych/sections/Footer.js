// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Link from "next/link";
import Image from "next/image";

// ===============   Icons   ===============
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

// ! ###############   Code   ###############
export default function Footer() {
  // const [childname, changeChildName] = useState("I am a child");

  return (
    <footer
    // className="bg-neutral"
    >
      <div className="container">
        <div className="pt-32">
          <div className="flex mb-6">
            <div className="relative rounded-full block overflow-hidden">
              {/* <Image classNameName="block w-full bg-cover opacity-1 transition absolute inset-0" /> */}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-12">
            <div className="grid gap-4 mb-auto md:col-span-5">
              <p className="text-2xl font-semibold">Eugen Fedoriuc</p>
              <div>
                <p>
                  I create beautiful websites your users will love. I work with
                  you from start to finish to make sure your goals are reached
                  and your users are happy.
                </p>
                <p>
                  <a href="https://skyward.digital">
                    See Skyward, our new agency
                  </a>
                </p>
              </div>
              <div className="-mx-4">
                <div className="flex mx-4">
                  <a
                    href="https://twitter.com/dan_spratling"
                    className="p-1 pl-0"
                    title="Instagram"
                  >
                    <BsInstagram color="red" size="25px" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dan-spratling/"
                    className="p-1 pl-2"
                    title="LinkedIn"
                  >
                    <BsLinkedin size="25px" />
                  </a>
                  <a
                    href="https://dribbble.com/danspratling"
                    className="p-1 pl-2"
                    title="GitHub"
                  >
                    <BsGithub size="25px" />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:col-span-7 md:grid-cols-2">
              <div className="my-4 md:mx-auto">
                <p className="mb-6 font-semibold">Quick Links</p>
                <div className="grid gap-2">
                  <p>
                    <a
                      className="text-inverted hover:text-highlight focus:text-highlight"
                      href="#"
                    >
                      Home
                    </a>
                  </p>
                  <p>
                    <a
                      className="text-inverted hover:text-highlight focus:text-highlight"
                      href="#"
                    >
                      About
                    </a>
                  </p>
                  <p>
                    <a
                      className="text-inverted hover:text-highlight focus:text-highlight"
                      href="#"
                    >
                      Projects
                    </a>
                  </p>
                  <p>
                    <a
                      className="text-inverted hover:text-highlight focus:text-highlight"
                      href="#"
                    >
                      Services
                    </a>
                  </p>
                  <p>
                    <a
                      className="text-inverted hover:text-highlight focus:text-highlight"
                      href="#"
                    >
                      Blog
                    </a>
                  </p>
                  <p>
                    <a
                      className="text-inverted hover:text-highlight focus:text-highlight"
                      href="#"
                    >
                      Contact
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid my-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <div>
                <p>
                  <strong>Join the newsletter</strong>
                </p>

                <p>
                  I email once a month to keep you updated with my new
                  discoveries, latest projects and featured articles.
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="py-8 mt-16 border-t-2 border-neutral-muted">
          <p className="text-sm">© 2022 Eugen Fedoriuc</p>
        </div>
      </div>
    </footer>
  );
}
