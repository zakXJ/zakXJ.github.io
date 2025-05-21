function Footer() {
    return (
        <footer className="w-full rounded-t-3xl px-5 pt-12 bg-zinc-900 dark:bg-black">
            <div className="flex justify-center mb-10">
                <div className="flex flex-col text-white dark:text-gray-100 justify-center text-center">
                    <h1 className="text-2xl font-bold mb-2">
                      Ready to Bring Your Vision to Life?
                    </h1>
                    <p className="text-base font-normal mb-6">
                      Let's work together to create something amazing.
                    </p>
                    <a href="mailto:xj3.zak@gmail.com" className="mx-auto w-fit bg-white dark:bg-neutral-700 text-zinc-900 dark:text-white px-6 py-4 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 hover:shadow-zinc-700 dark:hover:shadow-neutral-600 transition-transform duration-300 ease-in-out">
                        Hire Me
                    </a>
                </div>
            </div>
            <div className="pb-6">
                <span className="text-white dark:text-gray-100">
                    Zakaria &nbsp;  
                </span>
                <span className="text-zinc-500 dark:text-zinc-400">
                 © All rights reserved.
                </span>
            </div>
            
        </footer>
    );
}

export default Footer;