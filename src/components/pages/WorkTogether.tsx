import  { useEffect, useRef } from 'react';
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
            color: '#e95420',
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
          <div className="inline-flex px-4 py-2 text-sm font-medium text-[#e95420] bg-[#e95420]/10 rounded-full mb-8">
            🤝 Partnership
          </div>
          <p 
            ref={textRef}
            className="lg:text-6xl md:text-5xl text-4xl font-bold text-[#1f2937] leading-tight overflow-hidden"
          >
            Let's <span className="ubun-text inline-block bg-gradient-to-r from-[#e95420] to-[#d1451a] bg-clip-text text-transparent">Team Up</span>{" "}
            <br />
            <span className="ubun-text inline-block">Together, We'll Build Something Amazing</span>
          </p>
          <p className="mt-8 text-xl text-[#6b7280] max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let's collaborate and create solutions that drive real results and sustainable growth.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16309234653"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#e95420] hover:bg-[#d1451a] rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#1f2937] border-2 border-gray-200 hover:border-[#e95420] rounded-xl transition-all duration-200 hover:text-[#e95420]"
            >
              Schedule Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkTogether;