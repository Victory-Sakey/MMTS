import Link from "next/link";

export default function Home() {
  return (
    <div className="home-page">
      {/* Welcome Banner */}
      <section
        id="welcome-banner"
        className="relative bg-cover bg-center bg-no-repeat py-32 md:py-40"
        style={{
          backgroundImage: "url('/images/therapy-session-individual.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/85 to-blue-900/75" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-berkshire text-white mb-6 drop-shadow-lg animate-fade-in-up">
            Welcome to Meaningful Mind Therapeutic Services
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md animate-fade-in-up delay-100">
            Even the strongest people need a little bit of help to work through some of life’s most challenging problems.
          </p>

          <div className="mt-10 animate-fade-in-up delay-200">
            <Link
              href="/contact"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Schedule Your Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image */}
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/authentic-scene-young-person-undergoing-psychological-therapy.jpg"
                  alt="Therapy Session"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-green-100 rounded-2xl -z-0" />
            </div>

            {/* Text */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-berkshire text-gray-800 mb-6">
                From Healing to Wholeness
              </h2>

              <p className="text-lg text-gray-600 mb-6 font-geist-sans">
                Here at Meaningful Minds Therapeutic Services, LLC, we tailor care to each individual, family, or group using evidence-based approaches.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Compassionate, client-centered approach",
                  "Evidence-based therapeutic techniques",
                  "Safe and non-judgmental environment",
                  "Personalized care plans",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      ✓
                    </span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700"
              >
                Learn more about us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-green-100 text-green-700 font-semibold px-4 py-1 rounded-full text-sm mb-6">
            Compassionate & Professional
          </div>
          <h2 className="text-3xl md:text-5xl font-berkshire text-gray-800 mb-8 leading-tight">
            Always put desire above fear
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              Our practice specializes in helping people who are struggling with addiction, social and life skills, or behavior management. If you are trying to navigate these areas of life, we’re confident that we have the experience to help you rediscover what brings happiness to your life.
            </p>
            <p>
              Through therapy, there is always a way to address the issues you face and learn coping strategies to help you both right now and in the future. We can get you on track to leading a happier, more fulfilling life by equipping you with the tools you need to more efficiently and confidently manage life’s challenges.
            </p>
            <p className="font-semibold text-green-800 text-xl pt-2 font-berkshire">
              It is never too late to start living the life you’ve always wanted.
            </p>
            <p>
              If you’re interested in becoming a better, happier, more fulfilled you, get started by reaching out today!
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-berkshire text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive care for every stage of your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PHP */}
            <ServiceCard
              title="Partial Hospitalization Program (PHP)"
              image="/images/IMG-20240919-WA0028.jpg"
              href="/services#php"
              color="green"
            />

            {/* IOP */}
            <ServiceCard
              title="Intensive Outpatient Program (IOP)"
              image="/images/IMG-20240919-WA0037.jpg"
              href="/services#iop"
              color="blue"
            />

            {/* OP */}
            <ServiceCard
              title="Outpatient Program (OP)"
              image="/images/IMG-20240919-WA0135.jpg"
              href="/services#op"
              color="purple"
            />
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-block border-2 border-green-600 text-green-700 px-8 py-3 rounded-full font-bold hover:bg-green-600 hover:text-white transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to schedule your first appointment.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

/* Reusable Service Card */
function ServiceCard({ title, image, href, color }) {
  const colorClasses = {
    green: "border-green-500 text-green-600",
    blue: "border-blue-500 text-blue-600",
    purple: "border-purple-500 text-purple-600",
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl border-b-4 ${colorClasses[color].split(' ')[0]} overflow-hidden hover:scale-105 transition-transform duration-300`}>
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <Link
          href={href}
          className={`${colorClasses[color].split(' ')[1]} font-semibold hover:underline`}
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}
