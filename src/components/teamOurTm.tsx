import React from 'react';
import { cn } from '../lib/utils';

import signatureImg from '../assets/signature.svg';
import ceoImage from '../assets/tayyab-mughal.svg';
import haiderImage from '../assets/haider-ali.svg';
import moazamImage from '../assets/moazam_mughal.svg';
import ahmedImage from '../assets/ahmad.svg';
import hussainImage from '../assets/hussain-shahid.svg';
import madeehMehmoodImage from "../assets/madeeh-mehmood.svg";
import usmanMustaqImage from "../assets/usman-mushtaq.svg";
import asmatWazirImage from "../assets/azmat-wazir.svg";
import usmanNazirImage from "../assets/usman-nazir.svg";
import coFounderImage from "../assets/asim-qamar.svg";

interface OurTeamSectionProps {
    className?: string;
}

const OurTeamSection: React.FC<OurTeamSectionProps> = ({ className }) => {
    const leadership = [
        {
            name: "Tayyab Mughal",
            title: "CEO/Chief AI Officer",
            image: ceoImage,
        },
        {
            name: "Asim Qamar",
            title: "Co-Founder",
            image: coFounderImage,
        }
    ];
//heloo
    const team = [
        {
            name: "Haider Ali",
            title: "Senior Technical Lead",
            image: haiderImage,
        },
        {
            name: "Madeeh Mehmood",
            title: "Senior Technical ERP Lead",
            image: madeehMehmoodImage,
        },
        {
            name: "Usman Mushtaq",
            title: "Senior Mobile App Engineer",
            image: usmanMustaqImage,
        },
        {
            name: "Asmat Wazir",
            title: "Senior Mobile App Engineer",
            image: asmatWazirImage,
        },
        {
            name: "Usman Nazir",
            title: "Business Development Manager",
            image: usmanNazirImage
        },
        {
            name: "Moazam Mughal",
            title: "Business Manager / Client Relationship",
            image: moazamImage,
        },
        {
            name: "Ahmed Amir",
            title: "UI/UX Design Lead",
            image: ahmedImage,
        },
        {
            name: "Hussain Mughal",
            title: "Full Stack Developer",
            image: hussainImage,
        }
    ];

    return (
        <section className={cn("bg-white min-h-screen py-12", className)}>
            {/* Header Section */}
            <div className="text-center py-12 px-4">
                <h1 className="team-main-heading mb-4">
                    Our Team
                </h1>
            </div>

            {/* Introduction Grid Section */}
            <div className="py-10 px-8 bg-white mx-6 sm:mx-8 md:mx-20 lg:mx-24 rounded-3xl">
                <div className="max-w-7xl mx-auto">
                    {/* Leadership Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-20">
                        {leadership.map(leader => (
                            <div key={leader.name} className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
                                <div className="w-24 h-24 sm:w-40 sm:h-40 xl:w-[220px] xl:h-[220px] transition-transform duration-300 hover:scale-105 rounded-full bg-gray-200 shadow-md overflow-hidden">
                                    <img
                                        src={leader.image}
                                        alt={`${leader.name} - ${leader.title}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h2 className="team-role-heading mb-2">{leader.title}</h2>
                                    <h3 className="team-name-heading mb-4 lg:mb-6">{leader.name}.</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Team Members Grid */}
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="team-members-heading">Our Team Members</h2>
                    </div>

                    {/* Mobile & Tablet Layout (up to lg) */}
                    <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-12 lg:hidden">
                        {team.map((member, index) => (
                            <div
                                key={member.name}
                                className={cn(
                                    "flex flex-col items-center space-y-4",
                                    team.length % 2 !== 0 && index === team.length - 1 && "col-span-2"
                                )}
                            >
                                <div className="w-24 h-24 sm:w-40 sm:h-40 transition-transform duration-300 hover:scale-105 rounded-full bg-gray-200 shadow-md overflow-hidden">
                                    <img src={member.image} alt={`${member.name} - ${member.title}`} className="w-full h-full object-cover" />
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
                            {team.slice(0, 4).map((member) => (
                                <div key={member.name} className="flex flex-col items-center space-y-4">
                                    <div className="w-24 h-24 sm:w-40 sm:h-40 xl:w-[220px] xl:h-[220px] transition-transform duration-300 hover:scale-105 rounded-full bg-gray-200 shadow-md overflow-hidden">
                                        <img src={member.image} alt={`${member.name} - ${member.title}`} className="w-full h-full object-cover" />
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
                            {team.slice(4, 8).map((member) => (
                                <div key={member.name} className="flex flex-col items-center space-y-4">
                                    <div className="w-24 h-24 sm:w-40 sm:h-40 xl:w-[220px] xl:h-[220px] transition-transform duration-300 hover:scale-105 rounded-full bg-gray-200 shadow-md overflow-hidden">
                                        <img src={member.image} alt={`${member.name} - ${member.title}`} className="w-full h-full object-cover" />
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
                        At DataDaur, we’re a team that truly cares about what we create. With the right mix of skill, experience, and passion, we work closely with you to build digital solutions that are reliable, thoughtful, and built to help your business grow.
                    </p>
                    <div className="flex justify-end mt-4">
                        <div className="w-32 h-12 sm:w-40 sm:h-14 md:w-48 md:h-16 flex items-center justify-center">
                            <img src={signatureImg} alt="DataDaur Signature" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeamSection;