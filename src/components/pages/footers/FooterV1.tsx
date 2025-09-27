import { Link } from "react-router-dom";

import { useState } from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { scrollToTheTopOfPage } from "@/lib/utils";

const currentdata = new Date();
const year = currentdata.getFullYear();

const FooterV1 = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setSubmitStatus('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Use Formspree for newsletter subscription
      const response = await fetch('https://formspree.io/f/xovnopdr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          subject: 'Newsletter Subscription',
          message: `Newsletter subscription request from: ${email}`
        }),
      });

      if (response.ok) {
        setSubmitStatus('Successfully subscribed! Thank you.');
        setEmail('');
      } else {
        setSubmitStatus('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('An error occurred. Please try again later.');
      console.error('Error subscribing to newsletter:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#1f2937] via-gray-900 to-[#111827] text-[#e7e7e7] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" onClick={scrollToTheTopOfPage} className="inline-block group">
                <div className="flex items-center mb-6">
                  <div className="flex items-center">
                    <svg 
                      width="60" 
                      height="60" 
                      viewBox="0 0 120 120" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-all duration-300 group-hover:scale-110"
                    >
                      {/* Flowing connection lines */}
                      <path d="M20 20 Q60 40 100 20" stroke="#3B82F6" strokeWidth="3" fill="none" strokeLinecap="round"/>
                      <path d="M20 100 Q60 80 100 100" stroke="#3B82F6" strokeWidth="3" fill="none" strokeLinecap="round"/>
                      
                      {/* Main Z shape - bold and geometric */}
                      <path d="M25 25 L95 25 L25 95 L95 95" stroke="#3B82F6" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      
                      {/* Subtle flowing accent lines */}
                      <path d="M30 30 Q60 50 90 30" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6"/>
                      <path d="M30 90 Q60 70 90 90" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6"/>
                      
                      {/* Connection dots */}
                      <circle cx="25" cy="25" r="3" fill="#3B82F6"/>
                      <circle cx="95" cy="25" r="3" fill="#3B82F6"/>
                      <circle cx="25" cy="95" r="3" fill="#3B82F6"/>
                      <circle cx="95" cy="95" r="3" fill="#3B82F6"/>
                    </svg>
                    <div className="ml-4 flex flex-col">
                      <span className="text-xl sm:text-2xl font-bold text-[#e7e7e7] group-hover:text-white transition-colors duration-300 leading-tight">Zivara</span>
                      <span className="text-lg sm:text-xl font-semibold text-[#e7e7e7] group-hover:text-white transition-colors duration-300 leading-tight">Solutions</span>
                    </div>
                  </div>
                </div>
              </Link>
              
              <p className="text-[#e7e7e7] text-base leading-relaxed mb-6 max-w-sm">
                Expert Web Design and Development, Cloud solutions, Backup & Recovery, Networking, Microservices to help your business grow with confidence.
              </p>
              
              {/* Social Media */}
              <div className="flex items-center space-x-4">
                <Link
                  to="https://www.instagram.com/zivarasolutions/"
                  onClick={scrollToTheTopOfPage}
                  className="group flex items-center justify-center w-12 h-12 bg-[#1E293B]/50 rounded-xl hover:bg-[#3b82f6] transition-all duration-300 hover:scale-110"
                  title="Visit our Instagram"
                >
                  <FaInstagram className="text-lg group-hover:text-white transition-colors" />
                </Link>
                <Link
                  to="/"
                  onClick={scrollToTheTopOfPage}
                  className="group flex items-center justify-center w-12 h-12 bg-[#1E293B]/50 rounded-xl hover:bg-[#3b82f6] transition-all duration-300 hover:scale-110"
                  title="Visit our Homepage"
                >
                  <FaLinkedin className="text-lg group-hover:text-white transition-colors" />
                </Link>
                <Link
                  to="https://x.com/ZivaraSolutions"
                  onClick={scrollToTheTopOfPage}
                  className="group flex items-center justify-center w-12 h-12 bg-[#1E293B]/50 rounded-xl hover:bg-[#3b82f6] transition-all duration-300 hover:scale-110"
                  title="Visit our X page"
                >
                  <FaTwitter className="text-lg group-hover:text-white transition-colors" />
                </Link>
                <Link
                  to="/"
                  onClick={scrollToTheTopOfPage}
                  className="group flex items-center justify-center w-12 h-12 bg-[#1E293B]/50 rounded-xl hover:bg-[#3b82f6] transition-all duration-300 hover:scale-110"
                  title="Visit our homepage"
                >
                  <FaGithub className="text-lg group-hover:text-white transition-colors" />
                </Link>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-lg font-bold text-[#e7e7e7] mb-6 relative">
                Solutions
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#3b82f6]"></div>
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/solutions/cloud"
                    className="group flex items-center text-[#e7e7e7] hover:text-[#e7e7e7] transition-colors duration-200"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Cloud Migration
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/virtualization"
                    className="group flex items-center text-[#e7e7e7] hover:text-[#e7e7e7] transition-colors duration-200"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Virtualization
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/backup"
                    className="group flex items-center text-[#e7e7e7] hover:text-[#e7e7e7] transition-colors duration-200"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Backup & Recovery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/networking"
                    className="group flex items-center text-[#e7e7e7] hover:text-[#e7e7e7] transition-colors duration-200"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Networking
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold text-[#e7e7e7] mb-6 relative">
                Services
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#3b82f6]"></div>
              </h3>
              <ul className="space-y-4">
                {/* <li>
                  <Link
                    to="/automation"
                    className="group flex items-center text-[#e7e7e7] hover:text-[#e7e7e7] transition-colors duration-200"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Automation
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="/automation/devops"
                    className="group flex items-center text-[#e7e7e7] hover:text-[#e7e7e7] transition-colors duration-200"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    DevOps
                  </Link>
                </li>
                <li>
                  <Link
                    to="/automation/it"
                    className="group flex items-center text-[#e7e7e7] hover:text-[#e7e7e7] transition-colors duration-200"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    IT Automation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="group flex items-center text-[#e7e7e7] hover:text-[#e7e7e7] transition-colors duration-200"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-[#e7e7e7] mb-6 relative">
                Get In Touch
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#3b82f6]"></div>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <FaEnvelope className="w-5 h-5 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:Support@zivara.io"
                    className="text-[#e7e7e7] hover:text-[#e7e7e7] transition-colors duration-200"
                  >
                    Support@zivara.io
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <FaPhone className="w-5 h-5 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:+16309234653"
                    className="text-[#e7e7e7] hover:text-[#e7e7e7] transition-colors duration-200"
                  >
                    +1 (630) 923-4653
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="w-5 h-5 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                  <span className="text-[#e7e7e7]">
                    1355 N Sandburg Ter 2307<br />
                    Chicago, IL 60610
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-12">
            <div className="bg-gradient-to-r from-[#3b82f6]/10 to-[#3b82f6]/10 rounded-2xl p-8 border border-white/10">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-[#e7e7e7] mb-4">
                  Stay Updated with Our Latest Insights
                </h3>
                <p className="text-[#e7e7e7] mb-6">
                  Get the latest technology trends, case studies, and industry insights delivered to your inbox.
                </p>
                <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 sm:py-4 bg-[#1E293B]/50 border border-white/20 rounded-xl text-[#e7e7e7] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent text-base min-h-[48px]"
                      required
                    />
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 text-base text-white border border-white/20 font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1e40af] focus:outline-none focus:ring-2 focus:ring-white/80"
                      style={{ backgroundColor: '#1e40af' }}
                    >
                      {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                      <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                  {submitStatus && (
                    <div className={`mt-3 text-sm text-center ${
                      submitStatus.includes('Successfully') 
                        ? 'text-green-400' 
                        : 'text-red-400'
                    }`}>
                      {submitStatus}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div>
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-[#e7e7e7] text-sm">
                © {year} Zivara Solutions LLC. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <Link
                  to="/privacy"
                  className="text-[#e7e7e7] hover:text-[#e7e7e7] transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-[#e7e7e7] hover:text-[#e7e7e7] transition-colors duration-200"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/cookies"
                  className="text-[#e7e7e7] hover:text-[#e7e7e7] transition-colors duration-200"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterV1;
