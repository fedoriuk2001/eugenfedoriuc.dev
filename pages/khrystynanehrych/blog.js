// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "./sections/Layout";

// ? ===============   Home   ===============
import FifthHomeSection from "./sections/home/FifthHomeSection";

// ? ===============   Projects   ===============
import FirstProjectsSection from "./sections/projects/FirstProjectsSection";

// ? ===============  Blog  ===============
import BlogItem from "./sections/blog/BlogItem";

// ! ###############   Code   ###############
export default function blog() {
  return (
    <Layout title="Khrystyna Nehrych - About" description="We have a description">
      <FirstProjectsSection title="Blog" />
      <div className="container">
        <BlogItem />
        <FifthHomeSection />
      </div>
    </Layout>
  );
}
