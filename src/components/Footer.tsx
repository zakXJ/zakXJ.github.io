import footer from "../data/footer.json";

function Footer() {
    return (
        <footer className="w-full rounded-t-3xl px-5 pt-12 bg-zinc-900 ">
            <div className="flex justify-center mb-10">
                <div className="flex flex-col text-white justify-center text-center">
                    <h1 className="text-2xl font-bold mb-2">
                      {footer.cta.title}
                    </h1>
                    <p className="text-base font-normal mb-6">
                      {footer.cta.description}
                    </p>
                    <a href={footer.cta.button.href} className="mx-auto w-fit bg-white text-zinc-900 px-6 py-4 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 hover:shadow-zinc-700 transition-transform duration-300 ease-in-out">
                        {footer.cta.button.label}
                    </a>
                </div>
            </div>
            <div className="pb-6">
                <span className="text-white">
                    {footer.copyright.name} &nbsp;
                </span>
                <span className="text-zinc-500">
                 {footer.copyright.text}
                </span>
            </div>

        </footer>
    );
}

export default Footer;
