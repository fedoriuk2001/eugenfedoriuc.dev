// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "../pages/eugenfedoriuc/home";

// ? ===============   Home   ===============
import FirstHomeSection from "../pages/eugenfedoriuc/sections/home/FirstHomeSection";
import SecondHomeSection from "../pages/eugenfedoriuc/sections/home/SecondHomeSection";
import ThirdHomeSection from "../pages/eugenfedoriuc/sections/home/ThirdHomeSection";
import FourthHomeSection from "../pages/eugenfedoriuc/sections/home/FourthHomeSection";
import FifthHomeSection from "../pages/eugenfedoriuc/sections/home/FifthHomeSection";

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
