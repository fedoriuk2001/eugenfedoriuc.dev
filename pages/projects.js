// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "./sections/Layout";

// ? ===============   About   ===============
import FirstAboutSection from "./sections/about/FirstAboutSection";
import SecondAboutSection from "./sections/about/SecondAboutSection";
import ThirdAboutSection from "./sections/about/ThirdAboutSection";
import FourthAboutSection from "./sections/about/FourthAboutSection";
import FifthAboutSection from "./sections/about/FifthAboutSection";
import SixthAboutSection from "./sections/about/SixthAboutSection";

// ? ===============   Home   ===============
import FifthHomeSection from "./sections/home/FifthHomeSection";
import SixthHomeSection from "./sections/home/SixthHomeSection";
import SeventhHomeSection from "./sections/home/SeventhHomeSection";

// ! ###############   Code   ###############
export default function projects() {
  return (
    <Layout title="Eugen Fedoriuc - About" description="We have a description">
      <FirstAboutSection />
      <div>
        <SecondAboutSection />
        <ThirdAboutSection />
        <FourthAboutSection />
        <FifthAboutSection />
        <SixthAboutSection />
        <SeventhHomeSection />
        <SixthHomeSection />
        <FifthHomeSection />
      </div>
    </Layout>
  );
}
