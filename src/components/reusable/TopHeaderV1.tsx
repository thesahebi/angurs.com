import { scrollToTheTopOfPage } from "@/lib/utils";
import logo1 from "../../assets/imgs/Angurs1.svg";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const TopHeaderV1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationItems = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/about", label: "About" },
    { path: "/blogs", label: "Blog" },
    { path: "/contact", label: "Contact Us" }
  ];

  const isActivePath = (path: unknown) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed mx-auto w-[100%] bg-white z-20 dark:bg-main-bg">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              onClick={scrollToTheTopOfPage}
              className={`flex`}
            >
              <img className="w-auto h-12 lg:h-16" src={logo1} alt="Logo" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="lg:hidden p-2 text-black dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`text-base transition-all duration-200 relative ${
                  isActivePath(item.path)
                    ? 'text-[#e95420] font-semibold after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#e95420]'
                    : "text-black dark:text-white hover:text-[#e95420] dark:hover:text-[#e95420]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <a
              href="tel:+16309234653"
              className="inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-black hover:text-white focus:text-black focus:bg-yellow-300 font-semibold text-white bg-[#e95420] rounded-full"
              role="button"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden absolute top-16 left-0 right-0 bg-ubun text-white dark:bg-main-bg shadow-lg transition-all duration-300 ease-in-out transform ${
            isMenuOpen
              ? "opacity-100 translate-y-0 h-lvh z-20"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <nav className="px-4 py-2">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`block py-3 text-base px-4 rounded-lg transition-all duration-200 ${
                  isActivePath(item.path)
                    ? "text-orange-400 bg-white font-semibold"
                    : "text-white hover:bg-white hover:text-orange-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="p-4">
              <a
                href="#"
                className="block w-full text-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-black hover:text-white focus:text-black focus:bg-yellow-300 font-semibold ubun-text bg-white rounded-full"
                role="button"
                onClick={() => setIsMenuOpen(false)}
              >
                Let's Talk
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default TopHeaderV1;
