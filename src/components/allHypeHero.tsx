import ellipseImgBg from "../assets/ellipse.svg";
import allHypeImg from "../assets/all-hype-banner.png";

const AllHypeCaseStudyHero = () => {
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

                <div className="space-y-6">
                    <div className="space-y-2">
                        <img src={allHypeImg} className="flex items-center justify-center overflow-hidden"
                             alt="AllHype Banner"/>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AllHypeCaseStudyHero;
