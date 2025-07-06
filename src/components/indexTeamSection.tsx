import React from 'react';
import { cn } from '../lib/utils';

// Import your images
import ceoImage from '../assets/dummy-image.svg';
import coFounderImage from '../assets/dummy-image.svg';
import linkedinImg from '../assets/linkedin-logo.svg';
import haiderImage from '../assets/dummy-image.svg';
import moazamImage from '../assets/dummy-image.svg';
import ahmedImage from '../assets/dummy-image.svg';
import hussainImage from '../assets/dummy-image.svg';
import signatureImg from '../assets/signature.svg';

interface TeamSectionProps {
    className?: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ className }) => {
    const teamMembers = [
        {
            name: "Haider Ali",
            role: "Senior Technical Lead",
            image: haiderImage
        },
        {
            name: "Madeeh Mehmood",
            role: "Senior Technical ERP Lead",
            image: hussainImage
        },
        {
            name: "Usman Mushtaq",
            role: "Senior Mobile App Engineer",
            image: hussainImage
        },
        {
            name: "Asmat Wazir",
            role: "Senior Mobile App Engineer",
            image: hussainImage
        },
        {
            name: "Moazam Mughal",
            role: "Business Manager / Client Support",
            image: moazamImage
        },
        {
            name: "Ahmed Amir",
            role: "UX UI Design Lead",
            image: ahmedImage
        },
        {
            name: "Hussain Mughal",
            role: "Full Stack Developer",
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

            {/* Team Section */}
            <div className="py-10 px-4 bg-[#E6F0FF] sm:mx-8 md:mx-20 lg:mx-24 sm:rounded-3xl">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 mb-12 lg:mb-20">
                        {/* CEO */}
                        <div
                            className={cn(
                                "relative flex flex-col items-center text-center space-y-6 lg:space-y-8 mb-12 lg:mb-0",
                                "lg:border-r-4 border-[#604CC3]",
                                "after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-[#604CC3] after:left-1/2 after:-translate-x-1/2 after:bottom-[-1.5rem]",
                                "lg:after:hidden"
                            )}
                        >
                            <div className="team-profile-image-container transition-transform duration-300 hover:scale-105">
                                <img
                                    src={ceoImage}
                                    alt="CEO Tayyab Mughal"
                                    className="team-profile-image"
                                />
                            </div>
                            <div>
                                <h2 className="team-role-heading mb-2">CEO/Chief AI Officer</h2>
                                <h3 className="team-name-heading mb-4 lg:mb-6">Tayyab Mughal.</h3>
                                <div className="w-16 h-16 rounded-full bg-[#F8FBFF] mx-auto flex items-center justify-center">
                                    <a href="https://www.linkedin.com/in/mrtayyabmughal" target="_blank" aria-label="Tayyab Mughal's LinkedIn Profile">
                                        <img src={linkedinImg} alt="CEO LinkedIn" className="w-8 h-8 object-cover transition-transform duration-300 hover:scale-105" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Co-Founder */}
                        <div className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
                            <div className="team-profile-image-container transition-transform duration-300 hover:scale-105">
                                <img
                                    src={coFounderImage}
                                    alt="Co-Founder Asim Qamar"
                                    className="team-profile-image"
                                />
                            </div>
                            <div>
                                <h2 className="team-role-heading mb-2">Co-Founder</h2>
                                <h3 className="team-name-heading mb-4 lg:mb-6">Asim Qamar.</h3>
                                <div className="w-16 h-16 rounded-full bg-[#F8FBFF] mx-auto flex items-center justify-center">
                                    {/* FIX: Wrapped the icon in a link to make it clickable */}
                                    <a href="https://www.linkedin.com/in/asim-qamar-javed/" target="_blank" aria-label="Asim Qamar's LinkedIn Profile">
                                        <img src={linkedinImg} alt="Co-Founder LinkedIn" className="w-8 h-8 object-cover transition-transform duration-300 hover:scale-105" />
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
                    <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:hidden">
                        {teamMembers.map((member, index) => (
                            <div
                                key={member.name}
                                className={cn(
                                    "flex flex-col items-center space-y-2",
                                    // If it's the last item and the total is odd, make it span both columns to center it
                                    teamMembers.length % 2 !== 0 && index === teamMembers.length - 1 && "col-span-2"
                                )}
                            >
                                <div className="w-24 h-24 sm:w-40 sm:h-40 transition-transform duration-300 hover:scale-105 overflow-hidden team-member-card">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <div className="text-center mt-4">
                                    <h3 className="team-member-name">{member.name}</h3>
                                    <p className="team-member-role">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Layout (lg and up) for centered last row */}
                    <div className="hidden lg:flex lg:flex-col lg:gap-y-8">
                        {/* First Row: 4 members */}
                        <div className="grid grid-cols-4 gap-x-8">
                            {teamMembers.slice(0, 4).map((member) => (
                                <div key={member.name} className="flex flex-col items-center space-y-2">
                                    <div className="w-24 h-24 sm:w-40 sm:h-40 xl:w-[220px] xl:h-[220px] transition-transform duration-300 hover:scale-105 overflow-hidden team-member-card">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="text-center mt-4">
                                        <h3 className="team-member-name">{member.name}</h3>
                                        <p className="team-member-role">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Second Row: 3 members, centered */}
                        <div className="flex justify-center gap-x-8">
                            {teamMembers.slice(4).map((member) => (
                                <div key={member.name} className="flex flex-col items-center space-y-2">
                                    <div className="w-24 h-24 sm:w-40 sm:h-40 xl:w-[220px] xl:h-[220px] transition-transform duration-300 hover:scale-105 overflow-hidden team-member-card">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="text-center mt-4">
                                        <h3 className="team-member-name">{member.name}</h3>
                                        <p className="team-member-role">{member.role}</p>
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
                                alt="Bottom decoration"
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