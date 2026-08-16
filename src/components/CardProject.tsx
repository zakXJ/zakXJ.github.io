import { useState } from "react";
import clsx from "clsx";
import ProjectDialog from "./ProjectDialog";

interface CardProjectProps {
  img: string;
  logo: string;
  color?: string;
  width?: string;
  title: string;
  description: string;
}

function CardProject({ img, logo, color, width, title, description }: CardProjectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        className={clsx(
          "rounded-3xl p-4 border border-zinc-800 cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-300",
          color || "bg-zinc-100"
        )}
      >
        <div className="relative  overflow-clip rounded-xl border border-zinc-800">
          <span className="absolute inset-0 bg-white/70 backdrop-blur-lg mask-gradient"></span>
          <picture>
            <source srcSet={`../images/projects/${img.replace(/\.png$/i, ".webp")}`} type="image/webp" />
            <img
              src={`../images/projects/${img}`}
              className="w-fit object-cover"
              alt=""
              width={800}
              height={700}
              loading="lazy"
              decoding="async"
            />
          </picture>
          <img
            src={`../images/projects/${logo}`}
            className={clsx(
              "absolute right-1/2 translate-x-1/2 bottom-0 mb-6",
              width || "w-2/3"
            )}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <ProjectDialog
        project={isOpen ? { img, logo, color, width, title, description } : null}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

export default CardProject;