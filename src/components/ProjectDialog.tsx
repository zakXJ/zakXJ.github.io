import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import clsx from "clsx";

interface Project {
  img: string;
  logo: string;
  color?: string;
  width?: string;
  title: string;
  description: string;
}

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}

function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative p-3 rounded-3xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.3, bounce: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 rounded-3xl bg-white pointer-events-none" />
            <div
              className={clsx(
                "absolute inset-0 rounded-3xl pointer-events-none",
                project.color || "bg-zinc-100"
              )}
            />
            <div className="relative w-full max-w-2xl rounded-[1rem] border border-zinc-800 overflow-hidden flex flex-col sm:block max-h-[calc(100dvh-2rem)] sm:max-h-none shadow-2xl">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-white/80 backdrop-blur-sm hover:bg-zinc-100 transition-colors text-zinc-500"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              <div className="relative h-44 shrink-0 w-full sm:absolute sm:inset-0 sm:h-full">
                <span className="absolute inset-0 bg-white/70 backdrop-blur-lg mask-gradient"></span>
                <picture>
                  <source srcSet={`../images/projects/${project.img.replace(/\.png$/i, ".webp")}`} type="image/webp" />
                  <img
                    src={`../images/projects/${project.img}`}
                    className="h-full w-full object-cover object-left"
                    alt=""
                    width={800}
                    height={700}
                    decoding="async"
                  />
                </picture>
                <img
                  src={`../images/projects/${project.logo}`}
                  className={clsx(
                    "absolute left-8 bottom-8",
                    "w-32"
                  )}
                  alt=""
                />
              </div>
              <div className="relative bg-white rounded-2xl p-6 -mt-4 sm:m-0 shadow-2xl flex-1 min-h-0 overflow-y-auto sm:ml-auto sm:w-2/3 sm:flex-none sm:overflow-visible">
                <h2 className="text-2xl font-bold text-zinc-900 mb-3 pr-8">{project.title}</h2>
                <p className="text-zinc-600 leading-relaxed">{project.description}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectDialog;