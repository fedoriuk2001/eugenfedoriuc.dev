// ! ###############   Importing   ###############

// ! ###############   Code   ###############
export default function SecondProjectSection() {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-5 rounded-lg my-12 bg-eugen-accent hover:bg-eugen-accent-hover dark:bg-eugen-accent-dark dark:hover:bg-eugen-accent-hover-dark">
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
          <a href="https://bonsai.io">Visit website</a>
        </p>
      </div>
    </div>
  );
}
