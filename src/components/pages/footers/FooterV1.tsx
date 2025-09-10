import { Link } from "react-router-dom";
import logo1 from "../../../assets/imgs/Angurs1.svg";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { scrollToTheTopOfPage } from "@/lib/utils";

const currentdata = new Date();
const year = currentdata.getFullYear();

const FooterV1 = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#1f2937] via-gray-900 to-[#111827] text-white overflow-hidden">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" onClick={scrollToTheTopOfPage} className="inline-block">
                <img className="w-auto h-16 mb-6" src={logo1} alt="Angurs Logo" />
              </Link>
              
              <p className="text-[#9ca3af] text-base leading-relaxed mb-6 max-w-sm">
                Transforming businesses through innovative cloud solutions, automation, and cutting-edge technology infrastructure.
              </p>
              
              {/* Social Media */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.instagram.com/angursofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl hover:bg-[#e95420] transition-all duration-300 hover:scale-110"
                  title="Follow us on Instagram"
                >
                  <FaInstagram className="text-lg group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/company/angurs-web-solutions/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl hover:bg-[#3b82f6] transition-all duration-300 hover:scale-110"
                  title="Connect on LinkedIn"
                >
                  <FaLinkedin className="text-lg group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://twitter.com/angurs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl hover:bg-[#1da1f2] transition-all duration-300 hover:scale-110"
                  title="Follow us on Twitter"
                >
                  <FaTwitter className="text-lg group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://github.com/angurs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl hover:bg-[#333] transition-all duration-300 hover:scale-110"
                  title="Check our GitHub"
                >
                  <FaGithub className="text-lg group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 relative">
                Solutions
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#e95420]"></div>
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/Solutions/Cloud"
                    className="group flex items-center text-[#9ca3af] hover:text-white transition-colors duration-200"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Cloud Migration
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Solutions/Virtualization"
                    className="group flex items-center text-[#9ca3af] hover:text-white transition-colors duration-200"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Virtualization
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Solutions/Backup"
                    className="group flex items-center text-[#9ca3af] hover:text-white transition-colors duration-200"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Backup & Recovery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Solutions/Networking"
                    className="group flex items-center text-[#9ca3af] hover:text-white transition-colors duration-200"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Networking
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 relative">
                Services
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#e95420]"></div>
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/Automation"
                    className="group flex items-center text-[#9ca3af] hover:text-white transition-colors duration-200"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Automation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Automation/DevOps"
                    className="group flex items-center text-[#9ca3af] hover:text-white transition-colors duration-200"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    DevOps
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Automation/IT"
                    className="group flex items-center text-[#9ca3af] hover:text-white transition-colors duration-200"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    IT Automation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="group flex items-center text-[#9ca3af] hover:text-white transition-colors duration-200"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 relative">
                Get In Touch
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#e95420]"></div>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <FaEnvelope className="w-5 h-5 text-[#e95420] mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:Support@angurs.com"
                    className="text-[#9ca3af] hover:text-white transition-colors duration-200"
                  >
                    Support@angurs.com
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <FaPhone className="w-5 h-5 text-[#e95420] mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:+16309234653"
                    className="text-[#9ca3af] hover:text-white transition-colors duration-200"
                  >
                    +1 (630) 923-4653
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="w-5 h-5 text-[#e95420] mt-0.5 flex-shrink-0" />
                  <span className="text-[#9ca3af]">
                    1355 N Sandburg Ter 2307<br />
                    Chicago, IL 60610
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-12">
            <div className="bg-gradient-to-r from-[#e95420]/10 to-[#3b82f6]/10 rounded-2xl p-8 border border-white/10">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Stay Updated with Our Latest Insights
                </h3>
                <p className="text-[#9ca3af] mb-6">
                  Get the latest technology trends, case studies, and industry insights delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#e95420] focus:border-transparent"
                  />
                  <button className="px-6 py-3 bg-[#e95420] hover:bg-[#d1451a] text-white font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center">
                    Subscribe
                    <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-[#9ca3af] text-sm">
                © {year} Angurs Solutions LLC. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <Link
                  to="/privacy"
                  className="text-[#9ca3af] hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-[#9ca3af] hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/cookies"
                  className="text-[#9ca3af] hover:text-white transition-colors duration-200"
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
