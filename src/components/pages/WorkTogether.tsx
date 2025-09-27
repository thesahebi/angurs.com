import  { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function WorkTogether() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !textRef.current) return;

    const ctx = gsap.context(() => {
      // Split the text into individual words
      const splitText = new SplitType(textRef.current!, {
        types: 'words',
        wordClass: 'word-reveal'
      });

      // Ensure initial state
      gsap.set(splitText.words, { 
        opacity: 0,
        y: 50
      });

      // Create the animation
      gsap.to(splitText.words, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      });

      // Add hover effect for accent text
      const accentWords = document.querySelectorAll('.ubun-text');
      accentWords.forEach(word => {
        word.addEventListener('mouseenter', () => {
          gsap.to(word, {
            scale: 1.05,
            color: '#3B82F6',
            duration: 0.3,
            ease: "power2.out"
          });
        });

        word.addEventListener('mouseleave', () => {
          gsap.to(word, {
            scale: 1,
            color: '',
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    });

    // Cleanup
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="waves" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 Q10 0 20 20 T40 20" stroke="#1f2937" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#waves)" />
        </svg>
      </div>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex px-4 py-2 text-sm font-medium text-primary bg-surface border border-surface rounded-full mb-8 md:mb-12">
            🤝 Partnership
          </div>
          <p 
            ref={textRef}
            className="lg:text-6xl md:text-5xl text-4xl font-bold text-primary leading-tight overflow-hidden"
          >
            Let's <span className="ubun-text inline-block bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">Team Up</span>{" "}
            <br />
            <span className="ubun-text inline-block">Together, We'll Build Something Amazing</span>
          </p>
          <p className="mt-8 text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let's collaborate and create solutions that drive real results and sustainable growth.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-stretch w-full max-w-2xl mx-auto">
            <a
              href="tel:+16309234653"
              className="btn-primary inline-flex items-center justify-center w-full sm:w-1/2 px-6 py-3 text-base font-semibold text-white border border-white/20 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/80"
              style={{ backgroundColor: '#1e40af' }}
            >
              Get Started
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center w-full sm:w-1/2 px-6 py-3 text-base font-semibold text-[#e7e7e7] border-2 border-[#1E293B] hover:border-[#3B82F6] rounded-xl transition-all duration-200 hover:text-[#3B82F6]"
            >
              Contact Us
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkTogether;