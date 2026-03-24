"use client";

import Link from 'next/link';

function Footer() {
    return (
        <footer className="bg-blue-950 text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <img className="rounded-[20px] w-[250px]" src="/images/mm logo.jpg" alt="Meaningful Minds Logo" />
                </Link>
                <div className="text-sm text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 flex flex-col justify-center items-center">
                    <p className="text-white pr-3 md:text-left text-center">
                        606 Edmondson Ave Suite 200
                        <br />
                        <a href="mailto:meaningfulmindsllc@gmail.com" className="hover:text-green-400 transition-colors">meaningfulmindsllc@gmail.com</a>
                        <br />
                        <a href="tel:410-449-3988" className="hover:text-green-400 transition-colors">410-449-3988</a>
                    </p>
                    <br />
                    <img className="mt-2 w-[80px] rounded-lg items-center align-middle justify-center" src="/images/IMG-20240903-WA0036(1).jpg" alt="" />
                </div>

                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center flex-col sm:justify-start">
                    <a href="mailto:meaningfulmindsllc@gmail.com" className="mt-2 mb-2 text-sm text-gray-200 hover:text-green-400 transition-colors">meaningfulmindsllc</a>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start space-x-4">
                        <a target="_blank" href="https://web.facebook.com/profile.php?id=100089789233240" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 transition-colors cursor-pointer">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a target="_blank" href="https://x.com/meaningful45835" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 transition-colors cursor-pointer">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/meaningfulmindsllc/" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 transition-colors cursor-pointer">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                    </span>
                </span>
            </div>
            <p className="text-gray-400 p-2">
                <img src="/images/mmm partners logos.jpg" alt="Partners logos" />
            </p>
        </footer>
    );
}

export default Footer;
