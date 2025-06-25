import React from 'react';
import { cn } from '../lib/utils';
import pyramidImg from '../assets/pyramid.svg';
import blendImg from '../assets/blend.svg';
import brainImg from '../assets/brain.svg';
import flowerImage from '../assets/flower.svg';
import spinnerImage from '../assets/spinner.svg';
import wheelImage from '../assets/wheel.svg';

interface ServiceWeOfferProps {
    className?: string;
}

const ServiceWeOffer: React.FC<ServiceWeOfferProps> = ({ className }) => {
    return (
        <section className={cn("py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8", className)}>
            <div className="max-w-7xl p-8 mx-auto">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
                        Service We Offer
                    </h2>
                    <p className="service-body-text text-base sm:text-lg max-w-lg mx-auto">
                        Explore Our Comprehensive Range of Services Tailored to Your Needs
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">

                    {/* First Row: Development & IT Consultations */}
                    {/* Image - Mobile/Tablet First, Desktop Right */}
                    <div className="mb-6 sm:mb-8 lg:mb-16 bg-white rounded-3xl shadow-2xl p-4 lg:order-2">
                        <img
                            src={blendImg}
                            alt="Development & IT Consultations"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>

                    {/* Content - Mobile/Tablet Second, Desktop Left */}
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
                        <button className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                            Book Now
                        </button>
                    </div>

                    {/* Second Row: AI Agent Development Package */}
                    {/* Image - Mobile/Tablet First, Desktop Left */}
                    <div className="mb-6 sm:mb-8 lg:mb-16 bg-white rounded-3xl shadow-2xl py-10 px-8 lg:order-3">
                        <img
                            src={brainImg}
                            alt="AI Agent Development Package"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Content - Mobile/Tablet Second, Desktop Right */}
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

                        <div className="mb-4 sm:mb-6">
                            <div className="service-price-text mb-2">$3999.99<span className="text-lg align-super">*</span></div>
                            <p className="service-body-text text-sm">
                                This is minimum starting price for any project, the final price will based on project scope, timelines.
                            </p>
                        </div>

                        <button className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                            Order Now
                        </button>
                    </div>

                    {/* Third Row: AI Model Context Protocol MCP Package */}
                    {/* Image - Mobile/Tablet First, Desktop Right */}
                    <div className="mb-6 sm:mb-8 lg:mb-16 bg-white rounded-3xl shadow-2xl py-10 px-8 lg:order-6">
                        <img
                            src={pyramidImg}
                            alt="AI Model Context Protocol MCP Package"
                            className="w-full h-full rounded-lg"
                        />
                    </div>

                    {/* Content - Mobile/Tablet Second, Desktop Left */}
                    <div className="mb-6 sm:mb-8 lg:mb-16 lg:order-5">
                        <h3 className="service-heading-3 mb-4 sm:mb-6">AI Model Context Protocol MCP Package</h3>
                        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <li className="service-body-text text-base sm:text-lg">1. Customized Model Context Protocol</li>
                            <li className="service-body-text text-base sm:text-lg">2. Connected to any LLMs Model</li>
                            <li className="service-body-text text-base sm:text-lg">3. Connected to existing or new business</li>
                            <li className="service-body-text text-base sm:text-lg">4. Software Development based on MCP</li>
                        </ul>
                        <div className="mb-4 sm:mb-6">
                            <div className="service-price-text mb-2">$1999.99<span className="text-lg align-super">*</span></div>
                            {/* You can add a note paragraph here if needed, similar to AI Agent package */}
                        </div>
                        <button className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                            Order Now
                        </button>
                    </div>

                    {/* Fourth Row: Mobile Application Development Package */}
                    {/* Image - Mobile/Tablet First, Desktop Left */}
                    <div className="mb-6 sm:mb-8 lg:mb-16 bg-white rounded-3xl shadow-2xl py-10 px-8 lg:order-7">
                        <img
                            src={flowerImage}
                            alt="Mobile Application Development Package"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Content - Mobile/Tablet Second, Desktop Right */}
                    <div className="mb-6 sm:mb-8 lg:mb-16 lg:order-8">
                        <h3 className="service-heading-3 mb-4 sm:mb-6">Mobile Application Development Package</h3>
                        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <li className="service-body-text text-base sm:text-lg">1. Mobile App UI UX Design</li>
                            <li className="service-body-text text-base sm:text-lg">2. Mobile App Development</li>
                            <li className="service-body-text text-base sm:text-lg">3. Custom Backend Development & Deployment</li>
                            <li className="service-body-text text-base sm:text-lg">4. Publish App to AppStore & PlayStore</li>
                        </ul>
                        <div className="mb-4 sm:mb-6">
                            <div className="service-price-text mb-2">$2999.90<span className="text-lg align-super">*</span></div>
                            {/* You can add a note paragraph here if needed */}
                        </div>
                        <button className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                            Order Now
                        </button>
                    </div>

                    {/* Fifth Row: Website Package */}
                    {/* Image - Mobile/Tablet First, Desktop Right */}
                    <div className="mb-6 sm:mb-8 lg:mb-16 bg-white rounded-3xl shadow-2xl py-10 px-8 lg:order-10">
                        <img
                            src={spinnerImage}
                            alt="Website Package"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Content - Mobile/Tablet Second, Desktop Left */}
                    <div className="mb-6 sm:mb-8 lg:mb-16 lg:order-9">
                        <h3 className="service-heading-3 mb-4 sm:mb-6">Website Package</h3>
                        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <li className="service-body-text text-base sm:text-lg">1. Website UX/UI Design</li>
                            <li className="service-body-text text-base sm:text-lg">2. Website Development</li>
                            <li className="service-body-text text-base sm:text-lg">3. SEO</li>
                            <li className="service-body-text text-base sm:text-lg">4. Marketing</li>
                        </ul>
                        <div className="mb-4 sm:mb-6">
                            <div className="service-price-text mb-2">$1999.99<span className="text-lg align-super">*</span></div>
                            {/* You can add a note paragraph here if needed */}
                        </div>
                        <button className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                            Order Now
                        </button>
                    </div>

                    {/* Sixth Row: Maintenance Package */}
                    {/* Image - Mobile/Tablet First, Desktop Left */}
                    <div className="mb-6 sm:mb-8 lg:mb-16 bg-white rounded-3xl shadow-2xl py-10 px-8 lg:order-11">
                        <img
                            src={wheelImage}
                            alt="Maintenance Package"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Content - Mobile/Tablet Second, Desktop Right */}
                    <div className="mb-6 sm:mb-8 lg:mb-16 lg:order-12">
                        <h3 className="service-heading-3 mb-4 sm:mb-6">Maintenance Package</h3>
                        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <li className="service-body-text text-base sm:text-lg">1. Website Maintenance</li>
                            <li className="service-body-text text-base sm:text-lg">2. Mobile App Maintenance</li>
                        </ul>
                        <div className="mb-4 sm:mb-6">
                            <div className="service-price-text mb-2">$199.99<span className="text-lg align-baseline">/Month*</span></div>
                        </div>
                        <button className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceWeOffer;