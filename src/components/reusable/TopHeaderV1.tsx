import { scrollToTheTopOfPage } from "@/lib/utils";
import logo1 from "../../assets/imgs/ZivaraSymbol.svg";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const TopHeaderV1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMenuItems, setExpandedMenuItems] = useState<string[]>([]);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileMenuItem = (itemLabel: string) => {
    setExpandedMenuItems(prev => 
      prev.includes(itemLabel) 
        ? prev.filter(item => item !== itemLabel)
        : [...prev, itemLabel]
    );
  };

  const navigationItems = [
    { path: "/", label: "Home" },
    {
      label: "Solutions",
      children: [
        { path: "/solutions/cloud", label: "Cloud" },
        { path: "/solutions/virtualization", label: "Virtualization" },
        { path: "/solutions/backup", label: "Backup" },
        { path: "/solutions/networking", label: "Networking" },
      ]
    },
    {
      label: "About Us",
      children: [
        { path: "/about/our-company", label: "Our Company" },
        { path: "/about/capabilities", label: "Our Capabilities" },
        { path: "/about/people", label: "Our People" },
        { path: "/about/careers", label: "Careers" },
      ]
    },
    {
      label: "Automation",
      children: [
        { path: "/automation/devops", label: "DevOps" },
        { path: "/automation/it", label: "IT" },
      ]
    },
    {
      label: "Resources",
      children: [
        { path: "/resources/blog", label: "Blog" },
        { path: "/resources/case-studies", label: "Case Studies" },
      ]
    },

    { path: "/contact", label: "Contact Us" }
  ];


  const isActivePath = (path: unknown) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed mx-auto w-[100%] bg-[#121212] z-20 border-b border-[#1E293B]">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 md:h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              onClick={scrollToTheTopOfPage}
              className={`flex`}
            >
              <img className="w-auto h-8 md:h-10" src={logo1} alt="Logo" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="md:hidden p-2 text-[#F1F5F9] rounded-md hover:bg-[#1E293B] focus:outline-none"
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
          <nav className="hidden md:flex md:items-center md:justify-center md:space-x-6 lg:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group pb-2">
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`text-sm transition-all duration-200 relative ${isActivePath(item.path)
                        ? 'text-[#e95420] font-semibold after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#e95420]'
                        : "text-[#F1F5F9] hover:text-[#e95420]"
                      }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div
                    className="text-sm transition-all duration-200 relative cursor-pointer text-[#F1F5F9] hover:text-[#e95420]"
                  >
                    {item.label}
                  </div>
                )}

                {/* Submenu */}
                {item.children && (
                  <div
                    className="absolute left-0 top-full hidden group-hover:block bg-white dark:bg-gray-800 rounded-lg shadow-lg pt-2"
                  >
                    <ul className="py-2 w-48">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            to={child.path}
                            className="block px-4 py-2 text-sm text-[#F1F5F9] hover:bg-[#1E293B]"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* <nav className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-8">
  {navigationItems.map((item) => (
    <div key={item.label} className="relative group">
      <Link
        to={item.path}
        className={`text-base transition-all duration-200 relative ${
          isActivePath(item.path)
            ? 'text-[#e95420] font-semibold after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#e95420]'
            : "text-[#F1F5F9] hover:text-[#e95420]"
        }`}
      >
        {item.label}
      </Link>

      {/* Submenu */}
          {/* {item.children && (
        <div
          className="absolute left-0 mt-2 hidden group-hover:block bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          onMouseEnter={(e) => e.currentTarget.classList.add("block")}
          onMouseLeave={(e) => e.currentTarget.classList.remove("block")}
        >
          <ul className="py-2 w-48">
            {item.children.map((child) => (
              <li key={child.label}>
                <Link
                  to={child.path}
                  className="block px-4 py-2 text-sm text-[#F1F5F9] hover:bg-[#1E293B]"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ))}
          </nav> } */}

          {/* <nav className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-8">
  {navigationItems.map((item) => (
    <div key={item.label} className="relative group">
      <Link
        to={item.path}
        className={`text-base transition-all duration-200 relative ${
          isActivePath(item.path)
            ? 'text-[#e95420] font-semibold after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#e95420]'
            : "text-[#F1F5F9] hover:text-[#e95420]"
        }`}
      >
        {item.label}
      </Link> */}

          {/* Submenu (only if children exist)
      {item.children && (
        <div className="absolute left-0 mt-2 hidden group-hover:block bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <ul className="py-2 w-48">
            {item.children.map((child) => (
              <li key={child.label}>
                <Link
                  to={child.path}
                  className="block px-4 py-2 text-sm text-[#F1F5F9] hover:bg-[#1E293B]"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ))}
          </nav> */}

          {/* <nav className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`text-base transition-all duration-200 relative ${
                  isActivePath(item.path)
                    ? 'text-[#e95420] font-semibold after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#e95420]'
                    : "text-[#F1F5F9] hover:text-[#e95420]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav> */}

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="tel:+16309234653"
              className="inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-[#1E293B] hover:text-[#F1F5F9] focus:text-[#F1F5F9] focus:bg-yellow-300 font-semibold text-[#F1F5F9] bg-[#e95420] rounded-full"
              role="button"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-12 left-0 right-0 bg-[#121212] text-[#F1F5F9] shadow-lg transition-all duration-300 ease-in-out transform ${isMenuOpen
              ? "opacity-100 translate-y-0 h-lvh z-20"
              : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
        >
          <nav className="px-4 py-2">
            {navigationItems.map((item) => (
              <div key={item.label}>
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`block py-3 text-base px-4 rounded-lg transition-all duration-200 ${isActivePath(item.path)
                        ? "text-[#3B82F6] bg-[#1E293B] font-semibold"
                        : "text-[#F1F5F9] hover:bg-[#1E293B] hover:text-[#3B82F6]"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleMobileMenuItem(item.label)}
                      className="flex items-center justify-between w-full py-3 text-base px-4 rounded-lg transition-all duration-200 text-[#F1F5F9] hover:bg-[#1E293B] hover:text-[#3B82F6]"
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          expandedMenuItems.includes(item.label) ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {item.children && expandedMenuItems.includes(item.label) && (
                      <div className="ml-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.path}
                            className="block py-2 text-sm px-4 rounded-lg transition-all duration-200 text-[#F1F5F9] hover:bg-[#1E293B] hover:text-[#3B82F6]"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div className="p-4">
              <a
                href="#"
                className="block w-full text-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-[#3B82F6] hover:text-[#F1F5F9] focus:text-[#F1F5F9] focus:bg-[#3B82F6] font-semibold ubun-text bg-[#1E293B] rounded-full border border-[#1E293B]"
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
