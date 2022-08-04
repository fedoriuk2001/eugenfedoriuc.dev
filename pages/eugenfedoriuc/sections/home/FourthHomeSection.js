// ! ###############   Importing   ###############
// ===============   Animation   ===============
import { motion } from "framer-motion";

// ! ###############   Code   ###############
export default function FirstHomeSection() {
  return (
    <section className="container px-0 lg:px-4">
      <div className="max-w-5xl mx-auto my-8">
        <div className="bg-[#333333] rounded-lg w-full flex flex-1 flex-wrap md:flex-nowrap items-center overflow-hidden">
          <div className="relative h-full w-full text-secondary overflow-hidden max-w-[22rem]">
            <div className="w-full h-auto block overflow-hidden relative">
              {/* <img
                className="block w-100"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTAiIGhlaWdodD0iNTEwIj48L3N2Zz4="
                role="presentation"
              /> */}
              <div className="bg-cover opacity-1 transition absolute inset-0"></div>
            </div>
          </div>
          <div className="px-4 py-6 md:px-6 md:py-4">
            <div className="relative bg-[#666666] rounded-lg text-center px-6 py-6 -mt-20 z-10 md:text-left md:px-12 md:py-10  md:mt-0 md:-ml-12">
              <h2 className="mb-4 lg:mb-6">I&#x27;m Eugen Fedoriuc</h2>
              <div className="mb-4 lg:mb-6">
                <p>
                  I help growing companies like yours convert more customers and
                  make more sales by combining your goals with your user’s
                  needs.
                </p>
              </div>
              <a className="btn btn-inverted bg-[#555555]" href="#">
                Let&#x27;s book a call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
