// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "./sections/Layout";

// ? ===============   Home   ==============
import FifthHomeSection from "./sections/home/FifthHomeSection";
import SixthHomeSection from "./sections/home/SixthHomeSection";
import SeventhHomeSection from "./sections/home/SeventhHomeSection";

// ? ===============   Contact   ===============
import FirstContactSection from "./sections/contact/FirstContactSection";
import SecondContactSection from "./sections/contact/SecondContactSection";

// ! ###############   Code   ###############
export default function contact() {
  return (
    <Layout title="Khrystyna Nehrych - Home" description="We have a description">
      <FirstContactSection />
      <div>
        <SecondContactSection />
        <FifthHomeSection />
        <SixthHomeSection />
        <SeventhHomeSection />
      </div>
    </Layout>
  );
}
