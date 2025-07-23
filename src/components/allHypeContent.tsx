import React from 'react';

import jackPerterImg from "../assets/allhype-jack-peterson.svg";
import emmaJohnImg from "../assets/allhype-emma-john.svg";
import userFlowChartImg from "../assets/allhype-user-flowchart.svg";
import wireFramesImg from "../assets/allhype-wireframes.svg";
import allHypeAuthenticationImg from "../assets/all-hype-authentication.svg";
import myTripCalenderImg from "../assets/allhype-my-calender-trip.png";
import travelModeImg from "../assets/allhype-travel-mode.svg";
import allHypeSelectLocationImg from "../assets/allhype-select-location.svg";
import allHypeFriendsImg from "../assets/all-hype-friends.svg";


const AllHypeContent: React.FC = () => {
    return (
        <div className="bg-white text-black">
            <div className="max-w-7xl mx-auto px-10 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-12">
                {/* Header */}
                <div className="mb-8 sm:mb-12">
                    <h1 className="font-medium text-3xl sm:text-4xl lg:text-5xl gradient-text leading-tight mb-2">
                        All Hype: A comprehensive travel planning app
                    </h1>
                </div>
                <div className="mb-8 sm:mb-12">
                    <div className="bg-gradient-note border-l-4 border-gradient-primary md:px-12 p-3 sm:p-4 rounded-lg">
                        <h3 className="text-[#604CC3] text-base sm:text-lg lg:text-xl mb-4">
                            <strong>About Client</strong>
                        </h3>
                        <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl mb-4">
                            <strong className="text-[#604CC3]">Client:</strong> All Hype
                        </p>
                        <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl mb-4">
                            <strong className="text-[#604CC3]">Project:</strong> Designing a travel itinerary
                            application.
                        </p>
                        <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl mb-4">
                            <strong className="text-[#604CC3]">My Role:</strong> UX/UI Designer
                        </p>
                        <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl mb-4">
                            <strong className="text-[#604CC3]">Summary:</strong> All Hype is a user-friendly travel
                            planning app that simplifies trip organization with interactive tools and real-time
                            navigation. Users can create, manage, and reuse itineraries, access past trips, and share
                            plans seamlessly. Designed for frequent and casual travellers, All Hype offers an intuitive
                            experience that saves time and enhances the travel process.
                        </p>
                    </div>
                </div>

                <div className="mb-8 sm:mb-12">
                    <div className="">
                        <h3 className="service-heading-3 mb-4 sm:mb-6">
                            Problem
                        </h3>
                        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <p className="service-body-text">
                                Planning a trip can be overwhelming, with users often struggling to organize activities,
                                find transportation, and manage itineraries. Traditional travel planning tools often
                                lack interactive features and the ability to store, share, or reuse past itineraries,
                                leading to repetitive and inefficient processes.
                            </p>
                        </div>
                    </div>

                    <div className="">
                        <h3 className="service-heading-3 mb-4 sm:mb-6">
                            Proposed Solution
                        </h3>
                        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <p className="service-body-text">
                                All Hype offers a one-stop solution for travellers by providing tools to create, store,
                                and manage itineraries. It integrates Google Maps for real-time navigation,
                                transportation assistance, and interactive itineraries that users can follow in real
                                time. The History feature allows users to access previous trips, share plans with
                                others, and reuse itineraries, making future travel planning effortless.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-8 sm:mb-12">
                    <h2 className="text-4xl font-semibold gradient-text mb-12">Design Process</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
                        <div
                            className="card-gradient rounded-2xl text-center p-8 text-white shadow-lg flex flex-col transition-transform duration-300 hover:scale-105">
                            <h2 className="text-2xl font-normal mb-6">Step 1: Requirement Analysis</h2>
                            <p className="text-lg leading-relaxed">
                                I started by understanding user needs and gathering specific project requirements,
                                including features like itinerary planning, real-time navigation, and trip history
                                management.
                            </p>
                        </div>

                        <div
                            className="card-gradient rounded-2xl text-center p-8 text-white shadow-lg flex flex-col transition-transform duration-300 hover:scale-105">
                            <h2 className="text-2xl font-normal mb-6">Step 2: Ideation</h2>
                            <p className="text-lg leading-relaxed">
                                Based on insights, I brainstormed the potential solutions and sketching out ideas that
                                could improve the travel planning experience, including tools for interactive maps, trip
                                sharing, and itinerary reuse.
                            </p>
                        </div>

                        <div
                            className="card-gradient rounded-2xl text-center p-8 text-white shadow-lg flex flex-col transition-transform duration-300 hover:scale-105">
                            <h2 className="text-2xl font-normal mb-6">Step 3: Design</h2>
                            <p className="text-lg leading-relaxed">
                                The next step was to create wireframes and mockups to visualize the app's layout and
                                user flows, ensuring a clean and intuitive user interface that aligns with the user's
                                travel needs.
                            </p>
                        </div>

                        <div
                            className="card-gradient rounded-2xl text-center p-8 text-white shadow-lg flex flex-col transition-transform duration-300 hover:scale-105">
                            <h2 className="text-2xl font-normal mb-6">Step 4: Prototype</h2>
                            <p className="text-lg leading-relaxed">
                                After designing the Hi-fi Design, I build an interactive prototype to demonstrate how
                                the app functions, from trip creation to accessing previous itineraries and navigating
                                through the map.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8">
                        <div
                            className="card-gradient rounded-2xl text-center p-8 text-white shadow-lg max-w-md w-full transition-transform duration-300 hover:scale-105">
                            <h2 className="text-2xl font-normal mb-6 text-center">Step 5: Testing</h2>
                            <p className="text-lg leading-relaxed text-center">
                                I conducted usability tests with potential users to gather feedback and refine the
                                design based on their pain points and insights, ensuring an optimal user experience.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-8 sm:mb-12">
                    <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl mb-4 gradient-text">User Personas</h2>
                    <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl mb-8">
                        Based on the research, I created two primary user personas that guided the design and
                        functionality decisions.
                    </p>
                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                        <h3 className="service-heading-3 mb-4 sm:mb-6">
                            My Role
                        </h3>
                        <p className="service-body-text">
                            As the UX Designer, I led the design process from user research to final prototypes. My role
                            involved identifying user pain points, conducting user interviews, and designing intuitive
                            user flows and interfaces. I aimed to create a seamless user experience that caters to both
                            first-time users and frequent travelers.
                        </p>
                    </div>
                    <div className="mb-12">
                        <div className="relative">
                            <img
                                src={jackPerterImg}
                                alt="Jack Peterson"
                                className="w-full h-auto mb-4 transition-transform duration-300 hover:scale-90"
                            />
                            <img
                                src={emmaJohnImg}
                                alt="Emma Johnson"
                                className="w-full h-auto transition-transform duration-300 hover:scale-90"
                            />
                        </div>
                    </div>

                    <div className="mb-12">
                        <h3 className="service-heading-3 mb-4 sm:mb-6">
                            User Flow
                        </h3>
                        <div className="relative">
                            <img
                                src={userFlowChartImg}
                                alt="AllHype User Flowchart"
                                className="w-full h-auto mb-4 transition-transform duration-300 hover:scale-90"
                            />
                        </div>
                    </div>

                    <div className="mb-12">
                        <h3 className="service-heading-3 mb-4 sm:mb-6">
                            Wireframes
                        </h3>
                        <div className="relative">
                            <img
                                src={wireFramesImg}
                                alt="AllHype WireFrame"
                                className="w-full h-auto mb-4 transition-transform duration-300 hover:scale-90"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-8 sm:mb-12">
                    <div className="mb-8">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl mb-4 gradient-text">
                            High-Fidelity Design
                        </h2>
                    </div>

                    <div className="mb-12">
                        <div className="mb-12">
                            <h3 className="service-heading-3 mb-4 sm:mb-6">
                                Authentication
                            </h3>
                            <p className="service-body-text">
                                The design for the "All Hype" travel app features a streamlined authentication flow,
                                presented across four key screens to guide users through account setup. After giving a
                                quick overview of the application at Get Started screen, Users are then directed to the
                                login screen, where fields for email and password are provided, alongside options to
                                reset forgotten passwords or register for a new account. The registration screen allows
                                for account creation by entering basic information like full name, email, and password,
                                with a prompt to add a profile picture for personalization. Following registration, the
                                verification screen is displayed, requiring a 6-digit OTP sent via email to confirm the
                                user’s identity. The design uses a pink color scheme and simple typography to maintain a
                                welcoming look, while illustrations and icons add a touch of fun. Overall, a smooth flow
                                from one step to the next ensures that the process remains user-friendly and visually
                                appealing.
                            </p>
                        </div>

                        <div className="relative">
                            <img
                                src={allHypeAuthenticationImg}
                                alt="All Hype Authentication"
                                className="w-full h-auto mb-4 transition-transform duration-300 hover:scale-90"
                            />
                        </div>
                    </div>
                </div>


                <div className="mb-8 sm:mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl gradient-text leading-tight">
                                My Trips
                            </h2>

                            <div className="space-y-2 text-black">
                                <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                                    The "My Trips" page serves as the main hub of the application, where users can
                                    conveniently track their upcoming travel plans. The screen features a current-month
                                    calendar, with trips clearly marked on the corresponding dates, allowing users to
                                    quickly identify scheduled travel. Below the calendar, an "Upcoming Trips" section
                                    provides a detailed overview of all upcoming journeys, including the destination and
                                    travel dates for each trip.
                                </p>

                                <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                                    A floating "Plus" button at the bottom right enables users to easily create new
                                    trips, while the bottom navigation bar offers seamless access to other key features
                                    of the app, such as the itinerary and account pages, ensuring smooth and intuitive
                                    navigation throughout the application.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                <img
                                    src={myTripCalenderImg}
                                    alt="AllHype My Trip Calender"
                                    className=" transition-transform duration-300 hover:scale-90"/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mb-8 sm:mb-12">
                    <div className="flex items-start gap-2 sm:gap-4 mb-8">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text">
                            Travel Mode
                        </h2>
                    </div>
                    <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl mb-12">
                        Travel Mode offers a visually engaging and organized approach to managing travel itineraries.
                        The "My Itineraries" screen provides a clear overview of upcoming and completed trips, allowing
                        users to easily switch between them with dedicated tabs. Each itinerary card features the
                        destination, travel dates, and an image, making it easy to identify trips at a glance. The
                        dropdown menu for selecting the year enhances navigation, while the prominent "Travel Mode"
                        badge navigates users to the map of their trip destination with location pins indicating their
                        itinerary point of interest.. A floating "Plus" button in the bottom right encourages users to
                        add new trips effortlessly. The bottom navigation bar provides quick access to key features such
                        as My Trips, Itinerary, and the user profile, ensuring smooth navigation throughout the app. The
                        interface prioritizes simplicity and user experience, making trip management intuitive and
                        efficient. The trip detail screen shows all the itineraries for a particular trip, Users can
                        easily scroll through the dates to see the itinerary of a particular day.
                    </p>
                    <div className="relative">
                        <img
                            src={travelModeImg}
                            alt="AllHype Travel Mode" className="mb-12 transition-transform duration-300 hover:scale-90"/>
                    </div>

                    <div className="mb-12">
                        <h3 className="service-heading-3 mb-4 sm:mb-6">
                            Creating Itineraries
                        </h3>
                        <p className="service-body-text">
                            The application offers three main type of itineraries for users, Flight, Hotel, and an
                            Attraction. Each itinerary asks users to input information specific to that itinerary, for
                            example for flight, users will enter information such as flight number, departure and
                            arrival airports, Departure and arrival dates and time, and optional notes. Once user adds
                            this itinerary, a card is created inside the trip detail screen as shown in the 2nd Screen
                            below. Same process goes for the rest of itineraries too.
                        </p>
                        <p className="service-body-text">
                            The 4th Screen shows the distance between the two point of interests or itineraries (my
                            client preferred to call them Point of Interests but I prefer to go with more traditional
                            name). Coming back to the point, if a user taps on that distance, it opens up a map showing
                            the route between those itineraries depending on the mean of transportation.
                        </p>
                    </div>

                    <div className="relative">
                        <img
                            src={allHypeSelectLocationImg}
                            alt="All Hype Select Location"
                            className="w-full h-auto mb-12 transition-transform duration-300 hover:scale-90"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">

                        <div className="lg:order-2">
                            <img
                                src={allHypeFriendsImg}
                                alt="All Hype Friends"
                                className="w-full h-auto transition-transform duration-300 hover:scale-90"
                            />
                        </div>

                        <div className=" lg:order-1">
                            <h3 className="service-heading-3 mb-4 sm:mb-6">
                                Friends
                            </h3>
                            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                <p className="service-body-text">
                                    Here users can see the route between the two itineraries depending on the mean of
                                    transportation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8 sm:mb-12 text-center">
                    <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text mb-8">
                        Thank You for Visiting this Case Study
                    </h2>
                    <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl">
                        I would love to bring my creativity and skills to your team. To see more of my work or discuss
                        opportunities, please visit my portfolio at Behance and Dribble, or contact me directly.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AllHypeContent;
