function Header() {
  return (
    <header className="z-50 md:w-4/5 w-11/12 px-5 py-4 bg-white border rounded-full border-zinc-800 flex items-center justify-between fixed top-4 right-1/2 translate-x-1/2 text-zinc-900">
      <div className="">
        <div className="rounded-full bg-gradient-to-br from-sky-300 from-10%  to-emerald-300 to-90% h-[60px] w-[60px]"></div>
      </div>

      <div className="">
        
      </div>

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
