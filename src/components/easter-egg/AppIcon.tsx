interface AppIconProps {
  icon: string;
  color: string;
  extraClass?: string;
  className?: string;
  style?: React.CSSProperties;
  glyphClassName?: string;
}

function TerminalGlyph({ className }: { className: string }) {
  return (
    <span className={`${className} text-white font-mono font-bold leading-none select-none`}>
      &gt;_
    </span>
  );
}

function ImageGlyph({ className }: { className: string }) {
  return (
    <svg className={`${className} text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="8.5" cy="8" r="1.5" fill="currentColor" stroke="none" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function FolderGlyph({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path fill="#1d4ed8" d="M2 6a2 2 0 012-2h5l2 2h9a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
      <path fill="#bfdbfe" d="M2 9.5h20V17a2 2 0 01-2 2H4a2 2 0 01-2-2V9.5z" />
    </svg>
  );
}

function CalendarGlyph({ className }: { className: string }) {
  const day = new Date().getDate();
  return (
    <svg className={className} viewBox="0 0 24 24">
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" fill="white" stroke="#d4d4d8" strokeWidth="1.2" />
      <rect x="3.5" y="3.5" width="17" height="6" rx="3.5" fill="#ef4444" />
      <rect x="3.5" y="7.5" width="17" height="2" fill="#ef4444" />
      <text
        x="12"
        y="17.2"
        textAnchor="middle"
        fontSize="8.5"
        fontWeight="700"
        fill="#18181b"
        fontFamily="inherit"
      >
        {day}
      </text>
    </svg>
  );
}

function AppIcon({ icon, color, extraClass, className, style, glyphClassName }: AppIconProps) {
  const tileClass = `rounded-2xl ${color} ${extraClass || ""} flex items-center justify-center overflow-hidden shadow-md`;

  return (
    <div className={`${tileClass} ${className || ""}`} style={style}>
      {icon === "terminal" && <TerminalGlyph className={glyphClassName || "w-5 h-5 text-xl"} />}
      {icon === "image" && <ImageGlyph className={glyphClassName || "w-6 h-6"} />}
      {icon === "folder" && <FolderGlyph className={glyphClassName || "w-6 h-6"} />}
      {icon === "calendar" && <CalendarGlyph className={glyphClassName || "w-6 h-6"} />}
    </div>
  );
}

export default AppIcon;