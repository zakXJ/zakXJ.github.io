import { useClock } from "../../hooks/useClock";

function StatusBar() {
  const time = useClock();

  return (
    <div className="relative z-10 h-11 bg-white/80 backdrop-blur-xl border-b border-zinc-200 flex items-center justify-between px-6 text-zinc-900 text-xs font-medium">
      <span>{time}</span>
      <div className="flex items-center gap-1.5">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3C7.46 3 3.34 4.78.29 7.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l11 11c.39.39 1.02.39 1.41 0l11-11c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71C20.66 4.78 16.54 3 12 3z" />
        </svg>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 22h20V2z" opacity=".3" />
          <path d="M2 22h20V2L2 22zm18-2H6.83L20 6.83V20z" />
        </svg>
        <div className="flex items-center gap-0.5 ml-1">
          <div className="w-6 h-3 border border-zinc-400 rounded-sm relative">
            <div className="absolute inset-0.5 bg-green-500 rounded-[1px]" style={{ width: "70%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusBar;