import clsx from "clsx";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [themeInitialized, setThemeInitialized] = useState(false);

  // Effect to initialize dark mode from localStorage or system preference
  useEffect(() => {
    const isStoredDark = localStorage.getItem("theme") === "dark";
    const isSystemDark = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches : false;

    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
    } else if (localStorage.getItem("theme") === "light") {
      setDarkMode(false);
    } else {
      setDarkMode(isSystemDark);
    }
    setThemeInitialized(true);
  }, []);

  // Effect to apply dark mode class and update localStorage
  useEffect(() => {
    if (!themeInitialized) return; // Wait for initialization

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode, themeInitialized]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="z-50 md:w-4/5 w-11/12 px-5 py-4 bg-white dark:bg-neutral-800 border rounded-full border-zinc-800 dark:border-zinc-600 flex items-center justify-between fixed top-4 right-1/2 translate-x-1/2 text-zinc-900 dark:text-zinc-100">
      
      {/* Logo Div */}
      <div className="">
        {/* The gradient itself doesn't need dark mode unless the colors are meant to change. Assuming sky-300 and emerald-300 are acceptable on dark backgrounds. */}
        <div className="rounded-full bg-gradient-to-br from-sky-300 from-10%  to-emerald-300 to-90% h-[60px] w-[60px]"></div>
      </div>

      {/* Animated Dropdown Menu & Mobile Controls Container */}
      <div className={clsx(
        "z-10 top-[93.6px] right-0 mx-auto absolute flex justify-center w-full transition-transform duration-500 ease-in-out origin-top",
        isOpen ? "scale-y-100 opacity-100" : "scale-y-1 opacity-0"
      )}>
        <nav className="-mt-4 py-6 flex rounded-b-3xl flex-col gap-6 items-center w-[calc(100%-24px)] bg-white dark:bg-neutral-800 border-b border-x border-zinc-800 dark:border-zinc-600">
          <a
            href="#projects"
            className="relative p-2 text-black dark:text-white text-xl overflow-hidden group"
          >
            <span className="absolute inset-0 bg-sky-200 dark:bg-sky-700 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10">Projects</span>
          </a>

          <a
            href="#skills"
            className="relative p-2 text-black dark:text-white text-xl overflow-hidden group"
          >
            <span className="absolute inset-0 bg-sky-200 dark:bg-sky-700 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10">Skills</span>
          </a>

          <a
            href="#resume"
            className="relative p-2 text-black dark:text-white text-xl overflow-hidden group"
          >
            <span className="absolute inset-0 bg-sky-200 dark:bg-sky-700 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10">Resume</span>
          </a>
        </nav>

        </div>
      {/* <div className="z-40 bg-zinc-500/70 flex items-center w-full h-screen top-0 right-0 absolute">

        <div className="bg-white dark:bg-neutral-800 w-full py-4 border border-zinc-800 dark:border-zinc-600">
        <nav className="flex flex-col gap-6 items-center">
          <a
            href="#"
            className="relative p-2 text-black dark:text-white text-xl overflow-hidden group"
          >
            <span className="absolute inset-0 bg-sky-200 dark:bg-sky-700 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10">Projects</span>
          </a>

          <a
            href="#"
            className="relative p-2 text-black dark:text-white text-xl overflow-hidden group"
          >
            <span className="absolute inset-0 bg-sky-200 dark:bg-sky-700 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10">Skills</span>
          </a>

          <a
            href="#"
            className="relative p-2 text-black dark:text-white text-xl overflow-hidden group"
          >
            <span className="absolute inset-0 bg-sky-200 dark:bg-sky-700 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10">Resume</span>
          </a>
        </nav>

        </div>

      </div> */}
      
      
      <div className={clsx(
        "z-10 top-[93.6px] right-0 mx-auto absolute flex justify-center w-full transition-transform duration-500 ease-in-out origin-top sm:hidden", // Hide dropdown on sm screens
        isOpen ? "scale-y-100 opacity-100" : "scale-y-1 opacity-0"
      )}>
        <nav className="-mt-4 py-6 flex rounded-b-3xl flex-col gap-6 items-center w-[calc(100%-24px)] bg-white dark:bg-neutral-800 border-b border-x border-zinc-800 dark:border-zinc-600">
          <a
            href="#projects"
            className="relative p-2 text-black dark:text-white text-xl overflow-hidden group"
            onClick={() => setIsOpen(false)}
          >
            <span className="absolute inset-0 bg-sky-200 dark:bg-sky-700 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10">Projects</span>
          </a>

          <a
            href="#skills"
            className="relative p-2 text-black dark:text-white text-xl overflow-hidden group"
            onClick={() => setIsOpen(false)}
          >
            <span className="absolute inset-0 bg-sky-200 dark:bg-sky-700 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10">Skills</span>
          </a>

          <a
            href="#resume"
            className="relative p-2 text-black dark:text-white text-xl overflow-hidden group"
            onClick={() => setIsOpen(false)}
          >
            <span className="absolute inset-0 bg-sky-200 dark:bg-sky-700 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10">Resume</span>
          </a>
        </nav>
      </div>
      
      {/* Right side controls: Desktop Nav, Theme Toggle, Mobile Menu Button */}
      <div className="flex items-center gap-4">
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-2">
          <nav className="flex gap-3 items-center">
            <a
              href="#projects"
              className="relative p-2 text-black dark:text-white text-lg overflow-hidden group"
            >
              <span className="absolute inset-0 bg-sky-200 dark:bg-sky-700 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
              <span className="relative z-10">Projects</span>
            </a>

            <a
              href="#skills"
              className="relative p-2 text-black dark:text-white text-lg overflow-hidden group"
            >
              <span className="absolute inset-0 bg-sky-200 dark:bg-sky-700 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
              <span className="relative z-10">Skills</span>
            </a>

            <a
              href="#resume"
              className="relative p-2 text-black dark:text-white text-lg overflow-hidden group"
            >
              <span className="absolute inset-0 bg-sky-200 dark:bg-sky-700 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
              <span className="relative z-10">Resume</span>
            </a>
          </nav>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        {/* Mobile Menu Button */}
        <button className="sm:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {/* Icon color will inherit from parent's text color: text-zinc-900 dark:text-zinc-100 */}
          { isOpen ? <X size={28} /> : <Menu size={28} /> }
        </button>
      </div>
    </header>
  );
}

export default Header;
