// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "./sections/Layout";

// ? ===============   Home   ===============
import FourthHomeSection from "./sections/home/FourthHomeSection";

// ? ===============   Contact   ===============
import FirstContactSection from "./sections/contact/FirstContactSection";
import SecondContactSection from "./sections/contact/SecondContactSection";

// ! ###############   Code   ###############
export default function contact() {
  return (
    <Layout title="Eugen Fedoriuc - Home" description="We have a description">
      <FirstContactSection />
      <div>
        <SecondContactSection />
        <FourthHomeSection />
      </div>
    </Layout>
  );
}
