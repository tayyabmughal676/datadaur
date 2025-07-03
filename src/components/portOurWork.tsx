import React from 'react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

import saveingoldImg from '../assets/saveingold.png';
import socialproImg from '../assets/socialpro.png';
import allHypeImg from "../assets/all-hype.png";
import farooImg from "../assets/faroo.png";
import arrowIcon from '../assets/arrow-1.svg';

interface WorkItem {
    id: number;
    title: string;
    description: string;
    backgroundImage: string;
    iconImage: string;
    iconAlt: string;
    link?: string;
}

interface OurWorkProps {
    workItems?: WorkItem[];
}

const defaultWorkItems: WorkItem[] = [
    {
        id: 1,
        title: "SaveInGold - Case Study",
        description: "SaveInGold — Redesigning Trust & Simplicity in Digital Gold Investing",
        backgroundImage: saveingoldImg,
        iconImage: arrowIcon,
        iconAlt: "Icon",
        link: "/save-in-gold-case-study"
    },
    {
        id: 2,
        title: "Socialpro - Case Study",
        description: "Designing for Impact: Streamlining Social Procurement with SocialPro",
        backgroundImage: socialproImg,
        iconImage: arrowIcon,
        iconAlt: "Icon",
        link: "/socialpro-case-study"
    },
    {
        id: 3,
        title: "All Hype - the Deal",
        description: "All Hype: A comprehensive travel planning app",
        backgroundImage: allHypeImg,
        iconImage: arrowIcon,
        iconAlt: "Icon",
        link: "/all-hype-case-study"
    },
    {
        id: 4,
        title: "Faroo - Case Study",
        description: "Built with a minimalist design to make shopping intuitive and enjoyable.",
        backgroundImage: farooImg,
        iconImage: arrowIcon,
        iconAlt: "Icon",
        link: "/faroo-case-study"
    },
];

const OurWork: React.FC<OurWorkProps> = ({ workItems = defaultWorkItems }) => {
    return (
        <section className="py-16 px-8 sm:px-8 md:px-10 max-w-7xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-16">
                <h2 className="font-outfit font-medium text-4xl text-black">Our Work</h2>
            </div>

            {/* Work Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {workItems.map((work) => (
                    <WorkCard key={work.id} work={work} />
                ))}
            </div>
        </section>
    );
};

interface WorkCardProps {
    work: WorkItem;
}


const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
    // Define the card's inner content. This will be used inside either a <Link> or a <div>.
    const cardBody = (
        <>
            <div className={cn(
                "relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg mb-6",
                "transition-transform duration-300 group-hover:scale-105"
            )}>
                {/* Background Image */}
                <div className="relative w-full h-full">
                    <img
                        src={work.backgroundImage}
                        alt={`${work.title} background`}
                        className="w-full h-full object-cover"
                    />

                    {/* Centered Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className={cn(
                            "bg-white rounded-full p-4 shadow-lg",
                            "transition-transform duration-300 group-hover:scale-110"
                        )}>
                            <img
                                src={work.iconImage}
                                className="w-8 h-8"
                                alt={work.iconAlt}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Content */}
            <div>
                <h3 className="font-outfit font-medium text-2xl md:text-3xl text-black mb-4">
                    {work.title}
                </h3>
                <p className="font-outfit font-normal text-base text-black opacity-80">
                    {work.description}
                </p>
            </div>
        </>
    );

    // If a link is provided in the work item, wrap the card body in a Link component.
    if (work.link) {
        return (
            <Link to={work.link} className="group mb-4 block no-underline">
                {cardBody}
            </Link>
        );
    }

    // Otherwise, render it as a standard non-clickable div.
    return (
        <div className="group mb-4">
            {cardBody}
        </div>
    );
};

export default OurWork;