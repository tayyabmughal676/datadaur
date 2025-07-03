
import ellipseImgBg from "../assets/ellipse.svg";

const NotFoundSection= () => {
    return (

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
                <h1 className="font-semibold text-[#604CC3CC] text-9xl lg:[286px] xl:text-[286px] leading-tight">
                    404
                </h1>
                <p className="text-[#604CC3] text-shadow-2xs lg:text-2xl">Oops! Page Not Found</p>
            </div>

            {/* Subtitle */}

            <a href="/" className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] rounded-xl text-white px-8 py-3 font-outfit text-lg">
                Back to Home
            </a>
        </div>

    </div>
</section>
    );
};
export default NotFoundSection;