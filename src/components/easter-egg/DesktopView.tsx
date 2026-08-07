import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import appsData from "../../data/easter-egg.json";
import DesktopWindow from "./DesktopWindow";
import Dock from "./Dock";
import AppIcon from "./AppIcon";
import { useClock } from "../../hooks/useClock";
import TerminalApp from "./apps/TerminalApp";
import GalleryApp from "./apps/GalleryApp";
import FinderApp from "./apps/FinderApp";
import CalendarApp from "./apps/CalendarApp";

interface AppConfig {
  id: string;
  name: string;
  icon: string;
  color: string;
  extraClass?: string;
}

interface DesktopViewProps {
  onClose: () => void;
}

const WINDOW_POSITIONS: Record<string, { x: number; y: number }> = {
  terminal: { x: 80, y: 40 },
  gallery: { x: 180, y: 80 },
  finder: { x: 280, y: 60 },
  calendar: { x: 120, y: 120 },
};

const MENU_ITEMS = ["File", "Edit", "View", "Window", "Help"];

function DesktopView({ onClose }: DesktopViewProps) {
  const [apps] = useState<AppConfig[]>(appsData.apps);
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const time = useClock();

  const openApp = useCallback(
    (id: string) => {
      if (!openWindows.includes(id)) {
        setOpenWindows((prev) => [...prev, id]);
      }
      setActiveWindow(id);
    },
    [openWindows]
  );

  const closeApp = useCallback((id: string) => {
    setOpenWindows((prev) => prev.filter((w) => w !== id));
    setActiveWindow(null);
  }, []);

  const renderAppContent = (id: string) => {
    switch (id) {
      case "terminal":
        return <TerminalApp />;
      case "gallery":
        return <GalleryApp />;
      case "finder":
        return <FinderApp />;
      case "calendar":
        return <CalendarApp />;
      default:
        return null;
    }
  };

  const desktopIcons = [
    { id: "terminal", label: "About" },
    { id: "gallery", label: "Projects" },
  ];

  return (
    <div className="h-full w-full relative select-none overflow-hidden bg-white">
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "url('/grid.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "800px",
        }}
      />
      <div className="absolute inset-0 bg-radial from-transparent from-10% to-white pointer-events-none" />

      <div className="h-6 bg-white/50 backdrop-blur-xl border-b border-zinc-200 flex items-center px-4 text-zinc-900 text-xs gap-1 relative z-40">
        <span className="font-bold mr-3">Zak</span>
        {MENU_ITEMS.map((item) => (
          <span
            key={item}
            className="opacity-60 hover:opacity-100 hover:bg-zinc-900/5 px-2 py-0.5 rounded transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
        <div className="ml-auto flex items-center gap-3">
          <span className="opacity-70 tabular-nums">{time}</span>
          <button
            onClick={onClose}
            title="Leave desktop"
            className="p-1 rounded hover:bg-zinc-900/10 transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      <div className="absolute left-6 top-16 flex flex-col gap-6 z-20">
        {desktopIcons.map((icon) => {
          const config = apps.find((a) => a.id === icon.id);
          if (!config) return null;
          return (
            <button
              key={icon.id}
              onClick={() => openApp(icon.id)}
              className="group flex flex-col items-center gap-1.5 w-20"
            >
              <AppIcon
                icon={config.icon}
                color={config.color}
                extraClass={config.extraClass}
                className="w-14 h-14 transition-transform duration-200 group-hover:scale-110 group-active:scale-95"
                glyphClassName="w-7 h-7"
              />
              <span className="text-[11px] text-zinc-800 px-1.5 py-0.5 rounded group-hover:bg-zinc-900/10 transition-colors">
                {icon.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="absolute inset-0 top-6 bottom-20">
        <AnimatePresence>
          {openWindows.map((id) => {
            const config = apps.find((a) => a.id === id);
            if (!config) return null;
            return (
              <motion.div
                key={id}
                className="absolute top-6 left-0"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", duration: 0.35, bounce: 0.25 }}
                style={{ transformOrigin: "center bottom" }}
              >
                <DesktopWindow
                  id={id}
                  title={config.name}
                  isActive={activeWindow === id}
                  initialPosition={WINDOW_POSITIONS[id] || { x: 100, y: 50 }}
                  onClose={() => closeApp(id)}
                  onFocus={() => setActiveWindow(id)}
                >
                  {renderAppContent(id)}
                </DesktopWindow>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <Dock openWindows={openWindows} onOpen={openApp} />
    </div>
  );
}

export default DesktopView;