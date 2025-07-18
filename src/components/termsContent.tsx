import React from 'react';


const termsContent: React.FC = () => {
    return (
        <div className="bg-white text-black">
            <div className="max-w-7xl mx-auto px-10 sm:px-8 md:px-10 lg:px-12 py-8">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="font-medium text-3xl sm:text-4xl lg:text-5xl mb-2">
                        Our Term & Conditions
                    </h1>
                    <p className="text-black/80 leading-relaxed text-lg sm:text-xl lg:text-2xl">
                        Last updated: June 4, 2025
                    </p>
                </div>

                {/* Section 1: Who We Are */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            1. Introduction
                        </h2>
                    </div>
                    <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl">
                        Welcome to <strong>DataDaur</strong>. These Terms and Conditions ("Terms") govern your use of
                        our website and services. By accessing or using our platform, you agree to comply with these
                        Terms. If you disagree with any part of the terms, you may not access the site.
                    </p>
                </div>

                {/* Section 2: Information We Collect */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            2. About DataDaur
                        </h2>
                    </div>
                    <div>
                        <p className="text-black leading-relaxed mb-4 text-base sm:text-lg lg:text-xl">
                            DataDaur is a UAE-based digital solutions provider with over 5 years of experience in IT
                            management, AI development, software engineering, and web/mobile app development. We provide
                            innovative, reliable, and secure technology services to clients globally.
                        </p>
                    </div>
                </div>

                {/* Section 3: How We Use Your Information */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            3. Use of Our Services
                        </h2>
                    </div>
                    <div>
                        <p className="text-black leading-relaxed mb-4 text-base sm:text-lg lg:text-xl">
                            We use your information to:
                        </p>
                        <ul className="space-y-2 ml-2 sm:ml-4">
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Services are provided solely for business and professional use.
                            </li>
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                You agree not to misuse or exploit any content, code, or service provided by DataDaur.
                            </li>
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Unauthorized access, reverse engineering, or automated data extraction is strictly
                                prohibited.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Section 4: Cookies and Tracking */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            4. Intellectual Property
                        </h2>
                    </div>
                    <div>
                        <p className="text-black leading-relaxed mb-4 text-base sm:text-lg lg:text-xl">
                            All content, graphics, software, and materials on this site are the intellectual property of
                            DataDaur unless otherwise stated. Reproduction, distribution, or modification of any
                            material without written consent is forbidden.
                        </p>
                    </div>
                </div>

                {/* Section 5. User Responsibilities */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            5. User Responsibilities
                        </h2>
                    </div>
                    <div>
                        <ul className="space-y-2 ml-2 sm:ml-4">
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                You are responsible for ensuring that your use of our services complies with applicable
                                laws and regulations.
                            </li>
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Any data or files uploaded through forms must not infringe on third-party rights or
                                contain malware.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Section 6. Service Modifications and Availability */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            6. Service Modifications and Availability
                        </h2>
                    </div>
                    <div>
                        <p className="text-black leading-relaxed mb-4 text-base sm:text-lg lg:text-xl">
                            We reserve the right to modify or discontinue services temporarily or permanently without
                            notice. While we strive for uninterrupted availability, we are not liable for downtime or
                            technical issues caused by third-party providers.
                        </p>
                    </div>
                </div>

                {/* Section 7. Limitation of Liability */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            7. Limitation of Liability
                        </h2>
                    </div>
                    <div>
                        <p className="text-black leading-relaxed mb-4 text-base sm:text-lg lg:text-xl">
                            DataDaur shall not be liable for any indirect, incidental, or consequential damages
                            resulting from your use of our services. All services are provided "as is" without
                            warranties of any kind unless explicitly stated.
                        </p>
                    </div>
                </div>

                {/* Section 8. Indemnification */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            8. Indemnification
                        </h2>
                    </div>
                    <p className="text-black leading-relaxed ml-0 sm:ml-12 text-base sm:text-lg lg:text-xl">
                        You agree to indemnify and hold harmless DataDaur, its affiliates, and employees from any
                        claims, losses, or damages resulting from your violation of these Terms or misuse of services.
                    </p>
                </div>

                {/* Section 9. Governing Law */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            9. Governing Law
                        </h2>
                    </div>
                    <p className="text-black leading-relaxed ml-0 sm:ml-12 text-base sm:text-lg lg:text-xl">
                        These Terms are governed by the laws of the United Arab Emirates. Any disputes shall be subject
                        to the exclusive jurisdiction of the courts in Dubai.
                    </p>
                </div>

                {/* Section 10. Changes to Terms */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            10. Changes to Terms
                        </h2>
                    </div>
                    <p className="text-black leading-relaxed ml-0 sm:ml-12 text-base sm:text-lg lg:text-xl">
                        We may revise these Terms periodically. Continued use of the site after changes implies your
                        acceptance of the revised Terms. We recommend reviewing this page regularly.
                    </p>
                </div>

                {/* Section 11: Contact Information */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            11. Contact Information
                        </h2>
                    </div>
                    <div className="ml-0 sm:ml-12">
                        <p className="text-black leading-relaxed mb-4 text-base sm:text-lg lg:text-xl">
                            For any questions or concerns about these Terms, please contact us:
                        </p>
                        <ul className="space-y-2 ml-2 sm:ml-4 mb-4">
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>
                                    <strong>Email: </strong>
                                    <a className="hover:text-[#604CC3] underline"
                                       href="mailto:contact@datadaur.com">contact@datadaur.com</a>
                                </span>
                            </li>
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>
                                    <strong>Website: </strong>
                                    <a className="hover:text-[#604CC3] underline" href="#">www.datadaur.com</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default termsContent;
