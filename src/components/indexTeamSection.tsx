import React from 'react';
import {cn} from '../lib/utils';

// Import your images
import ceoImage from '../assets/tayyab-mughal.svg';
import coFounderImage from '../assets/asim-qamar.svg';
import linkedinImg from '../assets/linkedin-logo.svg';
import usmanMustaqImage from '../assets/usman-mushtaq.svg';
import asmatWazirImage from '../assets/azmat-wazir.svg';
import usmanNazirImage from '../assets/usman-nazir.svg';
import madeehMehmoodImage from '../assets/madeeh-mehmood.svg';
import haiderImage from '../assets/haider-ali.svg';
import moazamImage from '../assets/moazam-mughal.svg';
import ahmedImage from '../assets/ahmad-amir.svg';
import hussainImage from '../assets/hussain-shahid.svg';
import signatureImg from '../assets/signature.svg';

interface TeamSectionProps {
    className?: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({className}) => {
    const teamMembers = [
        {
            name: "Haider Ali",
            title: "Senior Technical Lead",
            image: haiderImage
        },
        {
            name: "Madeeh Mehmood",
            title: "Senior Technical ERP Lead",
            image: madeehMehmoodImage
        },
        {
            name: "Usman Mushtaq",
            title: "Senior Mobile App Engineer",
            image: usmanMustaqImage
        },
        {
            name: "Asmat Wazir",
            title: "Senior Mobile App Engineer",
            image: asmatWazirImage
        },
        {
            name: "Usman Nazir",
            title: "Business Development Manager",
            image: usmanNazirImage
        },
        {
            name: "Moazam Mughal",
            title: "Business Manager / Client Support",
            image: moazamImage
        },
        {
            name: "Ahmed Amir",
            title: "UX UI Design Lead",
            image: ahmedImage
        },
        {
            name: "Hussain Mughal",
            title: "Full Stack Developer",
            image: hussainImage
        }
    ];

    return (
        <section className={cn("bg-white min-h-screen", className)}>
            <div className="text-center py-12 px-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
                    The Creatives Solving Your Problems
                </h1>
                <p className="team-subtitle max-w-2xl mx-auto">
                    Explore Our Comprehensive Range of Services Tailored to Your Needs
                </p>
            </div>

            <div className="py-10 px-4 bg-[#E6F0FF] sm:mx-8 md:mx-20 lg:mx-24 sm:rounded-3xl">
                <div className="max-w-5xl mx-auto">
                    {/* --- FIX: Restored original grid layout for proper spacing --- */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 mb-12 lg:mb-20">
                        {/* CEO */}
                        <div
                            className={cn(
                                "relative flex flex-col items-center text-center space-y-6 lg:space-y-8",
                                "mb-16 lg:mb-0 lg:pr-8", // Adds space below on mobile and padding on desktop
                                "lg:border-r-4 border-[#604CC3]", // The vertical border for desktop
                                "after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-[#604CC3] after:left-1/2 after:-translate-x-1/2 after:bottom-[-2rem]", // The horizontal line for mobile
                                "lg:after:hidden" // Hides the horizontal line on desktop
                            )}
                        >
                            <div
                                className="w-24 h-24 sm:w-40 sm:h-40 xl:w-[220px] xl:h-[220px] transition-transform duration-300 hover:scale-105 rounded-full bg-gray-200 shadow-md overflow-hidden">
                                <img
                                    src={ceoImage}
                                    alt="Tayyab Mughal - CEO/Chief AI Officer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h2 className="team-role-heading mb-2">CEO/Chief AI Officer</h2>
                                <h3 className="team-name-heading mb-4 lg:mb-6">Tayyab Mughal.</h3>
                                <div
                                    className="w-16 h-16 rounded-full bg-[#F8FBFF] mx-auto flex items-center justify-center shadow-sm">
                                    <a href="https://www.linkedin.com/in/mrtayyabmughal" target="_blank"
                                       rel="noopener noreferrer" aria-label="Tayyab Mughal's LinkedIn Profile">
                                        <img src={linkedinImg} alt="LinkedIn Profile"
                                             className="w-8 h-8 object-contain transition-transform duration-300 hover:scale-105"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Co-Founder */}
                        <div className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
                            <div
                                className="w-24 h-24 sm:w-40 sm:h-40 xl:w-[220px] xl:h-[220px] transition-transform duration-300 hover:scale-105 rounded-full bg-gray-200 shadow-md overflow-hidden">
                                <img
                                    src={coFounderImage}
                                    alt="Asim Qamar - Co-Founder"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h2 className="team-role-heading mb-2">Co-Founder</h2>
                                <h3 className="team-name-heading mb-4 lg:mb-6">Asim Qamar.</h3>
                                <div
                                    className="w-16 h-16 rounded-full bg-[#F8FBFF] mx-auto flex items-center justify-center shadow-sm">
                                    <a href="https://www.linkedin.com/in/asim-qamar-javed/" target="_blank"
                                       rel="noopener noreferrer" aria-label="Asim Qamar's LinkedIn Profile">
                                        <img src={linkedinImg} alt="LinkedIn Profile"
                                             className="w-8 h-8 object-contain transition-transform duration-300 hover:scale-105"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Members Section */}
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="team-members-heading">Our Team Members</h2>
                    </div>

                    {/* Mobile & Tablet Layout (up to lg) */}
                    <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-12 lg:hidden">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="flex flex-col items-center space-y-4">
                                <div
                                    className="w-24 h-24 sm:w-40 sm:h-40 transition-transform duration-300 hover:scale-105 rounded-full bg-gray-200 shadow-md overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={`${member.name} - ${member.title}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="team-member-name">{member.name}</h3>
                                    <p className="team-member-role">{member.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Layout (lg and up) */}
                    <div className="hidden lg:flex lg:flex-col lg:gap-y-12">
                        {/* First Row: 4 members */}
                        <div className="grid grid-cols-4 gap-x-8">
                            {teamMembers.slice(0, 4).map((member) => (
                                <div key={member.name} className="flex flex-col items-center space-y-4">
                                    <div
                                        className="w-24 h-24 sm:w-40 sm:h-40 xl:w-[220px] xl:h-[220px] transition-transform duration-300 hover:scale-105 rounded-full bg-gray-200 shadow-md overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={`${member.name} - ${member.title}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="team-member-name">{member.name}</h3>
                                        <p className="team-member-role">{member.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Second Row: 4 members */}
                        <div className="grid grid-cols-4 gap-x-8">
                            {teamMembers.slice(4, 8).map((member) => (
                                <div key={member.name} className="flex flex-col items-center space-y-4">
                                    <div
                                        className="w-24 h-24 sm:w-40 sm:h-40 xl:w-[220px] xl:h-[220px] transition-transform duration-300 hover:scale-105 rounded-full bg-gray-200 shadow-md overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={`${member.name} - ${member.title}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="team-member-name">{member.name}</h3>
                                        <p className="team-member-role">{member.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-white py-10 px-4 mx-4 sm:mx-8 md:mx-16 lg:mx-32">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="team-bottom-text leading-relaxed">
                        Harness the power of Al to elevate your business.
                        Innovate boldly, adapt swiftly, and lead with technology-your success begins today!
                    </p>

                    <div className="flex justify-end mt-4">
                        <div className="w-32 h-12 sm:w-40 sm:h-14 md:w-48 md:h-16 flex items-center justify-center">
                            <img
                                src={signatureImg}
                                alt="DataDaur Signature"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
