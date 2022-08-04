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
    <Layout title="Eugen Fedoriuc - Services" description="We have a description">
      <FirstProjectsSection title="I provide everything you need for your perfect website" />
      <div>
        <ThirdHomeSection />
        <FourthHomeSection />
      </div>
    </Layout>
  );
}
