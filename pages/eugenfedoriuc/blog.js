// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "./sections/Layout";


// ? ===============   Home   ===============
import FourthHomeSection from "./sections/home/FourthHomeSection";

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
        <FourthHomeSection />
      </div>
    </Layout>
  );
}
