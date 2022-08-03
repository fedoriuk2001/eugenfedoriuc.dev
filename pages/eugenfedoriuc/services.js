// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "./sections/Layout";

// ? ===============   Home   ===============
import ThirdHomeSection from "./sections/home/ThirdHomeSection";
import FifthHomeSection from "./sections/home/FifthHomeSection";
import SixthHomeSection from "./sections/home/SixthHomeSection";
import SeventhHomeSection from "./sections/home/SeventhHomeSection";

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
        <SixthHomeSection />
        <SeventhHomeSection />
      </div>
    </Layout>
  );
}
