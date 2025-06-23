import ellipseImgBg from "../assets/ellipse.svg";

//hello
const PartnersHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Ellipse */}
            <div className="absolute inset-0 z-0">
                <img
                    src={ellipseImgBg}
                    alt="Ellipse Image"
                    className="w-full h-full object-cover opacity-90"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto p-6 pt-20">
                {/* Left Content */}
                <div className="text-center space-y-6">
                    {/* Main Heading */}
                    <div className="space-y-2">
                        <h1 className="font-semibold text-3xl sm:text-5xl lg:text-6xl xl:text-6xl leading-tight">
                            <span className="text-[#604CC3]/60 block">
                                    Together,
                                <span className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] bg-clip-text text-transparent "> {/* Changed opacity here */}
                                    We Build
                                </span>
                            </span>

                            <span className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] bg-clip-text text-transparent block"> {/* Changed opacity here */}
                                Success {''}
                                <span className="text-[#604CC3]/60">
                                         Stories.
                                    </span>
                            </span>
                        </h1>
                    </div>

                    {/* Subtitle */}

                    <p className="font-open-sans text-lg sm:text-xl text-[#604CC3CC] max-w-2xl leading-relaxed">
                        From vision to reality, we grow stronger
                        together.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default PartnersHero;