import React from 'react';
import {cn} from '../lib/utils';
import {Link} from 'react-router-dom';

interface PartnerCardProps {
    title: string;
    description: string;
    features: string[];
    buttonText: string;
    href: string; // Changed from onClick to href for navigation
    className?: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
                                                     title,
                                                     description,
                                                     features,
                                                     buttonText,
                                                     href,
                                                     className
                                                 }) => {
    return (
        <div className={cn(
            "bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100 transition-transform duration-300 hover:scale-105",
            className
        )}>
            <h3 className="font-medium text-2xl sm:text-[28px] text-black mb-4">
                {title}
            </h3>
            <p className="font-normal text-base text-black mb-6 leading-relaxed">
                {description}
            </p>
            <ul className="space-y-3 ml-3 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="font-normal text-base text-black flex items-start">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                        {feature}
                    </li>
                ))}
            </ul>
            <Link
                to={href}
                className="gradient-btn text-white font-normal px-6 py-3 rounded-lg hover:shadow-xl transition-all duration-300 inline-block text-center no-underline"
            >
                {buttonText}
            </Link>
        </div>
    );
};

const PartnersWith: React.FC = () => {
    const b2bFeatures = [
        'Custom Data Analytics',
        'Scalable Cloud Solutions',
        'Strategic Partnerships'
    ];

    const b2cFeatures = [
        'Custom Branding',
        'Seamless Integration',
        'Scalable Solutions'
    ];

    return (
        <section className="py-8 px-10 sm:px-12 lg:px-16 bg-white mb-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-medium text-3xl sm:text-4xl lg:text-[34px] text-black mb-4">
                        Partner with DataDaur
                    </h2>
                    <p className="font-normal text-base sm:text-lg text-black max-w-xl mx-auto">
                        Join us to unlock limitless opportunities in data-driven transformations. Let's innovate
                        together.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
                    {/* B2B Card 1 */}
                    <PartnerCard
                        title="Business to Business (B2B)"
                        description="Enhance your business with our tailored data strategies and scalable solutions."
                        features={b2bFeatures}
                        buttonText="Learn More"
                        href="/contact-us"
                    />

                    {/* B2C Card */}
                    <PartnerCard
                        title="Business to Customer (B2C)"
                        description="Rebrand our solutions as your own and offer them seamlessly to your customers."
                        features={b2cFeatures}
                        buttonText="Learn More"
                        href="/contact-us"
                        className="lg:col-span-1"
                    />
                </div>

                {/* Additional Opportunities Section */}
                <div
                    className="text-center bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100 transition-transform duration-300 hover:scale-105">
                    <h3 className="font-medium text-2xl sm:text-[28px] text-black mb-4">
                        Additional Opportunities
                    </h3>
                    <p className="font-normal text-base text-black mb-8 max-w-2xl mx-auto">
                        Explore unique projects, joint ventures, and more collaborative models.
                    </p>
                    <Link
                        to="/contact-us"
                        className="gradient-btn text-white font-normal px-8 py-3 rounded-lg hover:shadow-xl transition-all duration-300 inline-block text-center no-underline"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PartnersWith;
