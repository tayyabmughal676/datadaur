import React from 'react';
import {cn} from '../lib/utils';

// Import your images
import ceoImage from '../assets/dummy-image.svg';
import coFounderImage from '../assets/dummy-image.svg';
import linkedinImg from '../assets/linkedin-logo.svg';
import haiderImage from '../assets/dummy-image.svg';
import moazamImage from '../assets/dummy-image.svg';
import ahmedImage from '../assets/dummy-image.svg';
import hussainImage from '../assets/dummy-image.svg';

interface TeamSectionProps {
    className?: string;
}

const AboutTeamSection: React.FC<TeamSectionProps> = ({className}) => {
    const teamMembers = [
        {
            name: "Haider Ali",
            role: "Senior Technical Lead",
            image: haiderImage
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
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-20">
                        <div
                            className="flex flex-col-reverse sm:flex-col items-center text-center space-y-6 lg:space-y-8">
                            <div>
                                <h2 className="team-role-heading mb-2">CEO/Chief AI Officer</h2>
                                <h3 className="team-name-heading mb-4 lg:mb-6">Tayyab Mughal.</h3>
                                <div
                                    className="w-16 h-16 rounded-full bg-[#F8FBFF] mx-auto flex items-center justify-center">
                                    <img src={linkedinImg} alt="CEO Icon" className="w-8 h-8 object-cover"/>
                                </div>
                            </div>
                            <div className="team-profile-image-container mb-4">
                                <div className="team-profile-image-inner">
                                    <img
                                        src={ceoImage}
                                        alt="CEO Tayyab Mughal"
                                        className="team-profile-image"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
                            <div className="team-profile-image-container">
                                <img
                                    src={coFounderImage}
                                    alt="Co-Founder Asim Qamar"
                                    className="team-profile-image"
                                />
                            </div>
                            <div>
                                <h2 className="team-role-heading mb-2">Co-Founder</h2>
                                <h3 className="team-name-heading mb-4 lg:mb-6">Asim Qamar.</h3>
                                <div
                                    className="w-16 h-16 rounded-full bg-[#F8FBFF] mx-auto flex items-center justify-center">
                                    <img src={linkedinImg} alt="Co-Founder Icon" className="w-8 h-8 object-cover"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Members Section */}
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="team-members-heading">Our Team Members</h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-member-card">
                                <div className="team-member-avatar">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <h3 className="team-member-name">{member.name}</h3>
                                <p className="team-member-role">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutTeamSection;
