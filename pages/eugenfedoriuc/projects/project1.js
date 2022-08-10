// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "../sections/Layout";

// ? ===============   Project Page   ===============
import FirstProjectSection from "../sections/projectPage/FirstProjectSection";
import SecondProjectSection from "../sections/projectPage/SecondProjectSection";
import ThirdProjectSection from "../sections/projectPage/ThirdProjectSection";
import FourthProjectSection from "../sections/projectPage/FourthProjectSection";
import FifthProjectSection from "../sections/projectPage/FifthProjectSection";

// ! ###############   Code   ###############
export default function project1() {
  return (
    <Layout title="Eugen Fedoriuc - About" description="We have a description">
      <div className="container">
        <FirstProjectSection />
        <article className="relative max-w-3xl mx-auto">
          <SecondProjectSection />
          <ThirdProjectSection />
          <FourthProjectSection />
          <FifthProjectSection />
        </article>
      </div>
    </Layout>
  );
}
