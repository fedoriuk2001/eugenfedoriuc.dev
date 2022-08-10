// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "../sections/Layout";

// ? ===============   Project Page   ===============
import FirstProjectSection from "../sections/projects/projectPage/project3/FirstProjectSection";
import SecondProjectSection from "../sections/projects/projectPage/project3/SecondProjectSection";
import ThirdProjectSection from "../sections/projects/projectPage/project3/ThirdProjectSection";
import FourthProjectSection from "../sections/projects/projectPage/project3/FourthProjectSection";
import FifthProjectSection from "../sections/projects/projectPage/project3/FifthProjectSection";

// ! ###############   Code   ###############
export default function project3() {
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
