import React from 'react';
import starRevImg from '../assets/5-star-rev.svg';

const WhyDatadaur: React.FC = () => {
    return (
        <section className="py-16 px-8 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
                    Why Businesses Turn to Datadaur
                </h1>
                <p className="datadaur-subtitle max-w-3xl mx-auto">
                    Discover our comprehensive range of services, expertly tailored to meet your unique business needs.
                </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
                {/* Point 1 */}
                <div>
                    <h2 className="datadaur-section-heading mb-4">
                        1. Proof of Quality
                    </h2>
                    <p className="datadaur-body-text">
                        Experience excellence firsthand through our rigorously tested and certified work—consistently exceeding expectations.
                    </p>
                </div>

                {/* Point 2 */}
                <div>
                    <h2 className="datadaur-section-heading mb-4">
                        2. Pay Half while Placing the Order
                    </h2>
                    <p className="datadaur-body-text">
                        Secure your project with our flexible "Pay Half Now" option, giving you confidence and convenience from the start.
                    </p>
                </div>

                {/* Point 3 */}
                <div>
                    <h2 className="datadaur-section-heading mb-4">
                        3. Safe and Secure
                    </h2>
                    <p className="datadaur-body-text">
                        Your transactions are fully protected with robust encryption and industry-standard security measures.
                    </p>
                </div>

                {/* Image */}
                <div>
                    <img
                        src={starRevImg}
                        alt="5-star review illustration"
                        className="w-full h-auto rounded-3xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyDatadaur;