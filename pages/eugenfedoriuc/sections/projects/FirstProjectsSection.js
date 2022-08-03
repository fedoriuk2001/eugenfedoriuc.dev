// ! ###############   Importing   ###############

// ! ###############   Code   ###############
export default function FirstProjectsSection({ title = "default title" }) {
  return (
    <section className="container">
      <div className="text-center mx-auto my-20 lg:w-3/4 xl:w-2/3 xl:my-40">
        <h1 className="mb-10">{title}</h1>
      </div>
    </section>
  );
}
