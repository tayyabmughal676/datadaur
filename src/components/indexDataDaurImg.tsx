import React from 'react';
import {cn} from '../lib/utils';
import backImg from '../assets/datadaur-logo.svg';
import youtubeIcon from '../assets/youtube-purple-logo.svg';
import twitterIcon from '../assets/x-purple-logo.svg';
import linkedinIcon from '../assets/linkedin-purple-logo.svg';
import butterflyImg from '../assets/bsky-purple-logo.svg';

interface SocialLink {
    href: string;
    icon: string;
    label: string;
}

const DataDaurLogoImg: React.FC = () => {
    const socialLinks: SocialLink[] = [
        {
            href: 'https://www.youtube.com/@DataDaurAISchool',
            icon: youtubeIcon,
            label: 'YouTube'
        },
        {
            href: 'https://bsky.app/profile/datadaur.bsky.social/',
            icon: butterflyImg,
            label: 'Bsky'
        },
        {
            href: 'https://www.linkedin.com/company/datadaur/?viewAsMember=true',
            icon: linkedinIcon,
            label: 'LinkedIn'
        },
        {
            href: 'https://x.com/DataDaur/',
            icon: twitterIcon,
            label: 'Twitter/X'
        },

    ];

    return (
        <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-8 sm:space-y-10 md:space-y-12">

                    {/* Logo Section */}
                    <div className="flex items-center justify-center">
                        <div className="flex items-center space-x-3 sm:space-x-4">
                            <img
                                src={backImg}
                                alt="DataDaur Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                </div>
                {/* Social Media Icons */}
                <div className="flex justify-end space-x-4 mt-12 sm:space-x-6 md:space-x-8">
                    {socialLinks.map(({href, icon, label}) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            className={cn(
                                "social-icon w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16",
                                "rounded-full",
                                "transition-all duration-300 ease-in-out",
                                "hover:transform hover:-translate-y-0.5"
                            )}
                            aria-label={label}
                        >
                            <img
                                src={icon}
                                alt={label}
                                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DataDaurLogoImg;

