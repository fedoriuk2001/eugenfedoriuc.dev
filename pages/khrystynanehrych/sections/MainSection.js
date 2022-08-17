// ! ###############   Importing   ###############

// ! ###############   Code   ###############
export default function MainSection({ children, open }) {
  return (
    <div className="overflow-hidden z-0">
      <div
        className={
          open
            ? "relative xl:static shadow-2xl height-[828px] overflow-hidden transform transition-all duration-500 z-0 rounded-md xl:rounded-none scale-95 translate-x-[50%] xs:translate-x-[75%] sm:translate-x-[50%] md:translate-x-[50%] lg:translate-x-[25%]"
            : "relative xl:static shadow-2xl max-height-none overflow-hidden transform transition-all duration-500"
        }
      >
        <div className="overflow-hidden z-0 relative bg-kris-primary dark:bg-kris-primary-dark w-full min-w-screen pb-20 xl:pb-0 xl:overflow-auto transition-background duration-300 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
