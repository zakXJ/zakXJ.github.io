import CardProject from "./CardProject";

const projects = [
    { img: 'shero.png', logo: 'shero-logo.svg', color:'bg-yellow-100' },
    { img: 'mmik.png', logo: 'mmik-logo.svg', color:'bg-sky-200', rotation: -1.2 },
    { img: 'binary01.png', logo: 'binary01-logo.svg', color:'bg-purple-200', width: 'w-1/3', rotation: 1.2 },
  ];

function Projects() {
    const listProjects = projects.map(project =>
        <CardProject img={project.img} logo={project.logo} color={project.color} width={project.width} rotation={project.rotation}/>
      );
  return (
    <section id="projects" className=" w-4/5 mx-auto flex flex-col py-36 justify-center text-zinc-900">
      <h1 className="text-5xl font-base mb-10">Projects</h1>
      <div className="sm:flex sm:gap-8 space-y-8 sm:space-y-0">
        {listProjects}
      </div>
    </section>
  );
}

export default Projects;
