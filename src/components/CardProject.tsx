import clsx from "clsx";

interface CardProjectProps {
    img: string;
    logo: string;
    color?: string;
};

function CardProject({img, logo, color}: CardProjectProps) {
    return (
    <div className={clsx("rounded-3xl w-1/3  p-4 border border-zinc-800", color || "bg-zinc-100")}>
          {/* <h1 className="text-5xl font-bold mb-6 animate-fade-in">
                        Projects
                    </h1> */}
          <div className="relative overflow-clip rounded-xl border border-zinc-800">
            <img
              src={`../images/projects/${img}`}
              className="blur-sm w-fit object-cover"
              alt=""
            />
            <div className="absolute h-full flex items-center justify-center top-1/2 -translate-y-1/2 bg-white/70">
              <img
                
                src={`../images/projects/${logo}`}
                className="w-fit scale-75"
                alt=""
              />
            </div>
          </div>

          {/* <p className="text-xl text-zinc-800 mb-6 pt-4">
                        Here are some of the projects I have worked on. I am always looking for new and exciting projects to work on.
                    </p> */}
          <div className="flex flex-1 justify-center gap-4 mt-6">
            <button className="bg-white border border-zinc-800 text-zinc-800 hover:bg-zinc-800 hover:text-white px-6 py-4 rounded-full font-semibold transition-colors">
              See Projects
            </button>
          </div>
        </div>);
}

export default CardProject;