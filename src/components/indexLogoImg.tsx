import React from 'react';
import { cn } from '../lib/utils';
import logoImg from '../assets/logo-Frame.svg';
import youtubeIcon from '../assets/youtbe-logo.svg';
import instagramIcon from '../assets/insta-logo.svg';
import butterflyIcon from '../assets/butterfly-logo.svg';
import facebookIcon from '../assets/facebook-logo.svg';
import linkedinIcon from '../assets/linked-logo.svg';
import twitterIcon from '../assets/x-logo.svg';

interface SocialLink {
    href: string;
    icon: string;
    label: string;
}

const LogoImg: React.FC = () => {
    const socialLinks: SocialLink[] = [
        {
            href: "#",
            icon: youtubeIcon,
            label: "YouTube"
        },
        {
            href: "#",
            icon: instagramIcon,
            label: "Instagram"
        },
        {
            href: "#",
            icon: butterflyIcon,
            label: "Bluesky"
        },
        {
            href: "#",
            icon: facebookIcon,
            label: "Facebook"
        },
        {
            href: "#",
            icon: linkedinIcon,
            label: "LinkedIn"
        },
        {
            href: "#",
            icon: twitterIcon,
            label: "Twitter"
        }
    ];

    return (
        <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Logo Image */}
                <div className="w-full h-full mb-8"> {/* Added some bottom margin for spacing */}
                    <img
                        src={logoImg}
                        alt="DataDaur Logo"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Social Media Icons */}]
                <div className="flex items-center justify-end space-x-4 sm:space-x-6">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            className={cn(
                                "social-icon w-10 h-10 sm:w-12 sm:h-12 rounded-full",
                                "flex items-center justify-center",
                                "transition-all duration-300 ease-in-out",
                                "hover:transform hover:-translate-y-0.5",
                                "hover:shadow-lg hover:shadow-[#604CC3]/20",
                                "focus:outline-none focus:ring-2 focus:ring-[#604CC3] focus:ring-offset-2"
                            )}
                            aria-label={social.label}
                        >
                            <img
                                src={social.icon}
                                alt={social.label}
                                className="w-5 h-5 sm:w-6 sm:h-6"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoImg;