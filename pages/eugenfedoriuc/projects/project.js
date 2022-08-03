// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "../sections/Layout";

// ? ===============   Home   ===============
import SeventhHomeSection from "../sections/home/SeventhHomeSection";

// ? ===============   Project   ===============
import FirstProjectSection from "../sections/project/FirstProjectSection";
import SecondProjectSection from "../sections/project/SecondProjectSection";
import ThirdProjectSection from "../sections/project/ThirdProjectSection";

// ! ###############   Code   ###############
export default function project() {
  return (
    <Layout title="Eugen Fedoriuc - About" description="We have a description">
      <FirstProjectSection />
      <SecondProjectSection />
      <ThirdProjectSection />
      <SeventhHomeSection />
    </Layout>
  );
}
