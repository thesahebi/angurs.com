import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

function HeroV2() {
  // Add proper typing to the refs
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
  // State for dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Solutions data
  const solutions = [
    {
      name: "Cloud Solutions",
      description: "Scalable cloud infrastructure",
      href: "/#/solutions/cloud",
      icon: "☁️"
    },
    {
      name: "Backup Solutions",
      description: "Secure data protection",
      href: "/#/solutions/backup",
      icon: "💾"
    },
    {
      name: "Virtualization",
      description: "Efficient resource management",
      href: "/#/solutions/virtualization",
      icon: "🖥️"
    },
    {
      name: "Networking",
      description: "Robust network infrastructure",
      href: "/#/solutions/networking",
      icon: "🌐"
    }
  ];

  useEffect(() => {
    // Create a timeline for smooth sequential animations
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
        duration: 1
      }
    });

    // Initial setup - set elements to invisible
    gsap.set([titleRef.current, subtitleRef.current, taglineRef.current, buttonRef.current, imageRef.current], {
      opacity: 0,
      y: 50
    });

    // Animation sequence
    tl.fromTo(taglineRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.4"
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.4"
    )
    .fromTo(buttonRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.4"
    )
    .fromTo(imageRef.current,
      { opacity: 0, y: 50, scale: 1.2 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2 },
      "-=0.6"
    );

    // Handle button hover animations using GSAP instead of event listeners
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1,
        duration: 0.3
      });

      // Create hover effect using GSAP's from/to
      buttonRef.current.addEventListener('mouseenter', () => {
        gsap.to(buttonRef.current, {
          scale: 1.05,
          duration: 0.3
        });
      });

      buttonRef.current.addEventListener('mouseleave', () => {
        gsap.to(buttonRef.current, {
          scale: 1,
          duration: 0.3
        });
      });
    }

    // Cleanup function
    return () => {
      if (buttonRef.current) {
        const button = buttonRef.current;
        button.removeEventListener('mouseenter', () => {});
        button.removeEventListener('mouseleave', () => {});
      }
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh] xl:min-h-[90vh] flex items-center justify-center bg-[#0A0A0A]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1f2937" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Elements - Responsive */}
        <div className="absolute top-12 left-4 sm:top-16 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#e95420] to-[#d1451a] rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-24 right-8 sm:top-32 sm:right-16 w-6 h-6 sm:w-10 sm:h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-24 left-8 sm:bottom-32 sm:left-16 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full opacity-10 animate-pulse delay-2000"></div>

        <div className="relative px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 mx-auto max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl z-10">
          <div className="max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center">
            <p ref={taglineRef} className="inline-flex px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-[#e7e7e7] bg-[#1E293B] border border-[#1E293B] rounded-full shadow-sm backdrop-blur-sm mb-6 sm:mb-4">
              ✨ Trusted source of integration
            </p>
            <h1 ref={titleRef} className="hero-title text-primary">
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#3b82f6] bg-clip-text text-transparent">
                Building Smarter AI Solutions with
              </span>{' '}
              <span className="text-gray-200">
                Zivara
              </span>
            </h1>
            <p ref={subtitleRef} className="hero-description text-secondary max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
              Transform your business with cutting-edge cloud infrastructure, automation solutions, and scalable technology that grows with you.
            </p>

            <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 flex justify-center">
              <div className="relative group">
                <button
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsDropdownOpen(!isDropdownOpen);
                    }
                    if (e.key === 'Escape') {
                      setIsDropdownOpen(false);
                    }
                  }}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  aria-label="Solutions dropdown menu"
                  className="btn-primary inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 text-base font-semibold text-[#e7e7e7] border border-white/20 rounded-lg sm:rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/80"
                >
                  Solutions
                  <svg className={`w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu - Responsive */}
                <div 
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 sm:w-72 md:w-80 bg-[#1E293B] rounded-xl sm:rounded-2xl shadow-2xl border border-[#1E293B] overflow-hidden transition-all duration-300 z-50 ${
                    isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  role="menu"
                  aria-label="Solutions menu"
                  aria-hidden={!isDropdownOpen}
                >
                  <div className="p-1 sm:p-2">
                    {solutions.map((solution) => (
                      <a
                        key={solution.name}
                        href={solution.href}
                        role="menuitem"
                        aria-label={`${solution.name} - ${solution.description}`}
                        className="flex items-center p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-gray-700 transition-all duration-200 group/item"
                      >
                        <div className="text-lg sm:text-xl mr-2 sm:mr-3 group-hover/item:scale-110 transition-transform duration-200">
                          {solution.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-xs sm:text-sm text-[#e7e7e7] group-hover/item:text-[#3B82F6] transition-colors duration-200">
                            {solution.name}
                          </div>
                          <div className="text-xs text-[#e7e7e7]">
                            {solution.description}
                          </div>
                        </div>
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#e7e7e7] group-hover/item:text-[#3B82F6] group-hover/item:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    ))}
                  </div>
                  
                  {/* Footer */}
                  <div className="px-2 sm:px-3 py-1.5 sm:py-2 bg-[#1E293B] border-t border-[#1E293B]">
                    <a
                      href="#features"
                      className="text-xs font-medium text-[#3B82F6] hover:text-[#e7e7e7] transition-colors duration-200"
                    >
                      View All Solutions →
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}

export default HeroV2;