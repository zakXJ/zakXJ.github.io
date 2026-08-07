import { useState, useEffect, useRef } from "react";
import hero from "../../../data/hero.json";

function TerminalApp() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];

    if (currentChar === 0 && line === "") {
      setDisplayedLines((prev) => [...prev, ""]);
      setCurrentLine((prev) => prev + 1);
      return;
    }

    if (currentChar >= line.length) {
      setDisplayedLines((prev) => [...prev, line]);
      setCurrentLine((prev) => prev + 1);
      setCurrentChar(0);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentChar((prev) => prev + 1);
    }, line === "" ? 100 : 20 + Math.random() * 30);

    return () => clearTimeout(timeout);
  }, [currentLine, currentChar]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedLines]);

  const lines = [
    `Last login: ${new Date().toLocaleDateString()} on ttys000`,
    "",
    "$ cat about.txt",
    `Hi, I'm ${hero.name}`,
    hero.description,
    "",
    "$ ls skills/",
    "Web  Deployment  Mobile  HealthTech",
    "",
    "$ echo $STATUS",
    "Building amazing things...",
    "",
    "_",
  ];

  const isComplete = currentLine >= lines.length;

  return (
    <div ref={terminalRef} className="h-full bg-zinc-900 text-green-400 font-mono text-sm p-4 overflow-y-auto">
      {displayedLines.map((line, i) => (
        <div key={i} className="leading-6">
          {line}
        </div>
      ))}
      {!isComplete && (
        <div className="leading-6">
          {lines[currentLine]?.slice(0, currentChar)}
          <span className="animate-pulse">█</span>
        </div>
      )}
      {isComplete && (
        <div className="leading-6">
          $ <span className="animate-pulse">█</span>
        </div>
      )}
    </div>
  );
}

export default TerminalApp;
