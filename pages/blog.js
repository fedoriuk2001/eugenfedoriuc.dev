// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "./sections/Layout";

// ? ===============   About   ===============
import SecondAboutSection from "./sections/about/SecondAboutSection";
import ThirdAboutSection from "./sections/about/ThirdAboutSection";
import FourthAboutSection from "./sections/about/FourthAboutSection";
import FifthAboutSection from "./sections/about/FifthAboutSection";
import SixthAboutSection from "./sections/about/SixthAboutSection";

// ? ===============   Home   ===============
import FifthHomeSection from "./sections/home/FifthHomeSection";
import SixthHomeSection from "./sections/home/SixthHomeSection";
import SeventhHomeSection from "./sections/home/SeventhHomeSection";
import FirstProjectsSection from "./sections/projects/FirstProjectsSection";
import FirstBlogSection from "./sections/blog/FirstBlogSection";

// ! ###############   Code   ###############
export default function about() {
  return (
    <Layout title="Eugen Fedoriuc - About" description="We have a description">
      <FirstProjectsSection title="Blog" />
      <div className="container">
        <FirstBlogSection />
        <SeventhHomeSection />
        <SixthHomeSection />
        <FifthHomeSection />
      </div>
    </Layout>
  );
}
