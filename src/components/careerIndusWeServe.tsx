import React from 'react';
import { cn } from '../lib/utils';

interface IndusServeCardProps {
    title: string;
    features: string[];
    onClick?: () => void;
    className?: string;
}

const IndusServeCard: React.FC<IndusServeCardProps> = ({
                                                       title,
                                                       features,
                                                       className
                                                   }) => {
    return (
        <div className={cn(
            "bg-white rounded-xl shadow-xl p-6 sm:p-8 border border-gray-100 transition-transform duration-300 hover:scale-105",
            className
        )}>
            <h3 className="font-medium text-2xl sm:text-[28px] text-black mb-4">
                {title}
            </h3>
            <ul className="space-y-3 ml-3 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="font-normal text-base text-black flex items-start">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                        {feature}
                    </li>
                ))}
            </ul>

        </div>
    );
};

const IndusWeServe: React.FC = () => {


    const AIFeatures = [
        'AI-driven decision making for businesses',
        'Computer vision and NLP systems',
        'Smart automation tools for enterprises'
    ];

    const CyberFeatures = [
        'Real-time threat detection and defense',
        'Data privacy compliance solutions',
        'Custom cybersecurity SaaS products'
    ];
    const EdutechFeatures = [
        'Remote learning platforms & LMS',
       ' Gamification and user engagement',
        'Analytics tools for student performance'
    ]
    const HealthtechFeatures = [
        'Electronic Health Record (EHR) systems',
        'Appointment booking & telemedicine apps',
        'AI-powered diagnosis and analytics'
    ]
    const FintechFeatures = [
        'Digital wallets & payment processing',
        'KYC/AML integrations for compliance',
        'Real-time dashboards for finance data'
    ]
    const GovtFeatures = [
        'Citizen service portals & e-governance',
        'Secure data handling and workflow tools',
        'Smart city and infrastructure platforms'
    ]



    return (
        <section className="py-8 px-10 sm:px-12 lg:px-16 bg-white mb-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-medium text-3xl sm:text-4xl lg:text-[34px] text-black mb-4">
                        Industries We Serve
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {/* Card 1 */}
                    <IndusServeCard
                        title="Artificial Intelligence"
                        features={AIFeatures}
                    />
                    {/* Card 2 */}
                    <IndusServeCard
                        title="Cybersecurity"
                        features={CyberFeatures}
                    />
                    {/* Card 3 */}
                    <IndusServeCard
                        title="Education Technology (Edutech)"
                        features={EdutechFeatures}
                    />
                    {/* Card 4 */}
                    <IndusServeCard
                        title="Health Technology (Healthtech)"
                        features={HealthtechFeatures}
                    />
                    {/* Card 5 */}
                    <IndusServeCard
                        title="Finance Technology (Fintech)"
                        features={FintechFeatures}
                    />
                    {/* Card 6 */}
                    <IndusServeCard
                        title="Government"
                        features={GovtFeatures}
                    />

                </div>

                {/* Additional Opportunities Section */}
                <div className="text-center bg-white rounded-xl shadow-xl p-6 sm:p-8 border border-gray-100 transition-transform duration-300">
                    <h2 className="font-medium text-3xl sm:text-[28px] text-black mb-4">
                        Work with me
                    </h2>
                    <p className="font-normal text-base text-black mb-8 max-w-2xl mx-auto">
                        Work with a partner who values clarity, creativity, and results—because great software is built on trust, not just tech.
                    </p>

                    <h3 className="font-bold text-xl sm:text-[20px] text-black mb-4">
                        Send your resume or portfolio.
                    </h3>

                    <p className="font-normal text-base text-black mb-1 max-w-2xl mx-auto">
                        Email: careers@datadaur.com
                    </p>
                    <p className="font-normal text-base text-black mb-8 max-w-2xl mx-auto">
                        Apply via: Name, Email, Role, CV upload
                    </p>
                    <button type="button" className="px-3 py-2 bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white rounded-lg"> Upload Resume</button>

                </div>
                <div className="text-center mt-24 bg-white rounded-xl shadow-xl p-6 sm:p-8 border border-gray-100 transition-transform duration-300">
                    <h3 className="font-medium text-2xl sm:text-[28px] text-black mb-4">
                        Be a Part of DataDaur’s Next Innovation
                    </h3>
                    <p className="font-normal text-base text-black mb-8 max-w-2xl mx-auto">
                        We're always on the lookout for creative minds, tech innovators, and problem solvers. Let’s build the future together.
                    </p>
                    <button type="button" className="px-3 py-2 bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white rounded-lg">Explore Job Openings</button>

                </div>
            </div>
        </section>
    );
};

export default IndusWeServe;