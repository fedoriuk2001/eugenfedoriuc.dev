// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Head from "next/head";

// ===============   Components   ===============
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Background from "./Background";
import MainSection from "./MainSection";

// ! ###############   Code   ###############
export default function Layout({
  children,
  title = "default title",
  description = "default-description",
}) {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>

      <Navbar />

      <Background />

      <MainSection>
        <Header />

        <main>{children}</main>

        <Footer />
      </MainSection>
    </>
  );
}
