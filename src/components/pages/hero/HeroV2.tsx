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
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100">
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

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#e95420] to-[#d1451a] rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full opacity-10 animate-pulse delay-2000"></div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p ref={taglineRef} className="inline-flex px-6 py-3 text-sm font-medium text-[#1f2937] bg-white border border-gray-200 rounded-full shadow-sm backdrop-blur-sm">
              ✨ Trusted source of integration
            </p>
            <h1 ref={titleRef} className="mt-8 text-5xl font-bold leading-tight text-[#1f2937] sm:text-6xl sm:leading-tight lg:text-7xl lg:leading-tight">
              Building Smarter Solutions with{' '}
              <span className="bg-gradient-to-r from-[#e95420] to-[#d1451a] bg-clip-text text-transparent">
                Angurs
              </span>
            </h1>
            <p ref={subtitleRef} className="mt-6 text-xl text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
              Transform your business with cutting-edge cloud infrastructure, automation solutions, and scalable technology that grows with you.
            </p>

            <div className="mt-12 flex justify-center">
              <div className="relative group">
                <button
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#1f2937] border-2 border-gray-200 hover:border-[#e95420] rounded-xl transition-all duration-200 hover:text-[#e95420]"
                >
                  Solutions
                  <svg className={`w-5 h-5 ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                <div 
                  className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 z-50 ${
                    isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div className="p-2">
                    {solutions.map((solution) => (
                      <a
                        key={solution.name}
                        href={solution.href}
                        className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 group/item"
                      >
                        <div className="text-2xl mr-4 group-hover/item:scale-110 transition-transform duration-200">
                          {solution.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-[#1f2937] group-hover/item:text-[#e95420] transition-colors duration-200">
                            {solution.name}
                          </div>
                          <div className="text-sm text-[#6b7280]">
                            {solution.description}
                          </div>
                        </div>
                        <svg className="w-5 h-5 text-[#6b7280] group-hover/item:text-[#e95420] group-hover/item:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    ))}
                  </div>
                  
                  {/* Footer */}
                  <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
                    <a
                      href="#features"
                      className="text-sm font-medium text-[#e95420] hover:text-[#d1451a] transition-colors duration-200"
                    >
                      View All Solutions →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1f2937]">500+</div>
                <div className="text-sm text-[#6b7280] mt-1">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1f2937]">99.9%</div>
                <div className="text-sm text-[#6b7280] mt-1">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1f2937]">24/7</div>
                <div className="text-sm text-[#6b7280] mt-1">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1f2937]">5+</div>
                <div className="text-sm text-[#6b7280] mt-1">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default HeroV2;