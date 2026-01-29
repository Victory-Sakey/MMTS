"use client";

import Link from 'next/link';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div>
                        <div className="flex items-center mb-6">
                            <img src="/images/mm logo.jpg" alt="MMTS Logo" className="w-12 h-12 rounded-full mr-3 border-2 border-white/20" />
                            <span className="text-xl font-berkshire text-green-400">Meaningful Minds</span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            A change agent dedicated to improving lives through compassionate, evidence-based mental health care.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Placeholders if needed */}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-gray-400 hover:text-green-400 transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-green-400 transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-green-400 transition-colors">Services</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-green-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-gray-400">606 Edmondson Ave Suite 200<br />Catonsville, MD 21228</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:410-449-3988" className="text-gray-400 hover:text-green-400 transition-colors">410-449-3988</a>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:meaningfulmindsllc@gmail.com" className="text-gray-400 hover:text-green-400 transition-colors break-words">meaningfulmindsllc@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Accreditations - Using Partners Image */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">Our Partners</h4>
                        <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                            <img
                                src="/images/partners_banner.png"
                                alt="Our Partners: Circuit Court for Baltimore City, Addiction Wellness Center, University of Maryland, ALTA Healthcare"
                                className="max-w-full h-auto"
                            />
                        </div>
                        {/* CARF and other logos if available in mmm partners logos.jpg */}
                        <div className="mt-4 bg-white p-2 rounded-lg flex items-center justify-center">
                            <img
                                src="/images/mmm partners logos.jpg"
                                alt="Accreditations including CARF"
                                className="max-w-full h-auto max-h-20 object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center bg-gray-900">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Meaningful Minds Therapeutic Services, LLC. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm text-gray-500">
                        <Link href="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-green-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
