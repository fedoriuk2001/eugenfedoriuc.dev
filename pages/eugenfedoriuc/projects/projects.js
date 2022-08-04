// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "../sections/Layout";

// ? ===============   Blog Page   ===============
import FirstProjectSection from "../sections/projectPage/FirstProjectSection";
import SecondProjectSection from "../sections/projectPage/SecondProjectSection";
import ThirdProjectSection from "../sections/projectPage/ThirdProjectSection";
import FourthProjectSection from "../sections/projectPage/FourthProjectSection";
import FifthProjectSection from "../sections/projectPage/FifthProjectSection";

// ! ###############   Code   ###############
export default function projects() {
  return (
    <Layout title="Eugen Fedoriuc - About" description="We have a description">
      <div className="container">
        <article>
          <FirstProjectSection />
          <SecondProjectSection />
          <ThirdProjectSection />
          <FourthProjectSection />
          <FifthProjectSection />
        </article>
      </div>
    </Layout>
  );
}
