// ! ###############   Importing   ###############

// ! ###############   Code   ###############
export default function MainSection({ children, open }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={
          open
            ? "relative xl:static shadow-2xl max-height-[828px] overflow-hidden transform transition-all duration-500 rounded-md xl:rounded-none scale-90 md:scale-70 lg:scale-60 xl:scale-100 translate-x-9/12 sm:translate-x-4/12 lg:translate-x-3/12 xl:translate-x-0"
            : "relative xl:static shadow-2xl max-height-none overflow-hidden transform transition-all duration-500"
        }
      >
        <div
          className={
            open
              ? "relative bg-eugen-primary dark:bg-eugen-primary-dark w-full min-w-screen pb-20 xl:pb-0 xl:overflow-auto transition-background duration-300 overflow-hidden"
              : "relative bg-eugen-primary dark:bg-eugen-primary-dark w-full min-w-screen pb-20 xl:pb-0 xl:overflow-auto transition-background duration-300 overflow-auto"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}
