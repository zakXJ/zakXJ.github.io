function Resume() {
  return (
    <section id="resume" className=" w-4/5 mx-auto bg-sk flex flex-col py-40 justify-center text-zinc-900">
      <div className="w-full rounded-3xl border border-zinc-800  sm:flex  sm:justify-between  sm:items-start p-4">
        <div className="flex-1 my-auto">
          <h1 className="text-5xl font-base text-center">Resume</h1>
        </div>

        <div className="flex-1 flex sm:justify-end justify-center mt-2 sm:mt-0">
          <div className="relative w-fit bg-sky-300 p-4 rounded-3xl group">
            <div className="absolute top-4 rotate-0 bg-white aspect-[1.65/2] w-32 rounded-xl border border-zinc-200"></div>
            <div className="group-hover:-translate-y-10 transition-transform duration-500 ease-in-out rotate-[5deg] overflow-clip  z-10 shadow-lg shadow-zinc-800  bg-white aspect-[1.65/2] w-32 rounded-xl border border-zinc-200">
              <img src={`../cv20252.png`} className="w-fit" alt="" />
            </div>

            <div className=" inset-shadow-md inset-shadow-white bg-linear-to-t from-blue-300/90 to-white/90 folder w-full h-32 rounded-3xl absolute left-0 bottom-0"></div>
          </div>
        </div>
      </div>

      {/* <h1 className="text-5xl font-base mb-10">Resume</h1>
        <div className="flex items-center justify-center">
          <div className="relative  bg-sky-300 p-4 rounded-3xl group">
          <div className="absolute top-4 rotate-0 bg-white aspect-[1.65/2] w-32 rounded-xl border border-zinc-200"></div>
              <div className="group-hover:-translate-y-10 transition-transform duration-500 ease-in-out rotate-[5deg] overflow-clip  z-10 shadow-lg shadow-zinc-800  bg-white aspect-[1.65/2] w-32 rounded-xl border border-zinc-200">
              <img
              src={`../cv20252.png`}
              className="w-fit bg-amber-700 text-blue-700"
              alt=""
            />
              </div>
              
              <img
              src={`../folder.svg`}
              className="w-10 h-10 bg-amber-700 text-blue-700"
              alt=""
            />
              <div className=" inset-shadow-md inset-shadow-white bg-linear-to-t from-blue-300/90 to-white/90 folder w-full h-32 rounded-3xl absolute left-0 bottom-0">
                
              </div>
          </div>
        </div> */}
    </section>
  );
}

export default Resume;
