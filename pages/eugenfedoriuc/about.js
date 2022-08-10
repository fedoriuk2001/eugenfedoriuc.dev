// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "./sections/Layout";

// ? ===============   Home   ===============
import FifthHomeSection from "./sections/home/FifthHomeSection";

// ? ===============   About   ===============
import FirstAboutSection from "./sections/about/FirstAboutSection";
import SecondAboutSection from "./sections/about/SecondAboutSection";
import ThirdAboutSection from "./sections/about/ThirdAboutSection";
import FourthAboutSection from "./sections/about/FourthAboutSection";
import FifthAboutSection from "./sections/about/FifthAboutSection";
import SixthAboutSection from "./sections/about/SixthAboutSection";

// ! ###############   Code   ###############
export default function about() {
  return (
    <Layout title="Eugen Fedoriuc - About" description="We have a description">
      <FirstAboutSection />
      <div>
        <SecondAboutSection />
        <ThirdAboutSection />
        <FourthAboutSection />
        <FifthAboutSection />
        <SixthAboutSection />
        <FifthHomeSection />
      </div>
    </Layout>
  );
}
