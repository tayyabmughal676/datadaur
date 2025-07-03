import React from 'react';

import sarahImg from "../assets/ahmad-persona.svg";
import ahmadImg from "../assets/sarah-persona.svg";
import farooWireFramesImg from "../assets/faroo-wireframe.svg";
import farooCreateAccImg from "../assets/faroo-create-account.svg";
import farooAccImg from "../assets/faroo-inside.svg";
import farooPetsImg from "../assets/faroo-pets.svg";
import farooCaretakerImg from "../assets/faroo-caretaker.svg";
import farooPaymentImg from "../assets/faroo-payment.svg";
import farooAuthImg from "../assets/faroo-auth.svg";
import farooTeamImg from "../assets/faroo-team-member.svg";
import farooBookingDetImg from "../assets/faroo-booking-det.svg";
import farooBookingCompImg from "../assets/faroo-booking-comp.svg";
import farooFriendsImg from "../assets/faroo-friends.svg";






const FarooContent: React.FC = () => {
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
                    <div className="">
                        <h3 className="service-heading-32 mb-4 sm:mb-6">
                            1. Introduction
                        </h3>
                        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <p className="service-body-text">
                                Faroo is a platform designed to help users find and book pet grooming services effortlessly. The previous iteration of the platform had several usability challenges that hindered seamless navigation and booking experiences. This case study explores the end-to-end process of identifying user pain points, conducting research, designing a more intuitive interface, and measuring the impact of these improvements.
                            </p>
                        </div>
                    </div>

                    <div className="">
                        <h3 className="service-heading-32 mb-4 sm:mb-6">
                            2. Problem Statement
                        </h3>
                        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <p className="service-body-text">
                                Many users encountered challenges in efficiently using the platform due to various UX and UI shortcomings. The primary issues identified were:
                                <ul className="space-y-4 ml-4 mt-1">
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="service-body-text">
                                            A complex booking process that required too many steps, leading to user drop-offs.
                                        </p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="service-body-text">
                                            Lack of transparency in service details, pricing, and availability.
                                        </p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="service-body-text">
                                            Inadequate search and filtering options, making it difficult to find relevant services.
                                        </p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="service-body-text">
                                            Inconsistent UI elements, causing confusion and reducing trust.
                                        </p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="service-body-text">
                                            Absence of a user review system, making it hard for customers to make informed decisions.
                                        </p>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className="">
                        <h3 className="service-heading-32 mb-4 sm:mb-6">
                            3. Goals & Objectives
                        </h3>
                        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <p className="service-body-text">
                                The objective of the redesign was to transform Faroo into a seamless, user-friendly, and efficient platform by:
                                <ul className="space-y-4 ml-4 mt-1">
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="service-body-text">
                                            Streamlining the booking process to reduce friction and drop-off rates.
                                        </p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="service-body-text">
                                            Enhancing information clarity to ensure users understand service details easily.
                                        </p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="service-body-text">
                                            Improving the search and filtering system to offer more personalized results.
                                        </p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="service-body-text">
                                            Establishing a consistent and modern UI to enhance user trust and engagement.
                                        </p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="service-body-text">
                                            Integrating a review and rating system to help users make informed choices
                                        </p>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>


                    <div className="">
                        <h3 className="service-heading-32 mb-4 sm:mb-6">
                            4. My Role
                        </h3>
                        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <p className="service-body-text">
                                As the UX Designer, I led the design process from user research to final prototypes. My role involved identifying user pain points, conducting user interviews, and designing intuitive user flows and interfaces. I aimed to create a seamless user experience that caters to both first-time users and frequent travelers.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-8 sm:mb-12 lg:mb-12">
                    <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl mb-4 gradient-text">User Personas</h2>
                    <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl mb-8">
                        These two personas represent key user segments of the gold trading app. Ahmed Khalid reflects traditional investors seeking a secure, easy-to-use platform for bulk transactions, while Layla Hassan represents tech-savvy traders who rely on real-time data and analytics for short-term gains. Together, they ensure the app meets the needs of both long-term investors and active traders.
                    </p>

                    <div className="mb-12">
                        <div className="relative">
                            <img
                                src={sarahImg}
                                alt="Sarah"
                                className="w-full h-auto mb-4 transition-transform duration-300 hover:scale-90"
                            />
                            <img
                                src={ahmadImg}
                                alt="Ahmad"
                                className="w-full h-auto transition-transform duration-300 hover:scale-90"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-8 sm:mb-12">
                    <div className="mb-12">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl mb-8 gradient-text">
                           Low-Fidelity Wireframes
                        </h2>

                        <div>
                            <h3 className="service-heading-32 mb-4 sm:mb-6">
                                Wireframes
                            </h3>
                            <div className="relative">
                                <img
                                    src={farooWireFramesImg}
                                    alt="Faroo Wireframes"
                                    className="w-full h-auto mb-4 transition-transform duration-300 hover:scale-90"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8 sm:mb-12">
                    <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl mb-8 gradient-text">
                        Solution Overview
                    </h2>
                    <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl mb-8">
                        Faroo was designed to provide a tailored experience for two types of users: pet owners and administrators. The solution includes user-friendly mobile interfaces for Pet Owners and Groomers.
                    </p>

                    <div>
                        <h3 className="service-heading-32 mb-4 sm:mb-6">
                            Key Features
                        </h3>
                        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <h4 className="service-heading-3 mb-4 sm:mb-6">
                                1. Authentication:
                            </h4>
                            <p className="service-body-text">
                                Secure and quick authentication process that allows pet owners to quickly register to the application to access all the key features of the application. After verifying the email, users can add personal information including the address which will be used as a booking address by default.
                            </p>
                            <div className="relative">
                                <img
                                    src={farooCreateAccImg}
                                    alt="Faroo Wireframes"
                                    className="w-full h-auto mb-4 transition-transform duration-300 hover:scale-90"
                                />
                            </div>
                            <h4 className="service-heading-3 mb-4 sm:mb-6">
                                2. Service Booking System (Pet Owners):
                            </h4>
                            <p className="service-body-text">
                                ✔ Intuitive Interface: Easy navigation for booking grooming sessions.<br/>
                                ✔ Service Selection: Choose from services like Luxury Full Dog Grooming.<br/>
                                ✔ Team Selection: Pick a grooming team (2 groomers per team).<br/>
                                ✔ Time Slot Preferences: Select preferred appointment times.<br/>
                                ✔ Cart: At cart screen, users can always add more pets if desired.<br/>
                            </p>
                            <div className="relative">
                                <img
                                    src={farooAccImg}
                                    alt="Faroo Wireframes"
                                    className="w-full h-auto mb-4 transition-transform duration-300 hover:scale-90"
                                />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2">

                                <div className=" lg:order-2">
                                    <img
                                        src={farooPetsImg}
                                        alt="Faroo Pets"
                                        className="w-full h-auto transition-transform duration-300 hover:scale-90"
                                    />
                                </div>

                                <div className=" lg:order-1">
                                    <h4 className="service-heading-3 mb-4 sm:mb-6">
                                        3. Pets:
                                    </h4>
                                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                        <p className="service-body-text">
                                            ✔ Pets: The application allows users to add as many pets as they want. Users are required to add all the relevant pet information such as name, age, size, specie, and Vaccination Certificate.<br/>
                                            ✔ Health Records: The app maintains vaccination records and medical history for easy reference.
                                        </p>
                                    </div>
                                </div>

                                <div className="lg:order-3">
                                    <img
                                        src={farooCaretakerImg}
                                        alt="Faroo Caretakers"
                                        className="w-full h-auto transition-transform duration-300 hover:scale-90"
                                    />
                                </div>

                                <div className=" lg:order-4">
                                    <h4 className="service-heading-3 mb-4 sm:mb-6">
                                        4. Caretakers:
                                    </h4>
                                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                        <p className="service-body-text">
                                            ✔ Caretakers are assigned to a pet for a grooming session in case customers are not available themselves. Pet owners can always assign a service to the pet's caretaker during booking process.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h4 className="service-heading-3 mb-4 sm:mb-6">
                                5. Payment:
                            </h4>
                            <p className="service-body-text">
                                To enhance customer convenience, the initial launch of Faroo offered multiple payment options, including online card payments, POS (point of sale), and cash. Payments are processed only after the groomer successfully completes the booking, ensuring customer satisfaction and service quality before any transaction is finalized.
                            </p>
                            <div className="relative">
                                <img
                                    src={farooPaymentImg}
                                    alt="Faroo Wireframes"
                                    className="w-full h-auto mb-4 transition-transform duration-300 hover:scale-90"
                                />
                            </div>

                        </div>

                    </div>

                </div>

                <div className="mb-8 sm:mb-12">
                    <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl mb-12 gradient-text">
                        Faroo Groomers Application
                    </h2>
                    <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl mb-8">
                        Faroo Groomers App is dedicated to the groomers, allowing them to efficiently manage their schedules, view upcoming bookings, and update service statuses. This user-friendly application helps them track appointments, handle client requests, and streamline their workflow for a seamless grooming experience.
                    </p>
                </div>

                <div className="mb-8 sm:mb-12">
                    <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl mb-8 gradient-text">
                        Key Features
                    </h2>

                    <div>
                        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <h3 className="service-heading-3 mb-4 sm:mb-6">
                                1. Authentication:
                            </h3>
                            <p className="service-body-text">
                                The authentication process for groomers is pretty straight forward. An invitation email containing their username and one-time password is send to them to their business email "groomer@faroopets.com". After successfully registering their account, they can set their own desired password.
                            </p>
                            <div className="relative">
                                <img
                                    src={farooAuthImg}
                                    alt="Faroo Authentication "
                                    className="w-full h-auto mb-4 transition-transform duration-300 hover:scale-90"
                                />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                                <div className=" lg:order-2">
                                    <img
                                        src={farooTeamImg}
                                        alt="Faroo Team Members"
                                        className="w-full h-auto transition-transform duration-300 hover:scale-90"
                                    />
                                </div>

                                <div className=" lg:order-1">
                                    <h3 className="service-heading-3 mb-4 sm:mb-6">
                                        2. Team Member:
                                    </h3>
                                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                        <p className="service-body-text">
                                            After completing the registration process, groomers are introduced to their assigned team member. Grooming services are carried out by a team of professionals rather than individual groomers, ensuring a collaborative approach that enhances service quality and efficiency.
                                        </p>
                                    </div>
                                </div>

                                <div className="lg:order-3">
                                    <img
                                        src={farooBookingDetImg}
                                        alt="Faroo Booking Details"
                                        className="w-full h-auto transition-transform duration-300 hover:scale-90"
                                    />
                                </div>

                                <div className=" lg:order-4">
                                    <h3 className="service-heading-3 mb-4 sm:mb-6">
                                        3. Booking Details:
                                    </h3>
                                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                        <p className="service-body-text">
                                            ✔ Schedule Screen: Bookings are organized by date. Groomers can view distances between appointments and access a map for directions.<br/>
                                            ✔ Start Booking: The "Start Booking" button becomes available one hour before the appointment
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h4 className="service-heading-3 mb-4 sm:mb-6">
                                4. Booking Completion:
                            </h4>
                            <p className="service-body-text">
                                After finishing a booking, groomers can tap the "Complete Booking" button, which triggers a pop-up prompting them to send a payment notification to the customer, as payment is collected after the grooming session. Once the customer makes the payment, the groomer can confirm receipt, thereby finalizing the booking and completing the payment process.
                            </p>
                            <div className="relative">
                                <img
                                    src={farooBookingCompImg}
                                    alt="Faroo Booking Complaints"
                                    className="w-full h-auto mb-4 transition-transform duration-300 hover:scale-90"
                                />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                                <div className=" lg:order-2">
                                    <img
                                        src={farooFriendsImg}
                                        alt="Faroo Friends"
                                        className="w-full h-auto transition-transform duration-300 hover:scale-90"
                                    />
                                </div>

                                <div className=" lg:order-1">
                                    <h3 className="service-heading-3 mb-4 sm:mb-6">
                                        Friends
                                    </h3>
                                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                        <p className="service-body-text">
                                            Here users can see the route between the two itineraries depending on the mean of transportation.
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>

                <div className="mb-8 sm:mb-12">
                    <div className="">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl mb-4 gradient-text">
                            Implementation Challenges
                        </h2>
                        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <p className="service-body-text">
                                Beta testing of the application showed a promising result. Faroo successfully addressed the pain points in the pet grooming industry by providing a unified platform for booking, managing, and delivering grooming services. The app achieved the following:
                                <ul className="space-y-4 ml-4 mt-1">
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="service-body-text">
                                            Reduced Appointment Booking Time by 50%: With the intuitive booking system and geolocation features, pet owners could schedule grooming sessions in half the time previously required.
                                        </p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="service-body-text">
                                            Improved Customer Satisfaction: The personalized grooming services and feedback system resulted in higher user ratings, with an average rating of 4.8 out of 5.
                                        </p>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="service-body-text">
                                            Increased Groomer Efficiency by 30%: The route optimization and daily dashboard features enabled groomers to handle more appointments in a day with less travel time.
                                        </p>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-8 sm:mb-12">
                    <div className="">
                        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl mb-4 gradient-text">
                            Future Enhancements
                        </h2>
                        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <ul className="space-y-4 ml-4 mt-1">
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                                    <p className="service-body-text">
                                        Advanced Route Planning: Adding real-time traffic updates to further enhance the route optimization for groomers.
                                    </p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                                    <p className="service-body-text">
                                        Loyalty Program: Implementing a rewards program for repeat customers to encourage user retention.
                                    </p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                                    <p className="service-body-text">
                                        Machine Learning for Product Recommendations: Using machine learning algorithms to suggest personalized pet care products based on the pet's grooming history and profile.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mb-8 sm:mb-12 text-center">
                    <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl gradient-text mb-8">
                        Thank You for Visiting this Case Study
                    </h2>
                    <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl">
                        I would love to bring my creativity and skills to your team. To see more of my work or discuss opportunities, please visit my portfolio at Behance and Dribble, or contact me directly.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default FarooContent;