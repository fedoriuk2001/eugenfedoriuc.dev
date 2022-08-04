// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "./sections/Layout";

// ? ===============   Home   ===============
import FirstHomeSection from "./sections/home/FirstHomeSection";
import SecondHomeSection from "./sections/home/SecondHomeSection";
import ThirdHomeSection from "./sections/home/ThirdHomeSection";
import FourthHomeSection from "./sections/home/FourthHomeSection";
import FifthHomeSection from "./sections/home/FifthHomeSection";

// ! ###############   Code   ###############
export default function home() {
  return (
    <Layout title="Eugen Fedoriuc - Home" description="We have a description">
      <FirstHomeSection />
      <div>
        <SecondHomeSection />
        <ThirdHomeSection />
        <FourthHomeSection />
        <FifthHomeSection />
      </div>
    </Layout>
  );
}