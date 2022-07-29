// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "./sections/Layout";

// ? ===============   Home   ===============
import FifthHomeSection from "./sections/home/FifthHomeSection";
import SixthHomeSection from "./sections/home/SixthHomeSection";
import SeventhHomeSection from "./sections/home/SeventhHomeSection";
import FirstProjectsSection from "./sections/projects/FirstProjectsSection";
import BlogItem from "./sections/blog/BlogItem";

// ! ###############   Code   ###############
export default function about() {
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
