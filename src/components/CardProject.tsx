import clsx from "clsx";

interface CardProjectProps {
  img: string;
  logo: string;
  color?: string;
  width?: string;
}

function CardProject({ img, logo, color, width }: CardProjectProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl sm:w-1/3 p-4 border border-zinc-800 dark:border-zinc-600",
        color || "bg-zinc-100 dark:bg-neutral-800"
      )}
    >
      <div className="relative  overflow-clip rounded-xl border border-zinc-800 dark:border-zinc-600">
        <span className="absolute inset-0 bg-white/70 dark:bg-neutral-800/70 backdrop-blur-lg mask-gradient"></span>
        <img
          src={`../images/projects/${img}`}
          className="w-fit object-cover"
          alt=""
        />
        <img
          src={`../images/projects/${logo}`}
          className={clsx(
            "absolute right-1/2 translate-x-1/2 bottom-0 mb-6",
            width || "w-2/3"
          )}
          alt=""
        />
        
      </div>
      {/* <div className="flex flex-1 justify-center gap-4 mt-6">
        <button className="bg-white dark:bg-neutral-700 border border-zinc-800 dark:border-zinc-600 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-600 hover:text-white dark:hover:text-white px-6 py-4 rounded-full font-semibold transition-colors">
          See Projects
        </button>
      </div> */}
    </div>
  );
}

export default CardProject;
