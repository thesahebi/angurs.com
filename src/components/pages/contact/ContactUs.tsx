// ContactForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import PageHero from '../../reusable/PageHero';

export interface FormData {
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  message: string;
  success: boolean;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<string>('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: EmailResponse = await response.json();

      if (response.ok) {
        setSubmitStatus('Message sent successfully!');
        setFormData({ email: '', subject: '', message: '' });
      } else {
        setSubmitStatus(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('An error occurred. Please try again later.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCreateTicket = () => {
    window.open('https://www.angurs.com/ticketing', '_blank');
  };

  const handleCheckTicketStatus = () => {
    window.open('https://www.angurs.com/ticketing', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Get In Touch"
        subtitle="Let's start a conversation"
        description="Ready to transform your technology infrastructure? Our expert team is here to help you achieve your digital transformation goals. Reach out to us today."
        primaryButtonText="Start Your Project"
        primaryButtonLink="#contact-form"
        secondaryButtonText="View Our Services"
        secondaryButtonLink="/solutions/cloud"
        accentColor="#e95420"
        backgroundPattern="circuits"
        showGraph={true}
        graphType="network"
        isHomepage={false}
      />

      {/* Modern Support Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#e95420] to-orange-500 rounded-2xl mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#1f2937] to-gray-600 bg-clip-text text-transparent mb-3">
                Support & Ticketing
              </h2>
              <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
                Get instant help with our advanced support system. Track, manage, and resolve issues efficiently.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Create Ticket Card */}
              <div className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#e95420]/20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e95420]/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#e95420] to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1f2937] mb-3">
                    Create New Ticket
                  </h3>
                  <p className="text-[#6b7280] mb-6 text-base leading-relaxed">
                    Submit detailed support requests with priority levels. Our expert team responds within 24 hours.
                  </p>
                  <button
                    onClick={handleCreateTicket}
                    className="w-full py-3 px-5 bg-gradient-to-r from-[#e95420] to-orange-500 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Create Ticket
                  </button>
                </div>
              </div>

              {/* Check Ticket Status Card */}
              <div className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1f2937] mb-3">
                    Track Progress
                  </h3>
                  <p className="text-[#6b7280] mb-6 text-base leading-relaxed">
                    Monitor your ticket status in real-time. Get updates and communicate with our support team.
                  </p>
                  <button
                    onClick={handleCheckTicketStatus}
                    className="w-full py-3 px-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Check Status
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Left Side - Get In Touch */}
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#e95420]/10 to-orange-500/10 rounded-full blur-xl"></div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-[#1f2937] via-gray-700 to-[#1f2937] bg-clip-text text-transparent mb-4 relative">
                    Get In Touch
                  </h2>
                  <p className="text-lg text-[#6b7280] leading-relaxed">
                    Ready to transform your technology infrastructure? Our expert team is here to help you achieve your digital transformation goals with cutting-edge solutions.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <div className="group flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 hover:border-[#e95420]/30 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#e95420] to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1f2937] mb-1">Email Us</h3>
                      <p className="text-[#6b7280] text-base">support@angurs.com</p>
                    </div>
                  </div>

                  <div className="group flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 hover:border-[#e95420]/30 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#e95420] to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1f2937] mb-1">Response Time</h3>
                      <p className="text-[#6b7280] text-base">Within 24 hours</p>
                    </div>
                  </div>

                  <div className="group flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 hover:border-[#e95420]/30 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#e95420] to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1f2937] mb-1">Support</h3>
                      <p className="text-[#6b7280] text-base">24/7 Technical Support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Send us a message */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e95420]/5 via-orange-500/5 to-[#e95420]/5 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#e95420] to-orange-500 rounded-2xl mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#1f2937] to-gray-600 bg-clip-text text-transparent mb-3">
                      Send us a message
                    </h2>
                    <p className="text-[#6b7280] text-base">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="group">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-base font-semibold text-[#1f2937]"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 text-base bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-[#e95420] focus:ring-4 focus:ring-[#e95420]/20 transition-all duration-300 placeholder-gray-400"
                        placeholder="name@gmail.com"
                        required
                      />
                    </div>
                    <div className="group">
                      <label
                        htmlFor="subject"
                        className="block mb-2 text-base font-semibold text-[#1f2937]"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-3 text-base bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-[#e95420] focus:ring-4 focus:ring-[#e95420]/20 transition-all duration-300 placeholder-gray-400"
                        placeholder="Let us know how we can help you"
                        required
                      />
                    </div>
                    <div className="group">
                      <label
                        htmlFor="message"
                        className="block mb-2 text-base font-semibold text-[#1f2937]"
                      >
                        Your message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-4 text-lg bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-[#e95420] focus:ring-4 focus:ring-[#e95420]/20 transition-all duration-300 placeholder-gray-400 resize-none"
                        placeholder="Tell us about your project requirements..."
                        rows={6}
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 px-6 text-lg font-bold text-center text-white rounded-2xl bg-gradient-to-r from-[#e95420] to-orange-500 hover:from-orange-600 hover:to-orange-700 focus:ring-4 focus:outline-none focus:ring-[#e95420]/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      disabled={isSubmitting}
                    >
                     {isSubmitting ? (
                       <div className="flex items-center justify-center space-x-2">
                         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                         <span>Sending...</span>
                       </div>
                     ) : (
                       'Send Message'
                     )}
                    </button>
                    
                    {submitStatus && (
                      <div className={`mt-6 p-6 rounded-2xl border-2 backdrop-blur-sm ${
                        submitStatus.includes('successfully') 
                          ? 'bg-green-50/80 text-green-800 border-green-200 shadow-lg' 
                          : 'bg-red-50/80 text-red-800 border-red-200 shadow-lg'
                      }`}>
                        <div className="flex items-center space-x-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            submitStatus.includes('successfully') ? 'bg-green-500' : 'bg-red-500'
                          }`}>
                            {submitStatus.includes('successfully') ? (
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            )}
                          </div>
                          <span className="text-base font-semibold">{submitStatus}</span>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;