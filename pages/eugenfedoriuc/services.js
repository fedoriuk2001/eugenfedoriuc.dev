// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "./sections/Layout";

// ? ===============   Home   ===============
import ThirdHomeSection from "./sections/home/ThirdHomeSection";
import FifthHomeSection from "./sections/home/FifthHomeSection";

// ? ===============   Projects   ===============
import FirstProjectsSection from "./sections/projects/FirstProjectsSection";

// ! ###############   Code   ###############
export default function services() {
  return (
    <Layout title="Eugen Fedoriuc - Services" description="We have a description">
      <FirstProjectsSection title="I provide everything you need for your perfect website" />
      <div>
        <ThirdHomeSection />
        <FifthHomeSection />
      </div>
    </Layout>
  );
}
