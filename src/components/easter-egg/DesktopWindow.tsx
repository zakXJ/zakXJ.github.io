import { useState, useRef, useEffect } from "react";

interface DesktopWindowProps {
  id: string;
  title: string;
  isActive: boolean;
  initialPosition?: { x: number; y: number };
  initialSize?: { width: number; height: number };
  onClose: () => void;
  onFocus: () => void;
  children: React.ReactNode;
}

const MENU_BAR_HEIGHT = 24;
const DOCK_HEIGHT = 104;

function DesktopWindow({
  title,
  isActive,
  initialPosition = { x: 100, y: 50 },
  initialSize = { width: 500, height: 350 },
  onClose,
  onFocus,
  children,
}: DesktopWindowProps) {
  const size = useRef(initialSize).current;
  const [position, setPosition] = useState(initialPosition);
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      const maxX = Math.max(0, window.innerWidth - size.width);
      const maxY = Math.max(
        MENU_BAR_HEIGHT,
        window.innerHeight - size.height - DOCK_HEIGHT
      );
      setPosition({
        x: Math.min(Math.max(0, e.clientX - dragOffset.current.x), maxX),
        y: Math.min(Math.max(MENU_BAR_HEIGHT, e.clientY - dragOffset.current.y), maxY),
      });
    };

    const handlePointerUp = () => {
      isDragging.current = false;
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);
    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);
    };
  }, [size]);

  const handleTitlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    onFocus();
  };

  return (
    <div
      className={`absolute rounded-xl overflow-hidden shadow-2xl transition-shadow duration-200 ${
        isActive
          ? "ring-1 ring-sky-400/60 shadow-zinc-400/40"
          : "shadow-zinc-400/20"
      }`}
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex: isActive ? 50 : 30,
      }}
      onMouseDown={onFocus}
    >
      <div
        className={`h-8 border-b flex items-center px-3 gap-2 cursor-move select-none touch-none transition-colors ${
          isActive
            ? "bg-zinc-100 border-zinc-300"
            : "bg-zinc-200/80 border-zinc-200"
        }`}
        onPointerDown={handleTitlePointerDown}
      >
        <button
          onClick={onClose}
          className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 active:scale-90 transition-transform"
        />
        <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 active:scale-90 transition-transform" />
        <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 active:scale-90 transition-transform" />
        <span
          className={`ml-2 text-xs font-medium transition-colors ${
            isActive ? "text-zinc-600" : "text-zinc-400"
          }`}
        >
          {title}
        </span>
      </div>
      <div className="h-[calc(100%-2rem)] overflow-hidden">{children}</div>
    </div>
  );
}

export default DesktopWindow;