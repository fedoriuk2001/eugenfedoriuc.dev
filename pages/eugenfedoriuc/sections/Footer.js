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
                <br />
                <p className="font-semibold">Social Media</p>
              </div>
              <div className="-mx-4">
                <div className="flex mx-4">
                  <Link href="#">
                    <a
                      className="p-1 pl-0 pt-0"
                      title="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsInstagram color="red" size="25px" />
                    </a>
                  </Link>
                  <Link href="#">
                    <a
                      className="p-1 pl-2 pt-0"
                      title="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsLinkedin size="25px" />
                    </a>
                  </Link>
                  <Link href="https://github.com/fedoriuk2001">
                    <a
                      className="p-1 pl-2 pt-0"
                      title="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsGithub size="25px" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:col-span-7 md:grid-cols-2">
              <div className="my-4 md:mx-auto">
                <p className="mb-6 font-semibold">Quick Links</p>
                <div className="grid gap-2">
                  <Link href="/eugenfedoriuc/home">
                    <p>
                      <a className="text-inverted hover:text-highlight focus:text-highlight">
                        Home
                      </a>
                    </p>
                  </Link>
                  <Link href="/eugenfedoriuc/about">
                    <p>
                      <a className="text-inverted hover:text-highlight focus:text-highlight">
                        About
                      </a>
                    </p>
                  </Link>
                  <Link href="/eugenfedoriuc/projects">
                    <p>
                      <a className="text-inverted hover:text-highlight focus:text-highlight">
                        Projects
                      </a>
                    </p>
                  </Link>
                  <Link href="/eugenfedoriuc/services">
                    <p>
                      <a className="text-inverted hover:text-highlight focus:text-highlight">
                        Services
                      </a>
                    </p>
                  </Link>
                  <Link href="/eugenfedoriuc/blog">
                    <p>
                      <a className="text-inverted hover:text-highlight focus:text-highlight">
                        Blog
                      </a>
                    </p>
                  </Link>
                  <Link href="/eugenfedoriuc/contact">
                    <p>
                      <a className="text-inverted hover:text-highlight focus:text-highlight">
                        Contact
                      </a>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid my-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <div>
                <p className="font-semibold">
                  Do you need a beautiful design of photos, websites, web apps,
                  3D models, mock ups and more a lot of stuff?
                </p>
                <Link href="/khrystynanehrych/home">
                  <p className="transition-all cursor-pointer hover:text-primary dark:hover:text-yellow-300">
                    <strong>Click here to check Khrystyna&#39;s Profile</strong>
                  </p>
                </Link>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="py-8 mt-16 border-t-[1px] border-gray-900">
          <p className="text-sm">© 2022 Eugen Fedoriuc</p>
        </div>
      </div>
    </footer>
  );
}
