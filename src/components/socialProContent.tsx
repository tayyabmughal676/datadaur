import React from 'react';

import socialproOutcomesImg from "../assets/socialpro-outcomes.svg";
import existinAppImg from "../assets/existing-app.svg";
import emojisImg from "../assets/emojis.svg";
import workflowImg from "../assets/workflow-1.svg";
import workflowIIImg from "../assets/workflow-2.svg";
import workflowIIIImg from "../assets/workflow-3.svg";
import projectDashImg from "../assets/p-dash.png";
import projectForecastImg from "../assets/forecast.png";
import projReportImg from "../assets/m-report.png";
import labourHourImg from "../assets/labor-hour.png";
import socialSpendImg from "../assets/social-spend.png";
import localContentImg from "../assets/local-con.png";
import setting1Img from "../assets/setting-1.svg";
import setting2Img from "../assets/setting-2.svg";
import setting3Img from "../assets/setting-3.svg";
import setting4Img from "../assets/setting-4.svg";
import thinkImg from "../assets/think-img.svg";


const SocialProContent: React.FC = () => {
    return (
        <div className="bg-white text-black">
            <div className="max-w-7xl mx-auto px-10 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-12">
                {/* Header */}
                <div className="mb-8 sm:mb-12">
                    <h1 className="font-medium text-3xl sm:text-4xl lg:text-5xl gradient-text leading-tight mb-2">
                        Designing for Impact: Streamlining Social Procurement with SocialPro
                    </h1>
                </div>
                <div className="mb-8 sm:mb-12">
                    <div className="bg-gradient-note border-l-4 border-gradient-primary md:px-12 p-3 sm:p-4 rounded-lg">
                        <h3 className="text-[#604CC3] text-base sm:text-lg lg:text-xl mb-4">
                            <strong>About Client</strong>
                        </h3>
                        <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl mb-4">
                            <strong className="text-[#604CC3]">Client:</strong> SocialPro
                        </p>
                        <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl mb-4">
                            <strong className="text-[#604CC3]">Project:</strong> Designing a SaaS platform for social procurement reporting
                        </p>
                        <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl mb-4">
                            <strong className="text-[#604CC3]">My Role:</strong> Product Designer
                        </p>
                        <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl mb-4">
                            <strong className="text-[#604CC3]">Summary:</strong> SocialPro is a cloud-based platform enabling construction companies and infrastructure projects to measure, manage, and report on social impact and sustainable procurement performance. As the UX/UI Designer, I was responsible for crafting intuitive interfaces that streamline complex reporting processes, ensuring compliance with national frameworks like Indigenous Procurement Policies and Local Jobs First initiatives.
                        </p>
                    </div>
                </div>

                <div className="mb-8 sm:mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-2 lg:mb-2">
                        {/* Text Content - Left Side */}
                        <div className="order-2 lg:order-1 self-start">
                            <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text leading-tight mb-12">
                                The Outcome
                            </h2>

                            <div className="space-y-4">
                                <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl">
                                    By implementing user-centered design principles, we enhanced the platform's usability,
                                    leading to increased user engagement and compliance rates.
                                    The intuitive dashboards and reporting tools received positive feedback from stakeholders,
                                    contributing to SocialPro's adoption across over <span className="text-[#604CC3]">175 companies managing more than $10 billion in projects</span>.
                                </p>
                            </div>
                        </div>

                        {/* Image - Right Side */}
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                <img
                                    src={socialproOutcomesImg}
                                    alt="Social Pro Outcomes"
                                    className="w-full h-auto transition-transform duration-300 hover:scale-90"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            Understanding the Problem
                        </h2>
                    </div>
                    <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl">
                        Contractors found the reporting tools cluttered and time-consuming, often struggling to
                        track key metrics like <span className="text-[#604CC3]">Indigenous spend across multiple projects</span>. Subcontractors, especially
                        those new to digital systems, felt overwhelmed during onboarding and unsure about which
                        information was required. Meanwhile, compliance officers lacked real-time visibility and c
                        ollaboration tools, leading to delays and miscommunication. Across the board, users faced friction that
                        hindered efficiency and trust in the platform.
                    </p>
                </div>

                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            My Role as a UX/UI Designer
                        </h2>
                    </div>
                    <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl">
                        I collaborated closely with the product manager and lead designer to deliver a user-friendly experience across key areas of the SocialPro platform. My responsibilities included contributing to user research, creating wireframes and interactive prototypes, and refining UI components based on user feedback. I played a key role in translating complex reporting workflows into intuitive design solutions, while ensuring consistency with the platform’s overall design system.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 sm:mb-12">
                    <div className="order-2 lg:order-1">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl mb-4 gradient-text">
                            Understanding User's Pain Points
                        </h2>
                        <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl">
                            Through user interviews and usability testing, we identified pain points in the reporting workflow. Users expressed frustration with the complexity of data entry, spending across the multiple projects, and the lack of clarity in report generation. These insights guided our design decisions, focusing on simplifying interactions and enhancing clarity.                        </p>
                    </div>

                    {/* Image */}
                    <div className="order-1 lg:order-2">
                        <div className="relative">
                            <img
                                src={existinAppImg}
                                alt="Team collaboration"
                                className="w-full h-full rounded-2xl transition-transform duration-300 hover:scale-90"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-8">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            Mapping the User Journey
                        </h2>
                    </div>
                    <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl mb-8">
                        We created detailed user journey maps to visualize the end-to-end experience.
                        This process highlighted critical touchpoints where users encountered difficulties,
                        allowing us to target specific areas for improvement.
                    </p>
                    <div className="relative">
                        <img
                            src={emojisImg}
                            alt="Team collaboration"
                            className="w-full h-full rounded-2xl transition-transform duration-300 hover:scale-90"
                        />
                    </div>
                </div>

                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-8">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            Mapping the User Journey
                        </h2>
                    </div>
                    <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl mb-8">
                        We created detailed user journey maps to visualize the end-to-end experience.
                        This process highlighted critical touchpoints where users encountered difficulties,
                        allowing us to target specific areas for improvement.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
                        <div className="relative">
                            <img
                                src={workflowImg}
                                alt="Workflow Phase 1"
                                className="w-full h-auto rounded-2xl transition-transform duration-300 hover:scale-90"
                            />
                        </div>
                        <div className="relative">
                            <img
                                src={workflowIIImg}
                                alt="Workflow Phase 2"
                                className="w-full h-auto rounded-2xl transition-transform duration-300 hover:scale-90"
                            />
                        </div>
                        <div className="relative">
                            <img
                                src={workflowIIIImg}
                                alt="Workflow Phase 3"
                                className="w-full h-auto rounded-2xl transition-transform duration-300 hover:scale-90"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-8 sm:mb-12 md:mb-16">
                    <div className="mb-8 sm:mb-12 md:mb-16">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            Visual Showcase
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        <div className=" lg:order-2">
                            <img
                                src={projectDashImg}
                                alt="Development & IT Consultations"
                                className="w-full h-auto transition-transform duration-300 hover:scale-90"
                            />
                        </div>

                        <div className=" lg:order-1">
                            <h3 className="service-heading-3 mb-4 sm:mb-6">
                                1. Project Dashboard
                            </h3>
                            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                <p className="service-body-text">
                                    A detailed control center highlighting key metrics such as workforce, spend, and Local Content.
                                </p>
                            </div>
                        </div>

                        <div className="lg:order-3">
                            <img
                                src={projectForecastImg}
                                alt="AI Agent Development Package"
                                className="w-full h-auto transition-transform duration-300 hover:scale-90"
                            />
                        </div>

                        <div className=" lg:order-4">
                            <h3 className="service-heading-3 mb-4 sm:mb-6">
                                2. Forecasting
                            </h3>
                            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                <p className="service-body-text">
                                    Help users anticipate targets and monitor key metrics like labour hours, spend, and local content in real time.
                                </p>
                            </div>
                        </div>

                        <div className="lg:order-6">
                            <img
                                src={projReportImg}
                                alt="AI Model Context Protocol MCP Package"
                                className="w-full h-full transition-transform duration-300 hover:scale-90"
                            />
                        </div>

                        <div className=" lg:order-5">
                            <h3 className="service-heading-3 mb-4 sm:mb-6">3. Project Reporting</h3>
                            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                <p className="service-body-text">
                                    The redesigned Project Reporting module allows users to generate monthly reports for Labour Hours, Spend, and Local Content with ease. This was a key focus area in the redesign, as users consistently expressed frustration and confusion with the previous reporting experience.
                                </p>
                            </div>

                        </div>

                        <div className="lg:order-7">
                            <img
                                src={labourHourImg}
                                alt="Mobile Application Development Package"
                                className="w-full h-auto transition-transform duration-300 hover:scale-90"
                            />
                        </div>

                        <div className=" lg:order-8">
                            <h3 className="service-heading-3 mb-4 sm:mb-6">3.1. Labour Hours</h3>
                            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                <p className="service-body-text">
                                    Labour hours can now be managed directly through interactive tables, simplifying the submission process and removing the need for separate forms.
                                </p>
                            </div>

                        </div>

                        <div className="lg:order-10">
                            <img
                                src={socialSpendImg}
                                alt="Website Package"
                                className="w-full h-auto transition-transform duration-300 hover:scale-90"
                            />
                        </div>

                        <div className=" lg:order-9">
                            <h3 className="service-heading-3 mb-4 sm:mb-6">3.2. Social Spend</h3>
                            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                <p className="service-body-text">
                                    Users can now seamlessly add and manage Social Spend records through a structured, guided form — eliminating confusion around data entry. The interface allows users to search for suppliers by ABN, select certifications, enter invoice details, and upload supporting documents all in one place. Spend entries appear instantly in a table for easy review, with the ability to filter, edit, or remove records before submission. This design simplifies compliance tracking and improves data accuracy, making monthly reporting faster and more reliable.
                                </p>
                            </div>

                        </div>

                        <div className="lg:order-11">
                            <img
                                src={localContentImg}
                                alt="Maintenance Package"
                                className="w-full h-auto transition-transform duration-300 hover:scale-90"
                            />
                        </div>

                        <div className=" lg:order-12">
                            <h3 className="service-heading-3 mb-4 sm:mb-6">3.3. Local Content</h3>
                            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                <p className="service-body-text">
                                    A simplified interface lets users add and manage local content items with ease. Users can allocate contract values, assign suppliers, and track progress toward targets—all in one place. The new side panel allows quick item selection, improving clarity and reducing reporting errors.
                                </p>
                            </div>
                        </div>

                        <div className="lg:order-13">
                            <img
                                src={socialSpendImg}
                                alt="Website Package"
                                className="w-full h-auto transition-transform duration-300 hover:scale-90"
                            />
                        </div>

                        <div className=" lg:order-12">
                            <h3 className="service-heading-3 mb-4 sm:mb-6">3.4. Report Confirmation</h3>
                            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                <p className="service-body-text">
                                    And lastly, Users can confirm the report submission by agreeing to terms and conditions.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="mb-2 sm:mb-4 md:mb-6">
                            <h3 className="service-heading-3 mb-4 sm:mb-6">
                                4. Quick walkthrough the rest of the design
                            </h3>
                            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                <p className="service-body-text">
                                    And lastly, Users can confirm the report submission by agreeing to terms and conditions.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="">
                                <img
                                    src={setting1Img}
                                    alt="Development & IT Consultations"
                                    className="w-full h-auto transition-transform duration-300 hover:scale-90"
                                />
                            </div>
                            <div className="">
                                <img
                                    src={setting2Img}
                                    alt="AI Agent Development Package"
                                    className="w-full h-auto transition-transform duration-300 hover:scale-90"
                                />
                            </div>
                            <div className="">
                                <img
                                    src={setting3Img}
                                    alt="AI Model Context Protocol MCP Package"
                                    className="w-full h-full transition-transform duration-300 hover:scale-90"
                                />
                            </div>

                            <div className="">
                                <img
                                    src={setting4Img}
                                    alt="Mobile Application Development Package"
                                    className="w-full h-auto transition-transform duration-300 hover:scale-90"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-8">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            Testimonial
                        </h2>
                    </div>
                    <div className="bg-gradient-note border-l-4 border-gradient-primary md:px-12 p-6 sm:p-8 rounded-lg">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex gap-4 md:flex-col justify-center items-center">
                                <img src={thinkImg} alt="Think Icons" className=" transition-transform duration-300 hover:scale-90"/>
                            </div>

                            <div className="flex-1">
                                <p className="text-[#604CC3] leading-relaxed text-base sm:text-lg lg:text-xl mb-6">
                                    "Managing multiple builders with diverse returnable systems used to be a challenge. SocialPro has transformed the process, ensuring clarity, efficiency, and seamless collaboration across all our projects. Their intuitive platform streamlines reporting, enabling better decision-making and improved outcomes at every stage."
                                </p>

                                <div className="mt-6">
                                    <p className="text-[#604CC3] text-lg sm:text-xl font-semibold mb-1">
                                        Ana Buljubasic
                                    </p>
                                    <p className="text-[#604CC3] text-base sm:text-lg">
                                        Contracts Administrator, Stilcon
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8 sm:mb-12">
                    <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text mb-8">
                        The Outcome
                    </h2>

                    <p className="font-normal text-lg lg:text-[28px] text-black">
                        Post-launch analytics revealed a <span className="text-[#604CC3]">30%</span> decrease in
                        report submission time and a <span className="text-[#604CC3]">25%</span> increase in user satisfaction scores.
                        The adoption rate surged, highlighting the effectiveness of user-centered design in driving business outcomes.
                        Today, SocialPro supports over <span className="text-[#604CC3]">$10B+</span> worth of projects,
                        with more than <span className="text-[#604CC3]">340,000</span> workforce entries and <span className="text-[#604CC3]">1,870</span> reports successfully submitted.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default SocialProContent;