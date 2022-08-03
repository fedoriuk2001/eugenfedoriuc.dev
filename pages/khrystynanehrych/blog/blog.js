// ! ###############   Importing   ###############
// ===============   Components   ===============
import Layout from "../sections/Layout";

// ? ===============   Blog Page   ===============
import FirstBlogSection from "../sections/blogPage/FirstBlogSection";
import SecondBlogSection from "../sections/blogPage/SecondBlogSection";
import ThirdBlogSection from "../sections/blogPage/ThirdBlogSection";
import FourthBlogSection from "../sections/blogPage/FourthBlogSection";
import FifthBlogSection from "../sections/blogPage/FifthBlogSection";

// ! ###############   Code   ###############
export default function blog() {
  return (
    <Layout title="Eugen Fedoriuc - About" description="We have a description">
      <div className="container">
        <article>
          <FirstBlogSection />
          <SecondBlogSection />
          <ThirdBlogSection />
          <FourthBlogSection />
          <FifthBlogSection />
        </article>
      </div>
    </Layout>
  );
}
