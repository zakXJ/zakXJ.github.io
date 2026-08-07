import CardProject from "./CardProject";
import projects from "../data/projects.json";

function Projects() {
    const listProjects = projects.projects.map(project =>
        <CardProject key={project.img} img={project.img} logo={project.logo} color={project.color} width={project.width}/>
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
