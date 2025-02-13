import CardProject from "./CardProject";

const projects = [
    { img: 'shero.png', logo: 'shero-logo.svg', color:'bg-yellow-800/20' },
    { img: 'mmik.png', logo: 'mmik-logo.svg', color:'bg-blue-600/20' },
    { img: 'Chou', logo: '', color:'' },
  ];

function Projects() {
    const listProjects = projects.map(project =>
        <CardProject img={project.img} logo={project.logo} color={project.color}/>
      );
  return (
    <section className=" w-4/5 mx-auto bg-sk flex flex-col my-20 justify-center text-zinc-900">
      <h1 className="text-5xl font-base mb-10">Projects</h1>
      <div className="flex gap-8">
       {/*  <div className="rounded-3xl w-96 bg-zinc-100 p-6 border border-zinc-800">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
                        Projects
                    </h1>
          <div className="relative overflow-clip rounded-xl border border-zinc-800">
            <img
              src="../images/projects/shero.png"
              className="blur-sm w-fit object-cover"
              alt=""
            />
            <div className="absolute h-full flex items-center justify-center top-1/2 -translate-y-1/2 bg-white/70">
              <img
                
                src="../images/projects/shero-logo.svg"
                className="w-fit scale-75"
                alt=""
              />
            </div>
          </div>

          <p className="text-xl text-zinc-800 mb-6 pt-4">
                        Here are some of the projects I have worked on. I am always looking for new and exciting projects to work on.
                    </p>
          <div className="flex flex-1 justify-center gap-4 mt-6">
            <button className="bg-white border-2 border-zinc-800 text-zinc-800 hover:bg-zinc-800 hover:text-white px-6 py-4 rounded-full font-semibold transition-colors">
              See Projects
            </button>
          </div>
        </div> */}
        {listProjects}
      </div>
    </section>
  );
}

export default Projects;
