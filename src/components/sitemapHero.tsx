
const SitemapHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background with animated gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#604CC3]/10 via-white to-[#2E245D]/10"></div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#604CC3]/20 to-[#2E245D]/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-[#2E245D]/15 to-[#604CC3]/15 rounded-full blur-lg animate-pulse delay-500"></div>
                <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-[#604CC3]/10 to-[#2E245D]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-[#2E245D]/20 to-[#604CC3]/20 rounded-full blur-xl animate-pulse delay-1500"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#604CC3]/5 to-[#2E245D]/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Floating geometric shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#604CC3]/20 rotate-45 animate-bounce delay-300"></div>
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#2E245D]/30 rounded-full animate-bounce delay-700"></div>
                <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-[#604CC3]/15 rotate-12 animate-bounce delay-1100"></div>
                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[#2E245D]/25 rounded-full animate-bounce delay-1400"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto p-6 pt-20">
                <div className="text-center space-y-8">
                    {/* Main Heading */}
                    <div className="space-y-4">
                        <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                            <span className="text-[#604CC3]/60 block animate-fade-in">
                                Navigate {''}
                                <span className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] bg-clip-text text-transparent animate-gradient">
                                    Through
                                </span>
                            </span>
                            <span className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] bg-clip-text text-transparent block animate-fade-in delay-200">
                                Our {''}
                                <span className="text-[#604CC3]/60">
                                    Digital World
                                </span>
                            </span>
                        </h1>

                        {/* Decorative line */}
                        <div className="flex justify-center mt-6">
                            <div className="w-24 h-1 bg-gradient-to-r from-[#604CC3] to-[#2E245D] rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    {/* Subtitle */}
                    <div className="space-y-4 animate-fade-in delay-400">
                        <p className="font-open-sans text-lg sm:text-xl lg:text-2xl text-[#604CC3CC] max-w-3xl leading-relaxed mx-auto">
                            Discover all the amazing pages and features we have to offer in one organized place.
                        </p>
                        <p className="text-sm sm:text-base text-[#604CC3]/60 max-w-2xl mx-auto">
                            From our innovative solutions to detailed case studies, explore every corner of our digital ecosystem.
                        </p>
                    </div>

                    {/* Call to Action */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 animate-fade-in delay-600">
                        <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white rounded-xl font-medium hover:shadow-lg hover:shadow-[#604CC3]/25 transition-all duration-300 cursor-pointer">
                            <span>Start Exploring</span>
                            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                        <div className="text-sm text-[#604CC3]/60 flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#604CC3]/40 rounded-full animate-pulse"></span>
                            <span>12+ pages to discover</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <svg className="w-full h-16 sm:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="url(#gradient1)"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="url(#gradient2)"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="url(#gradient3)"></path>
                    <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#604CC3" stopOpacity="0.1"/>
                            <stop offset="100%" stopColor="#2E245D" stopOpacity="0.1"/>
                        </linearGradient>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#604CC3" stopOpacity="0.2"/>
                            <stop offset="100%" stopColor="#2E245D" stopOpacity="0.2"/>
                        </linearGradient>
                        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#604CC3" stopOpacity="0.3"/>
                            <stop offset="100%" stopColor="#2E245D" stopOpacity="0.3"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                }
                
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease-in-out infinite;
                }
                
                .delay-200 {
                    animation-delay: 0.2s;
                }
                
                .delay-400 {
                    animation-delay: 0.4s;
                }
                
                .delay-600 {
                    animation-delay: 0.6s;
                }
            `}</style>
        </section>
    );
};

export default SitemapHero;