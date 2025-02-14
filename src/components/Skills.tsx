function Skills() {
  return (
    <section className=" w-4/5 mx-auto bg-sk flex flex-col my-20 justify-center text-zinc-900">
      <h1 className="text-5xl font-base mb-10">Skills</h1>
      <div className="grid sm:grid-cols-2 gap-8">
        <div className="relative overflow-clip bg-teal-100 py-16 rounded-3xl border border-zinc-800 group">
            <img src={`../logo/HTML5.svg`} className="w-20 sm:w-28 grayscale-100 absolute opacity-20 left-0 rotate-6 translate-y-48 group-hover:translate-y-8  transition-transform duration-500 ease-in-out" alt="" />
            <img src={`../logo/CSS.svg`} className="w-14 sm:w-20 grayscale-100 absolute opacity-20 sm:left-28 left-14 rotate-6  -translate-y-48 group-hover:-translate-y-16  transition-transform duration-500 ease-in-out" alt="" />
            <img src={`../logo/.NET.svg`} className="w-20 sm:w-28 grayscale-100 absolute opacity-20 right-0 -rotate-6 translate-y-48 group-hover:translate-y-8 transition-transform duration-500 ease-in-out" alt="" />
            <img src={`../logo/Laravel.svg`} className="w-14 sm:w-20 grayscale-100 absolute opacity-20 right-14 -rotate-6 -translate-y-48 group-hover:-translate-y-16 transition-transform duration-500 ease-in-out" alt="" />
            <p className="text-2xl text-center font-extralight">Web developpement</p>
        </div>
        <div className="relative overflow-clip bg-sky-100 py-16 rounded-3xl border border-zinc-800 group">
            <img src={`../logo/Nginx.svg`} className="w-32 sm:w-48 grayscale-100 absolute opacity-20 left-5 rotate-6 translate-y-28 group-hover:translate-y-12 transition-transform duration-500 ease-in-out" alt="" />
            <img src={`../logo/Githubactions.svg`} className="w-20 sm:w-24 grayscale-100 absolute opacity-15 right-5 -rotate-6 -translate-y-48 group-hover:-translate-y-16  transition-transform duration-500 ease-in-out" alt="" />
            <p className="text-2xl text-center font-extralight">Deployment</p>
        </div>
        <div className="relative overflow-clip bg-zinc-100 py-16 rounded-3xl border border-zinc-800 group">
            <img src={`../logo/Flutter.png`} className="w-36 sm:w-52 grayscale-100 absolute opacity-40 left-8 -rotate-6 -translate-y-48 group-hover:-translate-y-16  transition-transform duration-500 ease-in-out" alt="" />
            <img src={`../logo/React.svg`} className="w-28 sm:w-44 grayscale-100 absolute opacity-40 right-0 -rotate-6 translate-y-48 group-hover:translate-y-8 transition-transform duration-500 ease-in-out" alt="" />
            <p className="text-2xl text-center font-extralight">Mobile developpement</p>
        </div>
        <div className="relative overflow-clip bg-white py-16 rounded-3xl border border-zinc-800 group">
            <img src={`../logo/GEHealthCare.svg`} className="w-40 sm:w-52 grayscale-100 absolute opacity-20 left-2 -rotate-6 translate-y-28 group-hover:translate-y-10 transition-transform duration-500 ease-in-out" alt="" />
            <img src={`../logo/dicom.png`} className="w-36 sm:w-52 grayscale-100 absolute opacity-30 left-1/2 -translate-x-1/2 rotate-3 -translate-y-48 group-hover:-translate-y-16  transition-transform duration-500 ease-in-out" alt="" />
            <span className="grayscale-100 absolute opacity-25 sm:right-8 right-4 rotate-6 translate-y-26 group-hover:translate-y-8 transition-transform duration-500 ease-in-out text-5xl sm:text-6xl"> PACS </span>
            <p className="text-2xl text-center font-extralight">HealthTech</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
