import React from 'react';
import { cn } from '../lib/utils';

import avatarImage from '../assets/dummy-image.svg';
import signatureImg from '../assets/signature.svg';

interface OurTeamSectionProps {
    className?: string;
}

const OurTeamSection: React.FC<OurTeamSectionProps> = ({ className }) => {
    // --- CODE QUALITY: Consolidated all team data into a single source of truth. ---
    // This prevents data inconsistencies and makes the component easier to manage.
    const leadership = [
        {
            name: "Tayyab Mughal",
            title: "CEO/Chief AI Officer",
            image: avatarImage,
        },
        {
            name: "Asim Qamar",
            title: "Co-Founder",
            image: avatarImage,
        }
    ];

    const team = [
        {
            name: "Haider Ali",
            title: "Senior Technical Lead",
            image: avatarImage,
            // description: "Haider has over 3+ years of experience in leading software development projects and addressing complex technical challenges. As our Senior Technical Lead, he plays a crucial role in planning, building, and delivering scalable digital solutions that meet real-world needs. His ability to combine technical expertise with clear communication makes him a strong leader and a trusted mentor within the team. From architecture to deployment, Haider ensures that every project is built with precision and delivered with confidence."
        },
        {
            name: "Madeeh Mehmood",
            title: "Senior Technical ERP Lead",
            image: avatarImage,
            // A description can be added here later
        },
        {
            name: "Usman Mushtaq",
            title: "Senior Mobile App Engineer",
            image: avatarImage,
        },
        {
            name: "Asmat Wazir",
            title: "Senior Mobile App Engineer",
            image: avatarImage,
        },
        {
            name: "Moazam Mughal",
            title: "Business Manager / Client Relationship",
            image: avatarImage,
            // description: "Moazam Mughal is the central figure who ensures smooth collaboration between our team and our clients. With excellent communication skills and a genuine understanding of client needs, he plays a crucial role in building long-lasting, trust-based relationships. As our Business Manager, Moazam keeps every project on track, ensuring alignment with business goals, adherence to deadlines, and fulfillment of client expectations. His ability to transform ideas into successful, well-executed partnerships makes him an essential part of our growth and client satisfaction."
        },
        {
            name: "Ahmed Amir",
            title: "UI/UX Design Lead",
            image: avatarImage,
            // description: "Ahmed Amir is the creative leader of our UX/UI design team, bringing over 3+ years of experience in Designing thoughtful, user-centered digital experiences. As our UX/UI Design Lead, he combines design skills, user empathy, and a keen attention to detail to create interfaces that are both visually appealing and highly functional. Ahmed works closely with clients and the team to transform complex ideas into clean, intuitive designs that meet business objectives and user needs. His experience and leadership ensure that every product we deliver is not only visually impressive but also purposeful and user-friendly."
        },
        {
            name: "Hussain Mughal",
            title: "Full Stack Developer",
            image: avatarImage,
            // description: "Hussain Mughal is a vital member of our development team, bringing over three years of experience as a Full Stack Developer. With expertise in both front-end and back-end technologies, he creates fast, reliable, and scalable digital solutions from scratch. Hussain collaborates closely with designers and stakeholders to transform concepts into fully functional products, ensuring that every feature works flawlessly and provides a smooth user experience. His problem-solving mindset, technical skills, and attention to detail make him an essential contributor to driving our projects from conception to completion."
        }
    ];

    // Filter out team members who have a detailed description for the lower section
    // const detailedTeamMembers = team.filter(member => member.description);

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
                                <div className="team-profile-image-container transition-transform duration-300 hover:scale-105">
                                    <div className="team-profile-image-inner">
                                        <img
                                            src={leader.image}
                                            alt={`${leader.title} ${leader.name}`}
                                            className="team-profile-image"
                                        />
                                    </div>
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

                    {/* --- FIX: Responsive grid for team members --- */}

                    {/* Mobile & Tablet Layout (up to lg) */}
                    <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-12 lg:hidden">
                        {team.map((member, index) => (
                            <div
                                key={member.name}
                                className={cn(
                                    "flex flex-col items-center space-y-4",
                                    // If it's the last item and the total is odd, make it span both columns to center it
                                    team.length % 2 !== 0 && index === team.length - 1 && "col-span-2"
                                )}
                            >
                                <div className="w-24 h-24 sm:w-40 sm:h-40 transition-transform duration-300 hover:scale-105 rounded-full bg-gray-200 shadow-md overflow-hidden">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="text-center">
                                    <h3 className="team-member-name">{member.name}</h3>
                                    <p className="team-member-role">{member.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Layout (lg and up) for centered last row */}
                    <div className="hidden lg:flex lg:flex-col lg:gap-y-12">
                        {/* First Row: 4 members */}
                        <div className="grid grid-cols-4 gap-x-8">
                            {team.slice(0, 4).map((member) => (
                                <div key={member.name} className="flex flex-col items-center space-y-4">
                                    <div className="w-24 h-24 sm:w-40 sm:h-40 xl:w-[220px] xl:h-[220px] transition-transform duration-300 hover:scale-105 rounded-full bg-gray-200 shadow-md overflow-hidden">
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="team-member-name">{member.name}</h3>
                                        <p className="team-member-role">{member.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Second Row: 3 members, centered */}
                        <div className="flex justify-center gap-x-8">
                            {team.slice(4).map((member) => (
                                <div key={member.name} className="flex flex-col items-center space-y-4">
                                    <div className="w-24 h-24 sm:w-40 sm:h-40 xl:w-[220px] xl:h-[220px] transition-transform duration-300 hover:scale-105 rounded-full bg-gray-200 shadow-md overflow-hidden">
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
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

            {/* Detailed Descriptions Section */}
            {/*<div className="max-w-6xl mx-auto px-8 py-16 space-y-16">*/}
            {/*    {detailedTeamMembers.map((member, index) => (*/}
            {/*        <div key={member.name} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">*/}
            {/*            /!* Avatar *!/*/}
            {/*            <div className={cn(*/}
            {/*                'order-1 flex justify-center transition-transform duration-300 hover:scale-105',*/}
            {/*                index % 2 === 1 ? 'md:order-2 md:justify-end' : 'md:justify-start'*/}
            {/*            )}>*/}
            {/*                <div className="w-72 h-72 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-lg flex-shrink-0">*/}
            {/*                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            /!* Content *!/*/}
            {/*            <div className={cn(*/}
            {/*                'order-2 text-center md:text-left',*/}
            {/*                index % 2 === 1 && 'md:order-1'*/}
            {/*            )}>*/}
            {/*                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">*/}
            {/*                    {member.name} – {member.title}*/}
            {/*                </h2>*/}
            {/*                <p className="text-gray-700 text-lg leading-relaxed">*/}
            {/*                    {member.description}*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}

            {/* Bottom Section */}
            <div className="bg-white py-10 px-4 mx-4 sm:mx-8 md:mx-16 lg:mx-32">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="team-bottom-text leading-relaxed">
                        At DataDaur, we’re a team that truly cares about what we create. With the right mix of skill, experience, and passion, we work closely with you to build digital solutions that are reliable, thoughtful, and built to help your business grow.
                    </p>
                    <div className="flex justify-end mt-4">
                        <div className="w-32 h-12 sm:w-40 sm:h-14 md:w-48 md:h-16 flex items-center justify-center">
                            <img src={signatureImg} alt="Bottom decoration" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeamSection;