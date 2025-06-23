import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom'; // 1. Import useLocation to detect the current page
import { cn } from "../lib/utils.tsx";
import logoImg from "../assets/logo.svg";
import { Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { pathname } = useLocation(); // Get the current URL path
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    // Removed the hardcoded 'active' property
    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Team', href: '/team' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
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

    return (
        <nav className="w-full px-4 sm:px-6 lg:px-8 pt-6 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto relative" ref={mobileMenuRef}>
                <div className="bg-white/80 backdrop-blur-sm rounded-4xl px-6 py-4 shadow-xl border border-white/20">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <img
                                src={logoImg}
                                alt="DataDaur"
                                className="h-8 w-auto"
                            />
                        </div>

                        {/* Desktop Navigation Items */}
                        <div className="hidden md:flex items-center space-x-4 gap-6">
                            {navItems.map((item) => {
                                // 2. Check if the link is active by comparing with the current pathname
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
                        <div className="hidden md:flex items-center">
                            <button className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white px-6 py-2.5 rounded-xl font-outfit font-medium text-sm hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                                Contact Us
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#604CC3]"
                                aria-expanded={isMobileMenuOpen}
                                aria-controls="mobile-menu"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMobileMenuOpen ? (
                                    <X className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Menu className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-2 absolute top-full left-0 right-0 z-40" id="mobile-menu">
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg ring-1 ring-[#604CC3] ring-opacity-5 overflow-hidden mx-4 sm:mx-0">
                            <div className="px-2 pt-2 pb-3 flex flex-col items-center space-y-1 sm:px-3">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={cn(
                                                "px-3 py-1 text-base font-outfit font-medium",
                                                isActive
                                                    ? "text-[#604CC3] font-bold border-b-2 border-[#604CC3]"
                                                    : "text-black"
                                            )}
                                            aria-current={isActive ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </a>
                                    );
                                })}
                            </div>
                            {/* Centered Contact Us button */}
                            <div className="px-5 py-4 flex justify-center">
                                <button className="bg-gradient-to-r from-[#604CC3] to-[#2E245D] text-white px-6 py-2.5 rounded-xl font-outfit font-medium text-sm hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;