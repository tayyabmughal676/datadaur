import React, {useState, useEffect} from 'react';
import {cn} from '../lib/utils';
import logoImg from '../assets/logo-white.svg';
import twitterIcon from '../assets/x-purple-logo.svg';
import linkedinIcon from '../assets/linkedin-purple-logo.svg';
import youtubeIcon from '../assets/youtube-purple-logo.svg';
import butterflyIcon from '../assets/bsky-purple-logo.svg';

interface SocialLink {
    href: string;
    icon: string;
    label: string;
}

interface FooterLink {
    href?: string;
    label: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

const FooterCompo: React.FC = () => {
    const socialLinks: SocialLink[] = [
        {href: 'https://x.com/DataDaur/', icon: twitterIcon, label: 'Twitter'},
        {href: 'https://www.linkedin.com/company/datadaur/?viewAsMember=true', icon: linkedinIcon, label: 'LinkedIn'},
        {href: 'https://www.youtube.com/@DataDaurAISchool', icon: youtubeIcon, label: 'YouTube'},
        {href: 'https://bsky.app/profile/datadaur.bsky.social', icon: butterflyIcon, label: 'Bsky'},
    ];

    const quickLinks: FooterSection = {
        title: 'Quick Links',
        links: [
            {href: '/', label: 'Home'},
            {href: '/portfolio', label: 'Portfolio'},
            {href: '/team', label: 'Team'},
            {href: '/about', label: 'About'},
            {href: '/partnership', label: 'Partnership'},
            {href: '/careers', label: 'Careers'},
            {href: '/contact-us', label: 'Contact'},
        ],
    };

    const footerSections: FooterSection[] = [
        {
            title: 'Services',
            links: [
                {label: 'AI Service & Development'},
                {label: 'Web App Development'},
                {label: 'Ecommerce Development'},
                {label: 'Mobile Application Development'},
                {label: 'Digital Marketing'},
                {label: 'SaaS Development'},
                {label: 'Website Design Development'},
                {label: 'Search Engine Optimization'},
            ],
        },
        {
            title: 'Industries We Serve',
            links: [
                {label: 'Artificial Intelligence'},
                {label: 'Cybersecurity'},
                {label: 'Education Technology (Edutech)'},
                {label: 'Health Technology (Healthtech)'},
                {label: 'Finance Technology (Fintech)'},
                {label: 'e-Government'},
            ],
        },
    ];

    const contactInfo = [
        {href: 'mailto:contact@datadaur.com', label: 'contact@datadaur.com'},
        {href: 'tel:+971552025311', label: '+971 55 202 5311 (UAE)'},
        {href: 'tel:+923110776827', label: '+92 311 077 6827 (Pakistan)'},
    ];

    const footerLinks = [
        {href: '/privacy-policy', label: 'Privacy Policy'},
        {href: '/terms-and-conditions', label: 'Terms & condition'},
        {href: '/sitemap', label: 'Sitemap'},
    ];

    const [uaeTime, setUaeTime] = useState('');
    // const [pakistanTime, setPakistanTime] = useState('');

    useEffect(() => {
        const getTime = () => {
            const options: Intl.DateTimeFormatOptions = {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            };

            setUaeTime(new Date().toLocaleTimeString('en-US', {...options, timeZone: 'Asia/Dubai'}));
            // setPakistanTime(new Date().toLocaleTimeString('en-US', { ...options, timeZone: 'Asia/Karachi' }));
        };

        getTime();
        const intervalId = setInterval(getTime, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <footer className="footer-gradient text-white">
            <div className="px-8 py-16 lg:px-20 lg:py-12">
                <div className="max-w-8xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-8 lg:grid-cols-5 mb-8">
                        {/* Logo and Social */}
                        <div className="space-y-6 items-center justify-center">
                            <div className="w-48 h-16 flex items-center">
                                <img src={logoImg} alt="DataDaur Logo" className="w-48 h-16 object-contain"/>
                            </div>
                            <div className="hidden sm:flex flex-wrap max-w-[214px] gap-4">
                                {socialLinks.map(({href, icon, label}) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        className={cn(
                                            "w-[34px] h-[34px] bg-[#E0E9F7]",
                                            "hover:bg-opacity-30 transition-all cursor-pointer",
                                            "flex items-center justify-center rounded-3xl p-1"
                                        )}
                                        aria-label={label}
                                    >
                                        <img src={icon} alt={label} className="w-4 h-4"/>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Contact section moved up */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Contact</h3>
                            <ul className="footer-list space-y-4">
                                {contactInfo.map(({href, label}) => (
                                    <li key={label}>
                                        <a
                                            href={href}
                                            className="text-base font-normal hover:text-purple-200 transition-colors"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                                <li className="text-base font-normal">
                                    <span className="block"><strong>Location Time:</strong></span>
                                </li>
                                <li className="text-base font-normal">
                                    <span className="block">UAE: {uaeTime}</span>
                                </li>
                                {/*<li className="text-base font-normal">*/}
                                {/*    <span className="block">Pakistan: {pakistanTime}</span>*/}
                                {/*</li>*/}
                            </ul>
                        </div>

                        {/* Other footer sections */}
                        {footerSections.map(({title, links}) => (
                            <div key={title}>
                                <h3 className="text-2xl font-bold mb-6">{title}</h3>
                                <ul className="footer-list space-y-3">
                                    {links.map(({href, label}) => (
                                        <li key={label}>
                                            {href ? (
                                                <a
                                                    href={href}
                                                    className="text-base font-normal hover:text-purple-200 transition-colors"
                                                >
                                                    {label}
                                                </a>
                                            ) : (
                                                <span className="text-base font-normal cursor-default">
                                                    {label}
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Quick Links moved down */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">{quickLinks.title}</h3>
                            <ul className="footer-list space-y-3">
                                {quickLinks.links.map(({href, label}) => (
                                    <li key={label}>
                                        {href ? (
                                            <a
                                                href={href}
                                                className="text-base font-normal hover:text-purple-200 transition-colors"
                                            >
                                                {label}
                                            </a>
                                        ) : (
                                            <span className="text-base font-normal cursor-default">
                                                {label}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Footer bottom */}
                    <div className="pt-8 mt-8 border-t border-white/20">
                        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-y-4">
                            <p className="text-base font-medium text-center md:text-left">
                                © Copyright 2025 DataDaur
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
                                {footerLinks.map(({href, label}) => (
                                    <a
                                        key={label}
                                        href={href}
                                        className="text-sm font-normal hover:text-purple-200 transition-colors underline"
                                    >
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEO Keywords for Crawlers - Hidden for users, visible to bots */}
            <div style={{display: 'none'}}>
                <h1>AI Development, Web & Mobile App Services</h1>
                <p>
                    DataDaur specializes in AI services, SaaS development, web app development, ecommerce platforms,
                    mobile application development, digital marketing, and custom software solutions.
                    Our expertise spans across industries such as Fintech, Edutech, Healthtech, Cybersecurity, and
                    e-Government.
                    We provide end-to-end software design, development, SEO optimization, and data-driven growth
                    consulting.
                </p>
                <ul>
                    <li>AI Development & Automation Solutions</li>
                    <li>Web App Development for Startups & Enterprises</li>
                    <li>Mobile App Development (iOS, Android, Flutter)</li>
                    <li>Ecommerce Website Development</li>
                    <li>SaaS Platform Engineering</li>
                    <li>Search Engine Optimization (SEO)</li>
                    <li>Custom UI/UX Website Design</li>
                    <li>Digital Marketing Services</li>
                    <li>Fintech, Edutech, Healthtech, Cybersecurity Apps</li>
                    <li>e-Government Digital Transformation</li>
                </ul>
            </div>


        </footer>
    );
};

export default FooterCompo;
