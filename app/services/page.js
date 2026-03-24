"use client";

import { useEffect } from 'react';
import Link from 'next/link';

export default function Services() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.getElementById(hash.substring(1));
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
    }, []);

    const substancePrograms = [
    {
        id: "php",
        title: "Partial Hospitalization Program",
        subtitle: "Level II",
        description: `This is an orientation and stabilization phase for clients starting ‘Substance Use
Disorder’ care at Meaningful Minds. Clients receive education and information regarding
symptoms, effects, and treatment of mental illness, medications, substance abuse, co-
dependency and its effect on substance abuse treatment, the implementation of self-
care. Services provide individual and group substance abuse counseling, education on
the health consequences of substance abuse and dependence, and relapse prevention.
PHP’s typically run approximately 6 hours a day, five days a week.`,
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
        description: `Our Intensive Outpatient Program (also known as IOP) is designed to provide you with
the support you need as you begin steps towards independence. Whether you are
stepping down from your treatment or entering IOP as your initial step, our team will
create an individualized plan based around your needs during early recovery. IOP’s
typically run approximately 3-6 hours each day for one to three days a week.`,
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
        description: `Outpatient therapy (also known as OP) is the least intensive program we offer. The
outpatient treatment program provides regularly scheduled individual and group
counseling. The program includes education on mental health issues, recovery and
wellness. These comprehensive, coordinated, and defined services vary in the level of
intensity dependent on the individual needs of the client seeking services. The
outpatient program addresses a variety of needs, including, but not limited to, situational
stressors, family relations, interpersonal relations, mental health issues, life span
issues, psychiatric illnesses, addictions, and other traumas. OP’s typically run 3-4 hours
a day, one to three days a week.`,
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

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-left">
                    <h1 className="font-mono text-4xl sm:text-7xl font-extrabold text-left text-white">
                        SERVICES <span className="text-blue-400">& PROGRAMS</span>
                    </h1>
                </div>
            </section>

            {/* Services Overview Section */}
            <section id="services" className="py-12 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Title Banner */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-blue-500">What We Do Here</h2>
                    </div>

                    {/* Services Items */}
                    <div className="space-y-12">
                        {/* PHP */}
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-green-700 text-white px-6 md:px-16 lg:px-28 py-10 rounded-lg">
                            <div className="md:w-2/3">
                                <h3 className="text-2xl md:text-3xl font-bold text-green-500 mb-4">
                                    Partial Hospitalization Program (PHP)-Level II
                                </h3>
                                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                                    This is an orientation and stabilization phase for clients starting 'Substance Use Disorder' care at Meaningful Minds. Clients receive education and information regarding symptoms, effects, and treatment of mental illness, medications, substance abuse, co-dependency and its effect on substance abuse treatment, the implementation of self-care. Services provide individual and group substance abuse counseling, education on the health consequences of substance abuse and dependence, and relapse prevention. PHP's typically run approximately 6 hours a day, five days a week.
                                </p>
                            </div>
                            <div className="md:w-1/3 flex-shrink-0">
                                <img className="w-full rounded-2xl" src="/images/black-psychotherapist-taking-notes-session-with-her-patient.jpg" alt="PHP Program" />
                            </div>
                        </div>

                        {/* IOP */}
                        <div className="flex flex-col md:flex-row-reverse gap-8 items-center px-6 md:px-16 lg:px-28 py-10">
                            <div className="md:w-2/3">
                                <h3 className="text-2xl md:text-3xl font-bold text-green-500 mb-4">
                                    Intensive Outpatient (IOP)-Level 2.1
                                </h3>
                                <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                                    Our Intensive Outpatient Program (also known as IOP) is designed to provide you with the support you need as you begin steps towards independence. Whether you are stepping down from your treatment or entering IOP as your initial step, our team will create an individualized plan based around your needs during early recovery. IOP's typically run approximately 3-6 hours each day for one to three days a week.
                                </p>
                            </div>
                            <div className="md:w-1/3 flex-shrink-0">
                                <img className="w-full rounded-2xl" src="/images/people-enjoying-each-others-company-dinner-party.jpg" alt="IOP Program" />
                            </div>
                        </div>

                        {/* OP */}
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-green-700 text-white px-6 md:px-16 lg:px-28 py-16 rounded-lg">
                            <div className="md:w-2/3">
                                <h3 className="text-2xl md:text-3xl font-bold text-green-500 mb-4">
                                    Outpatient Program (OP)-Level I
                                </h3>
                                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                                    Outpatient therapy (also known as OP) is the least intensive program we offer. The outpatient treatment program provides regularly scheduled individual and group counseling. The program includes education on mental health issues, recovery and wellness. These comprehensive, coordinated, and defined services vary in the level of intensity dependent on the individual needs of the client seeking services. The outpatient program addresses a variety of needs, including, but not limited to, situational stressors, family relations, interpersonal relations, mental health issues, life span issues, psychiatric illnesses, addictions, and other traumas. OP's typically run 3-4 hours a day, one to three days a week.
                                </p>
                            </div>
                            <div className="md:w-1/3 flex-shrink-0">
                                <img className="w-full rounded-2xl" src="/images/IMG-20240919-WA0032.jpg" alt="OP Program" />
                            </div>
                        </div>

                        {/* All Programs Includes */}
                        <div className="px-6 md:px-16 lg:px-28 py-8 mt-4 text-gray-700">
                            <h3 className="text-xl md:text-2xl font-bold text-green-950 mb-6">
                                All Programs (PHP, IOP, and OP) Include:
                            </h3>
                            <ul className="space-y-3 text-sm md:text-base lg:text-lg">
                                <li className="flex items-start">
                                    <span className="text-green-600 font-bold mr-3">•</span>
                                    <span>Substance Use assessment, evaluation, and consultation</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 font-bold mr-3">•</span>
                                    <span>Group and individual counseling</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 font-bold mr-3">•</span>
                                    <span>Medication monitoring and education</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 font-bold mr-3">•</span>
                                    <span>Drug Testing and Reporting</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 font-bold mr-3">•</span>
                                    <span>Discharge planning</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 font-bold mr-3">•</span>
                                    <span>Light snacks and lunch</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 font-bold mr-3">•</span>
                                    <span>Transportation to and from the program</span>
                                </li>
                            </ul>
                        </div>

                        {/* Psychiatric Rehab Adults */}
                        <div className="flex flex-col md:flex-row-reverse gap-8 items-start px-6 md:px-16 lg:px-28 py-10 mt-8">
                            <div className="md:w-2/3">
                                <h3 className="text-2xl md:text-3xl font-bold text-green-500 mb-4">
                                    Psychiatric Rehabilitation Program-Adults
                                </h3>
                                <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                                    Psychiatric rehabilitation for adults is a comprehensive approach to helping individuals with mental illness to achieve their goals and lead fulfilling lives. The aim of psychiatric rehabilitation is to help individuals with mental illness to develop skills and strategies for managing their symptoms, improving their quality of life, and achieving their personal goals.
                                </p>
                                <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                                    Psychiatric rehabilitation programs typically involve a range of services, including social support, vocational training, resource linkage, skill building, and educational programs. The focus is on helping individuals to build a support system, develop coping strategies, and learn new skills that will enable them to function more effectively in their daily lives.
                                </p>
                                <p className="font-bold text-gray-800 mb-4">Individual & Group Rehabilitation Activities are designed to reduce functional behavioral impairments and develop and/or restore skills in a variety of areas, including:</p>
                                <ul className="space-y-2 text-sm md:text-base text-gray-700 ml-4">
                                    <li>• Self-Care Skills</li>
                                    <li>• Independent Living Skills</li>
                                    <li>• Social/Interactive Skills</li>
                                    <li>• Anger Management Skills</li>
                                    <li>• Employment goals</li>
                                    <li>• Symptom Management</li>
                                    <li>• Accessing Community Resources</li>
                                    <li>• Personal Safety</li>
                                    <li>• Maintaining Boundaries</li>
                                </ul>
                                <p className="font-bold text-gray-800 mt-6 mb-4">To Meet Eligibility Requirements An Individual Must Be:</p>
                                <ul className="space-y-2 text-sm md:text-base text-gray-700 ml-4">
                                    <li>• 18 or older</li>
                                    <li>• Actively participating in mental health treatment</li>
                                    <li>• Referred by a Licensed Mental Health Professional</li>
                                    <li>• Diagnosed with a qualified behavioral health diagnosis</li>
                                    <li>• Willing to participate in Psychiatric Rehabilitation Program services</li>
                                    <li>• A Medical Assistance recipient</li>
                                </ul>
                            </div>
                            <div className="md:w-1/3 flex-shrink-0">
                                <img className="w-full rounded-2xl" src="/images/IMG-20240919-WA0135.jpg" alt="Adult PRP" />
                            </div>
                        </div>

                        {/* Psychiatric Rehab Minors */}
                        <div className="flex flex-col md:flex-row gap-8 items-start bg-green-700 text-white px-6 md:px-16 lg:px-28 py-16 rounded-lg">
                            <div className="md:w-2/3">
                                <h3 className="text-2xl md:text-3xl font-bold text-green-500 mb-4">
                                    Psychiatric Rehabilitation Program-Minors
                                </h3>
                                <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-6">
                                    Psychiatric Rehabilitation Program for Children and Adolescents are designed to complement, support and strengthen the mental health (Therapy and Psychiatry) services the child is already receiving. Trained rehabilitation staff provide a combination of individual and group rehabilitation activities at the child's home and/or other appropriate community locations.
                                </p>
                                <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-6">
                                    On Site (facility-based) and Off Site (community-based) services are family focused, individualized and based on the child's and the family's strengths and resilience. Specific rehabilitation goals are established, which target identified needs based on information from the referring mental health professional, a comprehensive assessment and meetings with the child and his/her family.
                                </p>
                                <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-6">
                                    PRP staff routinely evaluate progress with each child and their parent/guardian/support team and provide monthly summary reports to the primary therapist and other mental health professionals working with the child.
                                </p>
                                <p className="font-bold mb-4">Individual & Group Rehabilitation Activities are designed to reduce functional behavioral impairments and develop and/or restore age-appropriate skills in a variety of areas, including:</p>
                                <ul className="space-y-2 text-sm md:text-base ml-4">
                                    <li>• Self Care Skills</li>
                                    <li>• Semi-Independent Living Skills</li>
                                    <li>• Social/Interactive Skills</li>
                                    <li>• Anger Management Skills</li>
                                    <li>• Symptom Management</li>
                                    <li>• Accessing Community Resources</li>
                                    <li>• Personal Safety</li>
                                    <li>• Maintaining Age-Appropriate Boundaries</li>
                                    <li>• Time Management</li>
                                </ul>
                                <p className="font-bold mt-6 mb-4">To Meet Eligibility Requirements A Child Must Be:</p>
                                <ul className="space-y-2 text-sm md:text-base ml-4">
                                    <li>• 5 – 17 years old</li>
                                    <li>• Actively participating in mental health treatment</li>
                                    <li>• Referred by a Licensed Mental Health Professional</li>
                                    <li>• Diagnosed with a behavioral health diagnosis</li>
                                    <li>• Willing to participate in Psychiatric Rehabilitation Program services</li>
                                    <li>• A Medical Assistance recipient</li>
                                </ul>
                            </div>
                            <div className="md:w-1/3 flex-shrink-0">
                                <img className="w-full rounded-2xl" src="/images/IMG-20240919-WA0028.jpg" alt="Youth PRP" />
                            </div>
                        </div>

                        {/* Medication Management */}
                        <div className="flex flex-col md:flex-row-reverse gap-8 items-start px-6 md:px-16 lg:px-28 py-10 mt-8">
                            <div className="md:w-2/3">
                                <h3 className="text-2xl md:text-3xl font-bold text-green-500 mb-4">
                                    Medication Management
                                </h3>
                                <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                                    For many clients with mental health or co-occurring disorders, medication management may be a necessary tool for continuity of care.
                                </p>
                                <p className="font-bold text-gray-800 mb-4">Clients in this program work with a licensed medical professional that can help:</p>
                                <ul className="space-y-2 text-sm md:text-base text-gray-700 ml-4 mb-6">
                                    <li>• Initiate medications for new clients</li>
                                    <li>• Provide continuation of ongoing medications</li>
                                    <li>• Ensure clients are following their medication regimen</li>
                                    <li>• Monitor dosage and efficacy of medications</li>
                                    <li>• Develop an individualized plan of care in conjunction with clients and other behavioral health professionals</li>
                                </ul>
                                <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                                    More importantly, our medication management services help individuals improve their quality of life. To learn more about medication management or other treatment programs, please contact Meaningful Minds Therapeutic Services today.
                                </p>
                            </div>
                            <div className="md:w-1/3 flex-shrink-0">
                                <img className="w-full rounded-2xl" src="/images/people-drinking-kombucha-gathering.jpg" alt="Medication Management" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        
        </div>
    );
}
