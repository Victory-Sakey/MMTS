import { useState } from 'react';
import { submitContactForm } from '../services/api';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitStatus(null);
        setErrorMessage('');

        try {
            const response = await submitContactForm(formData);

            if (response.success) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    number: '',
                    message: ''
                });
            } else {
                setSubmitStatus('error');
                setErrorMessage(response.message || 'An error occurred. Please try again.');
            }
        } catch (error) {
            setSubmitStatus('error');
            if (error.response && error.response.data) {
                const errors = error.response.data.errors;
                if (errors) {
                    const errorMessages = Object.entries(errors)
                        .map(([field, messages]) => `${field}: ${messages.join(', ')}`)
                        .join('\n');
                    setErrorMessage(errorMessages);
                } else {
                    setErrorMessage(error.response.data.message || 'Failed to submit form. Please try again.');
                }
            } else {
                setErrorMessage('Network error. Please check your connection and try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-page min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-green-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/18593.jpg"
                        alt="Contact Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-blue-900/80"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <span className="text-green-300 font-bold tracking-widest uppercase mb-4 block animate-fade-in-up">Get in Touch</span>
                    <h1 className="text-5xl md:text-6xl font-berkshire text-white mb-6 animate-fade-in-up delay-100">
                        Top Rated Catonsville Therapist
                    </h1>
                    <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
                        We're here to listen. Whether you have questions or are ready to start your journey, reach out to us today.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-7xl mx-auto px-4 -mt-20 relative z-20 pb-20">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Card 1: Contact Info */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-500 transform hover:-translate-y-1 transition-transform duration-300">
                            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                                <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                Contact Info
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start group">
                                    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mr-4 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Visit Us</p>
                                        <p className="text-gray-800 font-medium">606 Edmondson Ave Suite 200</p>
                                        <p className="text-gray-800 font-medium">Catonsville, MD 21228</p>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mr-4 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Call Us</p>
                                        <a href="tel:410-449-3988" className="text-gray-800 font-medium hover:text-green-600 transition-colors">410-449-3988</a>
                                        <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-5pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mr-4 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Email Us</p>
                                        <a href="mailto:meaningfulmindsllc@gmail.com" className="text-gray-800 font-medium hover:text-green-600 transition-colors break-all">meaningfulmindsllc@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Emergency */}
                        <div className="bg-blue-600 rounded-2xl shadow-xl p-8 text-white transform hover:-translate-y-1 transition-transform duration-300">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                In Crisis?
                            </h3>
                            <p className="mb-4 text-blue-100">
                                If you or a loved one is experiencing a medical or mental health emergency, please call 911 immediately or visit the nearest emergency room.
                            </p>
                            <p className="font-bold border-t border-blue-500 pt-4 mt-4">
                                Suicide & Crisis Lifeline: <span className="text-white text-lg ml-1">988</span>
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-green-600">
                            <h2 className="text-3xl font-berkshire text-gray-800 mb-2">Send us a Message</h2>
                            <p className="text-gray-600 mb-8">Fill out the form below and we'll respond within 24 hours.</p>

                            {submitStatus === 'success' && (
                                <div className="mb-8 bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl flex items-center animate-fade-in-up">
                                    <svg className="w-6 h-6 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <h3 className="font-bold">Message Sent Successfully!</h3>
                                        <p className="text-sm">We'll be in touch with you shortly.</p>
                                    </div>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="mb-8 bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl flex items-center animate-fade-in-up">
                                    <svg className="w-6 h-6 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <h3 className="font-bold">Unable to Send Message</h3>
                                        <p className="text-sm whitespace-pre-line">{errorMessage}</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-gray-50 text-gray-900 p-4 rounded-xl border-2 border-gray-100 focus:border-green-500 focus:bg-white focus:outline-none transition-all duration-300"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="relative">
                                        <label htmlFor="number" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                                            Phone Number
                                        </label>
                                        <input
                                            type="number"
                                            id="number"
                                            name="number"
                                            value={formData.number}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-gray-50 text-gray-900 p-4 rounded-xl border-2 border-gray-100 focus:border-green-500 focus:bg-white focus:outline-none transition-all duration-300"
                                            placeholder="(000) 000-0000"
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-50 text-gray-900 p-4 rounded-xl border-2 border-gray-100 focus:border-green-500 focus:bg-white focus:outline-none transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="relative">
                                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                                        How can we help?
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full bg-gray-50 text-gray-900 p-4 rounded-xl border-2 border-gray-100 focus:border-green-500 focus:bg-white focus:outline-none transition-all duration-300"
                                        placeholder="Please tell us a little bit about what you're looking for..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full py-5 rounded-xl font-bold text-lg text-white shadow-lg transform transition-all duration-300 ${loading
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-green-600 hover:bg-green-700 hover:-translate-y-1 hover:shadow-xl'
                                        }`}
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending Message...
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
