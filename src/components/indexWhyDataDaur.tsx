import React from 'react';

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
                        Experience excellence firsthand through our rigorously tested and certified work—consistently
                        exceeding expectations.
                    </p>
                </div>

                {/* Point 2 */}
                <div>
                    <h2 className="datadaur-section-heading mb-4">
                        2. Pay Half while Placing the Order
                    </h2>
                    <p className="datadaur-body-text">
                        Secure your project with our flexible "Pay Half Now" option, giving you confidence and
                        convenience from the start.
                    </p>
                </div>

                {/* Point 3 */}
                <div>
                    <h2 className="datadaur-section-heading mb-4">
                        3. Safe and Secure
                    </h2>
                    <p className="datadaur-body-text">
                        Your transactions are fully protected with robust encryption and industry-standard security
                        measures.
                    </p>
                </div>

                {/* Star Rating */}
                <div className="flex items-center justify-center">
                    <div className="w-full">
                        <div className="rounded-2xl p-6 sm:p-8 md:p-10 text-center relative overflow-hidden bg-white">
                            {/* Gradient border using pseudo-element */}
                            <div
                                className="absolute inset-0 rounded-2xl"
                                style={{
                                    background: 'linear-gradient(270deg, #2E245D 0%, #604CC3 100%)',
                                    padding: '4px'
                                }}
                            >
                                <div className="w-full h-full bg-white rounded-xl"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h2
                                    className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6"
                                    style={{
                                        background: 'linear-gradient(270deg, #2E245D 0%, #604CC3 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}
                                >
                                    5 Stars Rating
                                </h2>

                                <div className="flex justify-center gap-1 sm:gap-2 mb-4 sm:mb-6">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <svg
                                            key={index}
                                            width="40"
                                            height="40"
                                            viewBox="0 0 24 24"
                                            fill="#FFD900"
                                            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>

                                <p
                                    className="text-2xl sm:text-3xl md:text-4xl font-medium"
                                    style={{
                                        background: 'linear-gradient(270deg, #2E245D 0%, #604CC3 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}
                                >
                                    41 Reviews
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

    export default WhyDatadaur;