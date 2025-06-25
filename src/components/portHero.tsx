import ellipseImgBg from "../assets/ellipse.svg";

//hello
const PortHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={ellipseImgBg}
                    alt="Ellipse Image"
                    className="w-full h-full object-cover opacity-90"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto p-8 pt-20">

                <div className="text-center space-y-6">
                    <div className="space-y-2 text-center">
                        <h1 className="font-outfit font-semibold  text-3xl sm:text-5xl lg:text-6xl xl:text-6xl leading-tight">
                            <span className="text-[#604CC3]/60 block">
                                Crafted Experiences,
                            </span>
                            <span className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] bg-clip-text text-transparent block">
                                Clear Results
                            </span>
                        </h1>
                    </div>

                    <p className="font-open-sans text-lg text-center sm:text-xl text-[#604CC3CC] max-w-2xl leading-relaxed">
                        Each project reflects my passion for solving problems through design.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default PortHero;