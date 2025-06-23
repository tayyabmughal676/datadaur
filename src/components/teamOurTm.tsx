import React from 'react';
import { cn } from '../lib/utils';

import avatarImage from '../assets/dummy-image.svg';
import signatureImg from '../assets/signature.svg';

interface OurTeamSectionProps {
    className?: string;
}

const OurTeamSection: React.FC<OurTeamSectionProps> = ({ className }) => {
    const teamMembers = [
        {
            name: "Haider Ali",
            role: "Senior Technical Lead",
            image: avatarImage
        },
        {
            name: "Moazam Mughal",
            role: "Business Manager / Client Support",
            image: avatarImage
        },
        {
            name: "Ahmed Amir",
            role: "UX UI Design Lead",
            image: avatarImage
        },
        {
            name: "Hussain Mughal",
            role: "Full Stack Developer",
            image: avatarImage
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

            {/* Team Section */}
            <div className="py-10 px-4 bg-white mx-12 sm:mx-8 md:mx-20 lg:mx-24 rounded-3xl">
                <div className="max-w-7xl mx-auto">
                    {/* CEO and Co-Founder Grid Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-20">
                        {/* CEO Column */}
                        <div className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
                            <div className="team-profile-image-container">
                                <div className="team-profile-image-inner">
                                    <img
                                        src={avatarImage}
                                        alt="CEO Tayyab Mughal"
                                        className="team-profile-image"
                                    />
                                </div>
                            </div>
                            <div>
                                <h2 className="team-role-heading mb-2">CEO/Chief AI Officer</h2>
                                <h3 className="team-name-heading mb-4 lg:mb-6">Tayyab Mughal.</h3>
                            </div>
                        </div>

                        {/* Co-Founder Column */}
                        <div className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
                            <div className="team-profile-image-container">
                                <img
                                    src={avatarImage}
                                    alt="Co-Founder Asim Qamar"
                                    className="team-profile-image"
                                />
                            </div>
                            <div>
                                <h2 className="team-role-heading mb-2">Co-Founder</h2>
                                <h3 className="team-name-heading mb-4 lg:mb-6">Asim Qamar.</h3>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-member-card-1">
                                <div className="team-member-avatar-1">
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

            <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
                {/* Member 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    {/* Avatar */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-lg">
                            <img
                                src={avatarImage}
                                alt="Haider Ali"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Haider Ali – Senior Technical Lead
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Haider has over 3+ years of experience in leading software development projects and addressing complex technical challenges. As our Senior Technical Lead, he plays a crucial role in planning, building, and delivering scalable digital solutions that meet real-world needs. His ability to combine technical expertise with clear communication makes him a strong leader and a trusted mentor within the team. From architecture to deployment, Haider ensures that every project is built with precision and delivered with confidence.                        </p>
                    </div>
                </div>

                {/* Member 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    {/* Content First */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Moazam Mughal – Business
                            Manager / Client Relationship
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Moazam Mughal is the central figure who ensures smooth collaboration between our team and our clients. With excellent communication skills and a genuine understanding of client needs, he plays a crucial role in building long-lasting, trust-based relationships. As our Business Manager, Moazam keeps every project on track, ensuring alignment with business goals, adherence to deadlines, and fulfillment of client expectations. His ability to transform ideas into successful, well-executed partnerships makes him an essential part of our growth and client satisfaction.                        </p>
                    </div>

                    {/* Avatar */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-lg">
                            <img
                                src={avatarImage}
                                alt="Moazam Mughal"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Member 3 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    {/* Avatar */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-lg">
                            <img
                                src={avatarImage}
                                alt="Ahmed Amir"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Ahmed Amir – UI/UX
                            Design Lead
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Ahmed Amir is the creative leader of our UX/UI design team, bringing over 3+ years of experience in Designing thoughtful, user-centered digital experiences. As our UX/UI Design Lead, he combines design skills, user empathy, and a keen attention to detail to create interfaces that are both visually appealing and highly functional. Ahmed works closely with clients and the team to transform complex ideas into clean, intuitive designs that meet business objectives and user needs. His experience and leadership ensure that every product we deliver is not only visually impressive but also purposeful and user-friendly.                        </p>
                    </div>
                </div>

                {/* Member 4 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    {/* Content First */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Hussain Mughal – Full Stack
                            Developer
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Hussain Mughal is a vital member of our development team, bringing over three years of experience as a Full Stack Developer. With expertise in both front-end and back-end technologies, he creates fast, reliable, and scalable digital solutions from scratch. Hussain collaborates closely with designers and stakeholders to transform concepts into fully functional products, ensuring that every feature works flawlessly and provides a smooth user experience. His problem-solving mindset, technical skills, and attention to detail make him an essential contributor to driving our projects from conception to completion.                        </p>
                    </div>

                    {/* Avatar */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-lg">
                            <img
                                src={avatarImage}
                                alt="Hussain Shahid"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* Bottom Section */}
            <div className="bg-white py-10 px-4 mx-4 sm:mx-8 md:mx-16 lg:mx-32">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="flex justify-end mt-4">
                        <div className="w-32 h-12 sm:w-40 sm:h-14 md:w-48 md:h-16 flex items-center justify-center">
                            <img
                                src={signatureImg}
                                alt="Bottom decoration"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                    <p className="team-bottom-text leading-relaxed">
                        At DataDaur, we’re a team that truly cares about what we create. With the right mix of skill, experience, and passion, we work closely with you to build digital solutions that are reliable, thoughtful, and built to help your business grow.
                    </p>
                </div>
            </div>
        </section>

    );
};

export default OurTeamSection;