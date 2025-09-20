import React, { useState, ChangeEvent, FormEvent } from 'react';

export interface FormData {
  fullName: string;
  businessEmail: string;
  companyName: string;
  message: string;
}

export interface EmailResponse {
  message: string;
  success: boolean;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<string>('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
      // Use Formspree for reliable email delivery
      const response = await fetch('https://formspree.io/f/xovnopdr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('Message sent successfully!');
        setFormData({ fullName: '', businessEmail: '', companyName: '', message: '' });
      } else {
        setSubmitStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('An error occurred. Please try again later.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A]" style={{ wordWrap: 'break-word' }}>
      {/* Hero Section - Contact Form */}
      <section className="pt-32 sm:pt-40 md:pt-48 lg:pt-[210px] pb-16 sm:pb-20 md:pb-24 lg:pb-32 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold lg:font-semibold mb-4 sm:mb-6 lg:leading-[90px]" style={{ color: '#3b82f6', wordWrap: 'break-word' }}>
                Your ideas matter
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold mb-4 sm:mb-6 text-[#e7e7e7] px-2" style={{ wordWrap: 'break-word' }}>
                let's talk about them. At Zivara, we make reaching out simple, stress-free, and always worth it
              </h2>
            </div>

            {/* Contact Form Card */}
            <div className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" role="form" aria-label="Contact form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="fullName" className="block mb-2 text-sm sm:text-base font-semibold text-[#e7e7e7]">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full p-3 sm:p-4 text-sm sm:text-base bg-[#0A0A0A] border-2 border-gray-600 rounded-xl sm:rounded-2xl focus:border-[#3b82f6] focus:ring-4 focus:ring-[#3b82f6]/20 transition-all duration-300 placeholder-gray-400 text-[#e7e7e7]"
                      placeholder="John Doe"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="businessEmail" className="block mb-2 text-sm sm:text-base font-semibold text-[#e7e7e7]">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="businessEmail"
                      name="businessEmail"
                      value={formData.businessEmail}
                      onChange={handleChange}
                      className="w-full p-3 sm:p-4 text-sm sm:text-base bg-[#0A0A0A] border-2 border-gray-600 rounded-xl sm:rounded-2xl focus:border-[#3b82f6] focus:ring-4 focus:ring-[#3b82f6]/20 transition-all duration-300 placeholder-gray-400 text-[#e7e7e7]"
                      placeholder="john@company.com"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="companyName" className="block mb-2 text-sm sm:text-base font-semibold text-[#e7e7e7]">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 text-sm sm:text-base bg-[#0A0A0A] border-2 border-gray-600 rounded-xl sm:rounded-2xl focus:border-[#3b82f6] focus:ring-4 focus:ring-[#3b82f6]/20 transition-all duration-300 placeholder-gray-400 text-[#e7e7e7]"
                    placeholder="Your Company Inc."
                    required
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm sm:text-base font-semibold text-[#e7e7e7]">
                    Message <span className="text-gray-500">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 text-sm sm:text-base bg-[#0A0A0A] border-2 border-gray-600 rounded-xl sm:rounded-2xl focus:border-[#3b82f6] focus:ring-4 focus:ring-[#3b82f6]/20 transition-all duration-300 placeholder-gray-400 resize-none text-[#e7e7e7]"
                    placeholder="Tell us about your virtualization needs..."
                    rows={4}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base font-semibold text-white rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: '#3b82f6' }}
                  disabled={isSubmitting}
                  aria-describedby={submitStatus ? "submit-status" : undefined}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Get Free Assessment'
                  )}
                </button>

                {submitStatus && (
                  <div 
                    id="submit-status"
                    role="alert"
                    aria-live="polite"
                    className={`mt-4 sm:mt-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 ${
                      submitStatus.includes('successfully') 
                        ? 'bg-green-50 text-green-800 border-green-200' 
                        : 'bg-red-50 text-red-800 border-red-200'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ${
                        submitStatus.includes('successfully') ? 'bg-green-500' : 'bg-red-500'
                      }`}>
                        {submitStatus.includes('successfully') ? (
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm sm:text-base font-semibold">{submitStatus}</span>
                    </div>
                  </div>
                )}
              </form>

              {/* Trust Badge */}
              <div className="mt-6 sm:mt-8 text-center">
                <p className="text-xs sm:text-sm text-[#e7e7e7]">
                  <span className="inline-flex items-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    SSL Secured | 24/7 Response Team
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Quick FAQ */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#e7e7e7] mb-4 sm:mb-6" style={{ wordWrap: 'break-word' }}>
              Common Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-3 sm:space-y-4">
              {/* FAQ Item 1 */}
              <div className="bg-[#1E293B] rounded-xl sm:rounded-2xl border border-white/10">
                <button className="w-full p-4 sm:p-6 text-left flex justify-between items-center hover:bg-[#1E293B]/80 transition-colors duration-300">
                  <h3 className="text-base sm:text-lg font-bold text-[#e7e7e7] pr-2" style={{ wordWrap: 'break-word' }}>
                    How fast can you start?
                  </h3>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#3b82f6] transform transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-[#e7e7e7] opacity-80" style={{ wordWrap: 'break-word' }}>
                    Assessment within 24 hours, projects in 1-2 weeks
                  </p>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-[#1E293B] rounded-xl sm:rounded-2xl border border-white/10">
                <button className="w-full p-4 sm:p-6 text-left flex justify-between items-center hover:bg-[#1E293B]/80 transition-colors duration-300">
                  <h3 className="text-base sm:text-lg font-bold text-[#e7e7e7] pr-2" style={{ wordWrap: 'break-word' }}>
                    What do I need for consultation?
                  </h3>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#3b82f6] transform transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-[#e7e7e7] opacity-80" style={{ wordWrap: 'break-word' }}>
                    Just your current setup and business goals
                  </p>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-[#1E293B] rounded-xl sm:rounded-2xl border border-white/10">
                <button className="w-full p-4 sm:p-6 text-left flex justify-between items-center hover:bg-[#1E293B]/80 transition-colors duration-300">
                  <h3 className="text-base sm:text-lg font-bold text-[#e7e7e7] pr-2" style={{ wordWrap: 'break-word' }}>
                    Emergency support available?
                  </h3>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#3b82f6] transform transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-[#e7e7e7] opacity-80" style={{ wordWrap: 'break-word' }}>
                    Yes! 24/7 emergency line, 15-min response
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ContactUs;