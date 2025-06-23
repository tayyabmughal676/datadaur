import React from 'react';
import { cn } from '../lib/utils';

interface ServicesCardProps {
    title: string;
    features: string[];
    onClick?: () => void;
    className?: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
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

const CoreServices: React.FC = () => {


    const AIServicesFeatures = [
        'Machine learning & deep learning model design',
        'Predictive analytics & intelligent automation',
        'AI-powered product development'
    ];

    const WebAppFeatures = [
        'Full-stack development using modern frameworks',
        'API integrations and scalable web architecture',
        'Enterprise-grade security and performance'
    ];
    const EcomFeatures = [
        'Custom storefronts with seamless UX/UI',
        'Payment gateway integration and automation',
        'Mobile-optimized, scalable eCommerce systems'
    ]
    const MobileAppFeatures = [
        'Cross-platform iOS and Android solutions',
        'Real-time features with Firebase & APIs',
        'User-friendly UI and performance-driven UX',
    ]
    const DigitalMarkFeatures = [
        'ROI-driven digital strategies',
        'SEO, PPC, and social media campaigns',
        'Analytics & conversion optimization'
    ]
    const SaasDevFeatures = [
        'Multi-tenant architecture design',
        'Subscription management and billing',
       ' Cloud-native scalability'
    ]
    const WebDesignAndDevFeatures = [
        'Custom, brand-aligned responsive designs',
        'Accessibility-first UI/UX',
        'SEO-ready and fast-loading pages'
    ]
    const SEOFeatures = [
        'On-page and technical SEO audits',
        'Backlink strategies and content SEO',
        'Keyword research and ranking improvement'
    ]


    return (
        <section className="py-8 px-10 sm:px-12 lg:px-16 bg-white mb-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-medium text-3xl sm:text-4xl lg:text-[34px] text-black mb-4">
                        Our Core Services
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {/* Card 1 */}
                    <ServicesCard
                        title="AI Service & Development"
                        features={AIServicesFeatures}
                    />
                    {/* Card 2 */}
                    <ServicesCard
                        title="Web Application Development"
                        features={WebAppFeatures}
                    />
                    {/* Card 3 */}
                    <ServicesCard
                        title="Ecommerce Development"
                        features={EcomFeatures}
                    />
                    {/* Card 4 */}
                    <ServicesCard
                        title="Mobile App Development"
                        features={MobileAppFeatures}
                    />
                    {/* Card 5 */}
                    <ServicesCard
                        title="Digital Marketing"
                        features={DigitalMarkFeatures}
                    />
                    {/* Card 6 */}
                    <ServicesCard
                        title="SaaS Development"
                        features={SaasDevFeatures}
                    />
                    {/* Card 7 */}
                    <ServicesCard
                        title="Website Design & Development"
                        features={WebDesignAndDevFeatures}
                    />
                    {/* Card 8 */}
                    <ServicesCard
                        title="Search Engine Optimization"
                        features={SEOFeatures}
                    />

                </div>

                {/* Additional Opportunities Section */}
                {/*<div className="text-center bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100 transition-transform duration-300 hover:scale-105">*/}
                {/*    <h3 className="font-medium text-2xl sm:text-[28px] text-black mb-4">*/}
                {/*        Additional Opportunities*/}
                {/*    </h3>*/}
                {/*    <p className="font-normal text-base text-black mb-8 max-w-2xl mx-auto">*/}
                {/*        Explore unique projects, joint ventures, and more collaborative models.*/}
                {/*    </p>*/}

                {/*</div>*/}
            </div>
        </section>
    );
};

export default CoreServices;