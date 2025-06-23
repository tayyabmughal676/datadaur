import React from 'react';
import { cn } from '../lib/utils';

// 1. Import the images at the top of the file
import phoneMockupsImg from '../assets/phone-mockups.svg';
import arrowIcon from '../assets/arrow-1.svg';

interface WorkItem {
    id: number;
    title: string;
    description: string;
    backgroundImage: string;
    iconImage: string;
    iconAlt: string;
}

interface OurWorkProps {
    workItems?: WorkItem[];
}

// 2. Update the array to use the imported image variables
const defaultWorkItems: WorkItem[] = [
    {
        id: 1,
        title: "Zarinaya - the Deal",
        description: "Built with a minimalist design to make shopping intuitive and enjoyable.",
        backgroundImage: phoneMockupsImg,
        iconImage: arrowIcon,
        iconAlt: "Zarinaya icon"
    },
    {
        id: 2,
        title: "Zarinaya - the Deal",
        description: "Built with a minimalist design to make shopping intuitive and enjoyable.",
        backgroundImage: phoneMockupsImg,
        iconImage: arrowIcon,
        iconAlt: "Zarinaya icon"
    },
    {
        id: 3,
        title: "Zarinaya - the Deal",
        description: "Built with a minimalist design to make shopping intuitive and enjoyable.",
        backgroundImage: phoneMockupsImg,
        iconImage: arrowIcon,
        iconAlt: "Zarinaya icon"
    },
    {
        id: 4,
        title: "Zarinaya - the Deal",
        description: "Built with a minimalist design to make shopping intuitive and enjoyable.",
        backgroundImage: phoneMockupsImg,
        iconImage: arrowIcon,
        iconAlt: "Zarinaya icon"
    },
    {
        id: 5,
        title: "Zarinaya - the Deal",
        description: "Built with a minimalist design to make shopping intuitive and enjoyable.",
        backgroundImage: phoneMockupsImg,
        iconImage: arrowIcon,
        iconAlt: "Zarinaya icon"
    },
    {
        id: 6,
        title: "Zarinaya - the Deal",
        description: "Built with a minimalist design to make shopping intuitive and enjoyable.",
        backgroundImage: phoneMockupsImg,
        iconImage: arrowIcon,
        iconAlt: "Zarinaya icon"
    }
];

const OurWork: React.FC<OurWorkProps> = ({ workItems = defaultWorkItems }) => {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
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

//hello
const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
    return (
        <div className="group mb-4">
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
        </div>
    );
};

export default OurWork;