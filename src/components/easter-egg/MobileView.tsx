import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import appsData from "../../data/easter-egg.json";
import StatusBar from "./StatusBar";
import AppIcon from "./AppIcon";
import TerminalApp from "./apps/TerminalApp";
import GalleryApp from "./apps/GalleryApp";
import FinderApp from "./apps/FinderApp";
import CalendarApp from "./apps/CalendarApp";

interface MobileViewProps {
  onClose: () => void;
}

function MobileView({ onClose }: MobileViewProps) {
  const [activeApp, setActiveApp] = useState<string | null>(null);

  const apps = appsData.apps;
  const appConfig = apps.find((a) => a.id === activeApp);

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

  if (activeApp && appConfig) {
    return (
      <div className="h-full w-full flex flex-col bg-zinc-50">
        <StatusBar />
        <div className="h-12 bg-white/90 backdrop-blur-xl flex items-center px-4 gap-3 border-b border-zinc-200">
          <button
            onClick={() => setActiveApp(null)}
            className="text-sky-600 text-sm flex items-center gap-1 active:scale-95 transition-transform"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <span className="text-zinc-900 text-sm font-medium">{appConfig.name}</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeApp}
              className="h-full"
              initial={{ y: 48, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -48, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {renderAppContent(activeApp)}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="h-20 bg-white/90 backdrop-blur-xl flex items-center justify-center border-t border-zinc-200">
          <button
            onClick={onClose}
            className="w-14 h-14 rounded-full bg-zinc-200 flex items-center justify-center active:scale-95 transition-transform"
          >
            <div className="w-5 h-5 border-2 border-zinc-400 rounded-md" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full relative flex flex-col bg-white">
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "url('/grid.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "800px",
        }}
      />
      <div className="absolute inset-0 bg-radial from-transparent from-10% to-white pointer-events-none" />
      <StatusBar />
      <div className="relative z-10 flex-1 p-6">
        <div className="grid grid-cols-4 gap-5">
          {apps.map((app) => (
            <motion.button
              key={app.id}
              onClick={() => setActiveApp(app.id)}
              whileTap={{ scale: 0.92 }}
              className="flex flex-col items-center gap-1.5"
            >
              <AppIcon
                icon={app.icon}
                color={app.color}
                extraClass={app.extraClass}
                className="w-14 h-14 shadow-lg"
                glyphClassName="w-7 h-7"
              />
              <span className="text-[11px] text-zinc-800">{app.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
      <div className="relative z-10 h-20 bg-white/90 backdrop-blur-xl flex items-center justify-center border-t border-zinc-200">
        <button
          onClick={onClose}
          className="w-14 h-14 rounded-full bg-zinc-200 flex items-center justify-center active:scale-95 transition-transform"
        >
          <div className="w-5 h-5 border-2 border-zinc-400 rounded-md" />
        </button>
      </div>
    </div>
  );
}

export default MobileView;