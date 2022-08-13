// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Head from "next/head";

import { useState, useEffect } from "react";

// ===============   Components   ===============
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Background from "./Background";
import MainSection from "./MainSection";

// ===============   Animation   ===============
import { motion, useScroll, useSpring } from "framer-motion";

// ! ###############   Code   ###############
export default function Layout({
  children,
  title = "default title",
  description = "default-description",
}) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);

    if (!isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>

      {/* Progress Bar */}
      <motion.div
        className="progress-bar-eugen dark:progress-bar-eugen-dark"
        style={{ scaleX }}
      />

      <Navbar onClick={toggleClass} open={isActive} />

      <Background onClick={toggleClass} open={isActive} />

      <MainSection open={isActive}>
        <Header />

        <main>{children}</main>

        <Footer />
      </MainSection>
    </>
  );
}
