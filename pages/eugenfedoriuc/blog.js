// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "./sections/Layout";

// ? ===============   Home   ===============
import FifthHomeSection from "./sections/home/FifthHomeSection";
import SixthHomeSection from "./sections/home/SixthHomeSection";
import SeventhHomeSection from "./sections/home/SeventhHomeSection";
// ? ===============   Projects   ===============
import FirstProjectsSection from "./sections/projects/FirstProjectsSection";

// ? ===============  Blog  ===============
import BlogItem from "./sections/blog/BlogItem";

// ! ###############   Code   ###############
export default function blog() {
  return (
    <Layout title="Eugen Fedoriuc - About" description="We have a description">
      <FirstProjectsSection title="Blog" />
      <div className="container">
        <BlogItem />
        <SeventhHomeSection />
        <SixthHomeSection />
        <FifthHomeSection />
      </div>
    </Layout>
  );
}
