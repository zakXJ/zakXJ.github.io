function Footer() {
    return (
        <footer className="w-full rounded-t-3xl px-5 pt-12 bg-zinc-900 ">
            <div className="flex justify-center mb-10">
                <div className="flex flex-col text-white justify-center text-center">
                    <h1 className="text-2xl font-bold mb-2">
                      Ready to Bring Your Vision to Life?
                    </h1>
                    <p className="text-base font-normal mb-6">
                      Let's work together to create something amazing.
                    </p>
                    <a href="mailto:xj3.zak@gmail.com" className="mx-auto w-fit bg-white text-zinc-900 px-6 py-4 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 hover:shadow-zinc-700 transition-transform duration-300 ease-in-out">
                        Hire Me
                    </a>
                </div>
            </div>
            <div className="pb-6">
                <span className="text-white">
                    Zakaria &nbsp;  
                </span>
                <span className="text-zinc-500">
                 © All rights reserved.
                </span>
            </div>
            
        </footer>
    );
}

export default Footer;