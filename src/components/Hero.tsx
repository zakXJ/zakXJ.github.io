import * as motion from "motion/react-client";


function Hero() {
  return (
    <section className="md:w-4/5 w-11/12 mx-auto  flex mt-40 mb-32 justify-center text-zinc-900 relative overflow-clip">
      <img
        src="../grid.svg"
        alt=""
        className="w-full absolute opacity-15 -mt-10"
      />
      <div className="w-full flex justify-center z-20 bg-radial from-transparent from-10% to-white">
        <div className="my-auto py-18 text-left w-full">
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.2,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            
          >
            <h1 className="text-5xl text-center font-bold mb-6 animate-fade-in">
              Hi, I'm &nbsp;
              <span className="mt-4 sm:mt-0 bg-gradient-to-r from-green-300 from-10% via-sky-300 via-30% to-emerald-400 to-90% inline-block text-white rounded-3xl px-5 py-2 animate-gradient">
                Zakaria
              </span>
            </h1>
            <p className="mx-auto text-xl text-zinc-800 mb-8 md:w-2xl text-center">
              Full Stack Developer | Problem Solver . I create beautiful and
              functional web applications with a focus on user experience and
              clean code.
            </p>
            <div className="flex flex-1 justify-center gap-4">
              <button className="overflow-clip relative bg-zinc-800 text-white px-6 py-4 rounded-full font-semibold group hover:shadow-lg hover:-translate-y-1 hover:shadow-zinc-300 transition-transform duration-300 ease-in-out">
              {/* <div className="absolute -translate-x-10 bottom-2 left-4 rounded-full bg-gradient-to-br from-sky-300 from-10%  to-emerald-300 to-90% h-4 w-4 group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
              <div className="absolute translate-x-10 top-2 right-4 rounded-full bg-gradient-to-br from-sky-300 from-10%  to-emerald-300 to-90% h-4 w-4 group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div> */}
                Projects
              </button>
              <button className="bg-white border border-zinc-800 text-zinc-800 px-6 py-4 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 hover:shadow-zinc-300 transition-transform duration-300 ease-in-out">
                Contact
              </button>
            </div>
          </motion.div>
        </div>
        {/*  <div className="flex-1">
                  <div className="h-[500px] border border-zinc-800 w-full bg-sky-200 rounded-3xl p-4">
                    <div className="bg-white border border-zinc-800 w-full h-full rounded-2xl">
                    
                    </div>
                  </div>
            </div> */}
      </div>
    </section>
  );
}

export default Hero;
