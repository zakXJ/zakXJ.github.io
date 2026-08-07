import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

interface EasterEggProps {
  isActive: boolean;
  onClose: () => void;
}

function EasterEgg({ isActive, onClose }: EasterEggProps) {
  useEffect(() => {
    if (!isActive) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isActive, onClose]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <div className="hidden md:block h-full w-full">
            <DesktopView onClose={onClose} />
          </div>
          <div className="md:hidden h-full w-full">
            <MobileView onClose={onClose} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default EasterEgg;