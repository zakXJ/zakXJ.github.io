import { useState } from "react";
import { motion } from "motion/react";
import appsData from "../../data/easter-egg.json";
import AppIcon from "./AppIcon";

interface DockProps {
  openWindows: string[];
  onOpen: (id: string) => void;
}

const PADDING = 8;
const GAP = 4;
const ICON_SIZE = 48;
const MAGNIFY = 0.35;
const THRESHOLD = 92;

function Dock({ openWindows, onOpen }: DockProps) {
  const [mouseX, setMouseX] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
  };

  const scaleFor = (index: number) => {
    if (mouseX === null) return 1;
    const center = PADDING + index * (ICON_SIZE + GAP) + ICON_SIZE / 2;
    const distance = Math.abs(mouseX - center);
    if (distance > THRESHOLD) return 1;
    return 1 + MAGNIFY * (1 - distance / THRESHOLD);
  };

  return (
    <div
      className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-1 p-2 bg-white/60 backdrop-blur-xl rounded-full border border-zinc-200 shadow-lg shadow-zinc-300/40"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouseX(null)}
    >
      {appsData.apps.map((app, index) => {
        const scale = scaleFor(index);
        return (
          <motion.button
            key={app.id}
            onClick={() => onOpen(app.id)}
            whileTap={{ scale: 0.88 }}
            className="group flex flex-col items-center gap-1 p-1 px-2 rounded-full hover:bg-zinc-900/5 transition-colors"
          >
            <AppIcon
              icon={app.icon}
              color={app.color}
              extraClass={app.extraClass}
              style={{
                width: ICON_SIZE * scale,
                height: ICON_SIZE * scale,
              }}
              className="transition-all duration-150 ease-out"
            />
            <span className="text-[10px] text-zinc-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              {app.name}
            </span>
            {openWindows.includes(app.id) && (
              <div className="w-1 h-1 rounded-full bg-sky-500" />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}

export default Dock;