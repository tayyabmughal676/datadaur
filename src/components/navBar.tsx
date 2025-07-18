import React, {useState, useEffect, useRef} from 'react';
import {useLocation} from 'react-router-dom';
import {cn} from "../lib/utils.tsx";
import logoImg from "../assets/logo.svg";
import {Menu, X} from 'lucide-react';

import whatsappIcon from '../assets/whatsapp-icon.svg';
import emailIcon from '../assets/msg-icon.svg';

const NavBar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
    const {pathname} = useLocation();
    const mobileMenuRef = useRef<HTMLDivElement>(null); // Ref for mobile menu container

    const navItems = [
        {name: 'Home', href: '/'},
        {name: 'Portfolio', href: '/portfolio'},
        {name: 'Team', href: '/team'},
        {name: 'About', href: '/about'},
        {name: 'Contact Us', href: '/contact-us'},
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const openContactPopup = () => {
        setIsContactPopupOpen(true);
    };

    const closeContactPopup = () => {
        setIsContactPopupOpen(false);
    };

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Check if the click is outside the mobile menu ref and not on the menu button itself
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) &&
                !(event.target as HTMLElement).closest('button[aria-controls="mobile-menu"]')) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        if (isContactPopupOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isContactPopupOpen]);

    return (
        <>
            {/* Main nav container: fixed, full width, top, high z-index */}
            <nav className="w-full fixed top-0 z-50">
                {/* Desktop Navbar - visible on md and up */}
                {/* Adjusted padding to be inside this div, and added ref */}
                <div className="hidden md:block max-w-7xl mx-auto px-4 lg:px-8 lg:pt-2" ref={mobileMenuRef}>
                    <div className="bg-[#F8FBFF] rounded-4xl px-6 py-4 shadow-xl border border-white/20">
                        <div className="flex items-center justify-between">
                            {/* Logo */}
                            <div className="flex items-center">
                                <a href="/">
                                    <img
                                        src={logoImg}
                                        alt="DataDaur"
                                        className="h-8 w-auto"
                                    />
                                </a>
                            </div>

                            {/* Desktop Navigation Items */}
                            <div className="flex items-center space-x-4 gap-6">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={cn(
                                                "font-outfit text-md transition-all duration-200 py-1",
                                                isActive
                                                    ? "font-bold text-[#604CC3] border-b-2 border-[#604CC3]"
                                                    : "font-normal text-gray-700 hover:text-[#604CC3]"
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Desktop Contact Us Button */}
                            <div className="flex items-center">
                                <button
                                    onClick={openContactPopup}
                                    className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white px-6 py-2.5 rounded-3xl font-outfit font-medium text-sm hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Navbar - visible on screens less than md */}
                {/* Ref for mobile menu container */}
                <div className="md:hidden w-full" ref={mobileMenuRef}>
                    <div className="bg-[#F8FBFF] backdrop-blur-sm px-6 py-4 shadow-xl">
                        <div className="flex items-center justify-between">
                            {/* Logo */}
                            <div className="flex items-center">
                                <a href="/">
                                    <img
                                        src={logoImg}
                                        alt="DataDaur"
                                        className="h-8 w-auto"
                                    />
                                </a>
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="flex items-center">
                                <button
                                    onClick={toggleMobileMenu}
                                    className="inline-flex items-center justify-center p-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-[#604CC3] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#604CC3] transition-all duration-200"
                                    aria-expanded={isMobileMenuOpen}
                                    aria-controls="mobile-menu"
                                    aria-label="Toggle navigation menu"
                                >
                                    {isMobileMenuOpen ? (
                                        <X className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <Menu className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    {isMobileMenuOpen && (
                        <div className="absolute top-full left-0 right-0 z-40" id="mobile-menu">
                            <div className="bg-[#F8FBFF] backdrop-blur-sm shadow-lg overflow-hidden">
                                <div className="px-6 pt-2 pb-3 flex flex-col items-center space-y-4 mb-6">
                                    {navItems.map((item) => {
                                        const isActive = pathname === item.href;
                                        return (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={cn(
                                                    "py-1 text-base font-outfit font-medium",
                                                    isActive
                                                        ? "text-[#604CC3] font-bold border-b-2 border-[#604CC3]" // Corrected border-b-3 to border-b-2
                                                        : "text-black"
                                                )}
                                                aria-current={isActive ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Contact Popup Modal */}
            {isContactPopupOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/15 backdrop-blur-sm"
                        onClick={closeContactPopup}
                    ></div>

                    {/* Modal Content */}
                    <div
                        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden border-2 border-transparent bg-gradient-to-r from-[#604CC3] to-[#2E245D] p-0.5">
                        <div className="bg-white rounded-2xl p-8">
                            {/* Close Button */}
                            <button
                                onClick={closeContactPopup}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                            >
                                <X className="w-5 h-5 text-gray-500"/>
                            </button>

                            {/* Header */}
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#604CC3] to-[#2E245D] bg-clip-text text-transparent font-outfit">
                                    Contact Us
                                </h2>
                            </div>

                            {/* Contact Options */}
                            <div className="space-y-6">
                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/971552025311"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <div
                                        className="w-16 h-16 bg-[#E0E9F7] rounded-full flex items-center justify-center flex-shrink-0">
                                        <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8"/>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold bg-gradient-to-r from-[#604CC3] to-[#2E245D] bg-clip-text text-transparent font-outfit">
                                            Via WhatsApp
                                        </h3>
                                    </div>
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:contact@datadaur.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <div
                                        className="w-16 h-16 bg-[#E0E9F7] rounded-full flex items-center justify-center flex-shrink-0">
                                        <img src={emailIcon} alt="Email" className="w-8 h-8"/>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold bg-gradient-to-r from-[#604CC3] to-[#2E245D] bg-clip-text text-transparent font-outfit">
                                            Via Email
                                        </h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;
