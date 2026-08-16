import { useRef, useState } from "react";
import { useInView } from "motion/react";
import skills from "../data/skills.json";

function applyHover(classes: string, active: boolean): string {
  if (!active) return classes;
  const targets = classes.match(/group-hover:\S+/g) || [];
  const cleaned = classes
    .replace(/(\S*translate-y-\d+(?:\.\d+)?)/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return `${cleaned} ${targets.map((c) => c.slice("group-hover:".length)).join(" ")}`;
}

function Skills() {
  const [isTouch] = useState(() => typeof window !== "undefined" && window.matchMedia("(hover: none)").matches);

  return (
    <section id="skills" className=" w-4/5 mx-auto bg-sk flex flex-col pt-36 justify-center text-zinc-900">
      <h1 className="text-5xl font-base mb-10">Skills</h1>
      <div className="grid sm:grid-cols-2 gap-8">
        {skills.categories.map((category) => (
          <SkillCard key={category.title} category={category} isTouch={isTouch} />
        ))}
      </div>
    </section>
  );
}

interface SkillCardProps {
  category: (typeof skills.categories)[number];
  isTouch: boolean;
}

function SkillCard({ category, isTouch }: SkillCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const active = isTouch && inView;

  return (
    <div
      ref={ref}
      className={`relative overflow-clip ${category.bgColor} py-16 rounded-3xl border border-zinc-800 group`}
    >
      {category.logos.map((logo) => (
        <img
          key={`${logo.src}-mobile`}
          src={`../logo/${logo.src}`}
          className={`${applyHover(logo.mobile ?? logo.classes, active)} sm:hidden grayscale-100`}
          alt=""
        />
      ))}
      {category.logos.map((logo) => (
        <img
          key={`${logo.src}-desktop`}
          src={`../logo/${logo.src}`}
          className={`${applyHover(logo.classes, active)} hidden sm:block grayscale-100`}
          alt=""
        />
      ))}
      {category.extra && (
        <>
          <span className={`${applyHover(category.extra.mobile ?? category.extra.classes, active)} sm:hidden grayscale-100`}>
            {category.extra.text}
          </span>
          <span className={`${applyHover(category.extra.classes, active)} hidden sm:block grayscale-100`}>
            {category.extra.text}
          </span>
        </>
      )}
      <p className="text-2xl text-center font-extralight">{category.title}</p>
    </div>
  );
}

export default Skills;