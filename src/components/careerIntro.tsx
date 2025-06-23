// import React, { useState } from 'react';
import { cn } from '../lib/utils';

import introImg from '../assets/intro-img.jpg'


const CareerIntro = () => {
    return (
        <section className={cn('max-w-7xl mx-auto px-10 sm:px-10 lg:px-12  bg-white')}>
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-20">
                    <h2 className="font-medium text-3xl sm:text-4xl lg:text-[34px] text-black mb-4">
                        Our Introduction
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
                    <div>
                        <p className="font-normal text-base sm:text-lg text-black max-w-2xl mx-auto leading-relaxed">
                            With over five years of proven expertise, DataDaur stands at the intersection of software engineering, AI innovation, and user-centric design. We specialize in crafting custom solutions that are not only technically robust but also strategically aligned with your goals—whether it's building AI-powered agents, mobile applications, enterprise-grade websites, or delivering sharp IT consultations.
                            <br/>Every project we take on is guided by precision, clarity, and a commitment to delivering real-world value. Our unique offerings, including the Model Context Protocol (MCP) and AI Agent Development Packages, are designed to help businesses automate workflows, enhance decision-making, and scale with confidence.
                            <br/>Whether you’re a startup seeking to launch your first product or an enterprise modernizing legacy systems, DataDaur brings deep technical insight and a collaborative mindset to help you succeed in a fast-moving digital world.
                        </p>
                    </div>
                    <div className="relative flex items-center justify-center rounded-3xl overflow-hidden shadow-lg">
                        <img src={introImg} className="w-full h-full object-cover rounded-3xl" alt="Intro Image" />
                    </div>
                </div>

            </div>
        </section>

    );
};

export default CareerIntro;

//hello