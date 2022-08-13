// ! ###############   Importing   ###############
// ===============   Theme Provider   ===============
import { ThemeProvider } from "next-themes";

// ===============   Components   ===============
import Preloader from "./PreLoader";

// ===============   Styles   ===============
import "../styles/globals.css";

// ! ###############   Code   ###############
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Preloader />
      <ThemeProvider
        enableSystem={true}
        attribute="class"
        defaultTheme="system"
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
