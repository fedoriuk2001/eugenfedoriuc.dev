// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "./sections/Layout";

// ? ===============   Home   ===============
import FifthHomeSection from "./sections/home/FifthHomeSection";

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
      </div>
    </Layout>
  );
}
