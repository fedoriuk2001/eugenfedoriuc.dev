// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Head from 'next/head'

// ===============   Components   ===============
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Background from '../Background/Background'


// ! ###############   Code   ###############
export default function Layout({ children, title="default title", description="default-description" }) {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" /> 
        <title>{title}</title>
      </Head>



      {/* <Navbar /> */}

      {/* <Background /> */}


      <div className="relative w-full overflow-hidden">
        <div className="relative max-height-none xl:static shadow-2xl overflow-hidden transform transition-all duration-500">
          <div className='relative bg-neutral w-full min-w-screen pb-20 xl:pb-0 xl:overflow-auto transition-background duration-300 overflow-auto'>
        
            <Header/>
          
            <main className="flex-grow container mx-auto px-4 sm:px-6">
              {children}
            </main>
        
            {/* <Footer/> */}
        
          </div>
        </div>
      </div>
    </>
  )
}
