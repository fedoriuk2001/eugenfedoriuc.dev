// ! ###############   Importing   ###############

import BlogItem from "./BlogItem";

// ! ###############   Code   ###############
export default function FirstBlogSection() {
  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      <BlogItem />
    </div>
  );
}
