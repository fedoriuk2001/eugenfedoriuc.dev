// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "./sections/Layout";

// ? ===============   Home   ===============
import FifthHomeSection from "./sections/home/FifthHomeSection";
import SixthHomeSection from "./sections/home/SixthHomeSection";
import SeventhHomeSection from "./sections/home/SeventhHomeSection";

// ? ===============   Projects   ===============
import FirstProjectsSection from "./sections/projects/FirstProjectsSection";
import ProjectItem from "./sections/projects/ProjectItem";

// ! ###############   Code   ###############
export default function projects() {
  return (
    <Layout title="Khrystyna Nehrych - About" description="We have a description">
      <FirstProjectsSection title="Projects" />
      <div className="container">
        <ProjectItem />
        <SeventhHomeSection />
        <SixthHomeSection />
        <FifthHomeSection />
      </div>
    </Layout>
  );
}
