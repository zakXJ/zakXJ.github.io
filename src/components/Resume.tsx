import { useState, useEffect } from "react";

function Resume() {
  const [currentUrl, setCurrentUrl] = useState('');
  
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <section id="resume" className=" w-4/5 mx-auto bg-sk flex flex-col py-40 justify-center text-zinc-900 dark:text-zinc-100">
      <div className="w-full rounded-3xl border border-zinc-800 dark:border-zinc-600  sm:flex  sm:justify-between  sm:items-start p-4">
        <div className="flex-1 my-auto">
          <h1 className="text-5xl font-base text-center">Resume</h1>
        </div>
        <div className="flex-1 flex sm:justify-end justify-center mt-2 sm:mt-0">
            <a
            href={ currentUrl.includes('dz') ? "https://drive.google.com/file/d/1XQBBAhwHzR7sMBbgebxhIoR-SpcobOGM/view?usp=sharing" : "https://drive.google.com/file/d/1UA0tjdh4eRdTBJKmObySYtCoyIOMND07/view?usp=sharing"}
            className="relative w-fit bg-sky-300 dark:bg-sky-700 p-4 rounded-3xl group cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="absolute top-4 rotate-0 bg-white dark:bg-neutral-800 aspect-[1.65/2] w-32 rounded-xl border border-zinc-200 dark:border-zinc-700"></div>
            <div className="group-hover:-translate-y-10 transition-transform duration-500 ease-in-out rotate-[5deg] overflow-clip  z-10 shadow-lg shadow-zinc-800 dark:shadow-neutral-900 bg-white dark:bg-neutral-800 aspect-[1.65/2] w-32 rounded-xl border border-zinc-200 dark:border-zinc-700">
              <img src={ currentUrl.includes('dz') ? `../cv2025DZ.png` : `../cv20252.png` } className="w-fit" alt="" />
            </div>

            {/* Assuming inset-shadow-md is defined in global.css and is dark-mode aware or suitable for both. 
                inset-shadow-white is problematic; will be overridden by dark mode bg if not handled in CSS.
                The gradient needs dark mode versions. */}
            <div className=" inset-shadow-md dark:inset-shadow-md-dark bg-linear-to-t from-blue-300/90 to-white/90 dark:from-blue-700/90 dark:to-neutral-800/90 folder w-full h-32 rounded-3xl absolute left-0 bottom-0"></div>
            </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
