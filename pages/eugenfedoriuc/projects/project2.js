// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "../sections/Layout";

// ? ===============   Project Page   ===============
import FirstProjectSection from "../sections/projects/projectPage/project2/FirstProjectSection";
import SecondProjectSection from "../sections/projects/projectPage/project2/SecondProjectSection";
import ThirdProjectSection from "../sections/projects/projectPage/project2/ThirdProjectSection";
import FourthProjectSection from "../sections/projects/projectPage/project2/FourthProjectSection";
import FifthProjectSection from "../sections/projects/projectPage/project2/FifthProjectSection";
import SixthProjectSection from "../sections/projects/projectPage/project2/SixthProjectSection";

// ! ###############   Code   ###############
export default function project2() {
  return (
    <Layout title="Eugen Fedoriuc - Project 2" description="We have a description">
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
