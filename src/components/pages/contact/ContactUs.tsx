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
      />

      <section id="contact-form" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1f2937] mb-4">
                Send us a message
              </h2>
              <p className="text-lg text-[#6b7280]">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
        <form onSubmit={handleSubmit}  className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-[#1f2937]"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-[#1f2937] text-sm rounded-lg focus:ring-[#e95420] focus:border-[#e95420] block w-full p-3"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-[#1f2937]"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="block p-3 w-full text-sm text-[#1f2937] bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-[#e95420] focus:border-[#e95420]"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-[#1f2937]"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="block p-3 w-full text-sm text-[#1f2937] bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-[#e95420] focus:border-[#e95420]"
              placeholder="Tell us about your project requirements..."
              rows={5}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-8 text-lg font-medium text-center text-white rounded-lg sm:w-fit bg-[#e95420] hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 transition-colors"
            disabled={isSubmitting}
          >
           {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {submitStatus && (
            <div className={`mt-4 p-4 rounded-lg ${
              submitStatus.includes('successfully') 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {submitStatus}
            </div>
          )}
        </form>
          </div>
        </div>
      </section>
    </div>
  );
};


export default ContactUs;
