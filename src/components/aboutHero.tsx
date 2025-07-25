import ellipseImgBg from "../assets/ellipse.svg";

const AboutHero = () => {
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
                        <h1 className="font-outfit font-semibold text-3xl sm:text-5xl lg:text-6xl xl:text-6xl leading-tight">
                                <span className="text-[#604CC3]/60 block">
                                    Where
                                    <span
                                        className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] bg-clip-text text-transparent">
                                        Vision {''}
                                    </span>
                                    and
                                </span>

                            <span className="text-[#604CC3]/60 block">
                                    <span
                                        className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] bg-clip-text text-transparent">
                                        Design
                                    </span>
                                {' '}Intersect
                                </span>
                        </h1>
                    </div>

                    {/* Subtitle */}

                    <p className="font-open-sans text-lg sm:text-xl text-[#604CC3CC] max-w-2xl leading-relaxed">
                        Helping brands transform ambition into design that works.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default AboutHero;
