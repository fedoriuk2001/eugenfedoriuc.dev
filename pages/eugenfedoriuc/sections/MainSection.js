// ! ###############   Importing   ###############

// ! ###############   Code   ###############
export default function MainSection({ children }) {
  return (
    <div className="relative w-full overflow-hidden bg-eugen-primary z-100 dark:bg-eugen-primary-dark">
      <div className="relative max-height-none shadow-2xl overflow-hidden transform transition-all duration-500 xl:static">
        <div className="relative bg-neutral w-full min-w-screen pb-20 transition-background duration-300 overflow-auto xl:pb-0 xl:overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
