import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import nav from "../data/nav.json";
import { useEasterEgg } from "./AppContainer";

const CIRCUMFERENCE = 2 * Math.PI * 30;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickCountVisible, setClickCountVisible] = useState(0);
  const { open: openEasterEgg } = useEasterEgg();
  const clickCount = useRef(0);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (clickTimer.current) {
        clearTimeout(clickTimer.current);
      }
    };
  }, []);

  const handleLogoClick = () => {
    clickCount.current += 1;
    setClickCountVisible(clickCount.current);

    if (clickTimer.current) {
      clearTimeout(clickTimer.current);
    }

    clickTimer.current = setTimeout(() => {
      clickCount.current = 0;
      setClickCountVisible(0);
    }, 2000);

    if (clickCount.current >= 5) {
      clickCount.current = 0;
      setClickCountVisible(0);
      openEasterEgg();
    }
  };

  return (
    <header className="z-50 md:w-4/5 w-11/12 px-5 py-4 bg-white border rounded-full border-zinc-800 flex items-center justify-between fixed top-4 right-1/2 translate-x-1/2 text-zinc-900">

      {/* Animated Dropdown Menu */}
      <div className={clsx(
        "z-10 top-[93.6px] right-0 mx-auto absolute flex justify-center w-full transition-all duration-500 ease-in-out origin-top",
        isOpen ? "scale-y-100 opacity-100 pointer-events-auto" : "scale-y-0 opacity-0 pointer-events-none"
      )}>
        <nav className="-mt-4 py-6 flex rounded-b-3xl flex-col gap-6 items-center w-[calc(100%-24px)] bg-white border-b border-x border-zinc-800">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="relative p-2 text-black text-xl overflow-hidden group"
            >
              <span className="absolute inset-0 bg-sky-200 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </nav>

        </div>

      <div className="relative cursor-pointer" onClick={handleLogoClick}>
        {clickCountVisible > 0 && (
          <svg className="absolute inset-0 w-[68px] h-[68px] -rotate-90 pointer-events-none" viewBox="0 0 68 68">
            <circle
              cx="34" cy="34" r="30"
              fill="none"
              stroke="rgba(14,165,233,0.2)"
              strokeWidth="4"
            />
            <circle
              cx="34" cy="34" r="30"
              fill="none"
              stroke="rgb(14,165,233)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={CIRCUMFERENCE * (1 - clickCountVisible / 5)}
              className="transition-all duration-300 ease-out"
            />
          </svg>
        )}
        <div className="rounded-full bg-gradient-to-br from-sky-300 from-10% to-emerald-300 to-90% h-[60px] w-[60px] m-[4px]"></div>
      </div>

      <button className="mr-4 sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        { isOpen ? <X size={32} /> : <Menu size={32} /> }
      </button>


      <div className="hidden sm:block">
        <nav className="flex gap-6 items-center">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative p-2 text-black text-xl overflow-hidden group"
            >
              <span className="absolute inset-0 bg-sky-200 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
