import { useState } from "react";
import skills from "../../../data/skills.json";

function FinderApp() {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  const categories = skills.categories;
  const selectedCategory = categories.find((c) => c.title === selectedFolder);

  return (
    <div className="h-full flex bg-white">
      <div className="w-1/3 bg-zinc-100 border-r border-zinc-200 p-2 overflow-y-auto">
        <div className="text-xs text-zinc-500 uppercase font-semibold px-2 py-1">Categories</div>
        {categories.map((category) => (
          <button
            key={category.title}
            onClick={() => setSelectedFolder(category.title)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors ${
              selectedFolder === category.title
                ? "bg-blue-500 text-white"
                : "hover:bg-zinc-200 text-zinc-700"
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
            </svg>
            {category.title}
          </button>
        ))}
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {selectedCategory ? (
          <div className="grid grid-cols-3 gap-4">
            {selectedCategory.logos.map((logo) => (
              <div
                key={logo.src}
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-zinc-50 transition-colors"
              >
                <img
                  src={`../logo/${logo.src}`}
                  alt={logo.src}
                  className="w-12 h-12 object-contain"
                />
                <span className="text-xs text-zinc-600 text-center truncate w-full">
                  {logo.src.replace(/\.(svg|png)$/i, "")}
                </span>
              </div>
            ))}
            {selectedCategory.extra && (
              <div className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-zinc-50 transition-colors">
                <div className="w-12 h-12 flex items-center justify-center bg-zinc-100 rounded-lg text-lg font-bold text-zinc-600">
                  {selectedCategory.extra.text}
                </div>
                <span className="text-xs text-zinc-600 text-center">
                  {selectedCategory.extra.text}
                </span>
              </div>
            )}
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-zinc-400 text-sm">
            Select a category
          </div>
        )}
      </div>
    </div>
  );
}

export default FinderApp;