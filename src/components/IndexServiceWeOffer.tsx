import React from 'react';
import {useState} from 'react';
import {cn} from '../lib/utils';
import pyramidImg from '../assets/pyramid.svg';
import blendImg from '../assets/blend.svg';
import brainImg from '../assets/brain.svg';
import flowerImage from '../assets/flower.svg';
import spinnerImage from '../assets/spinner.svg';
import wheelImage from '../assets/wheel.svg';

import ServiceOrderModal from './ServiceOrderModal';

interface ServiceModalData {
    title: string;
    description: string[];
}

interface ServiceWeOfferProps {
    className?: string;
}

const ServiceWeOffer: React.FC<ServiceWeOfferProps> = ({className}) => {
    // Move state declarations inside the component
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState<ServiceModalData | null>(null);

    const handleServiceClick = (title: string, description: string[]) => {
        setSelectedService({title, description});
        setShowModal(true);
    };
    return (
        <section className={cn("py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8", className)}>
            <div className="max-w-7xl p-6 mx-auto">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-black text-[24px] md:text-4xl lg:text-5xl font-medium mb-4">
                        Service We Offer
                    </h2>
                    <p className="service-body-text text-base sm:text-lg max-w-lg mx-auto">
                        Explore Our Comprehensive Range of Services Tailored to Your Needs
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">

                    {/* First Row: Development & IT Consultations */}
                    <div
                        className="mb-6 sm:mb-8 lg:mb-16 bg-white rounded-3xl shadow-2xl p-4 lg:order-2 transition-transform duration-300 hover:scale-105">
                        <img
                            src={blendImg}
                            alt="Development & IT Consultations"
                            className="w-full h-auto p-4"
                        />
                    </div>
                    <div className="mb-6 sm:mb-8 lg:mb-16 lg:order-1">
                        <h3 className="service-heading-3 mb-4 sm:mb-6">
                            Development & IT Consultations
                        </h3>
                        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <div className="flex items-center space-x-3">
                                <span className="service-body-text">1. 30 minutes free consultation</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="service-body-text">2. 24/7 available</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="service-body-text">3. One-to-one meeting</span>
                            </div>
                        </div>
                        <button
                            onClick={() => handleServiceClick("Development & IT Consultations", [
                                "30 minutes free consultation",
                                "24/7 available",
                                "One-to-one meeting"
                            ])}
                            className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 inline-block text-center no-underline"
                        >
                            Book Now
                        </button>
                    </div>

                    {/* Second Row: AI Agent Development Package */}
                    <div
                        className="mb-6 sm:mb-8 lg:mb-16 bg-white rounded-3xl shadow-2xl py-10 px-8 lg:order-3 transition-transform duration-300 hover:scale-105">
                        <img
                            src={brainImg}
                            alt="AI Agent Development Package"
                            className="w-full h-auto p-4"
                        />
                    </div>
                    <div className="mb-6 sm:mb-8 lg:mb-16 lg:order-4">
                        <h3 className="service-heading-3 mb-4 sm:mb-6">
                            AI Agent Development Package
                        </h3>
                        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <div className="flex items-start space-x-3">
                                <span className="service-body-text">1. Customized AI Agent</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="service-body-text">2. Connect to existing or new business</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="service-body-text">3. Business-based LLMs Model Fine-Tuning</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="service-body-text">4. Software Development based on AI Agent.</span>
                            </div>
                        </div>
                        <button
                            onClick={() => handleServiceClick("AI Agent Development Package", [
                                "Customized AI Agent",
                                "Connect to existing or new business",
                                "Business-based LLMs Model Fine-Tuning",
                                "Software Development based on AI Agent"
                            ])}
                            className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 inline-block text-center no-underline"
                        >
                            Order Now
                        </button>
                    </div>

                    {/* Third Row: AI Model Context Protocol MCP Package */}
                    <div
                        className="mb-6 sm:mb-8 lg:mb-16 bg-white rounded-3xl shadow-2xl py-10 px-8 lg:order-6 transition-transform duration-300 hover:scale-105">
                        <img
                            src={pyramidImg}
                            alt="AI Model Context Protocol MCP Package"
                            className="w-full h-full p-4"
                        />
                    </div>
                    <div className="mb-6 sm:mb-8 lg:mb-16 lg:order-5">
                        <h3 className="service-heading-3 mb-4 sm:mb-6">AI Model Context Protocol MCP Package</h3>
                        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <li className="service-body-text text-base sm:text-lg">1. Customized Model Context
                                Protocol
                            </li>
                            <li className="service-body-text text-base sm:text-lg">2. Integration with any LLM model
                            </li>
                            <li className="service-body-text text-base sm:text-lg">3. Compatibility with existing or new
                                business systems
                            </li>
                            <li className="service-body-text text-base sm:text-lg">4. Software development based on the
                                MCP framework
                            </li>
                        </ul>
                        <button
                            onClick={() => handleServiceClick("AI Model Context Protocol MCP Package", [
                                "Customized Model Context Protocol",
                                "Integration with any LLM model",
                                "Compatibility with existing or new business systems",
                                "Software development based on the MCP framework"
                            ])}
                            className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 inline-block text-center no-underline"
                        >
                            Order Now
                        </button>
                    </div>

                    <div
                        className="mb-6 sm:mb-8 lg:mb-16 bg-white rounded-3xl shadow-2xl py-10 px-8 lg:order-7 transition-transform duration-300 hover:scale-105">
                        <img
                            src={flowerImage}
                            alt="Mobile Application Development Package"
                            className="w-full h-auto p-4"
                        />
                    </div>
                    <div className="mb-6 sm:mb-8 lg:mb-16 lg:order-8">
                        <h3 className="service-heading-3 mb-4 sm:mb-6">Mobile Application Development Package</h3>
                        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <li className="service-body-text text-base sm:text-lg">1. Mobile App UI UX Design</li>
                            <li className="service-body-text text-base sm:text-lg">2. Mobile App Development</li>
                            <li className="service-body-text text-base sm:text-lg">3. Custom Backend Development &
                                Deployment
                            </li>
                            <li className="service-body-text text-base sm:text-lg">4. Publish App to AppStore & Google
                                Play
                            </li>
                        </ul>
                        <button
                            onClick={() => handleServiceClick("Mobile Application Development Package", [
                                "Mobile App UI UX Design",
                                "Mobile App Development",
                                "Custom Backend Development & Deployment",
                                "Publish App to AppStore & Google Play"
                            ])}
                            className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 inline-block text-center no-underline"
                        >
                            Order Now
                        </button>
                    </div>

                    <div
                        className="mb-6 sm:mb-8 lg:mb-16 bg-white rounded-3xl shadow-2xl py-10 px-8 lg:order-10 transition-transform duration-300 hover:scale-105">
                        <img
                            src={spinnerImage}
                            alt="Website Package"
                            className="w-full h-auto p-4"
                        />
                    </div>
                    <div className="mb-6 sm:mb-8 lg:mb-16 lg:order-9">
                        <h3 className="service-heading-3 mb-4 sm:mb-6">Website Package</h3>
                        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <li className="service-body-text text-base sm:text-lg">1. Website UX/UI Design</li>
                            <li className="service-body-text text-base sm:text-lg">2. Website Development</li>
                            <li className="service-body-text text-base sm:text-lg">3. Search engine optimization (SEO)
                            </li>
                            <li className="service-body-text text-base sm:text-lg">4. Digital Marketing</li>
                        </ul>
                        <button
                            onClick={() => handleServiceClick("Website Package", [
                                "Website UX/UI Design",
                                "Website Development",
                                "Search engine optimization (SEO)",
                                "Digital Marketing"
                            ])}
                            className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 inline-block text-center no-underline"
                        >
                            Order Now
                        </button>
                    </div>

                    {/* Sixth Row: Maintenance Package */}
                    <div
                        className="mb-6 sm:mb-8 lg:mb-16 bg-white rounded-3xl shadow-2xl py-10 px-8 lg:order-11 transition-transform duration-300 hover:scale-105">
                        <img
                            src={wheelImage}
                            alt="Maintenance Package"
                            className="w-full h-auto p-4"
                        />
                    </div>
                    <div className="mb-6 sm:mb-8 lg:mb-16 lg:order-12">
                        <h3 className="service-heading-3 mb-4 sm:mb-6">Maintenance Package</h3>
                        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <li className="service-body-text text-base sm:text-lg">1. Website Maintenance</li>
                            <li className="service-body-text text-base sm:text-lg">2. Mobile App Maintenance</li>
                        </ul>
                        <button
                            onClick={() => handleServiceClick("Maintenance Package", [
                                "Website Maintenance",
                                "Mobile App Maintenance"
                            ])}
                            className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 inline-block text-center no-underline"
                        >
                            Order Now
                        </button>
                    </div>
                </div>
            </div>

            {showModal && selectedService && (
                <ServiceOrderModal
                    onClose={() => setShowModal(false)}
                    serviceTitle={selectedService.title}
                    serviceDescription={selectedService.description}
                />
            )}
        </section>
    );
};

export default ServiceWeOffer;
