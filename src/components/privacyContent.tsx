import React from 'react';

const PrivacyPolicyContent: React.FC = () => {
    return (
        <div className="bg-white text-black">
            <div className="max-w-7xl mx-auto px-10 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-12">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="font-medium text-3xl sm:text-4xl lg:text-5xl mb-2">
                        Our Privacy Policy
                    </h1>
                    <p className="text-black/80 leading-relaxed text-lg sm:text-xl lg:text-2xl">
                        Last updated: June 4, 2025
                    </p>
                </div>

                {/* Section 1: Who We Are */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            1. Who We Are
                        </h2>
                    </div>
                    <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl">
                        <strong>DataDaur</strong> is a technology company based in the UAE, specializing in IT
                        management, artificial intelligence engineering, web and mobile application development, and
                        cloud-based solutions. With over five years of proven experience, we are committed to delivering
                        secure, scalable, and user-focused technologies to clients around the world.
                    </p>
                </div>

                {/* Section 2: Information We Collect */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            2. Information We Collect
                        </h2>
                    </div>
                    <div>
                        <p className="text-black leading-relaxed mb-4 text-base sm:text-lg lg:text-xl">
                            We collect personal and technical information to support communication, service delivery,
                            and analytics. This includes:
                        </p>
                        <ul className="space-y-2 ml-2 sm:ml-4 mb-4">
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Contact information (name, email, phone number, company)
                            </li>
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Project and service-related submissions
                            </li>
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                IP address, browser type, and device details
                            </li>
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Interaction data collected through cookies and analytics tools
                            </li>
                        </ul>
                        <div className="bg-gradient-note border-l-4 border-gradient-primary p-3 sm:p-4 rounded-lg">
                            <p className="text-black text-base sm:text-lg lg:text-xl">
                                <strong>Note:</strong> You voluntarily provide most information through our contact or
                                inquiry
                                forms.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 3: How We Use Your Information */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            3. How We Use Your Information
                        </h2>
                    </div>
                    <div>
                        <p className="text-black leading-relaxed mb-4 text-base sm:text-lg lg:text-xl">
                            We use your information to:
                        </p>
                        <ul className="space-y-2 ml-2 sm:ml-4">
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Understand project requirements and provide accurate estimates
                            </li>
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Offer personalized technology solutions and demonstrations
                            </li>
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Improve platform performance and usability
                            </li>
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Send updates and promotional offers (with your consent)
                            </li>
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Comply with legal and regulatory requirements
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Section 4: Cookies and Tracking */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            4. Cookies and Tracking
                        </h2>
                    </div>
                    <div>
                        <p className="text-black leading-relaxed mb-4 text-base sm:text-lg lg:text-xl">
                            Cookies help us analyze usage behavior and enhance your experience. We use:
                        </p>
                        <ul className="space-y-2 ml-2 sm:ml-4 mb-4">
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <strong>Essential cookies</strong> for basic site functionality
                            </li>
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <strong>Analytics cookies</strong> (e.g., Google Analytics, Hotjar)
                            </li>
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <strong>Preference cookies</strong> to remember settings
                            </li>
                        </ul>
                        <div className="bg-gradient-note border-l-4 border-gradient-primary p-3 sm:p-4 rounded-lg">
                            <p className="text-black text-base sm:text-lg lg:text-xl">
                                <strong>Tip:</strong> You can disable cookies in your browser, but some features may not
                                work as
                                expected.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 5: Data Security */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            5. Data Security
                        </h2>
                    </div>
                    <div>
                        <p className="text-black leading-relaxed mb-4 text-base sm:text-lg lg:text-xl">
                            Your data security is our priority. We apply:
                        </p>
                        <ul className="space-y-2 ml-2 sm:ml-4">
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <strong>Secure HTTPS connections</strong> for all communication
                            </li>
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <strong>Cloud firewalls</strong> and <strong>access control policies</strong>
                            </li>
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <strong>Data minimization</strong> and <strong>encryption protocols</strong>
                            </li>
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <strong>Internal training</strong> and <strong>role-based data access</strong>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Section 6: Sharing with Third Parties */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            6. Sharing with Third Parties
                        </h2>
                    </div>
                    <div>
                        <p className="text-black leading-relaxed mb-4 text-base sm:text-lg lg:text-xl">
                            We do not sell or rent your data. We may share limited information with:
                        </p>
                        <ul className="space-y-2 ml-2 sm:ml-4 mb-4">
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <strong>Trusted hosting or cloud infrastructure providers</strong>
                            </li>
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <strong>Analytics and communication platforms</strong> (under NDA)
                            </li>
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <strong>Government authorities,</strong> (if legally required)
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Section 7: Your Rights */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            7. Your Rights
                        </h2>
                    </div>
                    <div>
                        <p className="text-black leading-relaxed mb-4 text-base sm:text-lg lg:text-xl">
                            You have the right to:
                        </p>
                        <ul className="space-y-2 ml-2 sm:ml-4 mb-4">
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Access and review your personal data
                            </li>
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Request corrections or deletions
                            </li>
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Withdraw consent for specific uses
                            </li>
                            <li className="text-black flex items-start text-sm sm:text-base lg:text-lg">
                                <span className="w-2 h-2 gradient-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                File a complaint with a data protection authority
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Section 8: Data Retention */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            8. Data Retention
                        </h2>
                    </div>
                    <p className="text-black leading-relaxed ml-0 sm:ml-12 text-base sm:text-lg lg:text-xl">
                        We retain personal data only for as long as necessary to fulfill its purpose or comply with
                        legal obligations. After this period, the data is securely deleted or anonymized.
                    </p>
                </div>

                {/* Section 9: Updates to This Policy */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            9. Updates to This Policy
                        </h2>
                    </div>
                    <p className="text-black leading-relaxed ml-0 sm:ml-12 text-base sm:text-lg lg:text-xl">
                        We may update this policy to reflect changes in our practices, legal requirements, or
                        technology. The updated version will be posted on this page with a revised effective date.
                    </p>
                </div>

                {/* Section 10: Contact Us */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            10. Contact Us
                        </h2>
                    </div>
                    <div className="ml-0 sm:ml-12">
                        <p className="text-black leading-relaxed mb-4 text-base sm:text-lg lg:text-xl">
                            If you have any questions or requests regarding your data, contact us at:
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


//hello
export default PrivacyPolicyContent;
