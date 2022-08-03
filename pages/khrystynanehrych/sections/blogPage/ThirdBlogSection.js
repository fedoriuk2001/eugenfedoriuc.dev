// ! ###############   Importing   ###############

// ! ###############   Code   ###############
export default function ThirdBlogSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-3 my-8">
        <div className="col-span-2 md:order-last my-6">
          <p className="text-lg font-semibold mb-0">
            Part 1: How I got into web development, from childhood through
            university
          </p>
        </div>
        <div className="flex items-center my-6">
          <div className="rounded-full mr-6 overflow-hidden">
            <div className="rounded-full block relative overflow-hidden"></div>
          </div>
          <div>
            <p className="text-lg font-semibold mb-0">Dan Spratling</p>
            <p className="text-inverted-muted font-light mb-0">May 8, 2020</p>
            <p className="text-inverted-muted font-light mb-0">5 min read</p>
          </div>
        </div>
      </div>
    </div>
  );
}
