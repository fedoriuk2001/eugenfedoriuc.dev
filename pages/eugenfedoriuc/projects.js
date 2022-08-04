// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "./sections/Layout";


// ? ===============   Home   ===============
import FourthHomeSection from "./sections/home/FourthHomeSection";

// ? ===============  Project  ===============
import ProjectItem from "./sections/project/ProjectItem";

// ! ###############   Code   ###############
export default function projects() {
  return (
    <Layout title="Eugen Fedoriuc - About" description="We have a description">
      {/* <FirstProjectsSection title="Project" /> */}
      <div className="container">
        <ProjectItem />
        <FourthHomeSection />
      </div>
    </Layout>
  );
}
