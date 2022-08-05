// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "./sections/Layout";

// ? ===============   Home   ===============
import ThirdHomeSection from "./sections/home/ThirdHomeSection";
import FourthHomeSection from "./sections/home/FourthHomeSection";

// ? ===============   Projects   ===============
import FirstProjectsSection from "./sections/projects/FirstProjectsSection";

// ! ###############   Code   ###############
export default function services() {
  return (
    <Layout
      title="Eugen Fedoriuc - Services"
      description="We have a description"
    >
      <FirstProjectsSection title="I provide you, what necessary is in order to get website of your dream" />
      <div>
        <ThirdHomeSection />
        <FourthHomeSection />
      </div>
    </Layout>
  );
}
