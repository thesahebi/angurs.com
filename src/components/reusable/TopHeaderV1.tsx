import { scrollToTheTopOfPage } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const TopHeaderV1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMenuItems, setExpandedMenuItems] = useState<string[]>([]);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
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

  const handleMouseEnter = (itemLabel: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setHoveredDropdown(itemLabel);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredDropdown(null);
    }, 200); // Increased delay to prevent flickering
    setHoverTimeout(timeout);
  };

  const handleNestedMouseEnter = (parentLabel: string, childLabel: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setHoveredDropdown(`${parentLabel}-${childLabel}`);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const navigationItems = [
    { path: "/", label: "Home" },
    {
      label: "Solutions",
      children: [
        { path: "/solutions/design-development", label: "Design & Development" },
        { path: "/solutions/cloud", label: "Cloud" },
        { path: "/solutions/virtualization", label: "Virtualization" },
        { path: "/solutions/backup", label: "Backup" },
        { path: "/solutions/networking", label: "Networking" },
        {
          label: "Automation",
          children: [
            { path: "/automation/devops", label: "DevOps" },
            { path: "/automation/it", label: "IT" },
          ]
        },
      ]
    },
    {
      label: "Resources",
      children: [
        { path: "/resources/blog", label: "Blog" },
        { path: "/resources/case-studies", label: "Case Studies" },
      ]
    },
    {
      label: "About Us",
      children: [
        { path: "/about", label: "About" },
        { path: "/about/careers", label: "Careers" },
      ]
    },
    { path: "/contact", label: "Contact Us" }
  ];


  const isActivePath = (path: unknown) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed mx-auto w-[100%] bg-[#0A0A0A]/95 backdrop-blur-md z-20 border-b border-[#1E293B]/50 shadow-lg">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 sm:h-12 md:h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              onClick={scrollToTheTopOfPage}
              className="flex items-center group transition-all duration-300 hover:scale-105"
              aria-label="Zivara - Go to homepage"
            >
              <div className="relative">
                <svg 
                  width="40" 
                  height="40" 
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#8B5CF6] opacity-0 group-hover:opacity-20 rounded-full blur-sm transition-opacity duration-300"></div>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="md:hidden p-3 text-[#F1F5F9] rounded-lg hover:bg-[#1E293B]/50 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50 transition-all duration-200 min-h-[44px] min-w-[44px]"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
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
          <nav className="hidden md:flex md:items-center md:justify-center md:space-x-4 lg:space-x-6">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`text-sm lg:text-base transition-all duration-300 relative px-3 py-2 rounded-lg ${isActivePath(item.path)
                        ? 'text-[#3b82f6] font-semibold bg-[#1E293B]/30 shadow-lg'
                        : "text-[#F1F5F9] hover:text-[#3b82f6] hover:bg-[#1E293B]/20"
                      }`}
                  >
                    {item.label}
                    {isActivePath(item.path) && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#3b82f6] rounded-full"></div>
                    )}
                  </Link>
                ) : (
                  <div
                    className="text-sm lg:text-base transition-all duration-300 relative cursor-pointer text-[#F1F5F9] hover:text-[#3b82f6] hover:bg-[#1E293B]/20 px-3 py-2 rounded-lg"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.label}
                    <svg className={`inline-block w-3 h-3 ml-1 transition-transform duration-200 ${hoveredDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}

                {/* Submenu */}
                {item.children && (
                  <div
                    className={`absolute left-0 top-full mt-1 bg-[#1E293B]/95 backdrop-blur-md rounded-xl shadow-2xl border border-[#1E293B]/50 pt-2 transition-all duration-200 z-50 ${
                      hoveredDropdown === item.label || hoveredDropdown?.startsWith(`${item.label}-`) ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ul className="py-2 w-48">
                      {item.children.map((child) => (
                        <li key={child.label} className="relative group">
                          {child.path ? (
                            <Link
                              to={child.path}
                              className="block px-4 py-2.5 text-sm text-[#F1F5F9] hover:bg-[#3b82f6]/10 hover:text-[#3b82f6] transition-all duration-200 rounded-lg mx-2"
                            >
                              {child.label}
                            </Link>
                          ) : (
                            <>
                              <div
                                className="block px-4 py-2.5 text-sm text-[#F1F5F9] hover:bg-[#3b82f6]/10 hover:text-[#3b82f6] transition-all duration-200 rounded-lg mx-2 cursor-pointer flex items-center justify-between"
                                onMouseEnter={() => handleNestedMouseEnter(item.label, child.label)}
                                onMouseLeave={handleMouseLeave}
                              >
                                <span>{child.label}</span>
                                <svg className="w-3 h-3 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                              {/* Nested Submenu */}
                              {child.children && (
                                <div
                                  className={`absolute left-full top-0 ml-1 bg-[#1E293B]/95 backdrop-blur-md rounded-xl shadow-2xl border border-[#1E293B]/50 pt-2 transition-all duration-200 z-50 ${
                                    hoveredDropdown === `${item.label}-${child.label}` ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-2 pointer-events-none'
                                  }`}
                                  onMouseEnter={() => handleNestedMouseEnter(item.label, child.label)}
                                  onMouseLeave={handleMouseLeave}
                                >
                                  <ul className="py-2 w-48">
                                    {child.children.map((nestedChild) => (
                                      <li key={nestedChild.label}>
                                        <Link
                                          to={nestedChild.path}
                                          className="block px-4 py-2.5 text-sm text-[#F1F5F9] hover:bg-[#3b82f6]/10 hover:text-[#3b82f6] transition-all duration-200 rounded-lg mx-2"
                                        >
                                          {nestedChild.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </>
                          )}
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
            ? 'text-[#3b82f6] font-semibold after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#3b82f6]'
            : "text-[#F1F5F9] hover:text-[#3b82f6]"
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
            ? 'text-[#3b82f6] font-semibold after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#3b82f6]'
            : "text-[#F1F5F9] hover:text-[#3b82f6]"
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
                    ? 'text-[#3b82f6] font-semibold after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#3b82f6]'
                    : "text-[#F1F5F9] hover:text-[#3b82f6]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav> */}

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center px-3 py-2 text-base font-semibold text-white border border-white/20 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/80"
              style={{ backgroundColor: '#1e40af' }}
              role="button"
            >
              <span className="relative z-10">Free Consulting</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-3 h-3 ml-1 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-10 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        
        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed top-14 left-0 right-0 bg-[#0A0A0A] backdrop-blur-md text-[#F1F5F9] shadow-2xl border-b border-[#1E293B]/50 transition-all duration-300 ease-in-out transform ${isMenuOpen
              ? "opacity-100 translate-y-0 h-[calc(100vh-56px)] z-20"
              : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          role="navigation"
          aria-label="Mobile navigation menu"
          aria-hidden={!isMenuOpen}
        >
          <nav className="px-4 py-4 overflow-y-auto h-full relative z-20">
            {navigationItems.map((item) => (
              <div key={item.label} className="mb-2">
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`block py-3 text-base px-4 rounded-xl transition-all duration-300 ${isActivePath(item.path)
                        ? "text-[#3b82f6] bg-[#1E293B]/30 font-semibold shadow-lg"
                        : "text-[#F1F5F9] hover:bg-[#1E293B]/20 hover:text-[#3b82f6]"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleMobileMenuItem(item.label)}
                      aria-expanded={expandedMenuItems.includes(item.label)}
                      aria-controls={`mobile-submenu-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center justify-between w-full py-4 text-base px-4 rounded-xl transition-all duration-300 text-[#F1F5F9] hover:bg-[#1E293B]/20 hover:text-[#3b82f6] min-h-[48px]"
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
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
                      <div 
                        id={`mobile-submenu-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                        className="ml-4 mt-2 space-y-1"
                        role="menu"
                        aria-label={`${item.label} submenu`}
                      >
                        {item.children.map((child) => (
                          <div key={child.label}>
                            {child.path ? (
                              <Link
                                to={child.path}
                                role="menuitem"
                                className="block py-3 text-sm px-4 rounded-lg transition-all duration-300 text-[#F1F5F9] hover:bg-[#1E293B]/20 hover:text-[#3b82f6] min-h-[44px]"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ) : (
                              <div>
                                <button
                                  onClick={() => toggleMobileMenuItem(`${item.label}-${child.label}`)}
                                  aria-expanded={expandedMenuItems.includes(`${item.label}-${child.label}`)}
                                  aria-controls={`mobile-submenu-${item.label.toLowerCase().replace(/\s+/g, '-')}-${child.label.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="flex items-center justify-between w-full py-3 text-sm px-4 rounded-lg transition-all duration-300 text-[#F1F5F9] hover:bg-[#1E293B]/20 hover:text-[#3b82f6] min-h-[44px]"
                                >
                                  <span>{child.label}</span>
                                  <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${
                                      expandedMenuItems.includes(`${item.label}-${child.label}`) ? 'rotate-180' : ''
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
                                {child.children && expandedMenuItems.includes(`${item.label}-${child.label}`) && (
                                  <div 
                                    id={`mobile-submenu-${item.label.toLowerCase().replace(/\s+/g, '-')}-${child.label.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="ml-4 mt-2 space-y-1"
                                    role="menu"
                                    aria-label={`${child.label} submenu`}
                                  >
                                    {child.children.map((nestedChild) => (
                                      <Link
                                        key={nestedChild.label}
                                        to={nestedChild.path}
                                        role="menuitem"
                                        className="block py-3 text-sm px-4 rounded-lg transition-all duration-300 text-[#F1F5F9] hover:bg-[#1E293B]/20 hover:text-[#3b82f6] min-h-[44px]"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        {nestedChild.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div className="p-4 mt-6">
              <Link
                to="/contact"
                className="group relative block w-full text-center px-4 py-2 text-base font-semibold text-white border border-white/20 rounded-lg sm:rounded-xl transition-all duration-300"
                style={{ backgroundColor: '#1e40af' }}
                role="button"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Free Consulting</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="w-3 h-3 ml-1 relative z-10 transition-transform duration-300 group-hover:translate-x-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default TopHeaderV1;
