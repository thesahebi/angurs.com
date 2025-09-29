import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

function HeroV2() {
  // Add proper typing to the refs
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  


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
    <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh] xl:min-h-[90vh] flex items-center justify-center bg-[#0A0A0A] pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        {/* Therapeutic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#0A0A0A] to-[#1A1A1A]"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-[#3b82f6]/20 to-[#8B5CF6]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-[#8B5CF6]/15 to-[#3b82f6]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-[#3b82f6]/10 to-[#8B5CF6]/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3b82f6]/40 rounded-full animate-ping delay-300"></div>
          <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#8B5CF6]/50 rounded-full animate-ping delay-700"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#3b82f6]/30 rounded-full animate-ping delay-1000"></div>
        </div>

        <div className="relative px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 mx-auto max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl z-10 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center">
            <p ref={taglineRef} className="inline-flex px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full shadow-sm backdrop-blur-sm mb-6 sm:mb-4">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
              ✨ Your Digital Peace of Mind
            </p>
            <h1 ref={titleRef} className="hero-title text-primary">
              <span className="text-[#3B82F6]">Building Smarter AI Solutions with</span>
              <span className="relative block mt-1 sm:mt-2">
                <span className="bg-gradient-to-r from-white via-[#3b82f6] to-white bg-clip-text text-transparent">
                  Zivara
                </span>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#3b82f6] to-[#8B5CF6] rounded-full opacity-60"></div>
              </span>
            </h1>
            <p ref={subtitleRef} className="hero-description text-secondary max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
              We deliver expert web design, cloud solutions, backup & recovery, networking, automation, and microservices to help your business grow with confidence.
            </p>

            <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 flex justify-center">
              <Link
                to="/solutions/design-development"
                className="btn-primary inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 text-base font-semibold text-white bg-[#1e40af] border border-[#1e40af] rounded-lg sm:rounded-xl transition-all duration-200 hover:bg-[#1d4ed8] hover:border-[#1d4ed8] focus:outline-none focus:ring-2 focus:ring-[#1e40af]/50"
              >
                Our Solution
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

          </div>
        </div>

      </section>
  );
}

export default HeroV2;