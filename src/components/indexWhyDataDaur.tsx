import React from 'react';
import starRevImg from '../assets/5-star-rev.svg';

const WhyDatadaur: React.FC = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="datadaur-main-heading mb-6">
                    Why Businesses Turn to Datadaur
                </h1>
                <p className="datadaur-subtitle max-w-3xl mx-auto">
                    Explore Our Comprehensive Range of Services Tailored to Your Needs
                </p>
            </div>

            {/* Mobile/Tablet Layout */}
            <div className="block lg:hidden space-y-12">
                {/* Point 1 */}
                <div>
                    <h2 className="datadaur-section-heading mb-4">
                        1. Proof of Quality
                    </h2>
                    <p className="datadaur-body-text">
                        Experience excellence firsthand with our proof of quality work: rigorously tested, certified, and consistently exceeding expectations.
                    </p>
                </div>

                {/* Point 2 */}
                <div>
                    <h2 className="datadaur-section-heading mb-4">
                        2. Pay Half while Placing the Order
                    </h2>
                    <p className="datadaur-body-text">
                        Secure your order today with our convenient 'Pay Half Now' option, providing flexibility and peace of mind.
                    </p>
                </div>

                {/* Point 3 */}
                <div>
                    <h2 className="datadaur-section-heading mb-4">
                        3. Safe and Secure
                    </h2>
                    <p className="datadaur-body-text">
                        Rest easy knowing your transactions are safe and secure with our robust encryption and protective measures.
                    </p>
                </div>

                {/* Image Card for Mobile */}
                <div className="rounded-3xl">
                    <div className="w-full h-48 overflow-hidden">
                        <img
                            src={starRevImg}
                            alt="Delivery truck"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column - Points 1 and 3 */}
                    <div className="space-y-12">
                        {/* Point 1 */}
                        <div>
                            <h2 className="datadaur-section-heading mb-4">
                                1. Proof of Quality
                            </h2>
                            <p className="datadaur-body-text">
                                Experience excellence firsthand with our proof of quality work: rigorously tested, certified, and consistently exceeding expectations.
                            </p>
                        </div>

                        {/* Point 3 */}
                        <div>
                            <h2 className="datadaur-section-heading mb-4">
                                3. Safe and Secure
                            </h2>
                            <p className="datadaur-body-text">
                                Rest easy knowing your transactions are safe and secure with our robust encryption and protective measures.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Point 2 and Image */}
                    <div className="space-y-8">
                        {/* Point 2 */}
                        <div>
                            <h2 className="datadaur-section-heading mb-4">
                                2. Pay Half while Placing the Order
                            </h2>
                            <p className="datadaur-body-text mb-8">
                                Secure your order today with our convenient 'Pay Half Now' option, providing flexibility and peace of mind.
                            </p>
                        </div>

                        {/* Image Card */}
                        <div>
                            <div className="w-full h-48 overflow-hidden">
                                <img
                                    src={starRevImg}
                                    alt="Delivery truck"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyDatadaur;