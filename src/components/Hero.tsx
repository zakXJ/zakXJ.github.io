import * as motion from "motion/react-client";

function Hero() {
  return (
    <section className="md:w-4/5 w-11/12 mx-auto  flex mt-40 mb-32 justify-center text-zinc-900 dark:text-zinc-100 relative overflow-clip">
      <img
        src="../grid.svg"
        alt=""
        className="w-full absolute opacity-15 dark:opacity-10 -mt-10"
      />
      <div className="w-full flex justify-center z-20 bg-radial from-transparent from-10% to-white dark:to-neutral-900">
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
              {/* Gradient text color is white, which should be fine on dark. Gradient itself is light. */}
              <span className="mt-4 sm:mt-0 bg-gradient-to-r from-green-300 from-10% via-sky-300 via-30% to-emerald-400 to-90% inline-block text-white rounded-3xl px-5 py-2 animate-gradient">
                Zakaria
              </span>
            </h1>
            <p className="mx-auto text-xl text-zinc-800 dark:text-zinc-300 mb-8 md:w-2xl text-center">
              Full Stack Developer | Problem Solver . I create beautiful and
              functional web applications with a focus on user experience and
              clean code.
            </p>
            <div className="flex flex-1 justify-center gap-4">
              <a
                href="#projects"
                className="bg-zinc-800 dark:bg-zinc-700 text-white dark:text-gray-100 px-6 py-4 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 hover:shadow-zinc-300 dark:hover:shadow-md dark:hover:shadow-sky-400/50 transition-transform duration-300 ease-in-out"
              >
                Projects
              </a>
              <a
                href="mailto:xj3.zak@gmail.com"
                className="bg-white dark:bg-neutral-700 border border-zinc-800 dark:border-zinc-600 text-zinc-800 dark:text-zinc-100 px-6 py-4 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 hover:shadow-zinc-300 dark:hover:shadow-md dark:hover:shadow-sky-400/50 transition-transform duration-300 ease-in-out"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
