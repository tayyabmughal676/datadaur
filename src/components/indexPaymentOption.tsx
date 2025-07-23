import React from 'react';
import {cn} from '../lib/utils';

// Import payment option logos
import upworkLogo from '../assets/upwork-logo.svg';
import payoneerLogo from '../assets/payoneer-logo.svg';
import paypalLogo from '../assets/paypal-logo.svg';
import wiseLogo from '../assets/wise-logo.svg';
import stripeLogo from '../assets/stripe-logo.svg';

// Import tech icons for first row
import nodeLogo from '../assets/nodejs-logo.svg';
import pythonLogo from '../assets/python-logo.svg';
import flutterLogo from '../assets/flutter-logo.svg';
import seleniumLogo from '../assets/selenium-logo.svg';
import nextjsLogo from '../assets/nextjs-logo.svg';
import analyticsLogo from '../assets/google-ana.svg';
import reactLogo from '../assets/react.svg';


// Import tech icons for second row
import appiumLogo from '../assets/appiumconf-logo.svg';
import woocommerceLogo from '../assets/WooCommerce.svg';
import threeSixtyLogo from '../assets/SOC2-Logo.svg';
import zapLogo from '../assets/zap-logo.svg';
import youtubeLogo from '../assets/youtube-logo.svg';
import apifyLogo from '../assets/apify-logo.svg';
import hl7Logo from '../assets/fhir-logo.svg';
import typescriptLogo from "../assets/typescript-logo.svg";
import type {JSX} from 'react/jsx-runtime';


interface PaymentOptionsProps {
    className?: string;
}

interface IconProps {
    src: string;
    alt: string;
    name: string;
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({className}) => {
    const paymentOptions: IconProps[] = [
        {src: upworkLogo, alt: 'Upwork', name: 'upwork'},
        {src: payoneerLogo, alt: 'Payoneer', name: 'payoneer'},
        {src: paypalLogo, alt: 'PayPal', name: 'paypal'},
        {src: wiseLogo, alt: 'Wise', name: 'wise'},
        {src: stripeLogo, alt: 'Stripe', name: 'stripe'},
    ];

    const firstRowIcons: IconProps[] = [
        {src: nodeLogo, alt: 'Node.js', name: 'nodejs'},
        {src: pythonLogo, alt: 'Python', name: 'python'},
        {src: flutterLogo, alt: 'Flutter', name: 'flutter'},
        {src: seleniumLogo, alt: 'Selenium', name: 'selenium'},
        {src: nextjsLogo, alt: 'Next.js', name: 'nextjs'},
        {src: analyticsLogo, alt: 'Google Analytics', name: 'analytics'},
        {src: reactLogo, alt: 'React Native', name: 'react'},
    ];

    const secondRowIcons: IconProps[] = [
        {src: appiumLogo, alt: 'Appium', name: 'appium'},
        {src: woocommerceLogo, alt: 'WooCommerce', name: 'woocommerce'},
        {src: threeSixtyLogo, alt: '360', name: '360'},
        {src: zapLogo, alt: 'Zap', name: 'zap'},
        {src: youtubeLogo, alt: 'YouTube', name: 'youtube'},
        {src: typescriptLogo, alt: 'TypeScript', name: 'typescript'},
        {src: apifyLogo, alt: 'Apify', name: 'apify'},
        {src: hl7Logo, alt: 'HL7 FHIR', name: 'hl7'},
    ];

    const renderMarqueeIcons = (icons: IconProps[], repetitions: number, baseKey: string) => {
        const elements: JSX.Element[] = [];
        for (let i = 0; i < repetitions; i++) {
            icons.forEach((icon, index) => {
                elements.push(
                    <img
                        key={`${baseKey}-rep${i}-${icon.name}-${index}`}
                        src={icon.src}
                        alt={icon.alt}
                        // Apply icon styling here
                        className="h-10 w-auto object-contain icon-hover flex-shrink-0"
                    />
                );
            });
        }
        return elements;
    };

    const marqueeRepetitions = 8;

    return (
        <section className={cn('bg-white py-8', className)}>
            {/* This container is for centered content */}
            <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-black text-[24px] md:text-4xl lg:text-5xl font-medium mb-4">
                        Payment Options
                    </h2>
                    <p className=" service-body-text font-normal text-black text-lg">
                        Flexible, Secure, and Convenient Payment Methods
                    </p>
                </div>

                <div className="mb-16">
                    {/* Mobile Layout (< 640px) */}
                    <div className="sm:hidden">
                        <div className="grid grid-cols-2 gap-6">
                            {paymentOptions.slice(0, 4).map((option) => (
                                <div
                                    key={option.name}
                                    className='bg-white rounded-2xl p-8 drop-shadow-2xl hover:shadow-md transition-transform duration-300 hover:scale-105 flex items-center justify-center h-24'
                                >
                                    <img
                                        src={option.src}
                                        alt={option.alt}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-6">
                            {paymentOptions.slice(4, 5).map((option) => (
                                <div
                                    key={option.name}
                                    className='bg-white rounded-2xl p-8 drop-shadow-2xl hover:shadow-md transition-transform duration-300 hover:scale-105 flex items-center justify-center h-24 w-full max-w-[calc(50%-0.75rem)]'
                                >
                                    <img
                                        src={option.src}
                                        alt={option.alt}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tablet Layout (640px to 1024px) */}
                    <div className="hidden sm:block lg:hidden">
                        {/* First row: 3 items */}
                        <div className="grid grid-cols-3 gap-6 mb-6">
                            {paymentOptions.slice(0, 3).map((option) => (
                                <div
                                    key={option.name}
                                    className='bg-white rounded-2xl p-8 drop-shadow-2xl hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-24'
                                >
                                    <img
                                        src={option.src}
                                        alt={option.alt}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Second row: 2 items, centered */}
                        <div className="flex justify-center gap-6">
                            {paymentOptions.slice(3, 5).map((option) => (
                                <div
                                    key={option.name}
                                    className='bg-white rounded-2xl p-8 drop-shadow-2xl hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-24 w-full sm:w-1/3'
                                >
                                    <img
                                        src={option.src}
                                        alt={option.alt}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Layout (>= 1024px) */}
                    <div className="hidden lg:grid lg:grid-cols-5 gap-6">
                        {paymentOptions.map((option) => (
                            <div
                                key={option.name}
                                className='bg-white rounded-2xl p-8 drop-shadow-2xl hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-24'
                            >
                                <img
                                    src={option.src}
                                    alt={option.alt}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="overflow-hidden mb-8 animate-pause py-4">
                <div className="flex space-x-8 slide-left">
                    {renderMarqueeIcons(firstRowIcons, marqueeRepetitions, 'first-row')}
                </div>
            </div>

            <div className="overflow-hidden animate-pause py-4">
                <div className="flex space-x-8 slide-right">
                    {renderMarqueeIcons(secondRowIcons, marqueeRepetitions, 'second-row')}
                </div>
            </div>
        </section>
    );
};

export default PaymentOptions;
