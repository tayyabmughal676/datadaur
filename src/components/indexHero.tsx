import ellipseImgBg from "../assets/ellipse.svg";
import dotsImg from "../assets/dots.svg";

const IndexHero = () => {
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-left space-y-6">
                        {/* Main Heading */}
                        <div className="space-y-2">
                            <h1 className="font-outfit font-semibold text-3xl sm:text-5xl lg:text-6xl xl:text-6xl leading-tight">
                                <span className="text-[#604CC3]/60 block"> {/* Changed opacity here */}
                                    Revolutionize Your
                                </span>
                                <span className="text-[#604CC3]/60 block"> {/* Changed opacity here */}
                                    Business with
                                </span>
                                <span className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] bg-clip-text text-transparent block">
                                    AI-Driven Solutions
                                </span>
                            </h1>
                        </div>

                        {/* Subtitle */}

                        <p className="font-open-sans text-lg sm:text-xl text-[#604CC3CC] max-w-2xl leading-relaxed">
                            Unlock customer satisfaction and fuel business growth by
                            personalizing experiences that resonate with their needs.
                        </p>
                    </div>

                    {/* Right Side - Purple Circles */}
                    <div className="relative flex items-center justify-center lg:justify-end">
                        <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                            {/* You can replace this div with your actual image */}
                            <img src={dotsImg} alt="dots image" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
//hello

export default IndexHero;