// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import {ThemeProvider} from 'next-themes'

// ===============   Styles   ===============
import '../styles/globals.css'


// ! ###############   Code   ###############
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class" defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp