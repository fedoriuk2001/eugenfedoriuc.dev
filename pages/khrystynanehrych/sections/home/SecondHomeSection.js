// ! ###############   Importing   ###############

// ! ###############   Code   ###############
export default function SecondHomeSection() {
  return (
    <section className="container">
      <div className="relative md:pb-10 mb-10">
        <div className="relative hidden md:block mx-auto filter-drop-shadow">
          <div className="block overflow-hidden relative z-20">
            {/* <img
              className="block w-100"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjY4OCI+PC9zdmc+"
              role="presentation"
            /> */}
            <div className="bg-cover absolute inset-0 opacity-1 transition"></div>
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full z-10 max-width-[78.6%] m-[2.5% auto]">
            <div className="absolute top-0 left-0 w-full h-full opacity-0 transform ">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full rounded-none">
                <div className="w-full block overflow-hidden relative">
                  {/* <img
                    style="display: block; width: 100%"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyODAwIiBoZWlnaHQ9IjE3NTAiPjwvc3ZnPg=="
                    role="presentation"
                  /> */}
                  <div className="bg-cover absolute inset-0 opacity-1 transition"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative filter-drop-shadow transform max-h-full z-30 mx-auto md:absolute md:bottom-0 md:right-0 md:scale-60 lg:scale-90 xl:scale-100 xl:w-auto">
          <div className="block overflow-hidden relative z-20">
            {/* <img
              style="display: block; width: 100%"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iNTk5Ij48L3N2Zz4="
              role="presentation"
            /> */}
            <div className="bg-cover absolute inset-0 opacity-1 transition"></div>
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full z-10 max-w-[88%] mt-[15.5%]">
            <div className="absolute top-0 left-0 w-full h-full mx-auto rounded-lg opacity-0 transform">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full rounded-none">
                <div className="w-full block overflow-hidden relative">
                  <div className="bg-cover absolute inset-0 opacity-1 transition"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex my-8 justify-center xl:justify-between">
        <button className="hidden xl:inline-flex btn btn-muted btn-active">
          Pigeon Loans
        </button>
        <button className="hidden xl:inline-flex btn btn-muted">Bonsai</button>
        <button className="hidden xl:inline-flex btn btn-muted">
          Portman Smile Clinic
        </button>
        <a className="btn btn-muted" href="#">
          See my other projects
        </a>
      </div>
    </section>
  );
}
