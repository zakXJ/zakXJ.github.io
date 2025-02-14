import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="z-50 md:w-4/5 w-11/12 px-5 py-4 bg-white border rounded-full border-zinc-800 flex items-center justify-between fixed top-4 right-1/2 translate-x-1/2 text-zinc-900">
      
      {/* Animated Dropdown Menu */}
      <div className={clsx(
        "z-10 top-[93.6px] right-0 mx-auto absolute flex justify-center w-full transition-transform duration-500 ease-in-out origin-top",
        isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
      )}>
        <nav className="-mt-4 py-6 flex rounded-b-3xl flex-col gap-6 items-center w-[calc(100%-24px)] bg-white border-b border-x border-zinc-800">
          <a
            href="#"
            className="relative p-2 text-black text-xl overflow-hidden group"
          >
            <span className="absolute inset-0 bg-sky-200 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10">Projects</span>
          </a>

          <a
            href="#"
            className="relative p-2 text-black text-xl overflow-hidden group"
          >
            <span className="absolute inset-0 bg-sky-200 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10">Skills</span>
          </a>

          <a
            href="#"
            className="relative p-2 text-black text-xl overflow-hidden group"
          >
            <span className="absolute inset-0 bg-sky-200 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10">Resume</span>
          </a>
        </nav>

        </div>
      {/* <div className="z-40 bg-zinc-500/70 flex items-center w-full h-screen top-0 right-0 absolute">

        <div className="bg-white w-full py-4 border border-zinc-800">
        <nav className="flex flex-col gap-6 items-center">
          <a
            href="#"
            className="relative p-2 text-black text-xl overflow-hidden group"
          >
            <span className="absolute inset-0 bg-sky-200 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10">Projects</span>
          </a>

          <a
            href="#"
            className="relative p-2 text-black text-xl overflow-hidden group"
          >
            <span className="absolute inset-0 bg-sky-200 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10">Skills</span>
          </a>

          <a
            href="#"
            className="relative p-2 text-black text-xl overflow-hidden group"
          >
            <span className="absolute inset-0 bg-sky-200 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10">Resume</span>
          </a>
        </nav>

        </div>

      </div> */}
      
      
      <div className="">
        <div className="rounded-full bg-gradient-to-br from-sky-300 from-10%  to-emerald-300 to-90% h-[60px] w-[60px]"></div>
      </div>

      <button className="mr-4 sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        { isOpen ? <X size={32} /> : <Menu size={32} /> }
      </button>


      <div className="hidden sm:block">
        <nav className="flex gap-6 items-center">
          <a
            href="#"
            className="relative p-2 text-black text-xl overflow-hidden group"
          >
            <span className="absolute inset-0 bg-sky-200 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10">Projects</span>
          </a>

          <a
            href="#"
            className="relative p-2 text-black text-xl overflow-hidden group"
          >
            <span className="absolute inset-0 bg-sky-200 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10">Skills</span>
          </a>

          <a
            href="#"
            className="relative p-2 text-black text-xl overflow-hidden group mr-4"
          >
            <span className="absolute inset-0 bg-sky-200 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10">Resume</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
