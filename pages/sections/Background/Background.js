import Image from 'next/image';
import Link from 'next/link'
import styles from './Background.module.css'

export default function Background() {
    return (
        <>background</>
    //     <div className="relative bg-neutral w-full min-w-screen xl:overflow-auto">
    //     <div
    //       className="xl:hidden absolute top-0 left-0 right-0 flex items-center bg-neutral-muted pl-4 pr-20 py-4 transition-all duration-500"
    //       style="min-height: 0"
    //     >
    //       <nav aria-label="primary" style="visibility: hidden">
    //         <div className="mb-8">
    //           <div className="relative">
    //             <div className="absolute top-0 bottom-0 right-0 flex undefined">
    //               <button
    //                 type="button"
    //                 className="group self-center flex items-center justify-center p-3 rounded hover:bg-neutral-muted text-inverted-muted hover:text-highlight focus:text-highlight transition duration-200"
    //               >
    //                 <span className="sr-only">classNameic</span
    //                 ><svg
    //                   aria-hidden="true"
    //                   focusable="false"
    //                   data-prefix="fad"
    //                   data-icon="swatchbook"
    //                   className="svg-inline--fa fa-swatchbook fa-w-16 text-2xl box-content opacity-50 group-hover:opacity-75 group-focus:opacity-75"
    //                   role="img"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   viewBox="0 0 512 512"
    //                 >
    //                   <g className="fa-group">
    //                     <path
    //                       className="fa-secondary"
    //                       fill="currentColor"
    //                       d="M64,256h64V192H64Zm370.66-88.29h0L344.5,77.36a31.83,31.83,0,0,0-45-.07h0l-.07.07L224,152.88V424L434.66,212.9A32,32,0,0,0,434.66,167.71ZM64,128h64V64H64ZM480,320H373.09L186.68,506.51c-2.06,2.07-4.5,3.58-6.68,5.49H480a32,32,0,0,0,32-32V352A32,32,0,0,0,480,320Z"
    //                     ></path>
    //                     <path
    //                       className="fa-primary"
    //                       fill="currentColor"
    //                       d="M160,0H32A32,32,0,0,0,0,32V416a96,96,0,0,0,192,0V32A32,32,0,0,0,160,0ZM96,440a24,24,0,1,1,24-24A24,24,0,0,1,96,440Zm32-184H64V192h64Zm0-128H64V64h64Z"
    //                     ></path>
    //                   </g>
    //                 </svg></button
    //               ><button
    //                 type="button"
    //                 className="group self-center flex items-center justify-center p-3 rounded hover:bg-neutral-muted text-inverted-muted hover:text-highlight focus:text-highlight transition duration-200"
    //               >
    //                 <span className="sr-only">Dark</span
    //                 ><svg
    //                   aria-hidden="true"
    //                   focusable="false"
    //                   data-prefix="fad"
    //                   data-icon="swatchbook"
    //                   className="svg-inline--fa fa-swatchbook fa-w-16 text-2xl box-content opacity-50 group-hover:opacity-75 group-focus:opacity-75"
    //                   role="img"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   viewBox="0 0 512 512"
    //                 >
    //                   <g className="fa-group">
    //                     <path
    //                       className="fa-secondary"
    //                       fill="currentColor"
    //                       d="M64,256h64V192H64Zm370.66-88.29h0L344.5,77.36a31.83,31.83,0,0,0-45-.07h0l-.07.07L224,152.88V424L434.66,212.9A32,32,0,0,0,434.66,167.71ZM64,128h64V64H64ZM480,320H373.09L186.68,506.51c-2.06,2.07-4.5,3.58-6.68,5.49H480a32,32,0,0,0,32-32V352A32,32,0,0,0,480,320Z"
    //                     ></path>
    //                     <path
    //                       className="fa-primary"
    //                       fill="currentColor"
    //                       d="M160,0H32A32,32,0,0,0,0,32V416a96,96,0,0,0,192,0V32A32,32,0,0,0,160,0ZM96,440a24,24,0,1,1,24-24A24,24,0,0,1,96,440Zm32-184H64V192h64Zm0-128H64V64h64Z"
    //                     ></path>
    //                   </g>
    //                 </svg>
    //               </button>
    //             </div>
    //             <button
    //               className="flex items-center text-inverted text-center px-1 py-2 my-2"
    //               id="menu-close"
    //             >
    //               <svg
    //                 aria-hidden="true"
    //                 focusable="false"
    //                 data-prefix="fal"
    //                 data-icon="times"
    //                 className="svg-inline--fa fa-times fa-w-10 fa-fw text-2xl w-6 h-6 m-auto"
    //                 role="img"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 320 512"
    //               >
    //                 <path
    //                   fill="currentColor"
    //                   d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
    //                 ></path></svg
    //               ><span className="text-sm ml-4">Close Menu</span>
    //             </button>
    //           </div>
    //           <a
    //             className="flex items-center justify-start hover:no-underline p-2"
    //             href="index.html"
    //             ><div
    //               className="rounded-full"
    //               style="display: block; overflow: hidden; position: relative"
    //             >
    //               <Image className={styles.displayblockwidth}/>
    //               <div
    //                 style="
    //                   background-size: cover;
    //                   opacity: 1;
    //                   transition: opacity 500ms 500ms;
    //                   position: absolute;
    //                   left: 0;
    //                   top: 0;
    //                   bottom: 0;
    //                   right: 0;
    //                 "
    //               ></div>
    //             </div>
    //             <span className="font-semibold text-inverted ml-4"
    //               >Dan Spratling</span
    //             ></a
    //           >
    //         </div>
    //         <ul className="list-none">
    //           <li className="relative">
    //             <span className="flex items-center"
    //               ><svg
    //                 aria-hidden="true"
    //                 focusable="false"
    //                 data-prefix="fal"
    //                 data-icon="home-lg"
    //                 className="svg-inline--fa fa-home-lg fa-w-18 fa-fw flex-0 text-xl w-10 h-6 mx-2"
    //                 role="img"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 576 512"
    //               >
    //                 <path
    //                   fill="currentColor"
    //                   d="M573.48 219.91L512 170.42V72a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v72.6L310.6 8a35.85 35.85 0 0 0-45.19 0L2.53 219.91a6.71 6.71 0 0 0-1 9.5l14.2 17.5a6.82 6.82 0 0 0 9.6 1L64 216.72V496a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V216.82l38.8 31.29a6.83 6.83 0 0 0 9.6-1l14.19-17.5a7.14 7.14 0 0 0-1.11-9.7zM336 480h-96V320h96zm144 0H368V304a16 16 0 0 0-16-16H224a16 16 0 0 0-16 16v176H96V190.92l187.71-151.4a6.63 6.63 0 0 1 8.4 0L480 191z"
    //                 ></path></svg
    //               ><a
    //                 className="block text-inverted font-semibold p-3"
    //                 href="index.html"
    //                 >Home</a
    //               ></span
    //             >
    //           </li>
    //           <li className="relative">
    //             <span className="flex items-center"
    //               ><svg
    //                 aria-hidden="true"
    //                 focusable="false"
    //                 data-prefix="fal"
    //                 data-icon="user-astronaut"
    //                 className="svg-inline--fa fa-user-astronaut fa-w-14 fa-fw flex-0 text-xl w-10 h-6 mx-2"
    //                 role="img"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 448 512"
    //               >
    //                 <path
    //                   fill="currentColor"
    //                   d="M288 128H160c-35.3 0-64 28.7-64 64v16c0 61.8 50.2 112 112 112h32c61.8 0 112-50.2 112-112v-16c0-35.3-28.7-64-64-64zm32 80c0 44.1-35.9 80-80 80h-32c-44.1 0-80-35.9-80-80v-16c0-17.6 14.3-32 32-32h128c17.7 0 32 14.4 32 32v16zm-128-32l-12 36-36 12 36 12 12 36 12-36 36-12-36-12-12-36zm112 224H144c-26.5 0-48 21.5-48 48v56c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-56c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v56c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-56c0-26.5-21.5-48-48-48zm-32 48c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16v40c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-40c0-8.8-7.2-16-16-16zm183.2-119.7c20.3-20.1 35.9-44.8 45.7-72.3H416c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-11.2C378.5 53.5 307.6 0 224 0S69.5 53.5 43.2 128H32c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h11.2c9.7 27.5 25.4 52.2 45.7 72.3C37.1 347 0 396.2 0 454.4V504c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-49.6c0-51.6 38.5-94 88.3-101C150.2 372.7 185.8 384 224 384s73.8-11.3 103.7-30.6c49.8 6.9 88.3 49.3 88.3 101V504c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-49.6c0-58.2-37.1-107.4-88.8-126.1zM224 352c-88.2 0-160-71.8-160-160S135.8 32 224 32s160 71.8 160 160-71.8 160-160 160z"
    //                 ></path></svg
    //               ><a
    //                 className="block text-inverted font-semibold p-3"
    //                 href="about.html"
    //                 >About</a
    //               ></span
    //             >
    //           </li>
    //           <li className="relative">
    //             <span className="flex items-center"
    //               ><svg
    //                 aria-hidden="true"
    //                 focusable="false"
    //                 data-prefix="fal"
    //                 data-icon="lightbulb"
    //                 className="svg-inline--fa fa-lightbulb fa-w-11 fa-fw flex-0 text-xl w-10 h-6 mx-2"
    //                 role="img"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 352 512"
    //               >
    //                 <path
    //                   fill="currentColor"
    //                   d="M176 0C73.05 0-.12 83.54 0 176.24c.06 44.28 16.5 84.67 43.56 115.54C69.21 321.03 93.85 368.68 96 384l.06 75.18c0 3.15.94 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84L256 384c2.26-15.72 26.99-63.19 52.44-92.22C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0zm47.94 454.31L206.85 480h-61.71l-17.09-25.69-.01-6.31h95.9v6.31zm.04-38.31h-95.97l-.07-32h96.08l-.04 32zm60.4-145.32c-13.99 15.96-36.33 48.1-50.58 81.31H118.21c-14.26-33.22-36.59-65.35-50.58-81.31C44.5 244.3 32.13 210.85 32.05 176 31.87 99.01 92.43 32 176 32c79.4 0 144 64.6 144 144 0 34.85-12.65 68.48-35.62 94.68zM176 64c-61.75 0-112 50.25-112 112 0 8.84 7.16 16 16 16s16-7.16 16-16c0-44.11 35.88-80 80-80 8.84 0 16-7.16 16-16s-7.16-16-16-16z"
    //                 ></path></svg
    //               ><a
    //                 className="block text-inverted font-semibold p-3"
    //                 href="projects.html"
    //                 >Projects</a
    //               ></span
    //             >
    //           </li>
    //           <li className="relative">
    //             <span className="flex items-center"
    //               ><svg
    //                 aria-hidden="true"
    //                 focusable="false"
    //                 data-prefix="fal"
    //                 data-icon="user-chart"
    //                 className="svg-inline--fa fa-user-chart fa-w-20 fa-fw flex-0 text-xl w-10 h-6 mx-2"
    //                 role="img"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 640 512"
    //               >
    //                 <path
    //                   fill="currentColor"
    //                   d="M608 0H192c-17.67 0-32 14.33-32 32v96c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96c0-41.74-26.8-76.9-64-90.12V32h416v352H305.34c-.59-.94-1.03-1.96-1.65-2.88-17.25-25.62-46.67-39.11-76.9-39.11C199 342.02 192.02 352 160 352c-31.97 0-38.95-9.98-66.79-9.98-30.23 0-59.65 13.48-76.9 39.11C6.01 396.42 0 414.84 0 434.67V472c0 22.09 17.91 40 40 40h240c22.09 0 40-17.91 40-40v-37.33c0-6.41-.84-12.6-2.04-18.67H608c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zM224 224c0 35.29-28.71 64-64 64s-64-28.71-64-64 28.71-64 64-64 64 28.71 64 64zm64 248c0 4.41-3.59 8-8 8H40c-4.41 0-8-3.59-8-8v-37.33c0-12.79 3.75-25.13 10.85-35.67 10.53-15.64 29.35-24.98 50.36-24.98 21.8 0 29.99 9.98 66.79 9.98 36.79 0 45.01-9.98 66.79-9.98 21 0 39.83 9.34 50.36 24.98 7.1 10.54 10.85 22.88 10.85 35.67V472zm50.62-319.31c-9.38-9.38-24.56-9.38-33.94 0l-25.49 25.49c4.56 11.72 7.3 24.17 8.21 37.04l34.25-34.25L384.69 244c4.69 4.69 10.81 7.02 16.97 7.02s12.28-2.33 16.97-7.02l58.97-58.97 33.24 33.24c3.96 3.96 8.82 5.73 13.6 5.73 9.99 0 19.57-7.76 19.57-19.47v-95.58c0-7.15-5.8-12.95-12.95-12.95h-95.58c-17.31 0-25.98 20.93-13.74 33.17l33.24 33.24-53.31 53.31-63.05-63.03zM512 128v46.18L465.82 128H512z"
    //                 ></path></svg
    //               ><a
    //                 className="block text-inverted font-semibold p-3"
    //                 href="services.html"
    //                 >Services</a
    //               ></span
    //             >
    //           </li>
    //           <li className="relative">
    //             <span className="flex items-center"
    //               ><svg
    //                 aria-hidden="true"
    //                 focusable="false"
    //                 data-prefix="fal"
    //                 data-icon="book"
    //                 className="svg-inline--fa fa-book fa-w-14 fa-fw flex-0 text-xl w-10 h-6 mx-2"
    //                 role="img"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 448 512"
    //               >
    //                 <path
    //                   fill="currentColor"
    //                   d="M356 160H188c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12zm12 52v-8c0-6.6-5.4-12-12-12H188c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12zm64.7 268h3.3c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H80c-44.2 0-80-35.8-80-80V80C0 35.8 35.8 0 80 0h344c13.3 0 24 10.7 24 24v368c0 10-6.2 18.6-14.9 22.2-3.6 16.1-4.4 45.6-.4 65.8zM128 384h288V32H128v352zm-96 16c13.4-10 30-16 48-16h16V32H80c-26.5 0-48 21.5-48 48v320zm372.3 80c-3.1-20.4-2.9-45.2 0-64H80c-64 0-64 64 0 64h324.3z"
    //                 ></path></svg
    //               ><a
    //                 className="block text-inverted font-semibold p-3"
    //                 href="blog.html"
    //                 >Blog</a
    //               ></span
    //             >
    //           </li>
    //           <li className="relative">
    //             <span className="flex items-center"
    //               ><svg
    //                 aria-hidden="true"
    //                 focusable="false"
    //                 data-prefix="fal"
    //                 data-icon="paper-plane"
    //                 className="svg-inline--fa fa-paper-plane fa-w-16 fa-fw flex-0 text-xl w-10 h-6 mx-2"
    //                 role="img"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 512 512"
    //               >
    //                 <path
    //                   fill="currentColor"
    //                   d="M464 4.3L16 262.7C-7 276-4.7 309.9 19.8 320L160 378v102c0 30.2 37.8 43.3 56.7 20.3l60.7-73.8 126.4 52.2c19.1 7.9 40.7-4.2 43.8-24.7l64-417.1C515.7 10.2 487-9 464 4.3zM192 480v-88.8l54.5 22.5L192 480zm224-30.9l-206.2-85.2 199.5-235.8c4.8-5.6-2.9-13.2-8.5-8.4L145.5 337.3 32 290.5 480 32l-64 417.1z"
    //                 ></path></svg
    //               ><a
    //                 className="block text-inverted font-semibold p-3"
    //                 href="contact.html"
    //                 >Hire me today</a
    //               ></span
    //             >
    //           </li>
    //         </ul>
    //         <div className="flex mt-8">
    //             <Link href="/">
    //           <a
    //             // href="https://twitter.com/dan_spratling"
    //             className="p-1 text-inverted"
    //             target="_blank"
    //             title="Twitter"
    //             ><svg
    //               aria-hidden="true"
    //               focusable="false"
    //               data-prefix="fab"
    //               data-icon="twitter"
    //               className="svg-inline--fa fa-twitter fa-w-16 fa-fw text-2xl"
    //               role="img"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 512 512"
    //             >
    //               <path
    //                 fill="currentColor"
    //                 d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
    //               ></path></svg></a
    //           ></Link>
    //           <Link href="/"><a
    //             // href="https://www.linkedin.com/in/dan-spratling/"
    //             className="p-1 text-inverted"
    //             target="_blank"
    //             title="LinkedIn"
    //             ><svg
    //               aria-hidden="true"
    //               focusable="false"
    //               data-prefix="fab"
    //               data-icon="linkedin"
    //               className="svg-inline--fa fa-linkedin fa-w-14 fa-fw text-2xl"
    //               role="img"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 448 512"
    //             >
    //               <path
    //                 fill="currentColor"
    //                 d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
    //               ></path></svg></a
    //           ></Link>
    //           <Link href="/"><a
    //             // href="https://www.instagram.com/danspratling/"
    //             className="p-1 text-inverted"
    //             target="_blank"
    //             title="Instagram"
    //             ><svg
    //               aria-hidden="true"
    //               focusable="false"
    //               data-prefix="fab"
    //               data-icon="instagram"
    //               className="svg-inline--fa fa-instagram fa-w-14 fa-fw text-2xl"
    //               role="img"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 448 512"
    //             >
    //               <path
    //                 fill="currentColor"
    //                 d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
    //               ></path></svg></a
    //           >
    //           </Link>
    //           <Link href="">
    //           <a
    //             // href="https://dribbble.com/danspratling"
    //             className="p-1 text-inverted"
    //             target="_blank"
    //             title="Dribbble"
    //             ><svg
    //               aria-hidden="true"
    //               focusable="false"
    //               data-prefix="fab"
    //               data-icon="dribbble"
    //               className="svg-inline--fa fa-dribbble fa-w-16 fa-fw text-2xl"
    //               role="img"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 512 512"
    //             >
    //               <path
    //                 fill="currentColor"
    //                 d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"
    //               ></path></svg></a
    //           >
    //           </Link>
    //           <Link href="">
    //           <a
    //             // href="https://github.com/danspratling"
    //             className="p-1 text-inverted"
    //             target="_blank"
    //             title="Github"
    //             ><svg
    //               aria-hidden="true"
    //               focusable="false"
    //               data-prefix="fab"
    //               data-icon="github"
    //               className="svg-inline--fa fa-github fa-w-16 fa-fw text-2xl"
    //               role="img"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 496 512"
    //             >
    //               <path
    //                 fill="currentColor"
    //                 d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
    //               ></path></svg></a
    //           ></Link>
    //           <Link href=""><a
    //             // href="https://dev.to/danspratling"
    //             className="p-1 text-inverted"
    //             target="_blank"
    //             title="Dev.to"
    //             ><svg
    //               aria-hidden="true"
    //               focusable="false"
    //               data-prefix="fab"
    //               data-icon="dev"
    //               className="svg-inline--fa fa-dev fa-w-14 fa-fw text-2xl"
    //               role="img"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 448 512"
    //             >
    //               <path
    //                 fill="currentColor"
    //                 d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"
    //               ></path></svg
    //           ></a></Link>
    //         </div>
    //       </nav>
    //     </div>
    //   </div>
    );
};