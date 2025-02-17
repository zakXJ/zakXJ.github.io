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
        "rounded-3xl sm:w-1/3 p-4 border border-zinc-800",
        color || "bg-zinc-100"
      )}
    >
      <div className="relative  overflow-clip rounded-xl border border-zinc-800">
        <span className="absolute inset-0 bg-white/70 backdrop-blur-lg mask-gradient"></span>
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
        <button className="bg-white border border-zinc-800 text-zinc-800 hover:bg-zinc-800 hover:text-white px-6 py-4 rounded-full font-semibold transition-colors">
          See Projects
        </button>
      </div> */}
    </div>
  );
}

export default CardProject;
