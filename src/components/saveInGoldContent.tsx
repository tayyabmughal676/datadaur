import React from 'react';

import shuftiproImg from "../assets/shuftipro.svg";
import existinAppImg from "../assets/existing-app.svg";
import mobilesGroupImages from "../assets/mobile-group-6.svg";
import fullAppImages from "../assets/full-app-shots.svg";
import craditPartIImg from "../assets/credit-part1.svg"
import craditPartIIImg from "../assets/credit-part-2.svg"
import craditPartIIIImg from "../assets/credit-part3.svg"
import thinkImg from "../assets/think-img.svg"


const SaveInGoldContent: React.FC = () => {
    return (
        <div className="bg-white text-black">
            <div className="max-w-7xl mx-auto px-10 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-12">
                {/* Header */}
                <div className="mb-8 sm:mb-12">
                    <h1 className="font-medium text-3xl sm:text-4xl lg:text-5xl gradient-text leading-tight mb-2">
                        SaveInGold — Redesigning Trust & Simplicity in Digital Gold Investing
                    </h1>
                    <p className="text-black/80 leading-relaxed text-lg sm:text-xl lg:text-2xl mr-4">
                        SaveInGold is a trusted name in the gold trading industry, offering customers a secure and
                        reliable way to invest in and trade gold. The company specializes in gold trading services,
                        portfolio management, and gifting options. With a vision to provide a seamless digital
                        experience, SaveInGold aims to bridge the gap between traditional trading methods and modern,
                        tech-driven financial services.
                    </p>
                </div>
                <div className="mb-8 sm:mb-12">
                    <div className="bg-gradient-note border-l-4 border-gradient-primary md:px-12 p-3 sm:p-4 rounded-lg">
                        <h3 className="text-[#604CC3] text-base sm:text-lg lg:text-xl mb-4">
                            <strong>About Client</strong>
                        </h3>
                        <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl mb-4">
                            <strong className="text-[#604CC3]">Client:</strong> SaveInGold FZCO
                        </p>
                        <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl mb-4">
                            <strong className="text-[#604CC3]">Project:</strong> Improve the on-boarding experience and
                            redesign the app.
                        </p>
                        <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl mb-4">
                            <strong className="text-[#604CC3]">My Role:</strong> UX Designer
                        </p>
                        <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl mb-4">
                            <strong className="text-[#604CC3]">Summary:</strong> SaveInGold is a fintech platform
                            enabling users in the UAE to invest in physical gold digitally. I was brought in to
                            completely overhaul the app’s UX/UI, with a focus on simplifying the user experience,
                            rebuilding the fragmented registration flow, and designing a new debit card feature that
                            allows users to fund the card through gold sales or bank transfers. The result was a modern,
                            intuitive, and trustworthy app experience optimized for both new and returning users.
                        </p>
                    </div>
                </div>

                <div className="mb-8 sm:mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl gradient-text leading-tight">
                                Understand the Problem
                            </h2>

                            <div className="space-y-6 text-black">
                                <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                                    SaveInGold is a UAE-based fintech platform that allows users to buy, sell, and store
                                    physical gold digitally. Despite its powerful backend infrastructure, the app
                                    struggled with two major issues:
                                </p>

                                <ul className="space-y-4 ml-4">
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                                            A cluttered, inconsistent, and overwhelming user experience
                                        </p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                                            A poor registration flow that redirected users to external websites —
                                            leading to high drop-off rates and a lack of user trust
                                        </p>
                                    </li>
                                </ul>

                                <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                                    The client wanted to redesign the application with a clean, intuitive experience
                                    that emphasized in-app onboarding and introduced a major new feature: a debit card
                                    linked to users' gold assets.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                <img
                                    src={shuftiproImg}
                                    alt="" className=" transition-transform duration-300 hover:scale-90"/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mb-8 sm:mb-12">
                    <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text mb-6">
                        The Goal
                    </h2>
                    <ul className="w-full lg:w-[90%] ml-3">
                        <li className="flex items-start text-black text-base sm:text-lg lg:text-xl leading-relaxed">
                            <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                            <span>Fully integrate the registration process within the app to <span className="font-semibold text-[#604CC3]">eliminate external redirects</span>.</span>
                        </li>
                        <li className="flex items-start text-black text-base sm:text-lg lg:text-xl leading-relaxed">
                            <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                            <span>Simplify and declutter the <span className="font-semibold text-[#604CC3]">overall user experience</span> for easier navigation and usability.</span>
                        </li>
                        <li className="flex items-start text-black text-base sm:text-lg lg:text-xl leading-relaxed">
                            <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                            <span>Design a modern, trustworthy UI aligned with fintech standards and user trust.</span>
                        </li>
                        <li className="flex items-start text-black text-base sm:text-lg lg:text-xl leading-relaxed">
                            <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                            <span>Introduce and design a new <span className="font-semibold text-[#604CC3]">debit card feature</span>, allowing users to:</span>
                        </li>
                        <li className="flex items-start text-black text-base sm:text-lg lg:text-xl leading-relaxed">
                            <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                            <span>Sell gold assets and fund the card instantly.</span>
                        </li>
                        <li className="flex items-start text-black text-base sm:text-lg lg:text-xl leading-relaxed">
                            <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                            <span>Top up the card via direct bank transfers.</span>
                        </li>
                        <li className="flex items-start text-black text-base sm:text-lg lg:text-xl leading-relaxed">
                            <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                            <span>Manage card activity directly within the app.</span>
                        </li>
                    </ul>
                </div>

                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            My Role as a UX/UI Designer
                        </h2>
                    </div>
                    <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl">
                        As the sole UX/UI designer on this project, my role was to lead the end-to-end redesign of the
                        SaveInGold mobile application. I was responsible for analyzing the existing application,
                        identifying UX flaws, and conducting user interviews to uncover pain points. I then led the
                        redesign process and collaborated closely with the development team and product owners to bring
                        the new experience to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 sm:mb-12">
                    <div className="order-2 lg:order-1">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl mb-4 gradient-text">
                            Analyzing the Existing Application
                        </h2>
                        <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl">
                            To begin, I conducted a full audit of the existing app to understand where users were
                            struggling. The app was overloaded with unnecessary elements, and key user flows —
                            especially onboarding — were unclear and fragmented. To validate and expand on these
                            findings, I conducted user interviews with a group of current and potential users. These
                            sessions helped surface key usability concerns and build empathy around user needs. The most
                            common issues centered around trust, app clutter, and confusion during critical tasks like
                            registration and payments. </p>
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
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            User Flow: Mapping a Frictionless Journey
                        </h2>
                    </div>
                    <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl">
                        Designing the user flow allowed me to define a clear and logical path for users, ensuring every
                        action feels seamless and intuitive. By breaking down each step—from onboarding and KYC
                        verification to trading and fund management—I was able to anticipate user needs and eliminate
                        unnecessary friction. This structured approach helped in refining the app’s functionality,
                        making sure both traditional investors and active traders can navigate effortlessly and complete
                        transactions with ease.
                    </p>
                </div>

                <div className="mb-8 sm:mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-2 lg:mb-2">
                        {/* Text Content - Left Side */}
                        <div className="order-2 lg:order-1 self-start">
                            <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text mb-12">
                                The Solution
                            </h2>

                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg lg:text-[28px] text-black">
                                    Old registration flow
                                </h3>

                                <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl">
                                    Previously, users were redirected to an external browser to complete the signup
                                    process—a jarring experience that broke trust and led to a significant drop-off
                                    rate.
                                </p>
                            </div>
                        </div>

                        {/* Mobile Screens Image - Right Side */}
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                <img
                                    src={mobilesGroupImages}
                                    alt="Old registration flow mobile screens"
                                    className="w-full h-auto transition-transform duration-300 hover:scale-90"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="space-y-4 py-12 lg:py12">
                            <h3 className="font-semibold text-lg lg:text-[28px] text-black">
                                Redesigned Registration flow
                            </h3>
                            <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl">
                                By fully integrating the registration process into the app itself, we were able to
                                retain user attention and build a consistent experience from the very start. The new
                                flow eliminated unnecessary steps, such as external redirects and redundant form fields,
                                allowing users to register quickly and confidently. Fingerprint
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src={fullAppImages}
                                alt="Old registration flow mobile screens"
                                className="w-full h-auto transition-transform duration-300 hover:scale-90"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="space-y-4 py-12 lg:py12">
                            <h3 className="font-semibold text-lg lg:text-[28px] text-black">
                                Debit Card Integration
                            </h3>
                            <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl">
                                The debit card feature was a newly introduced addition to the app and did not exist in
                                the previous design. To support this, a dedicated section was created where users can
                                easily manage their card—add funds from their gold assets or linked bank account, view
                                transaction history, check card status, and access support. The interface was designed
                                with intuitive CTAs and trust-building patterns to ensure clarity and ease of use from
                                day one.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src={craditPartIImg}
                                alt="Old registration flow mobile screens"
                                className="w-full h-auto mb-12 transition-transform duration-300 hover:scale-90"
                            />
                            <img
                                src={craditPartIIImg}
                                alt="Old registration flow mobile screens"
                                className="w-full h-auto transition-transform duration-300 hover:scale-90"
                            />
                        </div>
                        <div className="py-10 lg:py-12">
                            <p className="font-normal text-lg lg:text-[28px] text-black mb-8">
                                Card Control feature such as block the card or resetting the pin was considered
                                essential to have in case of card getting lost or stolen.
                            </p>
                            <div className="relative">
                                <img
                                    src={craditPartIIIImg}
                                    alt="Old registration flow mobile screens"
                                    className="w-full h-auto mb-12 transition-transform duration-300 hover:scale-90"
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
                                    "Asim joined our project at a time when we were rethinking how users first
                                    experience our app. I needed someone who could work independently, challenge
                                    assumptions, and bring clarity to complex design decisions—and that's
                                    exactly what Asim delivered. He redesigned the registration flow with a
                                    clear focus on simplicity and user needs, and introduced the new debit card
                                    feature in a way that felt thoughtful and well-integrated."
                                </p>

                                <div className="mt-6">
                                    <p className="text-[#604CC3] text-lg sm:text-xl font-semibold mb-1">
                                        Amro Jabar
                                    </p>
                                    <p className="text-[#604CC3] text-base sm:text-lg">
                                        COO, SaveInGold
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
                        Redesigning the registration flow had a significant impact on user retention. By removing
                        unnecessary steps and integrating the registration process directly into the app, we reduced
                        drop-off during sign-up by
                        <span className="text-[#604CC3]"> 42%</span>.
                        The streamlined experience led to a
                        <span className="text-[#604CC3]"> 28%</span>
                        increase in completed registrations and a
                        <span className="text-[#604CC3]"> 35%</span>
                        uplift in week-one user retention. This not only helped us retain users who were previously
                        abandoning the process but also laid a stronger foundation for long-term engagement and
                        product adoption.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default SaveInGoldContent;