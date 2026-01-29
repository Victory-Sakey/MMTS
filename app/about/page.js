import Link from 'next/link';

export default function About() {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/9953.jpg"
                        alt="Background"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-berkshire text-white mb-8 drop-shadow-lg animate-fade-in-up delay-100">
                        Our Mission
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto animate-fade-in-up delay-200">
                        Meaningful Minds Therapeutic Services is a change agent dedicated to improving the lives and social conditions for people with mental health, substance use and trauma-related challenges, by promoting health, wellness and recovery in a meaningful way.
                    </p>
                    <div className="mt-10 animate-fade-in-up delay-300">
                        <Link
                            href="/contact"
                            className="inline-block bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-xl"
                        >
                            Book An Appointment
                        </Link>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-green-50 skew-x-12 transform translate-x-20 -z-0"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 -z-0"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-green-500 rounded-tl-3xl"></div>
                                <div className="absolute -bottom-4 -right-4 w-24 h-24  border-b-4 border-r-4 border-blue-500 rounded-br-3xl"></div>
                                <img
                                    src="/images/f9d82190-a037-11ed-85e3-8bd5b2b54d4f.jpg"
                                    alt="Our Story"
                                    className="rounded-3xl shadow-2xl w-full  relative z-10"
                                />
                                <div className="absolute bottom-10 left-10 z-20 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-xs border-l-4 border-green-600">
                                    <p className="font-berkshire text-2xl text-gray-800 mb-2">"Put desire above fear"</p>
                                    <p className="text-sm text-gray-600 font-bold">- Jahneen Keatz Onyemachi</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-4xl md:text-5xl font-berkshire text-gray-800 mb-6">Our Story</h2>

                            <div className="prose prose-lg text-gray-600 leading-relaxed font-geist-sans">
                                <p>
                                    Meaningful Minds was born through the vision of founder <span className="font-bold text-green-700">Jahneen Keatz Onyemachi</span>. Jahneen had a vision to provide services to the community that speaks to the heart of the people, not the cookie-cutter same way of doing things.
                                </p>
                                <p>
                                    She has over 15 years of experience as a help agent serving our most vulnerable population that includes but not limited to the elderly, children and family, single mothers and fathers, LGBTQ+ and our returning citizens to society.
                                </p>
                                <p>
                                    Jahneen sees every individual as a human being and that is the foundation of Meaningful Minds. Everyone deserves to be treated with dignity and respect. You will always hear Jahneen say <span className="italic font-semibold text-gray-800">“put desire above fear”</span>. She believes, “if your desire to live better is stronger than your fear, it can and will happen”.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-inner mt-8">
                                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                                    <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Our Approach
                                </h3>
                                <p className="text-gray-600 mb-4 font-geist-sans">
                                    Our practice specializes in helping people who are struggling with addiction, social and life skills, or behavior management. If you are trying to navigate these areas of life, we’re confident that we have the experience to help you rediscover what brings happiness to your life.
                                </p>
                                <p className="text-gray-600 font-geist-sans">
                                    Our holistic approach will help get you on track to leading a happier, more fulfilling life by equipping you with the tools you need to more efficiently and confidently manage life’s challenges. It is never too late to start living the life you’ve always wanted. Our goal is to take you from “healing to wholeness”.
                                </p>
                            </div>

                            <div className="pt-6 border-t border-gray-100">
                                <p className="text-xl font-berkshire text-green-800">Jahneen Keatz Onyemachi</p>
                                <p className="text-sm tracking-wider text-gray-500 uppercase font-bold">Founder / CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-green-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/green-daisy-background-aesthetic-floral-letter-illustration-vector.png')] opacity-10 bg-cover bg-center"></div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-berkshire mb-8">Ready to rediscover your happiness?</h2>
                    <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
                        If you’re interested in becoming a better, happier, more fulfilled you, get started by reaching out today!
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-green-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-50 hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                        Schedule Your Appointment
                    </Link>
                </div>
            </section>
        </div>
    );
}
