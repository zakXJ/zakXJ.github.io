import resume from "../../../data/resume.json";

function CalendarApp() {
  const today = new Date();
  const currentMonth = today.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="p-4 border-b border-zinc-200">
        <h2 className="text-lg font-semibold text-zinc-800">{currentMonth}</h2>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="grid grid-cols-7 text-center text-xs text-zinc-500 py-2 border-b border-zinc-100">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 flex-1 gap-px p-2">
          {blanks.map((_, i) => (
            <div key={`blank-${i}`} />
          ))}
          {days.map((day) => (
            <div
              key={day}
              className={`flex items-center justify-center text-sm rounded-lg hover:bg-zinc-100 cursor-pointer ${
                day === today.getDate()
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "text-zinc-700"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-zinc-200 p-4">
        <div className="text-sm font-semibold text-zinc-800 mb-2">Resume</div>
        <div className="flex items-center gap-3">
          <div className="w-16 h-20 rounded-lg border border-zinc-300 overflow-hidden bg-zinc-50">
            <img src={resume.cvImage} alt="CV" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="text-xs text-zinc-500">PDF Document</div>
            <div className="text-sm font-medium text-zinc-700">CV_2025.pdf</div>
          </div>
          <a
            href={resume.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 transition-colors"
          >
            Open
          </a>
        </div>
      </div>
    </div>
  );
}

export default CalendarApp;
