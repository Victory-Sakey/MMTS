import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

function Services() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            // Increased timeout and adjusted offset for sticky header
            if (element) {
                setTimeout(() => {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }, 300);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    const substancePrograms = [
        {
            id: "php",
            title: "Partial Hospitalization Program",
            subtitle: "Level II",
            description: "An intensive orientation and stabilization phase for clients starting Substance Use Disorder care. Clients receive comprehensive education on symptoms, effects, treatment of mental illness, and self-care strategies. This program typically runs 6 hours a day, 5 days a week.",
            color: "green",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            id: "iop",
            title: "Intensive Outpatient Program",
            subtitle: "Level 2.1",
            description: "Designed to provide support as you act steps towards independence. Whether stepping down from higher care or starting your journey, we create an individualized plan for early recovery. Typically runs 3-6 hours daily, 1-3 days a week.",
            color: "blue",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            id: "op",
            title: "Outpatient Program",
            subtitle: "Level I",
            description: "Our least intensive option providing regularly scheduled individual and group counseling. Addresses a variety of needs from situational stressors to trauma and addictions. Typically runs 3-4 hours a day, 1-3 days a week.",
            color: "purple",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        }
    ];

    const allProgramsIncludes = [
        "Substance Use assessment & evaluation",
        "Group and individual counseling",
        "Medication monitoring and education",
        "Drug Testing and Reporting",
        "Discharge planning & Aftercare",
        "Nutritious meals provided",
        "Transportation assistance"
    ];

    const prp = [
        {
            title: "Adult Psychiatric Rehabilitation",
            audience: "Adults (18+)",
            description: "A comprehensive approach helping individuals with mental illness achieve their goals. We focus on building support systems, developing coping strategies, and learning new skills for effective daily functioning.",
            activities: [
                "Self-Care & Independent Living",
                "Social/Interactive Skills",
                "Anger & Symptom Management",
                "Employment Goals",
                "Accessing Community Resources",
                "Personal Safety & Boundaries"
            ],
            eligibility: [
                "18 or older",
                "Actively in mental health treatment",
                "Referred by Licensed Professional",
                "Qualified behavioral health diagnosis",
                "Medical Assistance recipient"
            ]
        },
        {
            title: "Child & Adolescent Rehabilitation",
            audience: "Minors (5 – 17)",
            description: "Designed to complement therapy by providing family-focused, individualized rehabilitation activities. Services are offered on-site or off-site (home/community) to strengthen resilience.",
            activities: [
                "Self Care & Semi-Independent Living",
                "Social & Interactive Skills",
                "Anger Management",
                "Symptom Management",
                "Community Resources Access",
                "Age-Appropriate Boundaries"
            ],
            eligibility: [
                "5 – 17 years old",
                "Actively in mental health treatment",
                "Referred by Licensed Professional",
                "Behavioral health diagnosis",
                "Medical Assistance recipient"
            ]
        }
    ];

    return (
        <div className="services-page bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[500px] flex items-center justify-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/47250.jpg"
                        alt="Services Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-transparent to-gray-50"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                    <span className="text-green-400 font-bold tracking-widest uppercase mb-4 block animate-fade-in-up">Holistic Care</span>
                    <h1 className="text-5xl md:text-7xl font-berkshire text-white mb-6 drop-shadow-lg animate-fade-in-up delay-100">
                        Our Treatment Programs
                    </h1>
                    <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
                        From intensive stabilization to ongoing support, we offer a continuum of care tailored to where you are in your journey.
                    </p>
                </div>
            </section>

            {/* Substance Use Disorder Programs */}
            <section className="py-20 max-w-7xl mx-auto px-4 -mt-20 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
                    <div className="text-center mb-16">
                        <span className="text-green-600 font-bold uppercase tracking-wide text-sm">Recovery Journey</span>
                        <h2 className="text-3xl md:text-4xl font-berkshire text-gray-800 mt-2">Substance Use Disorder Programs</h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {substancePrograms.map((program, index) => (
                            <div
                                key={index}
                                id={program.id}
                                className={`group bg-white rounded-2xl p-8 border hover:border-${program.color}-400 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden`}
                            >
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-${program.color}-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110`}></div>

                                <div className={`relative z-10 inline-flex p-3 rounded-lg bg-${program.color}-100 text-${program.color}-600 mb-6`}>
                                    {program.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-gray-800 mb-1">{program.title}</h3>
                                <p className={`text-${program.color}-600 font-semibold text-sm uppercase tracking-wider mb-4`}>{program.subtitle}</p>

                                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                                    {program.description}
                                </p>

                                <Link to="/contact" className={`inline-flex items-center text-${program.color}-600 font-bold hover:underline`}>
                                    Get Started
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Common Includes List */}
                    <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center justify-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            All Substance Use Programs Include:
                            <span className="w-2 h-2 bg-green-500 rounded-full ml-3"></span>
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {allProgramsIncludes.map((item, index) => (
                                <div key={index} className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* PRP Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold uppercase tracking-wide text-sm">Skill Building</span>
                        <h2 className="text-3xl md:text-4xl font-berkshire text-gray-800 mt-2">Psychiatric Rehabilitation (PRP)</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto mt-4">Reducing functional impairments and developing skills for independence.</p>
                    </div>

                    <div className="space-y-24">
                        {prp.map((program, index) => (
                            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-start`}>
                                {/* Text Content */}
                                <div className="lg:w-1/2">
                                    <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase mb-4">
                                        {program.audience}
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-800 mb-6">{program.title}</h3>
                                    <p className="text-lg text-gray-600 mb-8 leading-relaxed border-l-4 border-blue-200 pl-4">
                                        {program.description}
                                    </p>

                                    <div className="bg-gray-50 rounded-xl p-6">
                                        <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                                            <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                            Core Activities
                                        </h4>
                                        <div className="grid grid-cols-2 gap-3">
                                            {program.activities.map((activity, idx) => (
                                                <div key={idx} className="flex items-center text-sm text-gray-600">
                                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                                                    {activity}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Eligibility Card */}
                                <div className="lg:w-1/2 w-full">
                                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
                                        <div className="relative z-10">
                                            <h4 className="text-xl font-bold mb-6 flex items-center text-blue-300">
                                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Eligibility Checklist
                                            </h4>
                                            <ul className="space-y-4">
                                                {program.eligibility.map((req, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="text-gray-300 leading-snug">{req}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                                                <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-sm transition-colors">
                                                    Verify Eligibility
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Medication Management */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                        <div className="md:w-2/5 relative min-h-[300px]">
                            <img
                                src="/images/18557.jpg"
                                alt="Medication Management"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-green-900/60 flex items-center justify-center p-8">
                                <div className="text-center text-white">
                                    <svg className="w-16 h-16 mx-auto mb-4 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                    <h3 className="text-2xl font-berkshire">Medical Services</h3>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-3/5 p-10 md:p-14 bg-white">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Medication Management</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                For many clients, medication management is a vital tool for continuity of care.
                                Our licensed medical professionals will work with you to:
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Initiate or continue medications",
                                    "Monitor dosage & efficacy",
                                    "Ensure safety & compliance",
                                    "Collaborate on care plans"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700 font-medium">
                                        <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 text-xs">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/contact" className="inline-block border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-8 py-3 rounded-xl font-bold transition-all duration-300">
                                Schedule Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
