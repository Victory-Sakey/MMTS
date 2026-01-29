"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const isActive = (path) => {
        return pathname === path;
    };

    return (
        <header className="relative">
            {/* Top Contact Bar */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-2">
                <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-8 text-sm">
                    <div className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <a href="mailto:meaningfulmindsllc@gmail.com" className="hover:underline">
                            meaningfulmindsllc@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <a href="tel:410-449-3988" className="hover:underline">
                            410-449-3988
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav
                className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-lg py-3' : 'shadow-md py-5'
                    }`}
            >
                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link className="flex items-center group" href="/">
                            <img
                                src="/images/mm logo.jpg"
                                alt="MMTS Logo"
                                className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'
                                    } w-auto group-hover:scale-105`}
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            <Link
                                href="/"
                                className={`relative px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-200 ${isActive('/')
                                    ? 'text-green-600'
                                    : 'text-gray-700 hover:text-green-600'
                                    }`}
                            >
                                Home
                                {isActive('/') && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 rounded-full"></span>
                                )}
                            </Link>
                            <Link
                                href="/about"
                                className={`relative px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-200 ${isActive('/about')
                                    ? 'text-green-600'
                                    : 'text-gray-700 hover:text-green-600'
                                    }`}
                            >
                                About Us
                                {isActive('/about') && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 rounded-full"></span>
                                )}
                            </Link>
                            <Link
                                href="/services"
                                className={`relative px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-200 ${isActive('/services')
                                    ? 'text-green-600'
                                    : 'text-gray-700 hover:text-green-600'
                                    }`}
                            >
                                Our Services
                                {isActive('/services') && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 rounded-full"></span>
                                )}
                            </Link>
                            <Link
                                href="/contact"
                                className={`relative px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-200 ${isActive('/contact')
                                    ? 'text-green-600'
                                    : 'text-gray-700 hover:text-green-600'
                                    }`}
                            >
                                Contact Us
                                {isActive('/contact') && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 rounded-full"></span>
                                )}
                            </Link>

                            {/* External Links with Buttons */}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-green-700 border border-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-200"
                                href="https://forms.gle/SYngRR6FtZ67UbB78"
                            >
                                Career
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 text-sm font-semibold uppercase tracking-wide bg-green-600 text-white rounded-lg hover:bg-green-700 hover:shadow-lg transition-all duration-200"
                                href="https://forms.gle/5WsGnkkdFrFPkRaF6"
                            >
                                Referral
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            type="button"
                            className="lg:hidden relative inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-green-50 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                            aria-controls="mobile-menu"
                            aria-expanded={mobileMenuOpen}
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6 transition-transform`}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                            <svg
                                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6 transition-transform`}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="px-4 pt-4 pb-3 space-y-1 bg-gray-50 border-t border-gray-200">
                        <Link
                            href="/"
                            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${isActive('/')
                                ? 'bg-green-600 text-white shadow-md'
                                : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                                }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${isActive('/about')
                                ? 'bg-green-600 text-white shadow-md'
                                : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                                }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/services"
                            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${isActive('/services')
                                ? 'bg-green-600 text-white shadow-md'
                                : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                                }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Our Services
                        </Link>
                        <Link
                            href="/contact"
                            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${isActive('/contact')
                                ? 'bg-green-600 text-white shadow-md'
                                : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                                }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact Us
                        </Link>

                        {/* Mobile External Links */}
                        <div className="pt-2 space-y-2 border-t border-gray-300">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-3 rounded-lg text-base font-medium text-green-700 border border-green-600 hover:bg-green-600 hover:text-white transition-all text-center"
                                href="https://forms.gle/SYngRR6FtZ67UbB78"
                            >
                                Career Opportunities
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-3 rounded-lg text-base font-medium bg-green-600 text-white hover:bg-green-700 transition-all text-center"
                                href="https://forms.gle/5WsGnkkdFrFPkRaF6"
                            >
                                Referral Form
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
