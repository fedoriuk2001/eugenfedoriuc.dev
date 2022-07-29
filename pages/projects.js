// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "./sections/Layout";

// ? ===============   About   ===============
import FirstProjectsSection from "./sections/projects/FirstProjectsSection";
import ProjectItem from "./sections/projects/ProjectItem";


// ? ===============   Home   ===============
import FifthHomeSection from "./sections/home/FifthHomeSection";
import SixthHomeSection from "./sections/home/SixthHomeSection";
import SeventhHomeSection from "./sections/home/SeventhHomeSection";

// ! ###############   Code   ###############
export default function projects() {
  return (
    <Layout title="Eugen Fedoriuc - About" description="We have a description">
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
