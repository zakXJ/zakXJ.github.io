import projectsData from "../../../data/projects.json";

function GalleryApp() {
  return (
    <div className="h-full bg-zinc-100 p-4 overflow-y-auto">
      <div className="grid grid-cols-2 gap-3">
        {projectsData.projects.map((project) => (
          <div
            key={project.img}
            className={`${project.color} rounded-xl border border-zinc-300 overflow-hidden aspect-square flex items-center justify-center relative`}
          >
            <picture>
              <source srcSet={`../images/projects/${project.img.replace(/\.png$/i, ".webp")}`} type="image/webp" />
              <img
                src={`../images/projects/${project.img}`}
                alt=""
                className="w-full h-full object-cover opacity-60"
                width={800}
                height={700}
                loading="lazy"
                decoding="async"
              />
            </picture>
            <img
              src={`../images/projects/${project.logo}`}
              alt=""
              className={`absolute ${project.width || "w-1/2"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryApp;