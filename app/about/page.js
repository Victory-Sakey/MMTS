import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-gray-900 overflow-hidden">
        <Image
          src="/images/african-american-wheelchair-user.jpg"
          alt="About Background"
          fill
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>

        <div className="relative z-20 max-w-5xl mx-auto px-4 text-left">
          <h1 className="font-mono text-4xl sm:text-7xl font-extrabold text-left text-white">
            ABOUT <span className="text-blue-400">US</span>
          </h1>
          
        
        </div>
      </section>

      {/* Mission Section */}
      <section className="lg:mt-10 mt-10">
        <div className="container mx-auto flex lg:flex-row flex-col bg-blue-200 lg:justify-evenly xl:p-20 p-5">
          <div className="p-5">
            <h2 className="font-bold text-5xl text-blue-500 pb-5 font-dancing">
              Our Mission
            </h2>
            <p className="lg:w-[500px] text-gray-900 text-xl">
              <b className="text-5xl">M</b>eaningful Minds Therapeutic Services is a change agent dedicated to improving the lives and social conditions for people with mental health, substance use and trauma-related challengesby promoting health, wellness and recovery in a meaningful way.
            </p>

            <Link href="/contact">
              <button className="bg-red-500 hover:bg-green-500 p-4 mt-8 w-[250px] text-white text-xs uppercase font-bold transition">
                Book An Appointment
              </button>
            </Link>
          </div>

          <div className="p-5">
            <img
              className="w-full rounded-[50px]"
              src="/images/people-meeting-support-group.jpg"
              alt="Our Mission"
            />
          </div>
        </div>

        {/* Story Section */}
        <div className="container mx-auto flex md:flex-row-reverse flex-col lg:justify-evenly p-5">
          <div className="p-5">
            <h2 className="text-5xl text-blue-500 pb-5 mt-12 font-dancing">
              Our Story
            </h2>

            <p className="lg:w-[700px] text-gray-900">
              <b className="text-5xl">M</b>eaningful Minds was born through the vision of founder Jahneen Keatz Onyemachi.
                    Jahneen had a vision to provide services to the community that speaks to the heart of
                    the people, not the cookie-cutter same way of doing things. She has over 15 years of
                    experience as a help agent serving our most vulnerable population that includes but not
                    limited to the elderly, children and family, single mothers and fathers, LGBTQ+ and our
                    returning citizens to society. Jahneen sees every individual as a human being and that
                    is the foundation of Meaningful Minds. Everyone deserves to be treated with dignity
                    and respect. You will always hear Jahneen say “put desire above fear”. She believes, “if
                    your desire to live better is stronger than your fear, it can and will happen”.
            
                    Our practice specializes in helping people who are struggling with addiction, social and
                    life skills, or behavior management. If you are trying to navigate these areas of life,
                    we’re confident that we have the experience to help you rediscover what brings
                    happiness to your life. Through our treatment services, there is always a way to address
                    the issues you face and learn coping strategies to help you both right now and in the
                    future. Our holistic approach will help get you on track to leading a happier, more
                    fulfilling life by equipping you with the tools you need to more efficiently and confidently
                    manage life’s challenges. It is never too late to start living the life you’ve always wanted.
                    Our goal is to take you from “healing to wholeness”. If you’re interested in becoming a
                    better, happier, more fulfilled you, get started by reaching out today!
            </p>

            <p className="text-sm mt-4">
              - Jahneen Keatz Onyemachi,{" "}
              <span className="font-bold">Founder / CEO</span>
            </p>
          </div>

          <div className="p-5">
            <img
              className="lg:w-[250px] md:w-[300px] rounded-[50px]"
              src="/images/f9d82190-a037-11ed-85e3-8bd5b2b54d4f.jpg"
              alt="Founder"
            />
          </div>
        </div>
      </section>

      {/* CTA Section
      <section className="py-20 bg-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/green-daisy-background-aesthetic-floral-letter-illustration-vector.png')] opacity-10 bg-cover bg-center"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl mb-8">
            Ready to rediscover your happiness?
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Get started by reaching out today!
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-green-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition"
          >
            Schedule Your Appointment
          </Link>
        </div>
      </section> */}
    </div>
  );
}