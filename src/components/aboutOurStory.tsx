import React from 'react';
import eyeIcon from '../assets/eye-icon.svg';
import archIcon from '../assets/arch-icon.svg';
import teamCollaboration from '../assets/story-img.svg';

// Data for the mission/vision cards for easier management
const missionItems = [
    {
        icon: archIcon,
        title: "Our Mission",
        description: "To empower businesses through smart, scalable, and future-ready digital solutions. " +
            "We are committed to delivering high-quality development, seamless AI integration, and expert IT " +
            "consultations that drive measurable results and long-term growth."
    },
    {
        icon: eyeIcon,
        title: "Our Vision",
        description: "To be the trusted technology partner for forward-thinking companies by shaping intelligent " +
            "digital experiences—driven by innovation, precision, and unwavering reliability in every service we deliver."
    }
];

const AboutOurStory: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8 py-12 lg:py-20">
            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black text-center mb-16">
                About DataDaur
            </h2>

            {/* Our Story Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
                {/* Text Content */}
                <div className="order-2 lg:order-1">
                    <h3 className="font-heading font-medium text-heading-lg text-black mb-6">
                        Our Story
                    </h3>
                    <p className="font-body font-normal text-base lg:text-lg text-black leading-relaxed">
                        DataDaur is a UAE-based technology company with over five years of experience delivering smart,
                        scalable, and future-focused digital solutions. We offer a full suite of services, including IT
                        management,
                        software engineering, AI agent development using our Model Context Protocol (MCP Package),
                        mobile app development,
                        website design, and comprehensive maintenance packages. Our mission is simple: to help
                        businesses
                        harness the power of technology and data to solve real-world challenges. At our core, we believe
                        data
                        is more than information—it’s a strategic asset. Through intelligent AI systems and thoughtfully
                        engineered
                        digital products, we empower organizations to make smarter decisions, automate complex
                        processes, and scale
                        with confidence. Whether you're a startup launching your first product or an enterprise
                        modernizing operations,
                        we bring the vision, expertise, and innovation to help you move forward.
                    </p>
                </div>

                {/* Image */}
                <div className="order-1 lg:order-2">
                    <div className="relative">
                        <img
                            src={teamCollaboration}
                            alt="Team collaboration"
                            className="w-full h-full sm:h-80 lg:h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>

            {/* Mission/Vision Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {missionItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white text-center rounded-2xl p-8 lg:p-10 shadow-lg flex flex-col h-full transition-transform duration-300 hover:scale-105"
                    >
                        <div className="flex items-center justify-center mb-6">
                            <div
                                className="w-12 h-12 bg-gradient-to-r from-[#604CC3] to-[#2E245D] rounded-full flex items-center justify-center mr-4">
                                <img src={item.icon} alt={`${item.title} Icon`} className="w-6 h-6"/>
                            </div>
                            <h3 className="font-heading font-medium text-heading-md">
                                {item.title}
                            </h3>
                        </div>
                        <p className="font-normal text-base lg:text-lg text-black leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutOurStory;


//hello
