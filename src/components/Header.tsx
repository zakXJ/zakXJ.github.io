function Header() {
    return (
        <header className="z-50 w-4/5 px-5 py-4 bg-white border rounded-full border-zinc-800 flex items-center justify-between fixed top-4 right-1/2 translate-x-1/2 text-zinc-900">
            <div className="">
                <div className="rounded-full bg-gradient-to-br from-sky-300 from-10%  to-emerald-300 to-90% h-[60px] w-[60px]"></div>
                {/* <h1 className="text-2xl font-bold px-6">Zakaria</h1> */}
            </div>

            <div className="">
                <nav className="flex gap-6 items-center">
                    <a href="#" className="hover:text-sky-500 text-xl">Projects</a>
                    <a href="#" className="hover:text-sky-500 text-xl">Skills</a>
                    <a href="#" className="hover:text-sky-500 text-xl">Resume</a>
                    <div className="flex justify-center items-center">
                    <a href="#" className="hover:text-sky-500 text-xl text-white bg-zinc-800 rounded-full px-6 py-4">Contact</a>
                    </div>
                </nav>
            </div>
            
        </header>
    );
}

export default Header;