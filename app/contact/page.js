"use client";

import { useState } from 'react';
import { submitContactForm } from '@/lib/api';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            await submitContactForm(formData);
            setStatus({
                type: 'success',
                message: 'Thank you! Your message has been sent successfully.'
            });
            setFormData({ name: '', email: '', number: '', message: '' });
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Something went wrong. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[500px] flex items-center justify-center bg-green-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/black-psychotherapist-taking-notes-session-with-her-patient.jpg"
                        alt="Contact Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-blue-900/60"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-left">
                    <h1 className="font-mono text-4xl sm:text-7xl font-extrabold text-left text-white">
                        CONTACT <span className="text-blue-400">US</span>
                    </h1>
                   
                </div>
            </section>

            <section className="py-20 max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 md:items-start">
                    {/* Contact Info Column */}
                    <div className="md:w-1/2 space-y-8">
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
                                    <div className="bg-gray-100 p-3 rounded-lg group-hover:bg-green-100 transition-colors">
                                        <svg className="w-5 h-5 text-gray-600 group-hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-1">Clinic Address</p>
                                        <p className="text-gray-600 leading-relaxed font-geist-sans">606 Edmondson Ave Suite 200<br />Catonsville, MD 21228</p>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="bg-gray-100 p-3 rounded-lg group-hover:bg-green-100 transition-colors">
                                        <svg className="w-5 h-5 text-gray-600 group-hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-1">Direct Line</p>
                                        <a href="tel:410-449-3988" className="text-lg font-semibold text-green-700 hover:underline">410-449-3988</a>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="bg-gray-100 p-3 rounded-lg group-hover:bg-green-100 transition-colors">
                                        <svg className="w-5 h-5 text-gray-600 group-hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-1">Email Us</p>
                                        <a href="mailto:meaningfulmindsllc@gmail.com" className="text-gray-600 hover:text-green-700 break-all font-geist-sans">meaningfulmindsllc@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="md:w-1/2">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                            <h2 className="text-3xl font-berkshire text-gray-800 mb-2">Send us a Message</h2>
                            <p className="text-gray-500 mb-10 font-geist-sans">Fill out the form below and our team will get back to you within 24-48 hours.</p>

                            {status.message && (
                                <div className={`p-4 rounded-xl mb-8 flex items-center ${status.type === 'success' ? 'bg-green-50 text-green-800 border-l-4 border-green-500' : 'bg-red-50 text-red-800 border-l-4 border-red-500'}`}>
                                    {status.type === 'success' ? (
                                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                    <span className="font-medium font-geist-sans">{status.message}</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-gray-50 text-gray-900 p-4 rounded-xl border-2 border-gray-100 focus:border-green-500 focus:bg-white focus:outline-none transition-all duration-300 font-geist-sans"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="relative">
                                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-gray-50 text-gray-900 p-4 rounded-xl border-2 border-gray-100 focus:border-green-500 focus:bg-white focus:outline-none transition-all duration-300 font-geist-sans"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <label htmlFor="number" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="number"
                                        name="number"
                                        value={formData.number}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-50 text-gray-900 p-4 rounded-xl border-2 border-gray-100 focus:border-green-500 focus:bg-white focus:outline-none transition-all duration-300 font-geist-sans"
                                        placeholder="(410) 000-0000"
                                    />
                                </div>

                                <div className="relative">
                                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">How can we help?</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-50 text-gray-900 p-4 rounded-xl border-2 border-gray-100 focus:border-green-500 focus:bg-white focus:outline-none transition-all duration-300 resize-none font-geist-sans"
                                        placeholder="Tell us a little about what you're looking for..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg transform transition-all duration-300 hover:bg-green-700 hover:-translate-y-1 active:scale-95 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending Message...
                                        </>
                                    ) : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
