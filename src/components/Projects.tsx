import CardProject from "./CardProject";

const projects = [
    { img: 'shero.png', logo: 'shero-logo.svg', color:'bg-yellow-800/20' },
    { img: 'mmik.png', logo: 'mmik-logo.svg', color:'bg-sky-600/20' },
    { img: 'Chou', logo: '', color:'' },
  ];

function Projects() {
    const listProjects = projects.map(project =>
        <CardProject img={project.img} logo={project.logo} color={project.color}/>
      );
  return (
    <section id="projects" className=" w-4/5 mx-auto flex flex-col py-36 justify-center text-zinc-900">
      <h1 className="text-5xl font-base mb-10">Projects</h1>
      <div className="sm:flex sm:gap-8 space-y-8 sm:space-y-0">
        {/* <div className="rounded-3xl w-96 bg-zinc-100 p-4 border border-zinc-800">
          <div className="relative overflow-clip rounded-xl border border-zinc-800">
          <span className="absolute inset-0 bg-white/70 backdrop-blur-lg mask-gradient"></span>
            <img
              src="../images/projects/shero.png"
              className="w-fit object-cover"
              alt=""
            />
            <img
                
                src="../images/projects/shero-logo.svg"
                className="absolute w-fit scale-75 bottom-0"
                alt=""
              />
          </div>
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
