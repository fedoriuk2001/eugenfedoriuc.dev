// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "./sections/Layout";

// ? ===============   Home   ===============
import FourthHomeSection from "./sections/home/FourthHomeSection";

// ? ===============  Projects  ===============
import FirstProjectsSection from "./sections/projects/FirstProjectsSection";
import ProjectItem from "./sections/projects/ProjectItem";

// ! ###############   Code   ###############
export default function projects() {
  return (
    <Layout title="Eugen Fedoriuc - About" description="We have a description">
      <FirstProjectsSection title="Projects" />
      <div className="container">
        <ProjectItem />
        <FourthHomeSection />
      </div>
    </Layout>
  );
}
