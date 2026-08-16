import { useState, useEffect, useRef } from "react";
import { useInView } from "motion/react";
import resume from "../data/resume.json";
import CvPreview from "./CvPreview";

function Resume() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [isTouch] = useState(() => typeof window !== "undefined" && window.matchMedia("(hover: none)").matches);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const inView = useInView(cardRef, { amount: 0.5 });
  const active = isTouch && inView;

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <section id="resume" className=" w-4/5 mx-auto bg-sk flex flex-col py-40 justify-center text-zinc-900">
      <div className="w-full rounded-3xl border border-zinc-800  sm:flex  sm:justify-between  sm:items-start p-4">
        <div className="flex-1 my-auto">
          <h1 className="text-5xl font-base text-center">Resume</h1>
        </div>
        <div className="flex-1 flex sm:justify-end justify-center mt-2 sm:mt-0">
            <a
            ref={cardRef}
            href={ currentUrl.includes('dz') ? resume.cvUrlDZ : resume.cvUrl }
            className="relative w-fit bg-sky-300 p-4 rounded-3xl group cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="absolute top-4 rotate-0 bg-white aspect-[1.65/2] w-32 rounded-xl border border-zinc-200"></div>
            <div className={`group-hover:-translate-y-10 ${active ? "-translate-y-10" : ""} transition-transform duration-500 ease-in-out rotate-[5deg] overflow-clip  z-10 shadow-lg shadow-zinc-800  bg-white aspect-[1.65/2] w-32 rounded-xl border border-zinc-200`}>
              <div className="w-full h-full overflow-hidden bg-white p-1 text-[3px] leading-[1.3] text-zinc-900">
                <CvPreview />
              </div>
            </div>

            <div className=" inset-shadow-md inset-shadow-white bg-linear-to-t from-blue-300/90 to-white/90 folder w-full h-32 rounded-3xl absolute left-0 bottom-0"></div>
            </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;