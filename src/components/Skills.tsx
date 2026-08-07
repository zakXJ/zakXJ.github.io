import skills from "../data/skills.json";

function Skills() {
  return (
    <section id="skills" className=" w-4/5 mx-auto bg-sk flex flex-col pt-36 justify-center text-zinc-900">
      <h1 className="text-5xl font-base mb-10">Skills</h1>
      <div className="grid sm:grid-cols-2 gap-8">
        {skills.categories.map((category) => (
          <div key={category.title} className={`relative overflow-clip ${category.bgColor} py-16 rounded-3xl border border-zinc-800 group`}>
            {category.logos.map((logo) => (
              <img key={logo.src} src={`../logo/${logo.src}`} className={`${logo.classes} grayscale-100`} alt="" />
            ))}
            {category.extra && (
              <span className={`${category.extra.classes} grayscale-100`}>{category.extra.text}</span>
            )}
            <p className="text-2xl text-center font-extralight">{category.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
