import {Home, Mail, Shield, Briefcase, FolderOpen, ExternalLink, Award, Clock, MapPin} from 'lucide-react';

const SitemapContent = () => {
    const sitemapData = [
        {
            category: "Main Pages",
            icon: <Home className="w-6 h-6"/>,
            description: "Core pages that define our company and services",
            pages: [
                {name: "Home", path: "/", description: "Welcome to DataDaur - Your digital transformation partner"},
                {name: "About", path: "/about", description: "Learn about our company, mission, and values"},
                {name: "Portfolio", path: "/portfolio", description: "Explore our latest projects and achievements"},
                {name: "Team", path: "/team", description: "Meet the talented minds behind DataDaur"},
                {name: "Contact Us", path: "/contact-us", description: "Get in touch with our experts"}
            ]
        },
        {
            category: "Business",
            icon: <Briefcase className="w-6 h-6"/>,
            description: "Grow with us through partnerships and career opportunities",
            pages: [
                {name: "Partnership", path: "/partnership", description: "Join forces with us for mutual growth"},
                {name: "Careers", path: "/careers", description: "Discover exciting opportunities to join our team"}
            ]
        },
        {
            category: "Case Studies",
            icon: <FolderOpen className="w-6 h-6"/>,
            description: "Real-world examples of our successful projects",
            pages: [
                {name: "Save in Gold", path: "/save-in-gold-case-study", description: "Financial platform case study"},
                {name: "SocialPro", path: "/socialpro-case-study", description: "Social media management solution"},
                {name: "All Hype", path: "/all-hype-case-study", description: "Marketing platform development"},
                {name: "Faroo", path: "/faroo-case-study", description: "E-commerce solution case study"}
            ]
        },
        {
            category: "Legal",
            icon: <Shield className="w-6 h-6"/>,
            description: "Important legal information and policies",
            pages: [
                {name: "Privacy Policy", path: "/privacy-policy", description: "How we protect and handle your data"},
                {
                    name: "Terms & Conditions",
                    path: "/terms-and-conditions",
                    description: "Our service terms and conditions"
                }
            ]
        }
    ];

    const stats = [
        {
            icon: <MapPin className="w-6 h-6"/>,
            value: sitemapData.reduce((acc, category) => acc + category.pages.length, 0),
            label: "Total Pages",
            color: "from-[#604CC3] to-[#2E245D]"
        },
        {
            icon: <FolderOpen className="w-6 h-6"/>,
            value: sitemapData.length,
            label: "Categories",
            color: "from-[#2E245D] to-[#604CC3]"
        },
        {
            icon: <Award className="w-6 h-6"/>,
            value: "4",
            label: "Case Studies",
            color: "from-[#604CC3] to-[#2E245D]"
        },
        {
            icon: <Clock className="w-6 h-6"/>,
            value: "5+",
            label: "Years Experience",
            color: "from-[#2E245D] to-[#604CC3]"
        }
    ];

    return (
        <div className="bg-white text-black">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-16 sm:py-20">

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="group relative">
                            <div
                                className="text-center p-6 bg-gradient-to-br from-[#604CC3]/5 to-[#2E245D]/5 rounded-2xl border border-[#604CC3]/10 hover:border-[#604CC3]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#604CC3]/10 hover:-translate-y-1">
                                <div
                                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    {stat.icon}
                                </div>
                                <div
                                    className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#604CC3] to-[#2E245D] bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-[#604CC3]/80 font-medium">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Introduction */}
                <div className="text-center mb-16">
                    <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl mb-4 bg-gradient-to-r from-[#604CC3] to-[#2E245D] bg-clip-text text-transparent">
                        Explore Our Digital Ecosystem
                    </h2>
                    <p className="text-lg text-[#604CC3]/80 max-w-3xl mx-auto leading-relaxed">
                        Navigate through our comprehensive collection of pages, each designed to showcase our expertise
                        and help you discover the perfect solution for your needs.
                    </p>
                </div>

                {/* Sitemap Categories */}
                <div className="space-y-16">
                    {sitemapData.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="relative">
                            {/* Category Header */}
                            <div className="flex items-start gap-6 mb-8">
                                <div
                                    className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#604CC3] to-[#2E245D] rounded-2xl text-white shadow-lg">
                                    {category.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-[#604CC3] to-[#2E245D] bg-clip-text text-transparent mb-2">
                                        {category.category}
                                    </h3>
                                    <p className="text-[#604CC3]/70 text-lg leading-relaxed">
                                        {category.description}
                                    </p>
                                </div>
                            </div>

                            {/* Pages Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.pages.map((page, pageIndex) => (
                                    <div key={pageIndex} className="group relative">
                                        <a
                                            href={page.path}
                                            className="block p-6 bg-white border border-[#604CC3]/10 rounded-2xl hover:border-[#604CC3]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#604CC3]/10 hover:-translate-y-2"
                                        >
                                            <div className="flex items-start justify-between mb-4">
                                                <h4 className="font-semibold text-lg text-black group-hover:text-[#604CC3] transition-colors duration-300">
                                                    {page.name}
                                                </h4>
                                                <ExternalLink
                                                    className="w-5 h-5 text-[#604CC3]/60 group-hover:text-[#604CC3] group-hover:scale-110 transition-all duration-300"/>
                                            </div>
                                            <p className="text-sm text-[#604CC3]/80 leading-relaxed mb-4">
                                                {page.description}
                                            </p>
                                            <div className="flex items-center text-xs text-[#604CC3]/60 font-medium">
                                                <span className="mr-2">Visit page</span>
                                                <svg
                                                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M9 5l7 7-7 7"/>
                                                </svg>
                                            </div>
                                            <div
                                                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#604CC3] to-[#2E245D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Navigation */}
                <div
                    className="mt-20 p-8 bg-gradient-to-br from-[#604CC3]/5 to-[#2E245D]/5 rounded-3xl border border-[#604CC3]/10">
                    <div className="text-center mb-8">
                        <h3 className="font-semibold text-2xl sm:text-3xl mb-4 bg-gradient-to-r from-[#604CC3] to-[#2E245D] bg-clip-text text-transparent">
                            Quick Navigation
                        </h3>
                        <p className="text-[#604CC3]/70">
                            Jump directly to any page with a single click
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {sitemapData.flatMap(category => category.pages).map((page, index) => (
                            <a
                                key={index}
                                href={page.path}
                                className="group px-5 py-3 bg-white text-[#604CC3] rounded-full text-sm font-medium hover:bg-[#604CC3] hover:text-white transition-all duration-300 border border-[#604CC3]/20 hover:border-[#604CC3] hover:shadow-lg hover:shadow-[#604CC3]/20 hover:-translate-y-1"
                            >
                                <span className="flex items-center gap-2">
                                    {page.name}
                                    <ExternalLink
                                        className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-20 text-center">
                    <div
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white rounded-2xl font-medium hover:shadow-lg hover:shadow-[#604CC3]/25 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                        <Mail className="w-5 h-5"/>
                        <span>Need Help Finding Something?</span>
                    </div>
                    <div className="mt-6 space-y-2">
                        <p className="text-[#604CC3]/80 text-lg">
                            Contact us at{' '}
                            <a href="mailto:contact@datadaur.com"
                               className="text-[#604CC3] hover:text-[#2E245D] font-medium hover:underline transition-colors duration-300">
                                contact@datadaur.com
                            </a>
                        </p>
                        <p className="text-[#604CC3]/60 text-sm">
                            We're here to help you navigate our digital world
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SitemapContent;
