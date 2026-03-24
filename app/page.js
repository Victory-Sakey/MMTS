"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaHeart, FaComments } from "react-icons/fa";

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: "How do I know I need treatment?",
      answer: `It's likely that if you're reading this, you or someone you know is tired of the way your life is now. Addiction can take many forms and is often difficult to identify within oneself.
You may benefit from treatment if you fit any of the following criteria:
You've been unsuccessful in your attempts to quit on your own.
It's difficult to imagine how you will cope without drugs or alcohol.

Your addiction has negatively affected areas in your life such as job, relationships, or health.
The need for change is there, but you just don't know where to start.
You have experienced withdrawal symptoms when attempting to stop using.
The goal of treatment extends further than being physically clean and sober. The real purpose is to help you create a life where you no longer feel the need to use drugs and alcohol.`,
    },
    {
      id: 2,
      question: "How long will I need treatment?",
      answer: `One of the first things we emphasize in treating addiction is that every individual's needs are different. There is not a set period that applies to everyone when it comes to treatment. Studies have found that those who spend three months or longer in treatment programs have better rates of long-term sobriety. We offer individualized treatment options depending on the need. When deciding how long to spend in treatment, it is helpful to consult with a professional.`,
    },
    {
      id: 3,
      question: "I struggle with mental health issues such as anxiety and depression in addition to my addiction. Am I able to receive the help I need?",
      answer: `The Substance Abuse and Mental Health Services Administration (SAMHSA) estimated that almost 8 million American adults battled both a mental health disorder and a substance use disorder, or co-occurring/dual diagnosis disorders. It is not uncommon for those struggling with addiction to also experience depression, anxiety, or trauma-related symptoms. In fact, many of our patients present with co-occurring or dual diagnosis conditions, which are addressed throughout treatment.`,
    },
    {
      id: 4,
      question: "Are PRP services voluntary?",
      answer: `Yes, all psych rehab services are voluntary, but a parent/ guardian may request that an individual participate.`,
    },
    {
      id: 5,
      question: "How can I enroll in PRP?",
      answer: `You can enroll in PRP by seeing a therapist, psychiatrist, or other licensed mental health professional and expressing interest in PRP services.`,
    },
    {
      id: 6,
      question: "What are the benefits of PRP?",
      answer: `PRP can help people manage the challenges of mental illness and life skills, such as understanding mental health disorders, medication management, and conflict resolution, behavior management and academic achievement.`,
    },
  ];

  return (
    <div className="home-page">
      {/* Welcome Banner */}
      <section
        id="welcome-banner"
        className="relative h-[60vh] md:h-[70vh] py-32 md:py-40 flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/images/people-meeting-support-group (1).jpg"
          alt="Hero Background"
          fill
          className="absolute inset-0 w-full h-full object-cover"
          priority
          quality={80}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-blue-900/60 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center flex flex-col items-center justify-center">
          <h1 
            className="sm:text-5xl text-3xl font-bold text-white drop-shadow-lg mb-6"
            style={{ fontFamily: 'var(--font-dancing-script)' }}
          >
            From Healing to <span className="text-blue-400 font-bold">Wholeness</span>
          </h1>
          <Link href="/contact">
            <button className="bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 hover:scale-105 transition-all duration-300 shadow-xl">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="about-welcome">
        <div className="about mx-auto container flex flex-col md:justify-center lg:justify-evenly p-5 lg:p-2 xl:p-20">
          <div className="about-1 p-5 text-center justify-center align-middle items-center flex flex-col">
            <h1 className="text-blue-500 text-5xl text-center pb-3 font-bold font-dancing">Welcome!</h1>
            <p
              className="text-gray-950 text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-sans w-full font-bold uppercase text-center"
              style={{ letterSpacing: ".1rem", wordSpacing: ".1rem" }}
            >
              Even the strongest people need a little bit of help to work through some of life's most challenging problems. Everyone has hurdles to overcome, and we'd love to help you along the way.
            </p>
            <Link href="/services">
              <button className="bg-blue-500 p-4 mt-8 w-[200px] text-white text-xs font-sans uppercase font-bold cursor-pointer hover:bg-blue-600 transition">
                Our Services
              </button>
            </Link>
          </div>
          <div className="about-2 align-middle items-center justify-center p-5">
            <p className="text-gray-500 font-sans text-[18px] w-full text-center">
              <b className="text-5xl">H</b>ere at Meaningful Minds Therapeutic Services, LLC, we realize that no two people are the same, and we tailor our services to meet specific needs for individuals, family or groups. We love helping people understand the things that are holding them back and/or down with an in-depth approach. After recognizing underlying factors, clients can fully realize their strengths and adjust certain behaviors and thoughts to see things in a different, healthier way.
            </p>
          </div>
        </div>
      </section>

      {/* Don't Wait Section */}
      <section id="getting-started">
        <h1 className="text-xl lg:text-2xl uppercase text-center text-gray-950 font-bold py-10">
          Don't wait to get the help you need
        </h1>
        <div className="about mx-auto container flex lg:flex-row flex-col-reverse md:justify-center lg:justify-center p-5 lg:p-8 xl:p-20">
          <div className="about-1 p-2 lg:p-5 lg:w-1/2 flex items-center justify-center">
            <img
              className="w-full h-auto object-cover"
              src="/images/IMG-20240919-WA0033.jpg"
              alt="Therapy Support"
            />
          </div>
          <div className="about-2 p-2 lg:p-5 pb-4 lg:w-1/2">
            <p className="text-gray-600 font-sans text-[18px] w-full text-left">
              <b className="text-5xl">O</b>ur practice specializes in helping people who are struggling with addiction, social and life skills, or behavior management. If you are trying to navigate these areas of life, we're confident that we have the experience to help you rediscover what brings happiness to your life. Through therapy, there is always a way to address the issues you face and learn coping strategies to help you both right now and in the future.
              <br />
              <br />
              Through therapy, we can get you on track to leading a happier, more fulfilling life by equipping you with the tools you need to more efficiently and confidently manage life's challenges.
              <br />
              <br />
              It is never too late to start living the life you've always wanted.
              <br />
              <br />
              If you're interested in becoming a better, happier, more fulfilled you, get started by reaching out today!
            </p>
            <div className="buttons mt-5 flex flex-col lg:flex-row gap-3 lg:gap-4">
              <div className="button-1 p-4 items-center flex border-2 border-gray-200">
                <FaHeart className="w-10 h-10 text-red-500 flex-shrink-0" />
                <h1 className="pl-3 uppercase font-bold text-xs lg:text-sm leading-tight">Always put desire above fear</h1>
              </div>
              <div className="button-2 flex p-4 items-center border-2 border-gray-200">
                <FaComments className="w-10 h-10 text-blue-500 flex-shrink-0" />
                <h1 className="pl-3 uppercase font-bold text-xs lg:text-sm leading-tight">Compassionate & Professional</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rates & Insurance Section */}
      <div className="overflow-hidden bg-white py-20 sm:pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="rates mt-2 text-3xl font-bold tracking-tight text-blue-500 sm:text-4xl">
                  Rates & Insurance
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Medicaid / Medical Assistance
                  <br />
                  Rates: Sliding scale offered
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative">
                    <dt className="inline font-semibold text-green-900">Any Other Questions?</dt>
                    <dd className="inline">
                      {" "}
                      Please contact us for any additional questions you may have. we look forward to hearing from you!
                    </dd>
                  </div>
                  <Link href="/contact">
                    <button className="bg-blue-500 p-4 mt-8 w-[200px] text-white text-xs font-sans uppercase font-bold hover:bg-green-900 cursor-pointer transition">
                      Contact Us
                    </button>
                  </Link>
                </dl>
              </div>
            </div>
            <div>
              <img
                src="/images/2148363603.jpg"
                alt="Therapy Services"
                className="w-[28rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[37rem] md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section id="faq" className="bg-white">
        <div className="faq container px-10 md:px-10 mx-auto pb-10">
          <h1 className="text-4xl text-blue-500 font-bold pb-10">Frequently asked questions</h1>
          <div className="faq-items mx-auto container space-y-0">
            {faqItems.map((item) => (
              <div key={item.id} className="faq-item border-t border-green-400">
                <div 
                  onClick={() => setOpenFAQ(openFAQ === item.id ? null : item.id)}
                  className="py-4 px-2 cursor-pointer hover:bg-gray-50 transition"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-[15px] md:text-[20px] text-blue-400 font-bold flex-1">
                      {item.question}
                    </h3>
                    <span className={`text-2xl font-bold text-blue-500 transition transform flex-shrink-0 ml-4 ${openFAQ === item.id ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </div>
                </div>
                {openFAQ === item.id && (
                  <div className="px-2 pb-4 bg-gray-50">
                    <p className="text-gray-500 md:text-[18px] text-[13px] whitespace-pre-line">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
