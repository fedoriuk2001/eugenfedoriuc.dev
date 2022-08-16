// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "../sections/Layout";

// ? ===============   Project Page   ===============
import FirstProjectSection from "../sections/projects/projectPage/project1/FirstProjectSection";
import SecondProjectSection from "../sections/projects/projectPage/project1/SecondProjectSection";
import ThirdProjectSection from "../sections/projects/projectPage/project1/ThirdProjectSection";
import FourthProjectSection from "../sections/projects/projectPage/project1/FourthProjectSection";
import FifthProjectSection from "../sections/projects/projectPage/project1/FifthProjectSection";
import SixthProjectSection from "../sections/projects/projectPage/project1/SixthProjectSection";

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
          <SixthProjectSection />
        </article>
      </div>
    </Layout>
  );
}
